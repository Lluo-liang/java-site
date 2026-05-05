import{_ as s,o as a,c as l,am as p}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"SpringCloud_组件基本使用_Sentinel","description":"","frontmatter":{"title":"SpringCloud_组件基本使用_Sentinel","excerpt":"SpringCloud_组件基本使用_Sentinel","date":"2023-12-04 09:33:09","updated":"2023-12-04 09:33:09"},"headers":[],"relativePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Sentinel.md","filePath":"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Sentinel.md","lastUpdated":null}'),e={name:"框架/微服务&分布式/框架 SpringCloud/SpringCloud_组件基本使用_Sentinel.md"};function t(i,n,o,r,c,d){return a(),l("div",null,[...n[0]||(n[0]=[p(`<p>使用类似于 Sleuth，在对应服务添加依赖和注解配置后，Sentinel 能够对服务做一个服务流量监听，进行熔断降级、系统负载等操作。</p><p><strong>Sentinel 控制台的下载</strong></p><p>下载地址： <a href="https://github.com/alibaba/Sentinel/releases/tag/1.8.3" target="_blank" rel="noreferrer">https://github.com/alibaba/Sentinel/releases/tag/1.8.3</a></p><p>注意的一些内容</p><ul><li>注解使用（服务程序中使用）</li><li>流控规则</li><li>熔断规则</li><li>系统规则</li></ul><p>基本学习和使用： <a href="https://blog.csdn.net/Adda_Chen/article/details/126694546" target="_blank" rel="noreferrer">https://blog.csdn.net/Adda_Chen/article/details/126694546</a></p><p>Sentinel 可以简单的分为 Sentinel 核心库和 Dashboard控制台。核心库不依赖 Dashboard，但是结合 Dashboard 可以取得最好的效果。</p><p>我们说的资源，可以是任何东西，服务，服务里的方法，甚至是一段代码。使用 Sentinel 来进行资源保护，主要分为几个步骤:</p><ul><li>定义资源</li><li>定义规则</li><li>检验规则是否生效</li></ul><p>等实际使用再看一下具体使用示例</p><hr><p>Sentinel 是阿里巴巴开源的一款面向分布式服务架构的高可用性保障组件，主要用于流量控制（限流）、熔断降级、系统负载保护等，以保障微服务或分布式系统的稳定性和可靠性。Sentinel 以流量为切入点，从多个维度监控、记录和处理服务调用情况，支持丰富的流量控制策略，如QPS限流、线程数限流、熔断降级等。</p><p>核心特性</p><ul><li><strong>丰富的流量控制策略</strong>：支持基于QPS的限流、基于响应时间的熔断降级、系统负载保护等策略。</li><li><strong>实时监控</strong>：提供实时的监控数据展示，帮助快速定位流量控制效果和系统状态。</li><li><strong>规则动态推送</strong>：支持动态规则配置，无需重启应用即可实时生效。</li><li><strong>广泛的框架整合</strong>：提供了对Spring Cloud、Dubbo、gRPC等多种微服务框架的适配，方便在各种微服务架构下使用。</li></ul><p>使用示例：</p><p>以在Spring Cloud项目中使用Sentinel为例，首先需要添加Sentinel的Starter依赖到项目的<code>pom.xml</code>文件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;版本号&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><blockquote><p>定义规则</p></blockquote><p>Sentinel 支持通过硬编码、文件配置、控制台配置等多种方式定义规则。以下是一个简单的流量控制规则示例，通过硬编码的方式定义：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.alibaba.csp.sentinel.Entry;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.SphU;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.block.BlockException;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.block.RuleConstant;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.block.flow.FlowRule;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.block.flow.FlowRuleManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SentinelDemo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 配置规则</span></span>
<span class="line"><span>        initFlowRules();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        while (true) {</span></span>
<span class="line"><span>            try (Entry entry = SphU.entry(&quot;HelloWorld&quot;)) {</span></span>
<span class="line"><span>                // 被保护的逻辑</span></span>
<span class="line"><span>                System.out.println(&quot;hello world&quot;);</span></span>
<span class="line"><span>            } catch (BlockException ex) {</span></span>
<span class="line"><span>                // 处理被流量控制后的逻辑</span></span>
<span class="line"><span>                System.out.println(&quot;blocked!&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void initFlowRules() {</span></span>
<span class="line"><span>        List&lt;FlowRule&gt; rules = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        FlowRule rule = new FlowRule();</span></span>
<span class="line"><span>        rule.setResource(&quot;HelloWorld&quot;);</span></span>
<span class="line"><span>        rule.setGrade(RuleConstant.FLOW_GRADE_QPS);</span></span>
<span class="line"><span>        // Set limit QPS to 20.</span></span>
<span class="line"><span>        rule.setCount(20);</span></span>
<span class="line"><span>        rules.add(rule);</span></span>
<span class="line"><span>        FlowRuleManager.loadRules(rules);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，定义了一个简单的流量控制规则，对名为<code>HelloWorld</code>的资源进行限流，限制其QPS（每秒查询率）不超过20。</p><p>启动和测试</p><ul><li>将上述代码添加到Spring Boot项目中。</li><li>启动Spring Boot应用。</li><li>进行压力测试，可以使用JMeter或其他工具模拟高并发请求。</li><li>观察控制台输出，验证限流效果。</li></ul><blockquote><p>使用Sentinel控制台</p></blockquote><p>Sentinel还提供了一个控制台（Sentinel Dashboard），通过它可以更加方便地管理规则和监控应用状态。使用控制台，可以动态修改限流规则、查看实时监控数据等。</p><ul><li>下载并启动Sentinel控制台。</li><li>在应用中配置控制台地址。</li><li>访问控制台，添加或修改规则，查看监控数据。</li></ul><hr><p>参考</p><ul><li><a href="https://blog.csdn.net/qq_36903261/article/details/106899215" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_36903261/article/details/106899215</a></li><li><a href="https://blog.csdn.net/qq_38374397/article/details/125603109" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_38374397/article/details/125603109</a></li></ul>`,29)])])}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
