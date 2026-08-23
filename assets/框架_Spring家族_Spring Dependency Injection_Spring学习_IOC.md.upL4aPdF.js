import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"Spring学习_IOC","description":"","frontmatter":{"title":"Spring学习_IOC","excerpt":"Spring学习_IOC","date":"2023-12-14 13:50:06","updated":"2023-12-14 13:50:06"},"headers":[],"relativePath":"框架/Spring家族/Spring Dependency Injection/Spring学习_IOC.md","filePath":"框架/Spring家族/Spring Dependency Injection/Spring学习_IOC.md","lastUpdated":null}'),l={name:"框架/Spring家族/Spring Dependency Injection/Spring学习_IOC.md"};function i(t,n,o,c,r,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h3 id="_1、ioc是什么" tabindex="-1">1、IOC是什么 <a class="header-anchor" href="#_1、ioc是什么" aria-label="Permalink to &quot;1、IOC是什么&quot;">​</a></h3><p>IoC &amp; AOP 不是 Spring 提出来的，它们在 Spring 之前已经存在了，只不过当时更加偏向于理论。Spring 在技术层次将这两个思想进行了很好的实现。</p><p>IOC （Inversion of Control ）指的是控制反转/反转控制。</p><blockquote><p>IOC 理论说明</p></blockquote><p>例如：现有类 A 依赖于类 B</p><ul><li>在传统的开发方式中，往往是在类 A 中手动通过 new 关键字来 new 一个 B 的对象出来</li><li>使用IOC思想的开发方式：不通过 new 关键字来创建对象，而是通过 IoC 容器(Spring 框架) 来帮助我们实例化对象。我们需要哪个对象，直接从 IoC 容器里面获取。</li></ul><p>控制反转主要指的是将对象的创建和对象之间的关系维护交给IOC容器去管理，而不是由程序员手动进行管理。在传统的应用中，对象的创建通常是由程序员通过<code>new</code>关键字来完成的，而对象之间的关系也需要由程序员进行硬编码。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202312051438413.png" alt="image.png"></p><ul><li><strong>控制</strong> ：指的是对象创建（实例化、管理）的权力</li><li><strong>反转</strong> ：控制权交给外部环境（IoC 容器）</li></ul><blockquote><p>IOC 和 DI 的关系</p></blockquote><p>其实它们是同一个概念的不同角度描述，由于控制反转概念比较含糊（可能只是理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系），所以2004年大师级人物Martin Fowler又给出了一个新的名字：“依赖注入”，相对IoC 而言，“依赖注入”明确描述了“被注入对象依赖IoC容器配置依赖对象”。</p><p>通俗来说就是<strong>IoC是设计思想，DI是实现方式</strong>。</p><div style="background-color:#3498db;color:white;padding:10px;"> IoC是设计思想，DI是实现方式。 </div><hr><blockquote><p>IOC 容器</p></blockquote><p>在 Spring 中， IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value），Map 中存放的是各种对象。</p><p>Spring 时代我们一般通过 XML 文件来配置 Bean，后来开发人员觉得 XML 文件来配置不太好，于是 SpringBoot 注解配置就慢慢开始流行起来。</p><blockquote><p>什么是 Spring Bean</p></blockquote><p>Bean 代指的就是那些被 IoC 容器所管理的对象。</p><p>我们需要告诉 IoC 容器帮助我们管理哪些对象，这个是通过配置元数据来定义的。配置元数据可以是 XML 文件、注解或者 Java 配置类。</p><h3 id="_2、ioc-配置的三种方式" tabindex="-1">2、IOC 配置的三种方式 <a class="header-anchor" href="#_2、ioc-配置的三种方式" aria-label="Permalink to &quot;2、IOC 配置的三种方式&quot;">​</a></h3><div style="border:1px solid #999;border-radius:5px;padding:10px;"> 主流方式是 注解 + Java 配置. </div><p>Spring框架提供了三种主要的IoC配置方式：XML配置、注解配置和Java配置。开发者可以选择其中一种或混合使用这些方式，来声明对象的依赖关系和配置信息。</p><p>Spring容器会根据这些配置信息，自动扫描并加载所需的对象，实现对象的创建、装配和管理。</p><h4 id="xml-配置" tabindex="-1">xml 配置 <a class="header-anchor" href="#xml-配置" aria-label="Permalink to &quot;xml 配置&quot;">​</a></h4><p>顾名思义，就是将bean的信息配置.xml文件里，通过Spring加载文件为我们创建bean。</p><p>这种方式出现很多早前的SSM项目中，将第三方类库或者一些配置工具类都以这种方式进行配置，主要原因是由于第三方类不支持Spring注解。</p><ul><li><strong>优点</strong>： 可以使用于任何场景，结构清晰，通俗易懂</li><li><strong>缺点</strong>： 配置繁琐，不易维护，枯燥无味，扩展性差</li></ul><p><strong>举例</strong>：</p><ol><li>配置xx.xml文件</li><li>声明命名空间和配置bean</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans</span></span>
<span class="line"><span> http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- services --&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;userService&quot; class=&quot;tech.pdai.springframework.service.UserServiceImpl&quot;&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;userDao&quot; ref=&quot;userDao&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- additional collaborators and configuration for this bean go here --&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span>    &lt;!-- more bean definitions for services go here --&gt;</span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre></div><h4 id="java-配置" tabindex="-1">Java 配置 <a class="header-anchor" href="#java-配置" aria-label="Permalink to &quot;Java 配置&quot;">​</a></h4><p>将类的创建交给我们配置的JavcConfig类来完成，Spring只负责维护和管理，采用纯Java创建方式。</p><p>其本质上就是把在XML上的配置声明转移到Java配置类中</p><ul><li><strong>优点</strong>：适用于任何场景，配置方便，因为是纯Java代码，扩展性高，十分灵活</li><li><strong>缺点</strong>：由于是采用Java类的方式，声明不明显，如果大量配置，可读性比较差</li></ul><p><strong>举例</strong>：</p><ol><li>创建一个配置类， 添加@Configuration注解声明为配置类</li><li>创建方法，方法上加上@bean，该方法用于创建实例并返回，该实例创建后会交给spring管理，方法名建议与实例名相同（首字母小写）。注：实例类不需要加任何注解</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @author pdai</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class BeansConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @return user dao</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    @Bean(&quot;userDao&quot;)</span></span>
<span class="line"><span>    public UserDaoImpl userDao() {</span></span>
<span class="line"><span>        return new UserDaoImpl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @return user service</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    @Bean(&quot;userService&quot;)</span></span>
<span class="line"><span>    public UserServiceImpl userService() {</span></span>
<span class="line"><span>        UserServiceImpl userService = new UserServiceImpl();</span></span>
<span class="line"><span>        userService.setUserDao(userDao());</span></span>
<span class="line"><span>        return userService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="注解配置" tabindex="-1">注解配置 <a class="header-anchor" href="#注解配置" aria-label="Permalink to &quot;注解配置&quot;">​</a></h4><p>通过在类上加注解的方式，来声明一个类交给Spring管理，Spring会自动扫描带有@Component，@Controller，@Service，@Repository这四个注解的类，然后帮我们创建并管理，前提是需要先配置Spring的注解扫描器。</p><ul><li><strong>优点</strong>：开发便捷，通俗易懂，方便维护。</li><li><strong>缺点</strong>：具有局限性，对于一些第三方资源，无法添加注解。只能采用XML或JavaConfig的方式配置</li></ul><p><strong>举例</strong>：</p><ol><li>对类添加@Component相关的注解，比如@Controller，@Service，@Repository</li><li>设置ComponentScan的basePackage, 比如<code>&lt;context:component-scan base-package=&#39;tech.pdai.springframework&#39;&gt;</code>, 或者<code>@ComponentScan(&quot;tech.pdai.springframework&quot;)</code>注解，或者 <code>new AnnotationConfigApplicationContext(&quot;tech.pdai.springframework&quot;)</code>指定扫描的basePackage.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @author pdai</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UserServiceImpl {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * user dao impl.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UserDaoImpl userDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * find user list.</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return user list</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;User&gt; findUserList() {</span></span>
<span class="line"><span>        return userDao.findUserList();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3、依赖注入的三种方式" tabindex="-1">3、依赖注入的三种方式 <a class="header-anchor" href="#_3、依赖注入的三种方式" aria-label="Permalink to &quot;3、依赖注入的三种方式&quot;">​</a></h3><p>参考看一下这个： <a href="https://zhuanlan.zhihu.com/p/557140781" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/557140781</a></p><p>依赖注入有三种主要的实现方式：属性注入、Setter注入和构造方法注入。</p><p>属性注入最简单，但通用性较差。Spring官方推荐使用构造方法注入，因为它支持注入不可变对象，通用性更强。对于可变对象，可以考虑使用Setter注入。</p><h4 id="属性注入" tabindex="-1">属性注入 <a class="header-anchor" href="#属性注入" aria-label="Permalink to &quot;属性注入&quot;">​</a></h4><p><strong>代码示例</strong></p><blockquote><ol><li>属性注入（Field Injection）</li></ol></blockquote><p><strong>属性注入是我们最熟悉，也是日常开发中使用最多的一种注入方式</strong>(直接在类的字段上注入依赖)</p><p>这种方式在某些场景下很方便，但可能会导致难以测试和难以维护的代码，因为它隐藏了类的依赖。</p><p><strong>示例代码</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DependencyClass dependency;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 其他方法 ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class DependencyClass {</span></span>
<span class="line"><span>    // ... 类的实现 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>优点是简单易用，缺点也随之而来</p><ol><li>功能性问题：无法注入一个不可变的对象（final 修饰的对象）；</li><li>通用性问题：只能适应于 IoC 容器；</li><li>设计原则问题：更容易违背单一设计原则。</li></ol><h4 id="setter注入" tabindex="-1">Setter注入 <a class="header-anchor" href="#setter注入" aria-label="Permalink to &quot;Setter注入&quot;">​</a></h4><blockquote><ol start="2"><li>Setter注入（Setter Injection）</li></ol></blockquote><p>在Setter注入中，Spring通过调用类的setter方法来注入依赖。</p><p><strong>示例代码</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private DependencyClass dependency;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    public void setDependency(DependencyClass dependency) {</span></span>
<span class="line"><span>        this.dependency = dependency;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 其他方法 ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class DependencyClass {</span></span>
<span class="line"><span>    // ... 类的实现 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>setter 的方式可能会麻烦一点，不过他是完全符合单一职责的设计原则，每一个 Setter 只针对一个对象。</p><p>缺点：</p><ol><li>不能注入不可变对象（final 修饰的对象）；</li><li>注入的对象可被修改</li></ol><h4 id="构造方法注入" tabindex="-1">构造方法注入 <a class="header-anchor" href="#构造方法注入" aria-label="Permalink to &quot;构造方法注入&quot;">​</a></h4><blockquote><ol start="3"><li>构造方法注入（Constructor Injection）</li></ol></blockquote><p>这种方式通过类的构造方法来注入依赖。这是最推荐的方式，因为它可以确保所需的依赖项在对象创建时即被提供，从而保证了对象的不变性和依赖的不可更改性。</p><p><strong>示例代码</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final DependencyClass dependency;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    public MyService(DependencyClass dependency) {</span></span>
<span class="line"><span>        this.dependency = dependency;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 其他方法 ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class DependencyClass {</span></span>
<span class="line"><span>    // ... 类的实现 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，<code>MyService</code> 类依赖于 <code>DependencyClass</code>。</p><p>当Spring创建 <code>MyService</code> 的实例时，它会查找 <code>DependencyClass</code> 的实例并通过构造方法注入它。</p><p>从Spring 4.3开始，当一个类只有一个构造函数时，<code>@Autowired</code> 注解是可选的(可以省略）。Spring会自动将这个唯一的构造函数用作依赖注入的入口。</p><p>上面的代码可以简化为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final DependencyClass dependency;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyService(DependencyClass dependency) {</span></span>
<span class="line"><span>        this.dependency = dependency;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ... 其他方法 ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class DependencyClass {</span></span>
<span class="line"><span>    // ... 类的实现 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这种写法符合“约定优于配置”的原则，减少了不必要的注解使用。</p><hr><p>参考</p><ul><li><a href="https://www.pdai.tech/md/spring/spring-x-framework-ioc.html" target="_blank" rel="noreferrer">https://www.pdai.tech/md/spring/spring-x-framework-ioc.html</a></li><li><a href="https://javaguide.cn/system-design/framework/spring/ioc-and-aop.html" target="_blank" rel="noreferrer">https://javaguide.cn/system-design/framework/spring/ioc-and-aop.html</a></li><li><a href="https://www.martinfowler.com/articles/injection.html" target="_blank" rel="noreferrer">https://www.martinfowler.com/articles/injection.html</a></li><li><a href="https://www.iteye.com/blog/jinnianshilongnian-1413846" target="_blank" rel="noreferrer">https://www.iteye.com/blog/jinnianshilongnian-1413846</a></li><li><a href="https://www.pdai.tech/md/spring/spring-x-framework-ioc.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">https://www.pdai.tech/md/spring/spring-x-framework-ioc.html#依赖注入的三种方式</a></li><li><a href="https://zhuanlan.zhihu.com/p/557140781" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/557140781</a></li></ul>`,79)])])}const h=s(l,[["render",i]]);export{u as __pageData,h as default};
