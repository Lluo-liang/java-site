import{_ as s,o as n,c as e,am as l}from"./chunks/framework.CiF4W93w.js";const f=JSON.parse('{"title":"Kafka 重试-原生重试机制","description":"","frontmatter":{"title":"Kafka 重试-原生重试机制","excerpt":"摘要","date":"2025-11-18 11:45:37","updated":"2025-11-18 11:45:37"},"headers":[],"relativePath":"中间件/中间件 - 消息队列/消息队列_Kafka/Kafka 重试-原生重试机制.md","filePath":"中间件/中间件 - 消息队列/消息队列_Kafka/Kafka 重试-原生重试机制.md","lastUpdated":null}'),p={name:"中间件/中间件 - 消息队列/消息队列_Kafka/Kafka 重试-原生重试机制.md"};function t(i,a,r,o,c,d){return n(),e("div",null,[...a[0]||(a[0]=[l(`<p>使用 手动 ACK + 阻塞式重试 的方式实现 Kafka 原生重试</p><h3 id="ack-模式配置" tabindex="-1">ACK 模式配置 <a class="header-anchor" href="#ack-模式配置" aria-label="Permalink to &quot;ACK 模式配置&quot;">​</a></h3><p>声明配置类后，在配置类声明相关属性配置</p><p>代码示例（某个项目中）, 禁用自动提交，配合手动 ACK 使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`stringObjectMap.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);</span></span></code></pre></div><ul><li>使用 手动 ACK 模式</li><li>必须显式调用 ack.acknowledge() 才能提交 offset</li><li>如果不调用 ack：消息 offset 不会提交，下次重启服务会重新消费该消息</li></ul><p>ack 跟服务有关系，跟重试关系不大</p><h3 id="阻塞式重试配置" tabindex="-1">阻塞式重试配置 <a class="header-anchor" href="#阻塞式重试配置" aria-label="Permalink to &quot;阻塞式重试配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  @Value(value = &quot;\${kafka.backoff.interval:1000}&quot;)</span></span>
<span class="line"><span>  private Long interval;  // 重试间隔，默认 1000ms（1秒）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Value(value = &quot;\${kafka.backoff.max_failure:3}&quot;)</span></span>
<span class="line"><span>  private Long maxAttempts;  // 最大重试次数，默认 3 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Bean</span></span>
<span class="line"><span>  public DefaultErrorHandler errorHandler() {</span></span>
<span class="line"><span>	  BackOff fixedBackOff = new FixedBackOff(interval, maxAttempts);</span></span>
<span class="line"><span>	  DefaultErrorHandler errorHandler = new DefaultErrorHandler(..., fixedBackOff);</span></span>
<span class="line"><span>	  // 可重试的异常</span></span>
<span class="line"><span>	  errorHandler.addRetryableExceptions(SocketTimeoutException.class, ...);</span></span>
<span class="line"><span>	  // 不可重试的异常</span></span>
<span class="line"><span>	  errorHandler.addNotRetryableExceptions(NullPointerException.class, ...);</span></span>
<span class="line"><span>	  return errorHandler;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>注意一下，这里是 addRetryableExceptions，不是 set；</p><p>如果这里是没有明确声明的不可重试异常，他的默认机制也是会走重试操作的。</p><h3 id="consumer-配置" tabindex="-1">Consumer 配置 <a class="header-anchor" href="#consumer-配置" aria-label="Permalink to &quot;Consumer 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 两次 poll 之间最大间隔，超过触发 rebalance</span></span>
<span class="line"><span>  stringObjectMap.put(&quot;max.poll.interval.ms&quot;, &quot;60000&quot;);  // 60秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // session 超时时间，超过服务端认为消费者离线</span></span>
<span class="line"><span>  stringObjectMap.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 30000);  // 30秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 每次 poll 最大记录数</span></span>
<span class="line"><span>  stringObjectMap.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 10);  // 10条</span></span></code></pre></div><h3 id="项目配置文件中自定义参数配置" tabindex="-1">项目配置文件中自定义参数配置 <a class="header-anchor" href="#项目配置文件中自定义参数配置" aria-label="Permalink to &quot;项目配置文件中自定义参数配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 启动kafka消费者</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>	consumer:</span></span>
<span class="line"><span>	  auto-start: false  # 是否自动启动消费者</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#可通过配置文件覆盖的参数</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>	backoff:</span></span>
<span class="line"><span>	  interval: 1000      # 重试间隔（毫秒），默认1秒</span></span>
<span class="line"><span>	  max_failure: 3      # 最大重试次数，默认3次</span></span>
<span class="line"><span>	consumer:</span></span>
<span class="line"><span>	  auto-start: true    # 是否自动启动</span></span></code></pre></div><h3 id="重试机制流程" tabindex="-1">重试机制流程 <a class="header-anchor" href="#重试机制流程" aria-label="Permalink to &quot;重试机制流程&quot;">​</a></h3><p>场景 1：消费过程中抛异常</p><ol><li>消费方法抛出异常</li><li>DefaultErrorHandler 拦截异常</li><li>判断是否为可重试异常</li><li>如果可重试，等待 interval 时间后同步阻塞重试</li><li>最多重试 maxAttempts 次</li><li>重试成功或达到最大次数后记录日志</li><li>消息被视为处理完成，继续消费下一条</li></ol><p>场景 2：不调用 ack.acknowledge()</p><p>不 ack 的后果：</p><ul><li>当前消息 offset 不会提交 到 Kafka</li><li>服务重启后，会从上次提交的 offset 开始重新消费</li><li>但在运行期间不会自动重试（除非抛异常触发 ErrorHandler）</li></ul><p>⬆️ 这里 ack 的作用，<strong>更多的还是 消息 offset 的下表是否 commit，跟重试关系不大</strong>。</p><p>场景 3：超过 max.poll.interval.ms</p><ul><li>如果消费逻辑耗时超过 60 秒（默认 max.poll.interval.ms）</li><li>Kafka 认为消费者已死，触发 Rebalance</li><li>消息会被分配给其他消费者实例</li><li>原消费者会收到 CommitFailedException</li></ul><h3 id="代码解释-🐕‍🦺" tabindex="-1">代码解释 🐕‍🦺 <a class="header-anchor" href="#代码解释-🐕‍🦺" aria-label="Permalink to &quot;代码解释  🐕‍🦺&quot;">​</a></h3><p>解释一段项目中项目配置类中使用到的代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Bean  </span></span>
<span class="line"><span>public DefaultErrorHandler errorHandler() {  </span></span>
<span class="line"><span>    BackOff fixedBackOff = new FixedBackOff(interval, maxAttempts);  </span></span>
<span class="line"><span>    DefaultErrorHandler errorHandler = new DefaultErrorHandler((consumerRecord, e) -&gt; {  </span></span>
<span class="line"><span>        log.error(&quot;kafka消费失败, topic: {}, partition: {}, offset: {}, key: {}, value: {}&quot;,  </span></span>
<span class="line"><span>            consumerRecord.topic(), consumerRecord.partition(), consumerRecord.offset(), consumerRecord.key(), consumerRecord.value(), ExceptionUtils.getStackTrace(e));  </span></span>
<span class="line"><span>    }, fixedBackOff);  </span></span>
<span class="line"><span>    errorHandler.addRetryableExceptions(SocketTimeoutException.class, BeanCreationNotAllowedException.class, DataAccessResourceFailureException.class);  </span></span>
<span class="line"><span>    errorHandler.addNotRetryableExceptions(NullPointerException.class,GenericException.class);  </span></span>
<span class="line"><span>    return errorHandler;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>定义重试机制：<code>FixedBackOff</code><ul><li><strong>FixedBackOff</strong>：它是一个固定间隔的阻塞重试策略，重试的间隔时间和最大重试次数通过 <code>interval</code> 和 <code>maxAttempts</code> 指定</li></ul></li><li>配置 DefaultErrorHandler</li><li>配置可以重试与不可重试的异常 <ul><li><strong>addRetryableExceptions</strong>：设置哪些异常是可以进行重试的。如果这些异常在消费过程中抛出，Kafka 会按配置的重试机制进行处理。</li><li><strong>addNotRetryableExceptions</strong>：设置哪些异常是不可重试的。如果抛出这些异常，消息会被直接丢弃或写入死信队列，而不会重试。</li></ul></li></ul><hr>`,29)])])}const k=s(p,[["render",t]]);export{f as __pageData,k as default};
