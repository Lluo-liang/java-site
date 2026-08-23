import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const m=JSON.parse('{"title":"通过RestTemplate进行远程调用","description":"","frontmatter":{"title":"通过RestTemplate进行远程调用","excerpt":"通过RestTemplate进行远程调用","date":"2023-11-22 22:44:31","updated":"2023-11-22 22:44:31"},"headers":[],"relativePath":"框架/Spring家族/Spring Dependency Injection/通过RestTemplate进行远程调用.md","filePath":"框架/Spring家族/Spring Dependency Injection/通过RestTemplate进行远程调用.md","lastUpdated":null}'),t={name:"框架/Spring家族/Spring Dependency Injection/通过RestTemplate进行远程调用.md"};function l(i,n,c,o,r,g){return a(),p("div",null,[...n[0]||(n[0]=[e(`<p>RestTemplate 是从 Spring3.0 开始支持的一个 HTTP 请求工具，它提供了常见的REST请求方案的模版。对于远程请求进行了一定封装，从而通过建议配置可以实现远程调用。</p><p>他底层用的是 JDK 的 HTTP 请求</p><ol><li>添加依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;5.2.2.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;httpclient&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;4.5.7&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><ol start="2"><li>配置类</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.http.client.ClientHttpRequestFactory;</span></span>
<span class="line"><span>import org.springframework.http.client.SimpleClientHttpRequestFactory;</span></span>
<span class="line"><span>import org.springframework.web.client.RestTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * RestTemplate配置类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class RestTemplateConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public RestTemplate restTemplate(ClientHttpRequestFactory factory){</span></span>
<span class="line"><span>        return new RestTemplate(factory);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public ClientHttpRequestFactory simpleClientHttpRequestFactory(){</span></span>
<span class="line"><span>        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();</span></span>
<span class="line"><span>        factory.setReadTimeout(5000);//单位为ms</span></span>
<span class="line"><span>        factory.setConnectTimeout(5000);//单位为ms</span></span>
<span class="line"><span>        return factory;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>示例调用操作</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class OrderController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final String PAYMENT_URL = &quot;http://localhost:8001&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private RestTemplate restTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //因为浏览器只支持get请求，为了方便这里就用get</span></span>
<span class="line"><span>    @GetMapping(&quot;/consumer/payment/create&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;Payment&gt; create(Payment payment){</span></span>
<span class="line"><span>        log.info(&quot;********插入的数据：&quot; + payment);</span></span>
<span class="line"><span>        //postForObject分别有三个参数：请求地址，请求参数，返回的对象类型</span></span>
<span class="line"><span>        return restTemplate.postForObject(PAYMENT_URL + &quot;/payment/create&quot;, payment, CommonResult.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/consumer/payment/get/{id}&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;Payment&gt; getPayment(@PathVariable(&quot;id&quot;) Long id){</span></span>
<span class="line"><span>        log.info(&quot;********查询的id：&quot; + id);</span></span>
<span class="line"><span>        //getForObject两个参数：请求地址，返回的对象类型</span></span>
<span class="line"><span>        return restTemplate.getForObject(PAYMENT_URL + &quot;/payment/get/&quot; + id, CommonResult.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考</p><ul><li><a href="https://blog.csdn.net/weixin_44073321/article/details/102804615" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44073321/article/details/102804615</a></li><li><a href="https://blog.csdn.net/weixin_43702146/article/details/116567707" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43702146/article/details/116567707</a></li><li><a href="https://blog.csdn.net/dqxiaoxiao/article/details/114375873" target="_blank" rel="noreferrer">https://blog.csdn.net/dqxiaoxiao/article/details/114375873</a></li></ul>`,10)])])}const u=s(t,[["render",l]]);export{m as __pageData,u as default};
