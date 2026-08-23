import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"centos7 安装 nacos 操作","description":"","frontmatter":{"title":"centos7 安装 nacos 操作","excerpt":"centos7 安装 nacos 操作","date":"2023-12-03 10:28:41","updated":"2023-12-03 10:28:41"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/centos7 安装 nacos 操作.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/centos7 安装 nacos 操作.md","lastUpdated":null}'),t={name:"部署&工具/Java 知识体系-容器部署/服务安装/centos7 安装 nacos 操作.md"};function l(o,s,c,i,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>注意一下和 springcloud 的版本对应</p><p>版本选择可以看一下这些文档</p><ul><li><a href="https://sca.aliyun.com/docs/2023/overview/version-explain/?spm=5176.29160081.0.0.74805c72v1ZZT5" target="_blank" rel="noreferrer">https://sca.aliyun.com/docs/2023/overview/version-explain/?spm=5176.29160081.0.0.74805c72v1ZZT5</a></li><li><a href="https://nacos.io/docs/next/quickstart/quick-start/" target="_blank" rel="noreferrer">https://nacos.io/docs/next/quickstart/quick-start/</a></li></ul><h2 id="单机环境" tabindex="-1">单机环境 <a class="header-anchor" href="#单机环境" aria-label="Permalink to &quot;单机环境&quot;">​</a></h2><p>生产环境建议使用集群模式部署，单机模式仅适合开发和测试</p><h3 id="docker-的方式安装-nacos" tabindex="-1">Docker 的方式安装 Nacos <a class="header-anchor" href="#docker-的方式安装-nacos" aria-label="Permalink to &quot;Docker 的方式安装 Nacos&quot;">​</a></h3><ul><li>Nacos：<strong>2.x（推荐）</strong></li><li>模式：<strong>Standalone（单机模式）</strong></li></ul><h4 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#拉取镜像，指定版本</span></span>
<span class="line"><span>docker pull nacos/nacos-server:v2.3.0</span></span>
<span class="line"><span>#数据持久化</span></span>
<span class="line"><span>mkdir -p /opt/nacos/{conf,data,logs}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#（可选）准备自定义配置文件【这里跳过】后面还是使用了自定义配置文件，启动参数中指定了，要不然你改一下启动参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看镜像</span></span>
<span class="line"><span>docker images | grep nacos-server</span></span></code></pre></div><h4 id="启动-nacos-单机模式" tabindex="-1">启动 Nacos （单机模式） <a class="header-anchor" href="#启动-nacos-单机模式" aria-label="Permalink to &quot;启动 Nacos （单机模式）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--name nacos \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>-p 8848:8848 \\</span></span>
<span class="line"><span>-p 9848:9848 \\</span></span>
<span class="line"><span>-p 9849:9849 \\</span></span>
<span class="line"><span>-e MODE=standalone \\</span></span>
<span class="line"><span>-v /opt/nacos/conf:/home/nacos/conf \\</span></span>
<span class="line"><span>-v /opt/nacos/data:/home/nacos/data \\</span></span>
<span class="line"><span>-v /opt/nacos/logs:/home/nacos/logs \\</span></span>
<span class="line"><span>nacos/nacos-server:v2.3.0</span></span></code></pre></div><p>📌 <strong>Nacos 2.x 必须开放 9848 / 9849</strong>，否则服务注册异常。</p><blockquote><p>端口说明（非常重要）</p></blockquote><table tabindex="0"><thead><tr><th>端口</th><th>作用</th></tr></thead><tbody><tr><td>8848</td><td>Web 控制台 / HTTP API</td></tr><tr><td>9848</td><td>gRPC（客户端通信）</td></tr><tr><td>9849</td><td>gRPC（集群通信）</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>访问 Nacos 控制台</span></span>
<span class="line"><span>http://服务器IP:8848/nacos</span></span></code></pre></div><h4 id="指定配置文件" tabindex="-1">指定配置文件 <a class="header-anchor" href="#指定配置文件" aria-label="Permalink to &quot;指定配置文件&quot;">​</a></h4><p>上面参数中指定了配置文件，这里实际启动报错了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Logging system failed to initialize using configuration from &#39;/home/nacos/conf/nacos-logback.xml&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>java.io.FileNotFoundException:</span></span>
<span class="line"><span> /home/nacos/conf/nacos-logback.xml (No such file or directory)</span></span></code></pre></div><p>宿主机目录 <code>/opt/nacos/conf</code> 中 <strong>并不存在</strong>. nacos-logback.xml 文件</p><p>从官方镜像中拷贝默认日志配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#拷贝配置</span></span>
<span class="line"><span>docker run --rm nacos/nacos-server:v2.3.0 \\</span></span>
<span class="line"><span>cat /home/nacos/conf/nacos-logback.xml \\</span></span>
<span class="line"><span>&gt; /opt/nacos/conf/nacos-logback.xml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#确认文件存在</span></span>
<span class="line"><span>ls -l /opt/nacos/conf/nacos-logback.xml</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启容器</span></span>
<span class="line"><span>docker restart nacos</span></span></code></pre></div><p>重写覆盖一下文件（可选）</p><p>在执行这里的时候，实际遇到了拷贝写入文件的时候出现不在预期中的字符，因此这里进行了重写操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cat &gt; /opt/nacos/conf/nacos-logback.xml &lt;&lt; &#39;EOF&#39;</span></span>
<span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;60 seconds&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;property name=&quot;LOG_HOME&quot; value=&quot;/home/nacos/logs&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;APP_NAME&quot; value=&quot;nacos&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{50} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;appender name=&quot;FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;file&gt;\${LOG_HOME}/\${APP_NAME}.log&lt;/file&gt;</span></span>
<span class="line"><span>        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>            &lt;fileNamePattern&gt;\${LOG_HOME}/\${APP_NAME}.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span>            &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span>        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{50} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;STDOUT&quot;/&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;FILE&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#重启容器</span></span>
<span class="line"><span>docker restart nacos</span></span></code></pre></div><h4 id="鉴权操作" tabindex="-1">鉴权操作 <a class="header-anchor" href="#鉴权操作" aria-label="Permalink to &quot;鉴权操作&quot;">​</a></h4><p>⬆️ 上面这种方式使用的话，由于没有 <strong>application.properties</strong> 配置文件，默认鉴权是关闭的，因此访问是不需要账户密码的。</p><p>如果要开启鉴权的话，需要进行下面的操作</p><p>默认账号密码： nacos/nacos</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#拷贝官方文件</span></span>
<span class="line"><span>docker create --name tmp-nacos nacos/nacos-server:v2.3.0</span></span>
<span class="line"><span>docker cp tmp-nacos:/home/nacos/conf/application.properties /opt/nacos/conf/</span></span>
<span class="line"><span>docker rm tmp-nacos</span></span></code></pre></div><p>编辑配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /opt/nacos/conf/application.properties</span></span></code></pre></div><p>新增或者确认以下内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 开启鉴权</span></span>
<span class="line"><span>nacos.core.auth.enabled=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用内置鉴权插件</span></span>
<span class="line"><span>nacos.core.auth.system.type=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用登录</span></span>
<span class="line"><span>nacos.core.auth.server.identity.key=nacos</span></span>
<span class="line"><span>nacos.core.auth.server.identity.value=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span># JWT secret（必须） nacos.core.auth.plugin.nacos.token.secret.key=yJ7qf9Y2Q3HcR9bQyT0zFQv8y1Zc+P7nX8v7d8kKk3M=</span></span></code></pre></div><p>⬆️ JWT secret（必须）</p><p>“开启 Auth ” 后，需要 <strong>配置符合要求的 JWT secret</strong></p><blockquote><p>生成一个合规的 JWT secret（强烈推荐）</p></blockquote><p>在宿主机执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl rand -base64 32</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#输出结果，解码后 32 字节⬇️</span></span>
<span class="line"><span>ntdctb9H0xxdv7OXWFnOkzK70Bfbj1myVN69NNm3oGI=</span></span></code></pre></div><p>重启容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#重启容器</span></span>
<span class="line"><span>docker restart nacos</span></span></code></pre></div><h4 id="配置-外部数据库-mysql-方式" tabindex="-1">配置 外部数据库（MySQL 方式） <a class="header-anchor" href="#配置-外部数据库-mysql-方式" aria-label="Permalink to &quot;配置 外部数据库（MySQL 方式）&quot;">​</a></h4><p>略，后续跟进一下</p><h3 id="本地环境服务安装" tabindex="-1">本地环境服务安装 <a class="header-anchor" href="#本地环境服务安装" aria-label="Permalink to &quot;本地环境服务安装&quot;">​</a></h3><p>也记录一下不使用 docker 的方式，安装 nacos 的操作；</p><p>系统是： centos7</p><p>前提需要：项目运行环境需要安装 nacos</p><p>在 centos 中进行安装nacos，这里演示安装版本是 1.3.2，</p><p>下载地址： <a href="https://github.com/alibaba/nacos/releases/tag/1.3.2" target="_blank" rel="noreferrer">https://github.com/alibaba/nacos/releases/tag/1.3.2</a></p><p>nacos 运行需要先安装一下 JDK 环境，注意一下</p><p>可以自己点击下载 <code>nacos-server-1.3.2.tar.gz</code></p><p>或者在 Linux系统中下载命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget https://github.com/alibaba/nacos/releases/download/1.3.2/nacos-server-1.3.2.tar.gz</span></span></code></pre></div><p>下载完压缩包之后，上传指服务器任意目录，进行解压</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> tar -zxvf nacos-server-1.3.2.tar.gz</span></span></code></pre></div><p>解压后会生成 nacos 文件夹，进入到 nacos 目录，输入命令启动(以单机的形式启动)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bin/startup.sh -m standalone</span></span></code></pre></div><p>如果需要持久化 配置到mysql，则调整nacos的配置</p><p>如果你的服务器开了防火墙，则需要开放相应的端口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#开放端口</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=8848/tcp --permanent </span></span>
<span class="line"><span># 重启防火墙 </span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span># 查看开放的端口列表 </span></span>
<span class="line"><span>firewall-cmd --list-port</span></span></code></pre></div><p>nacos默认的启动端口是 8848，访问 <code>http://ip:端口/nacos</code> 即可看到登录页面.默认的用户名密码是 <code>nacos/naocs</code>，登录即可使用</p>`,61)])])}const u=a(t,[["render",l]]);export{g as __pageData,u as default};
