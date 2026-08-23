import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"SpringBoot集成DS调用MCP实现-项目部署","description":"","frontmatter":{"title":"SpringBoot集成DS调用MCP实现-项目部署","excerpt":"摘要","date":"2025-06-27 08:51:12","updated":"2025-06-27 08:51:12"},"headers":[],"relativePath":"框架/Spring家族/框架 SpringBoot/SpringBoot集成DS调用MCP实现-项目部署.md","filePath":"框架/Spring家族/框架 SpringBoot/SpringBoot集成DS调用MCP实现-项目部署.md","lastUpdated":null}'),i={name:"框架/Spring家族/框架 SpringBoot/SpringBoot集成DS调用MCP实现-项目部署.md"};function l(t,s,c,o,r,h){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h2 id="本地部署" tabindex="-1">本地部署 <a class="header-anchor" href="#本地部署" aria-label="Permalink to &quot;本地部署&quot;">​</a></h2><p>待后续跟进一下</p><h2 id="服务器部署" tabindex="-1">服务器部署 <a class="header-anchor" href="#服务器部署" aria-label="Permalink to &quot;服务器部署&quot;">​</a></h2><h3 id="后端部署" tabindex="-1">后端部署 <a class="header-anchor" href="#后端部署" aria-label="Permalink to &quot;后端部署&quot;">​</a></h3><ul><li>打包 jar 包并复制到 docker/app/ 对应目录中</li><li>start.sh 脚本按顺序先启动 <strong>mcp-server</strong> 再启动 <strong>mcp-client-ws</strong><ul><li>相关配置先修改好</li><li>打包完成后，将这个文件夹复制到服务器</li></ul></li></ul><p>启动命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mcp-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mcp-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#记得加一下执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start.sh</span></span></code></pre></div><p>Fork 后自己的项目仓库地址： <a href="https://gitee.com/lluo-liang/spring-mcp-server" target="_blank" rel="noreferrer">https://gitee.com/lluo-liang/spring-mcp-server</a></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_cd0af211-1fc9-4ecf-ab4c-2beb453d185f.png" alt="企业微信截图_cd0af211-1fc9-4ecf-ab4c-2beb453d185f.png"></p><p>测试访问</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div><p>遇到问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exec /app/start.sh: no such file or directory</span></span></code></pre></div><p>DockerFile 文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM eclipse-temurin:17-jre-alpine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span>RUN echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MAINTAINER WuFengSheng</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENTRYPOINT [&quot;/app/start.sh&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># sse</span></span>
<span class="line"><span>EXPOSE 9800</span></span>
<span class="line"><span># http</span></span>
<span class="line"><span>EXPOSE 9801</span></span>
<span class="line"><span># ws</span></span>
<span class="line"><span>EXPOSE 9802</span></span></code></pre></div><p>修改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM eclipse-temurin:17-jre-alpine</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置工作目录（关键修复）</span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制整个app目录内容到镜像工作目录</span></span>
<span class="line"><span>COPY ./app .</span></span>
<span class="line"><span>RUN ls -l   # 列出当前目录（/app）下的文件，确保start.sh存在</span></span>
<span class="line"><span>RUN ls -l start.sh   # 检查start.sh是否存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置时区</span></span>
<span class="line"><span>RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime &amp;&amp; \\</span></span>
<span class="line"><span>    echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 赋予执行权限（关键步骤）</span></span>
<span class="line"><span>RUN chmod +x start.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 入口点改用相对路径（因设置了WORKDIR）</span></span>
<span class="line"><span>ENTRYPOINT [&quot;./start.sh&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 9800 9801 9802</span></span></code></pre></div><p>构建时查看输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker build --no-cache . 2&gt;&amp;1 | grep &quot;start.sh&quot;</span></span></code></pre></div><p>如果输出不显示 <code>start.sh</code>，说明文件未复制成功</p><p>排查到可能是文件格式的问题</p><p><strong>Shell脚本格式问题</strong></p><p>👉 的确是文件格式问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 进入项目目录</span></span>
<span class="line"><span>cd /my-project/spring-mcp-server/backend/docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装dos2unix转换工具</span></span>
<span class="line"><span>yum install dos2unix -y  # CentOS/RHEL</span></span>
<span class="line"><span># 或 apt-get install dos2unix -y  # Ubuntu/Debian</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 转换脚本格式（移除CR字符）</span></span>
<span class="line"><span>dos2unix app/start.sh</span></span></code></pre></div><p>验证文件状态</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 确认文件属性（应有x权限）</span></span>
<span class="line"><span>ls -l app/start.sh</span></span>
<span class="line"><span># 应有类似：-rwxr-xr-x 1 root root 771 Jun 23 22:52 start.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 检查文件头部（确认无CR字符）</span></span>
<span class="line"><span>head -n1 app/start.sh | cat -A</span></span>
<span class="line"><span># 正确应显示：#!/bin/sh$ （结尾只有$无^M）</span></span></code></pre></div><h4 id="部署验证" tabindex="-1">部署验证 <a class="header-anchor" href="#部署验证" aria-label="Permalink to &quot;部署验证&quot;">​</a></h4><p>先看一下 MCP 服务有没有正常启动</p><p>看起来是有问题的，应该还是很基础的问题，暂时没啥思路，等下看看</p><hr><h3 id="前端部署" tabindex="-1">前端部署 <a class="header-anchor" href="#前端部署" aria-label="Permalink to &quot;前端部署&quot;">​</a></h3><ul><li>Nginx 配置 ws:// 或 wss://</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /mcp/ {</span></span>
<span class="line"><span>    proxy_pass http://192.168.0.160:9802/mcp/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>聊天窗口通过 ws:// 连接 mcp-client-ws 服务</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd vue2-chat-window</span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span>npm run serve</span></span></code></pre></div>`,35)])])}const u=a(i,[["render",l]]);export{g as __pageData,u as default};
