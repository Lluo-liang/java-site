import{_ as a,o as n,c as i,am as p}from"./chunks/framework.CiF4W93w.js";const c=JSON.parse('{"title":"Lombok 使用指南","description":"","frontmatter":{"title":"Lombok 使用指南","date":"2025-05-25 16:22:09","updated":"2025-05-25 16:22:09"},"headers":[],"relativePath":"框架/企业开发框架/Lombok 使用指南.md","filePath":"框架/企业开发框架/Lombok 使用指南.md","lastUpdated":null}'),l={name:"框架/企业开发框架/Lombok 使用指南.md"};function e(t,s,h,k,r,E){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>Lombok 是一个 Java 库，它通过注解的方式简化了 Java 代码的编写，减少了样板代码的冗余。使用 Lombok，开发者可以通过简单的注解自动生成 getter、setter、构造函数、toString 等方法，从而显著提高开发效率。Lombok 广泛应用于 Java 项目中，尤其是在需要大量 POJO（Plain Old Java Object）类的情况下。</p><p>通过Lombok的注解，你可以不用再写getter、setter、equals等方法，Lombok将在编译时为你自动生成。</p><h3 id="集成" tabindex="-1">集成 <a class="header-anchor" href="#集成" aria-label="Permalink to &quot;集成&quot;">​</a></h3><h4 id="lombok-的安装与配置" tabindex="-1">Lombok 的安装与配置 <a class="header-anchor" href="#lombok-的安装与配置" aria-label="Permalink to &quot;Lombok 的安装与配置&quot;">​</a></h4><p>首先我们需要在IDEA中安装好Lombok插件，如果你使用的是IDEA 2020.3以上版本，则Lombok插件已经内置，无需安装。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250525155405.png" alt="image.png"></p><p>在开始使用 Lombok 之前，需要在项目中引入 Lombok 依赖。</p><p>在项目的pom.xml文件中添加Lombok依赖，SpringBoot 2.1.x版本后无需指定Lombok版本，SpringBoot在<code>spring-boot-dependencies</code>中已经内置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!--lombok依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h3 id="常用-lombok-注解" tabindex="-1">常用 Lombok 注解 <a class="header-anchor" href="#常用-lombok-注解" aria-label="Permalink to &quot;常用 Lombok 注解&quot;">​</a></h3><p>Lombok 提供了多种注解来简化代码编写。以下是几个常用的注解及其功能：</p><h4 id="val" tabindex="-1">val <a class="header-anchor" href="#val" aria-label="Permalink to &quot;val&quot;">​</a></h4><p>使用val注解可以取代任意类型作为局部变量，这样我们就不用写复杂的ArrayList和Map.Entry类型了，具体例子如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description val注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/16</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class ValExample {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void example() {</span></span>
<span class="line"><span>        //val代替ArrayList&lt;String&gt;和String类型</span></span>
<span class="line"><span>        val example = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span>        example.add(&quot;Hello World!&quot;);</span></span>
<span class="line"><span>        val foo = example.get(0);</span></span>
<span class="line"><span>        System.out.println(foo.toLowerCase());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void example2() {</span></span>
<span class="line"><span>        //val代替Map.Entry&lt;Integer,String&gt;类型</span></span>
<span class="line"><span>        val map = new HashMap&lt;Integer, String&gt;();</span></span>
<span class="line"><span>        map.put(0, &quot;zero&quot;);</span></span>
<span class="line"><span>        map.put(5, &quot;five&quot;);</span></span>
<span class="line"><span>        for (val entry : map.entrySet()) {</span></span>
<span class="line"><span>            System.out.printf(&quot;%d: %s\\n&quot;, entry.getKey(), entry.getValue());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        example();</span></span>
<span class="line"><span>        example2();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当我们使用了val注解后，Lombok会从局部变量的初始化表达式推断出具体类型，编译后会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ValExample {</span></span>
<span class="line"><span>    public ValExample() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void example() {</span></span>
<span class="line"><span>        ArrayList&lt;String&gt; example = new ArrayList();</span></span>
<span class="line"><span>        example.add(&quot;Hello World!&quot;);</span></span>
<span class="line"><span>        String foo = (String)example.get(0);</span></span>
<span class="line"><span>        System.out.println(foo.toLowerCase());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void example2() {</span></span>
<span class="line"><span>        HashMap&lt;Integer, String&gt; map = new HashMap();</span></span>
<span class="line"><span>        map.put(0, &quot;zero&quot;);</span></span>
<span class="line"><span>        map.put(5, &quot;five&quot;);</span></span>
<span class="line"><span>        Iterator var1 = map.entrySet().iterator();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while(var1.hasNext()) {</span></span>
<span class="line"><span>            Entry&lt;Integer, String&gt; entry = (Entry)var1.next();</span></span>
<span class="line"><span>            System.out.printf(&quot;%d: %s\\n&quot;, entry.getKey(), entry.getValue());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="nonnull" tabindex="-1"><code>@NonNull</code> <a class="header-anchor" href="#nonnull" aria-label="Permalink to &quot;\`@NonNull\`&quot;">​</a></h4><p>在方法上使用@NonNull注解可以做非空判断，如果传入空值的话会直接抛出NullPointerException。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @NonNull注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/16</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class NonNullExample {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    public NonNullExample(@NonNull String name){</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        new NonNullExample(&quot;test&quot;);</span></span>
<span class="line"><span>        //会抛出NullPointerException</span></span>
<span class="line"><span>        new NonNullExample(null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后会在构造器中添加非空判断，具体代码如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class NonNullExample {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public NonNullExample(@NonNull String name) {</span></span>
<span class="line"><span>        if (name == null) {</span></span>
<span class="line"><span>            throw new NullPointerException(&quot;name is marked non-null but is null&quot;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        new NonNullExample(&quot;test&quot;);</span></span>
<span class="line"><span>        new NonNullExample((String)null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="cleanup" tabindex="-1"><code>@Cleanup</code> <a class="header-anchor" href="#cleanup" aria-label="Permalink to &quot;\`@Cleanup\`&quot;">​</a></h4><p>当我们在Java中使用资源时，不可避免地需要在使用后关闭资源。使用@Cleanup注解可以自动关闭资源。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @Cleanup注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/16</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class CleanupExample {</span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException {</span></span>
<span class="line"><span>        String inStr = &quot;Hello World!&quot;;</span></span>
<span class="line"><span>        //使用输入输出流自动关闭，无需编写try catch和调用close()方法</span></span>
<span class="line"><span>        @Cleanup ByteArrayInputStream in = new ByteArrayInputStream(inStr.getBytes(&quot;UTF-8&quot;));</span></span>
<span class="line"><span>        @Cleanup ByteArrayOutputStream out = new ByteArrayOutputStream();</span></span>
<span class="line"><span>        byte[] b = new byte[1024];</span></span>
<span class="line"><span>        while (true) {</span></span>
<span class="line"><span>            int r = in.read(b);</span></span>
<span class="line"><span>            if (r == -1) break;</span></span>
<span class="line"><span>            out.write(b, 0, r);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String outStr = out.toString(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        System.out.println(outStr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后Lombok会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class CleanupExample {</span></span>
<span class="line"><span>    public CleanupExample() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException {</span></span>
<span class="line"><span>        String inStr = &quot;Hello World!&quot;;</span></span>
<span class="line"><span>        ByteArrayInputStream in = new ByteArrayInputStream(inStr.getBytes(&quot;UTF-8&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ByteArrayOutputStream out = new ByteArrayOutputStream();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                byte[] b = new byte[1024];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                while(true) {</span></span>
<span class="line"><span>                    int r = in.read(b);</span></span>
<span class="line"><span>                    if (r == -1) {</span></span>
<span class="line"><span>                        String outStr = out.toString(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>                        System.out.println(outStr);</span></span>
<span class="line"><span>                        return;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    out.write(b, 0, r);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                if (Collections.singletonList(out).get(0) != null) {</span></span>
<span class="line"><span>                    out.close();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            if (Collections.singletonList(in).get(0) != null) {</span></span>
<span class="line"><span>                in.close();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="getter-和-setter" tabindex="-1"><code>@Getter</code> 和 <code>@Setter</code> <a class="header-anchor" href="#getter-和-setter" aria-label="Permalink to &quot;\`@Getter\` 和 \`@Setter\`&quot;">​</a></h4><p><code>@Getter</code> 和 <code>@Setter</code> 注解用于自动生成类的 getter 和 setter 方法。你可以将这些注解应用于类或字段上。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import lombok.Getter;</span></span>
<span class="line"><span>import lombok.Setter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Getter</span></span>
<span class="line"><span>@Setter</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述代码会自动生成 <code>getName()</code>、<code>setName()</code>、<code>getAge()</code> 和 <code>setAge()</code> 方法。</p><p>↑ 也可以单独加到某个字段上，观察编辑生成后的代码。</p><h4 id="tostring" tabindex="-1"><code>@ToString</code> <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;\`@ToString\`&quot;">​</a></h4><p><code>@ToString</code> 注解用于自动生成 <code>toString()</code> 方法。你可以通过 <code>exclude</code> 参数排除某些字段。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import lombok.ToString;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@ToString(exclude = &quot;password&quot;)</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>生成的 <code>toString()</code> 方法将不会包含 <code>password</code> 字段。</p><p>或者 使用 @ToString.Exclude注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @ToString注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ToString</span></span>
<span class="line"><span>public class ToStringExample {</span></span>
<span class="line"><span>    @ToString.Exclude</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    public ToStringExample(Long id,String name,Integer age){</span></span>
<span class="line"><span>        this.id =id;</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ToStringExample example = new ToStringExample(1L,&quot;test&quot;,20);</span></span>
<span class="line"><span>        //自动实现toString方法，输出ToStringExample(name=test, age=20)</span></span>
<span class="line"><span>        System.out.println(example);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="equalsandhashcode" tabindex="-1"><code>@EqualsAndHashCode</code> <a class="header-anchor" href="#equalsandhashcode" aria-label="Permalink to &quot;\`@EqualsAndHashCode\`&quot;">​</a></h4><p>使用@EqualsAndHashCode注解可以自动生成hashCode和equals方法，默认包含所有类属性，使用@EqualsAndHashCode.Exclude可以排除属性的生成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @EqualsAndHashCode使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Getter</span></span>
<span class="line"><span>@Setter</span></span>
<span class="line"><span>@EqualsAndHashCode</span></span>
<span class="line"><span>public class EqualsAndHashCodeExample {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    @EqualsAndHashCode.Exclude</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    @EqualsAndHashCode.Exclude</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        EqualsAndHashCodeExample example1 = new EqualsAndHashCodeExample();</span></span>
<span class="line"><span>        example1.setId(1L);</span></span>
<span class="line"><span>        example1.setName(&quot;test&quot;);</span></span>
<span class="line"><span>        example1.setAge(20);</span></span>
<span class="line"><span>        EqualsAndHashCodeExample example2 = new EqualsAndHashCodeExample();</span></span>
<span class="line"><span>        example2.setId(1L);</span></span>
<span class="line"><span>        //equals方法只对比id，返回true</span></span>
<span class="line"><span>        System.out.println(example1.equals(example2));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后Lombok会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class EqualsAndHashCodeExample {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public EqualsAndHashCodeExample() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean equals(final Object o) {</span></span>
<span class="line"><span>        if (o == this) {</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        } else if (!(o instanceof EqualsAndHashCodeExample)) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            EqualsAndHashCodeExample other = (EqualsAndHashCodeExample)o;</span></span>
<span class="line"><span>            if (!other.canEqual(this)) {</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                Object this$id = this.getId();</span></span>
<span class="line"><span>                Object other$id = other.getId();</span></span>
<span class="line"><span>                if (this$id == null) {</span></span>
<span class="line"><span>                    if (other$id != null) {</span></span>
<span class="line"><span>                        return false;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else if (!this$id.equals(other$id)) {</span></span>
<span class="line"><span>                    return false;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected boolean canEqual(final Object other) {</span></span>
<span class="line"><span>        return other instanceof EqualsAndHashCodeExample;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int hashCode() {</span></span>
<span class="line"><span>        int PRIME = true;</span></span>
<span class="line"><span>        int result = 1;</span></span>
<span class="line"><span>        Object $id = this.getId();</span></span>
<span class="line"><span>        int result = result * 59 + ($id == null ? 43 : $id.hashCode());</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="xxconstructor" tabindex="-1"><code>@XxConstructor</code> <a class="header-anchor" href="#xxconstructor" aria-label="Permalink to &quot;\`@XxConstructor\`&quot;">​</a></h4><p>使用@XxConstructor注解可以自动生成构造方法，有@NoArgsConstructor、@RequiredArgsConstructor和@AllArgsConstructor三个注解可以使用。</p><ul><li>@NoArgsConstructor：生成无参构造函数。</li><li>@RequiredArgsConstructor：生成包含必须参数的构造函数，使用@NonNull注解的类属性为必须参数。</li><li>@AllArgsConstructor：生成包含所有参数的构造函数。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @XxConstructor注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@NoArgsConstructor</span></span>
<span class="line"><span>@RequiredArgsConstructor(staticName = &quot;of&quot;)</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>public class ConstructorExample {</span></span>
<span class="line"><span>    @NonNull</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //无参构造器</span></span>
<span class="line"><span>        ConstructorExample example1 = new ConstructorExample();</span></span>
<span class="line"><span>        //全部参数构造器</span></span>
<span class="line"><span>        ConstructorExample example2 = new ConstructorExample(1L,&quot;test&quot;,20);</span></span>
<span class="line"><span>        //@NonNull注解的必须参数构造器</span></span>
<span class="line"><span>        ConstructorExample example3 = ConstructorExample.of(1L);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后Lombok会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ConstructorExample {</span></span>
<span class="line"><span>    @NonNull</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ConstructorExample() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private ConstructorExample(@NonNull final Long id) {</span></span>
<span class="line"><span>        if (id == null) {</span></span>
<span class="line"><span>            throw new NullPointerException(&quot;id is marked non-null but is null&quot;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            this.id = id;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static ConstructorExample of(@NonNull final Long id) {</span></span>
<span class="line"><span>        return new ConstructorExample(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ConstructorExample(@NonNull final Long id, final String name, final Integer age) {</span></span>
<span class="line"><span>        if (id == null) {</span></span>
<span class="line"><span>            throw new NullPointerException(&quot;id is marked non-null but is null&quot;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            this.id = id;</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="data" tabindex="-1"><code>@Data</code> <a class="header-anchor" href="#data" aria-label="Permalink to &quot;\`@Data\`&quot;">​</a></h4><p><code>@Data</code> 注解是一个组合注解，它包含了 <code>@Getter</code>、<code>@Setter</code>、<code>@ToString</code>、<code>@EqualsAndHashCode</code> 和 <code>@RequiredArgsConstructor</code> 的功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @Data注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class DataExample {</span></span>
<span class="line"><span>    @NonNull</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    @EqualsAndHashCode.Exclude</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    @EqualsAndHashCode.Exclude</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //@RequiredArgsConstructor已生效</span></span>
<span class="line"><span>        DataExample example1 = new DataExample(1L);</span></span>
<span class="line"><span>        //@Getter @Setter已生效</span></span>
<span class="line"><span>        example1.setName(&quot;test&quot;);</span></span>
<span class="line"><span>        example1.setAge(20);</span></span>
<span class="line"><span>        //@ToString已生效</span></span>
<span class="line"><span>        System.out.println(example1);</span></span>
<span class="line"><span>        DataExample example2 = new DataExample(1L);</span></span>
<span class="line"><span>        //@EqualsAndHashCode已生效</span></span>
<span class="line"><span>        System.out.println(example1.equals(example2));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="value" tabindex="-1"><code>@Value</code> <a class="header-anchor" href="#value" aria-label="Permalink to &quot;\`@Value\`&quot;">​</a></h4><p>使用@Value注解可以把类声明为不可变的，声明后此类相当于final类，无法被继承，其属性也会变成final属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @Value注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Value</span></span>
<span class="line"><span>public class ValueExample {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //只能使用全参构造器</span></span>
<span class="line"><span>        ValueExample example = new ValueExample(1L,&quot;test&quot;,20);</span></span>
<span class="line"><span>        // example.setName(&quot;andy&quot;)</span><span> //没有生成setter方法，会报错</span></span>
<span class="line"><span>        // example.name=&quot;andy&quot;</span><span> //字段被设置为final类型，会报错</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后Lombok会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public final class ValueExample {</span></span>
<span class="line"><span>    private final Long id;</span></span>
<span class="line"><span>    private final String name;</span></span>
<span class="line"><span>    private final Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        new ValueExample(1L, &quot;test&quot;, 20);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ValueExample(final Long id, final String name, final Integer age) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Long getId() {</span></span>
<span class="line"><span>        return this.id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return this.name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Integer getAge() {</span></span>
<span class="line"><span>        return this.age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="builder" tabindex="-1"><code>@Builder</code> <a class="header-anchor" href="#builder" aria-label="Permalink to &quot;\`@Builder\`&quot;">​</a></h4><h4 id="builder-1" tabindex="-1"><code>@Builder</code> <a class="header-anchor" href="#builder-1" aria-label="Permalink to &quot;\`@Builder\`&quot;">​</a></h4><p><code>@Builder</code> 注解用于生成构建器模式的代码，使得对象的创建更加简洁。</p><p>↓ ： 建造者模式加链式调用，创建对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @auther macrozheng</span></span>
<span class="line"><span> * @description @Builder注解使用示例</span></span>
<span class="line"><span> * @date 2020/12/17</span></span>
<span class="line"><span> * @github https://github.com/macrozheng</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>@ToString</span></span>
<span class="line"><span>public class BuilderExample {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        BuilderExample example = BuilderExample.builder()</span></span>
<span class="line"><span>                .id(1L)</span></span>
<span class="line"><span>                .name(&quot;test&quot;)</span></span>
<span class="line"><span>                .age(20)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>        System.out.println(example);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译后Lombok会生成如下代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class BuilderExample {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    BuilderExample(final Long id, final String name, final Integer age) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static BuilderExample.BuilderExampleBuilder builder() {</span></span>
<span class="line"><span>        return new BuilderExample.BuilderExampleBuilder();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;BuilderExample(id=&quot; + this.id + &quot;, name=&quot; + this.name + &quot;, age=&quot; + this.age + &quot;)&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static class BuilderExampleBuilder {</span></span>
<span class="line"><span>        private Long id;</span></span>
<span class="line"><span>        private String name;</span></span>
<span class="line"><span>        private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BuilderExampleBuilder() {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public BuilderExample.BuilderExampleBuilder id(final Long id) {</span></span>
<span class="line"><span>            this.id = id;</span></span>
<span class="line"><span>            return this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public BuilderExample.BuilderExampleBuilder name(final String name) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            return this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public BuilderExample.BuilderExampleBuilder age(final Integer age) {</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>            return this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public BuilderExample build() {</span></span>
<span class="line"><span>            return new BuilderExample(this.id, this.name, this.age);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return &quot;BuilderExample.BuilderExampleBuilder(id=&quot; + this.id + &quot;, name=&quot; + this.name + &quot;, age=&quot; + this.age + &quot;)&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="sneakythrows" tabindex="-1">@SneakyThrows <a class="header-anchor" href="#sneakythrows" aria-label="Permalink to &quot;@SneakyThrows&quot;">​</a></h4><p>还在手动捕获并抛出异常？使用<code>@SneakyThrows</code>注解自动实现试试！</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @SneakyThrows注解使用示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SneakyThrowsExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //自动抛出异常，无需处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SneakyThrows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UnsupportedEncodingException.class)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str2byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str2byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str).length);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SneakyThrowsExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SneakyThrowsExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str2byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (UnsupportedEncodingException </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">var2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="synchronized" tabindex="-1">@Synchronized <a class="header-anchor" href="#synchronized" aria-label="Permalink to &quot;@Synchronized&quot;">​</a></h4><p>当我们在多个线程中访问同一资源时，往往会出现线程安全问题，以前我们往往使用<code>synchronized</code>关键字修饰方法来实现同步访问。使用<code>@Synchronized</code>注解同样可以实现同步访问。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.macro.mall.tiny.example;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lombok.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @Synchronized注解使用示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SynchronizedExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer count;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Synchronized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SneakyThrows</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reduceCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Integer </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Thread.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;thread-%d count:%d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id, count));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //添加@Synchronized三个线程可以同步调用reduceCount方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SynchronizedExample example </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SynchronizedExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ReduceThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, example).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ReduceThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, example).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ReduceThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, example).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequiredArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ReduceThread</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer id;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SynchronizedExample example;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (example.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                example.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduceCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SynchronizedExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object $lock </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer count;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reduceCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Integer </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$lock) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    Thread.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    Integer var3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    Integer var4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;thread-%d count:%d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.count));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Throwable </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">var7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="with" tabindex="-1">@With <a class="header-anchor" href="#with" aria-label="Permalink to &quot;@With&quot;">​</a></h4><p>使用<code>@With</code>注解可以实现对原对象进行克隆，并改变其一个属性，使用时需要指定全参构造方法。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @With注解使用示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">With</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AllArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Long id;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer age;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        WithExample example1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        WithExample example2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> example1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //将原对象进行clone并设置age，返回false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(example1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(example2));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Long id;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer age;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WithExample </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Long </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WithExample </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.id, name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WithExample </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.id, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name, age);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WithExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Long </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="getter-lazy-true" tabindex="-1">@Getter(lazy=true) <a class="header-anchor" href="#getter-lazy-true" aria-label="Permalink to &quot;@Getter(lazy=true)&quot;">​</a></h4><p>当我们获取某一个属性比较消耗资源时，可以给<code>@Getter</code>添加<code>lazy=true</code>属性实现懒加载，会生成Double Check Lock样板代码对属性进行懒加载。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @Getter注解实现属性懒加载</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetterLazyExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Getter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lazy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] cached </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> expensive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expensive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.length; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            result[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //使用Double Check Lock样板代码对属性进行懒加载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        GetterLazyExample example </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetterLazyExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(example.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().length);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetterLazyExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AtomicReference&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; cached </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AtomicReference</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetterLazyExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expensive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.length; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            result[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Object value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] actualValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expensive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> actualValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> actualValue;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[])((</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[])(value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cached </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="log" tabindex="-1">@Log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;@Log&quot;">​</a></h4><p>使用<code>@Log</code>注解，可以直接生成日志对象log，通过log对象可以直接打印日志。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @Log注解使用示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level warning&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">severe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level severe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogExample.class.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level warning&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">severe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level severe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="slf4j" tabindex="-1">@Slf4j <a class="header-anchor" href="#slf4j" aria-label="Permalink to &quot;@Slf4j&quot;">​</a></h4><p>使用Lombok生成日志对象时，根据使用日志实现的不同，有多种注解可以使用。比如<code>@Log</code>、<code>@Log4j</code>、<code>@Log4j2</code>、<code>@Slf4j</code>等。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @auther macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description @Slf4j注解使用示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2020/12/17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @github https://github.com/macrozheng</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Slf4j</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogSlf4jExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译后Lombok会生成如下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogSlf4jExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LoggerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogSlf4jExample.class);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogSlf4jExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level:{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="lombok原理" tabindex="-1">Lombok原理 <a class="header-anchor" href="#lombok原理" aria-label="Permalink to &quot;Lombok原理&quot;">​</a></h3><p>如果IDEA不安装Lombok插件的话，我们打开使用Lombok的项目是无法通过编译的。装了以后IDEA才会提示我们Lombok为我们生成的方法和属性。</p><p>使用了<code>@Data</code>注解以后，查看类结构可以发现getter、setter、toString等方法。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250525161622.png" alt="image.png"></p><p>打开target目录下的<code>.class</code>文件，我们可以看到Lombok为我们生成的代码，可见<strong>Lombok是通过解析注解，然后在编译时生成代码</strong>来实现Java代码的功能增强的。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250525161643.png" alt="image.png"></p><h3 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><p>官方文档：<a href="https://projectlombok.org/features/all" target="_blank" rel="noreferrer">https://projectlombok.org/features/all</a></p>`,102)])])}const g=a(l,[["render",e]]);export{c as __pageData,g as default};
