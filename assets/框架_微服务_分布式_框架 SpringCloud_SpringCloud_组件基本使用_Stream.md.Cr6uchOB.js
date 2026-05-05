import{_ as a,o as n,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const g=JSON.parse('{"title":"SpringCloud_组件基本使用_Stream","description":"","frontmatter":{"title":"SpringCloud_组件基本使用_Stream","excerpt":"SpringCloud_组件基本使用_Stream","date":"2023-12-04 23:28:19","updated":"2023-12-04 23:28:19"},"headers":[],"relativePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Stream.md","filePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Stream.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Stream.md"};function t(i,s,o,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>Stream 组件是用于封装消息队列来使用的，Bus这个组件一般会结合 Stream 使用；</p><p>看一般性文档解释，主要是围绕 Bus 可以做到配置的动态刷新、事件的传递。具体使用的时候可以看一下相关内容。</p><p>下面内容是引用 ChatGpt 的内容，分别是 Stream 和 Bus 的基本使用。</p><h3 id="_1、spring-cloud-stream的使用" tabindex="-1">1、Spring Cloud Stream的使用 <a class="header-anchor" href="#_1、spring-cloud-stream的使用" aria-label="Permalink to &quot;1、Spring Cloud Stream的使用&quot;">​</a></h3><p>Spring Cloud Stream 是一个用于构建消息驱动微服务架构的框架，它基于Spring Boot和Spring Integration，提供了一种简单的方式来实现各个微服务组件之间的消息通信。</p><p>以下是Spring Cloud Stream的基本使用步骤：</p><blockquote><ol><li>引入依赖</li></ol></blockquote><p>在项目的 <code>pom.xml</code> 文件中，添加 Spring Cloud Stream 的依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-cloud-starter-stream-{binder}&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p><code>{binder}</code> 可以是不同的消息中间件的名称，比如 RabbitMQ、Kafka 等。</p><blockquote><ol start="2"><li>配置消息中间件</li></ol></blockquote><p>在 <code>application.properties</code> 或 <code>application.yml</code> 文件中配置消息中间件的连接信息，以 RabbitMQ 为例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    stream:</span></span>
<span class="line"><span>      bindings:</span></span>
<span class="line"><span>        output:</span></span>
<span class="line"><span>          destination: my-output-topic</span></span>
<span class="line"><span>          binder: rabbit # RabbitMQ的binder</span></span>
<span class="line"><span>      rabbit:</span></span>
<span class="line"><span>        bindings:</span></span>
<span class="line"><span>          output:</span></span>
<span class="line"><span>            exchangeType: topic</span></span>
<span class="line"><span>            routingKeyExpression: &#39;my-output-topic&#39;</span></span></code></pre></div><blockquote><ol start="3"><li>发送消息</li></ol></blockquote><p>在应用程序中使用 <code>Source</code> 接口定义消息发送的输出通道：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.cloud.stream.annotation.Output;</span></span>
<span class="line"><span>import org.springframework.messaging.MessageChannel;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface MySource {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String OUTPUT = &quot;output&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Output(OUTPUT)</span></span>
<span class="line"><span>    MessageChannel output();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后在需要发送消息的地方注入 <code>MySource</code>，并使用 <code>output()</code> 方法发送消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.messaging.Message;</span></span>
<span class="line"><span>import org.springframework.messaging.support.MessageBuilder;</span></span>
<span class="line"><span>import org.springframework.stereotype.Service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class MessageSenderService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private MySource mySource;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void sendMessage(String payload) {</span></span>
<span class="line"><span>        Message&lt;String&gt; message = MessageBuilder.withPayload(payload).build();</span></span>
<span class="line"><span>        mySource.output().send(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><ol start="4"><li>接收消息</li></ol></blockquote><p>在应用程序中使用 <code>@StreamListener</code> 注解定义消息接收的输入通道：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.cloud.stream.annotation.StreamListener;</span></span>
<span class="line"><span>import org.springframework.messaging.handler.annotation.Payload;</span></span>
<span class="line"><span>import org.springframework.stereotype.Service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class MessageReceiverService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @StreamListener(MySource.INPUT)</span></span>
<span class="line"><span>    public void receiveMessage(@Payload String payload) {</span></span>
<span class="line"><span>        System.out.println(&quot;Received message: &quot; + payload);</span></span>
<span class="line"><span>        // 处理接收到的消息</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><ol start="5"><li>运行时绑定</li></ol></blockquote><p>Spring Cloud Stream 会在运行时将消息通道绑定到消息中间件上，使得消息的发送和接收可以与底层的消息中间件解耦。根据配置的 <code>{binder}</code> 不同，可以支持 RabbitMQ、Kafka、ActiveMQ 等多种消息中间件。</p><p>通过以上步骤，你就可以使用 Spring Cloud Stream 在微服务中实现消息的发送和接收，从而构建消息驱动的微服务架构。</p><h3 id="_2、springcloud-bus-的使用" tabindex="-1">2、SpringCloud Bus 的使用 <a class="header-anchor" href="#_2、springcloud-bus-的使用" aria-label="Permalink to &quot;2、SpringCloud Bus 的使用&quot;">​</a></h3><p>Spring Cloud Bus是一个用于在分布式系统中传播事件的工具，它建立在Spring Cloud Stream之上。它允许微服务架构中的组件之间进行消息推送，实现配置的动态刷新、事件的传递等功能。</p><p>以下是Spring Cloud Bus的基本使用步骤：</p><blockquote><ol><li>引入依赖</li></ol></blockquote><p>在项目的<code>pom.xml</code>文件中添加Spring Cloud Bus的依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-cloud-starter-bus-amqp&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>上述示例中使用了AMQP（Advanced Message Queuing Protocol）作为消息传递的中间件，你也可以选择其他消息中间件，如Kafka等。</p><blockquote><ol start="2"><li>配置消息中间件</li></ol></blockquote><p>在<code>application.properties</code>或<code>application.yml</code>中配置消息中间件的连接信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  rabbitmq:</span></span>
<span class="line"><span>    host: localhost</span></span>
<span class="line"><span>    port: 5672</span></span>
<span class="line"><span>    username: guest</span></span>
<span class="line"><span>    password: guest</span></span></code></pre></div><blockquote><ol start="3"><li>配置Bus</li></ol></blockquote><p>在微服务的<code>application.properties</code>或<code>application.yml</code>中，添加以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    bus:</span></span>
<span class="line"><span>      enabled: true</span></span></code></pre></div><blockquote><p>4.发送消息</p></blockquote><p>在任意微服务中，可以使用Spring Cloud Bus发送消息来触发事件。可以使用HTTP POST请求向<code>/actuator/bus-refresh</code>端点发送刷新请求：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST http://localhost:8080/actuator/bus-refresh</span></span></code></pre></div><p>这样就会触发Spring Cloud Bus发送一个刷新事件，然后各个微服务都会接收到这个事件，从而触发配置的刷新操作。</p><blockquote><ol start="5"><li>接收消息</li></ol></blockquote><p>在微服务中，可以使用<code>@RefreshScope</code>注解标记一个类，使得该类中的配置在接收到刷新事件时能够重新加载：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.cloud.context.config.annotation.RefreshScope;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RefreshScope</span></span>
<span class="line"><span>public class MyController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Value(&quot;\${my.property}&quot;)</span></span>
<span class="line"><span>    private String myProperty;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/property&quot;)</span></span>
<span class="line"><span>    public String getProperty() {</span></span>
<span class="line"><span>        return myProperty;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述示例中，<code>@RefreshScope</code>注解使得<code>MyController</code>类中的配置在接收到刷新事件时会重新加载。</p><p>通过这些步骤，你就可以使用Spring Cloud Bus实现在分布式系统中传播事件，例如动态刷新配置、传递消息等。</p><p>to be contined.....</p>`,47)])])}const b=a(l,[["render",t]]);export{g as __pageData,b as default};
