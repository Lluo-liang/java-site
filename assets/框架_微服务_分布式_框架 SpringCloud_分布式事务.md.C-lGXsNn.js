import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"分布式事务","description":"","frontmatter":{"title":"分布式事务","excerpt":"对于分布式事务的理解和学习","date":"2024-04-25 15:40:00","updated":"2024-04-25 15:40:00"},"headers":[],"relativePath":"框架/微服务&分布式/框架 SpringCloud/分布式事务.md","filePath":"框架/微服务&分布式/框架 SpringCloud/分布式事务.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/框架 SpringCloud/分布式事务.md"};function t(i,s,r,c,o,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>视频地址： <a href="https://www.bilibili.com/video/BV1Q4411y7ip" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1Q4411y7ip</a></p><p>参考文档： <a href="https://blog.csdn.net/hancoder/article/details/120213532" target="_blank" rel="noreferrer">https://blog.csdn.net/hancoder/article/details/120213532</a></p><p>建议看一下旗下的视频课件文档</p><h3 id="一、基础概念" tabindex="-1">一、基础概念 <a class="header-anchor" href="#一、基础概念" aria-label="Permalink to &quot;一、基础概念&quot;">​</a></h3><h4 id="cap-理论" tabindex="-1">CAP 理论 <a class="header-anchor" href="#cap-理论" aria-label="Permalink to &quot;CAP  理论&quot;">​</a></h4><p>CAP理论是分布式计算中的一个重要理论，由Eric Brewer提出。CAP指的是Consistency（一致性）、Availability（可用性）、Partition tolerance（分区容错性）。理论声称，一个分布式系统不可能同时满足这三个要求，最多只能同时满足其中两项：</p><ol><li><strong>一致性（C）</strong>：所有节点在同一时间具有相同的数据。</li><li><strong>可用性（A）</strong>：保证每个请求都能得到一个响应，无论响应是成功还是失败。</li><li><strong>分区容忍性（P）</strong>：系统中任意信息的丢失或失败都不会影响系统的继续运作。</li></ol><p>在实际应用中，分区容忍性是必须要保证的，因为网络分区在实际环境中是常见的（在分布式环境中，系统节点之间肯定的需要有网络连接的，因此分区（P) 是必然存在的）。因此，大多数分布式系统设计的抉择通常是在一致性和可用性之间做权衡。</p><h4 id="base-理论" tabindex="-1">BASE 理论 <a class="header-anchor" href="#base-理论" aria-label="Permalink to &quot;BASE 理论&quot;">​</a></h4><p>相对于CAP的严格要求，BASE理论提供了一种较为宽松的事务一致性模型。BASE是Basically Available（基本可用）、Soft state（软状态）、Eventually consistent（最终一致性）的缩写：</p><ol><li><strong>基本可用（Basically Available）</strong>：分布式系统在出现故障的时候，允许损失部分可用性——例如，响应时间可能会延长。</li><li><strong>软状态（Soft state）</strong>：系统的状态不需要时刻一致，允许在不同节点间存在中间状态，而这种状态会随着时间的推移而逐渐一致。</li><li><strong>最终一致性（Eventually consistent）</strong>：系统保证在一定时间范围内，数据最终将是一致的。</li></ol><p>BASE：牺牲强一致性，保证可用性，确保最终一致性。</p><p>BASE理论是对CAP中AP的一个扩展，通过牺牲强一致性来获得可用性，当出现故障允许部分不可用但要保证核心功能可用，允许数据在一段时间内是不一致的，但<code>最终一致性</code>。满足BASE理论的事务，我们称之为“<strong>柔性事务</strong>”。</p><h4 id="分布式事务" tabindex="-1">分布式事务 <a class="header-anchor" href="#分布式事务" aria-label="Permalink to &quot;分布式事务&quot;">​</a></h4><p>数据库事务回顾：事务的特性是：ACID；</p><ul><li>原子性(Atomicity):事务是不可分割的最小操作单元，要么全部成功，要么全部失败。</li><li>一致性(Consistency):事务完成时，必须使所有的数据都保持一致状态。</li><li>隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。</li><li>持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。</li></ul><hr><p>我们需要理解的是，什么情况下会出现分布式事务问题：</p><blockquote><p>分布式事务产生的场景</p></blockquote><ul><li>1、典型的场景：微服务架构 <ul><li>微服务之间通过远程调用完成事务操作 <ul><li><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240425155013.png" alt="image.png"></li></ul></li><li>跨 JVM 进程产生分布式事务问题</li></ul></li><li>2、单体系统访问多个数据库实例 <ul><li>跨数据库实例产生分布式事务</li></ul></li><li>3、多服务访问同一个数据库实例 <ul><li>跨 JVM 进程</li><li>两个微服务持有了不同的数据库链接进行数据库操作，此时产生分布式事务。</li></ul></li></ul><h3 id="二、分布式事务解决方案" tabindex="-1">二、分布式事务解决方案 <a class="header-anchor" href="#二、分布式事务解决方案" aria-label="Permalink to &quot;二、分布式事务解决方案&quot;">​</a></h3><p>在Java中处理分布式事务时，常见的方法有以下几种：</p><ol><li><strong>两阶段提交（2PC）</strong>：是XA事务的一个实现，它分为“准备阶段”和“提交阶段”，确保所有参与者都同意提交事务。这种方式强调的是一致性，但牺牲了系统的可用性。</li><li><strong>补偿事务（TCC，Try-Confirm-Cancel）</strong>：这种方式首先执行试操作，如果所有参与者都成功，则进行确认操作，否则执行取消操作。它适合于业务逻辑较为复杂的系统。</li><li><strong>最终一致性框架</strong>：如 Apache Kafka 和 RocketMQ 等消息中间件，通过异步消息确保最终一致性。这类方法强调的是可用性和分区容忍性。</li><li><strong>分布式事务中间件</strong>：例如 Seata ，它通过创建分布式事务协调者来管理各个微服务之间的事务，实现分布式事务的一致性。</li></ol><h4 id="_2pc-两阶段提交" tabindex="-1">2PC 两阶段提交 <a class="header-anchor" href="#_2pc-两阶段提交" aria-label="Permalink to &quot;2PC 两阶段提交&quot;">​</a></h4><ul><li>两阶段：准备阶段 Prepare phase、提交阶段 comomit phase</li></ul><p>数据库支持的<code>2pc</code>【二阶段提交】，又叫做 <code>XA Transactions</code></p><p>2PC（Two-phase commit protocol），中文叫二阶段提交。 <strong>二阶段提交是一种强一致性设计</strong>，2PC 引入一个事务协调者的角色来协调管理各参与者（也可称之为各本地资源）的提交和回滚，二阶段分别指的是准备（投票）和提交两个阶段。</p><p>XA：强一致性，比较适⽤于执⾏时间确定的短事务，整体性能比较差。</p><p>在计算机中部分关系数据库如Oracle、MySQL支持两阶段提交协议：</p><ul><li><ol><li>准备阶段（Prepare phase）：事务管理器给每个参与者发送Prepare消息，每个数据库参与者在本地执行事务，并写本地的Undo/Redo日志，此时事务没有提交。</li></ol><ul><li>（Undo日志是记录修改前的数据，用于数据库回滚，Redo日志是记录修改后的数据，用于提交事务后写入数据文件）</li></ul></li><li><ol start="2"><li>提交阶段（commit phase）：如果事务管理器收到了参与者的执行失败或者超时消息时，直接给每个参与者发送回滚(Rollback)消息；否则，发送提交(Commit)消息；参与者根据事务管理器的指令执行提交或者回滚操作，并释放事务处理过程中使用的锁资源。注意:必须在最后阶段释放锁资源。</li></ol></li></ul><p>如果任一资源管理器在第一阶段返回准备失败，那么事务管理器会要求所有资源管理器在第二阶段执行回滚操作。通过事务管理器的两阶段协调，最终所有资源管理器要么全部提交，要么全部回滚，最终状态都是一致的</p><h4 id="tcc" tabindex="-1">TCC <a class="header-anchor" href="#tcc" aria-label="Permalink to &quot;TCC&quot;">​</a></h4><h4 id="seata" tabindex="-1">Seata <a class="header-anchor" href="#seata" aria-label="Permalink to &quot;Seata&quot;">​</a></h4><h4 id="mq" tabindex="-1">MQ <a class="header-anchor" href="#mq" aria-label="Permalink to &quot;MQ&quot;">​</a></h4><h3 id="三、seata-的使用示例" tabindex="-1">三、Seata 的使用示例 <a class="header-anchor" href="#三、seata-的使用示例" aria-label="Permalink to &quot;三、Seata 的使用示例&quot;">​</a></h3><h4 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h4><p>文档： <a href="https://seata.apache.org/zh-cn/blog/seata-quick-start/" target="_blank" rel="noreferrer">https://seata.apache.org/zh-cn/blog/seata-quick-start/</a></p><p>Seata 是<strong>阿里</strong>开源的一款开源的<strong>分布式事务</strong>解决方案，致力于提供高性能和简单易用的分布式事务服务</p><p>事务模式</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426182642.png" alt="image.png"></p><p>Seata 的角色</p><ul><li><strong>TC</strong> (Transaction Coordinator) - 事务协调者：维护全局和分支事务的状态，驱动<strong>全局事务</strong>提交或回滚。</li><li><strong>TM</strong> (Transaction Manager) - 事务管理器：定义<strong>全局事务</strong>的范围，开始全局事务、提交或回滚全局事务。</li><li><strong>RM</strong> ( Resource Manager ) - 资源管理器：管理<strong>分支事务</strong>处理的资源( Resource )，与 TC 交谈以注册分支事务和报告分支事务的状态，并驱动<strong>分支事务</strong>提交或回滚。</li></ul><p>其中，TC 为单独部署的 <strong>Server</strong> 服务端，TM 和 RM 为嵌入到应用中的 <strong>Client</strong> 客户端</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426182814.png" alt="image.png"></p><p>分布式事务的生命周期</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426183259.png" alt="image.png"></p><ul><li>TM 请求 TC 开启一个全局事务。TC 会生成一个 <strong>XID</strong> 作为该全局事务的编号。 <ul><li><strong>XID</strong>，会在微服务的调用链路中传播，保证将多个微服务的子事务关联在一起。</li></ul></li><li>RM 请求 TC 将本地事务注册为全局事务的分支事务，通过全局事务的 <strong>XID</strong> 进行关联。</li><li>TM 请求 TC 告诉 <strong>XID</strong> 对应的全局事务是进行提交还是回滚。</li><li>TC 驱动 RM 们将 <strong>XID</strong> 对应的自己的本地事务进行提交还是回滚。</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240427230315.png" alt="image.png"></p><hr><h4 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h4><p>虚拟机安装一下 MySQL 5.7 、Nacos 1.3.2 版本</p><h5 id="部署单机-tc-server" tabindex="-1">部署单机 TC Server <a class="header-anchor" href="#部署单机-tc-server" aria-label="Permalink to &quot;部署单机 TC Server&quot;">​</a></h5><p>TC 需要进行全局事务和分支事务的记录，所以需要对应的<strong>存储</strong>。目前，TC 有两种存储模式( <code>store.mode</code> )：</p><ul><li>file 模式：适合<strong>单机</strong>模式，全局事务会话信息在<strong>内存</strong>中读写，并持久化本地文件 <code>root.data</code>，性能较高。</li><li>db 模式：适合<strong>集群</strong>模式，全局事务会话信息通过 <strong>db</strong> 共享，相对性能差点。</li></ul><p>这个不用管，写的有点问题 👆</p><blockquote><p>Seata 服务</p></blockquote><p>根据项目的介绍文档，这里下载 1.3 版本的 seata 的服务</p><p>这里先不用 docker 的方式，有点理解问题，先使用一下 windows 下的 zip 方式</p><p>参考： <a href="https://github.com/WinterChenS/spring-cloud-hoxton-study/blob/main/doc/SpringCloud%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B(%E5%85%AB)%E4%B9%8B%E6%95%B4%E5%90%88seata%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.md" target="_blank" rel="noreferrer">https://github.com/WinterChenS/spring-cloud-hoxton-study/blob/main/doc/SpringCloud系列教程(八)之整合seata分布式事务.md</a></p><p>下载地址： <a href="https://github.com/apache/incubator-seata/releases?page=2" target="_blank" rel="noreferrer">https://github.com/apache/incubator-seata/releases?page=2</a></p><p>window下载zip，linux/mac下载tar.gz</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426091449.png" alt="image.png"></p><h6 id="前期准备" tabindex="-1">前期准备 <a class="header-anchor" href="#前期准备" aria-label="Permalink to &quot;前期准备&quot;">​</a></h6><p>这里就下载一下这个项目，并将数据库文件执行一下，windows 的相关操作先不管</p><p>看到一个很不错的项目，这里使用一下它：<a href="https://github.com/YunaiV/SpringBoot-Labs" target="_blank" rel="noreferrer">https://github.com/YunaiV/SpringBoot-Labs</a> 的 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/labx-17" target="_blank" rel="noreferrer">labx-17</a> 目录</p><p>seata + openfeign</p><p>改一下这个 pom 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!--    &lt;parent&gt;--&gt;  </span></span>
<span class="line"><span>&lt;!--        &lt;artifactId&gt;labx-17&lt;/artifactId&gt;--&gt;  </span></span>
<span class="line"><span>&lt;!--        &lt;groupId&gt;cn.iocoder.springboot.labs&lt;/groupId&gt;--&gt;  </span></span>
<span class="line"><span>&lt;!--        &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;--&gt;  </span></span>
<span class="line"><span>&lt;!--    &lt;/parent&gt;--&gt;  </span></span>
<span class="line"><span>    &lt;groupId&gt;cn.iocoder.springboot.labs&lt;/groupId&gt;  </span></span>
<span class="line"><span>    &lt;artifactId&gt;labx-17-sc-seata-at-feign-demo&lt;/artifactId&gt;  </span></span>
<span class="line"><span>    &lt;packaging&gt;pom&lt;/packaging&gt;  </span></span>
<span class="line"><span>    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;  </span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span></code></pre></div><p>执行 data.sql 文件</p><p>部署过程看一下这个视频，挺详细的： <a href="https://www.bilibili.com/video/BV1wW4y147k3" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1wW4y147k3</a></p><p>改一下这两个文件的配置内容</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426194656.png" alt="image.png"></p><p>file.conf</p><p>修改配置为通过 db 的方式，改一下 mysql 相关的配置文件内容</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426194815.png" alt="image.png"></p><p>对应数据库中，执行以下脚本文件： <a href="https://github.com/apache/incubator-seata/blob/1.3.0/script/server/db/mysql.sql" target="_blank" rel="noreferrer">https://github.com/apache/incubator-seata/blob/1.3.0/script/server/db/mysql.sql</a></p><p>先创建一下数据库</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426201234.png" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-- -------------------------------- The script used when storeMode is &#39;db&#39; --------------------------------</span></span>
<span class="line"><span>-- the table to store GlobalSession data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`global_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`xid\`                       VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`transaction_id\`            BIGINT,</span></span>
<span class="line"><span>    \`status\`                    TINYINT      NOT NULL,</span></span>
<span class="line"><span>    \`application_id\`            VARCHAR(32),</span></span>
<span class="line"><span>    \`transaction_service_group\` VARCHAR(32),</span></span>
<span class="line"><span>    \`transaction_name\`          VARCHAR(128),</span></span>
<span class="line"><span>    \`timeout\`                   INT,</span></span>
<span class="line"><span>    \`begin_time\`                BIGINT,</span></span>
<span class="line"><span>    \`application_data\`          VARCHAR(2000),</span></span>
<span class="line"><span>    \`gmt_create\`                DATETIME,</span></span>
<span class="line"><span>    \`gmt_modified\`              DATETIME,</span></span>
<span class="line"><span>    PRIMARY KEY (\`xid\`),</span></span>
<span class="line"><span>    KEY \`idx_gmt_modified_status\` (\`gmt_modified\`, \`status\`),</span></span>
<span class="line"><span>    KEY \`idx_transaction_id\` (\`transaction_id\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- the table to store BranchSession data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`branch_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`branch_id\`         BIGINT       NOT NULL,</span></span>
<span class="line"><span>    \`xid\`               VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`transaction_id\`    BIGINT,</span></span>
<span class="line"><span>    \`resource_group_id\` VARCHAR(32),</span></span>
<span class="line"><span>    \`resource_id\`       VARCHAR(256),</span></span>
<span class="line"><span>    \`branch_type\`       VARCHAR(8),</span></span>
<span class="line"><span>    \`status\`            TINYINT,</span></span>
<span class="line"><span>    \`client_id\`         VARCHAR(64),</span></span>
<span class="line"><span>    \`application_data\`  VARCHAR(2000),</span></span>
<span class="line"><span>    \`gmt_create\`        DATETIME(6),</span></span>
<span class="line"><span>    \`gmt_modified\`      DATETIME(6),</span></span>
<span class="line"><span>    PRIMARY KEY (\`branch_id\`),</span></span>
<span class="line"><span>    KEY \`idx_xid\` (\`xid\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- the table to store lock data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`lock_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`row_key\`        VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`xid\`            VARCHAR(96),</span></span>
<span class="line"><span>    \`transaction_id\` BIGINT,</span></span>
<span class="line"><span>    \`branch_id\`      BIGINT       NOT NULL,</span></span>
<span class="line"><span>    \`resource_id\`    VARCHAR(256),</span></span>
<span class="line"><span>    \`table_name\`     VARCHAR(32),</span></span>
<span class="line"><span>    \`pk\`             VARCHAR(36),</span></span>
<span class="line"><span>    \`gmt_create\`     DATETIME,</span></span>
<span class="line"><span>    \`gmt_modified\`   DATETIME,</span></span>
<span class="line"><span>    PRIMARY KEY (\`row_key\`),</span></span>
<span class="line"><span>    KEY \`idx_branch_id\` (\`branch_id\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8;</span></span></code></pre></div><p>registry.conf</p><p>改一下配置中心和注册中心的配置内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registry {</span></span>
<span class="line"><span>  # file 、nacos 、eureka、redis、zk、consul、etcd3、sofa</span></span>
<span class="line"><span>  type = &quot;nacos&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  nacos {</span></span>
<span class="line"><span>    application = &quot;seata-server&quot;</span></span>
<span class="line"><span>    serverAddr = &quot;192.168.56.105:8848&quot;</span></span>
<span class="line"><span>    group = &quot;SEATA_GROUP&quot;</span></span>
<span class="line"><span>	#不写默认是 public</span></span>
<span class="line"><span>    namespace = &quot;&quot;  </span></span>
<span class="line"><span>    cluster = &quot;default&quot;</span></span>
<span class="line"><span>    username = &quot;nacos&quot;</span></span>
<span class="line"><span>    password = &quot;nacos&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>config {</span></span>
<span class="line"><span>  # file、nacos 、apollo、zk、consul、etcd3</span></span>
<span class="line"><span>  type = &quot;nacos&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  nacos {</span></span>
<span class="line"><span>    serverAddr = &quot;192.168.56.105:8848&quot;</span></span>
<span class="line"><span>    namespace = &quot;&quot;</span></span>
<span class="line"><span>    group = &quot;SEATA_GROUP&quot;</span></span>
<span class="line"><span>    username = &quot;nacos&quot;</span></span>
<span class="line"><span>    password = &quot;nacos&quot;</span></span>
<span class="line"><span>    dataId = &quot;seataServer.properties&quot; </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>在 nacos 中添加配置文件</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426202340.png" alt="image.png"></p><p>配置内容： <a href="https://github.com/apache/incubator-seata/blob/1.3.0/script/config-center/config.txt" target="_blank" rel="noreferrer">https://github.com/apache/incubator-seata/blob/1.3.0/script/config-center/config.txt</a></p><p>微改了一下，后面有需要再进行改动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>transport.type=TCP</span></span>
<span class="line"><span>transport.server=NIO</span></span>
<span class="line"><span>transport.heartbeat=true</span></span>
<span class="line"><span>transport.enableClientBatchSendRequest=false</span></span>
<span class="line"><span>transport.threadFactory.bossThreadPrefix=NettyBoss</span></span>
<span class="line"><span>transport.threadFactory.workerThreadPrefix=NettyServerNIOWorker</span></span>
<span class="line"><span>transport.threadFactory.serverExecutorThreadPrefix=NettyServerBizHandler</span></span>
<span class="line"><span>transport.threadFactory.shareBossWorker=false</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadPrefix=NettyClientSelector</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.clientWorkerThreadPrefix=NettyClientWorkerThread</span></span>
<span class="line"><span>transport.threadFactory.bossThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.workerThreadSize=default</span></span>
<span class="line"><span>transport.shutdown.wait=3</span></span>
<span class="line"><span>service.vgroupMapping.my_test_tx_group=default</span></span>
<span class="line"><span># 端口 8091 通常用于 Seata 服务的默认通信端口</span></span>
<span class="line"><span>service.default.grouplist=127.0.0.1:8091</span></span>
<span class="line"><span>service.enableDegrade=false</span></span>
<span class="line"><span>service.disableGlobalTransaction=false</span></span>
<span class="line"><span>client.rm.asyncCommitBufferLimit=10000</span></span>
<span class="line"><span>client.rm.lock.retryInterval=10</span></span>
<span class="line"><span>client.rm.lock.retryTimes=30</span></span>
<span class="line"><span>client.rm.lock.retryPolicyBranchRollbackOnConflict=true</span></span>
<span class="line"><span>client.rm.reportRetryCount=5</span></span>
<span class="line"><span>client.rm.tableMetaCheckEnable=false</span></span>
<span class="line"><span>client.rm.sqlParserType=druid</span></span>
<span class="line"><span>client.rm.reportSuccessEnable=false</span></span>
<span class="line"><span>client.rm.sagaBranchRegisterEnable=false</span></span>
<span class="line"><span>client.tm.commitRetryCount=5</span></span>
<span class="line"><span>client.tm.rollbackRetryCount=5</span></span>
<span class="line"><span>client.tm.degradeCheck=false</span></span>
<span class="line"><span>client.tm.degradeCheckAllowTimes=10</span></span>
<span class="line"><span>client.tm.degradeCheckPeriod=2000</span></span>
<span class="line"><span>store.mode=file</span></span>
<span class="line"><span>store.file.dir=file_store/data</span></span>
<span class="line"><span>store.file.maxBranchSessionSize=16384</span></span>
<span class="line"><span>store.file.maxGlobalSessionSize=512</span></span>
<span class="line"><span>store.file.fileWriteBufferCacheSize=16384</span></span>
<span class="line"><span>store.file.flushDiskMode=async</span></span>
<span class="line"><span>store.file.sessionReloadReadSize=100</span></span>
<span class="line"><span>store.db.datasource=druid</span></span>
<span class="line"><span>store.db.dbType=mysql</span></span>
<span class="line"><span>store.db.driverClassName=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>store.db.url=jdbc:mysql://192.168.56.105:3306/seata?useUnicode=true</span></span>
<span class="line"><span>store.db.user=username</span></span>
<span class="line"><span>store.db.password=password</span></span>
<span class="line"><span>store.db.minConn=5</span></span>
<span class="line"><span>store.db.maxConn=30</span></span>
<span class="line"><span>store.db.globalTable=global_table</span></span>
<span class="line"><span>store.db.branchTable=branch_table</span></span>
<span class="line"><span>store.db.queryLimit=100</span></span>
<span class="line"><span>store.db.lockTable=lock_table</span></span>
<span class="line"><span>store.db.maxWait=5000</span></span>
<span class="line"><span>store.redis.host=127.0.0.1</span></span>
<span class="line"><span>store.redis.port=6379</span></span>
<span class="line"><span>store.redis.maxConn=10</span></span>
<span class="line"><span>store.redis.minConn=1</span></span>
<span class="line"><span>store.redis.database=0</span></span>
<span class="line"><span>store.redis.password=null</span></span>
<span class="line"><span>store.redis.queryLimit=100</span></span>
<span class="line"><span>server.recovery.committingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.asynCommittingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.rollbackingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.timeoutRetryPeriod=1000</span></span>
<span class="line"><span>server.maxCommitRetryTimeout=-1</span></span>
<span class="line"><span>server.maxRollbackRetryTimeout=-1</span></span>
<span class="line"><span>server.rollbackRetryTimeoutUnlockEnable=false</span></span>
<span class="line"><span>client.undo.dataValidation=true</span></span>
<span class="line"><span>client.undo.logSerialization=jackson</span></span>
<span class="line"><span>client.undo.onlyCareUpdateColumns=true</span></span>
<span class="line"><span>server.undo.logSaveDays=7</span></span>
<span class="line"><span>server.undo.logDeletePeriod=86400000</span></span>
<span class="line"><span>client.undo.logTable=undo_log</span></span>
<span class="line"><span>client.log.exceptionRate=100</span></span>
<span class="line"><span>transport.serialization=seata</span></span>
<span class="line"><span>transport.compressor=none</span></span>
<span class="line"><span>metrics.enabled=false</span></span>
<span class="line"><span>metrics.registryType=compact</span></span>
<span class="line"><span>metrics.exporterList=prometheus</span></span>
<span class="line"><span>metrics.exporterPrometheusPort=9898</span></span></code></pre></div><p>启动操作</p><p>直接点击 seata-server.bat 文件进行启动操作</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426202545.png" alt="image.png"></p><p>查看服务实例，发现是已经在服务列表了</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426202627.png" alt="image.png"></p><p>然后再启动一下客户端，启动前先过一下基础概念内容</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240427230315.png" alt="image.png"></p><p>启动客户端有报错信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2024-04-27 23:03:46.363 ERROR 15912 --- [imeoutChecker_2] i.s.c.r.netty.NettyClientChannelManager  : no available service &#39;default&#39; found, please make sure registry config correct</span></span></code></pre></div><h6 id="部署-服务端-tc" tabindex="-1">部署 服务端 TC <a class="header-anchor" href="#部署-服务端-tc" aria-label="Permalink to &quot;部署 服务端 TC&quot;">​</a></h6><p>有问题，这里改一下为 docker 的方式进行部署，看一下是否是 TC 端的问题（看很多是可以进行一个 config.txt 文件推送的）</p><p>这里使用 docker 的方式进行部署</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull seataio/seata-server:1.3.0</span></span></code></pre></div><p>部署参考：</p><ul><li><a href="https://seata.apache.org/zh-cn/docs/ops/deploy-by-docker/" target="_blank" rel="noreferrer">https://seata.apache.org/zh-cn/docs/ops/deploy-by-docker/</a></li><li><a href="https://www.cnblogs.com/lvlinguang/p/17038658.html#1docker%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85" target="_blank" rel="noreferrer">https://www.cnblogs.com/lvlinguang/p/17038658.html#1docker方式安装</a></li></ul><p>新建目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /home/apps/seata/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入目录</span></span>
<span class="line"><span>cd /home/apps/seata/config</span></span></code></pre></div><p><strong>nacos 中新建一个 seata 的命名空间</strong></p><p>新建 registry.conf</p><ul><li>github地址：<a href="https://github.com/seata/seata/blob/1.3.0/server/src/main/resources/registry.conf" target="_blank" rel="noreferrer">https://github.com/seata/seata/blob/1.3.0/server/src/main/resources/registry.conf</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 注册中心</span></span>
<span class="line"><span>registry {</span></span>
<span class="line"><span>  type = &quot;nacos&quot;</span></span>
<span class="line"><span>  nacos {</span></span>
<span class="line"><span>    application = &quot;seata-server&quot;</span></span>
<span class="line"><span>    serverAddr = &quot;192.168.56.105:8848&quot;</span></span>
<span class="line"><span>    group = &quot;SEATA_GROUP&quot;</span></span>
<span class="line"><span>    namespace = &quot;6487cc37-2434-4574-81f9-83d2c2fb0dd5&quot;</span></span>
<span class="line"><span>    cluster = &quot;default&quot;</span></span>
<span class="line"><span>    username = &quot;nacos&quot;</span></span>
<span class="line"><span>    password = &quot;nacos&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置中心</span></span>
<span class="line"><span>config {</span></span>
<span class="line"><span>  type = &quot;nacos&quot;</span></span>
<span class="line"><span>  nacos {</span></span>
<span class="line"><span>    serverAddr = &quot;192.168.56.105:8848&quot;</span></span>
<span class="line"><span>    namespace = &quot;6487cc37-2434-4574-81f9-83d2c2fb0dd5&quot;</span></span>
<span class="line"><span>    group = &quot;SEATA_GROUP&quot;</span></span>
<span class="line"><span>    username = &quot;nacos&quot;</span></span>
<span class="line"><span>    password = &quot;nacos&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run \\</span></span>
<span class="line"><span>-d \\</span></span>
<span class="line"><span>--name seata-server \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>--privileged=true \\</span></span>
<span class="line"><span>-p 8091:8091 \\</span></span>
<span class="line"><span>-e SEATA_IP=192.168.56.105 \\</span></span>
<span class="line"><span>-e SEATA_PORT=8091 \\</span></span>
<span class="line"><span>-e SEATA_CONFIG_NAME=file:/root/seata-config/registry \\</span></span>
<span class="line"><span>-v /home/apps/seata/config:/root/seata-config  \\</span></span>
<span class="line"><span>seataio/seata-server:1.3.0</span></span></code></pre></div><h6 id="推送配置信息" tabindex="-1">推送配置信息 <a class="header-anchor" href="#推送配置信息" aria-label="Permalink to &quot;推送配置信息&quot;">​</a></h6><p>下载地址： <a href="https://github.com/seata/seata/tree/1.3.0" target="_blank" rel="noreferrer">https://github.com/seata/seata/tree/1.3.0</a></p><p>目录： incubator-seata-1.3.0\\script\\config-center\\config.txt</p><p>config.txt</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>transport.type=TCP</span></span>
<span class="line"><span>transport.server=NIO</span></span>
<span class="line"><span>transport.heartbeat=true</span></span>
<span class="line"><span>transport.enableClientBatchSendRequest=false</span></span>
<span class="line"><span>transport.threadFactory.bossThreadPrefix=NettyBoss</span></span>
<span class="line"><span>transport.threadFactory.workerThreadPrefix=NettyServerNIOWorker</span></span>
<span class="line"><span>transport.threadFactory.serverExecutorThreadPrefix=NettyServerBizHandler</span></span>
<span class="line"><span>transport.threadFactory.shareBossWorker=false</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadPrefix=NettyClientSelector</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.clientWorkerThreadPrefix=NettyClientWorkerThread</span></span>
<span class="line"><span>transport.threadFactory.bossThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.workerThreadSize=default</span></span>
<span class="line"><span>transport.shutdown.wait=3</span></span>
<span class="line"><span>service.vgroupMapping.my_test_tx_group=default</span></span>
<span class="line"><span>service.default.grouplist=127.0.0.1:8091</span></span>
<span class="line"><span>service.enableDegrade=false</span></span>
<span class="line"><span>service.disableGlobalTransaction=false</span></span>
<span class="line"><span>client.rm.asyncCommitBufferLimit=10000</span></span>
<span class="line"><span>client.rm.lock.retryInterval=10</span></span>
<span class="line"><span>client.rm.lock.retryTimes=30</span></span>
<span class="line"><span>client.rm.lock.retryPolicyBranchRollbackOnConflict=true</span></span>
<span class="line"><span>client.rm.reportRetryCount=5</span></span>
<span class="line"><span>client.rm.tableMetaCheckEnable=false</span></span>
<span class="line"><span>client.rm.sqlParserType=druid</span></span>
<span class="line"><span>client.rm.reportSuccessEnable=false</span></span>
<span class="line"><span>client.rm.sagaBranchRegisterEnable=false</span></span>
<span class="line"><span>client.tm.commitRetryCount=5</span></span>
<span class="line"><span>client.tm.rollbackRetryCount=5</span></span>
<span class="line"><span>client.tm.degradeCheck=false</span></span>
<span class="line"><span>client.tm.degradeCheckAllowTimes=10</span></span>
<span class="line"><span>client.tm.degradeCheckPeriod=2000</span></span>
<span class="line"><span>store.mode=file</span></span>
<span class="line"><span>store.file.dir=file_store/data</span></span>
<span class="line"><span>store.file.maxBranchSessionSize=16384</span></span>
<span class="line"><span>store.file.maxGlobalSessionSize=512</span></span>
<span class="line"><span>store.file.fileWriteBufferCacheSize=16384</span></span>
<span class="line"><span>store.file.flushDiskMode=async</span></span>
<span class="line"><span>store.file.sessionReloadReadSize=100</span></span>
<span class="line"><span>store.db.datasource=druid</span></span>
<span class="line"><span>store.db.dbType=mysql</span></span>
<span class="line"><span>store.db.driverClassName=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>store.db.url=jdbc:mysql://192.168.56.105:3306/seata?useUnicode=true</span></span>
<span class="line"><span>store.db.user=root</span></span>
<span class="line"><span>store.db.password=123456</span></span>
<span class="line"><span>store.db.minConn=5</span></span>
<span class="line"><span>store.db.maxConn=30</span></span>
<span class="line"><span>store.db.globalTable=global_table</span></span>
<span class="line"><span>store.db.branchTable=branch_table</span></span>
<span class="line"><span>store.db.queryLimit=100</span></span>
<span class="line"><span>store.db.lockTable=lock_table</span></span>
<span class="line"><span>store.db.maxWait=5000</span></span>
<span class="line"><span>store.redis.host=127.0.0.1</span></span>
<span class="line"><span>store.redis.port=6379</span></span>
<span class="line"><span>store.redis.maxConn=10</span></span>
<span class="line"><span>store.redis.minConn=1</span></span>
<span class="line"><span>store.redis.database=0</span></span>
<span class="line"><span>store.redis.password=null</span></span>
<span class="line"><span>store.redis.queryLimit=100</span></span>
<span class="line"><span>server.recovery.committingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.asynCommittingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.rollbackingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.timeoutRetryPeriod=1000</span></span>
<span class="line"><span>server.maxCommitRetryTimeout=-1</span></span>
<span class="line"><span>server.maxRollbackRetryTimeout=-1</span></span>
<span class="line"><span>server.rollbackRetryTimeoutUnlockEnable=false</span></span>
<span class="line"><span>client.undo.dataValidation=true</span></span>
<span class="line"><span>client.undo.logSerialization=jackson</span></span>
<span class="line"><span>client.undo.onlyCareUpdateColumns=true</span></span>
<span class="line"><span>server.undo.logSaveDays=7</span></span>
<span class="line"><span>server.undo.logDeletePeriod=86400000</span></span>
<span class="line"><span>client.undo.logTable=undo_log</span></span>
<span class="line"><span>client.log.exceptionRate=100</span></span>
<span class="line"><span>transport.serialization=seata</span></span>
<span class="line"><span>transport.compressor=none</span></span>
<span class="line"><span>metrics.enabled=false</span></span>
<span class="line"><span>metrics.registryType=compact</span></span>
<span class="line"><span>metrics.exporterList=prometheus</span></span>
<span class="line"><span>metrics.exporterPrometheusPort=9898</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428123249.png" alt="image.png"></p><p>推送操作，进入改目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nacos-config.sh -h 192.168.56.105 -p 8848 -g SEATA_GROUP -t 6487cc37-2434-4574-81f9-83d2c2fb0dd5</span></span></code></pre></div><p>这个操作会推送对应配置到相应的命令空间区域</p><p>根据后面反馈情况，需要再改一下这个配置</p><p>15 行后面再加三行配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>transport.shutdown.wait=3</span></span>
<span class="line"><span>service.vgroupMapping.my_test_tx_group=default</span></span>
<span class="line"><span>service.vgroupMapping.account-service-group=default</span></span>
<span class="line"><span>service.vgroupMapping.order-service-group=default</span></span>
<span class="line"><span>service.vgroupMapping.product-service-group=default</span></span>
<span class="line"><span>service.default.grouplist=127.0.0.1:8091</span></span></code></pre></div><p>添加配置后，再进行一次推送（重复命令即可，看了一下他 set 执行的是覆盖操作）</p><h6 id="修改配置文件-客户端启动" tabindex="-1">修改配置文件，客户端启动 <a class="header-anchor" href="#修改配置文件-客户端启动" aria-label="Permalink to &quot;修改配置文件，客户端启动&quot;">​</a></h6><p>改一下配置文件，主要是命名空间，然后还有 tx-service-group 的相关配置</p><p>三个模块的内容都参考下面的改一下；另外还有就是 seata 的 版本统一改为了 1.3.0</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server:  </span></span>
<span class="line"><span>  port: 8081 # 端口  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>spring:  </span></span>
<span class="line"><span>  application:  </span></span>
<span class="line"><span>    name: order-service  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  datasource:  </span></span>
<span class="line"><span>    url: jdbc:mysql://192.168.56.105:3306/seata_order?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8  </span></span>
<span class="line"><span>    driver-class-name: com.mysql.jdbc.Driver  </span></span>
<span class="line"><span>    username: root  </span></span>
<span class="line"><span>    password: 123456  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  cloud:  </span></span>
<span class="line"><span>    # Nacos 作为注册中心的配置项  </span></span>
<span class="line"><span>    nacos:  </span></span>
<span class="line"><span>      discovery:  </span></span>
<span class="line"><span>        server-addr: 192.168.56.105:8848  </span></span>
<span class="line"><span>        namespace: 6487cc37-2434-4574-81f9-83d2c2fb0dd5  </span></span>
<span class="line"><span>#        group: SEATA_GROUP  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>seata:  </span></span>
<span class="line"><span>  enabled: true  </span></span>
<span class="line"><span>  tx-service-group: my_test_tx_group  </span></span>
<span class="line"><span>  service:  </span></span>
<span class="line"><span>    vgroup-mapping:  </span></span>
<span class="line"><span>      rapid_cloud_tx_group: default  </span></span>
<span class="line"><span>  registry:  </span></span>
<span class="line"><span>    type: nacos  </span></span>
<span class="line"><span>    nacos:  </span></span>
<span class="line"><span>      application: seata-server  </span></span>
<span class="line"><span>      server-addr: 192.168.56.105:8848  </span></span>
<span class="line"><span>      group: SEATA_GROUP  </span></span>
<span class="line"><span>      namespace: &#39;6487cc37-2434-4574-81f9-83d2c2fb0dd5&#39;  </span></span>
<span class="line"><span>      username: &#39;nacos&#39;  </span></span>
<span class="line"><span>      password: &#39;nacos&#39;  </span></span>
<span class="line"><span>  config:  </span></span>
<span class="line"><span>    type: nacos  </span></span>
<span class="line"><span>    nacos:  </span></span>
<span class="line"><span>      server-addr: 192.168.56.105:8848  </span></span>
<span class="line"><span>      group: SEATA_GROUP  </span></span>
<span class="line"><span>      namespace: &#39;6487cc37-2434-4574-81f9-83d2c2fb0dd5&#39;  </span></span>
<span class="line"><span>      username: &#39;nacos&#39;  </span></span>
<span class="line"><span>      password: &#39;nacos&#39;</span></span></code></pre></div><p>这个配置再改一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>seata:</span></span>
<span class="line"><span>  application-id: \${spring.application.name} # Seata 应用编号，默认为 \${spring.application.name}</span></span>
<span class="line"><span>  tx-service-group: \${spring.application.name}-group</span></span>
<span class="line"><span>  service:</span></span>
<span class="line"><span>    vgroup-mapping:</span></span>
<span class="line"><span>      rapid_cloud_tx_group: default</span></span>
<span class="line"><span>  registry:</span></span>
<span class="line"><span>    type: nacos</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      application: seata-server</span></span>
<span class="line"><span>      server-addr: 192.168.56.105:8848</span></span>
<span class="line"><span>      group: SEATA_GROUP</span></span>
<span class="line"><span>      namespace: &#39;6487cc37-2434-4574-81f9-83d2c2fb0dd5&#39;</span></span>
<span class="line"><span>      username: &#39;nacos&#39;</span></span>
<span class="line"><span>      password: &#39;nacos&#39;</span></span>
<span class="line"><span>  config:</span></span>
<span class="line"><span>    type: nacos</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      server-addr: 192.168.56.105:8848</span></span>
<span class="line"><span>      group: SEATA_GROUP</span></span>
<span class="line"><span>      namespace: &#39;6487cc37-2434-4574-81f9-83d2c2fb0dd5&#39;</span></span>
<span class="line"><span>      username: &#39;nacos&#39;</span></span>
<span class="line"><span>      password: &#39;nacos&#39;</span></span></code></pre></div><p>后面看了下，再改一下</p><p>其中 product-service-group: default 是对应 tx-service-group 前面的 config.txt 中的分组映射关系</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Seata 配置项，对应 SeataProperties 类</span></span>
<span class="line"><span>seata:</span></span>
<span class="line"><span>  application-id: \${spring.application.name} # Seata 应用编号，默认为 \${spring.application.name}</span></span>
<span class="line"><span>  tx-service-group: \${spring.application.name}-group # Seata 事务组编号，用于 TC 集群名</span></span>
<span class="line"><span>  # 服务配置项，对应 ServiceProperties 类</span></span>
<span class="line"><span>  service:</span></span>
<span class="line"><span>    # 虚拟组和分组的映射</span></span>
<span class="line"><span>    vgroup-mapping:</span></span>
<span class="line"><span>      product-service-group: default</span></span>
<span class="line"><span>      # account-service-group: default</span></span>
<span class="line"><span>      # order-service-group: default</span></span>
<span class="line"><span>    # 分组和 Seata 服务的映射</span></span>
<span class="line"><span>    grouplist:</span></span>
<span class="line"><span>      #设置Seata TC 的地址</span></span>
<span class="line"><span>      default: 192.168.56.105:8091</span></span></code></pre></div><hr><h5 id="部署集群-tc-server" tabindex="-1">部署集群 TC Server <a class="header-anchor" href="#部署集群-tc-server" aria-label="Permalink to &quot;部署集群 TC  Server&quot;">​</a></h5><p>这里后面再看一下 to be contined....</p><h4 id="业务场景" tabindex="-1">业务场景 <a class="header-anchor" href="#业务场景" aria-label="Permalink to &quot;业务场景&quot;">​</a></h4><p>继续项目：<a href="https://github.com/YunaiV/SpringBoot-Labs" target="_blank" rel="noreferrer">https://github.com/YunaiV/SpringBoot-Labs</a> 的 <a href="https://github.com/YunaiV/SpringBoot-Labs/tree/master/labx-17" target="_blank" rel="noreferrer">labx-17</a></p><p>文档： <a href="https://www.iocoder.cn/Spring-Cloud-Alibaba/Seata/?self" target="_blank" rel="noreferrer">https://www.iocoder.cn/Spring-Cloud-Alibaba/Seata/?self</a></p><p>业务逻辑</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426203157.png" alt="image.png"></p><p>项目模块</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240426203253.png" alt="image.png"></p><ul><li>order 下单操作</li><li>product 商品服务（扣除库存）</li><li>account 账户服务（扣除余额）</li></ul><p>data.sql 文件中： 每个库中的 <code>undo_log</code> 表，是 Seata AT 模式必须创建的表，主要用于分支事务的回滚</p><p>考虑到测试方便，数据库中插入了一条 <code>id = 1</code> 的 <code>account</code> 记录，和一条 <code>id = 1</code> 的 <code>product</code> 记录</p><h5 id="简单测试" tabindex="-1">简单测试 <a class="header-anchor" href="#简单测试" aria-label="Permalink to &quot;简单测试&quot;">​</a></h5><p>测试两种情况：</p><ol><li>分布式事务正常提交</li><li>分布式事务异常回滚</li></ol><blockquote><p>分布式事务正常提交</p></blockquote><p>如果要正常提交的话，因为账户表中只有一条数据，用户 1 有10 余额；产品表一条数据，产品 1 有10个库存</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428154235.png" alt="image.png"></p><p>这个是一次正常请求记录</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428154332.png" alt="image.png"></p><p>日志，记录正常操作：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428154441.png" alt="image.png"></p><blockquote><p>分布式事务异常回滚</p></blockquote><p>模仿余额不足的情况下</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428154532.png" alt="image.png"></p><p>相关的日志</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240428154601.png" alt="image.png"></p><h4 id="工程代码" tabindex="-1">工程代码 <a class="header-anchor" href="#工程代码" aria-label="Permalink to &quot;工程代码&quot;">​</a></h4><p>看一下核心代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override  </span></span>
<span class="line"><span>@GlobalTransactional  </span></span>
<span class="line"><span>public Integer createOrder(Long userId, Long productId, Integer price) {  </span></span>
<span class="line"><span>    Integer amount = 1; // 购买数量，暂时设置为 1。  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    logger.info(&quot;[createOrder] 当前 XID: {}&quot;, RootContext.getXID());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 扣减库存  </span></span>
<span class="line"><span>    productService.reduceStock(new ProductReduceStockDTO().setProductId(productId).setAmount(amount));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 扣减余额  </span></span>
<span class="line"><span>    accountService.reduceBalance(new AccountReduceBalanceDTO().setUserId(userId).setPrice(price));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 保存订单  </span></span>
<span class="line"><span>    OrderDO order = new OrderDO().setUserId(userId).setProductId(productId).setPayAmount(amount * price);  </span></span>
<span class="line"><span>    orderDao.saveOrder(order);  </span></span>
<span class="line"><span>    logger.info(&quot;[createOrder] 保存订单: {}&quot;, order.getId());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 返回订单编号  </span></span>
<span class="line"><span>    return order.getId();  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>中间几个都是远程调用的操作</p><p>然后对方执行的是本地事务，比如你看一下扣除余额的操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override  </span></span>
<span class="line"><span>@Transactional // 开启新事物  </span></span>
<span class="line"><span>public void reduceBalance(Long userId, Integer price) throws Exception {  </span></span>
<span class="line"><span>    logger.info(&quot;[reduceBalance] 当前 XID: {}&quot;, RootContext.getXID());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 检查余额  </span></span>
<span class="line"><span>    checkBalance(userId, price);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    logger.info(&quot;[reduceBalance] 开始扣减用户 {} 余额&quot;, userId);  </span></span>
<span class="line"><span>    // 扣除余额  </span></span>
<span class="line"><span>    int updateCount = accountDao.reduceBalance(price);  </span></span>
<span class="line"><span>    // 扣除成功  </span></span>
<span class="line"><span>    if (updateCount == 0) {  </span></span>
<span class="line"><span>        logger.warn(&quot;[reduceBalance] 扣除用户 {} 余额失败&quot;, userId);  </span></span>
<span class="line"><span>        throw new Exception(&quot;余额不足&quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    logger.info(&quot;[reduceBalance] 扣除用户 {} 余额成功&quot;, userId);  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,166)])])}const h=a(l,[["render",t]]);export{g as __pageData,h as default};
