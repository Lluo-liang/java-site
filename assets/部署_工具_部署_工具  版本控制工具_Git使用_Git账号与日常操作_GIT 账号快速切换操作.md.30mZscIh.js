import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"GIT 账号快速切换操作","description":"","frontmatter":{"title":"GIT 账号快速切换操作","excerpt":"摘要","date":"2025-06-24 10:10:04","updated":"2026-05-08 00:00:00"},"headers":[],"relativePath":"部署&工具/部署&工具  版本控制工具/Git使用/Git账号与日常操作/GIT 账号快速切换操作.md","filePath":"部署&工具/部署&工具  版本控制工具/Git使用/Git账号与日常操作/GIT 账号快速切换操作.md","lastUpdated":null}'),t={name:"部署&工具/部署&工具  版本控制工具/Git使用/Git账号与日常操作/GIT 账号快速切换操作.md"};function i(l,s,o,c,u,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="辅助脚本-快速切换" tabindex="-1">辅助脚本（快速切换） <a class="header-anchor" href="#辅助脚本-快速切换" aria-label="Permalink to &quot;辅助脚本（快速切换）&quot;">​</a></h3><p>这个脚本建议只在单个项目中使用</p><p>保存以下脚本为 <code>git-switch-account.sh</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;work&quot; ]; then</span></span>
<span class="line"><span>  git config user.name &quot;felixwu&quot;</span></span>
<span class="line"><span>  git config user.email &quot;felixwu@sheinbpo.com&quot;</span></span>
<span class="line"><span>  echo &quot;Switched to WORK account&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>  git config user.name &quot;Lluo&quot;</span></span>
<span class="line"><span>  git config user.email &quot;lluo2020@163.com&quot;</span></span>
<span class="line"><span>  echo &quot;Switched to PERSONAL account&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>更新一下内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash  </span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;work&quot; ]; then  </span></span>
<span class="line"><span>  git config user.name &quot;felixwu&quot;  </span></span>
<span class="line"><span>  git config user.email &quot;felixwu@sheinbpo.com&quot;  </span></span>
<span class="line"><span>  echo &quot;Switched to WORK account&quot;  </span></span>
<span class="line"><span>elif [ &quot;$1&quot; = &quot;gitee&quot; ]; then  </span></span>
<span class="line"><span>  git config user.name &quot;Lluo&quot;  </span></span>
<span class="line"><span>  git config user.email &quot;lluo2020@163.com&quot;  </span></span>
<span class="line"><span>  echo &quot;Switched to GITEE account&quot;  </span></span>
<span class="line"><span>else  </span></span>
<span class="line"><span>  git config user.name &quot;Lluo&quot;  </span></span>
<span class="line"><span>  git config user.email &quot;lluo2020@163.com&quot;  </span></span>
<span class="line"><span>  echo &quot;Switched to PERSONAL account&quot;  </span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>使用方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd gitSwitch</span></span>
<span class="line"><span># 切换到工作账号</span></span>
<span class="line"><span>./git-switch-account.sh work</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换到个人账号</span></span>
<span class="line"><span>./git-switch-account.sh</span></span></code></pre></div><p>如果权限问题，加一下执行权限</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chmod +x ./git-switch-account.sh</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查看用户名 ：git config user.name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看密码： git config user.password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看邮箱：git config user.email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看配置信息： $ git config --list</span></span></code></pre></div><h3 id="基础内容回顾" tabindex="-1">基础内容回顾 <a class="header-anchor" href="#基础内容回顾" aria-label="Permalink to &quot;基础内容回顾&quot;">​</a></h3><p>其实你可以看到 git 的提交方式一般是有 HTTPS 和 SSH 方式，然后工作提交一般是使用 SSH + 蜜钥的方式，其中也要求账号是对应的</p><p>这里个人账号提交使用 HTTPS 的方式</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250124083335.png" alt="image.png"></p><p>使用 HTTPS 后，IDEA第一次 PUSH 的时候需要进行输入账号和密码。</p><p>账号密码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>账号：lluo2020@163.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>授权码：见密码管理器</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250124084344.png" alt="image.png"></p><p>关于仓库的 git 管理</p><p>仓库级配置 (local) &gt; 用户级配置 (global)</p><p>默认的单个仓库下修改，而不是全局</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global user.name</span></span>
<span class="line"><span>git config --local user.name</span></span></code></pre></div>`,23)])])}const r=a(t,[["render",i]]);export{h as __pageData,r as default};
