import{_ as s,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"Nacos-下载运行-mac","description":"","frontmatter":{"title":"Nacos-下载运行-mac","excerpt":"摘要","date":"2026-02-26 23:57:59","updated":"2026-02-26 23:57:59"},"headers":[],"relativePath":"框架/微服务&分布式/框架 SpringCloud/Nacos-下载运行-mac.md","filePath":"框架/微服务&分布式/框架 SpringCloud/Nacos-下载运行-mac.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/框架 SpringCloud/Nacos-下载运行-mac.md"};function t(c,a,o,i,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<p>跑到了一半，放弃了，下载太慢了，要么你直接使用 window 的服务，要么你直接购买服务器（我这里使用后者）</p><h3 id="镜像拉取" tabindex="-1">镜像拉取 <a class="header-anchor" href="#镜像拉取" aria-label="Permalink to &quot;镜像拉取&quot;">​</a></h3><p>拉取镜像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull nacos/nacos-server:v2.2.3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#实际这里运行的时候有 arm64 兼容问题，显示没有对应的架构版本，改为了：拉取最新</span></span>
<span class="line"><span>docker pull docker.m.daocloud.io/nacos/nacos-server:latest</span></span></code></pre></div><p>启动单机版本 nacos</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--name nacos-standalone \\</span></span>
<span class="line"><span>-p 8848:8848 \\</span></span>
<span class="line"><span>-p 9848:9848 \\</span></span>
<span class="line"><span>-e MODE=standalone \\</span></span>
<span class="line"><span>-e JVM_XMS=256m \\</span></span>
<span class="line"><span>-e JVM_XMX=256m \\</span></span>
<span class="line"><span>-e JVM_XMN=128m \\</span></span>
<span class="line"><span>nacos/nacos-server:v2.2.3</span></span></code></pre></div><p>验证是否启动成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker ps</span></span></code></pre></div><p>浏览器访问： <a href="http://localhost:8848/nacos" target="_blank" rel="noreferrer">http://localhost:8848/nacos</a></p><p><strong>默认账号密码：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username: nacos</span></span>
<span class="line"><span>password: nacos</span></span></code></pre></div><h3 id="挂载配置和数据目录" tabindex="-1">挂载配置和数据目录 <a class="header-anchor" href="#挂载配置和数据目录" aria-label="Permalink to &quot;挂载配置和数据目录&quot;">​</a></h3><p>建议方式</p><p>创建本地目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p ~/nacos/{logs,data,conf}</span></span></code></pre></div><p>挂载启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--name nacos-standalone \\</span></span>
<span class="line"><span>-p 8848:8848 \\</span></span>
<span class="line"><span>-p 9848:9848 \\</span></span>
<span class="line"><span>-e MODE=standalone \\</span></span>
<span class="line"><span>-e JVM_XMS=256m \\</span></span>
<span class="line"><span>-e JVM_XMX=256m \\</span></span>
<span class="line"><span>-e JVM_XMN=128m \\</span></span>
<span class="line"><span>-v ~/nacos/logs:/home/nacos/logs \\</span></span>
<span class="line"><span>-v ~/nacos/data:/home/nacos/data \\</span></span>
<span class="line"><span>-v ~/nacos/conf:/home/nacos/conf \\</span></span>
<span class="line"><span>nacos/nacos-server:v2.2.3</span></span></code></pre></div><p>单机模式下：</p><ul><li>默认使用 <strong>Derby 内嵌数据库</strong></li><li>✅ 适合开发、测试</li><li>❌ 不适合生产</li></ul><p>如果后续你需要：</p><ul><li>配置持久化</li><li>多实例</li></ul><p>👉 必须换成 <strong>MySQL</strong></p>`,22)])])}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
