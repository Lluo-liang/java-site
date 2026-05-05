import{_ as s,o as n,c as e,am as p}from"./chunks/framework.CiF4W93w.js";const g=JSON.parse('{"title":"SpringCloud_组件基本使用_Eureka","description":"","frontmatter":{"title":"SpringCloud_组件基本使用_Eureka","excerpt":"SpringCloud_组件基本使用_Eureka","date":"2023-11-22 23:00:33","updated":"2023-11-22 23:00:33"},"headers":[],"relativePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Eureka.md","filePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Eureka.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Eureka.md"};function t(i,a,r,c,o,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h3 id="_1、eureka-是什么" tabindex="-1">1、Eureka 是什么 <a class="header-anchor" href="#_1、eureka-是什么" aria-label="Permalink to &quot;1、Eureka 是什么&quot;">​</a></h3><p>Eureka 是一个Netflix 开源的服务发现组件，包括 Server 和 Client 两部分。在 Spring Cloud 子项目 Spring Cloud Netflix 中。</p><blockquote><p>服务注册与发现</p></blockquote><p>Eureka采用了CS的设计架构，Eureka Server作为服务注册功能的服务器，它是服务注册中心。</p><p>而系统中的其他微服务，使用Eureka的客户端连接到Eureka Server并维持心跳连接。</p><p>这样系统的维护人员就可以通过Eureka Server来监控系统中各个微服务是否正常运行。</p><p>在服务注册与发现中，有一个注册中心。当服务器启动的时候，会把当前自己服务器的信息比如服务地址通讯地址等以别名方式注册到注册中心上。另一方（消费者服务提供者)，以该别名的方式去注册中心上获取到实际的服务通讯地址，然后再实现本地RPC调用。</p><p>RPC远程调用框架核心设计思想：在于注册中心，因为使用注册中心管理每个服务与服务之间的一个依赖关系（服务治理概念）。在任何 rpc 远程框架中，都会有一个注册中心（存放服务地址相关信息（接口地址）)</p><p>Eureka 系统架构（右图是Dubbo的架构） <img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311222335266.png" alt="image.png"></p><blockquote><p>Eureka Server 与 Eureka Client</p></blockquote><p>Eureka Server 提供服务注册服务，各个微服务节点通过配置启动后，会在 Eureka Server中进行注册，这样EurekaServer中的服务注册表中将会存储所有可用服务节点的信息，服务节点的信息可以在界面中直观看到。</p><p>Eureka Client通过注册中心进行访问， Eureka Client 是一个Java客户端，用于简化Eureka Server的交互，客户端同时也具备一个内置的、使用轮询(round-robin)负载算法的负载均衡器。</p><p>在应用启动后，将会向Eureka Server发送心跳（默认周期为30秒）。如果Eureka Server 在多个心跳周期内没有接收到某个节点的心跳，EurekaServer将会从服务注册表中把这个服务节点移除（默认90秒）</p><h3 id="_2、基本使用" tabindex="-1">2、基本使用 <a class="header-anchor" href="#_2、基本使用" aria-label="Permalink to &quot;2、基本使用&quot;">​</a></h3><blockquote><p>服务端</p></blockquote><p>pom</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-cloud-starter-eureka-server&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.4.7.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--热部署工具--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span></code></pre></div><p>application.yml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 7001</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Eureka配置</span></span>
<span class="line"><span>eureka:</span></span>
<span class="line"><span>  instance:</span></span>
<span class="line"><span>    hostname: localhost #Eureka服务端的实例名称</span></span>
<span class="line"><span>  client:</span></span>
<span class="line"><span>    register-with-eureka: false   #表示是否向注册中心注册自己</span></span>
<span class="line"><span>    fetch-registry: false   #为false表示自己是注册中心</span></span>
<span class="line"><span>    service-url:    #监控页面</span></span>
<span class="line"><span>      defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/</span></span></code></pre></div><p>启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@EnableEurekaServer //启动服务发现，接受注册</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class EurekaServer_7001 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(EurekaServer_7001.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>启动项目，访问 <a href="http://localhost:7001/" target="_blank" rel="noreferrer">http://localhost:7001/</a></p><blockquote><p>客户端</p></blockquote><p>pom</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-cloud-starter-eureka&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.4.7.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>application</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#Eureka配置</span></span>
<span class="line"><span>eureka:</span></span>
<span class="line"><span>  client:</span></span>
<span class="line"><span>    service-url:</span></span>
<span class="line"><span>      defaultZone: http://localhost:7001/eureka/</span></span>
<span class="line"><span>  instance:</span></span>
<span class="line"><span>    instance-id: springcloud-provider-dept-8001   # 修改eureka上的默认描述信息</span></span>
<span class="line"><span>    prefer-ip-address: true  # true,可以显示服务的IP地址</span></span></code></pre></div><p>启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>@EnableEurekaClient</span></span>
<span class="line"><span>public class DeptProvider_8001 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(DeptProvider_8001.class,args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>to be contined....</p><p>参考</p><ul><li><a href="https://blog.csdn.net/qq_36903261/article/details/106551120" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_36903261/article/details/106551120</a></li><li><a href="https://blog.csdn.net/qq_45078781/article/details/118671285" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_45078781/article/details/118671285</a></li><li><a href="https://www.bilibili.com/video/BV18E411x7eT" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV18E411x7eT</a></li><li><a href="https://zhuanlan.zhihu.com/p/142941185" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/142941185</a></li></ul>`,32)])])}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
