import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Linux系统安装 Docker","description":"","frontmatter":{"title":"Linux系统安装 Docker","excerpt":"摘要","date":"2025-12-15 22:32:27","updated":"2025-12-15 22:32:27"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Linux系统安装 Docker.md","filePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Linux系统安装 Docker.md","lastUpdated":null}'),t={name:"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Linux系统安装 Docker.md"};function o(c,s,l,i,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>这里实际是虚拟机的一个安装步骤</p><h3 id="linux系统安装-docker操作" tabindex="-1">Linux系统安装 Docker操作 <a class="header-anchor" href="#linux系统安装-docker操作" aria-label="Permalink to &quot;Linux系统安装 Docker操作&quot;">​</a></h3><p>安装操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># \`yum\` 是一个在Red Hat及其衍生版（如CentOS）上用于管理软件包的命令行工具</span></span>
<span class="line"><span>yum install -y yum-utils</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将这个地址添加到系统的软件源列表中，以便可以安装Docker。</span></span>
<span class="line"><span>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#用于安装三个Docker相关的软件包</span></span>
<span class="line"><span>yum install docker-ce docker-ce-cli containerd.io</span></span></code></pre></div><p>这个注意一下</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250331222140.png" alt="image.png"></p><p>修改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install -y docker-ce-25.0.5 docker-ce-cli-25.0.5 containerd.io</span></span></code></pre></div><p>启动docer并设置开机自启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl start docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl enable docker</span></span></code></pre></div><p>docker配置加速度</p><p>修改 /etc/docker/daemon.json 文件并添加上 registry-mirrors 键值；注册阿里云，可获取自己的加速器</p><p>容器镜像服务 → 容器加速器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;registry-mirrors&quot;: [&quot;https://registry.docker-cn.com&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>docker安装验证</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker --version</span></span></code></pre></div><p>重启 docker 容器操作:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl restart docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#一般可能还会需要操作</span></span>
<span class="line"><span>systemctl daemon-reload</span></span></code></pre></div><h4 id="yum-更新到最新版本" tabindex="-1">yum 更新到最新版本 <a class="header-anchor" href="#yum-更新到最新版本" aria-label="Permalink to &quot;yum 更新到最新版本&quot;">​</a></h4><p>上面可能执行第一个命令的时候就报错</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install -y yum-utils</span></span></code></pre></div><p>本机出现的问题是：<code>&quot;Could not resolve host: mirrorlist.centos.org; Unknown error&quot;</code></p><p>参考： <a href="https://bugstack.cn/md/road-map/docker.html" target="_blank" rel="noreferrer">https://bugstack.cn/md/road-map/docker.html</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum update</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果更新失败，按照下面的方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 建议备份当前的 yum 源配置，以防万一需要恢复</span></span>
<span class="line"><span>sudo cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 从阿里云下载 CentOS 7 的 yum 源配置文件并替换现有的配置（一个命令，不是分开的）</span></span>
<span class="line"><span>sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 清理旧的缓存并生成新的缓存</span></span>
<span class="line"><span>sudo yum clean all</span></span>
<span class="line"><span>sudo yum makecache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 再次更新</span></span>
<span class="line"><span>sudo yum update</span></span></code></pre></div><h4 id="卸载-docker" tabindex="-1">卸载 Docker <a class="header-anchor" href="#卸载-docker" aria-label="Permalink to &quot;卸载 Docker&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo yum remove docker \\</span></span>
<span class="line"><span>                  docker-client \\</span></span>
<span class="line"><span>                  docker-client-latest \\</span></span>
<span class="line"><span>                  docker-common \\</span></span>
<span class="line"><span>                  docker-latest \\</span></span>
<span class="line"><span>                  docker-latest-logrotate \\</span></span>
<span class="line"><span>                  docker-logrotate \\</span></span>
<span class="line"><span>                  docker-selinux \\</span></span>
<span class="line"><span>                  docker-engine-selinux \\</span></span>
<span class="line"><span>                  docker-engine</span></span></code></pre></div><h2 id="docker-配置镜像源" tabindex="-1">Docker 配置镜像源 <a class="header-anchor" href="#docker-配置镜像源" aria-label="Permalink to &quot;Docker 配置镜像源&quot;">​</a></h2><p>阿里云地址： <a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noreferrer">https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</a></p><p>配置文件 /etc/docker/daemon.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>touch /etc/docker/daemon.json</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://hub-mirror.c.163.com&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果要使用多个镜像源，可以在 <code>&quot;registry-mirrors&quot;</code> 数组中添加多个镜像源地址，以英文逗号分隔。</p><p>保存配置文件，重启 Docker 服务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl restart docker</span></span></code></pre></div><p>常见的镜像源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>网易云 Docker 镜像：https://hub-mirror.c.163.com</span></span>
<span class="line"><span>百度云 Docker 镜像：https://mirror.baidubce.com</span></span>
<span class="line"><span>阿里云 Docker 镜像（需要使用阿里账号自行创建专属镜像仓库）：https://cr.console.aliyun.com/</span></span>
<span class="line"><span>DaoCloud Docker 镜像（配置文档）：http://f1361db2.m.daocloud.io</span></span></code></pre></div><p>阿里云官网的配置内容 <a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noreferrer">https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://7iwp6tq0.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre></div><p>阿里云现在的加速好像限制了只能阿里云产品使用</p><p>如果是其他的云产品，尝试使用一下配置多个</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>		&quot;https://docker.mirrors.ustc.edu.cn/&quot;,</span></span>
<span class="line"><span>		&quot;https://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span>    &quot;https://docker-cf.registry.cyou&quot;,</span></span>
<span class="line"><span>    &quot;https://dockercf.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://dockertest.jsdelivr.fyi&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.aliyuncs.com&quot;,</span></span>
<span class="line"><span>    &quot;https://dockerproxy.com&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.baidubce.com&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.nju.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://mirror.iscas.ac.cn&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.rainbond.cc&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 加载配置</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启docker服务</span></span>
<span class="line"><span>systemctl restart docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看是否配置成功</span></span>
<span class="line"><span>$ docker info</span></span></code></pre></div><p>如果某个加速器无法访问，可能是由于网络问题。你可以尝试ping该地址，或者使用<code>curl</code>命令来检查网络连接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -f &lt;加速器地址&gt;</span></span></code></pre></div><p>更新了一版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>        &quot;https://mirror.iscas.ac.cn&quot;,</span></span>
<span class="line"><span>        &quot;https://dockerproxy.com&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.nju.edu.cn&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.rainbond.cc&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="常见报错解决" tabindex="-1">常见报错解决 <a class="header-anchor" href="#常见报错解决" aria-label="Permalink to &quot;常见报错解决&quot;">​</a></h2><blockquote><p>docker: Error response from daemon: Get &quot;<a href="https://registry-1.docker.io/v2/" target="_blank" rel="noreferrer">https://registry-1.docker.io/v2/</a>&quot;: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers).</p></blockquote><p>切换一下配置镜像源</p>`,48)])])}const k=a(t,[["render",o]]);export{h as __pageData,k as default};
