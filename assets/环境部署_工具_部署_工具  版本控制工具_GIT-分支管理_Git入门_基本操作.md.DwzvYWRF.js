import{_ as n,o as a,c as p,am as i}from"./chunks/framework.CiF4W93w.js";const u=JSON.parse('{"title":"Git入门_基本操作","description":"","frontmatter":{"title":"Git入门_基本操作","excerpt":"git 的基本操作","date":"2023-11-13 12:01:56","updated":"2023-11-13 12:01:56"},"headers":[],"relativePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git入门_基本操作.md","filePath":"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git入门_基本操作.md","lastUpdated":null}'),e={name:"环境部署&工具/部署&工具  版本控制工具/GIT-分支管理/Git入门_基本操作.md"};function t(l,s,c,o,d,r){return a(),p("div",null,[...s[0]||(s[0]=[i(`<p>上级</p><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>views:</span></span>
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
<span class="line"><span>        direction: ASC</span></span></code></pre></div><p>基本的一些 Git 入门操作记录</p><h3 id="_1、将某个目录文件上传到-github-某个仓库" tabindex="-1">1、将某个目录文件上传到 Github 某个仓库 <a class="header-anchor" href="#_1、将某个目录文件上传到-github-某个仓库" aria-label="Permalink to &quot;1、将某个目录文件上传到 Github 某个仓库&quot;">​</a></h3><p>要将某个目录文件上传到Github某个仓库，可以按照以下步骤进行操作：</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 初始化仓库</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span># 提交到本地git仓库 将文件夹中的内容添加到git仓库</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span># 提交到本地git仓库,并添加一条提交信息</span></span>
<span class="line"><span>git commit -m &quot;Initial commit&quot;</span></span>
<span class="line"><span>#在命令行中执行以下命令，将本地git仓库与Github上的仓库进行关联</span></span>
<span class="line"><span>git remote add origin &lt;Github仓库URL&gt;</span></span>
<span class="line"><span># 进行推送</span></span>
<span class="line"><span>git push -u origin master</span></span>
<span class="line"><span># 如果目标仓库和本地目录文件冲突，可以先拉去最新仓库代码再进行推送</span></span>
<span class="line"><span>git pull origin master</span></span>
<span class="line"><span># 或者直接强制推送（会直接覆盖远程仓库内容），需要注意的是，强制推送可能会覆盖其他人提交的代码，因此需要谨慎使用。</span></span>
<span class="line"><span>git push --force origin master</span></span></code></pre></div><p>‍</p><blockquote><p>Git的工作流程核心</p></blockquote><ul><li>0、<strong>准备仓库</strong>：创建或从服务端克隆一个仓库。</li><li>1、<strong>搬砖</strong>：在工作目录中添加、修改代码。</li><li>2、<strong>暂存</strong>（git add）：将需要进行版本管理的文件放入暂存区域。</li><li>3、<strong>提交</strong>（git commit）：将暂存区域的文件提交到Git仓库。</li><li>4、<strong>推送</strong>（git push）：将本地仓库推送到远程仓库，同步版本库。</li><li>5、<strong>获取更新</strong>（fetch/pull）：从服务端更新到本地，获取他人推送的更新，与他人协作、共享。</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311250040140.png" alt="image.png"></p><ul><li><code>git commit -a</code>指令省略了<code>add</code>到暂存区的步骤，直接提交工作区的修改内容到版本库，不包括新增的文件。</li><li><code>git fetch</code>、<code>git pull</code> 都是从远程服务端获取最新记录，区别是<code>git pull</code>多了一个步骤，就是自动合并更新工作区。</li><li><code>git checkout .</code>、<code>git checkout [file]</code> 会清除工作区中未添加到暂存区的修改，用暂存区内容替换工作区。</li><li><code>git checkout HEAD .</code>、 <code>git checkout HEAD [file]</code> 会清除工作区、暂存区的修改，用HEAD指向的当前分支最新版本替换暂存区、工作区。</li><li><code>git diff</code> 用来对比不同部分之间的区别，如暂存区、工作区，最新版本与未提交内容，不同版本之间等。</li><li><code>git reset</code>是专门用来撤销修改、回退版本的指令，替代上面<code>checkout</code>的撤销功能。</li></ul><hr><p>参考</p><ul><li><a href="https://www.cnblogs.com/anding/p/16987769.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/anding/p/16987769.html</a></li><li><a href="https://git-scm.com/book/zh/v2/" target="_blank" rel="noreferrer">https://git-scm.com/book/zh/v2/</a></li></ul>`,16)])])}const h=n(e,[["render",t]]);export{u as __pageData,h as default};
