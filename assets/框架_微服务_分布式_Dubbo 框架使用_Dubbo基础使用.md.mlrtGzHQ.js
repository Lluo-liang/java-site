import{_ as n,o as s,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const u=JSON.parse('{"title":"Dubbo基础使用","description":"","frontmatter":{"title":"Dubbo基础使用","excerpt":"Dubbo基础使用","date":"2024-02-08 17:57:45","updated":"2024-02-08 17:57:45"},"headers":[],"relativePath":"框架/微服务&分布式/Dubbo 框架使用/Dubbo基础使用.md","filePath":"框架/微服务&分布式/Dubbo 框架使用/Dubbo基础使用.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/Dubbo 框架使用/Dubbo基础使用.md"};function i(t,a,o,r,c,d){return s(),p("div",null,[...a[0]||(a[0]=[e(`<p>参考：</p><ul><li><a href="https://cn.dubbo.apache.org/zh-cn/overview/quickstart/java/brief/" target="_blank" rel="noreferrer">https://cn.dubbo.apache.org/zh-cn/overview/quickstart/java/brief/</a></li><li><a href="https://bugstack.cn/md/road-map/dubbo.html" target="_blank" rel="noreferrer">https://bugstack.cn/md/road-map/dubbo.html</a></li></ul><h2 id="一、基本介绍" tabindex="-1">一、基本介绍 <a class="header-anchor" href="#一、基本介绍" aria-label="Permalink to &quot;一、基本介绍&quot;">​</a></h2><p>基本的一些介绍：</p><p>Apache Dubbo 是一个高性能、轻量级的开源 Java RPC（Remote Procedure Call，远程过程调用）框架。</p><p>它提供了三大核心能力： 面向接口的远程方法调用、智能容错和负载均衡以及服务自动注册和发现。</p><p>通过 Dubbo 的方式调用接口服务的逻辑见如下，一般来说，服务提供方和服务消费方会向注册中心注册服务，然后服务消费方会通过 dubbo 的方式调用公有模块下的 接口方法，实现方法在服务提供方下。</p><ul><li>RPC 调用方式 <ul><li>RPC允许一个程序调用另一个位置（通常是远程服务器）上的函数或方法，就像调用本地方法一样，隐藏了网络通信的细节</li></ul></li><li>Dubbo 组件 <ul><li>服务提供方 <ul><li>对外提供了一个提供Rpc 接口的服务模块 qwe</li><li>在业务实现模块中进行接口实现，实现类添加 Dubbo 的注解</li><li>引入注册中心，Dubbo会在配置路径下查找服务实现类，并自动注册到注册中心</li></ul></li><li>服务调用方 <ul><li>第三方系统引入这个服务模块 qwe 依赖</li><li>添加 dubbo 和 注册中心的依赖，进行服务调用</li><li>根据 Dubbo 的约定俗成的方式调用接口</li></ul></li></ul></li></ul><p>以下是 Dubbo 的基础使用方法，包括服务提供者（Provider）和服务消费者（Consumer）的配置。</p><p>使用示例后续待整合给一个比较OK的示例 to be contined....</p><h3 id="基础使用示例" tabindex="-1">基础使用示例 <a class="header-anchor" href="#基础使用示例" aria-label="Permalink to &quot;基础使用示例&quot;">​</a></h3><p>在 Spring Boot 项目中使用 Dubbo 进行远程服务调用涉及到几个步骤：定义服务接口、创建服务提供者（Provider）、创建服务消费者（Consumer）以及配置 Dubbo 和注册中心（通常使用 Zookeeper）。</p><h4 id="服务提供" tabindex="-1">服务提供 <a class="header-anchor" href="#服务提供" aria-label="Permalink to &quot;服务提供&quot;">​</a></h4><h5 id="_1-添加依赖" tabindex="-1">1. 添加依赖 <a class="header-anchor" href="#_1-添加依赖" aria-label="Permalink to &quot;1. 添加依赖&quot;">​</a></h5><p>首先，确保在服务提供者和服务消费者的 <code>pom.xml</code> 文件中添加了必要的依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;!-- Spring Boot Starter --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!-- Dubbo Spring Boot Starter --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;dubbo-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.7.8&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!-- Zookeeper Starter --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;dubbo-dependencies-zookeeper&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.7.8&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><h5 id="_2-定义服务接口" tabindex="-1">2. 定义服务接口 <a class="header-anchor" href="#_2-定义服务接口" aria-label="Permalink to &quot;2. 定义服务接口&quot;">​</a></h5><p>在一个公共模块中定义服务接口，这样服务提供者和消费者都能访问到它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface GreetingService {</span></span>
<span class="line"><span>    String sayHello(String name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>提供公共模块的方式，可以是在系统A内容提供一个公共模块，然后将定义接口放置在该模块中；</p><p>如果系统B 需要通过 RPC 方式调用该接口方法，需要引入该定义服务接口模块的依赖，然后再通过 dubbo 的方式调用 系统 A 的接口方法。</p><h5 id="_3-创建服务提供者" tabindex="-1">3. 创建服务提供者 <a class="header-anchor" href="#_3-创建服务提供者" aria-label="Permalink to &quot;3. 创建服务提供者&quot;">​</a></h5><p>服务提供者实现了服务接口，并使用 <code>@Service</code> 注解将其注册为 Dubbo 服务。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.apache.dubbo.config.annotation.DubboService;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@DubboService(version = &quot;1.0.0&quot;, interfaceClass = GreetingService.class)</span></span>
<span class="line"><span>public class GreetingServiceImpl implements GreetingService {</span></span>
<span class="line"><span>    @Value(&quot;\${dubbo.application.name}&quot;)</span></span>
<span class="line"><span>    private String serviceName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String sayHello(String name) {</span></span>
<span class="line"><span>        return String.format(&quot;[%s]: Hello, %s&quot;, serviceName, name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>application.properties</code> 中配置服务提供者的 Dubbo 和 Zookeeper 信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Dubbo application name</span></span>
<span class="line"><span>dubbo.application.name=provider-service</span></span>
<span class="line"><span># Registry center address</span></span>
<span class="line"><span>dubbo.registry.address=zookeeper://localhost:2181</span></span>
<span class="line"><span># Dubbo protocol</span></span>
<span class="line"><span>dubbo.protocol.name=dubbo</span></span>
<span class="line"><span>dubbo.protocol.port=20880</span></span></code></pre></div><h4 id="服务消费" tabindex="-1">服务消费 <a class="header-anchor" href="#服务消费" aria-label="Permalink to &quot;服务消费&quot;">​</a></h4><h5 id="_4-创建服务消费者" tabindex="-1">4. 创建服务消费者 <a class="header-anchor" href="#_4-创建服务消费者" aria-label="Permalink to &quot;4. 创建服务消费者&quot;">​</a></h5><p>服务消费者使用 <code>@DubboReference</code> 注解来引用远程服务。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.apache.dubbo.config.annotation.DubboReference;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class GreetingServiceConsumer {</span></span>
<span class="line"><span>    @DubboReference(version = &quot;1.0.0&quot;)</span></span>
<span class="line"><span>    private GreetingService greetingService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String sayHello(String name) {</span></span>
<span class="line"><span>        return greetingService.sayHello(name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>application.properties</code> 中配置服务消费者的 Dubbo 和 Zookeeper 信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Dubbo application name</span></span>
<span class="line"><span>dubbo.application.name=consumer-service</span></span>
<span class="line"><span># Registry center address</span></span>
<span class="line"><span>dubbo.registry.address=zookeeper://localhost:2181</span></span></code></pre></div><h5 id="_5-测试服务调用" tabindex="-1">5. 测试服务调用 <a class="header-anchor" href="#_5-测试服务调用" aria-label="Permalink to &quot;5. 测试服务调用&quot;">​</a></h5><p>最后，在服务消费者项目中，你可以创建一个 REST 控制器或命令行运行器来测试服务调用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.boot.CommandLineRunner;</span></span>
<span class="line"><span>import org.springframework.boot.SpringApplication;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.SpringBootApplication;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class ConsumerApplication implements CommandLineRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private GreetingServiceConsumer greetingServiceConsumer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(ConsumerApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run(String... args) throws Exception {</span></span>
<span class="line"><span>        String hello = greetingServiceConsumer.sayHello(&quot;Dubbo&quot;);</span></span>
<span class="line"><span>        System.out.println(hello);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意事项</p></blockquote><ul><li>确保 Zookeeper 服务已经启动并且监听在正确的端口上。</li><li>服务提供者和消费者都需要在其 <code>application.properties</code> 或 <code>application.yml</code> 文件中配置 Dubbo 和 Zookeeper 的连接信息。</li><li>使用 <code>@DubboService</code> 和 <code>@DubboReference</code> 注解时，确保版本信息一致，以便正确引用服务。</li></ul><hr>`,38)])])}const g=n(l,[["render",i]]);export{u as __pageData,g as default};
