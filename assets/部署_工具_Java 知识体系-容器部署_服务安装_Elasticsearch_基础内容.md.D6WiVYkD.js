import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Elasticsearch_基础内容","description":"","frontmatter":{"title":"Elasticsearch_基础内容","excerpt":"Elasticsearch_服务安装","date":"2023-11-26 00:42:05","updated":"2023-11-26 00:42:05"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/Elasticsearch_基础内容.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/Elasticsearch_基础内容.md","lastUpdated":null}'),l={name:"部署&工具/Java 知识体系-容器部署/服务安装/Elasticsearch_基础内容.md"};function t(i,s,c,o,r,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h4 id="基础内容介绍" tabindex="-1">基础内容介绍 <a class="header-anchor" href="#基础内容介绍" aria-label="Permalink to &quot;基础内容介绍&quot;">​</a></h4><p><code>Elasticsearch</code>是一个开源的高扩展的分布式全文检索引擎，它可以近乎实时的存储、检索数据；本 身扩展性很好，可以扩展到上百台服务器，处理PB级别的数据。</p><p>ES也使用Java开发并使用 Lucene 作为其核心来实 现所有索引和搜索的功能，它的目的是通过简单的RESTful API来隐藏Lucene的复杂性，从而让全文搜索变得 简单。</p><blockquote><p>Elasticsearch比传统关系型数据库如下：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Relational DB ‐&gt; Databases ‐&gt; Tables ‐&gt; Rows ‐&gt; Columns  </span></span>
<span class="line"><span>&gt; Elasticsearch ‐&gt; Indices ‐&gt; Types ‐&gt; Documents ‐&gt; Fields</span></span></code></pre></div><h4 id="docker-方式安装-es" tabindex="-1">Docker 方式安装 es <a class="header-anchor" href="#docker-方式安装-es" aria-label="Permalink to &quot;Docker 方式安装 es&quot;">​</a></h4><p>参考下这个： <a href="https://blog.csdn.net/m0_62289824/article/details/137676075" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_62289824/article/details/137676075</a></p><p>创建一个新的Docker网络</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#拉取镜像</span></span>
<span class="line"><span>docker pull elasticsearch:8.6.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建专用网络（可选）</span></span>
<span class="line"><span>docker network create es-net</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建挂载点目录</span></span>
<span class="line"><span>mkdir -p /usr/local/es/data /usr/local/es/config /usr/local/es/plugins</span></span>
<span class="line"><span>chmod 777  /usr/local/es/data</span></span>
<span class="line"><span>chmod 777  /usr/local/es/config</span></span>
<span class="line"><span>chmod 777  /usr/local/es/plugins</span></span></code></pre></div><p>这里使用专用网络是为了：将 Elasticsearch 和相关服务（如Kibana、Logstash）放在同一网络，与外部或其他服务隔离，减少暴露风险。</p><p>本地拉取网络有点问题，选择了默认最近的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull docker.io/library/elasticsearch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下面的命令部分内容改为：elasticsearch:latest</span></span></code></pre></div><p>创建容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>--name es \\</span></span>
<span class="line"><span>--network es-net \\</span></span>
<span class="line"><span>-p 9200:9200 \\</span></span>
<span class="line"><span>-p 9300:9300 \\</span></span>
<span class="line"><span>--privileged \\</span></span>
<span class="line"><span>-v /usr/local/es/data:/usr/share/elasticsearch/data \\</span></span>
<span class="line"><span>-v /usr/local/es/plugins:/usr/share/elasticsearch/plugins \\</span></span>
<span class="line"><span>-e &quot;discovery.type=single-node&quot; \\</span></span>
<span class="line"><span>-e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot; \\</span></span>
<span class="line"><span>elasticsearch:8.6.0</span></span></code></pre></div><p>编写elasticsearch.yml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#进入容器</span></span>
<span class="line"><span>docker exec -it es /bin/bash</span></span>
<span class="line"><span>#跳转到 config 目录</span></span>
<span class="line"><span>cd config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#关闭 密码安全验证</span></span>
<span class="line"><span>echo &#39;xpack.security.enabled: false&#39; &gt;&gt; elasticsearch.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启 es 容器</span></span>
<span class="line"><span>docker restart es</span></span></code></pre></div><p>这里我实际使用的版本是 <code>docker.elastic.co/elasticsearch/elasticsearch:8.1.0</code> ，然后不能进行追加操作，需要进入到 vi 模式，手动编辑一下，关闭密码安全验证</p><p>测试是否部署成功：访问虚拟机地址+端口号，前面配置Elasticsearch 的端口号为：9200</p><p>出现了一下报错： Caused by: com.fasterxml.jackson.core.JsonParseException: Duplicate field &#39;xpack.security.enabled&#39;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>touch /usr/local/es/config/elasticsearch.yml</span></span>
<span class="line"><span>chmod 666 /usr/local/es/config/elasticsearch.yml</span></span></code></pre></div><p>编辑一下文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cluster.name: &quot;my-es-cluster&quot;</span></span>
<span class="line"><span>network.host: 0.0.0.0</span></span>
<span class="line"><span>xpack.security.enabled: false</span></span></code></pre></div><p>删除容器并启动一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --restart=always \\</span></span>
<span class="line"><span>  --name es \\</span></span>
<span class="line"><span>  --network es-net \\</span></span>
<span class="line"><span>  -p 9200:9200 \\</span></span>
<span class="line"><span>  -p 9300:9300 \\</span></span>
<span class="line"><span>  --privileged \\</span></span>
<span class="line"><span>  -v /usr/local/es/data:/usr/share/elasticsearch/data \\</span></span>
<span class="line"><span>  -v /usr/local/es/plugins:/usr/share/elasticsearch/plugins \\</span></span>
<span class="line"><span>  -v /usr/local/es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\</span></span>
<span class="line"><span>  -e &quot;discovery.type=single-node&quot; \\</span></span>
<span class="line"><span>  -e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot; \\</span></span>
<span class="line"><span>  elasticsearch:8.6.0</span></span></code></pre></div><h4 id="基于docker安装kibana" tabindex="-1">基于Docker安装Kibana <a class="header-anchor" href="#基于docker安装kibana" aria-label="Permalink to &quot;基于Docker安装Kibana&quot;">​</a></h4><p>注意版本，和 es 保持对应 <code>docker pull docker.elastic.co/kibana/kibana:8.1.0</code>, 看你实际情况</p><p>继续上面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull kibana:8.6.0</span></span>
<span class="line"><span>#创建挂载点目录</span></span>
<span class="line"><span>mkdir -p /usr/local/kibana/config /usr/local/kibana/data</span></span>
<span class="line"><span>chmod 777 /usr/local/kibana/data</span></span>
<span class="line"><span>chmod 777 /usr/local/kibana/config</span></span></code></pre></div><p>部署容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>--name kibana \\</span></span>
<span class="line"><span>--network es-net \\</span></span>
<span class="line"><span>-p 5601:5601 \\</span></span>
<span class="line"><span>-e ELASTICSEARCH_HOSTS=http://es:9200 \\</span></span>
<span class="line"><span>kibana:8.6.0</span></span></code></pre></div><p>测试 Kibana 是否安装成功</p><p>访问虚拟机地址+端口号，前面配置Kibana 的端口号为：5601</p><h4 id="整合-ik-分词器" tabindex="-1">整合 IK 分词器 <a class="header-anchor" href="#整合-ik-分词器" aria-label="Permalink to &quot;整合 IK 分词器&quot;">​</a></h4><p>先下载一下： <a href="https://github.com/infinilabs/analysis-ik/releases/tag/v8.1.0" target="_blank" rel="noreferrer">https://github.com/infinilabs/analysis-ik/releases/tag/v8.1.0</a></p><p>配置参考； <a href="https://www.cnblogs.com/ccubee/p/14254101.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ccubee/p/14254101.html</a></p><p>新建文件夹</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /data/elk/es/ik</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#解压</span></span>
<span class="line"><span>unzip elasticsearch-analysis-ik-8.1.0.zip</span></span></code></pre></div><p>将 IK 分词器复制到 docker 内部</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker cp /data/elk/es/ik es2:/usr/share/elasticsearch/plugins/ik/</span></span></code></pre></div><ul><li><code>docker cp</code> 复制文件到docker内部</li><li><code>/data/elk/es/ik</code> ik分词器路径</li><li><code>es2</code> es容器名称</li><li><code>/usr/share/elasticsearch/plugins/ik/</code> docker内es插件路径</li></ul><p>复制完毕重启es <code>docker restart es2(容器名称或者容器id)</code></p><p>测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET _analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;analyzer&quot;: &quot;ik_smart&quot;,</span></span>
<span class="line"><span>  &quot;text&quot;:&quot;今天天气不错&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="es-整合-elk" tabindex="-1">es 整合 ELK <a class="header-anchor" href="#es-整合-elk" aria-label="Permalink to &quot;es 整合 ELK&quot;">​</a></h4><p>还没操作，有点问题，后面看一下</p><p>参考： <a href="https://www.yuque.com/macrozheng/mall-learning/yu3lh69e1gu0ppiq" target="_blank" rel="noreferrer">https://www.yuque.com/macrozheng/mall-learning/yu3lh69e1gu0ppiq</a></p><p>文档中用的是 下载Elasticsearch<code>7.17.3</code> 版本，实际自己用的是 8.1.0；先继续用一下，不行的话换一个端口映射服务安装或者切换服务。</p><p>配置参考；</p><ul><li><a href="https://www.jianshu.com/p/f45e4b6de0e8" target="_blank" rel="noreferrer">https://www.jianshu.com/p/f45e4b6de0e8</a></li><li><a href="https://www.jb51.net/server/31819669s.htm" target="_blank" rel="noreferrer">https://www.jb51.net/server/31819669s.htm</a></li></ul><p>拉取</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull logstash:8.1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull docker.elastic.co/logstash/logstash:8.1.0</span></span></code></pre></div><p>目录挂载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /home/data/logstash/config</span></span>
<span class="line"><span>mkdir -p /home/data/logstash/pipeline</span></span>
<span class="line"><span>mkdir -p /home/data/logstash/data</span></span>
<span class="line"><span>mkdir -p /home/data/logstash/pipeline/mappings</span></span></code></pre></div><p>编辑文件</p><p><code>vi /home/data/logstash/config/logstash.yml</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http.host: &quot;0.0.0.0&quot;</span></span>
<span class="line"><span>xpack.monitoring.elasticsearch.username: &quot;logstash&quot;</span></span>
<span class="line"><span>xpack.monitoring.elasticsearch.password: &quot;密码&quot;</span></span>
<span class="line"><span>xpack.monitoring.elasticsearch.hosts: [ &quot;http://es-ip:9200&quot; ]</span></span></code></pre></div><p><code>vi /home/data/logstash/pipeline/logstash.conf</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>input {</span></span>
<span class="line"><span>  tcp {</span></span>
<span class="line"><span>    mode =&gt; &quot;server&quot;</span></span>
<span class="line"><span>    host =&gt; &quot;0.0.0.0&quot;  # 允许任意主机发送日志</span></span>
<span class="line"><span>    port =&gt; 5044 # logstash暴露的端口</span></span>
<span class="line"><span>    codec =&gt; json_lines    # 数据格式</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    ruby {</span></span>
<span class="line"><span>        # 将时间转成毫秒的时间戳</span></span>
<span class="line"><span>        code =&gt; &quot;event.set(&#39;createTime&#39;,(event.get(&#39;@timestamp&#39;).to_f.round(3)*1000).to_i)&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ruby {</span></span>
<span class="line"><span>        # 设置一个自定义字段&#39;timestamp&#39;[这个字段可自定义]，将logstash自动生成的时间戳中的值加8小时，赋给这个字段</span></span>
<span class="line"><span>    code =&gt; &quot;</span></span>
<span class="line"><span>          event.set(&#39;timestamp&#39;, event.get(&#39;@timestamp&#39;).time.localtime + 8*3600)</span></span>
<span class="line"><span>          event.set(&#39;threadName&#39;, event.get(&#39;thread_name&#39;))</span></span>
<span class="line"><span>          event.set(&#39;levelValue&#39;, event.get(&#39;level_value&#39;))</span></span>
<span class="line"><span>          event.set(&#39;loggerName&#39;, event.get(&#39;logger_name&#39;))</span></span>
<span class="line"><span>          event.set(&#39;callerClassName&#39;, event.get(&#39;caller_class_name&#39;))</span></span>
<span class="line"><span>          event.set(&#39;callerFileName&#39;, event.get(&#39;caller_file_name&#39;))</span></span>
<span class="line"><span>          event.set(&#39;callerLineNumber&#39;, event.get(&#39;caller_line_number&#39;))</span></span>
<span class="line"><span>          event.set(&#39;callerMethodName&#39;, event.get(&#39;caller_method_name&#39;))</span></span>
<span class="line"><span>          event.set(&#39;stackTrace&#39;, event.get(&#39;stack_trace&#39;))</span></span>
<span class="line"><span>        &quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ruby {</span></span>
<span class="line"><span>        # 将自定义时间字段中的值重新赋给@timestamp</span></span>
<span class="line"><span>        # code =&gt; &quot;event.set(&#39;@timestamp&#39;,event.get(&#39;timestamp&#39;))&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mutate {</span></span>
<span class="line"><span>        # 删除自定义字段</span></span>
<span class="line"><span>        remove_field =&gt; [&quot;timestamp&quot;,&quot;thread_name&quot;,&quot;level_value&quot;,&quot;logger_name&quot;,&quot;HOSTNAME&quot;,&quot;caller_class_name&quot;,&quot;caller_file_name&quot;,&quot;caller_line_number&quot;,&quot;caller_method_name&quot;,&quot;stack_trace&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>  elasticsearch {</span></span>
<span class="line"><span>      hosts  =&gt; [&quot;http://es-ip:9200&quot;]   # ElasticSearch 的地址和端口</span></span>
<span class="line"><span>      user   =&gt; &quot;elastic&quot;</span></span>
<span class="line"><span>      password =&gt; &quot;es密码&quot;</span></span>
<span class="line"><span>      index  =&gt; &quot;application-logs-%{[appName]}-%{[springProfile]}-%{+YYY-MM}&quot;         # 指定索引名</span></span>
<span class="line"><span>      # document_type =&gt; &quot;_doc&quot;</span></span>
<span class="line"><span>      codec  =&gt; json</span></span>
<span class="line"><span>      # 是否使用模板创建索引，在模板中可提前定义索引的字段类型</span></span>
<span class="line"><span>      manage_template =&gt; true</span></span>
<span class="line"><span>      # 索引模板文件</span></span>
<span class="line"><span>      template =&gt; &quot;/usr/share/logstash/pipeline/mappings/application-log-mapping.json&quot;</span></span>
<span class="line"><span>      template_name =&gt; &quot;application-log&quot;</span></span>
<span class="line"><span>      # 在logstash重启后，是否使用模板文件覆盖es中已存在的索引模板</span></span>
<span class="line"><span>      template_overwrite =&gt; true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  #stdout {</span></span>
<span class="line"><span>  #  codec =&gt; rubydebug</span></span>
<span class="line"><span>  #}</span></span>
<span class="line"><span>  file {</span></span>
<span class="line"><span>    path =&gt; &quot;/usr/share/logstash/pipeline/logs/%{+YYYY-MM-dd}-%{appName}-%{springProfile}.log&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>vi /home/data/logstash/pipeline/mappings/application-log-mapping.json</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 这里被坑了一天，7.X后的es，type 不是再是 string 而是 type=&quot;keyword&quot; 或 type=&quot;text&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;index_patterns&quot;: [&quot;application-log*&quot;],</span></span>
<span class="line"><span>  &quot;order&quot;: 1,</span></span>
<span class="line"><span>  &quot;mappings&quot; : {</span></span>
<span class="line"><span>    &quot;dynamic_templates&quot; : [{</span></span>
<span class="line"><span>      &quot;message_field&quot; : {</span></span>
<span class="line"><span>        &quot;match&quot; : &quot;message&quot;,</span></span>
<span class="line"><span>        &quot;match_mapping_type&quot; : &quot;string&quot;,</span></span>
<span class="line"><span>        &quot;mapping&quot; : {</span></span>
<span class="line"><span>          &quot;type&quot; : &quot;keyword&quot;,</span></span>
<span class="line"><span>          &quot;index&quot; : true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }, {</span></span>
<span class="line"><span>      &quot;string_fields&quot; : {</span></span>
<span class="line"><span>        &quot;match&quot; : &quot;*&quot;,</span></span>
<span class="line"><span>        &quot;match_mapping_type&quot; : &quot;string&quot;,</span></span>
<span class="line"><span>        &quot;mapping&quot; : {</span></span>
<span class="line"><span>          &quot;type&quot; : &quot;keyword&quot;,</span></span>
<span class="line"><span>          &quot;index&quot; : true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }],</span></span>
<span class="line"><span>    &quot;properties&quot; : {</span></span>
<span class="line"><span>      &quot;@timestamp&quot;: { &quot;type&quot;: &quot;date&quot; },</span></span>
<span class="line"><span>      &quot;@version&quot;: { &quot;type&quot;: &quot;keyword&quot;, &quot;index&quot;: true },</span></span>
<span class="line"><span>      &quot;message&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>        &quot;analyzer&quot;: &quot;ik_max_word&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行logstash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name logstash --net elk-network \\</span></span>
<span class="line"><span>  --privileged=true \\</span></span>
<span class="line"><span>  -p 5044:5044 \\</span></span>
<span class="line"><span>  -v /home/data/logstash/data/:/usr/share/logstash/data \\</span></span>
<span class="line"><span>  -v /home/data/logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml \\</span></span>
<span class="line"><span>  -v /home/data/logstash/pipeline/:/usr/share/logstash/pipeline \\</span></span>
<span class="line"><span>  logstash:7.17.18</span></span></code></pre></div><p>相关问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> # 如果运行中，查看日志有创建动态mapping报错，那在kibana里面执行一下手动创建mapping，看下报什么错</span></span>
<span class="line"><span>PUT _template/application-logs</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>      mapping</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><p>参考</p><ul><li><a href="https://elasticsearch.bookhub.tech/getting_started/" target="_blank" rel="noreferrer">https://elasticsearch.bookhub.tech/getting_started/</a></li><li><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html" target="_blank" rel="noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html</a></li><li><a href="https://www.cnblogs.com/coderxz/p/13268417.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/coderxz/p/13268417.html</a></li><li><a href="https://zhuanlan.zhihu.com/p/516698885" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/516698885</a></li></ul>`,67)])])}const g=a(l,[["render",t]]);export{h as __pageData,g as default};
