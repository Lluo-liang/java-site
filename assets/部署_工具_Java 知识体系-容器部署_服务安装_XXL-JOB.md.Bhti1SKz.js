import{_ as s,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const x=JSON.parse('{"title":"XXL-JOB","description":"","frontmatter":{"title":"XXL-JOB","excerpt":"摘要","date":"2025-07-13 16:09:17","updated":"2025-07-13 16:09:17"},"headers":[],"relativePath":"部署&工具/Java 知识体系-容器部署/服务安装/XXL-JOB.md","filePath":"部署&工具/Java 知识体系-容器部署/服务安装/XXL-JOB.md","lastUpdated":null}'),t={name:"部署&工具/Java 知识体系-容器部署/服务安装/XXL-JOB.md"};function l(i,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<p>先决条件：需要 MySQL 数据库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 先安装 MySQL(如果已经安装可忽略)</span></span>
<span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name mysql-xxljob \\</span></span>
<span class="line"><span>  -p 3306:3306 \\</span></span>
<span class="line"><span>  -e MYSQL_ROOT_PASSWORD=root \\</span></span>
<span class="line"><span>  -e MYSQL_DATABASE=xxl_job \\</span></span>
<span class="line"><span>  mysql:8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 等待 MySQL 启动后初始化数据库（需下载SQL脚本）</span></span>
<span class="line"><span># 从 https://github.com/xuxueli/xxl-job 获取SQL文件</span></span></code></pre></div><h3 id="安装-xxl-job-admin" tabindex="-1">安装 XXL-JOB Admin <a class="header-anchor" href="#安装-xxl-job-admin" aria-label="Permalink to &quot;安装 XXL-JOB Admin&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 拉取官方镜像（社区版）</span></span>
<span class="line"><span>docker pull xuxueli/xxl-job-admin:2.4.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行容器</span></span>
<span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name xxl-job-admin \\</span></span>
<span class="line"><span>  -p 8080:8080 \\</span></span>
<span class="line"><span>  -e PARAMS=&quot;--spring.datasource.url=jdbc:mysql://mysql-xxljob:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai \\</span></span>
<span class="line"><span>  --spring.datasource.username=root \\</span></span>
<span class="line"><span>  --spring.datasource.password=root&quot; \\</span></span>
<span class="line"><span>  --link mysql-xxljob:mysql-xxljob \\</span></span>
<span class="line"><span>  xuxueli/xxl-job-admin:2.4.0</span></span></code></pre></div><p>访问服务</p><ul><li>Elasticsearch: <code>http://localhost:9200</code></li><li>XXL-JOB Admin: <code>http://localhost:8080/xxl-job-admin</code> (默认账号：admin/123456)</li></ul><p>示例的启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name xxl-job-admin \\</span></span>
<span class="line"><span>  -p 8080:8080 \\</span></span>
<span class="line"><span>  -e PARAMS=&quot;--spring.datasource.url=jdbc:mysql://192.168.31.196:3307/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai \\</span></span>
<span class="line"><span>  --spring.datasource.username=root \\</span></span>
<span class="line"><span>  --spring.datasource.password=lq123456&quot; \\</span></span>
<span class="line"><span>  --link mysql8:mysql8 \\</span></span>
<span class="line"><span>  xuxueli/xxl-job-admin:2.4.0</span></span></code></pre></div><p><strong>端口分工​</strong>​</p><table tabindex="0"><thead><tr><th>端口</th><th>组件</th><th>作用</th><th>是否必须暴露</th></tr></thead><tbody><tr><td>8080</td><td>​<strong>​Admin​</strong>​</td><td>管理后台（Web界面），用于任务配置和监控</td><td>是（需开放）</td></tr><tr><td>9999</td><td>​<strong>​Executor​</strong>​</td><td>执行器服务端，负责接收Admin下发的任务并执行，同时上报日志和心跳</td><td>视情况而定</td></tr></tbody></table><hr><h3 id="部署-xxl-job-executor-执行器-​" tabindex="-1">部署 XXL-JOB Executor（执行器）​ <a class="header-anchor" href="#部署-xxl-job-executor-执行器-​" aria-label="Permalink to &quot;部署 XXL-JOB Executor（执行器）​&quot;">​</a></h3>`,12)])])}const h=s(t,[["render",l]]);export{x as __pageData,h as default};
