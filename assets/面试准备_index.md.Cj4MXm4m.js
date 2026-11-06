import{_ as s,o as a,c as p,am as l}from"./chunks/framework._FJXuPhs.js";const q=JSON.parse('{"title":"面试准备","description":"","frontmatter":{"title":"面试准备","excerpt":"摘要","date":"2024-05-17 19:39:25","updated":"2024-05-17 19:39:25"},"headers":[],"relativePath":"面试准备/index.md","filePath":"面试准备/index.md","lastUpdated":null}'),e={name:"面试准备/index.md"};function t(i,n,o,c,r,u){return a(),p("div",null,[...n[0]||(n[0]=[l(`<div class="language-dataviewjs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dataviewjs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// === 配置区 ===</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><hr><p>章节篇放弃维护，只维护这个总版本 <a href="/java-site/面试准备/面试煎熬成蛋/面试煎熬成蛋_面试速刷版_第二版/Java面试速刷_第三版.html">面试煎熬成蛋_Java面试速刷_第三版</a></p><p>简历： - <a href="/java-site/面试准备/2026版本/">Java面试准备 2026版本</a></p><h3 id="面试煎熬成蛋" tabindex="-1">面试煎熬成蛋 <a class="header-anchor" href="#面试煎熬成蛋" aria-label="Permalink to &quot;面试煎熬成蛋&quot;">​</a></h3><ul><li><a href="/java-site/面试准备/面试煎熬成蛋/">Java面试准备 - 面试煎熬成蛋</a></li><li>面试突击 <a href="./.html">面试突击_常见面试题</a> （只记录题目）</li></ul><h3 id="面试记录" tabindex="-1">面试记录 <a class="header-anchor" href="#面试记录" aria-label="Permalink to &quot;面试记录&quot;">​</a></h3><ul><li><a href="/java-site/面试准备/Java面试准备 2024版本/">Java面试准备 2024版本</a></li></ul><hr><h3 id="面试要求" tabindex="-1">面试要求 <a class="header-anchor" href="#面试要求" aria-label="Permalink to &quot;面试要求&quot;">​</a></h3><p>年限要求，同时问一下自己是否确实具备了这些能力。</p><p>6年Java开发工程师，属于中高级到资深的过渡阶段，应该在以下几个层面有扎实积累：</p><p>技术基本功</p><ul><li>Java核心：JVM内存模型、GC调优、类加载机制、并发编程（JUC包、锁机制、线程池调优）</li><li>框架深度：Spring Boot/Cloud 源码级理解，不只是会用，要能排查框架层面的问题</li><li>数据库：MySQL索引原理、执行计划分析、分库分表方案、慢SQL优化；熟悉至少一种NoSQL（Redis/MongoDB）</li><li>中间件：消息队列（Kafka/RocketMQ）的使用场景与可靠性保障、分布式缓存、配置中心、注册中心</li></ul><p>架构与设计</p><ul><li>能独立完成中等复杂度系统的技术方案设计</li><li>理解DDD、微服务拆分原则、服务治理（限流、熔断、降级）</li><li>分布式事务方案选型（TCC、Saga、最终一致性）</li></ul><p>技术基本功</p><ul><li>Java核心：JVM内存模型、GC调优、类加载机制、并发编程（JUC包、锁机制、线程池调优）</li><li>框架深度：Spring Boot/Cloud 源码级理解，不只是会用，要能排查框架层面的问题</li><li>数据库：MySQL索引原理、执行计划分析、分库分表方案、慢SQL优化；熟悉至少一种NoSQL（Redis/MongoDB）</li><li>中间件：消息队列（Kafka/RocketMQ）的使用场景与可靠性保障、分布式缓存、配置中心、注册中心</li></ul><p>架构与设计</p><ul><li>能独立完成中等复杂度系统的技术方案设计</li><li>理解DDD、微服务拆分原则、服务治理（限流、熔断、降级）</li><li>分布式事务方案选型（TCC、Saga、最终一致性）</li><li>性能瓶颈定位能力：链路追踪、火焰图、线程dump分析</li></ul><p>工程能力</p><ul><li>CI/CD流程设计、容器化部署（Docker/K8s基础）</li><li>代码质量意识：单测覆盖、Code Review、重构能力</li><li>线上问题排查：OOM、CPU飙高、死锁、Full GC等生产问题的系统化排查思路</li><li>技术选型能力：能权衡方案的trade-off，不盲目追新</li></ul><p>软技能</p><ul><li>能带2-3人的小团队或mentor初中级工程师</li><li>需求评审时能识别技术风险并提前暴露</li><li>跨团队协作沟通、技术文档输出</li></ul><p>容易被忽视但区分度高的点</p><ul><li>源码阅读习惯：遇到问题能翻源码定位，而不是只靠搜索引擎</li><li>全链路思维：从用户请求到数据落盘，每一跳的瓶颈和风险点都能说清</li><li>成本意识：方案设计考虑资源开销、运维复杂度，不过度设计</li></ul><hr><p>简单说，6年应该从&quot;能写好代码&quot;进化到&quot;能设计好系统、能兜住线上问题、能带人&quot;。如果你想针对某个方向深入聊，比如架构设计、面试准备、或者技术成长路径，可以继续问。</p><hr><p>大模型方面最近的要求</p><ul><li>1、参与AI 智能体相关能力建设，包括大模型调用、Agent 任务编排、工具调用、知识库、工作流等功能开发</li><li>2、负责与大模型服务、知识库、MCP、第三方API 等系统集成。</li></ul>`,31)])])}const h=s(e,[["render",t]]);export{q as __pageData,h as default};
