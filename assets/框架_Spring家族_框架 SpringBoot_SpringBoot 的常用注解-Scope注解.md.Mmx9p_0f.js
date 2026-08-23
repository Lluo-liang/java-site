import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"SpringBoot 的常用注解-Scope注解","description":"","frontmatter":{"title":"SpringBoot 的常用注解-Scope注解","excerpt":"摘要","date":"2025-05-24 20:59:16","updated":"2025-05-24 20:59:16"},"headers":[],"relativePath":"框架/Spring家族/框架 SpringBoot/SpringBoot 的常用注解-Scope注解.md","filePath":"框架/Spring家族/框架 SpringBoot/SpringBoot 的常用注解-Scope注解.md","lastUpdated":null}'),l={name:"框架/Spring家族/框架 SpringBoot/SpringBoot 的常用注解-Scope注解.md"};function t(i,s,o,c,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="scope-注解的使用场景" tabindex="-1">@Scope 注解的使用场景 <a class="header-anchor" href="#scope-注解的使用场景" aria-label="Permalink to &quot;@Scope 注解的使用场景&quot;">​</a></h3><p>这个注解默认是单例方式，既 singleton，在Spring容器中该实例唯一；还有其他的作用域范围，演示一下大概的使用。</p><p>示例</p><p>业务场景示例</p><h4 id="_1-购物车场景-prototype-作用域" tabindex="-1">1. 购物车场景（Prototype 作用域） <a class="header-anchor" href="#_1-购物车场景-prototype-作用域" aria-label="Permalink to &quot;1. 购物车场景（Prototype 作用域）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(&quot;prototype&quot;)</span></span>
<span class="line"><span>public class ShoppingCart {</span></span>
<span class="line"><span>    private List&lt;String&gt; items = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public void addItem(String item) {</span></span>
<span class="line"><span>        items.add(item);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public List&lt;String&gt; getItems() {</span></span>
<span class="line"><span>        return items;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class OrderService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public void processOrder(Long userId) {</span></span>
<span class="line"><span>        // 每个用户需要独立的购物车实例</span></span>
<span class="line"><span>        ShoppingCart cart = applicationContext.getBean(ShoppingCart.class);</span></span>
<span class="line"><span>        cart.addItem(&quot;商品1&quot;);</span></span>
<span class="line"><span>        cart.addItem(&quot;商品2&quot;);</span></span>
<span class="line"><span>        // 处理订单逻辑...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>场景说明</strong>：每个用户的购物车应该是独立的，不能共享，因此使用 prototype 作用域。</p><h4 id="_2-请求上下文信息-request-作用域" tabindex="-1">2. 请求上下文信息（Request 作用域） <a class="header-anchor" href="#_2-请求上下文信息-request-作用域" aria-label="Permalink to &quot;2. 请求上下文信息（Request 作用域）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)</span></span>
<span class="line"><span>public class RequestContext {</span></span>
<span class="line"><span>    private String requestId;</span></span>
<span class="line"><span>    private Long userId;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void init() {</span></span>
<span class="line"><span>        this.requestId = UUID.randomUUID().toString();</span></span>
<span class="line"><span>        // 从请求中获取用户ID</span></span>
<span class="line"><span>        this.userId = getUserIdFromRequest();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // getters...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class AuthService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RequestContext requestContext;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public void checkPermission() {</span></span>
<span class="line"><span>        // 使用当前请求的用户ID进行权限检查</span></span>
<span class="line"><span>        Long currentUserId = requestContext.getUserId();</span></span>
<span class="line"><span>        // 权限检查逻辑...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>场景说明</strong>：每个 HTTP 请求需要独立的上下文信息，如请求ID、用户信息等。</p><h4 id="_3-用户偏好设置-session-作用域" tabindex="-1">3. 用户偏好设置（Session 作用域） <a class="header-anchor" href="#_3-用户偏好设置-session-作用域" aria-label="Permalink to &quot;3. 用户偏好设置（Session 作用域）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)</span></span>
<span class="line"><span>public class UserPreferences {</span></span>
<span class="line"><span>    private String theme;</span></span>
<span class="line"><span>    private String language;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // getters and setters...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>public class ProfileController {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UserPreferences userPreferences;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @GetMapping(&quot;/theme&quot;)</span></span>
<span class="line"><span>    public String getTheme() {</span></span>
<span class="line"><span>        return userPreferences.getTheme();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>场景说明</strong>：用户的主题、语言偏好等需要在会话期间保持。</p><h3 id="实际的场景使用" tabindex="-1">实际的场景使用 <a class="header-anchor" href="#实际的场景使用" aria-label="Permalink to &quot;实际的场景使用&quot;">​</a></h3><p>如果后续有使用到，或者有什么不一样的地方，可以单独记录一下。</p>`,15)])])}const h=n(l,[["render",t]]);export{g as __pageData,h as default};
