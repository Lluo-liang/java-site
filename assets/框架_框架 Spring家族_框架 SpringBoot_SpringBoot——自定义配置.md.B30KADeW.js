import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"SpringBoot——自定义配置","description":"","frontmatter":{"title":"SpringBoot——自定义配置","excerpt":"摘要","date":"2025-02-16 08:09:36","updated":"2025-02-16 08:09:36"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 SpringBoot/SpringBoot——自定义配置.md","filePath":"框架/框架 Spring家族/框架 SpringBoot/SpringBoot——自定义配置.md","lastUpdated":null}'),i={name:"框架/框架 Spring家族/框架 SpringBoot/SpringBoot——自定义配置.md"};function l(t,n,c,r,o,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h3 id="读取配置文件的自定义属性-多个" tabindex="-1">读取配置文件的自定义属性（多个） <a class="header-anchor" href="#读取配置文件的自定义属性-多个" aria-label="Permalink to &quot;读取配置文件的自定义属性（多个）&quot;">​</a></h3><p>比如说我们想给Spring Security配置一个白名单，访问这些路径无需授权，我们可以先在<code>application.yml</code>中添添加如下配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>secure:</span></span>
<span class="line"><span>  ignored:</span></span>
<span class="line"><span>    urls:</span></span>
<span class="line"><span>      - /</span></span>
<span class="line"><span>      - /swagger-ui/</span></span>
<span class="line"><span>      - /*.html</span></span>
<span class="line"><span>      - /favicon.ico</span></span>
<span class="line"><span>      - /**/*.html</span></span>
<span class="line"><span>      - /**/*.css</span></span>
<span class="line"><span>      - /**/*.js</span></span>
<span class="line"><span>      - /swagger-resources/**</span></span>
<span class="line"><span>      - /v2/api-docs/**</span></span></code></pre></div><p>之后创建一个属性类，使用<code>@ConfigurationProperties</code>注解配置好这些属性的前缀，再定义一个<code>urls</code>属性与属性文件相对应即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description 用于配置白名单资源路径</span></span>
<span class="line"><span> * @date 2018/11/5</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Getter</span></span>
<span class="line"><span>@Setter</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@ConfigurationProperties(prefix = &quot;secure.ignored&quot;)</span></span>
<span class="line"><span>public class IgnoreUrlsConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;String&gt; urls = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="自定义bean覆盖自动配置" tabindex="-1">自定义Bean覆盖自动配置 <a class="header-anchor" href="#自定义bean覆盖自动配置" aria-label="Permalink to &quot;自定义Bean覆盖自动配置&quot;">​</a></h3><p>这里先说明两个概念，一个是自定义配置的使用；另外一个就是这一个章节打算讲述的自定义 Bean；</p><p>自定义配置： 通过外部化配置（如 <code>application.yml</code>、<code>@ConfigurationProperties</code>）或编程式配置（如 <code>@Configuration</code> 类）来修改应用行为，<strong>不涉及覆盖 Bean</strong>。</p><p>常见的一些场景：配置文件中修改端口号、数据库连接信息等；</p><p>TODO 后面继续看（deepseek继续）</p><p>虽然自动配置很好用，但有时候自动配置的Bean并不能满足你的需要，我们可以自己定义相同的Bean来覆盖自动配置中的Bean。</p><p>例如当我们使用Spring Security来保护应用安全时，由于自动配置并不能满足我们的需求，我们需要自定义基于SecurityFilterChain对象的配置。这里我们自定义了很多配置，比如将基于Session的认证改为使用JWT令牌、配置了一些路径的无授权访问，自定义了登录接口路径，禁用了csrf功能等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description SpringSecurity的配置</span></span>
<span class="line"><span> * @date 2018/4/26</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebSecurity</span></span>
<span class="line"><span>@EnableGlobalMethodSecurity(prePostEnabled = true)</span></span>
<span class="line"><span>public class SecurityConfig{</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UmsAdminService adminService;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RestfulAccessDeniedHandler restfulAccessDeniedHandler;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RestAuthenticationEntryPoint restAuthenticationEntryPoint;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private IgnoreUrlsConfig ignoreUrlsConfig;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {</span></span>
<span class="line"><span>        List&lt;String&gt; urls = ignoreUrlsConfig.getUrls();</span></span>
<span class="line"><span>        String[] urlArray = ArrayUtil.toArray(urls, String.class);</span></span>
<span class="line"><span>        httpSecurity.csrf()// 由于使用的是JWT，我们这里不需要csrf</span></span>
<span class="line"><span>                .disable()</span></span>
<span class="line"><span>                .sessionManagement()// 基于token，所以不需要session</span></span>
<span class="line"><span>                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)</span></span>
<span class="line"><span>                .and()</span></span>
<span class="line"><span>                .authorizeRequests()</span></span>
<span class="line"><span>                .antMatchers(HttpMethod.GET,urlArray) // 允许对于网站静态资源的无授权访问</span></span>
<span class="line"><span>                .permitAll()</span></span>
<span class="line"><span>                .antMatchers(HttpMethod.POST,urlArray) // 允许对于网站静态资源的无授权访问</span></span>
<span class="line"><span>                .permitAll()</span></span>
<span class="line"><span>                .antMatchers(&quot;/admin/login&quot;)// 对登录注册要允许匿名访问</span></span>
<span class="line"><span>                .permitAll()</span></span>
<span class="line"><span>                .antMatchers(HttpMethod.OPTIONS)//跨域请求会先进行一次options请求</span></span>
<span class="line"><span>                .permitAll()</span></span>
<span class="line"><span>                .anyRequest()// 除上面外的所有请求全部需要鉴权认证</span></span>
<span class="line"><span>                .authenticated();</span></span>
<span class="line"><span>        // 禁用缓存</span></span>
<span class="line"><span>        httpSecurity.headers().cacheControl();</span></span>
<span class="line"><span>        // 添加JWT filter</span></span>
<span class="line"><span>        httpSecurity.addFilterBefore(jwtAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);</span></span>
<span class="line"><span>        //添加自定义未授权和未登录结果返回</span></span>
<span class="line"><span>        httpSecurity.exceptionHandling()</span></span>
<span class="line"><span>                .accessDeniedHandler(restfulAccessDeniedHandler)</span></span>
<span class="line"><span>                .authenticationEntryPoint(restAuthenticationEntryPoint);</span></span>
<span class="line"><span>        return httpSecurity.build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public PasswordEncoder passwordEncoder() {</span></span>
<span class="line"><span>        return new BCryptPasswordEncoder();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public UserDetailsService userDetailsService() {</span></span>
<span class="line"><span>        //获取登录用户信息</span></span>
<span class="line"><span>        return username -&gt; {</span></span>
<span class="line"><span>            AdminUserDetails admin = adminService.getAdminByUsername(username);</span></span>
<span class="line"><span>            if (admin != null) {</span></span>
<span class="line"><span>                return admin;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            throw new UsernameNotFoundException(&quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter() {</span></span>
<span class="line"><span>        return new JwtAuthenticationTokenFilter();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>讲解说明：</p><p>核心概念：自定义Bean覆盖自动配置</p><ul><li><strong>自动配置的局限性</strong>：Spring Boot的自动配置虽然方便，但可能无法满足特定需求。</li><li><strong>覆盖机制</strong>：通过显式定义相同类型的Bean（使用<code>@Bean</code>注解）可以覆盖自动配置提供的默认Bean。</li></ul>`,16)])])}const h=s(i,[["render",l]]);export{g as __pageData,h as default};
