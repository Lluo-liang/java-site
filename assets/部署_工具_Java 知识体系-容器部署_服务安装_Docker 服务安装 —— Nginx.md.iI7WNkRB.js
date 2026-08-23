import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Docker 服务安装 —— Nginx","description":"","frontmatter":{"title":"Docker 服务安装 —— Nginx","excerpt":"使用Docker安装Java基础服务","date":"2024-10-02 11:16:33","updated":"2024-10-02 11:16:33"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/Docker 服务安装 —— Nginx.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/Docker 服务安装 —— Nginx.md","lastUpdated":null}'),i={name:"部署&工具/Java 知识体系-容器部署/服务安装/Docker 服务安装 —— Nginx.md"};function l(c,n,t,o,g,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h3 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 Nginx&quot;">​</a></h3><p>参考: <a href="https://blog.csdn.net/BThinker/article/details/123507820" target="_blank" rel="noreferrer">https://blog.csdn.net/BThinker/article/details/123507820</a></p><p>下面是先运行最新版本的 Nginx ,然后将服务下的文件复制一份到挂载目录,然后删除容器,重启运行的一个操作。</p><p>后面的一些目录和配置查看就可以直接在目录 home/nginx/ 查看相关内容.</p><p>可以选择下载指定版本，或者最新版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull nginx</span></span></code></pre></div><p>创建Nginx配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建挂载目录</span></span>
<span class="line"><span>mkdir -p /home/nginx/conf</span></span>
<span class="line"><span>mkdir -p /home/nginx/log</span></span>
<span class="line"><span>mkdir -p /home/nginx/html</span></span></code></pre></div><p>启动前需要先创建Nginx外部挂载的配置文件（ /home/nginx/conf/nginx.conf）</p><p>之所以要先创建 , 是因为Nginx本身容器只存在/etc/nginx 目录 , 本身就不创建 nginx.conf 文件 当服务器和容器都不存在 nginx.conf 文件时, 执行启动命令的时候 docker会将nginx.conf 作为目录创建 , 这并不是我们想要的结果 。</p><blockquote><p>容器中的nginx.conf文件和conf.d文件夹复制到宿主机</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 生成容器</span></span>
<span class="line"><span>docker run --name nginx -p 9001:80 -d nginx</span></span>
<span class="line"><span># 将容器nginx.conf文件复制到宿主机</span></span>
<span class="line"><span>docker cp nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf</span></span>
<span class="line"><span># 将容器conf.d文件夹下内容复制到宿主机</span></span>
<span class="line"><span>docker cp nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d</span></span>
<span class="line"><span># 将容器中的html文件夹复制到宿主机</span></span>
<span class="line"><span>docker cp nginx:/usr/share/nginx/html /home/nginx/</span></span></code></pre></div><p>创建 Nginx 容器并运行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 直接执行docker rm nginx或者以容器id方式关闭容器</span></span>
<span class="line"><span># 找到nginx对应的容器id</span></span>
<span class="line"><span>docker ps -a</span></span>
<span class="line"><span># 关闭该容器</span></span>
<span class="line"><span>docker stop nginx</span></span>
<span class="line"><span># 删除该容器</span></span>
<span class="line"><span>docker rm nginx</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 删除正在运行的nginx容器</span></span>
<span class="line"><span>docker rm -f nginx</span></span></code></pre></div><p>启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run \\</span></span>
<span class="line"><span>-p 9002:80 \\</span></span>
<span class="line"><span>--name nginx \\</span></span>
<span class="line"><span>-v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\</span></span>
<span class="line"><span>-v /home/nginx/conf/conf.d:/etc/nginx/conf.d \\</span></span>
<span class="line"><span>-v /home/nginx/log:/var/log/nginx \\</span></span>
<span class="line"><span>-v /home/nginx/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span>-v /home/nginx/shareFile/:/usr/share/nginx/shareFile \\</span></span>
<span class="line"><span>-v /home/nginx/ssl:/etc/nginx/ssl \\</span></span>
<span class="line"><span>-d nginx:latest</span></span></code></pre></div><p>单行模式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -p 9002:80 --name nginx -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/conf/conf.d:/etc/nginx/conf.d -v /home/nginx/log:/var/log/nginx -v /home/nginx/html:/usr/share/nginx/html -d nginx:latest</span></span></code></pre></div><p>测试访问:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://IP:9002/</span></span></code></pre></div><p>重启容器操作:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 重启容器</span></span>
<span class="line"><span>docker restart nginx</span></span></code></pre></div>`,22)])])}const x=s(i,[["render",l]]);export{h as __pageData,x as default};
