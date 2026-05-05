import{_ as n,o as a,c as e,am as p}from"./chunks/framework.CiF4W93w.js";const b=JSON.parse('{"title":"websocket的基础使用","description":"","frontmatter":{"title":"websocket的基础使用","excerpt":"websocket的基础使用","date":"2024-03-31 16:23:47","updated":"2024-03-31 16:23:47"},"headers":[],"relativePath":"基础/异常处理与IO/NIO/websocket的基础使用.md","filePath":"基础/异常处理与IO/NIO/websocket的基础使用.md","lastUpdated":null}'),t={name:"基础/异常处理与IO/NIO/websocket的基础使用.md"};function l(o,s,i,c,r,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<p>在Web应用中，WebSocket提供了在单个长时间连接上进行<strong>全双工、双向通讯</strong>的能力(基于HTTP协议)。</p><p>它允许服务器主动向客户端发送信息，适合需要实时功能的应用，如在线聊天、实时通知、游戏等。</p><h3 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h3><p>添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>相关配置</p><p>创建一个WebSocket配置类，使用<code>@EnableWebSocket</code>注解来启用WebSocket，并注册一个WebSocket端点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.web.socket.config.annotation.EnableWebSocket;</span></span>
<span class="line"><span>import org.springframework.web.socket.config.annotation.WebSocketConfigurer;</span></span>
<span class="line"><span>import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebSocket</span></span>
<span class="line"><span>public class WebSocketConfig implements WebSocketConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {</span></span>
<span class="line"><span>        registry.addHandler(myHandler(), &quot;/myWebSocket&quot;).withSockJS();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public WebSocketHandler myHandler() {</span></span>
<span class="line"><span>        return new MyWebSocketHandler();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>前端操作，vue 项目（这里使用的是若 依 的框架）</p><p>先安装一下依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install sockjs-client webstomp-client --registry=https://registry.npmmirror.com</span></span></code></pre></div><p>创建一个组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input v-model=&quot;messageToSend&quot; placeholder=&quot;输入消息&quot; /&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;sendMessage&quot;&gt;发送消息&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div v-for=&quot;(msg, index) in messagesReceived&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>      {&lt;!-- --&gt;{ msg }}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import SockJS from &#39;sockjs-client&#39;;</span></span>
<span class="line"><span>import Stomp from &#39;webstomp-client&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      stompClient: null,</span></span>
<span class="line"><span>      messageToSend: &#39;&#39;,</span></span>
<span class="line"><span>      messagesReceived: [],</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    this.connect();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    connect() {</span></span>
<span class="line"><span>      const socket = new SockJS(&#39;/myWebSocket&#39;);</span></span>
<span class="line"><span>      this.stompClient = Stomp.over(socket);</span></span>
<span class="line"><span>      this.stompClient.connect({}, frame =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;Connected: &#39; + frame);</span></span>
<span class="line"><span>        this.stompClient.subscribe(&#39;/topic/messages&#39;, message =&gt; {</span></span>
<span class="line"><span>          this.messagesReceived.push(JSON.parse(message.body).content);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    sendMessage() {</span></span>
<span class="line"><span>      if (this.stompClient &amp;&amp; this.messageToSend) {</span></span>
<span class="line"><span>        const message = JSON.stringify({ content: this.messageToSend });</span></span>
<span class="line"><span>        this.stompClient.send(&#39;/app/message&#39;, {}, message);</span></span>
<span class="line"><span>        this.messageToSend = &#39;&#39;; // 清空输入框</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>在这个组件中：</p><ul><li>使用<code>v-model</code>绑定一个文本输入框的值到<code>messageToSend</code>。</li><li>点击发送按钮时，调用<code>sendMessage</code>方法。</li><li>在<code>mounted</code>钩子中，组件挂载后立即调用<code>connect</code>方法来连接WebSocket服务器。</li><li><code>connect</code>方法使用<code>SockJS</code>和<code>Stomp</code>库建立连接，并订阅服务器上的消息。接收到的消息被添加到<code>messagesReceived</code>数组中，并在模板中遍历显示。</li><li><code>sendMessage</code>方法通过WebSocket发送用户输入的消息到服务器。</li></ul><p>确保服务器端WebSocket配置正确，且<code>/myWebSocket</code>端点以及<code>/app/message</code>和<code>/topic/messages</code>目的地可用。这个示例假设服务器端能够接收客户端发送的消息，并能将消息广播到<code>/topic/messages</code>目的地</p><p><code>mounted</code>是Vue组件的一个生命周期钩子，它在组件的模板和DOM已经渲染完毕并挂载到页面上之后被调用。这个时刻，组件已经出现在页面上，任何对DOM的操作都可以在这个钩子中执行。</p><p>在这个WebSocket示例中，<code>mounted</code>钩子用来在组件挂载完成后立即建立WebSocket连接，这样做确保了一旦组件准备好，就可以开始接收来自服务器的消息。</p><ul><li><strong><code>/myWebSocket</code></strong>：是WebSocket连接的端点，客户端通过这个URL与服务器建立WebSocket连接。</li><li><strong><code>/topic/messages</code></strong>：是服务器上一个消息主题，客户端通过订阅这个主题来接收服务器广播的消息</li></ul><p>建议单独搞一个前端界面作为演示，可以参考一下这个，如果是做聊天室之类的，可以用这种方式：</p><ul><li><a href="https://blog.csdn.net/BADAO_LIUMANG_QIZHI/article/details/114392573" target="_blank" rel="noreferrer">https://blog.csdn.net/BADAO_LIUMANG_QIZHI/article/details/114392573</a></li><li><a href="https://gitee.com/huangzhejiang/springboot-vue-demo" target="_blank" rel="noreferrer">https://gitee.com/huangzhejiang/springboot-vue-demo</a></li></ul><p>后面测试调整了一下：</p><p>首先是前端组件引用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-form-item label=&quot;websocket&quot; prop=&quot;websocket&quot;&gt;</span></span>
<span class="line"><span>  &lt;web-socket-component&gt;&lt;/web-socket-component&gt;</span></span>
<span class="line"><span>&lt;/el-form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import WebSocketComponent from &#39;@/components/Luoqi/websocket/index.vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>components: { </span></span>
<span class="line"><span>  Treeselect, </span></span>
<span class="line"><span>  WebSocketComponent</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>连接地址改了一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const socket = new SockJS(&#39;http://localhost:8080/myWebSocket&#39;);</span></span></code></pre></div><p>后端的一些跨域和访问权限放行的配置需要改一下</p><p>SecurityConfig 配置类下 的 configure 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#这里改匿名访问也可以</span></span>
<span class="line"><span>.antMatchers(&quot;/myWebSocket/**&quot;).permitAll()</span></span></code></pre></div><p>WebSocketConfig 配置类，需要添加一下 setAllowedOrigins 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class WebSocketConfig implements WebSocketConfigurer {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Override  </span></span>
<span class="line"><span>    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {  </span></span>
<span class="line"><span>        registry.addHandler(myHandler(), &quot;/myWebSocket&quot;)  </span></span>
<span class="line"><span>                .setAllowedOrigins(&quot;http://localhost&quot;)  </span></span>
<span class="line"><span>                .withSockJS();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public WebSocketHandler myHandler() {  </span></span>
<span class="line"><span>        return new MyWebSocketHandler();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //开启 WebSocket的支持  </span></span>
<span class="line"><span>    @Bean  </span></span>
<span class="line"><span>    public ServerEndpointExporter serverEndpointExporter(){  </span></span>
<span class="line"><span>        return  new ServerEndpointExporter();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>同时在若依分离式项目中，尽量都 clean 再 install 一下</p><h3 id="聊天室" tabindex="-1">聊天室 <a class="header-anchor" href="#聊天室" aria-label="Permalink to &quot;聊天室&quot;">​</a></h3><p>这个是比较常见的功能，可以尝试一下实现。</p><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>看一下这个： <a href="https://mp.weixin.qq.com/s/0SI9C3tBPqyIeMtkfTZk8g" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/0SI9C3tBPqyIeMtkfTZk8g</a></p><h3 id="netty-websocket" tabindex="-1">Netty + WebSocket <a class="header-anchor" href="#netty-websocket" aria-label="Permalink to &quot;Netty + WebSocket&quot;">​</a></h3><p>参考： <a href="https://github.com/niezhiliang/netty-websocket-spring-boot" target="_blank" rel="noreferrer">https://github.com/niezhiliang/netty-websocket-spring-boot</a></p>`,38)])])}const m=n(t,[["render",l]]);export{b as __pageData,m as default};
