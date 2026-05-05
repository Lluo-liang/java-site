import{_ as s,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const d=JSON.parse('{"title":"Spring学习_Spring_Bean的作用域","description":"","frontmatter":{"title":"Spring学习_Spring_Bean的作用域","excerpt":"Spring学习_Spring_Bean的作用域","date":"2023-12-14 14:50:06","updated":"2023-12-15 00:19:49"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的作用域.md","filePath":"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的作用域.md","lastUpdated":null}'),t={name:"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的作用域.md"};function l(i,n,o,r,c,g){return a(),p("div",null,[...n[0]||(n[0]=[e(`<blockquote><p>复习概念</p></blockquote><blockquote><p>什么是 Spring Bean</p></blockquote><p>Bean 代指的就是那些被 IoC 容器所管理的对象。</p><p>我们需要告诉 IoC 容器帮助我们管理哪些对象，这个是通过配置元数据来定义的。配置元数据可以是 XML 文件、注解或者 Java 配置类。</p><h3 id="spring-中的-bean-的作用域有哪些" tabindex="-1">Spring 中的 bean 的作用域有哪些 <a class="header-anchor" href="#spring-中的-bean-的作用域有哪些" aria-label="Permalink to &quot;Spring 中的 bean 的作用域有哪些&quot;">​</a></h3><p>这个问题是面试题场景的一个问题，我们首先来看一下基本的一个回答。</p><p>Spring 中 Bean 的作用域通常有下面几种：</p><ul><li><strong>singleton</strong> : IoC 容器中只有唯一的 bean 实例。Spring 中的 bean 默认都是单例的，是对单例设计模式的应用。</li><li><strong>prototype</strong> : 每次获取都会创建一个新的 bean 实例。也就是说，连续 <code>getBean()</code> 两次，得到的是不同的 Bean 实例。</li><li><strong>request</strong> （仅 Web 应用可用）: 每一次 HTTP 请求都会产生一个新的 bean（请求 bean），该 bean 仅在当前 HTTP request 内有效。</li><li><strong>session</strong> （仅 Web 应用可用） : 每一次来自新 session 的 HTTP 请求都会产生一个新的 bean（会话 bean），该 bean 仅在当前 HTTP session 内有效。</li><li><strong>application/global-session</strong> （仅 Web 应用可用）：每个 Web 应用在启动时创建一个 Bean（应用 Bean），该 bean 仅在当前应用启动时间内有效。</li><li><strong>websocket</strong> （仅 Web 应用可用）：每一次 WebSocket 会话产生一个新的 bean。</li></ul><blockquote><p>如何配置 bean 的作用域</p></blockquote><p>xml 方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;bean id=&quot;...&quot; class=&quot;...&quot; scope=&quot;singleton&quot;&gt;&lt;/bean&gt;</span></span></code></pre></div><p>注解方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)</span></span>
<span class="line"><span>public Person personPrototype() {</span></span>
<span class="line"><span>    return new Person();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>具体怎么配置的看你实际使用，这里大概讲一下使用场景，通过不同场景下的使用示例对 Spring 中 Bean 的作用域有一个基本认知。</p><h4 id="singleton-bean-默认作用域" tabindex="-1">Singleton Bean（默认作用域） <a class="header-anchor" href="#singleton-bean-默认作用域" aria-label="Permalink to &quot;Singleton Bean（默认作用域）&quot;">​</a></h4><p><strong>场景</strong>: 在一个在线书店应用中，有一个库存管理服务负责跟踪所有书籍的库存。这个服务需要是单例的，因为它维护着整个应用中书籍库存的统一视图。</p><p>代码逻辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.stereotype.Service;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentHashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class InventoryService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final Map&lt;String, Integer&gt; bookInventory = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addBook(String isbn, int quantity) {</span></span>
<span class="line"><span>        bookInventory.put(isbn, bookInventory.getOrDefault(isbn, 0) + quantity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean checkStock(String isbn) {</span></span>
<span class="line"><span>        return bookInventory.getOrDefault(isbn, 0) &gt; 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 其他与库存管理相关的方法 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，<code>InventoryService</code> 是一个singleton作用域的Bean，它在应用的整个生命周期内只会有一个实例。</p><p>所有对书籍库存的操作都通过这个单一实例进行，确保了库存数据的一致性。</p><h4 id="prototype作用域" tabindex="-1">Prototype作用域 <a class="header-anchor" href="#prototype作用域" aria-label="Permalink to &quot;Prototype作用域&quot;">​</a></h4><p><strong>场景</strong>: 在同一在线书店应用中，当用户想要购买书籍时，每个购物车都应该是独立的。因此，每个用户的购物车应该有其自己的状态。</p><p>代码逻辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.context.annotation.Scope;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(&quot;prototype&quot;)</span></span>
<span class="line"><span>public class ShoppingCart {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final Map&lt;String, Integer&gt; items = new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addItem(String isbn) {</span></span>
<span class="line"><span>        items.put(isbn, items.getOrDefault(isbn, 0) + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Map&lt;String, Integer&gt; getItems() {</span></span>
<span class="line"><span>        return items;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 购物车的其他方法 ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class ShoppingService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ShoppingCart createNewShoppingCart() {</span></span>
<span class="line"><span>        return context.getBean(ShoppingCart.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个场景中，<code>ShoppingService</code> 使用Spring的应用上下文来为每个用户创建一个新的<code>ShoppingCart</code>实例。</p><p>每次调用<code>createNewShoppingCart</code>方法时，都会返回一个全新的购物车实例，保证了用户之间购物车的隔离。</p><h4 id="request作用域" tabindex="-1">Request作用域 <a class="header-anchor" href="#request作用域" aria-label="Permalink to &quot;Request作用域&quot;">​</a></h4><p><strong>场景</strong>: 在一个新闻网站应用中，你需要跟踪每个HTTP请求的访问信息，例如用户的地理位置和设备类型，以便为他们提供定制化的新闻内容。</p><p>代码逻辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.web.context.annotation.RequestScope;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@RequestScope</span></span>
<span class="line"><span>public class UserContext {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final String location;</span></span>
<span class="line"><span>    private final String deviceType;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public UserContext(HttpServletRequest request) {</span></span>
<span class="line"><span>        // 通过请求获取用户的位置和设备类型</span></span>
<span class="line"><span>        this.location = request.getHeader(&quot;Location&quot;);</span></span>
<span class="line"><span>        this.deviceType = request.getHeader(&quot;Device-Type&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getLocation() {</span></span>
<span class="line"><span>        return location;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getDeviceType() {</span></span>
<span class="line"><span>        return deviceType;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class NewsController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UserContext userContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/news&quot;)</span></span>
<span class="line"><span>    public ResponseEntity&lt;List&lt;NewsItem&gt;&gt; getNews() {</span></span>
<span class="line"><span>        List&lt;NewsItem&gt; news = newsService.getNewsForLocation(userContext.getLocation());</span></span>
<span class="line"><span>        // 返回定制化的新闻内容</span></span>
<span class="line"><span>        return ResponseEntity.ok(news);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个场景中，<code>UserContext</code>是一个request作用域的Bean，它为每个HTTP请求提供了一个新实例，</p><p>包含了请求特定的用户上下文信息，如位置和设备类型。</p><h4 id="session作用域" tabindex="-1">Session作用域 <a class="header-anchor" href="#session作用域" aria-label="Permalink to &quot;Session作用域&quot;">​</a></h4><p><strong>场景</strong>: 在一个在线考试平台上，每个用户的考试过程需要被追踪。用户可能会在考试中断后返回继续考试，所以考试状态需要在会话中保持。</p><p>代码逻辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.web.context.annotation.SessionScope;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@SessionScope</span></span>
<span class="line"><span>public class ExamSession {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Exam currentExam;</span></span>
<span class="line"><span>    private int currentQuestionIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 考试会话的方法，例如开始考试、回答问题等</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>public class ExamController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ExamSession examSession;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;/exam/start&quot;)</span></span>
<span class="line"><span>    public String startExam() {</span></span>
<span class="line"><span>        examSession.startNewExam();</span></span>
<span class="line"><span>        return &quot;exam_started&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;/exam/answer&quot;)</span></span>
<span class="line"><span>    public String answerQuestion(Answer answer) {</span></span>
<span class="line"><span>        examSession.answerQuestion(answer);</span></span>
<span class="line"><span>        return &quot;answer_recorded&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个场景中，<code>ExamSession</code> 是一个session作用域的Bean，它记录了用户的当前考试状态。每个用户会话都有自己的<code>ExamSession</code>实例。</p><blockquote><p>Session vs Global-Session vs WebSocket</p></blockquote><ol><li><strong>Session</strong>: <ul><li><strong>作用域</strong>: 限定在一个用户的HTTP会话中。</li><li><strong>典型用例</strong>: 在用户登录到网站后，你可能需要跟踪该用户的特定状态（比如购物车、偏好设置等）。这种情况下，每个用户都有自己的会话，每个会话都有自己的Bean实例。</li></ul></li><li><strong>Global-Session</strong>: <ul><li><strong>作用域</strong>: 限定在Portlet环境的全局HTTP会话中。在Spring 5及之后的版本中已不再使用，因为Spring 5不再支持Portlet。</li><li><strong>典型用例</strong>: 在Portlet环境中，多个Portlet可能需要共享全局会话数据。例如，用户的语言偏好可能需要跨多个Portlet保持一致。</li></ul></li><li><strong>WebSocket</strong>: <ul><li><strong>作用域</strong>: 绑定到WebSocket的会话中。</li><li><strong>典型用例</strong>: 当用户通过WebSocket连接到你的服务器时，你可能需要为每个WebSocket会话保存状态，例如游戏中的玩家状态或聊天应用中的用户会话</li></ul></li></ol><h4 id="singleton-vs-prototype" tabindex="-1">Singleton vs Prototype <a class="header-anchor" href="#singleton-vs-prototype" aria-label="Permalink to &quot;Singleton vs Prototype&quot;">​</a></h4><blockquote><p>Singleton vs Prototype</p></blockquote><ol><li><strong>Singleton</strong>: <ul><li><strong>描述</strong>: 在Spring IoC容器中只创建一个Bean实例。</li><li><strong>典型用例</strong>: 大多数服务层和数据访问层的组件都是无状态的，可以被应用中的所有其他Bean共享。例如，数据库连接池、业务服务等。</li></ul></li><li><strong>Prototype</strong>: <ul><li><strong>描述</strong>: 每次请求时，Spring IoC容器都会创建一个新的Bean实例。</li><li><strong>典型用例</strong>: 比如在一个应用中，你想要为每个文件上传创建一个新的处理器（FileUploadHandler）实例，以防不同用户上传的数据相互冲突。</li></ul></li></ol><p>两种作用域的使用主要取决于Bean的状态管理需求。</p><p>Singleton用于那些不需要维护状态信息的共享组件，而Prototype适用于每次使用都需要一个新状态的场景。</p><blockquote><p>Singleton vs Prototype 对比两者的生命周期区别</p></blockquote><p>单例Bean的生命周期：</p><ol><li><strong>实例化</strong>: 只有一个Bean实例被创建。</li><li><strong>属性填充</strong>: 容器注入依赖的属性。</li><li><strong>初始化</strong>: 如果Bean实现了<code>InitializingBean</code>接口或定义了自定义的初始化方法（如使用<code>@PostConstruct</code>注解或在XML配置中指定<code>init-method</code>），将会执行。</li><li><strong>后处理</strong>: <code>BeanPostProcessors</code>在初始化前后执行。</li><li><strong>使用</strong>: Bean现在可以被应用中的其他Bean使用。</li><li><strong>销毁</strong>: 当容器关闭时，如果Bean实现了<code>DisposableBean</code>接口或定义了自定义的销毁方法（如使用<code>@PreDestroy</code>注解或在XML配置中指定<code>destroy-method</code>），将会执行。</li></ol><p>多例Bean的生命周期：</p><ol><li><strong>实例化</strong>: 每次请求时都创建一个新的Bean实例。</li><li><strong>属性填充</strong>: 容器注入依赖的属性。</li><li><strong>初始化</strong>: 与单例Bean相同，如果有指定的初始化方法，将会执行。</li><li><strong>后处理</strong>: 与单例Bean相同，<code>BeanPostProcessors</code>在初始化前后执行。</li><li><strong>使用</strong>: Bean被客户端获取并使用。</li><li><strong>销毁</strong>: 容器不会管理多例Bean的完整生命周期；销毁由客户端负责。</li></ol><p>区别：</p><ul><li><strong>实例化频率</strong>: <ul><li><strong>单例</strong>: 只在Spring IoC容器创建时实例化一次。</li><li><strong>多例</strong>: 每次请求时实例化。</li></ul></li><li><strong>依赖注入时机</strong>: <ul><li><strong>单例</strong>: 依赖项在容器创建单例Bean时注入。</li><li><strong>多例</strong>: 依赖项在每次创建新实例时注入。</li></ul></li><li><strong>生命周期管理</strong>: <ul><li><strong>单例</strong>: 容器负责整个生命周期，包括销毁。</li><li><strong>多例</strong>: 容器启动后，不再管理Bean的生命周期；Bean的销毁不由Spring容器管理，需要用户手动管理。</li></ul></li><li><strong>销毁回调</strong>: <ul><li><strong>单例</strong>: 容器关闭时，可以调用销毁方法。</li><li><strong>多例</strong>: 容器不自动调用销毁方法，必须由获取Bean的客户端代码来处理。</li></ul></li></ul><p>在实际应用中，单例Bean通常用于无状态的服务，例如业务逻辑组件和数据访问对象。</p><p>而多例Bean则用于有明确状态的操作，这些状态不能共享给其他实例或线程，例如用户的会话或独立的任务处理器。</p><p>多例Bean 的销毁操作有兴趣可以了解一下： <a href="https://springdoc.cn/spring/core.html#beans-factory-scopes-prototype" target="_blank" rel="noreferrer">https://springdoc.cn/spring/core.html#beans-factory-scopes-prototype</a></p><blockquote><p>为了让Spring容器释放由 prototype scopeBean 持有的资源，可以尝试使用自定义 <a href="https://springdoc.cn/spring/core.html#beans-factory-extension-bpp" target="_blank" rel="noreferrer">Bean后处理器</a>，它持有对需要清理的Bean的引用。</p></blockquote><hr><p>参考</p><ul><li><a href="https://springdoc.cn/spring/core.html#spring-core" target="_blank" rel="noreferrer">https://springdoc.cn/spring/core.html#spring-core</a></li><li><a href="https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html#bean-%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">Spring常见面试题总结 | JavaGuide(Java面试 + 学习指南)</a></li></ul>`,58)])])}const b=s(t,[["render",l]]);export{d as __pageData,b as default};
