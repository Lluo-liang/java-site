import{_ as a,o as s,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const g=JSON.parse('{"title":"Spring Dependency Injection","description":"","frontmatter":{"title":"Spring Dependency Injection","excerpt":"摘要","date":"2026-01-09 19:12:05","updated":"2026-01-09 19:12:05"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 Spring/Spring Dependency Injection.md","filePath":"框架/框架 Spring家族/框架 Spring/Spring Dependency Injection.md","lastUpdated":null}'),i={name:"框架/框架 Spring家族/框架 Spring/Spring Dependency Injection.md"};function l(t,n,o,c,r,d){return s(),p("div",null,[...n[0]||(n[0]=[e(`<h2 id="实践案例" tabindex="-1">实践案例 <a class="header-anchor" href="#实践案例" aria-label="Permalink to &quot;实践案例&quot;">​</a></h2><p><strong>实例化注解</strong>：</p><ul><li><code>@Component</code>：组件注解</li><li><code>@Service</code>：服务注解</li><li><code>@Repository</code>：仓储注解，提供对持久化类数据的操作的服务。</li><li><code>@Controller/@RestController()</code>：对外提供服务的注解。</li></ul><h3 id="_1-构造注入-list、map" tabindex="-1">1. 构造注入&amp;List、Map <a class="header-anchor" href="#_1-构造注入-list、map" aria-label="Permalink to &quot;1. 构造注入&amp;List、Map&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>private final List&lt;IAwardService&gt; awardServices;</span></span>
<span class="line"><span>private final Map&lt;String, IAwardService&gt; awardServiceMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public AwardController(List&lt;IAwardService&gt; awardServices, Map&lt;String, IAwardService&gt; awardServiceMap) {</span></span>
<span class="line"><span>    this.awardServices = awardServices;</span></span>
<span class="line"><span>    this.awardServiceMap = awardServiceMap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Response&lt;String&gt; distributeAward(@RequestParam String userId, @RequestParam String awardKey) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        log.info(&quot;发放奖品服务 userId:{} awardKey:{}&quot;, userId, awardKey);</span></span>
<span class="line"><span>        awardServiceMap.get(awardKey);</span></span>
<span class="line"><span>        return Response.&lt;String&gt;builder()</span></span>
<span class="line"><span>                .code(&quot;0000&quot;)</span></span>
<span class="line"><span>                .info(&quot;调用成功&quot;)</span></span>
<span class="line"><span>                .data(&quot;发奖完成&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    } catch (Exception e) {</span></span>
<span class="line"><span>        return Response.&lt;String&gt;builder()</span></span>
<span class="line"><span>                .code(&quot;0001&quot;)</span></span>
<span class="line"><span>                .info(&quot;调用失败&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>场景</strong>：IAwardService 接口有多个实现类，可以通过 @Resource、@Autowired 注解注入，也可以通过构造函数注入。在 Spring 官网文档中，是推荐使用构造函数注入的：<code>The Spring team generally advocates constructor injection, as it lets you implement application components as immutable objects and ensures that required dependencies are not null.</code> <a href="https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html" target="_blank" rel="noreferrer">https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html(opens new window)</a></li><li><strong>用途</strong>：Map 注入是一个非常好的注入手段，我们可以把每个 IAwardService 实现类设定好 Bean 的名称为数据库中的奖品 awardKey。在发奖的时候，可以直接根据 awardKey 从 Map 中获取到对应的 Bean 对象，这样也就省去了 <code>if···else</code> 大量的判断操作。</li></ul><h3 id="_2-空注入判断" tabindex="-1">2. 空注入判断 <a class="header-anchor" href="#_2-空注入判断" aria-label="Permalink to &quot;2. 空注入判断&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class NullAwardService implements IAwardService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doDistributeAward(String userId) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Autowired(required = false)</span></span>
<span class="line"><span>private NullAwardService nullAwardService;</span></span></code></pre></div><ul><li><strong>场景</strong>：NullAwardService 没有配置 @Service 注册，或者在程序中手动实例化的这个 Bean 对象，根据不同诉求，在没有创建的时候。可以使用 <code>@Autowired(required = false)</code> 进行注入。这样就不会报错 nullAwardService 空指针异常。</li><li><strong>用途</strong>：当我们在使用支付、openai外部接口对接测试阶段，可能有些时候是需要关闭服务的，也就是不实例化对象。那么这个时候就配置 <code>@Autowired(required = false)</code> 避免注入空指针</li></ul><h3 id="_3-优先实例化" tabindex="-1">3. 优先实例化 <a class="header-anchor" href="#_3-优先实例化" aria-label="Permalink to &quot;3. 优先实例化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service(&quot;openai_model&quot;)</span></span>
<span class="line"><span>// Primary 首选 Bean 对象标记</span></span>
<span class="line"><span>@Primary</span></span>
<span class="line"><span>@Order(1)</span></span>
<span class="line"><span>public class OpenAIModelAwardService implements IAwardService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doDistributeAward(String userId) {</span></span>
<span class="line"><span>        log.info(&quot;发奖服务，OpenAI 模型奖励 {}&quot;, userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Resource</span></span>
<span class="line"><span>private IAwardService awardService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void test_awardService_primary() {</span></span>
<span class="line"><span>    log.info(&quot;测试结果 {}&quot;, awardService.getClass());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试结果 class cn.bugstack.xfg.dev.tech.domain.impl.OpenAIModelAwardService</span></span></code></pre></div><ul><li><strong>场景</strong>：一个 IAwardService 有多个实现类的时候，如果还想用 <code>@Resource 注入 awardService</code> 的时候是会报错说 <code>NoUniqueBeanDefinitionException</code> 异常了。这个时候使用 @Primary 就会标记为首选对象，注入的时候会注入这个对象。另外这里的 <code>@Order(1)</code> 是对象的加载顺序。</li><li><strong>用途</strong>：当我们为一组接口提供实现类，并需要提供默认的注入的时候，就可以使用 <code>@Primary</code> 注解来限定首选注入项。</li></ul><h3 id="_4-检测创建-避免重复" tabindex="-1">4. 检测创建，避免重复 <a class="header-anchor" href="#_4-检测创建-避免重复" aria-label="Permalink to &quot;4. 检测创建，避免重复&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Bean(&quot;redisson01&quot;)</span></span>
<span class="line"><span>// 当 Spring 应用上下文中不存在某个特定类型的 Bean 时，才会创建和配置标注了 @ConditionalOnMissingBean 的 Bean 对象</span></span>
<span class="line"><span>@ConditionalOnMissingBean</span></span>
<span class="line"><span>public String redisson01() {</span></span>
<span class="line"><span>    return &quot;模拟的 Redis 客户端 01&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Bean(&quot;redisson02&quot;)</span></span>
<span class="line"><span>// 当 Spring 应用上下文中不存在某个特定类型的 Bean 时，才会创建和配置标注了 @ConditionalOnMissingBean 的 Bean 对象</span></span>
<span class="line"><span>@ConditionalOnMissingBean</span></span>
<span class="line"><span>public String redisson02() {</span></span>
<span class="line"><span>    return &quot;模拟的 Redis 客户端 02&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>场景</strong>：<code>@Bean</code> 可以用于在方法，创建出对象。这有点类似于使用 Spring 的 FactoryBean 接口创建对象一样，这里可以直接使用方法创建。之后 <code>@ConditionalOnMissingBean</code> 注解的目的是为了避免重复创建，判断应用上下文中存在这个对象，则不会重复创建。</li><li><strong>用途</strong>：通常我们在做一些组件的时候，会加入这样一个注解，避免在业务工程中引入同类的组件的时候，会导致创建出相同对象而报错。</li></ul><h3 id="_5-配置是否创建对象" tabindex="-1">5. 配置是否创建对象 <a class="header-anchor" href="#_5-配置是否创建对象" aria-label="Permalink to &quot;5. 配置是否创建对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@ConfigurationProperties(prefix = &quot;sdk.config&quot;, ignoreInvalidFields = true)</span></span>
<span class="line"><span>public class AutoConfigProperties {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 状态：open = 开启、close 关闭 */</span></span>
<span class="line"><span>    private boolean enable;</span></span>
<span class="line"><span>    /** 转发地址 */</span></span>
<span class="line"><span>    private String apiHost;</span></span>
<span class="line"><span>    /** 可以申请 sk-*** */</span></span>
<span class="line"><span>    private String apiSecretKey;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@ConditionalOnProperty(value = &quot;sdk.config.enabled&quot;, havingValue = &quot;true&quot;, matchIfMissing = false)</span></span>
<span class="line"><span>public String createTopic(@Qualifier(&quot;redisson01&quot;) String redisson, AutoConfigProperties properties) {</span></span>
<span class="line"><span>    log.info(&quot;redisson {} {} {}&quot;, redisson, properties.getApiHost(), properties.getApiSecretKey());</span></span>
<span class="line"><span>    return redisson;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sdk:</span></span>
<span class="line"><span>  config:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>    apiHost: https://open.bigmodel.cn/</span></span>
<span class="line"><span>    apiSecretKey: d570f7c5d289cdac2abdfdc562e39f3f.trqz1dH8ZK6ED7Pg</span></span></code></pre></div><ul><li><strong>场景</strong>：模拟创建 createTopic，入参的对象为注入的操作，@Qualifier 注解可以指定要注入哪个名字的对象。之后 <code>@ConditionalOnProperty</code> 注解可以通过配置的 enabled 值，来确定是否实例化对象。</li><li><strong>用途</strong>：这个场景是非常使用的，比如你做了一个组件，或者业务中要增加一些配置。启动或关闭某些服务，就可以使用了。而不需要把 pom 中引入的组件注释掉。</li></ul><h3 id="_6-自定义condition-判断是否实例化对象" tabindex="-1">6. 自定义Condition，判断是否实例化对象 <a class="header-anchor" href="#_6-自定义condition-判断是否实例化对象" aria-label="Permalink to &quot;6. 自定义Condition，判断是否实例化对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class BeanCreateCondition implements Condition {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {</span></span>
<span class="line"><span>        String active = System.getProperty(&quot;isOpenWhitelistedUsers&quot;);</span></span>
<span class="line"><span>        return null != active &amp;&amp; active.equals(&quot;true&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@Conditional(BeanCreateCondition.class)</span></span>
<span class="line"><span>public List&lt;String&gt; whitelistedUsers() {</span></span>
<span class="line"><span>    return new ArrayList&lt;String&gt;() {&lt;!-- --&gt;{</span></span>
<span class="line"><span>        add(&quot;user001&quot;);</span></span>
<span class="line"><span>        add(&quot;user002&quot;);</span></span>
<span class="line"><span>        add(&quot;user003&quot;);</span></span>
<span class="line"><span>    }};</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static {</span></span>
<span class="line"><span>    // BeanCreateCondition 会检测这个值，确定是否创建对象</span></span>
<span class="line"><span>    System.setProperty(&quot;isOpenWhitelistedUsers&quot;, &quot;false&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Autowired(required = false)</span></span>
<span class="line"><span>@Qualifier(&quot;whitelistedUsers&quot;)</span></span>
<span class="line"><span>private List&lt;String&gt; whitelistedUsers;</span></span></code></pre></div><ul><li><strong>场景</strong>：是一个案例中使用到了 <code>@ConditionalOnProperty</code> 注解，我们也可以自定义一个 Conditional 的实现类，之后把这个实现类配置到需要实例化的对象上面，通过 matches 匹配条件方法的实现，决定是否实例化。</li><li><strong>用途</strong>：这个场景的用途和 <code>@ConditionalOnProperty</code> 是一样的，只不过我们可以更好的自定义控制。</li></ul><h3 id="_7-根据环境配置实例化对象" tabindex="-1">7. 根据环境配置实例化对象 <a class="header-anchor" href="#_7-根据环境配置实例化对象" aria-label="Permalink to &quot;7. 根据环境配置实例化对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>// 用于根据配置环境实例化 Bean 对象</span></span>
<span class="line"><span>@Profile({&quot;prod&quot;, &quot;test&quot;})</span></span>
<span class="line"><span>@Lazy</span></span>
<span class="line"><span>public class AliPayAwardService implements IAwardService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AliPayAwardService() {</span></span>
<span class="line"><span>        log.info(&quot;如一些支付场景，必须指定上线后才能实例化&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doDistributeAward(String userId) {</span></span>
<span class="line"><span>        log.info(&quot;红包奖励 {}&quot;, userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  config:</span></span>
<span class="line"><span>    name: xfg-dev-tech-spring-dependency-injection</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: dev</span></span></code></pre></div><ul><li><strong>场景</strong>：<code>@Profile({&quot;prod&quot;, &quot;test&quot;})</code> 注解可以配置你是在什么时候实例化这个对象，我们可以指定 application.yml 中配置的 <code>active: dev/prod/test</code> 来确定是在开发、测试还是上线才实例化这个对象。</li><li><strong>用途</strong>：一些只有到线上才能实例化对象的时候，就可以配置 <code>@Profile({&quot;prod&quot;, &quot;test&quot;})</code> 注解，注意这个需要配合 <code>@Autowired(required = false)</code> 进行注入，否则会出现注入为空指针的异常。</li></ul><h3 id="_8-引入-spring-配置" tabindex="-1">8. 引入 Spring 配置 <a class="header-anchor" href="#_8-引入-spring-配置" aria-label="Permalink to &quot;8. 引入 Spring 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>@Configurable</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:properties/application.properties&quot;)</span></span>
<span class="line"><span>@ImportResource(&quot;classpath:spring/spring.xml&quot;)</span></span>
<span class="line"><span>@EnableScheduling</span></span>
<span class="line"><span>public class Application {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(Application.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>                           http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;bean id=&quot;exampleBean&quot; class=&quot;cn.bugstack.xfg.dev.tech.domain.SpringBeanTest&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class SpringBeanTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public SpringBeanTest() {</span></span>
<span class="line"><span>        log.info(&quot;我是通过 Spring 配置文件实例化的 Bean 对象&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>场景</strong>：在 SpringBoot 工程中，可以通过 <code>@ImportResource</code>、<code>@PropertySource</code> 引入对应的配置文件，完成对象的初始化。</li><li><strong>用途</strong>：在实际的开发中，虽然使用 SpringBoot 工程，但为了兼容一些老的项目或者一些还没有升级到 SpringBoot Starter 的组件，则需要单独引入 Spring 配置文件来创建对象。</li></ul><h3 id="_9-原型对象" tabindex="-1">9. 原型对象 <a class="header-anchor" href="#_9-原型对象" aria-label="Permalink to &quot;9. 原型对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(&quot;prototype&quot;)</span></span>
<span class="line"><span>public class LogicChain {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Resource</span></span>
<span class="line"><span>private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void test_prototype() {</span></span>
<span class="line"><span>    log.info(&quot;测试结果: {}&quot;, applicationContext.getBean(LogicChain.class).hashCode());</span></span>
<span class="line"><span>    log.info(&quot;测试结果: {}&quot;, applicationContext.getBean(LogicChain.class).hashCode());</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>场景</strong>：<code>@Scope(&quot;prototype&quot;)</code> 可以设定对象类型为原型对象，每次获得的对象都是一个新的实例化对象。</li><li><strong>用途</strong>：对于动态，不同责任链创建，可以使用这个配置，确保每个对象都是自己的。</li></ul><h3 id="_10-其他注解" tabindex="-1">10. 其他注解 <a class="header-anchor" href="#_10-其他注解" aria-label="Permalink to &quot;10. 其他注解&quot;">​</a></h3><ul><li><code>@EnableScheduling</code>：允许启动任务的注解，放到 Application 上，确保任务启动执行。</li><li><code>@DependsOn({&quot;openai_model&quot;, &quot;openai_use_count&quot;, &quot;user_credit_random&quot;})</code> Bean 对象实例化中，依赖于哪些对象。</li><li><code>@Autowired private Environment env;</code> 环境配置注入，可以获取到 application.yml 中的配置数据 <code>env.getProperty(&quot;app.name&quot;), env.getProperty(&quot;app.version&quot;)</code></li><li><code>@Async</code> 异步方法注解，可以用于调用某个方法后，让下面的具体逻辑方法为异步执行，主方法直接返回结果。可以用于一些申请导出数据到文件的场景。</li></ul><h2 id="三、源码分析" tabindex="-1">三、源码分析 <a class="header-anchor" href="#三、源码分析" aria-label="Permalink to &quot;三、源码分析&quot;">​</a></h2><p>这里的 Map 注入比较有特点，小傅哥把它的流程和核心代码给大家描述下，方便感兴趣源码的伙伴，可以去看下源码调试跟进。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20260113210302.png" alt="image.png"></p><p>在 Spring 框架中，依赖注入（DI）是通过一系列的步骤和组件来实现的。对于构造函数注入，特别是注入 <code>Map</code> 类型的依赖，Spring 需要处理以下几个关键步骤：</p><ol><li><strong>Bean Definition 解析</strong>：Spring 解析配置文件或注解，生成 BeanDefinition 对象。</li><li><strong>Bean 实例化</strong>：Spring 根据 BeanDefinition 创建 Bean 实例。</li><li><strong>依赖注入</strong>：Spring 将所需的依赖注入到 Bean 中。</li></ol><h3 id="_1-核心源码" tabindex="-1">1. 核心源码 <a class="header-anchor" href="#_1-核心源码" aria-label="Permalink to &quot;1. 核心源码&quot;">​</a></h3><p>具体到构造函数注入 <code>Map</code> 类型的依赖，Spring 主要通过以下源码来处理：</p><h4 id="_1-1-autowiredannotationbeanpostprocessor" tabindex="-1">1.1 <code>AutowiredAnnotationBeanPostProcessor</code> <a class="header-anchor" href="#_1-1-autowiredannotationbeanpostprocessor" aria-label="Permalink to &quot;1.1 \`AutowiredAnnotationBeanPostProcessor\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class AutowiredAnnotationBeanPostProcessor implements BeanPostProcessor {</span></span>
<span class="line"><span>    // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName) {</span></span>
<span class="line"><span>        InjectionMetadata metadata = findAutowiringMetadata(beanName, bean.getClass(), pvs);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            metadata.inject(bean, beanName, pvs);</span></span>
<span class="line"><span>        } catch (Throwable ex) {</span></span>
<span class="line"><span>            throw new BeanCreationException(beanName, &quot;Injection of autowired dependencies failed&quot;, ex);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return pvs;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>AutowiredAnnotationBeanPostProcessor</code> 是处理依赖注入的核心类之一。它会扫描 Bean 的构造函数、字段和方法上的 <code>@Autowired</code> 注解，并进行相应的依赖注入。</p><h4 id="_1-2-constructorresolver" tabindex="-1">1.2 <code>ConstructorResolver</code> <a class="header-anchor" href="#_1-2-constructorresolver" aria-label="Permalink to &quot;1.2 \`ConstructorResolver\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ConstructorResolver {</span></span>
<span class="line"><span>    // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BeanWrapper autowireConstructor(</span></span>
<span class="line"><span>            final String beanName, final RootBeanDefinition mbd, Constructor&lt;?&gt;[] chosenCtors, final Object[] explicitArgs) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Constructor&lt;?&gt; constructorToUse = null;</span></span>
<span class="line"><span>        ArgumentsHolder argsHolderToUse = null;</span></span>
<span class="line"><span>        Object[] argsToUse = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (Constructor&lt;?&gt; candidate : candidates) {</span></span>
<span class="line"><span>            Class&lt;?&gt;[] paramTypes = candidate.getParameterTypes();</span></span>
<span class="line"><span>            if (argsToUse == null) {</span></span>
<span class="line"><span>                // 省略其他代码</span></span>
<span class="line"><span>                argsHolder = createArgumentArray(</span></span>
<span class="line"><span>                        beanName, mbd, resolvedValues, bw, paramTypes, paramNames, getUserDeclaredConstructor(candidate), autowiring);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 省略其他代码</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BeanWrapperImpl bw = new BeanWrapperImpl(beanInstance);</span></span>
<span class="line"><span>        initBeanWrapper(bw);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return bw;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ConstructorResolver</code> 是负责解析和调用构造函数的类。它会根据 BeanDefinition 和构造函数的参数类型，选择合适的构造函数并进行实例化。</p><h4 id="_1-3-defaultlistablebeanfactory" tabindex="-1">1.3 <code>DefaultListableBeanFactory</code> <a class="header-anchor" href="#_1-3-defaultlistablebeanfactory" aria-label="Permalink to &quot;1.3 \`DefaultListableBeanFactory\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class DefaultListableBeanFactory extends AbstractAutowireCapableBeanFactory</span></span>
<span class="line"><span>        implements ConfigurableListableBeanFactory, BeanDefinitionRegistry {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 省略其他代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected Map&lt;String, Object&gt; findAutowireCandidates(String beanName, Class&lt;?&gt; requiredType, DependencyDescriptor descriptor) {</span></span>
<span class="line"><span>        String[] candidateNames = BeanFactoryUtils.beanNamesForTypeIncludingAncestors(this, requiredType);</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; result = new LinkedHashMap&lt;&gt;(candidateNames.length);</span></span>
<span class="line"><span>        for (String candidate : candidateNames) {</span></span>
<span class="line"><span>            if (!isSelfReference(beanName, candidate) &amp;&amp; isAutowireCandidate(candidate, descriptor)) {</span></span>
<span class="line"><span>                result.put(candidate, getBean(candidate));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (result.isEmpty() &amp;&amp; !indicatesMultipleBeans(requiredType)) {</span></span>
<span class="line"><span>            DependencyDescriptor fallbackDescriptor = descriptor.forFallbackMatch();</span></span>
<span class="line"><span>            for (String candidate : candidateNames) {</span></span>
<span class="line"><span>                if (!isSelfReference(beanName, candidate) &amp;&amp; isAutowireCandidate(candidate, fallbackDescriptor)) {</span></span>
<span class="line"><span>                    result.put(candidate, getBean(candidate));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>DefaultListableBeanFactory</code> 是 Spring 中最常用的 BeanFactory 实现类。它负责管理 Bean 的定义和生命周期，并提供依赖查找和注入的功能。</p><h3 id="_2-具体流程" tabindex="-1">2. 具体流程 <a class="header-anchor" href="#_2-具体流程" aria-label="Permalink to &quot;2. 具体流程&quot;">​</a></h3><ol><li><strong>解析 BeanDefinition</strong>： Spring 解析配置文件或注解，生成 <code>AwardController</code> 的 <code>BeanDefinition</code> 对象。</li><li><strong>选择构造函数</strong>： <code>AutowiredAnnotationBeanPostProcessor</code> 会扫描 <code>AwardController</code> 的构造函数，发现它有一个 <code>Map&lt;String, IAwardService&gt;</code> 类型的参数。</li><li><strong>查找依赖</strong>： <code>ConstructorResolver</code> 会根据构造函数参数的类型，查找 Spring 容器中所有 <code>IAwardService</code> 类型的 Bean，并将它们放入一个 <code>Map</code> 中。这个 <code>Map</code> 的键是 Bean 的名称，值是对应的 <code>IAwardService</code> 实例。</li><li><strong>实例化 Bean</strong>： <code>ConstructorResolver</code> 使用找到的依赖，调用 <code>AwardController</code> 的构造函数，创建 <code>AwardController</code> 实例。</li><li><strong>注入依赖</strong>： <code>DefaultListableBeanFactory</code> 将创建好的 <code>Map&lt;String, IAwardService&gt;</code> 注入到 <code>AwardController</code> 的构造函数中。</li></ol>`,50)])])}const h=a(i,[["render",l]]);export{g as __pageData,h as default};
