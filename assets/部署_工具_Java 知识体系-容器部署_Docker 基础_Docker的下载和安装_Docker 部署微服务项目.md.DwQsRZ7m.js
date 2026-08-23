import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const d=JSON.parse('{"title":"Docker 部署微服务项目","description":"","frontmatter":{"title":"Docker 部署微服务项目","excerpt":"摘要","date":"2025-12-15 22:35:26","updated":"2025-12-15 22:35:26"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Docker 部署微服务项目.md","filePath":"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Docker 部署微服务项目.md","lastUpdated":null}'),l={name:"部署&工具/Java 知识体系-容器部署/Docker 基础/Docker的下载和安装/Docker 部署微服务项目.md"};function t(c,s,i,o,r,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>主要讲述部署后端服务</p><ul><li>1、讲项目进行 maven 打包为 Jar 包</li><li>2、编写 Dockerfile 用于构建镜像</li><li>3、将 jar 包 以及 Dockerfile 上传到 服务器，尽量统一放到一个文件夹中，管理方便。每一个文件夹对应一个服务的 jar包以及 Dockerfile</li><li>4、构建Docker镜像，运行Docker容器</li></ul><p>需要单独去实际跑一下这个项目，</p><p>service_cms</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 基础镜像</span></span>
<span class="line"><span>FROM openjdk:8</span></span>
<span class="line"><span># 环境变量</span></span>
<span class="line"><span>ENV APP_HOME=/apps</span></span>
<span class="line"><span># 创建容器默认进入的目录</span></span>
<span class="line"><span>WORKDIR $APP_HOME</span></span>
<span class="line"><span># 复制jar包到容器中</span></span>
<span class="line"><span>COPY ./service_cms-0.0.1-SNAPSHOT.jar ./service_cms.jar</span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 8004</span></span>
<span class="line"><span># 启动命令(启动Spring Boot应用)</span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;-Xms100m&quot;,&quot;-Xmx100m&quot;]</span></span>
<span class="line"><span>CMD [&quot;service_cms.jar&quot;]</span></span></code></pre></div><p>service_edu</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM openjdk:8</span></span>
<span class="line"><span>ENV APP_HOME=/apps</span></span>
<span class="line"><span>WORKDIR $APP_HOME</span></span>
<span class="line"><span>COPY ./service_edu-0.0.1-SNAPSHOT.jar ./service_edu.jar</span></span>
<span class="line"><span>EXPOSE 8001</span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;-Xms100m&quot;,&quot;-Xmx100m&quot;]</span></span>
<span class="line"><span>CMD [&quot;service_edu.jar&quot;]</span></span></code></pre></div><hr>`,8)])])}const k=a(l,[["render",t]]);export{d as __pageData,k as default};
