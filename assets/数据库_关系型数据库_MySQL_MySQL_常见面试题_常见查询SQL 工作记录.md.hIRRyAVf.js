import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"常见查询SQL 工作记录","description":"","frontmatter":{"title":"常见查询SQL 工作记录","excerpt":"摘要","date":"2025-11-03 16:14:56","updated":"2025-11-03 16:14:56"},"headers":[],"relativePath":"数据库/关系型数据库/MySQL/MySQL_常见面试题/常见查询SQL 工作记录.md","filePath":"数据库/关系型数据库/MySQL/MySQL_常见面试题/常见查询SQL 工作记录.md","lastUpdated":null}'),l={name:"数据库/关系型数据库/MySQL/MySQL_常见面试题/常见查询SQL 工作记录.md"};function i(t,s,c,d,o,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="🌾常用sql" tabindex="-1">🌾常用SQL <a class="header-anchor" href="#🌾常用sql" aria-label="Permalink to &quot;🌾常用SQL&quot;">​</a></h3><p>这部分工作大概率AI 可以替代，记录，可以记录一些比较复杂的查询，给 AI 一些提示参考。</p><h4 id="查询200个数据的-in-查询拼接" tabindex="-1">查询200个数据的 in 查询拼接 <a class="header-anchor" href="#查询200个数据的-in-查询拼接" aria-label="Permalink to &quot;查询200个数据的 in 查询拼接&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT </span></span>
<span class="line"><span>  CONCAT(</span></span>
<span class="line"><span>    &#39;\\&#39;&#39;,</span></span>
<span class="line"><span>    GROUP_CONCAT(sp.skc ORDER BY sp.id SEPARATOR &#39;\\&#39;,\\&#39;&#39;),</span></span>
<span class="line"><span>    &#39;\\&#39;&#39;</span></span>
<span class="line"><span>  ) AS skc_list</span></span>
<span class="line"><span>FROM (</span></span>
<span class="line"><span>  SELECT skc, id </span></span>
<span class="line"><span>  FROM soms_products </span></span>
<span class="line"><span>  WHERE id &gt; 1000000000000</span></span>
<span class="line"><span>  ORDER BY id</span></span>
<span class="line"><span>  LIMIT 200</span></span>
<span class="line"><span>) AS sp;</span></span></code></pre></div><h4 id="新增某一列" tabindex="-1">新增某一列 <a class="header-anchor" href="#新增某一列" aria-label="Permalink to &quot;新增某一列&quot;">​</a></h4><p>其中 AFTER 的作用是来指定新添加的列在表结构中的位置的。</p><p>当你使用 <code>ALTER TABLE</code> 添加新列时，可以通过 <code>AFTER</code> 子句来指定新列应该放置在哪一列之后</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ALTER TABLE \`soms_loss_leader_activity_products\`</span></span>
<span class="line"><span>ADD COLUMN \`spu\` varchar(100) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;spu&#39; AFTER \`sku\`;</span></span></code></pre></div><h3 id="常见-sql" tabindex="-1">常见 SQL <a class="header-anchor" href="#常见-sql" aria-label="Permalink to &quot;常见 SQL&quot;">​</a></h3><h4 id="示例数据" tabindex="-1">示例数据 <a class="header-anchor" href="#示例数据" aria-label="Permalink to &quot;示例数据&quot;">​</a></h4><p>注意一下在 <code>utf8mb4</code> 的数据库中操作</p><p>创建示例表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE Student (</span></span>
<span class="line"><span>    student_id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    name VARCHAR(100) NOT NULL,</span></span>
<span class="line"><span>    age INT,</span></span>
<span class="line"><span>    gender VARCHAR(10)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE Score (</span></span>
<span class="line"><span>    record_id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    student_id INT,</span></span>
<span class="line"><span>    subject VARCHAR(50) NOT NULL,</span></span>
<span class="line"><span>    score DECIMAL(5, 2),</span></span>
<span class="line"><span>    exam_date DATE,</span></span>
<span class="line"><span>    FOREIGN KEY (student_id) REFERENCES Student(student_id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>示例数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INSERT INTO Student (name, age, gender) VALUES</span></span>
<span class="line"><span>(&#39;张三&#39;, 20, &#39;男&#39;),</span></span>
<span class="line"><span>(&#39;李四&#39;, 19, &#39;男&#39;),</span></span>
<span class="line"><span>(&#39;王五&#39;, 21, &#39;女&#39;),</span></span>
<span class="line"><span>(&#39;赵六&#39;, 22, &#39;女&#39;),</span></span>
<span class="line"><span>(&#39;孙七&#39;, 18, &#39;男&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO Score (student_id, subject, score, exam_date) VALUES</span></span>
<span class="line"><span>(1, &#39;数学&#39;, 85.5, &#39;2023-10-01&#39;),</span></span>
<span class="line"><span>(1, &#39;英语&#39;, 78.0, &#39;2023-10-02&#39;),</span></span>
<span class="line"><span>(1, &#39;物理&#39;, 92.0, &#39;2023-10-03&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2, &#39;数学&#39;, 88.0, &#39;2023-10-01&#39;),</span></span>
<span class="line"><span>(2, &#39;英语&#39;, 74.5, &#39;2023-10-02&#39;),</span></span>
<span class="line"><span>(2, &#39;化学&#39;, 91.0, &#39;2023-10-04&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3, &#39;英语&#39;, 82.0, &#39;2023-10-02&#39;),</span></span>
<span class="line"><span>(3, &#39;生物&#39;, 87.0, &#39;2023-10-05&#39;),</span></span>
<span class="line"><span>(3, &#39;化学&#39;, 79.0, &#39;2023-10-04&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(4, &#39;物理&#39;, 95.0, &#39;2023-10-03&#39;),</span></span>
<span class="line"><span>(4, &#39;化学&#39;, 88.0, &#39;2023-10-04&#39;),</span></span>
<span class="line"><span>(4, &#39;生物&#39;, 90.0, &#39;2023-10-05&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(5, &#39;数学&#39;, 93.0, &#39;2023-10-01&#39;),</span></span>
<span class="line"><span>(5, &#39;英语&#39;, 85.0, &#39;2023-10-02&#39;),</span></span>
<span class="line"><span>(5, &#39;物理&#39;, 88.0, &#39;2023-10-03&#39;),</span></span>
<span class="line"><span>(5, &#39;化学&#39;, 84.0, &#39;2023-10-04&#39;);</span></span></code></pre></div><h4 id="查询不同科目下的学生成绩" tabindex="-1">查询不同科目下的学生成绩 <a class="header-anchor" href="#查询不同科目下的学生成绩" aria-label="Permalink to &quot;查询不同科目下的学生成绩&quot;">​</a></h4><p>参考一下这个： <a href="https://www.cnblogs.com/kongxiaoshuang/p/17643868.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kongxiaoshuang/p/17643868.html</a></p><p>大概的方式有几种：</p><ul><li>1、使用 case when 的方式（固定列，然后进行展示）</li><li>2、使用 sum if 的方式</li><li>3、使用动态SQL的方式</li></ul><p>使用 case when 的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT</span></span>
<span class="line"><span>    s.student_id,</span></span>
<span class="line"><span>    s.name,</span></span>
<span class="line"><span>    MAX(CASE WHEN sc.subject = &#39;英语&#39; THEN sc.score ELSE NULL END) AS 英语成绩,</span></span>
<span class="line"><span>    MAX(CASE WHEN sc.subject = &#39;数学&#39; THEN sc.score ELSE NULL END) AS 数学成绩</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>    Student s</span></span>
<span class="line"><span>LEFT JOIN</span></span>
<span class="line"><span>    Score sc ON s.student_id = sc.student_id</span></span>
<span class="line"><span>GROUP BY</span></span>
<span class="line"><span>    s.student_id, s.name;</span></span></code></pre></div><p>使用 sum if 的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT </span></span>
<span class="line"><span>    s.student_id,</span></span>
<span class="line"><span>    s.name,</span></span>
<span class="line"><span>		SUM(if (sc.subject = &#39;英语&#39;,sc.score,0)) as &#39;英语成绩&#39;,</span></span>
<span class="line"><span>		SUM(if (sc.subject = &#39;数学&#39;,sc.score,0)) as &#39;数学成绩&#39;</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>    Student s</span></span>
<span class="line"><span>LEFT JOIN</span></span>
<span class="line"><span>    Score sc ON s.student_id = sc.student_id</span></span>
<span class="line"><span>GROUP BY</span></span>
<span class="line"><span>    s.student_id, s.name;</span></span></code></pre></div><h4 id="动态展示并查询出来" tabindex="-1">动态展示并查询出来 <a class="header-anchor" href="#动态展示并查询出来" aria-label="Permalink to &quot;动态展示并查询出来&quot;">​</a></h4><p>动态 SQL 的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SET @sql = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 构造SELECT语句</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>  GROUP_CONCAT(DISTINCT</span></span>
<span class="line"><span>    CONCAT(</span></span>
<span class="line"><span>      &#39;MAX(CASE WHEN sc.subject = &#39;&#39;&#39;,</span></span>
<span class="line"><span>      subject,</span></span>
<span class="line"><span>      &#39;&#39;&#39; THEN sc.score ELSE NULL END) AS \`&#39;,</span></span>
<span class="line"><span>      subject, &#39;\`&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  ) INTO @sql</span></span>
<span class="line"><span>FROM Score;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 完整的SQL查询语句</span></span>
<span class="line"><span>SET @sql = CONCAT(&#39;SELECT s.student_id, s.name, &#39;, @sql, &#39; </span></span>
<span class="line"><span>                   FROM Student s </span></span>
<span class="line"><span>                   LEFT JOIN Score sc </span></span>
<span class="line"><span>                   ON s.student_id = sc.student_id </span></span>
<span class="line"><span>                   GROUP BY s.student_id, s.name&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 执行动态SQL</span></span>
<span class="line"><span>PREPARE stmt FROM @sql;</span></span>
<span class="line"><span>EXECUTE stmt;</span></span>
<span class="line"><span>DEALLOCATE PREPARE stmt;</span></span></code></pre></div><h4 id="行转列" tabindex="-1">行转列 <a class="header-anchor" href="#行转列" aria-label="Permalink to &quot;行转列&quot;">​</a></h4><p>参考： <a href="https://bbs.huaweicloud.com/blogs/400950" target="_blank" rel="noreferrer">https://bbs.huaweicloud.com/blogs/400950</a></p><p>PIVOT函数是MySQL8.0版本中新增的函数，用于实现行转列操作。</p><p>放弃行转列，建议直接使用 CASE WHEN 的方式</p><p>（后续看一下 MySQL 相关的视频内容）</p><hr><p>参考</p><ul><li><a href="https://javaguide.cn/database/mysql/mysql-high-performance-optimization-specification-recommendations.html" target="_blank" rel="noreferrer">https://javaguide.cn/database/mysql/mysql-high-performance-optimization-specification-recommendations.html</a></li><li><a href="https://mp.weixin.qq.com/s/NM-aHaW6TXrnO6la6Jfl5A" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/NM-aHaW6TXrnO6la6Jfl5A</a></li><li><a href="https://mp.weixin.qq.com/s/XC8e5iuQtfsrEOERffEZ-Q" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/XC8e5iuQtfsrEOERffEZ-Q</a></li><li><a href="https://javaguide.cn/database/mysql/mysql-questions-01.html#mysql-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96" target="_blank" rel="noreferrer">https://javaguide.cn/database/mysql/mysql-questions-01.html#mysql-性能优化</a></li></ul>`,34)])])}const E=a(l,[["render",i]]);export{u as __pageData,E as default};
