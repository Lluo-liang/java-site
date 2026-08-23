import{_ as s,o as n,c as e,am as p}from"./chunks/framework._FJXuPhs.js";const b=JSON.parse('{"title":"Mac 系统安装 Docker 操作","description":"","frontmatter":{"title":"Mac 系统安装 Docker 操作","excerpt":"摘要","date":"2025-12-15 22:36:17","updated":"2025-12-15 22:36:17"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Mac 系统安装 Docker 操作.md","filePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Mac 系统安装 Docker 操作.md","lastUpdated":null}'),c={name:"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Mac 系统安装 Docker 操作.md"};function t(o,a,l,i,r,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<ul><li>1、使用 Docker Desktop</li><li>2、其他</li></ul><h3 id="orbstack" tabindex="-1">OrbStack <a class="header-anchor" href="#orbstack" aria-label="Permalink to &quot;OrbStack&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1. 下载安装</span></span>
<span class="line"><span>brew install orbstack</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 或从官网下载：https://orbstack.dev</span></span>
<span class="line"><span># 下载后拖到 Applications 文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 启动 OrbStack</span></span>
<span class="line"><span>open -a OrbStack</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 配置 Docker CLI 使用 OrbStack</span></span>
<span class="line"><span># OrbStack 会自动配置，无需额外设置</span></span>
<span class="line"><span>docker ps</span></span></code></pre></div><p>这里实际使用的使用是从官网，进行手动下载后安装的</p><p>然后看终端 docker 就可以进行使用了。</p><blockquote><p>关于 docker compose</p></blockquote><p>OrbStack <strong>已内置</strong>最新版 Docker Compose，无需单独安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 直接使用即可</span></span>
<span class="line"><span>docker compose version</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者用完整命令</span></span>
<span class="line"><span>docker-compose version</span></span></code></pre></div><h4 id="镜像配置" tabindex="-1">镜像配置 <a class="header-anchor" href="#镜像配置" aria-label="Permalink to &quot;镜像配置&quot;">​</a></h4><p>直接在客户端 Setting ➡️ Docker ➡️ 镜像这里配置</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20251215231123.png" alt="image.png"></p>`,11)])])}const h=s(c,[["render",t]]);export{b as __pageData,h as default};
