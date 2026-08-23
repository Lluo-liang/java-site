import{_ as a,o as n,c as e,am as p}from"./chunks/framework._FJXuPhs.js";const m=JSON.parse('{"title":"消息队列_RocketMQ_安装与使用","description":"","frontmatter":{"title":"消息队列_RocketMQ_安装与使用","excerpt":"消息队列_RocketMQ_安装与使用","date":"2023-12-21 11:48:02","updated":"2023-12-21 11:48:02"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/消息队列_RocketMQ_安装与使用.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/消息队列_RocketMQ_安装与使用.md","lastUpdated":null}'),l={name:"部署&工具/Java 知识体系-容器部署/服务安装/消息队列_RocketMQ_安装与使用.md"};function t(o,s,r,i,c,d){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h3 id="手动部署方式" tabindex="-1">手动部署方式 <a class="header-anchor" href="#手动部署方式" aria-label="Permalink to &quot;手动部署方式&quot;">​</a></h3><h4 id="下载二进制文件" tabindex="-1">下载二进制文件 <a class="header-anchor" href="#下载二进制文件" aria-label="Permalink to &quot;下载二进制文件&quot;">​</a></h4><p>下载地址： <a href="https://rocketmq.apache.org/download/" target="_blank" rel="noreferrer">https://rocketmq.apache.org/download/</a></p><p>这里下载 4.8.0 版本：<a href="https://rocketmq.apache.org/release-notes/2020/12/21/4.8.0" target="_blank" rel="noreferrer">Release Notes - Apache RocketMQ - Version 4.8.0 | RocketMQ</a></p><p>选择Binary 进行下载。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202312211150403.png" alt="image.png"></p><blockquote><p>NameServer</p></blockquote><p>注册中心，用于管理 Broker</p><blockquote><p>Broker</p></blockquote><p>用来保持 Topic 主题的信息，接收生产者的消息。</p><h4 id="搭建可视化监控平台" tabindex="-1">搭建可视化监控平台 <a class="header-anchor" href="#搭建可视化监控平台" aria-label="Permalink to &quot;搭建可视化监控平台&quot;">​</a></h4><p>rocketmq-dashboard是RocketMQ的一个拓展开源项目，可以对MQ进行可视化监控。</p><p>下载地址： <a href="https://github.com/apache/rocketmq-dashboard" target="_blank" rel="noreferrer">https://github.com/apache/rocketmq-dashboard</a></p><h4 id="服务启动" tabindex="-1">服务启动 <a class="header-anchor" href="#服务启动" aria-label="Permalink to &quot;服务启动&quot;">​</a></h4><p>RocketMQ 需要 JDK 1.8+。确保服务器已安装合适的 JDK</p><ul><li>1、配置 JDK 环境</li><li>2、启动 NameServer</li><li>3、启动 Broker</li><li>4、RocketMQ Console 管理界面（可选）</li></ul><h3 id="docker-方式安装" tabindex="-1">docker 方式安装 <a class="header-anchor" href="#docker-方式安装" aria-label="Permalink to &quot;docker 方式安装&quot;">​</a></h3><p>参考： <a href="https://blog.csdn.net/qq_43600166/article/details/136187969" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_43600166/article/details/136187969</a></p><p>拉取最新镜像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull rocketmqinc/rocketmq</span></span></code></pre></div><h4 id="nameserver" tabindex="-1">nameserver <a class="header-anchor" href="#nameserver" aria-label="Permalink to &quot;nameserver&quot;">​</a></h4><p><strong>创建 nameserver 数据存储目录</strong></p><p><strong>rocketMQ</strong> 分为<strong>nameserver</strong>和<strong>broker</strong>两部分，在启动时应该先启动<strong>nameserver</strong>，因此我们现在先创建<strong>nameserver</strong>的日志和数据存放目录。这个目录可由我们自己定义路径，这里我将其放到data路径下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /data/namesrv/logs /data/namesrv/store</span></span></code></pre></div><p>logs:是nameserver的日志目录，store:是nameserver的数据目录</p><p><strong>构建namesrv容器并启动</strong></p><p>挂载日志和数据路径，执行以下命令启动<strong>nameserver</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --restart=always \\</span></span>
<span class="line"><span>  --name rmqnamesrv \\</span></span>
<span class="line"><span>  -p 9876:9876 \\</span></span>
<span class="line"><span>  -v /data/namesrv/logs:/root/logs \\</span></span>
<span class="line"><span>  -v /data/namesrv/store:/root/store \\</span></span>
<span class="line"><span>  -e &quot;MAX_POSSIBLE_HEAP=100000000&quot; \\</span></span>
<span class="line"><span>  rocketmqinc/rocketmq \\</span></span>
<span class="line"><span>  sh mqnamesrv</span></span></code></pre></div><h4 id="broker" tabindex="-1">broker <a class="header-anchor" href="#broker" aria-label="Permalink to &quot;broker&quot;">​</a></h4><p><strong>创建broker数据存储路径</strong></p><p>在操作这步之前，我们已经将<strong>nameserver</strong>启动成功，则接下来我们将要为<strong>broker</strong>创建数据挂载目录和配置文件，以确保<strong>broker</strong>能够成功启动。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /data/broker/logs  /data/broker/store /data/broker/conf</span></span></code></pre></div><p>修改配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /data/broker/conf</span></span>
<span class="line"><span>vi broker.conf</span></span></code></pre></div><p>broker.conf</p><blockquote><p>将信息复制到broker.conf文件中，注意修改 brokerIP1，改为您服务器的IP地址！！！！请注意修改 namesrvAddr，改为您n ameserver 的IP地址！！！！</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Licensed to the Apache Software Foundation (ASF) under one or more</span></span>
<span class="line"><span># contributor license agreements.  See the NOTICE file distributed with</span></span>
<span class="line"><span># this work for additional information regarding copyright ownership.</span></span>
<span class="line"><span># The ASF licenses this file to You under the Apache License, Version 2.0</span></span>
<span class="line"><span># (the &quot;License&quot;); you may not use this file except in compliance with</span></span>
<span class="line"><span># the License.  You may obtain a copy of the License at</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#     http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#  Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span>#  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span>#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span>#  See the License for the specific language governing permissions and</span></span>
<span class="line"><span>#  limitations under the License.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 所属集群名字</span></span>
<span class="line"><span>brokerClusterName=DefaultCluster</span></span>
<span class="line"><span># broker 名字，注意此处不同的配置文件填写的不一样，如果在 broker-a.properties 使用: broker-a,</span></span>
<span class="line"><span># 在 broker-b.properties 使用: broker-b</span></span>
<span class="line"><span>brokerName=broker-a</span></span>
<span class="line"><span># 0 表示 Master，&gt; 0 表示 Slave</span></span>
<span class="line"><span>brokerId=0</span></span>
<span class="line"><span># nameServer地址，分号分割</span></span>
<span class="line"><span>namesrvAddr=rmqserver01:9876</span></span>
<span class="line"><span># 启动IP,如果 docker 报 com.alibaba.rocketmq.remoting.exception.RemotingConnectException: connect to &lt;192.168.0.120:10909&gt; failed</span></span>
<span class="line"><span># 解决方式1 加上一句 producer.setVipChannelEnabled(false);，解决方式2 brokerIP1 设置宿主机IP，不要使用docker 内部IP</span></span>
<span class="line"><span>#producer.setVipChannelEnabled=false</span></span>
<span class="line"><span>brokerIP1=192.168.101.220</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在发送消息时，自动创建服务器不存在的topic，默认创建的队列数</span></span>
<span class="line"><span>defaultTopicQueueNums=4</span></span>
<span class="line"><span># 是否允许 Broker 自动创建 Topic，建议线下开启，线上关闭 ！！！这里仔细看是 false，false，false</span></span>
<span class="line"><span>autoCreateTopicEnable=true</span></span>
<span class="line"><span># 是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭</span></span>
<span class="line"><span>autoCreateSubscriptionGroup=true</span></span>
<span class="line"><span># Broker 对外服务的监听端口</span></span>
<span class="line"><span>listenPort=10911</span></span>
<span class="line"><span># 删除文件时间点，默认凌晨4点</span></span>
<span class="line"><span>deleteWhen=04</span></span>
<span class="line"><span># 文件保留时间，默认48小时</span></span>
<span class="line"><span>fileReservedTime=120</span></span>
<span class="line"><span># commitLog 每个文件的大小默认1G</span></span>
<span class="line"><span>mapedFileSizeCommitLog=1073741824</span></span>
<span class="line"><span># ConsumeQueue 每个文件默认存 30W 条，根据业务情况调整</span></span>
<span class="line"><span>mapedFileSizeConsumeQueue=300000</span></span>
<span class="line"><span># destroyMapedFileIntervalForcibly=120000</span></span>
<span class="line"><span># redeleteHangedFileInterval=120000</span></span>
<span class="line"><span># 检测物理文件磁盘空间</span></span>
<span class="line"><span>diskMaxUsedSpaceRatio=88</span></span>
<span class="line"><span># 存储路径</span></span>
<span class="line"><span># storePathRootDir=/home/ztztdata/rocketmq-all-4.1.0-incubating/store</span></span>
<span class="line"><span># commitLog 存储路径</span></span>
<span class="line"><span># storePathCommitLog=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/commitlog</span></span>
<span class="line"><span># 消费队列存储</span></span>
<span class="line"><span># storePathConsumeQueue=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/consumequeue</span></span>
<span class="line"><span># 消息索引存储路径</span></span>
<span class="line"><span># storePathIndex=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/index</span></span>
<span class="line"><span># checkpoint 文件存储路径</span></span>
<span class="line"><span># storeCheckpoint=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/checkpoint</span></span>
<span class="line"><span># abort 文件存储路径</span></span>
<span class="line"><span># abortFile=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/abort</span></span>
<span class="line"><span># 限制的消息大小</span></span>
<span class="line"><span>maxMessageSize=65536</span></span>
<span class="line"><span># flushCommitLogLeastPages=4</span></span>
<span class="line"><span># flushConsumeQueueLeastPages=2</span></span>
<span class="line"><span># flushCommitLogThoroughInterval=10000</span></span>
<span class="line"><span># flushConsumeQueueThoroughInterval=60000</span></span>
<span class="line"><span># Broker 的角色</span></span>
<span class="line"><span># - ASYNC_MASTER 异步复制Master</span></span>
<span class="line"><span># - SYNC_MASTER 同步双写Master</span></span>
<span class="line"><span># - SLAVE</span></span>
<span class="line"><span>brokerRole=ASYNC_MASTER</span></span>
<span class="line"><span># 刷盘方式</span></span>
<span class="line"><span># - ASYNC_FLUSH 异步刷盘</span></span>
<span class="line"><span># - SYNC_FLUSH 同步刷盘</span></span>
<span class="line"><span>flushDiskType=ASYNC_FLUSH</span></span>
<span class="line"><span># 发消息线程池数量</span></span>
<span class="line"><span># sendMessageThreadPoolNums=128</span></span>
<span class="line"><span># 拉消息线程池数量</span></span>
<span class="line"><span># pullMessageThreadPoolNums=128</span></span></code></pre></div><p>刚刚我们已经创建了<strong>broker</strong>的挂载目录和配置文件，此时准备工作就已经完成，可以执行一下命令启动<strong>broker</strong>容器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --restart=always \\</span></span>
<span class="line"><span>  --name rmqbroker01 \\</span></span>
<span class="line"><span>  --link rmqnamesrv:namesrv \\</span></span>
<span class="line"><span>  -p 10911:10911 \\</span></span>
<span class="line"><span>  -p 10909:10909 \\</span></span>
<span class="line"><span>  -v /data/broker/logs:/root/logs \\</span></span>
<span class="line"><span>  -v /data/broker/store:/root/store \\</span></span>
<span class="line"><span>  -v /data/broker/conf/broker.conf:/opt/rocketmq-4.4.0/conf/broker.conf \\</span></span>
<span class="line"><span>  -e &quot;NAMESRV_ADDR=192.168.31.196:9876&quot; \\</span></span>
<span class="line"><span>  -e &quot;MAX_POSSIBLE_HEAP=200000000&quot; \\</span></span>
<span class="line"><span>  rocketmqinc/rocketmq \\</span></span>
<span class="line"><span>  sh mqbroker -c /opt/rocketmq-4.4.0/conf/broker.conf</span></span></code></pre></div><ul><li>-e “NAMESRV_ADDR=namesrv:9876” 指定namesrv的地址为本机namesrv的ip地址:9876</li></ul><h4 id="rocketmq-console可视化界面" tabindex="-1">rocketmq-console可视化界面 <a class="header-anchor" href="#rocketmq-console可视化界面" aria-label="Permalink to &quot;rocketmq-console可视化界面&quot;">​</a></h4><p>进行拉取操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#拉取操作</span></span>
<span class="line"><span>docker pull pangliang/rocketmq-console-ng</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#构建并启动</span></span>
<span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --restart=always \\</span></span>
<span class="line"><span>  --name rmqadmin \\</span></span>
<span class="line"><span>  -e &quot;JAVA_OPTS=-Drocketmq.namesrv.addr=192.168.31.196:9876 \\</span></span>
<span class="line"><span>             -Dcom.rocketmq.sendMessageWithVIPChannel=false \\</span></span>
<span class="line"><span>             -Duser.timezone=&#39;Asia/Shanghai&#39;&quot; \\</span></span>
<span class="line"><span>  -v /etc/localtime:/etc/localtime \\</span></span>
<span class="line"><span>  -p 9999:8080 \\</span></span>
<span class="line"><span>  pangliang/rocketmq-console-ng</span></span></code></pre></div><p>👆 将信息Drocketmq.namesrv.addr后面的IP地址改为您的nameserver IP地址！！！Drocketmq.namesrv.addr后面的IP地址改为您的nameserver IP地址！！！</p><p><strong>通过访问9999端口查看rocketmq-console是否启动成功</strong></p><p>连接有点问题</p><p>主要的控制台报错日志</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[2024-04-18 22:16:21.035] ERROR op=global_exception_handler_print_error</span></span>
<span class="line"><span>org.apache.rocketmq.console.exception.ServiceException: This date have&#39;t data!</span></span>
<span class="line"><span>[2024-04-18 22:16:31.707]  INFO closeChannel: close the connection to remote address[] result: true</span></span>
<span class="line"><span>[2024-04-18 22:16:31.724] ERROR Unexpected error occurred in scheduled task.</span></span>
<span class="line"><span>java.lang.RuntimeException: org.apache.rocketmq.remoting.exception.RemotingConnectException: connect to &lt;null&gt; failed</span></span></code></pre></div><p>第一个 <code>This date have&#39;t data!</code> 改一下服务器日期</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看日期</span></span>
<span class="line"><span>date</span></span>
<span class="line"><span># 时间同步：</span></span>
<span class="line"><span>$ yum install ntpdate -y</span></span>
<span class="line"><span>$ ntpdate time.windows.com</span></span></code></pre></div><p>第二个报错参考这个： <a href="https://blog.csdn.net/bwp3830201/article/details/125682825" target="_blank" rel="noreferrer">https://blog.csdn.net/bwp3830201/article/details/125682825</a> （阿里云服务本身安全策略问题）</p><p>这里实际操作是将虚拟机的防火墙关闭了，并进行了重启操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>关闭防火墙：</span></span>
<span class="line"><span>$ systemctl stop firewalld</span></span>
<span class="line"><span>$ systemctl disable firewalld</span></span></code></pre></div><hr><p>参考</p><ul><li><a href="https://blog.csdn.net/xianren95/article/details/121924194" target="_blank" rel="noreferrer">https://blog.csdn.net/xianren95/article/details/121924194</a></li></ul>`,56)])])}const u=a(l,[["render",t]]);export{m as __pageData,u as default};
