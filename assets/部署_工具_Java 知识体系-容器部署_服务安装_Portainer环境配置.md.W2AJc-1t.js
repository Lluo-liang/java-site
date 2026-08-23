import{_ as s,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Portainer环境配置","description":"","frontmatter":{"title":"Portainer环境配置","excerpt":"Portainer环境配置","date":"2024-01-21 16:39:15","updated":"2024-01-21 16:39:15"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/Portainer环境配置.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/Portainer环境配置.md","lastUpdated":null}'),t={name:"部署&工具/Java 知识体系-容器部署/服务安装/Portainer环境配置.md"};function i(l,a,r,o,c,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<p>Portainer 是一个轻量级的管理界面，可以让你轻松地管理不同的Docker环境。Portainer 可以运行作为一个容器，允许你管理容器、镜像、网络等。</p><h3 id="服务安装" tabindex="-1">服务安装 <a class="header-anchor" href="#服务安装" aria-label="Permalink to &quot;服务安装&quot;">​</a></h3><blockquote><p>拉取最新的 Portainer</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull portainer/portainer-ce:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定版本（建议）</span></span>
<span class="line"><span>docker pull portainer/portainer-ce:2.19.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#确认镜像已经存在</span></span>
<span class="line"><span>docker images | grep portainer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建数据卷</span></span>
<span class="line"><span>docker volume create portainer_data</span></span></code></pre></div><h3 id="安装和启动" tabindex="-1">安装和启动 <a class="header-anchor" href="#安装和启动" aria-label="Permalink to &quot;安装和启动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--name portainer \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>-p 9443:9443 \\</span></span>
<span class="line"><span>-v /var/run/docker.sock:/var/run/docker.sock \\</span></span>
<span class="line"><span>-v portainer_data:/data \\</span></span>
<span class="line"><span>portainer/portainer-ce:2.19.5</span></span></code></pre></div><p>参数说明：</p><ul><li><code>-d</code>：后台运行</li><li><code>--name portainer</code>：容器名称</li><li><code>--restart=always</code>：Docker 启动时自动拉起</li><li><code>-p 9443:9443</code>：HTTPS 访问端口</li><li><code>-v /var/run/docker.sock:/var/run/docker.sock</code>：连接本机 Docker</li><li><code>-v portainer_data:/data</code>：持久化 Portainer 数据</li><li><code>portainer/portainer-ce:2.19.5</code>：指定 Portainer 版本</li></ul><p>浏览器访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> https://服务器IP:9443</span></span>
<span class="line"><span> https://175.178.129.110:9443</span></span></code></pre></div><p>开放一下端口</p><p>⬇️ 下面实际是直接开通了一下云服务器的端口开放</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#开放端口</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=9000/tcp --permanent </span></span>
<span class="line"><span># 重启防火墙 </span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span># 查看开放的端口列表 </span></span>
<span class="line"><span>firewall-cmd --list-port</span></span></code></pre></div><h3 id="重新安装" tabindex="-1">重新安装 <a class="header-anchor" href="#重新安装" aria-label="Permalink to &quot;重新安装&quot;">​</a></h3><p>待更新；skip</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 停止并删除旧容器</span></span>
<span class="line"><span>docker stop portainer</span></span>
<span class="line"><span>docker rm portainer</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除数据卷（会丢失所有配置）</span></span>
<span class="line"><span>docker volume rm portainer_data</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新安装 Portainer</span></span>
<span class="line"><span>docker run -d -p 9443:9443 --name portainer \\</span></span>
<span class="line"><span>    --restart=always \\</span></span>
<span class="line"><span>    -v /var/run/docker.sock:/var/run/docker.sock \\</span></span>
<span class="line"><span>    -v portainer_data:/data \\</span></span>
<span class="line"><span>    portainer/portainer-ce:latest</span></span></code></pre></div><p>我这里最后还是使用↓ 进行运行的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer</span></span></code></pre></div>`,18)])])}const k=s(t,[["render",i]]);export{h as __pageData,k as default};
