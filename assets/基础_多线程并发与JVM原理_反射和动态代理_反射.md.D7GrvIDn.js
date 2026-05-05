import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const d=JSON.parse('{"title":"反射","description":"","frontmatter":{"title":"反射","excerpt":"反射的常用用法和相关记录","date":"2024-04-24 10:20:18","updated":"2024-04-24 10:20:18"},"headers":[],"relativePath":"基础/多线程并发与JVM原理/反射和动态代理/反射.md","filePath":"基础/多线程并发与JVM原理/反射和动态代理/反射.md","lastUpdated":null}'),l={name:"基础/多线程并发与JVM原理/反射和动态代理/反射.md"};function i(t,n,c,o,r,u){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h4 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h4><p>反射定义： 在一个类中 定义了一个私有属性/方法，但是使用反射能使所有属性都访问到，会破解私有属性</p><p>反射的应用场景：</p><p>反编译： .class → .java</p><ul><li>通过反射机制访问 java 对象的属性，方法，构造方法等</li><li>反射技术的使用 <ul><li><code>Class</code>类 代表类的实体，在运行的Java应用程序中表示类和接口</li><li><code>Field</code>类 代表类的成员变量（成员变量也称为类的属性）</li><li><code>Method</code>类 代表类的方法</li><li><code>Constructor</code>类 代表类的构造方法 <ul><li>1.<code>getField</code>、<code>getMethod</code>和<code>getCostructor</code>方法可以获得指定名字的域、方法和构造器</li><li>2.<code>getFields</code>、<code>getMethods</code>和<code>getCostructors</code>方法可以获得类提供的public域、方法和构造器数组，其中包括超类的共有成员</li><li>3.<code>getDeclatedFields</code>、<code>getDeclatedMethods</code>和<code>getDeclaredConstructors</code>方法可以获得类中声明的全部域、方法和构造器，其中包括私有和受保护的成员，但不包括超类的成员。</li></ul></li></ul></li></ul><p>反射的基础使用: <a href="https://www.cnblogs.com/cg-ww/p/15609172.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/cg-ww/p/15609172.html</a></p><p>演示使用类：</p><p>User</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.reflect;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File User.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/24 10:42</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    private String email;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 无参数构造器</span></span>
<span class="line"><span>    public User() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 带所有属性的构造器</span></span>
<span class="line"><span>    public User(String name, int age, String email) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>        this.email = email;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int add(int a,int b ){</span></span>
<span class="line"><span>        return a + b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private int subtract(int a,int b ){</span></span>
<span class="line"><span>        return a - b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Getter 和 Setter 方法</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int getAge() {</span></span>
<span class="line"><span>        return age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setAge(int age) {</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getEmail() {</span></span>
<span class="line"><span>        return email;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setEmail(String email) {</span></span>
<span class="line"><span>        this.email = email;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 重写 toString 方法以便于打印用户信息</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;User{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &quot;, email=&#39;&quot; + email + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="reflectionexample" tabindex="-1">ReflectionExample <a class="header-anchor" href="#reflectionexample" aria-label="Permalink to &quot;ReflectionExample&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.reflect;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File ReflectionExample.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/24 10:40</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>import java.lang.reflect.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ReflectionExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            System.out.println(&quot;无参构造:&quot;);</span></span>
<span class="line"><span>            //加载 User 类</span></span>
<span class="line"><span>            Class&lt;?&gt; cls = Class.forName(&quot;com.ruoyi.luoqi.reflect.User&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Constructor&lt;?&gt; constructor = cls.getConstructor();  // 获取无参公共构造函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(constructor);</span></span>
<span class="line"><span>            System.out.println(&quot;获取公共访问字段：&quot;);</span></span>
<span class="line"><span>            //Class.getFields() 方法返回的是类中所有可访问的公共字段（public fields），包括从超类继承来的公共字段</span></span>
<span class="line"><span>            Field[] fields = cls.getFields();</span></span>
<span class="line"><span>            System.out.println(fields.length);</span></span>
<span class="line"><span>            for(Field d : fields) {</span></span>
<span class="line"><span>                System.out.println(d.getName());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.out.println(&quot;---------&quot;);</span></span>
<span class="line"><span>            System.out.println(&quot;获取全部访问字段：&quot;);</span></span>
<span class="line"><span>            //获得类中声明的全部域，其中包括私有和受保护的成员，但不包括超类的成员。</span></span>
<span class="line"><span>            Field[] declaredFields = cls.getDeclaredFields();</span></span>
<span class="line"><span>            for(Field d : declaredFields) {</span></span>
<span class="line"><span>                System.out.println(d.getName());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(&quot;对实例进行属性赋值操作&quot;);</span></span>
<span class="line"><span>            Object instance = constructor.newInstance();  // 创建 User 类的一个实例</span></span>
<span class="line"><span>            //反射给属性赋值</span></span>
<span class="line"><span>            //查找到属性</span></span>
<span class="line"><span>            Field pubUserName = cls.getDeclaredField(&quot;name&quot;);</span></span>
<span class="line"><span>            //指定给哪个userEntity对象赋值</span></span>
<span class="line"><span>            //这是给公有属性赋值，默认只能访问公有属性，如果要访问私有属性，会报错</span></span>
<span class="line"><span>            //反射没有权限访问私有属性，如果需要访问需要设置权限setAccessible</span></span>
<span class="line"><span>            //设置 accessible 为 true，允许访问私有字段</span></span>
<span class="line"><span>            pubUserName.setAccessible(true);</span></span>
<span class="line"><span>            pubUserName.set(instance,&quot;test&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(instance);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(&quot;有参构造:&quot;);</span></span>
<span class="line"><span>            // 获取接受 String 和 int 和 String 三个参数的构造函数</span></span>
<span class="line"><span>            Constructor&lt;?&gt; constructor2 = cls.getConstructor(String.class, int.class,String.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 使用获取的构造函数创建 User 类的实例</span></span>
<span class="line"><span>            Object userInstance = constructor2.newInstance(&quot;John Doe&quot;, 30,&quot;test@163.com&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(userInstance);</span></span>
<span class="line"><span>            System.out.println(&quot;---------&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(&quot;反射机制的三种方式创建对象:&quot;);</span></span>
<span class="line"><span>            //反射机制的三种方式创建对象</span></span>
<span class="line"><span>            //第一种方式：通过new出来的对象获取class</span></span>
<span class="line"><span>            User userEntity = new User();</span></span>
<span class="line"><span>            Class userClass = userEntity.getClass();</span></span>
<span class="line"><span>            // 默认执行无参构造函数</span></span>
<span class="line"><span>            User user1 = (User) userClass.newInstance();</span></span>
<span class="line"><span>            System.out.println(user1==userEntity);//false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //第二种方式：直接获取class</span></span>
<span class="line"><span>            Class userClass2 = User.class;</span></span>
<span class="line"><span>            User user2 = (User) userClass2.newInstance();</span></span>
<span class="line"><span>            System.out.println(user2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //第三种方式：通过完整类名获取class（常用）</span></span>
<span class="line"><span>            Class&lt;?&gt; aClass = Class.forName(&quot;com.ruoyi.luoqi.reflect.User&quot;);</span></span>
<span class="line"><span>            User user3 = (User) aClass.newInstance();</span></span>
<span class="line"><span>            System.out.println(user3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            System.out.println(&quot;方法的基础使用：&quot;);</span></span>
<span class="line"><span>            //方法的基础使用</span></span>
<span class="line"><span>            //getMethod: 用于获取类的公共方法（public methods），包括从父类继承的公共方法</span></span>
<span class="line"><span>            Method method = aClass.getMethod(&quot;add&quot;, int.class,int.class);</span></span>
<span class="line"><span>            //调用方法</span></span>
<span class="line"><span>            Integer invoke = (Integer)method.invoke(user3, 1, 2);</span></span>
<span class="line"><span>            System.out.println(invoke);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //getDeclaredMethod 用于获取类中声明的所有方法，不考虑它们的访问级别（即可以是公共、私有、保护或包内访问）</span></span>
<span class="line"><span>            Method method2 = aClass.getDeclaredMethod(&quot;subtract&quot;, int.class,int.class);</span></span>
<span class="line"><span>            //调用方法</span></span>
<span class="line"><span>            //如果需要私有方法，需要加上 setAccessible</span></span>
<span class="line"><span>            method2.setAccessible(true);</span></span>
<span class="line"><span>            Integer invoke2 = (Integer)method2.invoke(user3, 2, 1);</span></span>
<span class="line"><span>            System.out.println(invoke2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="自定义注解使用" tabindex="-1">自定义注解使用 <a class="header-anchor" href="#自定义注解使用" aria-label="Permalink to &quot;自定义注解使用&quot;">​</a></h4><p>这部分代码是蘑菇博客中关于日志记录自定义注解的使用：OperationLogger</p><p>OperationLogger</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.moxi.mogublog.admin.annotion.OperationLogger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.moxi.mougblog.base.enums.PlatformEnum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.annotation.ElementType;</span></span>
<span class="line"><span>import java.lang.annotation.Retention;</span></span>
<span class="line"><span>import java.lang.annotation.RetentionPolicy;</span></span>
<span class="line"><span>import java.lang.annotation.Target;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 标注该该注解的方法需要记录操作日志</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 陌溪</span></span>
<span class="line"><span> * @date 2020年3月23日09:35:57</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface OperationLogger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 业务名称</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String value() default &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 平台，默认为WEB端</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    PlatformEnum platform() default PlatformEnum.ADMIN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 是否将当前日志记录到数据库中</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    boolean save() default true;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>切面：LoggerAspect</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.moxi.mogublog.admin.annotion.OperationLogger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson.JSON;</span></span>
<span class="line"><span>import com.alibaba.fastjson.serializer.SerializerFeature;</span></span>
<span class="line"><span>import com.moxi.mogublog.admin.global.RedisConf;</span></span>
<span class="line"><span>import com.moxi.mogublog.admin.global.SysConf;</span></span>
<span class="line"><span>import com.moxi.mogublog.commons.config.security.SecurityUser;</span></span>
<span class="line"><span>import com.moxi.mogublog.commons.entity.ExceptionLog;</span></span>
<span class="line"><span>import com.moxi.mogublog.utils.*;</span></span>
<span class="line"><span>import com.moxi.mougblog.base.global.Constants;</span></span>
<span class="line"><span>import com.moxi.mougblog.base.holder.RequestHolder;</span></span>
<span class="line"><span>import com.moxi.mougblog.base.util.RequestUtil;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.aspectj.lang.JoinPoint;</span></span>
<span class="line"><span>import org.aspectj.lang.ProceedingJoinPoint;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.AfterThrowing;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Around;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Aspect;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Pointcut;</span></span>
<span class="line"><span>import org.json.simple.JSONObject;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;</span></span>
<span class="line"><span>import org.springframework.security.core.context.SecurityContextHolder;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import java.lang.reflect.Method;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 日志切面</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 陌溪</span></span>
<span class="line"><span> * @date 2020年12月31日21:26:04</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class LoggerAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    RedisUtil redisUtil;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    ThreadPoolTaskExecutor threadPoolTaskExecutor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 开始时间</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Date startTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //使用 @Pointcut 注解定义了一个切点，用来匹配带有 OperationLogger 注解的方法。</span></span>
<span class="line"><span>    @Pointcut(value = &quot;@annotation(operationLogger)&quot;)</span></span>
<span class="line"><span>    public void pointcut(OperationLogger operationLogger) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //环绕通知包装了目标方法的执行，它首先保存了方法调用的开始时间，然后执行方法，并在方法执行后进行日志记录。</span></span>
<span class="line"><span>    @Around(value = &quot;pointcut(operationLogger)&quot;)</span></span>
<span class="line"><span>    public Object doAround(ProceedingJoinPoint joinPoint, OperationLogger operationLogger) throws Throwable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        startTime = new Date();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //先执行业务</span></span>
<span class="line"><span>        Object result = joinPoint.proceed();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 日志收集</span></span>
<span class="line"><span>            //在 handle 方法中，可以通过反射获取当前执行的方法，获取方法上的 OperationLogger 注解，并根据注解的属性决定如何记录日志。</span></span>
<span class="line"><span>            handle(joinPoint);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;日志记录出错!&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //当被注解的方法抛出异常时，这个通知会捕获异常，并记录异常日志。</span></span>
<span class="line"><span>    @AfterThrowing(value = &quot;pointcut(operationLogger)&quot;, throwing = &quot;e&quot;)</span></span>
<span class="line"><span>    public void doAfterThrowing(JoinPoint joinPoint, OperationLogger operationLogger, Throwable e) throws Exception {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ExceptionLog exception = new ExceptionLog();</span></span>
<span class="line"><span>        HttpServletRequest request = RequestHolder.getRequest();</span></span>
<span class="line"><span>        String ip = IpUtils.getIpAddr(request);</span></span>
<span class="line"><span>        exception.setIp(ip);</span></span>
<span class="line"><span>        String operationName = AspectUtil.INSTANCE.parseParams(joinPoint.getArgs(), operationLogger.value());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //从Redis中获取IP来源</span></span>
<span class="line"><span>        String jsonResult = redisUtil.get(RedisConf.IP_SOURCE + Constants.SYMBOL_COLON + ip);</span></span>
<span class="line"><span>        if (StringUtils.isEmpty(jsonResult)) {</span></span>
<span class="line"><span>            String addresses = IpUtils.getAddresses(SysConf.IP + SysConf.EQUAL_TO + ip, SysConf.UTF_8);</span></span>
<span class="line"><span>            if (StringUtils.isNotEmpty(addresses)) {</span></span>
<span class="line"><span>                exception.setIpSource(addresses);</span></span>
<span class="line"><span>                redisUtil.setEx(RedisConf.IP_SOURCE + Constants.SYMBOL_COLON + ip, addresses, 24, TimeUnit.HOURS);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            exception.setIpSource(jsonResult);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //设置请求信息</span></span>
<span class="line"><span>        exception.setIp(ip);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //设置调用的方法</span></span>
<span class="line"><span>        exception.setMethod(joinPoint.getSignature().getName());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        exception.setExceptionJson(JSON.toJSONString(e,</span></span>
<span class="line"><span>                SerializerFeature.DisableCircularReferenceDetect,</span></span>
<span class="line"><span>                SerializerFeature.WriteMapNullValue));</span></span>
<span class="line"><span>        exception.setExceptionMessage(e.getMessage());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        exception.setOperation(operationName);</span></span>
<span class="line"><span>        exception.setCreateTime(new Date());</span></span>
<span class="line"><span>        exception.setUpdateTime(new Date());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        exception.insert();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 管理员日志收集</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param point</span></span>
<span class="line"><span>     * @throws Exception</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void handle(ProceedingJoinPoint point) throws Exception {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        HttpServletRequest request = RequestHolder.getRequest();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Method currentMethod = AspectUtil.INSTANCE.getMethod(point);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //获取操作名称</span></span>
<span class="line"><span>        OperationLogger annotation = currentMethod.getAnnotation(OperationLogger.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        boolean save = annotation.save();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String bussinessName = AspectUtil.INSTANCE.parseParams(point.getArgs(), annotation.value());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String ua = RequestUtil.getUa();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        log.info(&quot;{} | {} - {} {} - {}&quot;, bussinessName, IpUtils.getIpAddr(request), RequestUtil.getMethod(), RequestUtil.getRequestUrl(), ua);</span></span>
<span class="line"><span>        if (!save) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取参数名称和值</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; nameAndArgsMap = AopUtils.getFieldsName(point);</span></span>
<span class="line"><span>        // 当前操作用户</span></span>
<span class="line"><span>        SecurityUser securityUser = (SecurityUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();</span></span>
<span class="line"><span>        String paramsJson = JSONObject.toJSONString(nameAndArgsMap);</span></span>
<span class="line"><span>        String type = request.getMethod();</span></span>
<span class="line"><span>        String ip = IpUtils.getIpAddr(request);</span></span>
<span class="line"><span>        String url = request.getRequestURI();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 异步存储日志</span></span>
<span class="line"><span>        threadPoolTaskExecutor.execute(</span></span>
<span class="line"><span>                new SysLogHandle(ip, type, url, securityUser,</span></span>
<span class="line"><span>                        paramsJson, point.getTarget().getClass().getName(),</span></span>
<span class="line"><span>                        point.getSignature().getName(), bussinessName,</span></span>
<span class="line"><span>                        startTime, redisUtil));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>具体内容可以看一下实际代码，同时后续有其他示例，可以继续往下写。</p>`,18)])])}const m=s(l,[["render",i]]);export{d as __pageData,m as default};
