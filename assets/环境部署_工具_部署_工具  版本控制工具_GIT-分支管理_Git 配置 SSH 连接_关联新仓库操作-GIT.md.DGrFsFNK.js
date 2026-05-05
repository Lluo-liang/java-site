import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const _=JSON.parse('{"title":"关联新仓库操作-GIT","description":"","frontmatter":{"title":"关联新仓库操作-GIT","excerpt":"摘要","date":"2025-06-28 16:30:38","updated":"2025-06-28 16:30:38"},"headers":[],"relativePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/关联新仓库操作-GIT.md","filePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/关联新仓库操作-GIT.md","lastUpdated":null}'),l={name:"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/关联新仓库操作-GIT.md"};function i(t,s,c,o,d,r){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>上级</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>views:</span></span>
<span class="line"><span>  - type: table</span></span>
<span class="line"><span>    name: 关联文件表</span></span>
<span class="line"><span>    filters:</span></span>
<span class="line"><span>      and:</span></span>
<span class="line"><span>        - layer_id == this.parent_id  </span></span>
<span class="line"><span>        - parent_id != null   </span></span>
<span class="line"><span>        - layer_id != null</span></span></code></pre></div><p>工作内容</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>views:</span></span>
<span class="line"><span>  - type: cards</span></span>
<span class="line"><span>    name: 视图</span></span>
<span class="line"><span>    cardSize: 200</span></span>
<span class="line"><span>    image: note.title</span></span>
<span class="line"><span>    filters:</span></span>
<span class="line"><span>      and:</span></span>
<span class="line"><span>        - parent_id == this.layer_id</span></span>
<span class="line"><span>        - parent_id != null</span></span>
<span class="line"><span>    order:</span></span>
<span class="line"><span>      - title</span></span>
<span class="line"><span>    sort:</span></span>
<span class="line"><span>      - property: priority</span></span>
<span class="line"><span>        direction: ASC</span></span>
<span class="line"><span>      - property: layer_id</span></span>
<span class="line"><span>        direction: ASC</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#克隆项目到本地</span></span>
<span class="line"><span>git clone https://gitcode.net/KnowledgePlanet/ai-rag-knowledge.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#解除与原仓库的关联​</span></span>
<span class="line"><span>cd 项目目录</span></span>
<span class="line"><span>git remote remove origin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新建项目（在 Gitee)</span></span>
<span class="line"><span>1. 登录 Gitee，点击右上角 ​新建项目。 项目名：ai-rag-knowledge</span></span>
<span class="line"><span>2. 填写项目名称、描述，​*不要初始化 README 或 .gitignore​（避免冲突）。</span></span>
<span class="line"><span>3. 创建完成后，记下你的仓库地址。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将本地仓库关联到你的新仓库​</span></span>
<span class="line"><span>git remote add origin &quot;https://gitee.com/lluo-liang/ai-rag-knowledge.git&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#推送代码</span></span>
<span class="line"><span>git push -u origin &quot;master&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果需要再同步拉取最新代码，可以看一下相关教程，这里的操作在分支 feature/luo-study 上进行</span></span></code></pre></div>`,5)])])}const u=n(l,[["render",i]]);export{_ as __pageData,u as default};
