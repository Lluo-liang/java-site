import{_ as s,o as a,c as p,am as l}from"./chunks/framework._FJXuPhs.js";const q=JSON.parse('{"title":"架构篇","description":"","frontmatter":{"title":"架构篇","excerpt":"摘要","date":"2026-04-23 15:44:25","updated":"2026-04-23 15:44:25"},"headers":[],"relativePath":"架构篇/index.md","filePath":"架构篇/index.md","lastUpdated":null}'),e={name:"架构篇/index.md"};function t(i,n,o,c,r,u){return a(),p("div",null,[...n[0]||(n[0]=[l(`<div class="language-dataviewjs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dataviewjs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// === 配置区 ===</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><hr><p>架构方面这里单独学习，重复了也无所谓，还是要有自己的理解。反复输入和输出，注意一下自己的输出文件不要重复，尽量统一和收纳。</p><p>架构的学习，需要结合实际场景，去思考和学习别人是如何设计的。</p><ul><li><a href="/java-site/架构篇/项目场景基础.html">Java 架构 项目场景基础</a></li></ul><h3 id="架构模式" tabindex="-1">架构模式 <a class="header-anchor" href="#架构模式" aria-label="Permalink to &quot;架构模式&quot;">​</a></h3><hr><ul><li><a href="./.html">DDD 分层架构模式</a></li><li></li></ul><p>一些比较好的思路和想法</p><ul><li><a href="./.html">业务场景和技术选型</a></li></ul><hr><ul><li>架构模式： <ul><li>单体架构</li><li>分布式架构</li><li>微服务架构</li><li>服务网格（Service Mesh）</li></ul></li></ul><hr><ul><li>设计理念： <ul><li>领域驱动设计（DDD）</li><li>六边形架构 / CLEAN 架构</li><li>中台架构思想</li></ul></li></ul><h3 id="分布式系统" tabindex="-1">分布式系统 <a class="header-anchor" href="#分布式系统" aria-label="Permalink to &quot;分布式系统&quot;">​</a></h3><ul><li><a href="./.html">架构 分布式安全</a></li><li><a href="./.html">架构 分布式存储</a></li><li></li></ul><h3 id="安全与可观测性" tabindex="-1">安全与可观测性 <a class="header-anchor" href="#安全与可观测性" aria-label="Permalink to &quot;安全与可观测性&quot;">​</a></h3><ul><li><p><a href="/java-site/架构篇/系统设计_数据安全/">系统设计_数据安全</a></p></li><li><p><strong>安全</strong>：</p><ul><li>HTTPS/TLS</li><li>JWT/OAuth2</li><li>XSS、CSRF、SQL注入防护</li></ul></li><li><p><strong>可观测性</strong>：</p><ul><li>日志（ELK）</li><li>监控（Prometheus + Grafana）</li><li>链路追踪（Zipkin、Jaeger）</li></ul></li></ul><p>监控</p><p>HertzBeat（赫兹跳动）: <a href="https://mp.weixin.qq.com/s/3llRao8Z7WRIDnxV6RkgpQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/3llRao8Z7WRIDnxV6RkgpQ</a></p>`,20)])])}const h=s(e,[["render",t]]);export{q as __pageData,h as default};
