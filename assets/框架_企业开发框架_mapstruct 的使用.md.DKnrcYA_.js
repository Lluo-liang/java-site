import{_ as a,o as n,c as t,am as p}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"mapstruct 的使用","description":"","frontmatter":{"title":"mapstruct 的使用","excerpt":"摘要","date":"2025-05-29 16:12:20","updated":"2025-05-29 16:12:20"},"headers":[],"relativePath":"框架/企业开发框架/mapstruct 的使用.md","filePath":"框架/企业开发框架/mapstruct 的使用.md","lastUpdated":null}'),e={name:"框架/企业开发框架/mapstruct 的使用.md"};function l(i,s,c,r,o,g){return n(),t("div",null,[...s[0]||(s[0]=[p(`<p>MapStruct 工具</p><p>你看一下项目中的 这个 Mapper 注解，这里使用的就是 package org.mapstruct; 这个框架内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Mapper  </span></span>
<span class="line"><span>public interface StoreActivityProductServiceMapper {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    StoreActivityProductServiceMapper INSTANCE = Mappers.getMapper(StoreActivityProductServiceMapper.class);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    /**  </span></span>
<span class="line"><span>     * Convert entity to dto.     * @param request  </span></span>
<span class="line"><span>     * @return {@link StoreActivityListQuery }  </span></span>
<span class="line"><span>     */    </span></span>
<span class="line"><span>     StoreActivityListQuery toStoreActivityListQuery(StoreActivityListRequest request); </span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代码层的使用一般就是</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>StoreActivityListQuery query = StoreActivityProductServiceMapper.INSTANCE.toStoreActivityListQuery(request);</span></span></code></pre></div><p>更多的用法可以问一下大模型</p><p>目前 soms 项目中的用法，注意一下第一个和第三个就行，后面如果其他项目有用到，自己注意一下就行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;annotationProcessorPaths&gt;</span></span>
<span class="line"><span>    &lt;!-- MapStruct Plus 注解处理器 --&gt;</span></span>
<span class="line"><span>    &lt;path&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;io.github.linpeilie&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mapstruct-plus-processor&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${mapstruct-plus.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/path&gt;</span></span>
<span class="line"><span>    &lt;!-- Lombok 注解处理器 --&gt;</span></span>
<span class="line"><span>    &lt;path&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${lombok.version}&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/path&gt;</span></span>
<span class="line"><span>    &lt;!-- 解决 Lombok 与 MapStruct 兼容问题的处理器 --&gt;</span></span>
<span class="line"><span>    &lt;path&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;lombok-mapstruct-binding&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;0.2.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/path&gt;</span></span>
<span class="line"><span>&lt;/annotationProcessorPaths&gt;</span></span></code></pre></div><p>看在跟目录pom下是引入了 相关的启动器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;  </span></span>
<span class="line"><span>    &lt;groupId&gt;io.github.linpeilie&lt;/groupId&gt;  </span></span>
<span class="line"><span>    &lt;artifactId&gt;mapstruct-plus-spring-boot-starter&lt;/artifactId&gt;  </span></span>
<span class="line"><span>    &lt;version&gt;\${mapstruct-plus.version}&lt;/version&gt;  </span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div>`,10)])])}const v=a(e,[["render",l]]);export{u as __pageData,v as default};
