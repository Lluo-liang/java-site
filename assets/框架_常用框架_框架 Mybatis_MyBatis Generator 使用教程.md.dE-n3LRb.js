import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const m=JSON.parse('{"title":"MyBatis Generator 使用教程","description":"","frontmatter":{"title":"MyBatis Generator 使用教程","excerpt":"摘要","date":"2025-06-20 06:51:32","updated":"2025-06-20 06:51:32"},"headers":[],"relativePath":"框架/常用框架/框架 Mybatis/MyBatis Generator 使用教程.md","filePath":"框架/常用框架/框架 Mybatis/MyBatis Generator 使用教程.md","lastUpdated":null}'),l={name:"框架/常用框架/框架 Mybatis/MyBatis Generator 使用教程.md"};function t(i,s,c,o,r,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>MyBatis Generator 使用教程</p><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>MyBatis Generator（简称MBG）是MyBatis官方提供的代码生成工具。可以通过数据库表直接生成实体类、单表CRUD代码、mapper.xml文件，从而解放我们的双手！</p><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><h4 id="集成mbg" tabindex="-1">集成MBG <a class="header-anchor" href="#集成mbg" aria-label="Permalink to &quot;集成MBG&quot;">​</a></h4><ul><li>在<code>pom.xml</code>中添加如下依赖，主要添加了MyBatis、PageHelper、Druid、MBG和MySQL驱动等依赖；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;!--SpringBoot整合MyBatis--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${mybatis-starter.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!--MyBatis分页插件--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;pagehelper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${pagehelper-starter.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!--集成druid连接池--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${druid.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!-- MyBatis 生成器 --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mybatis-generator-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${mybatis-generator.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!--Mysql数据库驱动--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${mysql-connector.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><ul><li>在<code>application.yml</code>中对数据源和MyBatis的<code>mapper.xml</code>文件路径进行配置，这里做个约定，MBG生成的放在<code>resources/com/**/mapper</code>目录下，自定义的放在<code>resources/dao</code>目录下；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 数据源配置</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/mall_tiny?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: root</span></span>
<span class="line"><span></span></span>
<span class="line"><span># MyBatis mapper.xml路径配置</span></span>
<span class="line"><span>mybatis:</span></span>
<span class="line"><span>  mapper-locations:</span></span>
<span class="line"><span>    - classpath:dao/*.xml</span></span>
<span class="line"><span>    - classpath*:com/**/mapper/*.xml</span></span></code></pre></div><ul><li>添加Java配置，用于扫码Mapper接口路径，这里还有个约定，MBG生成的放在<code>mapper</code>包下，自定义的放在<code>dao</code>包下。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description MyBatis配置类</span></span>
<span class="line"><span> * @date 2019/4/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@MapperScan({&quot;com.macro.mall.tiny.mbg.mapper&quot;,&quot;com.macro.mall.tiny.dao&quot;})</span></span>
<span class="line"><span>public class MyBatisConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="使用代码生成器" tabindex="-1">使用代码生成器 <a class="header-anchor" href="#使用代码生成器" aria-label="Permalink to &quot;使用代码生成器&quot;">​</a></h4><ul><li>在使用MBG生成代码前，我们还需要对其进行一些配置，首先在<code>generator.properties</code>文件中配置好数据库连接信息；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jdbc.driverClass=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>jdbc.connectionURL=jdbc:mysql://localhost:3306/mall_tiny?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span>jdbc.userId=root</span></span>
<span class="line"><span>jdbc.password=root</span></span></code></pre></div><ul><li>然后在<code>generatorConfig.xml</code>文件中对MBG进行配置，配置属性说明直接参考注释即可；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE generatorConfiguration</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;generatorConfiguration&gt;</span></span>
<span class="line"><span>    &lt;properties resource=&quot;generator.properties&quot;/&gt;</span></span>
<span class="line"><span>    &lt;context id=&quot;MySqlContext&quot; targetRuntime=&quot;MyBatis3&quot; defaultModelType=&quot;flat&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 配置SQL语句中的前置分隔符 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;beginningDelimiter&quot; value=&quot;\`&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 配置SQL语句中的后置分隔符 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;endingDelimiter&quot; value=&quot;\`&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 配置生成Java文件的编码 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;javaFileEncoding&quot; value=&quot;UTF-8&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--生成mapper.xml时覆盖原文件--&gt;</span></span>
<span class="line"><span>        &lt;plugin type=&quot;org.mybatis.generator.plugins.UnmergeableXmlMappersPlugin&quot; /&gt;</span></span>
<span class="line"><span>        &lt;!-- 为模型生成序列化方法--&gt;</span></span>
<span class="line"><span>        &lt;plugin type=&quot;org.mybatis.generator.plugins.SerializablePlugin&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 为生成的Java模型创建一个toString方法 --&gt;</span></span>
<span class="line"><span>        &lt;plugin type=&quot;org.mybatis.generator.plugins.ToStringPlugin&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--可以自定义生成model的代码注释--&gt;</span></span>
<span class="line"><span>        &lt;commentGenerator type=&quot;com.macro.mall.tiny.mbg.CommentGenerator&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 是否阻止生成的注释 --&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>            &lt;!-- 是否阻止生成的注释包含时间戳 --&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;suppressDate&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>            &lt;!-- 是否添加数据库表的备注信息 --&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;addRemarkComments&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/commentGenerator&gt;</span></span>
<span class="line"><span>        &lt;!-- 配置MBG要连接的数据库信息 --&gt;</span></span>
<span class="line"><span>        &lt;jdbcConnection driverClass=&quot;\${jdbc.driverClass}&quot;</span></span>
<span class="line"><span>                        connectionURL=&quot;\${jdbc.connectionURL}&quot;</span></span>
<span class="line"><span>                        userId=&quot;\${jdbc.userId}&quot;</span></span>
<span class="line"><span>                        password=&quot;\${jdbc.password}&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 解决mysql驱动升级到8.0后不生成指定数据库代码的问题 --&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;nullCatalogMeansCurrent&quot; value=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/jdbcConnection&gt;</span></span>
<span class="line"><span>        &lt;!-- 用于控制实体类的生成 --&gt;</span></span>
<span class="line"><span>        &lt;javaModelGenerator targetPackage=&quot;com.macro.mall.tiny.mbg.model&quot; targetProject=&quot;mall-tiny-generator\\src\\main\\java&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 用于控制Mapper.xml文件的生成 --&gt;</span></span>
<span class="line"><span>        &lt;sqlMapGenerator targetPackage=&quot;com.macro.mall.tiny.mbg.mapper&quot; targetProject=&quot;mall-tiny-generator\\src\\main\\resources&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 用于控制Mapper接口的生成 --&gt;</span></span>
<span class="line"><span>        &lt;javaClientGenerator type=&quot;XMLMAPPER&quot; targetPackage=&quot;com.macro.mall.tiny.mbg.mapper&quot;</span></span>
<span class="line"><span>                             targetProject=&quot;mall-tiny-generator\\src\\main\\java&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--生成全部表tableName设为%--&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;ums_admin&quot;&gt;</span></span>
<span class="line"><span>            &lt;generatedKey column=&quot;id&quot; sqlStatement=&quot;MySql&quot; identity=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;ums_role&quot;&gt;</span></span>
<span class="line"><span>            &lt;generatedKey column=&quot;id&quot; sqlStatement=&quot;MySql&quot; identity=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;ums_admin_role_relation&quot;&gt;</span></span>
<span class="line"><span>            &lt;generatedKey column=&quot;id&quot; sqlStatement=&quot;MySql&quot; identity=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;ums_resource&quot;&gt;</span></span>
<span class="line"><span>            &lt;generatedKey column=&quot;id&quot; sqlStatement=&quot;MySql&quot; identity=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;ums_resource_category&quot;&gt;</span></span>
<span class="line"><span>            &lt;generatedKey column=&quot;id&quot; sqlStatement=&quot;MySql&quot; identity=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>    &lt;/context&gt;</span></span>
<span class="line"><span>&lt;/generatorConfiguration&gt;</span></span></code></pre></div><ul><li>这里值得一提的是<code>targetRuntime</code>这个属性，设置不同的属性生成的代码和生成代码的使用方式会有所不同，常用的有<code>MyBatis3</code>和<code>MyBatis3DynamicSql</code>两种，这里使用的是<code>MyBatis3</code>；</li><li>如果你想自定义MBG生成的代码的话，可以自己写一个CommentGenerator来继承DefaultCommentGenerator，这里我自定义了实体类代码的生成，添加了Swagger注解的支持；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 自定义注释生成器</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class CommentGenerator extends DefaultCommentGenerator {</span></span>
<span class="line"><span>    private boolean addRemarkComments = false;</span></span>
<span class="line"><span>    private static final String EXAMPLE_SUFFIX=&quot;Example&quot;;</span></span>
<span class="line"><span>    private static final String MAPPER_SUFFIX=&quot;Mapper&quot;;</span></span>
<span class="line"><span>    private static final String API_MODEL_PROPERTY_FULL_CLASS_NAME=&quot;io.swagger.annotations.ApiModelProperty&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 设置用户配置的参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addConfigurationProperties(Properties properties) {</span></span>
<span class="line"><span>        super.addConfigurationProperties(properties);</span></span>
<span class="line"><span>        this.addRemarkComments = StringUtility.isTrue(properties.getProperty(&quot;addRemarkComments&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 给字段添加注释</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addFieldComment(Field field, IntrospectedTable introspectedTable,</span></span>
<span class="line"><span>                                IntrospectedColumn introspectedColumn) {</span></span>
<span class="line"><span>        String remarks = introspectedColumn.getRemarks();</span></span>
<span class="line"><span>        //根据参数和备注信息判断是否添加备注信息</span></span>
<span class="line"><span>        if(addRemarkComments&amp;&amp;StringUtility.stringHasValue(remarks)){</span></span>
<span class="line"><span>            //数据库中特殊字符需要转义</span></span>
<span class="line"><span>            if(remarks.contains(&quot;\\&quot;&quot;)){</span></span>
<span class="line"><span>                remarks = remarks.replace(&quot;\\&quot;&quot;,&quot;&#39;&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //给model的字段添加swagger注解</span></span>
<span class="line"><span>            field.addJavaDocLine(&quot;@ApiModelProperty(value = \\&quot;&quot;+remarks+&quot;\\&quot;)&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addJavaFileComment(CompilationUnit compilationUnit) {</span></span>
<span class="line"><span>        super.addJavaFileComment(compilationUnit);</span></span>
<span class="line"><span>        //只在model中添加swagger注解类的导入</span></span>
<span class="line"><span>        String fullyQualifiedName = compilationUnit.getType().getFullyQualifiedName();</span></span>
<span class="line"><span>        if(!fullyQualifiedName.contains(MAPPER_SUFFIX)&amp;&amp;!fullyQualifiedName.contains(EXAMPLE_SUFFIX)){</span></span>
<span class="line"><span>            compilationUnit.addImportedType(new FullyQualifiedJavaType(API_MODEL_PROPERTY_FULL_CLASS_NAME));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>最后我们写个Generator类用于生成代码，直接运行main方法即可生成所有代码；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 用于生产MBG的代码</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Generator {</span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        //MBG 执行过程中的警告信息</span></span>
<span class="line"><span>        List&lt;String&gt; warnings = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span>        //当生成的代码重复时，覆盖原代码</span></span>
<span class="line"><span>        boolean overwrite = true;</span></span>
<span class="line"><span>        //读取我们的 MBG 配置文件</span></span>
<span class="line"><span>        InputStream is = Generator.class.getResourceAsStream(&quot;/generatorConfig.xml&quot;);</span></span>
<span class="line"><span>        ConfigurationParser cp = new ConfigurationParser(warnings);</span></span>
<span class="line"><span>        Configuration config = cp.parseConfiguration(is);</span></span>
<span class="line"><span>        is.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DefaultShellCallback callback = new DefaultShellCallback(overwrite);</span></span>
<span class="line"><span>        //创建 MBG</span></span>
<span class="line"><span>        MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);</span></span>
<span class="line"><span>        //执行生成代码</span></span>
<span class="line"><span>        myBatisGenerator.generate(null);</span></span>
<span class="line"><span>        //输出警告信息</span></span>
<span class="line"><span>        for (String warning : warnings) {</span></span>
<span class="line"><span>            System.out.println(warning);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>一切准备就绪，执行main方法，生成代码结构信息如下。</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250525094224.png" alt="image.png"></p><h4 id="实现基本的crud操作" tabindex="-1">实现基本的CRUD操作 <a class="header-anchor" href="#实现基本的crud操作" aria-label="Permalink to &quot;实现基本的CRUD操作&quot;">​</a></h4><ul><li>查看下MBG生成的Mapper接口，发现已经包含了基本的CRUD方法，具体SQL实现也已经在mapper.xml中生成了，单表CRUD直接调用对应方法即可；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface UmsAdminMapper {</span></span>
<span class="line"><span>    long countByExample(UmsAdminExample example);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int deleteByExample(UmsAdminExample example);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int deleteByPrimaryKey(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int insert(UmsAdmin row);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int insertSelective(UmsAdmin row);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;UmsAdmin&gt; selectByExample(UmsAdminExample example);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    UmsAdmin selectByPrimaryKey(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int updateByExampleSelective(@Param(&quot;row&quot;) UmsAdmin row, @Param(&quot;example&quot;) UmsAdminExample example);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int updateByExample(@Param(&quot;row&quot;) UmsAdmin row, @Param(&quot;example&quot;) UmsAdminExample example);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int updateByPrimaryKeySelective(UmsAdmin row);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int updateByPrimaryKey(UmsAdmin row);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>生成代码中有一些Example类，比如UmsAdminExample，我们可以把它理解为一个条件构建器，用于构建SQL语句中的各种条件；</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250525095639.png" alt="image.png"></p><ul><li>利用好MBG生成的代码即可完成单表的CRUD操作了，比如下面最常见的操作。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Service实现类</span></span>
<span class="line"><span> * @date 2020/12/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UmsAdminMapper adminMapper;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UmsAdminDao adminDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void create(UmsAdmin entity) {</span></span>
<span class="line"><span>        adminMapper.insert(entity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void update(UmsAdmin entity) {</span></span>
<span class="line"><span>        adminMapper.updateByPrimaryKeySelective(entity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void delete(Long id) {</span></span>
<span class="line"><span>        adminMapper.deleteByPrimaryKey(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public UmsAdmin select(Long id) {</span></span>
<span class="line"><span>        return adminMapper.selectByPrimaryKey(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;UmsAdmin&gt; listAll(Integer pageNum, Integer pageSize) {</span></span>
<span class="line"><span>        PageHelper.startPage(pageNum, pageSize);</span></span>
<span class="line"><span>        return adminMapper.selectByExample(new UmsAdminExample());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="进阶使用" tabindex="-1">进阶使用 <a class="header-anchor" href="#进阶使用" aria-label="Permalink to &quot;进阶使用&quot;">​</a></h3><h4 id="条件查询" tabindex="-1">条件查询 <a class="header-anchor" href="#条件查询" aria-label="Permalink to &quot;条件查询&quot;">​</a></h4><blockquote><p>使用Example类构建查询条件 ↓</p></blockquote><p>按用户名和状态查询后台用户并按创建时间降序排列</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT</span></span>
<span class="line"><span>	id,</span></span>
<span class="line"><span>	username,</span></span>
<span class="line"><span>	PASSWORD,</span></span>
<span class="line"><span>	icon,</span></span>
<span class="line"><span>	email,</span></span>
<span class="line"><span>	nick_name,</span></span>
<span class="line"><span>	note,</span></span>
<span class="line"><span>	create_time,</span></span>
<span class="line"><span>	login_time,</span></span>
<span class="line"><span>STATUS </span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>	ums_admin </span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>	( username = &#39;macro&#39; AND STATUS IN ( 0, 1 ) ) </span></span>
<span class="line"><span>ORDER BY</span></span>
<span class="line"><span>	create_time DESC;</span></span></code></pre></div><p>代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Service实现类</span></span>
<span class="line"><span> * @date 2020/12/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;UmsAdmin&gt; list(Integer pageNum, Integer pageSize, String username, List&lt;Integer&gt; statusList) {</span></span>
<span class="line"><span>        PageHelper.startPage(pageNum, pageSize);</span></span>
<span class="line"><span>        UmsAdminExample umsAdminExample = new UmsAdminExample();</span></span>
<span class="line"><span>        UmsAdminExample.Criteria criteria = umsAdminExample.createCriteria();</span></span>
<span class="line"><span>        if(StrUtil.isNotEmpty(username)){</span></span>
<span class="line"><span>            criteria.andUsernameEqualTo(username);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        criteria.andStatusIn(statusList);</span></span>
<span class="line"><span>        umsAdminExample.setOrderByClause(&quot;create_time desc&quot;);</span></span>
<span class="line"><span>        return adminMapper.selectByExample(umsAdminExample);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="子查询" tabindex="-1">子查询 <a class="header-anchor" href="#子查询" aria-label="Permalink to &quot;子查询&quot;">​</a></h4><p>使用MBG生成的代码并不能实现子查询，需要自己手写SQL实现。</p><ul><li><code>按角色ID查询后台用户</code>为例，首先定义一个UmsAdminDao接口，这里约定下Dao里面存放的方法都是自定义SQL实现的方法，首先在Dao接口中添加<code>subList</code>方法；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description UmsAdmin自定义Dao</span></span>
<span class="line"><span> * @date 2022/11/22</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface UmsAdminDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;UmsAdmin&gt; subList(@Param(&quot;roleId&quot;) Long roleId);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>然后创建一个UmsAdminDao.xml文件，对应UmsAdminDao接口的SQL实现，写好对应的SQL实现，注意使用的<code>resultMap</code>MBG已经帮我们生成好了，无需自己手写。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;subList&quot; resultMap=&quot;com.macro.mall.tiny.mbg.mapper.UmsAdminMapper.BaseResultMap&quot;&gt;</span></span>
<span class="line"><span>    SELECT *</span></span>
<span class="line"><span>    FROM ums_admin</span></span>
<span class="line"><span>    WHERE id IN (SELECT admin_id FROM ums_admin_role_relation WHERE role_id = #{roleId})</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><h4 id="group和join查询" tabindex="-1">Group和Join查询 <a class="header-anchor" href="#group和join查询" aria-label="Permalink to &quot;Group和Join查询&quot;">​</a></h4><p>Group和Join查询也不能使用MBG生成的代码实现。</p><p>按角色统计后台用户数量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface UmsAdminDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;RoleStatDto&gt; groupList();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;select id=&quot;groupList&quot; resultType=&quot;com.macro.mall.tiny.domain.RoleStatDto&quot;&gt;</span></span>
<span class="line"><span>    SELECT ur.id        AS roleId,</span></span>
<span class="line"><span>           ur.NAME      AS roleName,</span></span>
<span class="line"><span>           count(ua.id) AS count</span></span>
<span class="line"><span>    FROM ums_role ur</span></span>
<span class="line"><span>             LEFT JOIN ums_admin_role_relation uarr ON ur.id = uarr.role_id</span></span>
<span class="line"><span>             LEFT JOIN ums_admin ua ON uarr.admin_id = ua.id</span></span>
<span class="line"><span>    GROUP BY ur.id;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><h4 id="条件删除" tabindex="-1">条件删除 <a class="header-anchor" href="#条件删除" aria-label="Permalink to &quot;条件删除&quot;">​</a></h4><p>按用户名删除后台用户</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DELETE </span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>	ums_admin </span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>	username = &#39;andy&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Service实现类</span></span>
<span class="line"><span> * @date 2020/12/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void deleteByUsername(String username) {</span></span>
<span class="line"><span>        UmsAdminExample example = new UmsAdminExample();</span></span>
<span class="line"><span>        example.createCriteria().andUsernameEqualTo(username);</span></span>
<span class="line"><span>        adminMapper.deleteByExample(example);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="条件修改" tabindex="-1">条件修改 <a class="header-anchor" href="#条件修改" aria-label="Permalink to &quot;条件修改&quot;">​</a></h4><p>按指定ID修改后台用户的状态</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>UPDATE ums_admin </span></span>
<span class="line"><span>SET STATUS = 1 </span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>	id IN ( 1, 2 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Service实现类</span></span>
<span class="line"><span> * @date 2020/12/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void updateByIds(List&lt;Long&gt; ids, Integer status) {</span></span>
<span class="line"><span>        UmsAdmin record = new UmsAdmin();</span></span>
<span class="line"><span>        record.setStatus(status);</span></span>
<span class="line"><span>        UmsAdminExample example = new UmsAdminExample();</span></span>
<span class="line"><span>        example.createCriteria().andIdIn(ids);</span></span>
<span class="line"><span>        adminMapper.updateByExampleSelective(record,example);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="一对多查询" tabindex="-1">一对多查询 <a class="header-anchor" href="#一对多查询" aria-label="Permalink to &quot;一对多查询&quot;">​</a></h4><blockquote><p>一对多查询无法直接使用MBG生成的代码实现，需要手写SQL实现，并使用resultMap来进行结果集映射。</p></blockquote><ul><li>这里以<code>按ID查询后台用户信息（包含对应角色列表）</code>为例，先在Dao接口中添加<code>selectWithRoleList</code>方法；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Created by macro on 2020/12/9.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface UmsAdminDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    AdminRoleDto selectWithRoleList(@Param(&quot;id&quot;) Long id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>然后在mapper.xml中添加对应的SQL实现，这里有个小技巧，可以给角色表查询出来的列取个别名，添加一个<code>role_</code>前缀；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;selectWithRoleList&quot; resultMap=&quot;AdminRoleResult&quot;&gt;</span></span>
<span class="line"><span>    SELECT ua.*,</span></span>
<span class="line"><span>           ur.id          AS role_id,</span></span>
<span class="line"><span>           ur.NAME        AS role_name,</span></span>
<span class="line"><span>           ur.description AS role_description,</span></span>
<span class="line"><span>           ur.create_time AS role_create_time,</span></span>
<span class="line"><span>           ur.STATUS      AS role_status,</span></span>
<span class="line"><span>           ur.sort        AS role_sort</span></span>
<span class="line"><span>    FROM ums_admin ua</span></span>
<span class="line"><span>             LEFT JOIN ums_admin_role_relation uarr ON ua.id = uarr.admin_id</span></span>
<span class="line"><span>             LEFT JOIN ums_role ur ON uarr.role_id = ur.id</span></span>
<span class="line"><span>    WHERE ua.id = #{id}</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><ul><li>然后定义一个叫做<code>AdminRoleResult</code>的ResultMap，通过<code>collection</code>标签直接将以<code>role_</code>开头的列映射到UmsRole对象中去即可。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;resultMap id=&quot;AdminRoleResult&quot; type=&quot;com.macro.mall.tiny.domain.AdminRoleDto&quot;</span></span>
<span class="line"><span>           extends=&quot;com.macro.mall.tiny.mbg.mapper.UmsAdminMapper.BaseResultMap&quot;&gt;</span></span>
<span class="line"><span>    &lt;collection property=&quot;roleList&quot; resultMap=&quot;com.macro.mall.tiny.mbg.mapper.UmsRoleMapper.BaseResultMap&quot;</span></span>
<span class="line"><span>                columnPrefix=&quot;role_&quot;&gt;</span></span>
<span class="line"><span>    &lt;/collection&gt;</span></span>
<span class="line"><span>&lt;/resultMap&gt;</span></span></code></pre></div><h4 id="一对一查询" tabindex="-1">一对一查询 <a class="header-anchor" href="#一对一查询" aria-label="Permalink to &quot;一对一查询&quot;">​</a></h4><p>一对一查询无法直接使用MBG生成的代码实现，需要手写SQL实现，并使用resultMap来进行结果集映射。</p><ul><li>这里以<code>按ID查询资源信息（包括分类信息）</code>为例，先在Dao接口中添加<code>selectResourceWithCate</code>方法；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description UmsAdmin自定义Dao</span></span>
<span class="line"><span> * @date 2022/11/22</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface UmsAdminDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ResourceWithCateDto selectResourceWithCate(@Param(&quot;id&quot;)Long id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>然后在mapper.xml中添加对应的SQL实现，可以给分类表查询出来的列取个别名，添加一个<code>cate_</code>前缀；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;selectResourceWithCate&quot; resultMap=&quot;ResourceWithCateResult&quot;&gt;</span></span>
<span class="line"><span>    SELECT ur.*,</span></span>
<span class="line"><span>           urc.id          AS cate_id,</span></span>
<span class="line"><span>           urc.\`name\`      AS cate_name,</span></span>
<span class="line"><span>           urc.create_time AS cate_create_time,</span></span>
<span class="line"><span>           urc.sort        AS cate_sort</span></span>
<span class="line"><span>    FROM ums_resource ur</span></span>
<span class="line"><span>             LEFT JOIN ums_resource_category urc ON ur.category_id = urc.id</span></span>
<span class="line"><span>    WHERE ur.id = #{id}</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><ul><li>然后定义一个叫做<code>ResourceWithCateResult</code>的ResultMap，通过<code>association</code>标签直接将以<code>cate_</code>开头的列映射到UmsResourceCategory对象中去即可。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;resultMap id=&quot;ResourceWithCateResult&quot; type=&quot;com.macro.mall.tiny.domain.ResourceWithCateDto&quot;</span></span>
<span class="line"><span>           extends=&quot;com.macro.mall.tiny.mbg.mapper.UmsResourceMapper.BaseResultMap&quot;&gt;</span></span>
<span class="line"><span>    &lt;association property=&quot;resourceCategory&quot;</span></span>
<span class="line"><span>                 resultMap=&quot;com.macro.mall.tiny.mbg.mapper.UmsResourceCategoryMapper.BaseResultMap&quot;</span></span>
<span class="line"><span>                 columnPrefix=&quot;cate_&quot;&gt;</span></span>
<span class="line"><span>    &lt;/association&gt;</span></span>
<span class="line"><span>&lt;/resultMap&gt;</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>总的来说MyBatis官方代码生成器MBG还是很强大的，可以生成一些常用的单表CRUD方法，减少了我们的工作量。</p><p>但是对于子查询、多表查询和一些复杂查询支持有点偏弱，依然需要在mapper.xml中手写SQL实现。</p>`,71)])])}const g=a(l,[["render",t]]);export{m as __pageData,g as default};
