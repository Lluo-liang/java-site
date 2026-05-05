import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const _=JSON.parse('{"title":"Apollo——使用技巧","description":"","frontmatter":{"title":"Apollo——使用技巧","excerpt":"摘要","date":"2025-04-02 11:40:48","updated":"2025-04-02 11:40:48"},"headers":[],"relativePath":"框架/微服务&分布式/Apollo配置使用/Apollo——使用技巧.md","filePath":"框架/微服务&分布式/Apollo配置使用/Apollo——使用技巧.md","lastUpdated":null}'),l={name:"框架/微服务&分布式/Apollo配置使用/Apollo——使用技巧.md"};function t(i,s,o,r,c,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>教程文件： <a href="https://www.apolloconfig.com/#/zh/README" target="_blank" rel="noreferrer">https://www.apolloconfig.com/#/zh/README</a></p><p>JSON的话可以注入一下String类型，获取key-value字段后程序再做反序列化操作；</p><p>依赖注入写法可以写一个公共配置属性类，然后注入这个类就行，同时加一个自动刷新的配置+配置类Bean注入的方式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Data  </span></span>
<span class="line"><span>@ConfigurationProperties(prefix = &quot;mrs&quot;)  </span></span>
<span class="line"><span>public class MrsActivityConfigProperties {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Data  </span></span>
<span class="line"><span>    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)  </span></span>
<span class="line"><span>    public static class MrsIsKeepAudit {  </span></span>
<span class="line"><span>        Long organizerConfigId;  </span></span>
<span class="line"><span>        Long typeConfigId;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    /**  </span></span>
<span class="line"><span>     * 活动库存填写下限  </span></span>
<span class="line"><span>     */  </span></span>
<span class="line"><span>    private Integer reportInventoryLowerLimit = 3;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //改为支持多个配置，改为获取JSON数据  </span></span>
<span class="line"><span>    private String mrsIsKeepAudit;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public List&lt;MrsIsKeepAudit&gt; getMrsIsKeepAuditList() {  </span></span>
<span class="line"><span>        return JsonTools.defaultMapper().fromJson(mrsIsKeepAudit, new TypeReference&lt;List&lt;MrsIsKeepAudit&gt;&gt;() {});  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)])])}const u=n(l,[["render",t]]);export{_ as __pageData,u as default};
