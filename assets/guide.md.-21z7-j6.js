import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const q=JSON.parse('{"title":"Java知识体系总览","description":"","frontmatter":{"title":"Java知识体系总览","excerpt":"和学习库的目录尽量保持一致。","date":"2025-06-19 23:30:49","updated":"2025-06-19 23:30:49"},"headers":[],"relativePath":"guide.md","filePath":"guide.md","lastUpdated":null}'),l={name:"guide.md"};function t(i,n,o,c,r,u){return a(),p("div",null,[...n[0]||(n[0]=[e(`<div class="language-dataviewjs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dataviewjs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// === 配置区 ===</span></span>
<span class="line"><span>const coverField = &quot;banner_img&quot;; // 封面图属性名</span></span>
<span class="line"><span>const cardWidth = &quot;220px&quot;;       // 卡片宽度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 获取当前页面的出链</span></span>
<span class="line"><span>const outlinks = dv.current().file.outlinks;</span></span>
<span class="line"><span>const currentFile = app.vault.getAbstractFileByPath(dv.current().file.path);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (currentFile &amp;&amp; outlinks.length &gt; 0) {</span></span>
<span class="line"><span>  const fileContent = await app.vault.read(currentFile);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 2. 排序：按链接在正文中的出现位置</span></span>
<span class="line"><span>  // 不能拿 link.display 去找：[别名]() 的 display 是&quot;别名&quot;，正文里根本没有「[[别名」，</span></span>
<span class="line"><span>  // indexOf 会返回 -1，这张卡就被过滤掉了。这里改成用&quot;链接目标&quot;匹配，</span></span>
<span class="line"><span>  // 并要求后面紧跟 | # ^ ] 之一，避免 [笔记]() 误命中 [笔记2]()。</span></span>
<span class="line"><span>  const escapeRe = (s) =&gt; s.replace(/[.*+?^\${}()|[\\]\\\\]/g, &quot;\\\\$&amp;&quot;);</span></span>
<span class="line"><span>  const linkPosition = (content, link) =&gt; {</span></span>
<span class="line"><span>    const base = link.path.split(&quot;/&quot;).pop().replace(/\\.md$/, &quot;&quot;);</span></span>
<span class="line"><span>    const targets = [link.path, link.path.replace(/\\.md$/, &quot;&quot;), base].filter(Boolean);</span></span>
<span class="line"><span>    let pos = -1;</span></span>
<span class="line"><span>    for (const t of new Set(targets)) {</span></span>
<span class="line"><span>      const re = new RegExp(\`\\\\[\\\\[\\\\s*\${escapeRe(t)}\\\\s*(?=[|#^\\\\]])\`);</span></span>
<span class="line"><span>      const m = re.exec(content);</span></span>
<span class="line"><span>      if (m &amp;&amp; (pos === -1 || m.index &lt; pos)) pos = m.index;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return pos;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const selfPath = dv.current().file.path;</span></span>
<span class="line"><span>  const seenPaths = new Set();</span></span>
<span class="line"><span>  const sortedLinks = [];</span></span>
<span class="line"><span>  for (const link of outlinks) {</span></span>
<span class="line"><span>    // 先解析成真实文件路径：[名称]()、[路径/名称]()、[别名]()、[名称#标题]() 都会落到同一篇</span></span>
<span class="line"><span>    const dest = app.metadataCache.getFirstLinkpathDest(link.path, selfPath);</span></span>
<span class="line"><span>    const path = dest ? dest.path : link.path;</span></span>
<span class="line"><span>    if (!path || path === selfPath) continue; // 跳过 [#本页小标题]() 这类自链接</span></span>
<span class="line"><span>    if (seenPaths.has(path)) continue;        // 同一篇被链接多次，只出一张卡</span></span>
<span class="line"><span>    seenPaths.add(path);</span></span>
<span class="line"><span>    sortedLinks.push({ link, path, index: linkPosition(fileContent, link) });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 找不到出现位置的排到最后：宁可多显示一张，也别让它莫名消失</span></span>
<span class="line"><span>  sortedLinks.sort((a, b) =&gt; {</span></span>
<span class="line"><span>    const x = a.index === -1 ? Number.MAX_SAFE_INTEGER : a.index;</span></span>
<span class="line"><span>    const y = b.index === -1 ? Number.MAX_SAFE_INTEGER : b.index;</span></span>
<span class="line"><span>    return x - y;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 3. 创建网格容器</span></span>
<span class="line"><span>  // 【关键】不能写 dv.el(&quot;div&quot;, &quot;&quot;)：空字符串会走 Dataview 的 renderValue，</span></span>
<span class="line"><span>  // 在容器里塞一个没有内容的 &lt;span&gt;。它也是网格项，会独占第一行第一列，</span></span>
<span class="line"><span>  // 于是整排卡片右移一格、最后一张掉到第二行，左上角留出一块空白。</span></span>
<span class="line"><span>  const container = dv.el(&quot;div&quot;);</span></span>
<span class="line"><span>  container.empty(); // 双保险：清掉任何非卡片子节点</span></span>
<span class="line"><span>  container.style.display = &quot;grid&quot;;</span></span>
<span class="line"><span>  container.style.gridTemplateColumns = \`repeat(auto-fill, minmax(\${cardWidth}, 1fr))\`;</span></span>
<span class="line"><span>  container.style.gap = &quot;16px&quot;;</span></span>
<span class="line"><span>  container.style.marginLeft = &quot;0&quot;;</span></span>
<span class="line"><span>  container.style.paddingLeft = &quot;0&quot;;</span></span>
<span class="line"><span>  container.style.width = &quot;100%&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 4. 遍历生成卡片</span></span>
<span class="line"><span>  for (const { link, path } of sortedLinks) {</span></span>
<span class="line"><span>    const page = dv.page(path);</span></span>
<span class="line"><span>    if (!page) continue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 处理封面图</span></span>
<span class="line"><span>    const cover = page[coverField];</span></span>
<span class="line"><span>    let imgSrc = &quot;&quot;;</span></span>
<span class="line"><span>    if (cover) {</span></span>
<span class="line"><span>      if (cover.startsWith(&quot;[[&quot;)) {</span></span>
<span class="line"><span>        const imgName = cover.replace(/\\[\\[|\\]\\]/g, &#39;&#39;);</span></span>
<span class="line"><span>        const imgFile = app.metadataCache.getFirstLinkpathDest(imgName, page.file.path);</span></span>
<span class="line"><span>        if (imgFile) imgSrc = app.vault.getResourcePath(imgFile);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        imgSrc = cover;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建卡片外壳</span></span>
<span class="line"><span>    const card = container.createEl(&quot;a&quot;, { href: page.file.path, cls: &quot;internal-link&quot; });</span></span>
<span class="line"><span>    card.style.textDecoration = &quot;none&quot;;</span></span>
<span class="line"><span>    card.style.color = &quot;inherit&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    const cardInner = card.createEl(&quot;div&quot;);</span></span>
<span class="line"><span>    cardInner.style.background = &quot;var(--background-secondary)&quot;;</span></span>
<span class="line"><span>    cardInner.style.borderRadius = &quot;8px&quot;;</span></span>
<span class="line"><span>    cardInner.style.overflow = &quot;hidden&quot;;</span></span>
<span class="line"><span>    cardInner.style.boxShadow = &quot;0 2px 4px rgba(0,0,0,0.1)&quot;;</span></span>
<span class="line"><span>    cardInner.style.transition = &quot;transform 0.2s&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 封面图区域</span></span>
<span class="line"><span>    if (imgSrc) {</span></span>
<span class="line"><span>      const img = cardInner.createEl(&quot;img&quot;);</span></span>
<span class="line"><span>      img.src = imgSrc;</span></span>
<span class="line"><span>      img.style.width = &quot;100%&quot;;</span></span>
<span class="line"><span>      img.style.height = &quot;140px&quot;;</span></span>
<span class="line"><span>      img.style.objectFit = &quot;cover&quot;;</span></span>
<span class="line"><span>      img.style.display = &quot;block&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      const noCover = cardInner.createEl(&quot;div&quot;);</span></span>
<span class="line"><span>      noCover.style.height = &quot;140px&quot;;</span></span>
<span class="line"><span>      noCover.style.display = &quot;flex&quot;;</span></span>
<span class="line"><span>      noCover.style.alignItems = &quot;center&quot;;</span></span>
<span class="line"><span>      noCover.style.justifyContent = &quot;center&quot;;</span></span>
<span class="line"><span>      noCover.style.background = &quot;var(--background-modifier-border)&quot;;</span></span>
<span class="line"><span>      noCover.style.color = &quot;var(--text-muted)&quot;;</span></span>
<span class="line"><span>      noCover.textContent = &quot;无封面&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 文字信息区域</span></span>
<span class="line"><span>    const textDiv = cardInner.createEl(&quot;div&quot;);</span></span>
<span class="line"><span>    textDiv.style.padding = &quot;12px&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 标题：优先用链接里写的别名（[别名]()），没写别名就用文件名。</span></span>
<span class="line"><span>    // link.display 只有 [别名]() 这种写法才有值，[文件]() 时是 undefined。</span></span>
<span class="line"><span>    const linkAlias = (link.display || &quot;&quot;).trim();</span></span>
<span class="line"><span>    const titleDiv = textDiv.createEl(&quot;div&quot;);</span></span>
<span class="line"><span>    titleDiv.textContent = linkAlias || page.file.name;</span></span>
<span class="line"><span>    titleDiv.title = page.file.name; // 悬停显示真实文件名，别名太抽象也能对回去</span></span>
<span class="line"><span>    titleDiv.style.fontWeight = &quot;bold&quot;;</span></span>
<span class="line"><span>    titleDiv.style.marginBottom = &quot;4px&quot;;</span></span>
<span class="line"><span>    titleDiv.style.whiteSpace = &quot;nowrap&quot;;</span></span>
<span class="line"><span>    titleDiv.style.overflow = &quot;hidden&quot;;</span></span>
<span class="line"><span>    titleDiv.style.textOverflow = &quot;ellipsis&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    const folderDiv = textDiv.createEl(&quot;div&quot;);</span></span>
<span class="line"><span>    // 优化显示：只显示最后一级文件夹，避免太长</span></span>
<span class="line"><span>    const folderName = page.file.folder;</span></span>
<span class="line"><span>    folderDiv.textContent = folderName ? folderName.split(&#39;/&#39;).pop() : &quot;根目录&quot;;</span></span>
<span class="line"><span>    folderDiv.style.fontSize = &quot;12px&quot;;</span></span>
<span class="line"><span>    folderDiv.style.color = &quot;var(--text-muted)&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>} else if (outlinks.length === 0) {</span></span>
<span class="line"><span>  dv.paragraph(&quot;当前笔记没有出链&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>后面可能是大幅度改动相关内容，暂时先不动了，之前的问题是维护难度很大，层级关系写的挺好的，但是自己自己后面难以梳理，而且很多东西，的确是有概念就行，还是需要实操和理解，编程能力和细节等。</p><hr><p>什么阶段做什么事情。</p><ul><li><a href="/java-site/面试准备/">Java面试准备</a></li></ul><hr><ul><li><p><a href="/java-site/基础/">Java体系 - 基础</a></p></li><li><p><a href="/java-site/框架/">Java体系 - 框架</a></p></li><li><p><a href="/java-site/数据库/">Java体系 - 数据库</a></p></li><li><p><a href="/java-site/中间件/">Java体系 - 中间件</a></p></li><li><p><a href="/java-site/部署%26工具/">Java体系 - 部署&amp;工具</a></p></li><li><p><a href="/java-site/架构篇/">Java体系 - 架构</a></p></li><li><p><a href="./.html">Java体系 - 底层能力</a></p></li><li><p><a href="/java-site/项目落地/">Java体系 - 项目落地</a></p></li><li><p><a href="./.html">轻松的落亓-开发 开源项目维护</a> 内容迁移到 5.2 开发总文件夹下</p></li></ul>`,7)])])}const v=s(l,[["render",t]]);export{q as __pageData,v as default};
