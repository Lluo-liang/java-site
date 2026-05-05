import{_ as n,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const g=JSON.parse('{"title":"工作电脑如何和GITHUB建立连接","description":"","frontmatter":{"title":"工作电脑如何和GITHUB建立连接","date":"2024-10-19 20:59:58","updated":"2024-10-19 20:59:58"},"headers":[],"relativePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/工作电脑如何和GITHUB建立连接.md","filePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/工作电脑如何和GITHUB建立连接.md","lastUpdated":null}'),l={name:"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git 配置 SSH 连接/工作电脑如何和GITHUB建立连接.md"};function i(t,s,c,o,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>上级</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>views:</span></span>
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
<span class="line"><span>        direction: ASC</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#临时修改一下用户名和邮箱</span></span>
<span class="line"><span>git config --global user.email &quot;lluo2020@163.com&quot;</span></span>
<span class="line"><span>git config --global user.name &quot;Lluo-liang&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看用户名 ：git config user.name</span></span>
<span class="line"><span>查看邮箱：git config user.email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#注意后面切换回去</span></span>
<span class="line"><span>git config --global user.email &quot;felixwu@sheinbpo.com&quot;</span></span>
<span class="line"><span>git config --global user.name &quot;felixwu&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#生成个人密钥</span></span>
<span class="line"><span>ssh-keygen -t rsa -f ~/.ssh/id_rsa_personal -C &quot;lluo2020@163.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#添加SSH配置</span></span>
<span class="line"><span>touch ~/.ssh/config nano ~/.ssh/config</span></span>
<span class="line"><span>文件内容</span></span>
<span class="line"><span>Host github.com</span></span>
<span class="line"><span>  HostName github.com</span></span>
<span class="line"><span>  User git</span></span>
<span class="line"><span>  IdentityFile ~/.ssh/id_rsa_personal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#将生成的SSH配置放入到  GITHUb  ADD SSH KEY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#测试连接</span></span>
<span class="line"><span>ssh -T git@github.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#可以了</span></span></code></pre></div>`,5)])])}const _=n(l,[["render",i]]);export{g as __pageData,_ as default};
