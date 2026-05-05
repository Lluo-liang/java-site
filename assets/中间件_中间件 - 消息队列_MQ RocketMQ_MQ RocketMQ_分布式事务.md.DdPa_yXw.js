import{_ as n,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const g=JSON.parse('{"title":"MQ RocketMQ_分布式事务","description":"","frontmatter":{"title":"MQ RocketMQ_分布式事务","excerpt":"消息队列_RocketMQ_基础使用","date":"2024-04-18 17:17:51","updated":"2024-04-18 17:17:51"},"headers":[],"relativePath":"中间件/中间件 - 消息队列/MQ RocketMQ/MQ RocketMQ_分布式事务.md","filePath":"中间件/中间件 - 消息队列/MQ RocketMQ/MQ RocketMQ_分布式事务.md","lastUpdated":null}'),l={name:"中间件/中间件 - 消息队列/MQ RocketMQ/MQ RocketMQ_分布式事务.md"};function t(i,s,c,r,o,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="分布式事务的实现" tabindex="-1">分布式事务的实现 <a class="header-anchor" href="#分布式事务的实现" aria-label="Permalink to &quot;分布式事务的实现&quot;">​</a></h3><h4 id="逻辑步骤" tabindex="-1">逻辑步骤 <a class="header-anchor" href="#逻辑步骤" aria-label="Permalink to &quot;逻辑步骤&quot;">​</a></h4><p>RocketMQ 实现分布式事务的实现机制是通过事务消息加上事务反查机制</p><p>具体步骤：</p><ol><li><strong>发送半消息（Prepare Message）</strong>： <ul><li>生产者向 MQ 发送一个特殊的消息（半消息），这个消息不会立即投递给消费者。</li></ul></li><li><strong>执行本地事务</strong>： <ul><li>生产者发送半消息后，将执行本地事务逻辑（如数据库操作）。这个步骤的成功与否将决定消息是否可被消费。</li></ul></li><li><strong>根据本地事务状态提交或回滚消息</strong>： <ul><li>如果本地事务成功，生产者将通知 MQ 提交消息，使其对消费者可见。</li><li>如果本地事务失败，生产者将通知 MQ 回滚消息，消息将被删除不会投递给消费者。</li></ul></li><li><strong>事务状态回查</strong>： <ul><li>如果 MQ 长时间没有收到关于这个半消息的最终状态（提交或回滚），MQ 将向生产者发送回查消息。生产者需要检查本地事务的状态，并回应 MQ 事务的最终状态。</li></ul></li></ol><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240307141544.png" alt="image.png"></p><p><strong>事务回查机制</strong></p><p>一般会有一个定时机制，然后如果长时间没有收到二次确认，会进行事务回查</p><ul><li>这个是生产者反而是消费者，收到这条消息后，通过本地实现的 checker 接口的 checkLocalTransaction 方法进行检查本地事务是否执行完成，并将结果告知 MQ 服务器。</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240307155659.png" alt="image.png"></p><h4 id="代码分析" tabindex="-1">代码分析 <a class="header-anchor" href="#代码分析" aria-label="Permalink to &quot;代码分析&quot;">​</a></h4><p>参考： <a href="https://juejin.cn/post/6844904099993878536" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904099993878536</a></p><p>学习项目地址： <a href="https://gitee.com/wuhonglin2/rocketmq-jta-demo?skip_mobile=true" target="_blank" rel="noreferrer">https://gitee.com/wuhonglin2/rocketmq-jta-demo?skip_mobile=true</a></p><hr><blockquote><p>你先看一下这个 gpt 给的一个 demo 示例</p></blockquote><p>假设您需要在电商系统中处理订单支付的场景，其中用户的支付操作需要更新订单状态并扣减库存，这两个操作要么同时成功，要么同时失败。</p><p>步骤一：发送半消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.apache.rocketmq.client.producer.TransactionMQProducer;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.SendResult;</span></span>
<span class="line"><span>import org.apache.rocketmq.common.message.Message;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.exception.MQClientException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TransactionMQProducer producer = new TransactionMQProducer(&quot;producer_group&quot;);</span></span>
<span class="line"><span>producer.setNamesrvAddr(&quot;127.0.0.1:9876&quot;);</span></span>
<span class="line"><span>producer.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Message msg = new Message(&quot;order_topic&quot;, &quot;TagA&quot;, &quot;OrderID001&quot;, (&quot;支付订单&quot; + order.getId()).getBytes(RemotingHelper.DEFAULT_CHARSET));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发送半消息</span></span>
<span class="line"><span>SendResult sendResult = producer.sendMessageInTransaction(msg, null);</span></span></code></pre></div><p>步骤 2: 执行本地事务</p><p>这个步骤通常是在事务监听器中实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.apache.rocketmq.client.producer.LocalTransactionState;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.TransactionListener;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>producer.setTransactionListener(new TransactionListener() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 执行本地事务（比如数据库操作）</span></span>
<span class="line"><span>            orderService.payOrder(order.getId());</span></span>
<span class="line"><span>            return LocalTransactionState.COMMIT_MESSAGE;</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            return LocalTransactionState.ROLLBACK_MESSAGE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public LocalTransactionState checkLocalTransaction(MessageExt msg) {</span></span>
<span class="line"><span>        // 回查本地事务状态</span></span>
<span class="line"><span>        String orderId = msg.getKeys();</span></span>
<span class="line"><span>        if (orderService.checkOrderPaid(orderId)) {</span></span>
<span class="line"><span>            return LocalTransactionState.COMMIT_MESSAGE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return LocalTransactionState.ROLLBACK_MESSAGE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>步骤 3: 提交或回滚消息</p><p>根据本地事务的执行结果，RocketMQ 将处理消息的提交或回滚</p><hr><blockquote><p>项目内容</p></blockquote><p>建表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-- 积分系统  </span></span>
<span class="line"><span>CREATE DATABASE rocketmq-demo-points;  </span></span>
<span class="line"><span>DROP TABLE IF EXISTS \`t_points\`;  </span></span>
<span class="line"><span>CREATE TABLE \`t_points\` (  </span></span>
<span class="line"><span>                            \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;主键&#39;,  </span></span>
<span class="line"><span>                            \`user_id\` bigint(20) NOT NULL COMMENT &#39;用户ID&#39;,  </span></span>
<span class="line"><span>                            \`order_no\` bigint(20) NOT NULL COMMENT &#39;订单编号&#39;,  </span></span>
<span class="line"><span>                            \`points\` int(5) NOT NULL COMMENT &#39;积分&#39;,  </span></span>
<span class="line"><span>                            \`remarks\` varchar(128) NOT NULL DEFAULT &#39;无&#39; COMMENT &#39;备注&#39;,  </span></span>
<span class="line"><span>                            PRIMARY KEY (\`id\`)  </span></span>
<span class="line"><span>) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT=&#39;积分表&#39;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>SET FOREIGN_KEY_CHECKS = 1;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>-- 订单系统  </span></span>
<span class="line"><span>DROP TABLE IF EXISTS \`t_order\`;  </span></span>
<span class="line"><span>CREATE TABLE \`t_order\` (  </span></span>
<span class="line"><span>                           \`order_id\` bigint(20) NOT NULL COMMENT &#39;订单编号&#39;,  </span></span>
<span class="line"><span>                           \`create_time\` datetime NOT NULL COMMENT &#39;创建时间&#39;,  </span></span>
<span class="line"><span>                           \`user_id\` bigint(20) NOT NULL COMMENT &#39;用户ID&#39;,  </span></span>
<span class="line"><span>                           \`amount\` decimal(18,2) NOT NULL COMMENT &#39;订单金额&#39;,  </span></span>
<span class="line"><span>                           PRIMARY KEY (\`order_id\`) USING BTREE  </span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;订单表&#39;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>DROP TABLE IF EXISTS \`transaction_log\`;  </span></span>
<span class="line"><span>CREATE TABLE \`transaction_log\` (  </span></span>
<span class="line"><span>                                   \`id\` varchar(32) NOT NULL COMMENT &#39;事务ID&#39;,  </span></span>
<span class="line"><span>                                   \`business\` varchar(32) NOT NULL COMMENT &#39;业务标识&#39;,  </span></span>
<span class="line"><span>                                   \`foreign_key\` varchar(32) NOT NULL COMMENT &#39;对应业务表中的主键&#39;,  </span></span>
<span class="line"><span>                                   PRIMARY KEY (\`id\`)  </span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;事务日志表&#39;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>SET FOREIGN_KEY_CHECKS = 1;</span></span></code></pre></div><p>这个项目是分为了两个模块，一个是订单模块，一个是积分模块；</p><p>你可以从 demo 中看出，一般我们会先发送一条半消息（通过 sendMessageInTransaction ）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**  </span></span>
<span class="line"><span> * 事务消息发送  </span></span>
<span class="line"><span> * @param data  </span></span>
<span class="line"><span> * @param topic  </span></span>
<span class="line"><span> * @return  </span></span>
<span class="line"><span> */public TransactionSendResult send(String data, String topic) throws MQClientException {  </span></span>
<span class="line"><span>    //使用 RocketMQ 的 TransactionMQProducer 来发送事务性消息  </span></span>
<span class="line"><span>    Message message = new Message(topic, data.getBytes());  </span></span>
<span class="line"><span>    return producer.sendMessageInTransaction(message, null);  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后，当 <code>TransactionProducer</code> 发送一个事务消息时，<code>TransactionMQProducer</code> 会先存储一个半消息到消息队列，然后调用 <code>TransactionListener</code> 实现的 <code>executeLocalTransaction</code> 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override  </span></span>
<span class="line"><span>public LocalTransactionState executeLocalTransaction(Message message, Object o) {  </span></span>
<span class="line"><span>    log.info(&quot;开始执行本地事务....&quot;);  </span></span>
<span class="line"><span>    LocalTransactionState state = null;  </span></span>
<span class="line"><span>    try {  </span></span>
<span class="line"><span>        String body = new String(message.getBody());  </span></span>
<span class="line"><span>        TOrder tOrder = JSONObject.parseObject(body, TOrder.class);  </span></span>
<span class="line"><span>        // 执行本地事务  </span></span>
<span class="line"><span>        orderService.insertOrder(tOrder, message.getTransactionId());  </span></span>
<span class="line"><span>        state = LocalTransactionState.COMMIT_MESSAGE;  </span></span>
<span class="line"><span>        log.info(&quot;本地事务已提交。{}&quot;, message.getTransactionId());  </span></span>
<span class="line"><span>    }catch (Exception e){  </span></span>
<span class="line"><span>        log.error(&quot;执行本地事务失败。{}&quot;, e.getMessage());  </span></span>
<span class="line"><span>        state = LocalTransactionState.ROLLBACK_MESSAGE;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return state;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>事务回查也是在这个类中进行操作的【消息队列（Broker）未在规定时间内收到消息的最终提交（COMMIT）或回滚（ROLLBACK）状态。在这种情况下，Broker 需要确定消息的确切状态，会进行回查操作】</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.xxx.order.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson.JSONObject;</span></span>
<span class="line"><span>import com.xxx.common.domain.TOrder;</span></span>
<span class="line"><span>import com.xxx.common.domain.TransactionLog;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.LocalTransactionState;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.TransactionListener;</span></span>
<span class="line"><span>import org.apache.rocketmq.common.message.Message;</span></span>
<span class="line"><span>import org.apache.rocketmq.common.message.MessageExt;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by Sinotn</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @Author: libin</span></span>
<span class="line"><span> * @CreateTime: 2020-10-28 14:07</span></span>
<span class="line"><span> * @Description: 订单事务监听类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class OrderTransactionListener implements TransactionListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private OrderService orderService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private TransactionLogService transactionLogService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public LocalTransactionState executeLocalTransaction(Message message, Object o) {</span></span>
<span class="line"><span>        log.info(&quot;开始执行本地事务....&quot;);</span></span>
<span class="line"><span>        LocalTransactionState state = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            String body = new String(message.getBody());</span></span>
<span class="line"><span>            TOrder tOrder = JSONObject.parseObject(body, TOrder.class);</span></span>
<span class="line"><span>            // 执行本地事务</span></span>
<span class="line"><span>            orderService.insertOrder(tOrder, message.getTransactionId());</span></span>
<span class="line"><span>            state = LocalTransactionState.COMMIT_MESSAGE;</span></span>
<span class="line"><span>            log.info(&quot;本地事务已提交。{}&quot;, message.getTransactionId());</span></span>
<span class="line"><span>        }catch (Exception e){</span></span>
<span class="line"><span>            log.error(&quot;执行本地事务失败。{}&quot;, e.getMessage());</span></span>
<span class="line"><span>            state = LocalTransactionState.ROLLBACK_MESSAGE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public LocalTransactionState checkLocalTransaction(MessageExt messageExt) {</span></span>
<span class="line"><span>        log.info(&quot;开始回查本地事务....&quot;);</span></span>
<span class="line"><span>        LocalTransactionState state = null;</span></span>
<span class="line"><span>        String transId = messageExt.getTransactionId();</span></span>
<span class="line"><span>        // 如果本地事务存在，则事务提交成功</span></span>
<span class="line"><span>        TransactionLog transactionLog = transactionLogService.getById(transId);</span></span>
<span class="line"><span>        if (null != transactionLog){</span></span>
<span class="line"><span>            state = LocalTransactionState.COMMIT_MESSAGE;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            state = LocalTransactionState.ROLLBACK_MESSAGE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>即只有当业务操作成功完成时，相关的消息才会被发送到消息队列供消费者处理。这对于需要强一致性的业务流程至关重要</p><p>接收者的部分代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override  </span></span>
<span class="line"><span>public ConsumeConcurrentlyStatus consumeMessage(List&lt;MessageExt&gt; list, ConsumeConcurrentlyContext consumeConcurrentlyContext) {  </span></span>
<span class="line"><span>    log.info(&quot;消费者线程监听到消息。&quot;);  </span></span>
<span class="line"><span>    for (MessageExt messageExt: list){  </span></span>
<span class="line"><span>        if (!processor(messageExt)){  </span></span>
<span class="line"><span>            return ConsumeConcurrentlyStatus.RECONSUME_LATER;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**  </span></span>
<span class="line"><span> * 消息处理，第3次处理失败后，发送邮件通知人工介入  </span></span>
<span class="line"><span> * @param messageExt  </span></span>
<span class="line"><span> * @return  </span></span>
<span class="line"><span> */private boolean processor(MessageExt messageExt){  </span></span>
<span class="line"><span>    String body = new String(messageExt.getBody());  </span></span>
<span class="line"><span>    try{  </span></span>
<span class="line"><span>        log.info(&quot;消息处理...{}&quot;, body);  </span></span>
<span class="line"><span>        log.info(&quot;开始处理订单数据，准备增加积分....&quot;);  </span></span>
<span class="line"><span>        TOrder order  = JSONObject.parseObject(body, TOrder.class);  </span></span>
<span class="line"><span>        pointsService.insert(order);  </span></span>
<span class="line"><span>        // 模拟异常  </span></span>
<span class="line"><span>        //int k = 1/0;  </span></span>
<span class="line"><span>        return true;  </span></span>
<span class="line"><span>    }catch (Exception e){  </span></span>
<span class="line"><span>        if (messageExt.getReconsumeTimes() &gt;= 3){  </span></span>
<span class="line"><span>            log.error(&quot;消息重试已达最大次数，将通知业务人员排查问题。{}&quot;,messageExt.getMsgId());  </span></span>
<span class="line"><span>            // 发送邮件或者报警  </span></span>
<span class="line"><span>            // sendMail(messageExt);  </span></span>
<span class="line"><span>            return true;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        return false;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里看半消息 sendMessageInTransaction 和 executeLocalTransaction 的确是对应关系，不过这个关系是在初始化的时候进行定义的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.xxx.order.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.apache.rocketmq.client.exception.MQClientException;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.TransactionMQProducer;</span></span>
<span class="line"><span>import org.apache.rocketmq.client.producer.TransactionSendResult;</span></span>
<span class="line"><span>import org.apache.rocketmq.common.message.Message;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.annotation.PostConstruct;</span></span>
<span class="line"><span>import java.util.concurrent.ArrayBlockingQueue;</span></span>
<span class="line"><span>import java.util.concurrent.ThreadPoolExecutor;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by Sinotn</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @Author: libin</span></span>
<span class="line"><span> * @CreateTime: 2020-10-28 14:05</span></span>
<span class="line"><span> * @Description: 事务生产</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class TransactionProducer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final String GROUP_NAME = &quot;order_trans_group&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private TransactionMQProducer producer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private OrderTransactionListener orderTransactionListener;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行任务的线程池</span></span>
<span class="line"><span>    ThreadPoolExecutor executor = new ThreadPoolExecutor(5, 10, 60,</span></span>
<span class="line"><span>            TimeUnit.SECONDS, new ArrayBlockingQueue&lt;&gt;(50));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void init(){</span></span>
<span class="line"><span>        producer = new TransactionMQProducer(GROUP_NAME);</span></span>
<span class="line"><span>        producer.setNamesrvAddr(&quot;192.168.56.105:9876&quot;);</span></span>
<span class="line"><span>        producer.setSendMsgTimeout(100);</span></span>
<span class="line"><span>        producer.setExecutorService(executor);</span></span>
<span class="line"><span>        producer.setTransactionListener(orderTransactionListener);</span></span>
<span class="line"><span>        this.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private void start(){</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            this.producer.start();</span></span>
<span class="line"><span>        } catch (MQClientException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 事务消息发送</span></span>
<span class="line"><span>     * @param data</span></span>
<span class="line"><span>     * @param topic</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public TransactionSendResult send(String data, String topic) throws MQClientException {</span></span>
<span class="line"><span>        //使用 RocketMQ 的 TransactionMQProducer 来发送事务性消息</span></span>
<span class="line"><span>        Message message = new Message(topic, data.getBytes());</span></span>
<span class="line"><span>        return producer.sendMessageInTransaction(message, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,39)])])}const m=n(l,[["render",t]]);export{g as __pageData,m as default};
