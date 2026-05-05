import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const r=JSON.parse('{"title":"ES中常见的搜索语句","description":"","frontmatter":{"title":"ES中常见的搜索语句","excerpt":"摘要","date":"2025-06-18 15:33:00","updated":"2025-06-18 15:33:00"},"headers":[],"relativePath":"数据库/ElasticSearch/ES的服务安装/ES中常见的搜索语句.md","filePath":"数据库/ElasticSearch/ES的服务安装/ES中常见的搜索语句.md","lastUpdated":null}'),l={name:"数据库/ElasticSearch/ES的服务安装/ES中常见的搜索语句.md"};function t(o,s,c,i,u,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="搜索入门" tabindex="-1">搜索入门 <a class="header-anchor" href="#搜索入门" aria-label="Permalink to &quot;搜索入门&quot;">​</a></h3><h4 id="搜索全部" tabindex="-1">搜索全部 <a class="header-anchor" href="#搜索全部" aria-label="Permalink to &quot;搜索全部&quot;">​</a></h4><ul><li>最简单的搜索，使用<code>match_all</code>来表示，例如搜索全部；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234019.png" alt="image.png"></p><h4 id="分页搜索" tabindex="-1">分页搜索 <a class="header-anchor" href="#分页搜索" aria-label="Permalink to &quot;分页搜索&quot;">​</a></h4><ul><li>分页搜索，<code>from</code>表示偏移量，从0开始，<code>size</code>表示每页显示的数量；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>  &quot;from&quot;: 0,</span></span>
<span class="line"><span>  &quot;size&quot;: 10</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728233929.png" alt="image.png"></p><h4 id="搜索排序" tabindex="-1">搜索排序 <a class="header-anchor" href="#搜索排序" aria-label="Permalink to &quot;搜索排序&quot;">​</a></h4><ul><li>搜索排序，使用<code>sort</code>表示，例如按<code>balance</code>字段降序排列；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>  &quot;sort&quot;: { &quot;balance&quot;: { &quot;order&quot;: &quot;desc&quot; } }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234049.png" alt="image.png"></p><h4 id="搜索返回指定字段" tabindex="-1">搜索返回指定字段 <a class="header-anchor" href="#搜索返回指定字段" aria-label="Permalink to &quot;搜索返回指定字段&quot;">​</a></h4><ul><li>搜索并返回指定字段内容，使用<code>_source</code>表示，例如只返回<code>account_number</code>和<code>balance</code>两个字段内容：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>  &quot;_source&quot;: [&quot;account_number&quot;, &quot;balance&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234108.png" alt="image.png"></p><h3 id="条件搜索" tabindex="-1">条件搜索 <a class="header-anchor" href="#条件搜索" aria-label="Permalink to &quot;条件搜索&quot;">​</a></h3><h4 id="精确匹配-term-terms" tabindex="-1"><strong>精确匹配（Term/Terms）</strong> <a class="header-anchor" href="#精确匹配-term-terms" aria-label="Permalink to &quot;**精确匹配（Term/Terms）**&quot;">​</a></h4><p><code>term</code>：精确匹配字段值（不分词），如查找<code>name</code>为<code>&quot;python&quot;</code>的文档</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ &quot;query&quot;: { &quot;term&quot;: { &quot;name&quot;: &quot;python&quot; } } }</span></span></code></pre></div><p><code>terms</code>：匹配多个值，如<code>name</code>为<code>&quot;python&quot;</code>或<code>&quot;android&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ &quot;query&quot;: { &quot;terms&quot;: { &quot;name&quot;: [&quot;python&quot;, &quot;android&quot;] } } }</span></span></code></pre></div><h4 id="范围查询-range" tabindex="-1">范围查询 <strong>Range</strong> <a class="header-anchor" href="#范围查询-range" aria-label="Permalink to &quot;范围查询 **Range**&quot;">​</a></h4><p>查询数字或日期范围，如<code>age</code>在18到30之间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ </span></span>
<span class="line"><span>  &quot;query&quot;: { </span></span>
<span class="line"><span>    &quot;range&quot;: { </span></span>
<span class="line"><span>      &quot;age&quot;: { &quot;gte&quot;: 18, &quot;lte&quot;: 30 } </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="全文搜索" tabindex="-1">全文搜索 <a class="header-anchor" href="#全文搜索" aria-label="Permalink to &quot;全文搜索&quot;">​</a></h4><p><strong>Match查询​</strong>​</p><p>对文本字段进行分词搜索</p><ul><li>条件搜索，使用<code>match</code>表示匹配条件，例如搜索出<code>account_number</code>为<code>20</code>的文档：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match&quot;: {</span></span>
<span class="line"><span>      &quot;account_number&quot;: 20</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234134.png" alt="image.png"></p><ul><li>文本类型字段的条件搜索，例如搜索<code>address</code>字段中包含<code>mill</code>的文档，对比上一条搜索可以发现，对于数值类型<code>match</code>操作使用的是精确匹配，对于文本类型使用的是模糊匹配；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match&quot;: {</span></span>
<span class="line"><span>      &quot;address&quot;: &quot;mill&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;_source&quot;: [</span></span>
<span class="line"><span>    &quot;address&quot;,</span></span>
<span class="line"><span>    &quot;account_number&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234154.png" alt="image.png"></p><h4 id="多字段匹配-multi-match" tabindex="-1"><strong>多字段匹配（Multi-match）</strong> <a class="header-anchor" href="#多字段匹配-multi-match" aria-label="Permalink to &quot;**多字段匹配（Multi-match）**&quot;">​</a></h4><p>在多个字段中搜索同一关键词，如<code>name</code>和<code>addr</code>包含<code>&quot;深圳&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ </span></span>
<span class="line"><span>  &quot;query&quot;: { </span></span>
<span class="line"><span>    &quot;multi_match&quot;: { </span></span>
<span class="line"><span>      &quot;query&quot;: &quot;深圳&quot;, </span></span>
<span class="line"><span>      &quot;fields&quot;: [&quot;name&quot;, &quot;addr&quot;] </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="短语匹配搜索" tabindex="-1">短语匹配搜索 <a class="header-anchor" href="#短语匹配搜索" aria-label="Permalink to &quot;短语匹配搜索&quot;">​</a></h4><ul><li>短语匹配搜索，使用<code>match_phrase</code>表示，例如搜索<code>address</code>字段中同时包含<code>mill</code>和<code>lane</code>的文档：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match_phrase&quot;: {</span></span>
<span class="line"><span>      &quot;address&quot;: &quot;mill lane&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234214.png" alt="image.png"></p><h4 id="模糊匹配-fuzzy-wildcard" tabindex="-1"><strong>模糊匹配（Fuzzy/Wildcard）</strong> <a class="header-anchor" href="#模糊匹配-fuzzy-wildcard" aria-label="Permalink to &quot;**模糊匹配（Fuzzy/Wildcard）**&quot;">​</a></h4><p><code>fuzzy</code>：容忍拼写错误，如<code>&quot;iphon&quot;</code>匹配<code>&quot;iphone&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ &quot;query&quot;: { &quot;fuzzy&quot;: { &quot;name&quot;: { &quot;value&quot;: &quot;iphon&quot;, &quot;fuzziness&quot;: &quot;AUTO&quot; } } } }</span></span></code></pre></div><p><code>wildcard</code>：通配符匹配，如<code>name</code>以<code>&quot;app&quot;</code>开头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ &quot;query&quot;: { &quot;wildcard&quot;: { &quot;name&quot;: &quot;app*&quot; } } }</span></span></code></pre></div><h3 id="组合搜索-复合查询-bool" tabindex="-1">组合搜索/复合查询（Bool） <a class="header-anchor" href="#组合搜索-复合查询-bool" aria-label="Permalink to &quot;组合搜索/复合查询（Bool）&quot;">​</a></h3><p>通过逻辑组合多个条件：</p><ul><li><p><code>must</code>：所有条件必须满足（AND逻辑）。</p></li><li><p><code>should</code>：至少满足一个条件（OR逻辑）。</p></li><li><p><code>must_not</code>：排除满足条件的文档。</p></li><li><p><code>filter</code>：类似<code>must</code>但不影响评分，性能更高。</p></li><li><p>组合搜索，使用<code>bool</code>来进行组合，<code>must</code>表示同时满足，例如搜索<code>address</code>字段中同时包含<code>mill</code>和<code>lane</code>的文档；</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;mill&quot; } },</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;lane&quot; } }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234238.png" alt="image.png"></p><ul><li>组合搜索，<code>should</code>表示满足其中任意一个，搜索<code>address</code>字段中包含<code>mill</code>或者<code>lane</code>的文档；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;should&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;mill&quot; } },</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;lane&quot; } }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234252.png" alt="image.png"></p><ul><li>组合搜索，<code>must_not</code>表示同时不满足，例如搜索<code>address</code>字段中不包含<code>mill</code>且不包含<code>lane</code>的文档；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must_not&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;mill&quot; } },</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;address&quot;: &quot;lane&quot; } }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234307.png" alt="image.png"></p><ul><li>组合搜索，组合<code>must</code>和<code>must_not</code>，例如搜索<code>age</code>字段等于<code>40</code>且<code>state</code>字段不包含<code>ID</code>的文档；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;age&quot;: &quot;40&quot; } }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;must_not&quot;: [</span></span>
<span class="line"><span>        { &quot;match&quot;: { &quot;state&quot;: &quot;ID&quot; } }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234322.png" alt="image.png"></p><h3 id="过滤搜索" tabindex="-1">过滤搜索 <a class="header-anchor" href="#过滤搜索" aria-label="Permalink to &quot;过滤搜索&quot;">​</a></h3><ul><li>搜索过滤，使用<code>filter</code>来表示，例如过滤出<code>balance</code>字段在<code>20000~30000</code>的文档；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;bool&quot;: {</span></span>
<span class="line"><span>      &quot;must&quot;: { &quot;match_all&quot;: {} },</span></span>
<span class="line"><span>      &quot;filter&quot;: {</span></span>
<span class="line"><span>        &quot;range&quot;: {</span></span>
<span class="line"><span>          &quot;balance&quot;: {</span></span>
<span class="line"><span>            &quot;gte&quot;: 20000,</span></span>
<span class="line"><span>            &quot;lte&quot;: 30000</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234342.png" alt="image.png"></p><h3 id="搜索聚合" tabindex="-1">搜索聚合 <a class="header-anchor" href="#搜索聚合" aria-label="Permalink to &quot;搜索聚合&quot;">​</a></h3><ul><li>对搜索结果进行聚合，使用<code>aggs</code>来表示，类似于MySql中的<code>group by</code>，例如对<code>state</code>字段进行聚合，统计出相同<code>state</code>的文档数量；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_state&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;state.keyword&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234403.png" alt="image.png"></p><ul><li>嵌套聚合，例如对<code>state</code>字段进行聚合，统计出相同<code>state</code>的文档数量，再统计出<code>balance</code>的平均值；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_state&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;state.keyword&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;average_balance&quot;: {</span></span>
<span class="line"><span>          &quot;avg&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;balance&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234417.png" alt="image.png"></p><ul><li>对聚合搜索的结果进行排序，例如按<code>balance</code>的平均值降序排列；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_state&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;state.keyword&quot;,</span></span>
<span class="line"><span>        &quot;order&quot;: {</span></span>
<span class="line"><span>          &quot;average_balance&quot;: &quot;desc&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;average_balance&quot;: {</span></span>
<span class="line"><span>          &quot;avg&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;balance&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234432.png" alt="image.png"></p><ul><li>按字段值的范围进行分段聚合，例如分段范围为<code>age</code>字段的<code>[20,30]</code> <code>[30,40]</code> <code>[40,50]</code>，之后按<code>gender</code>统计文档个数和<code>balance</code>的平均值；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /bank/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;group_by_age&quot;: {</span></span>
<span class="line"><span>      &quot;range&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;age&quot;,</span></span>
<span class="line"><span>        &quot;ranges&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;from&quot;: 20,</span></span>
<span class="line"><span>            &quot;to&quot;: 30</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;from&quot;: 30,</span></span>
<span class="line"><span>            &quot;to&quot;: 40</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;from&quot;: 40,</span></span>
<span class="line"><span>            &quot;to&quot;: 50</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;group_by_gender&quot;: {</span></span>
<span class="line"><span>          &quot;terms&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;gender.keyword&quot;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;aggs&quot;: {</span></span>
<span class="line"><span>            &quot;average_balance&quot;: {</span></span>
<span class="line"><span>              &quot;avg&quot;: {</span></span>
<span class="line"><span>                &quot;field&quot;: &quot;balance&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240728234445.png" alt="image.png"></p><hr><p>参考</p><ul><li>ES的官方文档： <a href="https://www.elastic.co/docs/explore-analyze/query-filter/languages/querydsl" target="_blank" rel="noreferrer">https://www.elastic.co/docs/explore-analyze/query-filter/languages/querydsl</a></li></ul>`,81)])])}const h=a(l,[["render",t]]);export{r as __pageData,h as default};
