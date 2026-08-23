import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const m=JSON.parse('{"title":"Stream 流使用","description":"","frontmatter":{"title":"Stream 流使用","excerpt":"记录一下Stream的使用","date":"2025-02-03 14:43:31","updated":"2025-02-03 14:43:31"},"headers":[],"relativePath":"基础/新特性/Stream 流使用.md","filePath":"基础/新特性/Stream 流使用.md","lastUpdated":null}'),l={name:"基础/新特性/Stream 流使用.md"};function i(c,s,t,r,o,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>Stream 指的是来自数据源的元素队列</p><p>Stream（流）是一个来自数据源的元素队列，它可以支持聚合操作。</p><ul><li>数据源：流的数据来源，构造Stream对象的数据源，比如通过一个List来构造Stream对象，这个List就是数据源；</li><li>聚合操作：对Stream对象进行处理后使得Stream对象返回指定规则数据的操作称之为聚合操作，比如filter、map、limit、sorted等都是聚合操作。</li></ul><p>聚合操作</p><ul><li>filter</li><li>map <ul><li>对Stream中的元素进行转换处理后获取，比如可以将UmsMenu对象转换成Long对象。我们经常会有这样的需求：需要把某些对象的id提取出来，然后根据这些id去查询其他对象，这时可以使用此方法。</li></ul></li><li>limit <ul><li>从Stream中获取指定数量的元素</li></ul></li><li>count <ul><li>仅获取Stream中元素的个数。</li></ul></li><li>sorted <ul><li>对Stream中元素按指定规则进行排序</li></ul></li><li>skip <ul><li>跳过指定个数的Stream中元素，获取后面的元素</li></ul></li><li>collect <ul><li>集合转换</li></ul></li></ul><hr><p>Stream 结合使用记录</p><p>Stream 和 Spring AOP 的结合使用</p><h3 id="使用redis-aop优化权限管理功能" tabindex="-1">使用Redis+AOP优化权限管理功能 <a class="header-anchor" href="#使用redis-aop优化权限管理功能" aria-label="Permalink to &quot;使用Redis+AOP优化权限管理功能&quot;">​</a></h3><p>背景: 将用户信息存入到缓存中,避免频繁出现数据库(读多写少)</p><p>原方法:</p><p>执行数据库查询操作: 主要是获取用户信息和获取用户的资源信息这两个操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * UmsAdminService实现类</span></span>
<span class="line"><span> * Created by macro on 2018/4/26.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public UserDetails loadUserByUsername(String username){</span></span>
<span class="line"><span>        //获取用户信息</span></span>
<span class="line"><span>        UmsAdmin admin = getAdminByUsername(username);</span></span>
<span class="line"><span>        if (admin != null) {</span></span>
<span class="line"><span>            //获取用户的资源信息</span></span>
<span class="line"><span>            List&lt;UmsResource&gt; resourceList = getResourceList(admin.getId());</span></span>
<span class="line"><span>            return new AdminUserDetails(admin,resourceList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        throw new UsernameNotFoundException(&quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>优化点:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * UmsAdminService实现类</span></span>
<span class="line"><span> * Created by macro on 2018/4/26.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsAdminServiceImpl implements UmsAdminService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public UmsAdmin getAdminByUsername(String username) {</span></span>
<span class="line"><span>        //先从缓存中获取数据</span></span>
<span class="line"><span>        UmsAdmin admin = getCacheService().getAdmin(username);</span></span>
<span class="line"><span>        if(admin!=null) return  admin;</span></span>
<span class="line"><span>        //缓存中没有从数据库中获取</span></span>
<span class="line"><span>        UmsAdminExample example = new UmsAdminExample();</span></span>
<span class="line"><span>        example.createCriteria().andUsernameEqualTo(username);</span></span>
<span class="line"><span>        List&lt;UmsAdmin&gt; adminList = adminMapper.selectByExample(example);</span></span>
<span class="line"><span>        if (adminList != null &amp;&amp; adminList.size() &gt; 0) {</span></span>
<span class="line"><span>            admin = adminList.get(0);</span></span>
<span class="line"><span>            //将数据库中的数据存入缓存中</span></span>
<span class="line"><span>            getCacheService().setAdmin(admin);</span></span>
<span class="line"><span>            return admin;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;UmsResource&gt; getResourceList(Long adminId) {</span></span>
<span class="line"><span>        //先从缓存中获取数据</span></span>
<span class="line"><span>        List&lt;UmsResource&gt; resourceList = getCacheService().getResourceList(adminId);</span></span>
<span class="line"><span>        if(CollUtil.isNotEmpty(resourceList)){</span></span>
<span class="line"><span>            return  resourceList;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //缓存中没有从数据库中获取</span></span>
<span class="line"><span>        resourceList = adminRoleRelationDao.getResourceList(adminId);</span></span>
<span class="line"><span>        if(CollUtil.isNotEmpty(resourceList)){</span></span>
<span class="line"><span>            //将数据库中的数据存入缓存中</span></span>
<span class="line"><span>            getCacheService().setResourceList(adminId,resourceList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return resourceList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public UmsAdminCacheService getCacheService() {</span></span>
<span class="line"><span>        return SpringUtil.getBean(UmsAdminCacheService.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 Spring Cache 和 RedisTemplate 的区别:</p><p>上面这种查询操作其实用Spring Cache来操作更简单，直接使用@Cacheable即可实现，为什么还要使用 RedisTemplate 来直接操作呢？因为作为缓存，我们所希望的是，如果Redis宕机了，我们的业务逻辑不会有影响，而使用Spring Cache来实现的话，当Redis宕机以后，用户的登录等种种操作就会都无法进行了。</p><p>当我们修改用户信息和资源信息时都需要删除缓存中的数据，具体什么时候删除，查看缓存业务类的注释即可。</p><blockquote><p>使用AOP处理缓存操作异常</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Redis缓存切面，防止Redis宕机影响正常业务逻辑</span></span>
<span class="line"><span> * Created by macro on 2020/3/17.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Order(2)</span></span>
<span class="line"><span>public class RedisCacheAspect {</span></span>
<span class="line"><span>    private static Logger LOGGER = LoggerFactory.getLogger(RedisCacheAspect.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(public * com.macro.mall.portal.service.*CacheService.*(..)) || execution(public * com.macro.mall.service.*CacheService.*(..))&quot;)</span></span>
<span class="line"><span>    public void cacheAspect() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;cacheAspect()&quot;)</span></span>
<span class="line"><span>    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        Object result = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            result = joinPoint.proceed();</span></span>
<span class="line"><span>        } catch (Throwable throwable) {</span></span>
<span class="line"><span>            LOGGER.error(throwable.getMessage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样处理之后，就算我们的Redis宕机了，我们的业务逻辑也能正常执行。</p><p>不过并不是所有的方法都需要处理异常的，比如我们的验证码存储，如果我们的Redis宕机了，我们的验证码存储接口需要的是报错，而不是返回执行成功。</p><p>对于上面这种需求我们可以通过自定义注解来完成，首先我们自定义一个<code>CacheException</code>注解，如果方法上面有这个注解，发生异常则直接抛出。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 自定义注解，有该注解的缓存方法会抛出异常</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface CacheException {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>之后需要改造下我们的切面类，对于有<code>@CacheException</code>注解的方法，如果发生异常直接抛出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Redis缓存切面，防止Redis宕机影响正常业务逻辑</span></span>
<span class="line"><span> * Created by macro on 2020/3/17.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Order(2)</span></span>
<span class="line"><span>public class RedisCacheAspect {</span></span>
<span class="line"><span>    private static Logger LOGGER = LoggerFactory.getLogger(RedisCacheAspect.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(public * com.macro.mall.portal.service.*CacheService.*(..)) || execution(public * com.macro.mall.service.*CacheService.*(..))&quot;)</span></span>
<span class="line"><span>    public void cacheAspect() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;cacheAspect()&quot;)</span></span>
<span class="line"><span>    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        Signature signature = joinPoint.getSignature();</span></span>
<span class="line"><span>        MethodSignature methodSignature = (MethodSignature) signature;</span></span>
<span class="line"><span>        Method method = methodSignature.getMethod();</span></span>
<span class="line"><span>        Object result = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            result = joinPoint.proceed();</span></span>
<span class="line"><span>        } catch (Throwable throwable) {</span></span>
<span class="line"><span>            //有CacheException注解的方法需要抛出异常</span></span>
<span class="line"><span>            if (method.isAnnotationPresent(CacheException.class)) {</span></span>
<span class="line"><span>                throw throwable;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                LOGGER.error(throwable.getMessage());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来我们需要把<code>@CacheException</code>注解应用到存储和获取验证码的方法上去，</p><p>这里需要注意的是要应用在实现类上而不是接口上，因为<code>isAnnotationPresent</code>方法只能获取到当前方法上的注解，而不能获取到它实现接口方法上的注解。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * UmsMemberCacheService实现类</span></span>
<span class="line"><span> * Created by macro on 2020/3/14.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UmsMemberCacheServiceImpl implements UmsMemberCacheService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RedisService redisService;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @CacheException</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void setAuthCode(String telephone, String authCode) {</span></span>
<span class="line"><span>        String key = REDIS_DATABASE + &quot;:&quot; + REDIS_KEY_AUTH_CODE + &quot;:&quot; + telephone;</span></span>
<span class="line"><span>        redisService.set(key,authCode,REDIS_EXPIRE_AUTH_CODE);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @CacheException</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String getAuthCode(String telephone) {</span></span>
<span class="line"><span>        String key = REDIS_DATABASE + &quot;:&quot; + REDIS_KEY_AUTH_CODE + &quot;:&quot; + telephone;</span></span>
<span class="line"><span>        return (String) redisService.get(key);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对于影响性能的，频繁查询数据库的操作，我们可以通过Redis作为缓存来优化。缓存操作不该影响正常业务逻辑，我们可以使用AOP来统一处理缓存操作中的异常。</p>`,30)])])}const h=n(l,[["render",i]]);export{m as __pageData,h as default};
