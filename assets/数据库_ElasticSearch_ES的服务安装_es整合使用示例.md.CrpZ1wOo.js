import{_ as n,o as a,c as t,am as p}from"./chunks/framework.CiF4W93w.js";const q=JSON.parse('{"title":"es整合使用示例","description":"","frontmatter":{"title":"es整合使用示例","excerpt":"摘要","date":"2024-12-24 00:49:26","updated":"2024-12-24 00:49:26"},"headers":[],"relativePath":"数据库/ElasticSearch/ES的服务安装/es整合使用示例.md","filePath":"数据库/ElasticSearch/ES的服务安装/es整合使用示例.md","lastUpdated":null}'),e={name:"数据库/ElasticSearch/ES的服务安装/es整合使用示例.md"};function o(l,s,u,i,r,d){return a(),t("div",null,[...s[0]||(s[0]=[p(`<h3 id="es-整合使用示例" tabindex="-1">ES 整合使用示例 <a class="header-anchor" href="#es-整合使用示例" aria-label="Permalink to &quot;ES 整合使用示例&quot;">​</a></h3><p>Spring Data Elasticsearch是Spring提供的一种以Spring Data风格来操作数据存储的方式，它可以避免编写大量的样板代码。</p><h4 id="常用注解" tabindex="-1">常用注解 <a class="header-anchor" href="#常用注解" aria-label="Permalink to &quot;常用注解&quot;">​</a></h4><p>常用注解说明如下：</p><table tabindex="0"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>注解名称</td><td>作用</td><td>参数说明</td></tr><tr><td><a href="/java/Document.html">@Document</a></td><td>用于标识映射到Elasticsearch文档上的领域对象</td><td>indexName：索引库的名字，MySQL中数据库的概念</td></tr><tr><td><a href="/java/Setting.html">@Setting</a></td><td>ES的配置注解</td><td>shards：默认分片数 <br>replicas：默认副本数量</td></tr><tr><td>@Id</td><td>用于标识文档的ID，文档可以认为是MySQL中表行的概念</td><td>无参数</td></tr><tr><td><a href="/java/Field.html">@Field</a></td><td>用于标识文档中的字段，可以认为是MySQL中列的概念</td><td>type：文档中字段的类型 <br>index：是否建立倒排索引 <br>store：是否进行存储 <br>analyzer：分词器的名称</td></tr></tbody></table><p>其中常用的FieldType类型有如下几种：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public enum FieldType {</span></span>
<span class="line"><span>	Auto(&quot;auto&quot;), //自动判断字段类型</span></span>
<span class="line"><span>	Text(&quot;text&quot;), //会进行分词并建了索引的字符类型</span></span>
<span class="line"><span>	Keyword(&quot;keyword&quot;), //不会进行分词建立索引的类型</span></span>
<span class="line"><span>	Long(&quot;long&quot;), //</span></span>
<span class="line"><span>	Integer(&quot;integer&quot;), //</span></span>
<span class="line"><span>	Short(&quot;short&quot;), //</span></span>
<span class="line"><span>	Byte(&quot;byte&quot;), //</span></span>
<span class="line"><span>	Double(&quot;double&quot;), //</span></span>
<span class="line"><span>	Float(&quot;float&quot;), //</span></span>
<span class="line"><span>	Date(&quot;date&quot;), //</span></span>
<span class="line"><span>	Boolean(&quot;boolean&quot;), //</span></span>
<span class="line"><span>	Object(&quot;object&quot;), //</span></span>
<span class="line"><span>	Nested(&quot;nested&quot;), //嵌套对象类型</span></span>
<span class="line"><span>	Ip(&quot;ip&quot;), //</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>继承ElasticsearchRepository接口可以获得常用的数据操作方法；</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240801005349.png" alt="image.png"></p><ul><li>可以使用衍生查询，在接口中直接指定查询方法名称便可查询，无需进行实现，如商品表中有商品名称、标题和关键字，直接定义以下查询，就可以对这三个字段进行全文搜索。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 商品ES操作类</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface EsProductRepository extends ElasticsearchRepository&lt;EsProduct, Long&gt; {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 搜索查询</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name              商品名称</span></span>
<span class="line"><span>     * @param subTitle          商品标题</span></span>
<span class="line"><span>     * @param keywords          商品关键字</span></span>
<span class="line"><span>     * @param page              分页信息</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Page&lt;EsProduct&gt; findByNameOrSubTitleOrKeywords(String name, String subTitle, String keywords, Pageable page);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>在编写衍生查询方法时，IDEA会提示对应字段，更多关键字可以参考<code>衍生查询关键字对照表</code>；</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240801005456.png" alt="image.png"></p><ul><li>通过<code>@Query</code>注解可以使用Elasticsearch的原生DSL语句进行查询；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 商品ES操作类</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface EsProductRepository extends ElasticsearchRepository&lt;EsProduct, Long&gt; {</span></span>
<span class="line"><span>    @Query(&quot;{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : &quot; ? 0&quot;}}}}&quot;)</span></span>
<span class="line"><span>    Page&lt;EsProduct&gt; findByName(String name, Pageable pageable);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="springdata-es-使用示例" tabindex="-1">SpringData ES 使用示例 <a class="header-anchor" href="#springdata-es-使用示例" aria-label="Permalink to &quot;SpringData ES 使用示例&quot;">​</a></h4><p>依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!--Elasticsearch相关依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-data-elasticsearch&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><ul><li>修改<code>application.yml</code>配置文件，在spring节点下添加Elasticsearch相关配置；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  data:</span></span>
<span class="line"><span>    elasticsearch:</span></span>
<span class="line"><span>      repositories:</span></span>
<span class="line"><span>        enabled: true # 开启ES仓库配置，自动为仓库接口生成实现类</span></span>
<span class="line"><span>  elasticsearch:</span></span>
<span class="line"><span>    uris: http://localhost:9200 # ES的连接地址及端口号</span></span></code></pre></div><p>实现商品搜索功能</p><p>添加商品文档对象<code>EsProduct</code>，不需要中文分词的字段设置成<code>Keyword</code>类型，需要中文分词的设置成<code>Text</code>类型，并设置分词器为<code>ik_max_word</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 搜索商品的信息</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@EqualsAndHashCode</span></span>
<span class="line"><span>@Document(indexName = &quot;pms&quot;)</span></span>
<span class="line"><span>@Setting(shards = 1,replicas = 0)</span></span>
<span class="line"><span>public class EsProduct implements Serializable {</span></span>
<span class="line"><span>    private static final long serialVersionUID = -1L;</span></span>
<span class="line"><span>    @Id</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    @Field(type = FieldType.Keyword)</span></span>
<span class="line"><span>    private String productSn;</span></span>
<span class="line"><span>    private Long brandId;</span></span>
<span class="line"><span>    @Field(type = FieldType.Keyword)</span></span>
<span class="line"><span>    private String brandName;</span></span>
<span class="line"><span>    private Long productCategoryId;</span></span>
<span class="line"><span>    @Field(type = FieldType.Keyword)</span></span>
<span class="line"><span>    private String productCategoryName;</span></span>
<span class="line"><span>    private String pic;</span></span>
<span class="line"><span>    @Field(analyzer = &quot;ik_max_word&quot;,type = FieldType.Text)</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    @Field(analyzer = &quot;ik_max_word&quot;,type = FieldType.Text)</span></span>
<span class="line"><span>    private String subTitle;</span></span>
<span class="line"><span>    @Field(analyzer = &quot;ik_max_word&quot;,type = FieldType.Text)</span></span>
<span class="line"><span>    private String keywords;</span></span>
<span class="line"><span>    private BigDecimal price;</span></span>
<span class="line"><span>    private Integer sale;</span></span>
<span class="line"><span>    private Integer newStatus;</span></span>
<span class="line"><span>    private Integer recommandStatus;</span></span>
<span class="line"><span>    private Integer stock;</span></span>
<span class="line"><span>    private Integer promotionType;</span></span>
<span class="line"><span>    private Integer sort;</span></span>
<span class="line"><span>    @Field(type =FieldType.Nested)</span></span>
<span class="line"><span>    private List&lt;EsProductAttributeValue&gt; attrValueList;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>继承ElasticsearchRepository接口，这样就拥有了一些基本的Elasticsearch数据操作方法，同时定义了一个衍生查询方法；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 商品ES操作类</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface EsProductRepository extends ElasticsearchRepository&lt;EsProduct, Long&gt; {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 搜索查询</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name              商品名称</span></span>
<span class="line"><span>     * @param subTitle          商品标题</span></span>
<span class="line"><span>     * @param keywords          商品关键字</span></span>
<span class="line"><span>     * @param page              分页信息</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Page&lt;EsProduct&gt; findByNameOrSubTitleOrKeywords(String name, String subTitle, String keywords, Pageable page);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>添加EsProductService，定义好ES的操作方法；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 商品搜索管理Service</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface EsProductService {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从数据库中导入所有商品到ES</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int importAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据id删除商品</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void delete(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据id创建商品</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    EsProduct create(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 批量删除商品</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void delete(List&lt;Long&gt; ids);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据关键字搜索名称或者副标题</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Page&lt;EsProduct&gt; search(String keyword, Integer pageNum, Integer pageSize);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>添加EsProductService接口的实现类EsProductServiceImpl；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 搜索商品管理Service实现类</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EsProductServiceImpl implements EsProductService {</span></span>
<span class="line"><span>    private static final Logger LOGGER = LoggerFactory.getLogger(EsProductServiceImpl.class);</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EsProductDao productDao;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EsProductRepository productRepository;</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int importAll() {</span></span>
<span class="line"><span>        List&lt;EsProduct&gt; esProductList = productDao.getAllEsProductList(null);</span></span>
<span class="line"><span>        Iterable&lt;EsProduct&gt; esProductIterable = productRepository.saveAll(esProductList);</span></span>
<span class="line"><span>        Iterator&lt;EsProduct&gt; iterator = esProductIterable.iterator();</span></span>
<span class="line"><span>        int result = 0;</span></span>
<span class="line"><span>        while (iterator.hasNext()) {</span></span>
<span class="line"><span>            result++;</span></span>
<span class="line"><span>            iterator.next();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void delete(Long id) {</span></span>
<span class="line"><span>        productRepository.deleteById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public EsProduct create(Long id) {</span></span>
<span class="line"><span>        EsProduct result = null;</span></span>
<span class="line"><span>        List&lt;EsProduct&gt; esProductList = productDao.getAllEsProductList(id);</span></span>
<span class="line"><span>        if (esProductList.size() &gt; 0) {</span></span>
<span class="line"><span>            EsProduct esProduct = esProductList.get(0);</span></span>
<span class="line"><span>            result = productRepository.save(esProduct);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void delete(List&lt;Long&gt; ids) {</span></span>
<span class="line"><span>        if (!CollectionUtils.isEmpty(ids)) {</span></span>
<span class="line"><span>            List&lt;EsProduct&gt; esProductList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            for (Long id : ids) {</span></span>
<span class="line"><span>                EsProduct esProduct = new EsProduct();</span></span>
<span class="line"><span>                esProduct.setId(id);</span></span>
<span class="line"><span>                esProductList.add(esProduct);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            productRepository.deleteAll(esProductList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Page&lt;EsProduct&gt; search(String keyword, Integer pageNum, Integer pageSize) {</span></span>
<span class="line"><span>        Pageable pageable = PageRequest.of(pageNum, pageSize);</span></span>
<span class="line"><span>        return productRepository.findByNameOrSubTitleOrKeywords(keyword, keyword, keyword, pageable);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>添加EsProductController定义接口。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 搜索商品管理Controller</span></span>
<span class="line"><span> * @date 2018/6/19</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@Api(tags = &quot;EsProductController&quot;)</span></span>
<span class="line"><span>@Tag(name = &quot;EsProductController&quot;, description = &quot;搜索商品管理&quot;)</span></span>
<span class="line"><span>@RequestMapping(&quot;/esProduct&quot;)</span></span>
<span class="line"><span>public class EsProductController {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EsProductService esProductService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;导入所有数据库中商品到ES&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/importAll&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;Integer&gt; importAllList() {</span></span>
<span class="line"><span>        int count = esProductService.importAll();</span></span>
<span class="line"><span>        return CommonResult.success(count);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;根据id删除商品&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/delete/{id}&quot;, method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;Object&gt; delete(@PathVariable Long id) {</span></span>
<span class="line"><span>        esProductService.delete(id);</span></span>
<span class="line"><span>        return CommonResult.success(null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;根据id批量删除商品&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/delete/batch&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;Object&gt; delete(@RequestParam(&quot;ids&quot;) List&lt;Long&gt; ids) {</span></span>
<span class="line"><span>        esProductService.delete(ids);</span></span>
<span class="line"><span>        return CommonResult.success(null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;根据id创建商品&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/create/{id}&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;EsProduct&gt; create(@PathVariable Long id) {</span></span>
<span class="line"><span>        EsProduct esProduct = esProductService.create(id);</span></span>
<span class="line"><span>        if (esProduct != null) {</span></span>
<span class="line"><span>            return CommonResult.success(esProduct);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return CommonResult.failed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;简单搜索&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/search/simple&quot;, method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;CommonPage&lt;EsProduct&gt;&gt; search(@RequestParam(required = false) String keyword,</span></span>
<span class="line"><span>                                                      @RequestParam(required = false, defaultValue = &quot;0&quot;) Integer pageNum,</span></span>
<span class="line"><span>                                                      @RequestParam(required = false, defaultValue = &quot;5&quot;) Integer pageSize) {</span></span>
<span class="line"><span>        Page&lt;EsProduct&gt; esProductPage = esProductService.search(keyword, pageNum, pageSize);</span></span>
<span class="line"><span>        return CommonResult.success(CommonPage.restPage(esProductPage));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="衍生查询关键字对照表" tabindex="-1">衍生查询关键字对照表 <a class="header-anchor" href="#衍生查询关键字对照表" aria-label="Permalink to &quot;衍生查询关键字对照表&quot;">​</a></h4><table tabindex="0"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>Keyword</td><td>Sample</td><td>Elasticsearch Query String</td></tr><tr><td>And</td><td>findByNameAndPrice</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;name&quot; ] } }, { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;price&quot; ] } } ] } }}</td></tr><tr><td>Or</td><td>findByNameOrPrice</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;should&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;name&quot; ] } }, { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;price&quot; ] } } ] } }}</td></tr><tr><td>Is</td><td>findByName</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;name&quot; ] } } ] } }}</td></tr><tr><td>Not</td><td>findByNameNot</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must_not&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?&quot;, &quot;fields&quot; : [ &quot;name&quot; ] } } ] } }}</td></tr><tr><td>Between</td><td>findByPriceBetween</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?, &quot;to&quot; : ?, &quot;include_lower&quot; : true, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>LessThan</td><td>findByPriceLessThan</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : null, &quot;to&quot; : ?, &quot;include_lower&quot; : true, &quot;include_upper&quot; : false } } } ] } }}</td></tr><tr><td>LessThanEqual</td><td>findByPriceLessThanEqual</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : null, &quot;to&quot; : ?, &quot;include_lower&quot; : true, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>GreaterThan</td><td>findByPriceGreaterThan</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?, &quot;to&quot; : null, &quot;include_lower&quot; : false, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>GreaterThanEqual</td><td>findByPriceGreaterThan</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?, &quot;to&quot; : null, &quot;include_lower&quot; : true, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>Before</td><td>findByPriceBefore</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : null, &quot;to&quot; : ?, &quot;include_lower&quot; : true, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>After</td><td>findByPriceAfter</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?, &quot;to&quot; : null, &quot;include_lower&quot; : true, &quot;include_upper&quot; : true } } } ] } }}</td></tr><tr><td>Like</td><td>findByNameLike</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?*&quot;, &quot;fields&quot; : [ &quot;name&quot; ] }, &quot;analyze_wildcard&quot;: true } ] } }}</td></tr><tr><td>StartingWith</td><td>findByNameStartingWith</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;?*&quot;, &quot;fields&quot; : [ &quot;name&quot; ] }, &quot;analyze_wildcard&quot;: true } ] } }}</td></tr><tr><td>EndingWith</td><td>findByNameEndingWith</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;*?&quot;, &quot;fields&quot; : [ &quot;name&quot; ] }, &quot;analyze_wildcard&quot;: true } ] } }}</td></tr><tr><td>Contains/Containing</td><td>findByNameContaining</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;<em>?</em>&quot;, &quot;fields&quot; : [ &quot;name&quot; ] }, &quot;analyze_wildcard&quot;: true } ] } }}</td></tr><tr><td>In (when annotated as FieldType.Keyword)</td><td>findByNameIn(Collectionnames)</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;bool&quot; : {&quot;must&quot; : [ {&quot;terms&quot; : {&quot;name&quot; : [&quot;?&quot;,&quot;?&quot;]}} ] } } ] } }}</td></tr><tr><td>In</td><td>findByNameIn(Collectionnames)</td><td>{ &quot;query&quot;: {&quot;bool&quot;: {&quot;must&quot;: [{&quot;query_string&quot;:{&quot;query&quot;: &quot;&quot;?&quot; &quot;?&quot;&quot;, &quot;fields&quot;: [&quot;name&quot;]}}]}}}</td></tr><tr><td>NotIn (when annotated as FieldType.Keyword)</td><td>findByNameNotIn(Collectionnames)</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ {&quot;bool&quot; : {&quot;must_not&quot; : [ {&quot;terms&quot; : {&quot;name&quot; : [&quot;?&quot;,&quot;?&quot;]}} ] } } ] } }}</td></tr><tr><td>NotIn</td><td>findByNameNotIn(Collectionnames)</td><td>{&quot;query&quot;: {&quot;bool&quot;: {&quot;must&quot;: [{&quot;query_string&quot;: {&quot;query&quot;: &quot;NOT(&quot;?&quot; &quot;?&quot;)&quot;, &quot;fields&quot;: [&quot;name&quot;]}}]}}}</td></tr><tr><td>True</td><td>findByAvailableTrue</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;true&quot;, &quot;fields&quot; : [ &quot;available&quot; ] } } ] } }}</td></tr><tr><td>False</td><td>findByAvailableFalse</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;false&quot;, &quot;fields&quot; : [ &quot;available&quot; ] } } ] } }}</td></tr><tr><td>OrderBy</td><td>findByAvailableTrueOrderByNameDesc</td><td>{ &quot;query&quot; : { &quot;bool&quot; : { &quot;must&quot; : [ { &quot;query_string&quot; : { &quot;query&quot; : &quot;true&quot;, &quot;fields&quot; : [ &quot;available&quot; ] } } ] } }, &quot;sort&quot;:[{&quot;name&quot;:{&quot;order&quot;:&quot;desc&quot;}}] }</td></tr><tr><td>Exists</td><td>findByNameExists</td><td>{&quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;exists&quot;:{&quot;field&quot;:&quot;name&quot;}}]}}}</td></tr><tr><td>IsNull</td><td>findByNameIsNull</td><td>{&quot;query&quot;:{&quot;bool&quot;:{&quot;must_not&quot;:[{&quot;exists&quot;:{&quot;field&quot;:&quot;name&quot;}}]}}}</td></tr><tr><td>IsNotNull</td><td>findByNameIsNotNull</td><td>{&quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;exists&quot;:{&quot;field&quot;:&quot;name&quot;}}]}}}</td></tr><tr><td>IsEmpty</td><td>findByNameIsEmpty</td><td>{&quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;bool&quot;:{&quot;must&quot;:[{&quot;exists&quot;:{&quot;field&quot;:&quot;name&quot;}}],&quot;must_not&quot;:[{&quot;wildcard&quot;:{&quot;name&quot;:{&quot;wildcard&quot;:&quot;*&quot;}}}]}}]}}}</td></tr><tr><td>IsNotEmpty</td><td>findByNameIsNotEmpty</td><td>{&quot;query&quot;:{&quot;bool&quot;:{&quot;must&quot;:[{&quot;wildcard&quot;:{&quot;name&quot;:{&quot;wildcard&quot;:&quot;*&quot;}}}]}}}</td></tr></tbody></table>`,33)])])}const g=n(e,[["render",o]]);export{q as __pageData,g as default};
