import{_ as a,o as s,c as e,am as p}from"./chunks/framework.CiF4W93w.js";const B=JSON.parse('{"title":"Spring学习_Spring_Bean的生命周期","description":"","frontmatter":{"title":"Spring学习_Spring_Bean的生命周期","excerpt":"Spring学习_Spring_Bean的生命周期","date":"2023-12-18 21:32:49","updated":"2023-12-18 21:32:49"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的生命周期.md","filePath":"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的生命周期.md","lastUpdated":null}'),o={name:"框架/框架 Spring家族/框架 Spring/Spring学习_Spring_Bean的生命周期.md"};function i(t,n,l,r,c,d){return s(),e("div",null,[...n[0]||(n[0]=[p(`<h3 id="一、基础概念" tabindex="-1">一、基础概念 <a class="header-anchor" href="#一、基础概念" aria-label="Permalink to &quot;一、基础概念&quot;">​</a></h3><p>梳理一下 关于 SpringBean 生命周期的一些概念和理解。</p><p>Spring Bean 指的是Spring 容器中的对象，这里讲述 Bean 的生命周期一般指的是 单例 Bean。</p><h4 id="spring-bean-的四个阶段" tabindex="-1">Spring Bean 的四个阶段 <a class="header-anchor" href="#spring-bean-的四个阶段" aria-label="Permalink to &quot;Spring Bean 的四个阶段&quot;">​</a></h4><p>如果只是讲述四个笼统的阶段，那么Spring Bean 的生命周期可以分为：实例化 Instantiation → 属性赋值 Populate → 初始化 Initialization → 销毁 Destruction。</p><p>一般而言，Spring Bean 在初始化完成之后，就代表这个Bean 在容器中是可用的。</p><blockquote><p>在面试题中，有可能有问一下普通的 Java 对象 和 Spring Bean 对象的生命周期的区别。</p></blockquote><p>可以看一下下面这个回答：</p><p>普通Java对象的生命周期是由Java语言规则控制的，从对象的创建（实例化）开始，到被垃圾回收器回收结束。对象的创建和销毁非常直接，与对象引用的存在时间直接相关。</p><p>Spring Bean的生命周期更为复杂，因为Spring框架控制着Bean的整个生命周期。这包括了Bean的创建、初始化后的处理、以及销毁前的处理。Spring通过依赖注入管理Bean的属性，还可以通过实现特定的接口或配置声明周期回调方法来在Bean的生命周期的不同阶段执行特定的操作。这为在Bean创建和销毁过程中加入自定义逻辑提供了机会。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 普通Java对象生命周期:</span></span>
<span class="line"><span>// 1. 声明: MyClass obj;</span></span>
<span class="line"><span>// 2. 实例化: obj = new MyClass();</span></span>
<span class="line"><span>// 3. 使用: obj.method();</span></span>
<span class="line"><span>// 4. 垃圾回收: 不再有引用指向obj时，由垃圾回收器回收</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Spring Bean生命周期:</span></span>
<span class="line"><span>// 1. 实例化Bean</span></span>
<span class="line"><span>// 2. 设置Bean属性</span></span>
<span class="line"><span>// 3. 如果Bean实现了BeanNameAware接口, 调用setBeanName方法</span></span>
<span class="line"><span>// 4. 如果Bean实现了BeanFactoryAware接口, 调用setBeanFactory方法</span></span>
<span class="line"><span>// 5. 如果Bean实现了ApplicationContextAware接口, 调用setApplicationContext方法</span></span>
<span class="line"><span>// 6. 如果存在与Bean相关的BeanPostProcessors, 调用postProcessBeforeInitialization方法</span></span>
<span class="line"><span>// 7. 如果Bean实现了InitializingBean接口, 调用afterPropertiesSet方法</span></span>
<span class="line"><span>// 8. 如果Bean配置了init-method, 调用指定的初始化方法</span></span>
<span class="line"><span>// 9. 如果存在与Bean相关的BeanPostProcessors, 调用postProcessAfterInitialization方法</span></span>
<span class="line"><span>// 10. Bean现在可以使用了</span></span>
<span class="line"><span>// 11. 如果容器关闭, 如果Bean实现了DisposableBean接口, 调用destroy方法</span></span>
<span class="line"><span>// 12. 如果Bean配置了destroy-method, 调用指定的销毁方法</span></span></code></pre></div><p>言归正传，我们继续往下看。</p><h4 id="spring-bean-的生命周期的扩展点" tabindex="-1">Spring Bean 的生命周期的扩展点 <a class="header-anchor" href="#spring-bean-的生命周期的扩展点" aria-label="Permalink to &quot;Spring Bean 的生命周期的扩展点&quot;">​</a></h4><p>前面我们可以看到关于Spring的生命周期和Java对象区别的回答时，里面还讲述了一些关于Aware接口和 BeanPostProcessors 等内容，这些具体的点实际就是与 生命周期的扩展点相关（不同阶段中间进行的活动）。</p><p>下面我们来讲述一下具体的扩展点使用。</p><h5 id="bean-自身的方法" tabindex="-1">Bean 自身的方法 <a class="header-anchor" href="#bean-自身的方法" aria-label="Permalink to &quot;Bean 自身的方法&quot;">​</a></h5><p>在Bean的生命周期中，Bean自身是有一些特定方法是能够被调用的，以便完成其生命周期过程。</p><p>比如构造函数、getter/setter 以及 init-method 和 destory-method 所指定的方法等，而这些方法又分别对应着上文说的四个阶段：实例化、属性赋值、初始化和销毁。</p><p>这些Bean自身的方法一般是我们在配置Bean的时候就已经定义好的，</p><h5 id="容器级别方法-beanpostprocessor接口" tabindex="-1">容器级别方法（BeanPostProcessor接口） <a class="header-anchor" href="#容器级别方法-beanpostprocessor接口" aria-label="Permalink to &quot;容器级别方法（BeanPostProcessor接口）&quot;">​</a></h5><p>将这个容器级别方法理解为阶段中间容器会进行的一些操作，这些方法一般是 BeanPostProcessor 的一系列接口。</p><p>在上述讲到的Bean 四个阶段，在这四个阶段的执行过程中，进行一些前置或者后置的操作。</p><p>这些操作独立于 Bean 之外，并且会注册到 Spring 容器中，在Spring 容器创建Bean的时候，会进行一些处理。</p><h5 id="工厂后处理器方法-beanfactoryprocessor-接口" tabindex="-1">工厂后处理器方法（BeanFactoryProcessor 接口） <a class="header-anchor" href="#工厂后处理器方法-beanfactoryprocessor-接口" aria-label="Permalink to &quot;工厂后处理器方法（BeanFactoryProcessor 接口）&quot;">​</a></h5><p>工厂后处理器方法是用于来实现某些特定功能。</p><p><code>BeanFactoryPostProcessor</code>是另一种容器级别的扩展点，它允许对Bean定义（BeanDefinition）进行读取和修改，这在Bean实例化之前执行。</p><h5 id="bean-级生命周期方法" tabindex="-1">Bean 级生命周期方法 <a class="header-anchor" href="#bean-级生命周期方法" aria-label="Permalink to &quot;Bean 级生命周期方法&quot;">​</a></h5><p>Bean 级生命周期方法指的是针对 Bean 实例的个性化行为</p><p>Bean级生命周期方法是指直接在Bean类中实现的接口方法，这些方法针对特定Bean实例生效。包括：</p><ul><li><strong>Aware接口</strong>：如<code>BeanNameAware</code>、<code>BeanFactoryAware</code>、<code>ApplicationContextAware</code>等，允许Bean获取容器相关的资源和信息。</li><li><strong>InitializingBean和DisposableBean接口</strong>：分别用于自定义初始化后和销毁前的逻辑</li></ul><p>通过直接在Bean类中实现这些接口，可以使Bean在其生命周期的特定时刻获得执行自定义逻辑的能力。</p><h3 id="二、扩展点" tabindex="-1">二、扩展点 <a class="header-anchor" href="#二、扩展点" aria-label="Permalink to &quot;二、扩展点&quot;">​</a></h3><h4 id="_2-1-spring-bean-自身的方法使用" tabindex="-1">2.1 Spring Bean 自身的方法使用 <a class="header-anchor" href="#_2-1-spring-bean-自身的方法使用" aria-label="Permalink to &quot;2.1 Spring Bean 自身的方法使用&quot;">​</a></h4><p>在Spring框架中，Bean的生命周期管理是通过一系列约定的方法来实现的，这些方法允许Spring容器在Bean的生命周期的不同阶段进行干预。以下是这些自身方法的详细说明，对应于Bean生命周期的四个主要阶段：实例化、属性赋值、初始化和销毁。</p><p>Bean 自身方法使用</p><ul><li>实例化 <ul><li><strong>构造函数（Constructor）</strong>：是实例化阶段最基本的方法。Spring根据Bean的定义来调用相应的构造函数创建Bean实例。这可能是无参构造函数或带有参数的构造函数，后者用于依赖注入。</li></ul></li><li>属性赋值 <ul><li><strong>Getter和Setter方法</strong>：用于属性赋值阶段。Spring通过反射调用Bean的Setter方法来注入依赖。这些方法遵循JavaBean的命名约定，例如，属性<code>name</code>对应于<code>getName()</code>和<code>setName(String name)</code>。</li></ul></li><li>初始化 <ul><li><strong>自定义初始化方法</strong>：可以在Bean定义中通过<code>init-method</code>属性指定一个方法作为Bean的初始化方法。这个方法在属性赋值之后调用，用于执行任何必要的初始化逻辑。</li><li><strong>@PostConstruct注解</strong>:：初始化之前调用的方法</li></ul></li><li>销毁 <ul><li><strong>自定义销毁方法</strong>：与初始化方法类似，可以在Bean定义中通过<code>destroy-method</code>属性指定一个方法作为Bean的销毁方法。当容器关闭时，这个方法被调用，用于执行任何必要的清理工作。</li><li><strong>@PreDestroy注解</strong>：Spring容器在销毁Bean之前调用这个方法。</li></ul></li></ul><blockquote><p>具体使用示例</p></blockquote><p>展示如何在Spring中使用Bean自身的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.annotation.PostConstruct;</span></span>
<span class="line"><span>import javax.annotation.PreDestroy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MyBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构造函数</span></span>
<span class="line"><span>    public MyBean() {</span></span>
<span class="line"><span>        System.out.println(&quot;MyBean is being constructed without arguments.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 带参数的构造函数，用于依赖注入</span></span>
<span class="line"><span>    public MyBean(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        System.out.println(&quot;MyBean is being constructed with name: &quot; + name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Getter和Setter方法</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        System.out.println(&quot;Setting the name of MyBean to: &quot; + name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 自定义初始化方法</span></span>
<span class="line"><span>    public void myCustomInit() {</span></span>
<span class="line"><span>        System.out.println(&quot;Custom init method of MyBean is called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用@PostConstruct注解的初始化方法</span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void postConstructInit() {</span></span>
<span class="line"><span>        System.out.println(&quot;@PostConstruct init method is called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 自定义销毁方法</span></span>
<span class="line"><span>    public void myCustomDestroy() {</span></span>
<span class="line"><span>        System.out.println(&quot;Custom destroy method of MyBean is called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用@PreDestroy注解的销毁方法</span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void preDestroyCleanup() {</span></span>
<span class="line"><span>        System.out.println(&quot;@PreDestroy cleanup method is called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来，在Spring配置文件或Java配置中，您需要注册这个Bean，并指定<code>init-method</code>和<code>destroy-method</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>                           http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;bean id=&quot;myBean&quot; class=&quot;com.example.MyBean&quot; init-method=&quot;myCustomInit&quot; destroy-method=&quot;myCustomDestroy&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 如果使用构造函数注入，可以如下配置 --&gt;</span></span>
<span class="line"><span>        &lt;constructor-arg value=&quot;John Doe&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre></div><p>或者使用Java配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.example.MyBean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class AppConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean(initMethod = &quot;myCustomInit&quot;, destroyMethod = &quot;myCustomDestroy&quot;)</span></span>
<span class="line"><span>    public MyBean myBean() {</span></span>
<span class="line"><span>        return new MyBean(&quot;John Doe&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在该示例中，<code>MyBean</code>类展示了如何定义构造函数、getter和setter方法、自定义的初始化和销毁方法，以及如何使用<code>@PostConstruct</code>和<code>@PreDestroy</code>注解来自动执行初始化前和销毁前的逻辑。</p><p>通过在Spring配置中指定<code>init-method</code>和<code>destroy-method</code>属性，我们可以控制Spring何时调用这些方法，从而实现对Bean生命周期的精细管理。</p><h4 id="_2-2-容器级别方法" tabindex="-1">2.2 容器级别方法 <a class="header-anchor" href="#_2-2-容器级别方法" aria-label="Permalink to &quot;2.2  容器级别方法&quot;">​</a></h4><p>将这个容器级别方法理解为阶段中间容器会进行的一些操作，这些方法一般是 BeanPostProcessor 的一系列接口。</p><p>在上述讲到的Bean 四个阶段，在这四个阶段的执行过程中，进行一些前置或者后置的操作。</p><p>这些操作独立于 Bean 之外，并且会注册到 Spring 容器中，在Spring 容器创建Bean的时候，会进行一些处理。</p><p><code>BeanPostProcessor</code>接口提供了容器级别的扩展点，允许在Bean的实例化和初始化前后插入自定义操作。这些操作包括：</p><ul><li>实例化前后 <ul><li>postProcessBeforeInstantiation</li><li>postProcessAfterInstantiation</li></ul></li><li>初始化前后 <ul><li><strong>postProcessBeforeInitialization</strong>：在任何Bean初始化回调（如<code>@PostConstruct</code>注解的方法、<code>afterPropertiesSet</code>、自定义的init-method）之前调用。</li><li><strong>postProcessAfterInitialization</strong>：在所有Bean初始化回调之后调用。</li></ul></li></ul><p>通过实现<code>BeanPostProcessor</code>接口并注册为Spring容器的Bean，可以对所有Bean的实例化和初始化过程进行干预。</p><p>可以理解 <code>InstantiationAwareBeanPostProcessor</code> 接口方法是 作为 实例化阶段的&quot;产前产后护理&quot;；<code>BeanPostProcessor</code> 是 初始化阶段的 “关键调整和增强”。</p><p>具体的一个关系看下图：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202312150342853.png" alt="image.png"></p><blockquote><p>补充一点关于<code>InstantiationAwareBeanPostProcessor</code>的描述以确保概念的完整性和准确性。</p></blockquote><p><code>BeanPostProcessor</code>接口和<code>InstantiationAwareBeanPostProcessor</code>接口的使用:</p><ul><li><strong><code>BeanPostProcessor</code></strong>：允许在Bean的初始化前后执行自定义逻辑。这包括： <ul><li><code>postProcessBeforeInitialization</code>: 在Bean初始化之前调用（如调用<code>@PostConstruct</code>注解的方法、<code>InitializingBean</code>的<code>afterPropertiesSet</code>方法或自定义的init-method之前）。</li><li><code>postProcessAfterInitialization</code>: 在Bean初始化之后调用（如上述初始化方法执行之后）。</li></ul></li><li><strong><code>InstantiationAwareBeanPostProcessor</code></strong>：是<code>BeanPostProcessor</code>的一个扩展，提供了更多控制，包括： <ul><li><code>postProcessBeforeInstantiation</code>: 在Bean实例化之前调用，允许返回一个代理对象来代替真正的实例。</li><li><code>postProcessAfterInstantiation</code>: 在Bean实例化之后、设置属性之前调用，允许对Bean实例进行额外的处理。</li></ul></li></ul><p>通过这些接口，Spring允许开发者在Bean生命周期的关键阶段介入，提供了极高的灵活性来定制Bean的行为，比如通过代理模式增强Bean、修改Bean属性、注入额外的依赖等。</p><p>这些特性使得Spring非常适合于企业级应用的开发，因为它们允许面向切面的编程（AOP）、事务管理等高级功能的实现。</p><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyBeanPostProcessor implements BeanPostProcessor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {</span></span>
<span class="line"><span>        // 在初始化之前执行的逻辑</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {</span></span>
<span class="line"><span>        // 在初始化之后执行的逻辑</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过注册上述<code>BeanPostProcessor</code>的实现类到Spring容器，可以实现对所有Bean实例化和初始化过程的自定义干预。</p><p>这不仅提高了代码的可维护性和可扩展性，也为实现复杂的业务逻辑提供了便利。</p><h4 id="_2-3-工厂后处理器方法" tabindex="-1">2.3 <strong>工厂后处理器方法</strong> <a class="header-anchor" href="#_2-3-工厂后处理器方法" aria-label="Permalink to &quot;2.3 **工厂后处理器方法**&quot;">​</a></h4><p><strong>BeanFactoryProcessor 一系列接口</strong></p><p>包括 AspectJWeavingEnabler、CustomAutowireConfigurer、ConfigurationClassPostProcessor 等。</p><p>这些都是 Spring 框架中已经实现好的 BeanFactoryPostProcessor，用来实现某些特定的功能</p><blockquote><p>BeanFactoryProcessor 接口 vs BeanPostProcessor接口</p></blockquote><p><code>BeanFactoryPostProcessor</code> 接口和 <code>BeanPostProcessor</code> 接口都是 Spring 框架中用于定制和扩展 Bean 的关键接口，但它们的作用和时机略有不同。</p><p>BeanFactoryPostProcessor 接口：</p><ol><li><p><strong>作用：</strong> <code>BeanFactoryPostProcessor</code> 接口用于在 Spring 容器实例化 Bean 之前修改或定制 BeanFactory 的配置。</p></li><li><p><strong>时机：</strong> 在 Spring 容器读取了 Bean 的定义（配置元数据）但在实例化任何 Bean 之前，<code>BeanFactoryPostProcessor</code> 接口提供了机会来修改 Bean 的定义，例如修改属性值、添加属性等。</p></li><li><p><strong>实现方法：</strong> 实现 <code>postProcessBeanFactory</code> 方法，该方法传递了 BeanFactory 对象，可以在此方法中修改 BeanFactory 的配置。</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;</span></span>
<span class="line"><span>import org.springframework.beans.factory.support.BeanDefinitionBuilder;</span></span>
<span class="line"><span>import org.springframework.beans.factory.support.BeanDefinitionRegistryPostProcessor;</span></span>
<span class="line"><span>import org.springframework.beans.factory.support.BeanDefinitionRegistry;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MyBeanFactoryPostProcessor implements BeanDefinitionRegistryPostProcessor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {</span></span>
<span class="line"><span>        // 在这里可以修改 BeanFactory 的配置</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) {</span></span>
<span class="line"><span>        // 在这里可以注册新的 BeanDefinition</span></span>
<span class="line"><span>        BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(MyBean.class);</span></span>
<span class="line"><span>        registry.registerBeanDefinition(&quot;myBean&quot;, builder.getBeanDefinition());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>BeanPostProcessor 接口</p></blockquote><ol><li><p><strong>作用：</strong> <code>BeanPostProcessor</code> 接口用于在 Spring 容器实例化 Bean 后，在 Bean 的初始化前后执行一些自定义的逻辑。</p></li><li><p><strong>时机：</strong> 当 Bean 被实例化后，但在调用其初始化方法（如果有的话）之前，<code>BeanPostProcessor</code> 提供了 <code>postProcessBeforeInitialization</code> 和 <code>postProcessAfterInitialization</code> 方法用于在初始化阶段进行定制操作。</p></li><li><p><strong>实现方法：</strong> 实现 <code>BeanPostProcessor</code> 接口的两个方法，可以在这两个方法中添加定制逻辑。</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.beans.BeansException;</span></span>
<span class="line"><span>import org.springframework.beans.factory.config.BeanPostProcessor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MyBeanPostProcessor implements BeanPostProcessor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {</span></span>
<span class="line"><span>        // 在初始化之前的逻辑</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {</span></span>
<span class="line"><span>        // 在初始化之后的逻辑</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>总结</p><ul><li><code>BeanFactoryPostProcessor</code> 主要用于修改整个 BeanFactory 的配置，它在 Bean 实例化之前执行。</li><li><code>BeanPostProcessor</code> 主要用于在每个 Bean 的初始化阶段添加自定义逻辑，它在 Bean 实例化后，初始化方法调用前后执行。</li></ul><p>在实际应用中，可以同时使用这两个接口来完成更复杂的定制需求。</p><h4 id="_2-4-bean-级生命周期方法" tabindex="-1">2.4 <strong>Bean 级生命周期方法</strong> <a class="header-anchor" href="#_2-4-bean-级生命周期方法" aria-label="Permalink to &quot;2.4  **Bean 级生命周期方法**&quot;">​</a></h4><p>关于 Bean 级生命周期方法的理解：</p><ul><li>这些方法提供了针对 Bean 实例的<strong>个性化行为</strong>，允许 Bean 在其生命周期的关键点做出响应。</li></ul><p>通过这些方法，是可以对于某个Bean实例进行个性化操作的。</p><p>可以理解为 Bean 类直接实现接口的方法，比如 <code>BeanNameAware</code>、<code>BeanFactoryAware</code>、<code>ApplicationContextAware</code>、<code>InitializingBean</code>、<code>DisposableBean</code> 等方法，这些方法只对当前 Bean 生效。</p><p>Aware 类型的接口</p><p>Aware 类型的接口的作用就是让我们能够拿到 Spring 容器中的一些资源。</p><p>基本都能够见名知意，Aware 之前的名字就是可以拿到什么资源，例如 BeanNameAware 可以拿到 BeanName，以此类推。</p><h3 id="三、spring-bean-详细生命周期" tabindex="-1">三、Spring Bean 详细生命周期 <a class="header-anchor" href="#三、spring-bean-详细生命周期" aria-label="Permalink to &quot;三、Spring Bean 详细生命周期&quot;">​</a></h3><p>Spring 的生命周期基本上是很多面试的时候会遇到的一个问题，其中深度一些可能会问一下相关的源码实现；</p><p>这部分内容主要还是围绕IOC和AOP的一个实现源码的学习，以及如何实现的；如果有相关学习，并对此有所思考，可能是成为面试官比较亲耐的一个考查因素。</p><blockquote><p>Bean 的生命周期</p></blockquote><ul><li>Bean 容器找到配置文件中 Spring Bean 的定义。</li><li>Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。</li><li>如果涉及到一些属性值 利用 set() 方法设置一些属性值。</li><li>如果 Bean 实现了 BeanNameAware 接口，调用 setBeanName() 方法，传入 Bean 的名字。</li><li>如果 Bean 实现了 BeanClassLoaderAware 接口，调用 setBeanClassLoader() 方法，传入 ClassLoader 对象的实例。</li><li>如果 Bean 实现了 BeanFactoryAware 接口，调用 setBeanFactory() 方法，传入 BeanFactory 对象的实例。</li><li>与上面的类似，如果实现了其他 * .Aware 接口，就调用相应的方法。</li><li>如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行 postProcessBeforeInitialization() 方法</li><li>如果 Bean 实现了 InitializingBean 接口，执行 afterPropertiesSet() 方法。</li><li>如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。</li><li>如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行 postProcessAfterInitialization() 方法</li><li>当要销毁 Bean 的时候，如果 Bean 实现了 DisposableBean 接口，执行 destroy() 方法。</li><li>当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。</li></ul><hr><p><strong>Spring Bean生命周期详细回顾</strong>：</p><ol><li><strong>实例化Bean</strong>：Spring容器先通过构造器（或者对于FactoryBean来说是通过FactoryBean的<code>getObject()</code>方法）来创建Bean实例。</li><li><strong>填充属性</strong>：Spring容器把值和Bean的引用注入到Bean对应的属性中。</li><li><strong>调用BeanNameAware的setBeanName()方法</strong>：如果Bean实现了BeanNameAware接口，Spring将Bean的ID传递给setBeanName()方法。</li><li><strong>调用BeanFactoryAware的setBeanFactory()方法</strong>：如果Bean实现了BeanFactoryAware接口，Spring将调用setBeanFactory()方法，将BeanFactory容器实例传入。</li><li><strong>预初始化（@PostConstruct注解方法）</strong>：通过Bean的postProcessBeforeInitialization()方法。</li><li><strong>初始化</strong>：如果Bean实现了InitializingBean接口，Spring将调用其afterPropertiesSet()方法。此外，如果Bean在配置文件中定义了init-method属性，该方法也会被调用。</li><li><strong>后初始化（BeanPostProcessor）</strong>：通过Bean的postProcessAfterInitialization()方法，可以对Bean进行额外的处理。</li><li><strong>Bean准备就绪</strong>：此时，Bean已经准备好被应用中使用了，处于完全初始化状态。</li><li><strong>销毁前（@PreDestroy注解方法）</strong>：当容器关闭时，如果Bean实现了DisposableBean接口，Spring将调用其destroy()方法。同样，如果Bean使用了destroy-method声明了销毁方法，该方法也会被调用。</li></ol><p>通过这个详细的生命周期，我们可以看到Spring在Bean的创建和销毁过程中提供了丰富的扩展点，使得我们可以根据需要插入自己的代码，进行自定义的处理。</p><h3 id="四、源码解析" tabindex="-1">四、源码解析 <a class="header-anchor" href="#四、源码解析" aria-label="Permalink to &quot;四、源码解析&quot;">​</a></h3><p>在我们讲到 IOC 的时候，它在Spring 框架的实际实现主要是依赖于<code>BeanFactory</code>接口及其子接口<code>ApplicationContext</code>。</p><p>IOC 的实现是比较复杂的一个过程，涉及到了很多组件和概念。</p><p>在前面的基础概念中，出现过 <code>BeanDefinition</code>、 <code>BeanFactoryPostProcessor</code>、 <code>BeanPostProcessor</code> 等词，这里对相关概念做一个小的总结。</p><p>to be contined...</p><p>这部分内容需要整合，是写的有点问题的，逻辑关联不强，重复性太高。</p><h4 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h4><ol><li><code>BeanFactory</code>接口</li></ol><ul><li><strong>功能</strong>：<code>BeanFactory</code>是Spring IoC容器的核心接口，它定义了IoC容器的基本功能，如获取bean、检查bean的存在等。</li><li><strong>实现类</strong>：<code>XmlBeanFactory</code>（已弃用）、<code>DefaultListableBeanFactory</code>等。</li></ul><ol start="2"><li><code>ApplicationContext</code>接口</li></ol><ul><li><strong>功能</strong>：<code>ApplicationContext</code>是<code>BeanFactory</code>的子接口，提供了更完整的功能，比如国际化支持、事件传播等。它是Spring中最常用的IoC容器接口。</li><li><strong>实现类</strong>：<code>ClassPathXmlApplicationContext</code>、<code>FileSystemXmlApplicationContext</code>、<code>AnnotationConfigApplicationContext</code>等。</li></ul><ol start="3"><li><code>BeanDefinition</code>及其解析</li></ol><ul><li><strong>功能</strong>：<code>BeanDefinition</code>表示Spring IoC容器中管理的bean的定义信息，包括类名、作用域、生命周期回调等。</li><li><strong>实现</strong>：Spring通过读取配置文件（XML、Java Config）解析bean定义，并将解析结果封装为<code>BeanDefinition</code>对象。</li></ul><ol start="4"><li><code>BeanFactoryPostProcessor</code>接口</li></ol><ul><li><strong>功能</strong>：允许在容器实例化任何bean之前读取并修改bean的定义（即<code>BeanDefinition</code>）。可以用于自定义修改bean定义的逻辑。</li><li><strong>实现类</strong>：<code>PropertyPlaceholderConfigurer</code>、<code>CustomEditorConfigurer</code>等。</li></ul><ol start="5"><li><code>BeanPostProcessor</code>接口</li></ol><ul><li><strong>功能</strong>：提供了修改新实例化的bean对象的扩展点，比如AOP代理的创建就是在这一步骤中实现的。</li><li><strong>实现类</strong>：<code>AutowiredAnnotationBeanPostProcessor</code>、<code>RequiredAnnotationBeanPostProcessor</code>等。</li></ul><ol start="6"><li>依赖注入</li></ol><ul><li><strong>功能</strong>：在bean的实例化过程中，Spring IoC容器会根据<code>BeanDefinition</code>中的信息，通过反射等技术，自动将声明的依赖注入到bean中。</li><li><strong>实现</strong>：主要通过<code>BeanWrapper</code>实现属性的设置，<code>AutowiredAnnotationBeanPostProcessor</code>处理<code>@Autowired</code>注解等。</li></ul><p>阅读链路</p><ol><li><strong>启动入口</strong>：从<code>ApplicationContext</code>的实现类开始，了解容器的初始化过程。</li><li><strong>Bean定义的解析与注册</strong>：深入到如何解析配置（XML、注解）并将解析结果转换为<code>BeanDefinition</code>，以及<code>BeanDefinition</code>是如何注册到容器中的。</li><li><strong>Bean的创建与依赖注入</strong>：探究容器是如何创建bean实例、完成依赖注入的。</li><li><strong>生命周期管理</strong>：了解<code>BeanPostProcessor</code>和<code>BeanFactoryPostProcessor</code>在bean生命周期中的作用。</li><li><strong>高级特性</strong>：AOP、事件监听等高级特性是如何与IoC容器整合的。</li></ol><hr><h4 id="相关概念回顾" tabindex="-1">相关概念回顾 <a class="header-anchor" href="#相关概念回顾" aria-label="Permalink to &quot;相关概念回顾&quot;">​</a></h4><blockquote><p>Spring上下文</p></blockquote><p>从代码级别来说，就是指Spring Context</p><p>从源码级别，我们初始化Spring Context的时候，一堆的Spring组件围绕在一起，使其能够正常工作，这个状态就被称为Spring环境。</p><blockquote><p>Spring 初始化操作</p></blockquote><p>具体操作可以见下#ClassPathXmlApplicationContext 的构造方法哪里会被加载并使用</p><p>使用前需要引入 spring-context 相关的依赖，初始化Bean可以通过注解的方式也可以通过xml的方式。</p><blockquote><p><code>BeanFactory</code> 与 <code>ApplicationContext</code></p></blockquote><p>先了解一下 <code>BeanFactory</code> 与 <code>ApplicationContext</code> 接口两个的作用与概念：</p><ul><li><code>org.springframework.beans</code> 和 <code>org.springframework.context</code> 包是Spring Framework的IoC容器的基础。</li><li><code>BeanFactory</code> 提供了配置框架和基本功能，提供了一种高级配置机制，能够管理任何类型的对象。</li><li><code>ApplicationContext</code> 是 <code>BeanFactory</code> 的一个子接口，相比于 <code>BeanFactory</code> 来说，增加了更多的企业特定功能, 是 <code>BeanFactory</code> 的一个完整的超集。</li><li><code>BeanFactory</code> 实现了<strong>延迟</strong>加载（懒加载），只有在请求获取Bean时（例如，通过<code>getBean()</code>方法），容器才会创建该Bean。这意味着如果应用中未使用某个Bean，它就不会被实例化。</li><li><code>ApplicationContext</code>其下管理的 Bean 是<strong>在IOC容器初始化</strong>的时候完成 Bean 实例化。</li></ul><blockquote><p>实例化 Instantiation</p></blockquote><p>其中第一阶段 —— 实例化 Instantiation，</p><p>Bean 实例化的时机分为两种，一种是 BeanFactory，还有一种是 ApplicationContext；</p><p>下面是两者差别：</p><ul><li>BeanFactory <ul><li>其下管理的Bean <strong>在使用到Bean的时候</strong> 才会进行实例化Bean操作（懒加载策略）</li></ul></li><li>ApplicationContext <ul><li>其下管理的 Bean <strong>在IOC容器初始化</strong>的时候完成 Bean 实例化。</li><li><code>ApplicationContext</code>是<code>BeanFactory</code>的子接口，复杂程度更高一些。</li><li>如<code>AnnotationConfigApplicationContext</code>和<code>ClassPathXmlApplicationContext</code>等，提供了多种方便的方式来创建ApplicationContext实例</li></ul></li></ul><blockquote><p><code>ApplicationContext</code></p></blockquote><p><code>org.springframework.context.ApplicationContext</code> 接口代表Spring IoC容器，负责实例化、配置和组装bean。</p><blockquote><p><code>AbstractApplicationContext</code></p></blockquote><p><code>AbstractApplicationContext</code> 实现了 <code>ApplicationContext</code> 接口，提供了这个接口的大部分通用功能。</p><p>它是实际应用上下文类（如 <code>ClassPathXmlApplicationContext</code> 和 <code>AnnotationConfigApplicationContext</code>）的父类</p><p>通过继承和扩展 <code>AbstractApplicationContext</code>，Spring 允许开发者自定义应用上下文的行为，以满足特定的业务需求。</p><blockquote><p>ClassPathXmlApplicationContext</p></blockquote><p>ClassPathXmlApplicationContext 的构造方法哪里会被加载并使用？</p><p>以下是几个典型场景，其中可能会加载并使用 <code>ClassPathXmlApplicationContext</code> 的构造方法：</p><ol><li>Java 应用的主方法 (main)</li></ol><p>在一个标准的 Java 应用程序中，你可以在 <code>main</code> 方法中创建 <code>ClassPathXmlApplicationContext</code> 的实例来启动 Spring 容器。这是最常见的用法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class MyApp {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext context = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>        // 使用 context 获取 Bean 实例...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，<code>ClassPathXmlApplicationContext</code> 用于加载名为 &quot;applicationContext.xml&quot; 的配置文件。</p><ol start="2"><li>Web 应用程序</li></ol><p>在基于 Servlet 的传统 Web 应用程序中，可以在 Servlet 的 <code>init</code> 方法中创建 <code>ClassPathXmlApplicationContext</code>，或者使用 Spring 的 <code>ContextLoaderListener</code> 在 Web 应用启动时自动加载 Spring 上下文。</p><ol start="3"><li>单元测试</li></ol><p>在编写 Spring 应用的单元测试时，可以在测试类中创建 <code>ClassPathXmlApplicationContext</code> 来加载所需的 Spring 配置，并进行测试。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class MyTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSomeService() {</span></span>
<span class="line"><span>        ApplicationContext context = new ClassPathXmlApplicationContext(&quot;testContext.xml&quot;);</span></span>
<span class="line"><span>        MyService myService = context.getBean(MyService.class);</span></span>
<span class="line"><span>        // 执行测试...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这里，测试使用了单独的配置文件 &quot;testContext.xml&quot;。</p><ol start="4"><li>Spring Boot 应用</li></ol><p>使用 Spring Boot 时通常不直接使用 <code>ClassPathXmlApplicationContext</code></p><p>Spring Boot 提供了基于注解的配置和自动配置的能力，一般是使用注解配置的方式进行声明Bean操作 ，但在一些旧的或特殊的情况下，可能仍然需要手动加载 XML 配置的方式。</p><h4 id="容器级别方法" tabindex="-1">容器级别方法 <a class="header-anchor" href="#容器级别方法" aria-label="Permalink to &quot;容器级别方法&quot;">​</a></h4><p>这部分内容待后续完善分析。</p><blockquote><p>源码内容分析（容器级别方法）</p></blockquote><p>需要去了解Bean的生命周期，这个源码对应的方法是必须去了解和看的。</p><blockquote><p>InstantiationAwareBeanPostProcessor 接口分析</p></blockquote><p>查看源码，可以看到 InstantiationAwareBeanPostProcessor 接口是继承 BeanPostProcessor</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface InstantiationAwareBeanPostProcessor extends BeanPostProcessor</span></span></code></pre></div><blockquote><p>BeanPostProcessor</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface BeanPostProcessor {  </span></span>
<span class="line"><span>    @Nullable  </span></span>
<span class="line"><span>    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {  </span></span>
<span class="line"><span>        return bean;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Nullable  </span></span>
<span class="line"><span>    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {  </span></span>
<span class="line"><span>        return bean;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>AbstractAutowireCapableBeanFactory#createBean</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 创建Bean实例的方法，接收Bean的名称、RootBeanDefinition（Bean的定义信息）和参数数组</span></span>
<span class="line"><span>protected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args) throws BeanCreationException {</span></span>
<span class="line"><span>    // 如果启用了跟踪日志，输出创建Bean实例的跟踪信息</span></span>
<span class="line"><span>    if (this.logger.isTraceEnabled()) {</span></span>
<span class="line"><span>        this.logger.trace(&quot;Creating instance of bean &#39;&quot; + beanName + &quot;&#39;&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析Bean的类信息，如果已经有解析过的类信息，使用之前解析得到的类信息</span></span>
<span class="line"><span>    RootBeanDefinition mbdToUse = mbd;</span></span>
<span class="line"><span>    Class&lt;?&gt; resolvedClass = this.resolveBeanClass(mbd, beanName, new Class[0]);</span></span>
<span class="line"><span>    // 如果解析得到的类信息不为空，且当前Bean的定义信息没有指定类信息，则更新Bean的定义信息</span></span>
<span class="line"><span>    if (resolvedClass != null &amp;&amp; !mbd.hasBeanClass() &amp;&amp; mbd.getBeanClassName() != null) {</span></span>
<span class="line"><span>        mbdToUse = new RootBeanDefinition(mbd);</span></span>
<span class="line"><span>        mbdToUse.setBeanClass(resolvedClass);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 准备处理方法的覆盖，即准备解析方法注解</span></span>
<span class="line"><span>        mbdToUse.prepareMethodOverrides();</span></span>
<span class="line"><span>    } catch (BeanDefinitionValidationException var9) {</span></span>
<span class="line"><span>        // 如果方法注解解析失败，抛出BeanDefinitionStoreException异常</span></span>
<span class="line"><span>        throw new BeanDefinitionStoreException(mbdToUse.getResourceDescription(), beanName, &quot;Validation of method overrides failed&quot;, var9);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Object beanInstance;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 在实例化Bean之前，尝试调用BeanPostProcessor的beforeInstantiation方法</span></span>
<span class="line"><span>        beanInstance = this.resolveBeforeInstantiation(beanName, mbdToUse);</span></span>
<span class="line"><span>        // 如果beforeInstantiation方法返回非空，表示已经创建了Bean实例，直接返回该实例</span></span>
<span class="line"><span>        if (beanInstance != null) {</span></span>
<span class="line"><span>            return beanInstance;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } catch (Throwable var10) {</span></span>
<span class="line"><span>        // 如果beforeInstantiation方法抛出异常，抛出BeanCreationException异常</span></span>
<span class="line"><span>        throw new BeanCreationException(mbdToUse.getResourceDescription(), beanName, &quot;BeanPostProcessor before instantiation of bean failed&quot;, var10);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 执行真正的Bean创建逻辑，包括实例化、属性注入等过程</span></span>
<span class="line"><span>        beanInstance = this.doCreateBean(beanName, mbdToUse, args);</span></span>
<span class="line"><span>        // 如果启用了跟踪日志，输出Bean实例创建完成的跟踪信息</span></span>
<span class="line"><span>        if (this.logger.isTraceEnabled()) {</span></span>
<span class="line"><span>            this.logger.trace(&quot;Finished creating instance of bean &#39;&quot; + beanName + &quot;&#39;&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 返回创建的Bean实例</span></span>
<span class="line"><span>        return beanInstance;</span></span>
<span class="line"><span>    } catch (ImplicitlyAppearedSingletonException | BeanCreationException var7) {</span></span>
<span class="line"><span>        // 如果Bean创建过程中出现了异常，抛出异常</span></span>
<span class="line"><span>        throw var7;</span></span>
<span class="line"><span>    } catch (Throwable var8) {</span></span>
<span class="line"><span>        // 如果Bean创建过程中出现了未捕获的异常，抛出BeanCreationException异常</span></span>
<span class="line"><span>        throw new BeanCreationException(mbdToUse.getResourceDescription(), beanName, &quot;Unexpected exception during bean creation&quot;, var8);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h4 id="bean-创建流程入口-refresh" tabindex="-1">Bean 创建流程入口 refresh() <a class="header-anchor" href="#bean-创建流程入口-refresh" aria-label="Permalink to &quot;Bean 创建流程入口 refresh()&quot;">​</a></h4><h5 id="bean-创建流程入口" tabindex="-1">Bean 创建流程入口 <a class="header-anchor" href="#bean-创建流程入口" aria-label="Permalink to &quot;Bean 创建流程入口&quot;">​</a></h5><p>这里直接跟一下源码看一下相关内容</p><p>下面的代码是从 spring-context-5.2.4.RELEASE 版本中的 AbstractApplicationContext 抽象类下相关方法和内容说明。</p><p>在实际应用上下文类中（如 <code>ClassPathXmlApplicationContext</code> 和 <code>AnnotationConfigApplicationContext</code>），他们的构造方法中会调用这个 refresh() 方法类进行初始化 Spring 容器。</p><p>因此可以判断出 Bean 创建流程入口 是定义在 AbstractApplicationContext 抽象类下 refresh() 方法。</p><h5 id="refressh方法" tabindex="-1">refressh方法 <a class="header-anchor" href="#refressh方法" aria-label="Permalink to &quot;refressh方法&quot;">​</a></h5><p>这里实际看一下相关代码 AbstractApplicationContext#refresh()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void refresh() throws BeansException, IllegalStateException {</span></span>
<span class="line"><span>    // 同步锁确保容器刷新时的线程安全</span></span>
<span class="line"><span>    synchronized (this.startupShutdownMonitor) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 准备刷新，设置启动日期和活跃状态等</span></span>
<span class="line"><span>        this.prepareRefresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取新的 BeanFactory，初始化 BeanFactory，并加载 Bean 定义</span></span>
<span class="line"><span>        ConfigurableListableBeanFactory beanFactory = this.obtainFreshBeanFactory();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 配置 BeanFactory，设置类加载器、事件处理器等</span></span>
<span class="line"><span>        this.prepareBeanFactory(beanFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 允许在 BeanFactory 标准初始化之后进行定制修改</span></span>
<span class="line"><span>            this.postProcessBeanFactory(beanFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 调用在容器中注册的 BeanFactoryPostProcessor</span></span>
<span class="line"><span>            this.invokeBeanFactoryPostProcessors(beanFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 注册 BeanPostProcessor，这些处理器影响所有 Bean 的创建</span></span>
<span class="line"><span>            this.registerBeanPostProcessors(beanFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化 MessageSource 组件，用于国际化处理</span></span>
<span class="line"><span>            this.initMessageSource();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化 ApplicationEventMulticaster，用于事件广播</span></span>
<span class="line"><span>            this.initApplicationEventMulticaster();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 特定于 ApplicationContext 的刷新操作</span></span>
<span class="line"><span>            this.onRefresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 注册监听器到事件广播器</span></span>
<span class="line"><span>            this.registerListeners();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化所有剩余的非懒加载单例</span></span>
<span class="line"><span>            this.finishBeanFactoryInitialization(beanFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 完成刷新过程，通知生命周期处理器以及发布相应的事件</span></span>
<span class="line"><span>            this.finishRefresh();</span></span>
<span class="line"><span>        } catch (BeansException var9) {</span></span>
<span class="line"><span>            // 在上下文初始化过程中捕获并处理异常</span></span>
<span class="line"><span>            if (this.logger.isWarnEnabled()) {</span></span>
<span class="line"><span>                this.logger.warn(&quot;Exception encountered during context initialization - cancelling refresh attempt: &quot; + var9);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 销毁已创建的 Bean，以防有些 Bean 已经初始化了，但后续的初始化过程失败了</span></span>
<span class="line"><span>            this.destroyBeans();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 取消刷新操作，重置上下文的同步标志</span></span>
<span class="line"><span>            this.cancelRefresh(var9);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 重新抛出异常，通知外部调用者</span></span>
<span class="line"><span>            throw var9;</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 重置公共缓存（例如 Reflection 缓存）</span></span>
<span class="line"><span>            this.resetCommonCaches();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以看到初始化单例这步操作是在 this.finishBeanFactoryInitialization(beanFactory); 这里进行的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>protected void finishBeanFactoryInitialization(ConfigurableListableBeanFactory beanFactory) {</span></span>
<span class="line"><span>    // 如果 BeanFactory 包含名为 &quot;conversionService&quot; 的 Bean，并且这个 Bean 适配于 ConversionService 类型</span></span>
<span class="line"><span>    if (beanFactory.containsBean(&quot;conversionService&quot;) &amp;&amp; beanFactory.isTypeMatch(&quot;conversionService&quot;, ConversionService.class)) {</span></span>
<span class="line"><span>        // 将这个 Bean 设置为容器的 ConversionService</span></span>
<span class="line"><span>        beanFactory.setConversionService((ConversionService)beanFactory.getBean(&quot;conversionService&quot;, ConversionService.class));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果 BeanFactory 还没有嵌入的值解析器</span></span>
<span class="line"><span>    if (!beanFactory.hasEmbeddedValueResolver()) {</span></span>
<span class="line"><span>        // 添加一个嵌入的值解析器，用于解析占位符</span></span>
<span class="line"><span>        beanFactory.addEmbeddedValueResolver(strVal -&gt; {</span></span>
<span class="line"><span>            return this.getEnvironment().resolvePlaceholders(strVal);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取所有实现 LoadTimeWeaverAware 接口的 Bean 的名称</span></span>
<span class="line"><span>    String[] weaverAwareNames = beanFactory.getBeanNamesForType(LoadTimeWeaverAware.class, false, false);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 遍历这些 Bean 名称</span></span>
<span class="line"><span>    for (String weaverAwareName : weaverAwareNames) {</span></span>
<span class="line"><span>        // 初始化相应的 Bean，以确保它们能够执行加载时织入（Load Time Weaving）的相关逻辑</span></span>
<span class="line"><span>        this.getBean(weaverAwareName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将 BeanFactory 的临时类加载器设置为 null</span></span>
<span class="line"><span>    beanFactory.setTempClassLoader(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 冻结所有的 Bean 定义，表示注册的 Bean 定义将不再被修改或任何进一步的处理</span></span>
<span class="line"><span>    beanFactory.freezeConfiguration();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 预实例化单例，确保所有非懒加载的单例都被实例化</span></span>
<span class="line"><span>    beanFactory.preInstantiateSingletons();</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="五、视频学习" tabindex="-1">五、视频学习 <a class="header-anchor" href="#五、视频学习" aria-label="Permalink to &quot;五、视频学习&quot;">​</a></h3><h4 id="spring-bean-的生命周期001" tabindex="-1">Spring Bean 的生命周期001 <a class="header-anchor" href="#spring-bean-的生命周期001" aria-label="Permalink to &quot;Spring Bean 的生命周期001&quot;">​</a></h4><p>视频地址： <a href="https://www.bilibili.com/video/BV1584y1r7n6/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1584y1r7n6/</a></p><p>作为部分内容学习和回顾。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231218215844.png" alt="image.png"></p><p>生产 → 使用 → 销毁</p><h5 id="生产" tabindex="-1">生产 <a class="header-anchor" href="#生产" aria-label="Permalink to &quot;生产&quot;">​</a></h5><p>启动，准备容器/环境等</p><p>① 加载 Bean 定义（BeanDefinitions)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>加载Bean定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>refreshContext()</span></span>
<span class="line"><span>→ </span></span>
<span class="line"><span>refresh()</span></span>
<span class="line"><span>→ </span></span>
<span class="line"><span>obtainFreshBeanFactory()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>refreshBeanFactory()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>loadBeanDefinitions()</span></span></code></pre></div><p>通过 loadBeanDefinitions 扫描所有xml配置、注解将Bean记录在 Bean定义集合 beanDefinitionMap 中</p><p>②创建 Bean 对象（createBean)</p><p>遍历“Bean定义”集合</p><p>通过 createBean 遍历 beanDefinitionMap 创建bean</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>创建Bean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>refreshContext()</span></span>
<span class="line"><span>→ </span></span>
<span class="line"><span>refresh()</span></span>
<span class="line"><span>→ </span></span>
<span class="line"><span>finishBeanFactoryInitialization()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>preInstantiateSingletioins()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>doGetBean()</span></span>
<span class="line"><span>→</span></span>
<span class="line"><span>createBean()</span></span></code></pre></div><blockquote><p>2.1.构造对象</p></blockquote><p>通过 createBeanInstance 方法进行对象的构造</p><p>使用反射机制从“Bean定义”中的BeanClass拿到类的构造方法</p><p>准备参数：在单例池中，根据参数的Class类进行查找</p><p>构造对象：通过反射进行Bean的构造（如果是无参则无需准备参数直接构造）</p><hr><p>查找Class类 当匹配到多个实例， 会再根据参数名进行匹配</p><blockquote><p>2.2.填充属性</p></blockquote><p>通过 populateBean 方法对 Bean 内部所需属性进行属性填充, 通常是 @Autowired 注解的变量</p><p>三级缓存进行依赖注入</p><blockquote><p>2.3.初始化实例</p></blockquote><p>通过 initializeBean 方法对实例进行初始化</p><p>初始化操作：</p><ol><li>初始化容器相关信息 通过 invokeAwareMethods 方法为实现各种 Aware 接口的Bean设置诸如 beanName, beanFactory 等容器信息 Aware 接口指代：信息感知接口</li><li>通过 invokeInitMethods 方法执行 Bean 的初始化方法</li></ol><p>该 invokeInitMethods 方法是通过实现 InitializingBean 接口而实现的 afterPropertiesSet 方法 【Bean填充属性后执行】 ((InitializingBean)bean).afterPropertiesSet()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>afterPropertiesSet </span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>init-Methods</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BeanPostProcessors</span></span></code></pre></div><hr><h5 id="销毁操作" tabindex="-1">销毁操作 <a class="header-anchor" href="#销毁操作" aria-label="Permalink to &quot;销毁操作&quot;">​</a></h5><ul><li>销毁操作 <ul><li>销毁前 <ul><li>销毁之前会执行 postProcessBeforeDestruction &quot;销毁前处理器“，这步会执行 Bean 中 @PreDestroy 注解的方法</li></ul></li><li>容器销毁 <ul><li>后续通过 destoryBeans 方法逐一“销毁”容器中的Bean，销毁的时候会执行 destroy 方法（通过registerDisposableBean方法注册的Bean，该接口只有一个方法 destroy。</li><li>在Bean销毁的时候，Spring容器会调用这个方法。）</li></ul></li><li>Bean自定义销毁方法 <ul><li>“客户销毁方法”invokeCustomDestroyMethod; → 执行Bean上自定义的 destoryMethod 方法</li></ul></li></ul></li></ul><h3 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h3><h4 id="spring-bean-生命周期流程图" tabindex="-1"><strong>Spring Bean 生命周期流程图</strong> <a class="header-anchor" href="#spring-bean-生命周期流程图" aria-label="Permalink to &quot;**Spring Bean 生命周期流程图**&quot;">​</a></h4><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202312160247944.png" alt="image.png"></p><hr><p>参考</p><ul><li><a href="https://docs.spring.io/spring-framework/reference/6.1-SNAPSHOT/core/beans.html" target="_blank" rel="noreferrer">https://docs.spring.io/spring-framework/reference/6.1-SNAPSHOT/core/beans.html</a></li><li><a href="https://springdoc.cn/spring/core.html#spring-core" target="_blank" rel="noreferrer">https://springdoc.cn/spring/core.html#spring-core</a></li><li><a href="https://www.bilibili.com/video/BV1584y1r7n6" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1584y1r7n6</a></li><li><a href="https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html" target="_blank" rel="noreferrer">https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html</a></li><li><a href="https://blog.csdn.net/riemann_/article/details/118500805" target="_blank" rel="noreferrer">https://blog.csdn.net/riemann_/article/details/118500805</a></li><li><a href="https://blog.csdn.net/qq_20021569/article/details/109178816" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_20021569/article/details/109178816</a></li><li><a href="https://gitee.com/moxi159753/LearningNotes/tree/master/%E6%A0%A1%E6%8B%9B%E9%9D%A2%E8%AF%95/Spring%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90" target="_blank" rel="noreferrer">https://gitee.com/moxi159753/LearningNotes/tree/master/校招面试/Spring源码解析</a></li><li><a href="https://cloud.tencent.com/developer/article/2216932" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/2216932</a></li></ul>`,219)])])}const u=a(o,[["render",i]]);export{B as __pageData,u as default};
