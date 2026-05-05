import{_ as a,o as e,c as n,am as t}from"./chunks/framework.CiF4W93w.js";const u=JSON.parse('{"title":"Hibernate Search学习","description":"","frontmatter":{"title":"Hibernate Search学习","excerpt":"同时记录一下项目中发生和需要用到的一些内容","date":"2024-08-29 22:40:57","updated":"2024-08-29 22:40:57"},"headers":[],"relativePath":"数据库/ElasticSearch/ES的服务安装/Hibernate Search学习.md","filePath":"数据库/ElasticSearch/ES的服务安装/Hibernate Search学习.md","lastUpdated":null}'),p={name:"数据库/ElasticSearch/ES的服务安装/Hibernate Search学习.md"};function r(l,s,c,i,o,h){return e(),n("div",null,[...s[0]||(s[0]=[t(`<p>文档参考： <a href="https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#mapper-orm-mapping-projection" target="_blank" rel="noreferrer">https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#mapper-orm-mapping-projection</a></p><h4 id="如何使用-hibernate-search-进行导出的时候-search-after-的操作" tabindex="-1">如何使用 hibernate Search 进行导出的时候 search after 的操作 <a class="header-anchor" href="#如何使用-hibernate-search-进行导出的时候-search-after-的操作" aria-label="Permalink to &quot;如何使用 hibernate Search 进行导出的时候 search after 的操作&quot;">​</a></h4><p>项目中使用的版本是： hibernate-search 7.0.0.Final 的版本</p><p>搜索模块： <a href="https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#query-sorting" target="_blank" rel="noreferrer">https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#query-sorting</a></p><p>在关联的 org.hibernate.search.engine.search.query.SearchQuery 以及 SearchFetchable 类下，没有看到 searchAfter 方法，只看到 scroll 方法</p><p>可能是 Hibernate Search 7.0 处于有限支持状态</p><p>这里转换为使用 原生的 ES 特性(项目使用的ES是 8 以上的版本)</p><p>了解一下 scroll 方法： <a href="https://blog.csdn.net/zx711166/article/details/82426387" target="_blank" rel="noreferrer">https://blog.csdn.net/zx711166/article/details/82426387</a> （滚动查询，建议使用 search_after， search_after 是 ES5.0 及之后版本提供的新特性）</p><p>ES 原生的写法 是有 searchAfter 的直接调用方法的</p><p>这里是使用 hibernate search 的部分内容, 并且加入部分 json 的拼写操作</p><p>参考: <a href="https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#search-dsl-query-elasticsearch-json" target="_blank" rel="noreferrer">https://docs.jboss.org/hibernate/stable/search/reference/en-US/html_single/#search-dsl-query-elasticsearch-json</a></p><p>这种写法能够直接更改 body 的内容</p><p>最后的更新版本代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>default Page&lt;SalesOrderProduct&gt; findSalesOrderProductPaginatedByCriteriaForExport(FindSalesOrderProductPaginatedRequest request, PageRequest pageRequest) {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    int maxQuantity = 10000;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    if (pageRequest.getOffset() + pageRequest.getPageSize() &gt; maxQuantity) {  </span></span>
<span class="line"><span>        throw new GenericException(GenericException.Code.SEARCH_RANGE_TOO_LARGE);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    SearchMapping searchMapping = App.getBean(SearchMapping.class);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    try (SearchSession session = searchMapping.createSession()) {  </span></span>
<span class="line"><span>        int offset = (request.getSearchAfterValues() != null  </span></span>
<span class="line"><span>            &amp;&amp; request.getSearchAfterValues().getId() != null  </span></span>
<span class="line"><span>            &amp;&amp; request.getSearchAfterValues().getUpdatedAtTimestamp() != null)  </span></span>
<span class="line"><span>            ? 0  </span></span>
<span class="line"><span>            : (int) pageRequest.getOffset();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        SearchResult&lt;SalesOrderProductEsDTO&gt; searchResult = session.search(SalesOrderProductEsMapper.class)  </span></span>
<span class="line"><span>            .extension(ElasticsearchExtension.get())  </span></span>
<span class="line"><span>            .select(f -&gt; f.composite()  </span></span>
<span class="line"><span>                .from(f.field(&quot;docId&quot;, Long.class), f.field(&quot;updatedAt&quot;, LocalDateTime.class))  </span></span>
<span class="line"><span>                .asList(list -&gt; new SalesOrderProductEsDTO((Long) list.get(0), (LocalDateTime) list.get(1))))  </span></span>
<span class="line"><span>            .where(predicateContributor(request))  </span></span>
<span class="line"><span>            .requestTransformer(context -&gt; {  </span></span>
<span class="line"><span>                if (request.getSearchAfterValues() != null  </span></span>
<span class="line"><span>                    &amp;&amp; request.getSearchAfterValues().getId() != null  </span></span>
<span class="line"><span>                    &amp;&amp; request.getSearchAfterValues().getUpdatedAtTimestamp() != null) {  </span></span>
<span class="line"><span>                    JsonArray searchAfter = new JsonArray();  </span></span>
<span class="line"><span>                    SalesOrderProductEsDTO lastResult = request.getSearchAfterValues();  </span></span>
<span class="line"><span>                    searchAfter.add(lastResult.getUpdatedAtTimestamp());  </span></span>
<span class="line"><span>                    searchAfter.add(lastResult.getId().toString());  </span></span>
<span class="line"><span>                    context.body().add(&quot;search_after&quot;, searchAfter);  </span></span>
<span class="line"><span>                }  </span></span>
<span class="line"><span>            })  </span></span>
<span class="line"><span>            .sort(sortContributor(pageRequest))  </span></span>
<span class="line"><span>            .fetch(offset, pageRequest.getPageSize());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        List&lt;SalesOrderProductEsDTO&gt; hits = searchResult.hits();  </span></span>
<span class="line"><span>        if (hits != null &amp;&amp; !hits.isEmpty()) {  </span></span>
<span class="line"><span>            request.setSearchAfterValues(hits.get(hits.size() - 1));  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        List&lt;Long&gt; ids = searchResult.hits().stream().map(SalesOrderProductEsDTO::getId).collect(Collectors.toList());  </span></span>
<span class="line"><span>        return new PageImpl&lt;&gt;(findSortedByIdIn(ids), pageRequest, searchResult.total().hitCount());  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14)])])}const g=a(p,[["render",r]]);export{u as __pageData,g as default};
