import{_ as n,o as s,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"SpringBoot 的常用注解","description":"","frontmatter":{"title":"SpringBoot 的常用注解","excerpt":"摘要","date":"2025-06-15 08:47:12","updated":"2025-06-15 08:47:12"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 SpringBoot/SpringBoot 的常用注解.md","filePath":"框架/框架 Spring家族/框架 SpringBoot/SpringBoot 的常用注解.md","lastUpdated":null}'),l={name:"框架/框架 Spring家族/框架 SpringBoot/SpringBoot 的常用注解.md"};function i(t,a,o,c,r,d){return s(),p("div",null,[...a[0]||(a[0]=[e(`<h3 id="常用注解" tabindex="-1">常用注解 <a class="header-anchor" href="#常用注解" aria-label="Permalink to &quot;常用注解&quot;">​</a></h3><p>后续有空可以更新一下导图内容</p><p><a href="/java-site/框架/框架 Spring家族/框架 SpringBoot/SpringBoot 的常用注解——导图.html">导图</a></p><hr><h3 id="组件相关注解" tabindex="-1">组件相关注解 <a class="header-anchor" href="#组件相关注解" aria-label="Permalink to &quot;组件相关注解&quot;">​</a></h3><h4 id="controller" tabindex="-1">@Controller <a class="header-anchor" href="#controller" aria-label="Permalink to &quot;@Controller&quot;">​</a></h4><p>用于修饰MVC中<code>controller</code>层的组件，SpringBoot中的组件扫描功能会识别到该注解，并为修饰的类实例化对象，通常与<code>@RequestMapping</code>联用，当SpringMVC获取到请求时会转发到指定路径的方法进行处理。</p><p>使用示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Controller 调用 Service 和 Repository</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    private final UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired  // 依赖注入</span></span>
<span class="line"><span>    public UserController(UserService userService) {</span></span>
<span class="line"><span>        this.userService = userService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/user/{id}&quot;)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String getUserName(@PathVariable Long id) {</span></span>
<span class="line"><span>        return userService.getUserName(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="service" tabindex="-1">@Service <a class="header-anchor" href="#service" aria-label="Permalink to &quot;@Service&quot;">​</a></h4><ul><li><strong>用途</strong>：标记类为<strong>业务逻辑层</strong>，封装复杂的业务逻辑。</li><li><strong>特点</strong>：无特殊功能，但通过语义化分层提高代码可读性。</li></ul><p>使用示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Service 调用 Repository</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UserService {</span></span>
<span class="line"><span>    private final UserRepository userRepository;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    public UserService(UserRepository userRepository) {</span></span>
<span class="line"><span>        this.userRepository = userRepository;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getUserName(Long userId) {</span></span>
<span class="line"><span>        return userRepository.findUserNameById(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="repostitory" tabindex="-1">@Repostitory <a class="header-anchor" href="#repostitory" aria-label="Permalink to &quot;@Repostitory&quot;">​</a></h4><ul><li><strong>用途</strong>：标记类为<strong>数据访问层（DAO 层）</strong>，用于数据库操作。</li><li><strong>特点</strong>：自动处理数据库异常（如将 JDBC 异常转换为 Spring 的 <code>DataAccessException</code>）。</li></ul><h4 id="component" tabindex="-1">@Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;@Component&quot;">​</a></h4><ul><li><strong>用途</strong>：通用的组件注解，用于标记<strong>任何层次的组件</strong>。</li><li><strong>特点</strong>：当某个类不属于 <code>@Controller</code>、<code>@Service</code>、<code>@Repository</code> 时使用。</li></ul><h3 id="依赖注入注解" tabindex="-1">依赖注入注解 <a class="header-anchor" href="#依赖注入注解" aria-label="Permalink to &quot;依赖注入注解&quot;">​</a></h3><h4 id="autowired" tabindex="-1"><code>@Autowired</code> <a class="header-anchor" href="#autowired" aria-label="Permalink to &quot;\`@Autowired\`&quot;">​</a></h4><ul><li><strong>作用</strong>：自动注入Bean，默认<strong>按类型匹配</strong>。</li><li><strong>使用场景</strong>：用于字段、构造方法或Setter方法。</li></ul><p>会根据对象的类型自动注入依赖对象，默认要求注入对象实例必须存在，可以配置required=false来注入不一定存在的对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private MyRepository myRepository;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="qualifier" tabindex="-1"><code>@Qualifier</code> <a class="header-anchor" href="#qualifier" aria-label="Permalink to &quot;\`@Qualifier\`&quot;">​</a></h4><ul><li><strong>作用</strong>：与<code>@Autowired</code>配合使用，<strong>指定注入的Bean名称</strong>。</li><li><strong>使用场景</strong>：当存在多个相同类型的Bean时，用于明确指定注入哪一个。</li></ul><p>当同一个对象有多个实例可以注入时，使用<code>@Autowired</code>注解无法进行注入，这时可以使用<code>@Qualifier</code>注解指定实例的名称进行精确注入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Autowired</span></span>
<span class="line"><span>@Qualifier(&quot;myServiceA&quot;)</span></span>
<span class="line"><span>private MyService myService;</span></span></code></pre></div><h4 id="resource" tabindex="-1"><code>@Resource</code> <a class="header-anchor" href="#resource" aria-label="Permalink to &quot;\`@Resource\`&quot;">​</a></h4><ul><li><strong>作用</strong>：与<code>@Autowired</code>类似，但默认按名称匹配。</li><li><strong>使用场景</strong>：适用于需要按名称注入的场景。</li></ul><p>默认会根据对象的<code>名称</code>自动注入依赖对象，如果想要根据类型进行注入，可以设置属性为<code>type = UmsAdminService.class</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Controller</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@RequestMapping(&quot;/admin&quot;)</span></span>
<span class="line"><span>public class UmsAdminController {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    @Resource(name = &quot;umsAdminServiceImpl&quot;)</span></span>
<span class="line"><span>    private UmsAdminService adminService;</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="实例与生命周期相关注解" tabindex="-1">实例与生命周期相关注解 <a class="header-anchor" href="#实例与生命周期相关注解" aria-label="Permalink to &quot;实例与生命周期相关注解&quot;">​</a></h3><h4 id="bean" tabindex="-1">@Bean <a class="header-anchor" href="#bean" aria-label="Permalink to &quot;@Bean&quot;">​</a></h4><ul><li><strong>作用</strong>：在配置类中显式定义 Bean，常用于<strong>第三方库组件的注入。</strong></li></ul><p>用于修饰方法，标识该方法会创建一个Bean实例，并交给Spring容器来管理。</p><p><strong>示例</strong>（在 <code>@Configuration</code> 类中）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class AppConfig {</span></span>
<span class="line"><span>    @Bean  // 将方法返回值注册为 Bean</span></span>
<span class="line"><span>    public DataSource dataSource() {</span></span>
<span class="line"><span>        return new HikariDataSource();  // 示例：数据库连接池</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h4 id="scope-🌱" tabindex="-1">@Scope 🌱 <a class="header-anchor" href="#scope-🌱" aria-label="Permalink to &quot;@Scope    🌱&quot;">​</a></h4><p><code>@Scope</code>注解用于定义Spring容器中Bean的作用域，即指定Bean实例的创建方式和生命周期。</p><p>默认情况下，Spring中的Bean是单例(singleton)模式</p><p>作用域的范围有以下几种：</p><ul><li>singleton：单例模式，在Spring容器中该实例唯一，Spring默认的实例模式。</li><li>prototype：原型模式，每次使用实例都将重新创建。</li><li>request：在同一请求中使用相同的实例，不同请求重新创建。</li><li>session：在同一会话中使用相同的实例，不同会话重新创建。</li></ul><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//本质上下面两种方式都是声明方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(&quot;prototype&quot;)  // 每次注入时创建新实例</span></span>
<span class="line"><span>public class TaskProcessor {</span></span>
<span class="line"><span>    // 业务逻辑...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description RestTemplate相关配置</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class RestTemplateConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Scope(&quot;singleton&quot;)</span></span>
<span class="line"><span>    public RestTemplate restTemplate(){</span></span>
<span class="line"><span>        return new RestTemplate();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>@Component 与 @Bean 配置方式的区别</p><table tabindex="0"><thead><tr><th>特性</th><th>@Component + @Scope</th><th>@Bean + @Scope</th></tr></thead><tbody><tr><td>适用场景</td><td>自己编写的类</td><td>第三方库的类或需要特殊初始化的类</td></tr><tr><td>定义位置</td><td>类级别</td><td>配置类的方法级别</td></tr><tr><td>实例化控制</td><td>Spring自动实例化</td><td>开发者控制实例化逻辑</td></tr><tr><td>名称指定</td><td>默认类名首字母小写或通过@Component(&quot;name&quot;)</td><td>默认方法名或通过@Bean(name=&quot;name&quot;)</td></tr><tr><td>依赖注入</td><td>通过@Autowired注入</td><td>可以直接在@Bean方法参数中注入</td></tr><tr><td>条件化配置</td><td>需要配合@Conditional</td><td>可直接在方法上使用@Conditional</td></tr></tbody></table><p><a href="/java-site/框架/框架 Spring家族/框架 SpringBoot/SpringBoot 的常用注解-Scope注解.html">SpringBoot 的常用注解-Scope注解</a></p><hr><h4 id="primary" tabindex="-1">@Primary <a class="header-anchor" href="#primary" aria-label="Permalink to &quot;@Primary&quot;">​</a></h4><ul><li><strong>作用</strong>：当存在多个同类型 Bean 时，标记优先注入的 Bean。</li></ul><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class CacheConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Primary  // 优先注入</span></span>
<span class="line"><span>    public Cache redisCache() {</span></span>
<span class="line"><span>        return new RedisCache();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Cache localCache() {</span></span>
<span class="line"><span>        return new LocalCache();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h4 id="postconstruct" tabindex="-1">@PostConstruct <a class="header-anchor" href="#postconstruct" aria-label="Permalink to &quot;@PostConstruct&quot;">​</a></h4><p>用于修饰方法，当对象实例被创建并且依赖注入完成后执行，可用于对象实例的初始化操作。</p><p>Bean 初始化完成后执行的方法（如资源初始化）。</p><p>后置处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class FileService {</span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void init() {</span></span>
<span class="line"><span>        System.out.println(&quot;文件服务已启动！&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 动态权限数据源，用于获取动态权限规则</span></span>
<span class="line"><span> * @date 2020/2/7</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DynamicSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Map&lt;String, ConfigAttribute&gt; configAttributeMap = null;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DynamicSecurityService dynamicSecurityService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void loadDataSource() {</span></span>
<span class="line"><span>        configAttributeMap = dynamicSecurityService.loadDataSource();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void clearDataSource() {</span></span>
<span class="line"><span>        configAttributeMap.clear();</span></span>
<span class="line"><span>        configAttributeMap = null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><blockquote><p>总结</p></blockquote><p>总结表格</p><table tabindex="0"><thead><tr><th>注解</th><th>作用场景</th></tr></thead><tbody><tr><td><code>@Bean</code></td><td>显式声明非组件类的 Bean</td></tr><tr><td><code>@Scope</code></td><td>控制 Bean 的创建策略（单例/原型）</td></tr><tr><td><code>@Primary</code></td><td>解决多个同类型 Bean 的冲突</td></tr><tr><td><code>@PostConstruct</code></td><td>Bean 初始化后执行逻辑</td></tr><tr><td><code>@PreDestroy</code></td><td>Bean 销毁前执行清理操作</td></tr></tbody></table><h4 id="predestroy" tabindex="-1">@PreDestroy <a class="header-anchor" href="#predestroy" aria-label="Permalink to &quot;@PreDestroy&quot;">​</a></h4><ul><li><strong>作用</strong>：Bean 销毁前执行的方法（如释放资源）。</li></ul><p>用于修饰方法，当对象实例将被Spring容器移除时执行，可用于对象实例持有资源的释放。</p><p>前置处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class DatabaseConnection {</span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void close() {</span></span>
<span class="line"><span>        System.out.println(&quot;数据库连接已关闭！&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>@PostConstruct、@PreDestroy示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 动态权限数据源，用于获取动态权限规则</span></span>
<span class="line"><span> * @date 2020/2/7</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DynamicSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Map&lt;String, ConfigAttribute&gt; configAttributeMap = null;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DynamicSecurityService dynamicSecurityService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void loadDataSource() {</span></span>
<span class="line"><span>        configAttributeMap = dynamicSecurityService.loadDataSource();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void clearDataSource() {</span></span>
<span class="line"><span>        configAttributeMap.clear();</span></span>
<span class="line"><span>        configAttributeMap = null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="springmvc-相关注解" tabindex="-1">SpringMVC 相关注解 <a class="header-anchor" href="#springmvc-相关注解" aria-label="Permalink to &quot;SpringMVC 相关注解&quot;">​</a></h3><h4 id="requestmapping" tabindex="-1"><code>@RequestMapping</code> <a class="header-anchor" href="#requestmapping" aria-label="Permalink to &quot;\`@RequestMapping\`&quot;">​</a></h4><ul><li>说明：可用于将Web请求路径映射到处理类的方法上， <ul><li>当作用于类上时，可以<strong>统一类中所有方法的路由路径，</strong></li><li>当作用于方法上时，可单独<strong>指定方法的路</strong>由路径。</li><li><code>method</code>属性可以指定请求的方式，如GET、POST、PUT、DELETE等。</li></ul></li><li>作用：映射HTTP请求到控制器方法</li><li>使用场景：定义请求路径和请求方法。</li></ul><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@RequestMapping(value = &quot;/api&quot;, method = RequestMethod.GET)</span></span>
<span class="line"><span>public String getData() {</span></span>
<span class="line"><span>    return &quot;Data&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="requestbody" tabindex="-1"><code>@RequestBody</code> <a class="header-anchor" href="#requestbody" aria-label="Permalink to &quot;\`@RequestBody\`&quot;">​</a></h4><p>表示方法的请求参数为JSON格式，从Body中传入，将自动绑定到方法参数对象中。</p><h4 id="responsebody" tabindex="-1"><code>@ResponseBody</code> <a class="header-anchor" href="#responsebody" aria-label="Permalink to &quot;\`@ResponseBody\`&quot;">​</a></h4><p>表示方法将返回JSON格式的数据，会自动将返回的对象转化为JSON数据。</p><h4 id="requestparam-🌱" tabindex="-1"><code>@RequestParam</code> 🌱 <a class="header-anchor" href="#requestparam-🌱" aria-label="Permalink to &quot;\`@RequestParam\`  🌱&quot;">​</a></h4><p>用于接收请求参数，可以是如下三种形式：</p><ul><li>query param：GET请求拼接在地址里的参数。</li><li>form data：POST表单提交的参数。</li><li>multipart：文件上传请求的部分参数。</li></ul><h4 id="pathvariable-🌱" tabindex="-1"><code>@PathVariable</code> 🌱 <a class="header-anchor" href="#pathvariable-🌱" aria-label="Permalink to &quot;\`@PathVariable\`   🌱&quot;">​</a></h4><p>用于接收请求路径中的参数，常用于REST风格的API。</p><blockquote><p>相关使用示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Controller</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@RequestMapping(&quot;/admin&quot;)</span></span>
<span class="line"><span>public class UmsAdminController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/register&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;UmsAdmin&gt; register(@RequestBody UmsAdminParam umsAdminParam) {</span></span>
<span class="line"><span>        UmsAdmin umsAdmin = adminService.register(umsAdminParam);</span></span>
<span class="line"><span>        if (umsAdmin == null) {</span></span>
<span class="line"><span>            return CommonResult.failed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return CommonResult.success(umsAdmin);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/list&quot;, method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;CommonPage&lt;UmsAdmin&gt;&gt; list(@RequestParam(value = &quot;keyword&quot;, required = false) String keyword,</span></span>
<span class="line"><span>                                                   @RequestParam(value = &quot;pageSize&quot;, defaultValue = &quot;5&quot;) Integer pageSize,</span></span>
<span class="line"><span>                                                   @RequestParam(value = &quot;pageNum&quot;, defaultValue = &quot;1&quot;) Integer pageNum) {</span></span>
<span class="line"><span>        List&lt;UmsAdmin&gt; adminList = adminService.list(keyword, pageSize, pageNum);</span></span>
<span class="line"><span>        return CommonResult.success(CommonPage.restPage(adminList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/{id}&quot;, method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult&lt;UmsAdmin&gt; getItem(@PathVariable Long id) {</span></span>
<span class="line"><span>        UmsAdmin admin = adminService.getItem(id);</span></span>
<span class="line"><span>        return CommonResult.success(admin);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="requestpart" tabindex="-1"><code>@RequestPart</code> <a class="header-anchor" href="#requestpart" aria-label="Permalink to &quot;\`@RequestPart\`&quot;">​</a></h4><p>用于接收文件上传中的文件参数，通常是multipart/form-data形式传入的参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description MinIO对象存储管理Controller</span></span>
<span class="line"><span> * @date 2019/12/25</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@RequestMapping(&quot;/minio&quot;)</span></span>
<span class="line"><span>public class MinioController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/upload&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public CommonResult upload(@RequestPart(&quot;file&quot;) MultipartFile file) {</span></span>
<span class="line"><span>            //省略文件上传操作...</span></span>
<span class="line"><span>            return CommonResult.success(minioUploadDto);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="restcontroller" tabindex="-1"><code>@RestController</code> <a class="header-anchor" href="#restcontroller" aria-label="Permalink to &quot;\`@RestController\`&quot;">​</a></h4><ul><li><strong>作用</strong>：组合了<code>@Controller</code>和<code>@ResponseBody</code>，用于定义RESTful Web服务。</li><li><strong>使用场景</strong>：编写API接口时使用。</li></ul><p>用于表示<code>controller</code>层的组件，与<code>@Controller</code>注解的不同在于，相当于在每个请求处理方法上都添加了<code>@ResponseBody</code>注解，这些方法都将返回JSON格式数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class MyController {</span></span>
<span class="line"><span>    @GetMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public String hello() {</span></span>
<span class="line"><span>        return &quot;Hello, World!&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="getmapping" tabindex="-1"><code>@GetMapping</code> <a class="header-anchor" href="#getmapping" aria-label="Permalink to &quot;\`@GetMapping\`&quot;">​</a></h4><p>用于表示GET请求方法，等价于<code>@RequestMapping(method = RequestMethod.GET)</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@GetMapping(&quot;/users&quot;)</span></span>
<span class="line"><span>public List&lt;User&gt; getUsers() {</span></span>
<span class="line"><span>    return userService.getAllUsers();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="postmapping" tabindex="-1"><code>@PostMapping</code> <a class="header-anchor" href="#postmapping" aria-label="Permalink to &quot;\`@PostMapping\`&quot;">​</a></h4><p>用于表示POST请求方法，等价于<code>@RequestMapping(method = RequestMethod.POST)</code>。</p><p>代码示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 后台用户管理Controller</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/admin&quot;)</span></span>
<span class="line"><span>public class UmsAdminController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;/register&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;UmsAdmin&gt; register(@RequestBody UmsAdminParam umsAdminParam) {</span></span>
<span class="line"><span>        UmsAdmin umsAdmin = adminService.register(umsAdminParam);</span></span>
<span class="line"><span>        if (umsAdmin == null) {</span></span>
<span class="line"><span>            return CommonResult.failed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return CommonResult.success(umsAdmin);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/list&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;CommonPage&lt;UmsAdmin&gt;&gt; list(@RequestParam(value = &quot;keyword&quot;, required = false) String keyword,</span></span>
<span class="line"><span>                                                   @RequestParam(value = &quot;pageSize&quot;, defaultValue = &quot;5&quot;) Integer pageSize,</span></span>
<span class="line"><span>                                                   @RequestParam(value = &quot;pageNum&quot;, defaultValue = &quot;1&quot;) Integer pageNum) {</span></span>
<span class="line"><span>        List&lt;UmsAdmin&gt; adminList = adminService.list(keyword, pageSize, pageNum);</span></span>
<span class="line"><span>        return CommonResult.success(CommonPage.restPage(adminList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="配置相关注解" tabindex="-1">配置相关注解 <a class="header-anchor" href="#配置相关注解" aria-label="Permalink to &quot;配置相关注解&quot;">​</a></h3><h4 id="configuration" tabindex="-1"><code>@Configuration</code> <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;\`@Configuration\`&quot;">​</a></h4><p>用于声明一个Java形式的配置类，SpringBoot推荐使用Java配置，在该类中声明的Bean等配置将被SpringBoot的组件扫描功能扫描到。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description MyBatis相关配置</span></span>
<span class="line"><span> * @date 2019/4/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@MapperScan({&quot;com.macro.mall.mapper&quot;,&quot;com.macro.mall.dao&quot;})</span></span>
<span class="line"><span>public class MyBatisConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="enableautoconfiguration" tabindex="-1"><code>@EnableAutoConfiguration</code> <a class="header-anchor" href="#enableautoconfiguration" aria-label="Permalink to &quot;\`@EnableAutoConfiguration\`&quot;">​</a></h4><p>启用SpringBoot的自动化配置，会根据你在<code>pom.xml</code>添加的依赖和<code>application-dev.yml</code>中的配置自动创建你需要的配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableAutoConfiguration</span></span>
<span class="line"><span>public class AppConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="componentscan-🐒" tabindex="-1"><code>@ComponentScan</code> 🐒 <a class="header-anchor" href="#componentscan-🐒" aria-label="Permalink to &quot;\`@ComponentScan\`  🐒&quot;">​</a></h4><p>启用SpringBoot的组件扫描功能，将自动装配和注入指定包下的Bean实例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;xyz.erupt&quot;,&quot;com.macro.mall.tiny&quot;})</span></span>
<span class="line"><span>public class EruptConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="springbootapplication" tabindex="-1"><code>@SpringBootApplication</code> <a class="header-anchor" href="#springbootapplication" aria-label="Permalink to &quot;\`@SpringBootApplication\`&quot;">​</a></h4><ul><li><strong>作用</strong>：标记主启动类，是<code>@Configuration</code>、<code>@EnableAutoConfiguration</code>和<code>@ComponentScan</code>的组合注解。</li><li><strong>使用场景</strong>：通常用于SpringBoot应用的入口类。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class MyApplication {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(MyApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="enablecaching" tabindex="-1"><code>@EnableCaching</code> <a class="header-anchor" href="#enablecaching" aria-label="Permalink to &quot;\`@EnableCaching\`&quot;">​</a></h4><p>当添加Spring Data Redis依赖之后，可用该注解开启Spring基于注解的缓存管理功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description Redis配置类</span></span>
<span class="line"><span> * @date 2020/3/2</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@EnableCaching</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class RedisConfig extends BaseRedisConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="value" tabindex="-1"><code>@Value</code> <a class="header-anchor" href="#value" aria-label="Permalink to &quot;\`@Value\`&quot;">​</a></h4><p>用于注入在配置文件中配置好的属性，例如我们可以在<code>application.yml</code>配置如下属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jwt:</span></span>
<span class="line"><span>  tokenHeader: Authorization #JWT存储的请求头</span></span>
<span class="line"><span>  secret: mall-admin-secret #JWT加解密使用的密钥</span></span>
<span class="line"><span>  expiration: 604800 #JWT的超期限时间(60*60*24*7)</span></span>
<span class="line"><span>  tokenHead: &#39;Bearer &#39;  #JWT负载中拿到开头</span></span></code></pre></div><p>然后在Java类中就可以使用<code>@Value</code>注入并进行使用了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class JwtTokenUtil {</span></span>
<span class="line"><span>    @Value(&quot;\${jwt.secret}&quot;)</span></span>
<span class="line"><span>    private String secret;</span></span>
<span class="line"><span>    @Value(&quot;\${jwt.expiration}&quot;)</span></span>
<span class="line"><span>    private Long expiration;</span></span>
<span class="line"><span>    @Value(&quot;\${jwt.tokenHead}&quot;)</span></span>
<span class="line"><span>    private String tokenHead;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="configurationproperties" tabindex="-1"><code>@ConfigurationProperties</code> <a class="header-anchor" href="#configurationproperties" aria-label="Permalink to &quot;\`@ConfigurationProperties\`&quot;">​</a></h4><p>用于批量注入外部配置，以对象的形式来导入指定前缀的配置，比如这里我们在<code>application.yml</code>中指定了<code>secure.ignored</code>为前缀的属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>secure:</span></span>
<span class="line"><span>  ignored:</span></span>
<span class="line"><span>    urls: #安全路径白名单</span></span>
<span class="line"><span>      - /swagger-ui/</span></span>
<span class="line"><span>      - /swagger-resources/**</span></span>
<span class="line"><span>      - /**/v2/api-docs</span></span>
<span class="line"><span>      - /**/*.html</span></span>
<span class="line"><span>      - /**/*.js</span></span>
<span class="line"><span>      - /**/*.css</span></span>
<span class="line"><span>      - /**/*.png</span></span>
<span class="line"><span>      - /**/*.map</span></span>
<span class="line"><span>      - /favicon.ico</span></span>
<span class="line"><span>      - /actuator/**</span></span>
<span class="line"><span>      - /druid/**</span></span></code></pre></div><p>然后在Java类中定义一个<code>urls</code>属性就可以导入配置文件中的属性了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description SpringSecurity白名单资源路径配置</span></span>
<span class="line"><span> * @date 2018/11/5</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Getter</span></span>
<span class="line"><span>@Setter</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConfigurationProperties(prefix = &quot;secure.ignored&quot;)</span></span>
<span class="line"><span>public class IgnoreUrlsConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;String&gt; urls = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="conditional" tabindex="-1"><code>@Conditional</code> <a class="header-anchor" href="#conditional" aria-label="Permalink to &quot;\`@Conditional\`&quot;">​</a></h4><p>用于表示当某个条件满足时，该组件或Bean将被Spring容器创建，下面是几个常用的条件注解。</p><ul><li>@ConditionalOnBean：当某个Bean存在时，配置生效。</li><li>@ConditionalOnMissingBean：当某个Bean不存在时，配置生效。</li><li>@ConditionalOnClass：当某个类在Classpath存在时，配置生效。</li><li>@ConditionalOnMissingClass：当某个类在Classpath不存在时，配置生效。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description Jackson相关配置，配置json不返回null的字段</span></span>
<span class="line"><span> * @date 2018/8/2</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class JacksonConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Primary</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(ObjectMapper.class)</span></span>
<span class="line"><span>    public ObjectMapper jacksonObjectMapper(Jackson2ObjectMapperBuilder builder) {</span></span>
<span class="line"><span>        ObjectMapper objectMapper = builder.createXmlMapper(false).build();</span></span>
<span class="line"><span>        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);</span></span>
<span class="line"><span>        return objectMapper;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="数据库事务相关注解" tabindex="-1">数据库事务相关注解 <a class="header-anchor" href="#数据库事务相关注解" aria-label="Permalink to &quot;数据库事务相关注解&quot;">​</a></h3><h4 id="enabletransactionmanagement" tabindex="-1"><code>@EnableTransactionManagement</code> <a class="header-anchor" href="#enabletransactionmanagement" aria-label="Permalink to &quot;\`@EnableTransactionManagement\`&quot;">​</a></h4><p>启用Spring基于注解的事务管理功能，需要和<code>@Configuration</code>注解一起使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description MyBatis相关配置</span></span>
<span class="line"><span> * @date 2019/4/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableTransactionManagement</span></span>
<span class="line"><span>@MapperScan({&quot;com.macro.mall.mapper&quot;,&quot;com.macro.mall.dao&quot;})</span></span>
<span class="line"><span>public class MyBatisConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="transactional" tabindex="-1"><code>@Transactional</code> <a class="header-anchor" href="#transactional" aria-label="Permalink to &quot;\`@Transactional\`&quot;">​</a></h4><p>表示方法和类需要开启事务，当作用与类上时，类中所有方法均会开启事务，当作用于方法上时，方法开启事务，方法上的注解无法被子类所继承。</p><ul><li><strong>作用</strong>：声明事务管理，确保方法内的数据库操作要么全部成功，要么全部回滚。</li><li><strong>使用场景</strong>：用于需要事务管理的业务方法。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 前台订单管理Service</span></span>
<span class="line"><span> * @date 2018/8/30</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface OmsPortalOrderService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据提交信息生成订单</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Transactional</span></span>
<span class="line"><span>    Map&lt;String, Object&gt; generateOrder(OrderParam orderParam);</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="springsecurity-相关注解" tabindex="-1">SpringSecurity 相关注解 <a class="header-anchor" href="#springsecurity-相关注解" aria-label="Permalink to &quot;SpringSecurity 相关注解&quot;">​</a></h3><h4 id="enablewebsecurity" tabindex="-1"><code>@EnableWebSecurity</code> <a class="header-anchor" href="#enablewebsecurity" aria-label="Permalink to &quot;\`@EnableWebSecurity\`&quot;">​</a></h4><p>启用SpringSecurity的Web功能。</p><h4 id="enableglobalmethodsecurity" tabindex="-1"><code>@EnableGlobalMethodSecurity</code> <a class="header-anchor" href="#enableglobalmethodsecurity" aria-label="Permalink to &quot;\`@EnableGlobalMethodSecurity\`&quot;">​</a></h4><p>启用SpringSecurity基于方法的安全功能，当我们使用<code>@PreAuthorize</code>修饰接口方法时，需要有对应权限的用户才能访问。</p><blockquote><p>使用配置示例：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description SpringSecurity配置</span></span>
<span class="line"><span> * @date 2019/10/8</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebSecurity</span></span>
<span class="line"><span>@EnableGlobalMethodSecurity(prePostEnabled = true)</span></span>
<span class="line"><span>public class SecurityConfig{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="全局异常处理注解" tabindex="-1">全局异常处理注解 <a class="header-anchor" href="#全局异常处理注解" aria-label="Permalink to &quot;全局异常处理注解&quot;">​</a></h3><h4 id="controlleradvice" tabindex="-1"><code>@ControllerAdvice</code> <a class="header-anchor" href="#controlleradvice" aria-label="Permalink to &quot;\`@ControllerAdvice\`&quot;">​</a></h4><p>常与<code>@ExceptionHandler</code>注解一起使用，用于捕获全局异常，能作用于所有controller中。</p><h4 id="exceptionhandler" tabindex="-1"><code>@ExceptionHandler</code> <a class="header-anchor" href="#exceptionhandler" aria-label="Permalink to &quot;\`@ExceptionHandler\`&quot;">​</a></h4><p>修饰方法时，表示该方法为处理全局异常的方法。</p><blockquote><p>全局异常处理示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 全局异常处理</span></span>
<span class="line"><span> * @date 2020/2/27</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ControllerAdvice</span></span>
<span class="line"><span>public class GlobalExceptionHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    @ExceptionHandler(value = ApiException.class)</span></span>
<span class="line"><span>    public CommonResult handle(ApiException e) {</span></span>
<span class="line"><span>        if (e.getErrorCode() != null) {</span></span>
<span class="line"><span>            return CommonResult.failed(e.getErrorCode());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return CommonResult.failed(e.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="aop-相关注解" tabindex="-1">AOP 相关注解 <a class="header-anchor" href="#aop-相关注解" aria-label="Permalink to &quot;AOP 相关注解&quot;">​</a></h3><h4 id="aspect" tabindex="-1"><code>@Aspect</code> <a class="header-anchor" href="#aspect" aria-label="Permalink to &quot;\`@Aspect\`&quot;">​</a></h4><p>用于定义切面，切面是通知和切点的结合，定义了何时、何地应用通知功能。</p><h4 id="before" tabindex="-1"><code>@Before</code> <a class="header-anchor" href="#before" aria-label="Permalink to &quot;\`@Before\`&quot;">​</a></h4><p>表示前置通知（Before），通知方法会在目标方法调用之前执行，通知描述了切面要完成的工作以及何时执行。</p><h4 id="after" tabindex="-1"><code>@After</code> <a class="header-anchor" href="#after" aria-label="Permalink to &quot;\`@After\`&quot;">​</a></h4><p>表示后置通知（After），通知方法会在目标方法返回或抛出异常后执行。</p><h4 id="afterreturning" tabindex="-1"><code>@AfterReturning</code> <a class="header-anchor" href="#afterreturning" aria-label="Permalink to &quot;\`@AfterReturning\`&quot;">​</a></h4><p>表示返回通知（AfterReturning），通知方法会在目标方法返回后执行。</p><h4 id="afterthrowing" tabindex="-1"><code>@AfterThrowing</code> <a class="header-anchor" href="#afterthrowing" aria-label="Permalink to &quot;\`@AfterThrowing\`&quot;">​</a></h4><p>表示异常通知（AfterThrowing），通知方法会在目标方法返回后执行。</p><h4 id="around" tabindex="-1"><code>@Around</code> <a class="header-anchor" href="#around" aria-label="Permalink to &quot;\`@Around\`&quot;">​</a></h4><p>表示环绕通知（Around），通知方法会将目标方法封装起来，在目标方法调用之前和之后执行自定义的行为。</p><h4 id="pointcut" tabindex="-1"><code>@Pointcut</code> <a class="header-anchor" href="#pointcut" aria-label="Permalink to &quot;\`@Pointcut\`&quot;">​</a></h4><p>定义切点表达式，定义了通知功能被应用的范围。</p><h4 id="order" tabindex="-1"><code>@Order</code> <a class="header-anchor" href="#order" aria-label="Permalink to &quot;\`@Order\`&quot;">​</a></h4><p>用于定义组件的执行顺序，在AOP中指的是切面的执行顺序，value属性越低优先级越高。</p><blockquote><p>AOP 相关示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 统一日志处理切面</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Order(1)</span></span>
<span class="line"><span>public class WebLogAspect {</span></span>
<span class="line"><span>    private static final Logger LOGGER = LoggerFactory.getLogger(WebLogAspect.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(public * com.macro.mall.tiny.controller.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void webLog() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Before(&quot;webLog()&quot;)</span></span>
<span class="line"><span>    public void doBefore(JoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @AfterReturning(value = &quot;webLog()&quot;, returning = &quot;ret&quot;)</span></span>
<span class="line"><span>    public void doAfterReturning(Object ret) throws Throwable {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;webLog()&quot;)</span></span>
<span class="line"><span>    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        WebLog webLog = new WebLog();</span></span>
<span class="line"><span>        //省略日志处理操作...</span></span>
<span class="line"><span>        Object result = joinPoint.proceed();</span></span>
<span class="line"><span>        LOGGER.info(&quot;{}&quot;, JSONUtil.parse(webLog));</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="测试相关注解" tabindex="-1">测试相关注解 <a class="header-anchor" href="#测试相关注解" aria-label="Permalink to &quot;测试相关注解&quot;">​</a></h3><h4 id="springboottest" tabindex="-1"><code>@SpringBootTest</code> <a class="header-anchor" href="#springboottest" aria-label="Permalink to &quot;\`@SpringBootTest\`&quot;">​</a></h4><p>用于指定测试类启用Spring Boot Test功能，默认会提供Mock环境。</p><h4 id="test" tabindex="-1"><code>@Test</code> <a class="header-anchor" href="#test" aria-label="Permalink to &quot;\`@Test\`&quot;">​</a></h4><p>指定方法为测试方法。</p><blockquote><p>测试示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description JUnit基本测试</span></span>
<span class="line"><span> * @date 2022/10/11</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class FirstTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test() {</span></span>
<span class="line"><span>        int a=1;</span></span>
<span class="line"><span>        Assertions.assertEquals(1,a);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,185)])])}const g=n(l,[["render",i]]);export{h as __pageData,g as default};
