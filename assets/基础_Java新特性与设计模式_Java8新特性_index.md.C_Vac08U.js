import{_ as s,o as n,c as e,am as p}from"./chunks/framework.CiF4W93w.js";const h=JSON.parse('{"title":"Java8新特性","description":"","frontmatter":{"title":"Java8新特性","excerpt":"Java8新特性","date":"2023-12-20 10:44:55","updated":"2023-12-20 10:44:55"},"headers":[],"relativePath":"基础/Java新特性与设计模式/Java8新特性/index.md","filePath":"基础/Java新特性与设计模式/Java8新特性/index.md","lastUpdated":null}'),l={name:"基础/Java新特性与设计模式/Java8新特性/index.md"};function t(i,a,c,o,d,r){return n(),e("div",null,[...a[0]||(a[0]=[p(`<ul><li>接口中默认方法与静态方法</li><li>函数式接口（Functional Interface）</li><li>Lambda表达式（Lambda Expressions）</li><li>流API（Streams API）</li><li>Optional 类</li><li>新的日期时间API（New Date-Time API）</li></ul><h3 id="_1、接口中默认方法与静态方法" tabindex="-1">1、接口中默认方法与静态方法 <a class="header-anchor" href="#_1、接口中默认方法与静态方法" aria-label="Permalink to &quot;1、接口中默认方法与静态方法&quot;">​</a></h3><p>在Java 8之前，接口只能有方法声明，而不能有方法实现。这意味着一旦接口被更改（比如添加新方法），所有实现了该接口的类都必须随之修改以实现新添加的方法。</p><p>Java 8引入的<code>default</code>和<code>static</code>方法正是为了解决这个问题。</p><blockquote><p><code>default</code> 方法</p></blockquote><ul><li><p><strong>作用</strong>: <code>default</code>方法允许我们在接口中添加有具体实现的非抽象方法。这意味着实现接口的类可以不用实现这些<code>default</code>方法。</p></li><li><p><strong>用途</strong>: 这对于向现有接口添加新功能非常有用，因为它不会破坏实现该接口的现有类的功能。</p></li><li><p><strong>类比</strong>: 想象一下，有一个标准的建筑蓝图（接口）。突然，需要在所有这样的建筑中添加一个新的功能（比如中央供暖）。<code>default</code>方法就像是一个标准的中央供暖系统设计，可以直接加入到现有的蓝图中，而不需要重新设计整个建筑。</p></li></ul><blockquote><p><code>static</code> 方法</p></blockquote><ul><li><p><strong>作用</strong>: <code>static</code>方法允许我们在接口中添加静态方法。这些方法可以直接通过接口来调用，而不需要一个接口的实例。</p></li><li><p><strong>用途</strong>: <code>static</code>方法通常用于提供一些与接口相关的工具方法。</p></li><li><p><strong>类比</strong>: 如果接口是一种服务的标准（比如邮寄服务），那么<code>static</code>方法就像是可以直接从服务标准本身获得的额外帮助或工具，如一个在线邮资计算器。</p></li></ul><p>具体使用示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface MyInterface {</span></span>
<span class="line"><span>    // 一个默认方法</span></span>
<span class="line"><span>    default void newMethod() {</span></span>
<span class="line"><span>        System.out.println(&quot;This is a default method&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 一个静态方法</span></span>
<span class="line"><span>    static void anotherNewMethod() {</span></span>
<span class="line"><span>        System.out.println(&quot;This is a static method&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实现接口的类</span></span>
<span class="line"><span>class MyClass implements MyInterface {</span></span>
<span class="line"><span>    // 不需要实现newMethod()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        MyClass myClass = new MyClass();</span></span>
<span class="line"><span>        myClass.newMethod(); // 调用默认方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        MyInterface.anotherNewMethod(); // 直接调用接口的静态方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，<code>MyClass</code>实现了<code>MyInterface</code>但没有实现<code>newMethod()</code>方法，因为它是一个默认方法。</p><p>同时，可以直接通过<code>MyInterface</code>调用静态方法<code>anotherNewMethod()</code>。</p><hr><p>有一种情况需要重写 default 的接口方法，注意一下，示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface InterfaceNew {</span></span>
<span class="line"><span>    static void sm() {</span></span>
<span class="line"><span>        System.out.println(&quot;interface提供的方式实现&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    static void sm2() {</span></span>
<span class="line"><span>        System.out.println(&quot;interface提供的方式实现&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    default void def() {</span></span>
<span class="line"><span>        System.out.println(&quot;interface default方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    default void def2() {</span></span>
<span class="line"><span>        System.out.println(&quot;interface default2方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //须要实现类重写</span></span>
<span class="line"><span>    void f();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface InterfaceNew1 {</span></span>
<span class="line"><span>    default void def() {</span></span>
<span class="line"><span>        System.out.println(&quot;InterfaceNew1 default方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果有一个类既实现了 <code>InterfaceNew</code> 接口又实现了 <code>InterfaceNew1</code>接口，它们都有<code>def()</code>，并且 <code>InterfaceNew</code> 接口和 <code>InterfaceNew1</code>接口没有继承关系的话，这时就必须重写<code>def()</code>。</p><p>不然的话，编译的时候就会报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class InterfaceNewImpl implements InterfaceNew , InterfaceNew1{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        InterfaceNewImpl interfaceNew = new InterfaceNewImpl();</span></span>
<span class="line"><span>        interfaceNew.def();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void def() {</span></span>
<span class="line"><span>        InterfaceNew1.super.def();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void f() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><blockquote><p>Java8中，接口和抽象类的区别</p></blockquote><ul><li>interface 和 class 的区别，主要有： <ul><li>接口多实现，类单继承</li><li>接口的方法是 public abstract 修饰，变量是 public static final 修饰。 abstract class 可以用其他修饰符</li></ul></li><li>interface 的方法是<strong>更像是一个扩展插件</strong>。而 abstract class 的方法是要继承的。</li></ul><p>interface 新增<code>default</code>和<code>static</code>修饰的方法，为了解决接口的修改与现有的实现不兼容的问题，并不是为了要替代<code>abstract class</code>。</p><h3 id="_2、函数式接口-functional-interface" tabindex="-1">2、函数式接口（Functional Interface） <a class="header-anchor" href="#_2、函数式接口-functional-interface" aria-label="Permalink to &quot;2、函数式接口（Functional Interface）&quot;">​</a></h3><p>函数式接口（Functional Interface）是Java 8引入的一个<strong>重要概念</strong>，它是Java对函数式编程支持的一部分。</p><blockquote><p>定义</p></blockquote><p>函数式接口<strong>是只有一个抽象方法的接口</strong>。尽管接口可以包含多个默认方法、静态方法，<strong>但只能有一个抽象方法</strong>。这种接口的主要目的是为了与Lambda表达式结合使用。</p><blockquote><p><code>@FunctionalInterface</code> 注解</p></blockquote><p>虽然不是强制性的，但通常会使用<code>@FunctionalInterface</code>注解来标记函数式接口。这个注解有助于编译器识别意图，并在接口不是有效的函数式接口时生成编译时错误。</p><blockquote><p>函数式接口示例：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>interface Greeting {</span></span>
<span class="line"><span>    String sayHello(String name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个<code>Greeting</code>接口定义了一个接受一个字符串参数并返回一个字符串的方法。</p><p>由于它只有一个抽象方法，所以它是一个函数式接口。</p><blockquote><p>使用场景</p></blockquote><p>函数式接口在Java 8中引入Lambda表达式时变得非常重要。Lambda表达式提供了一种简洁的方式来实现函数式接口，从而使代码更简洁、更易读。</p><p>可以将函数式接口想象成一种特殊的工具套件。这个套件里只有一个工具槽（抽象方法），但你可以以多种方式（Lambda表达式、方法引用）填充这个槽。这就像是一个可定制的工具，你可以根据需要插入不同的功能。</p><p>函数式接口在Java中的很多地方都有使用，例如：</p><ul><li>在<code>java.util.function</code>包中，Java 8引入了一系列标准的函数式接口，如<code>Predicate&lt;T&gt;</code>、<code>Function&lt;T,R&gt;</code>、<code>Consumer&lt;T&gt;</code>等。</li><li>在集合框架中，它们被用于简化迭代、过滤和转换操作。</li><li>在并发编程中，例如使用<code>Runnable</code>或<code>Callable</code>接口。</li></ul><h3 id="_3、lambda-表达式" tabindex="-1">3、Lambda 表达式 <a class="header-anchor" href="#_3、lambda-表达式" aria-label="Permalink to &quot;3、Lambda 表达式&quot;">​</a></h3><p>Lambda表达式是Java 8中一个非常重要的新特性，它为Java带来了一种简洁的方式来表示函数式接口的实例。</p><p>Lambda表达式主要用于提供一种简洁、表达式风格的方法来表示可以传递的匿名函数。这种表达方式非常适合创建简短的、只使用一次的方法版本。</p><h4 id="语法格式" tabindex="-1">语法格式 <a class="header-anchor" href="#语法格式" aria-label="Permalink to &quot;语法格式&quot;">​</a></h4><blockquote><p>语法格式</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(parameters) -&gt; expression 或</span></span>
<span class="line"><span>(parameters) -&gt;{ statements; }</span></span></code></pre></div><ul><li>parameters <ul><li>与方法定义中的参数列表类似。对于单个参数，可以省略括号</li></ul></li><li><code>-&gt;</code><ul><li>Lambda表达式的核心，用于分隔参数列表和Lambda体</li></ul></li><li><strong>Lambda体</strong><ul><li>可以是一个表达式或一个代码块。表达式体会返回一个值，而代码块可以包含零个或多个语句。</li></ul></li></ul><h4 id="简易示例" tabindex="-1">简易示例 <a class="header-anchor" href="#简易示例" aria-label="Permalink to &quot;简易示例&quot;">​</a></h4><blockquote><p>使用示例</p></blockquote><p>Lambda表达式通常与函数式接口一起使用。函数式接口是只有一个抽象方法的接口，这意味着Lambda表达式可以为该抽象方法提供实现。</p><p>假设我们有一个简单的函数式接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>interface StringOperation {</span></span>
<span class="line"><span>    int getLength(String s);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>不使用Lambda表达式，我们可能需要这样实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>StringOperation operation = new StringOperation() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int getLength(String s) {</span></span>
<span class="line"><span>        return s.length();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>使用Lambda表达式，我们可以这样简化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>StringOperation operation = s -&gt; s.length();</span></span></code></pre></div><h4 id="替代匿名内部类" tabindex="-1">替代匿名内部类 <a class="header-anchor" href="#替代匿名内部类" aria-label="Permalink to &quot;替代匿名内部类&quot;">​</a></h4><p>平时开发经常会用到 Runnable 接口、Comparator 接口、Listener 接口 这三个接口，下面分别就看一下他们的使用示例。</p><blockquote><p>Runnable 接口</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;The runable now is using!&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>}).start();</span></span>
<span class="line"><span>//用lambda</span></span>
<span class="line"><span>new Thread(() -&gt; System.out.println(&quot;It&#39;s a lambda function!&quot;)).start();</span></span></code></pre></div><blockquote><p>Comparator 接口</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List&lt;Integer&gt; strings = Arrays.asList(1, 2, 3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Collections.sort(strings, new Comparator&lt;Integer&gt;() {</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int compare(Integer o1, Integer o2) {</span></span>
<span class="line"><span>    return o1 - o2;}</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Lambda</span></span>
<span class="line"><span>Collections.sort(strings, (Integer o1, Integer o2) -&gt; o1 - o2);</span></span>
<span class="line"><span>//分解开</span></span>
<span class="line"><span>Comparator&lt;Integer&gt; comparator = (Integer o1, Integer o2) -&gt; o1 - o2;</span></span>
<span class="line"><span>Collections.sort(strings, comparator);</span></span></code></pre></div><blockquote><p>Listener 接口</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>JButton button = new JButton();</span></span>
<span class="line"><span>button.addItemListener(new ItemListener() {</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public void itemStateChanged(ItemEvent e) {</span></span>
<span class="line"><span>   e.getItem();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>//lambda</span></span>
<span class="line"><span>button.addItemListener(e -&gt; e.getItem());</span></span></code></pre></div><h4 id="集合上使用" tabindex="-1">集合上使用 <a class="header-anchor" href="#集合上使用" aria-label="Permalink to &quot;集合上使用&quot;">​</a></h4><blockquote><p>在集合上的应用</p></blockquote><p>Lambda表达式特别适合用在集合的操作上，比如<code>forEach</code>、<code>map</code>、<code>filter</code>等方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List&lt;String&gt; list = Arrays.asList(&quot;Java&quot;, &quot;Python&quot;, &quot;C++&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用Lambda表达式迭代</span></span>
<span class="line"><span>list.forEach(element -&gt; System.out.println(element));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用Lambda表达式和Stream API进行过滤</span></span>
<span class="line"><span>list.stream()</span></span>
<span class="line"><span>    .filter(s -&gt; s.startsWith(&quot;J&quot;))</span></span>
<span class="line"><span>    .forEach(System.out::println);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void lamndaFor() {</span></span>
<span class="line"><span>        List&lt;String&gt; strings = Arrays.asList(&quot;1&quot;, &quot;2&quot;, &quot;3&quot;);</span></span>
<span class="line"><span>        //传统foreach</span></span>
<span class="line"><span>        for (String s : strings) {</span></span>
<span class="line"><span>            System.out.println(s);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //Lambda foreach</span></span>
<span class="line"><span>        strings.forEach((s) -&gt; System.out.println(s));</span></span>
<span class="line"><span>        //or</span></span>
<span class="line"><span>        strings.forEach(System.out::println);</span></span>
<span class="line"><span> 				//map</span></span>
<span class="line"><span>        Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        map.forEach((k,v)-&gt;System.out.println(v));</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="方法的引用" tabindex="-1">方法的引用 <a class="header-anchor" href="#方法的引用" aria-label="Permalink to &quot;方法的引用&quot;">​</a></h4><p>Java 8 允许使用 <code>::</code> 关键字来传递方法或者构造函数引用，无论如何，表达式返回的类型必须是 functional-interface。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class LambdaClassSuper {</span></span>
<span class="line"><span>    LambdaInterface sf(){</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LambdaClass extends LambdaClassSuper {</span></span>
<span class="line"><span>    public static LambdaInterface staticF() {</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LambdaInterface f() {</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void show() {</span></span>
<span class="line"><span>        //1.调用静态函数，返回类型必须是functional-interface</span></span>
<span class="line"><span>        LambdaInterface t = LambdaClass::staticF;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2.实例方法调用</span></span>
<span class="line"><span>        LambdaClass lambdaClass = new LambdaClass();</span></span>
<span class="line"><span>        LambdaInterface lambdaInterface = lambdaClass::f;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3.超类上的方法调用</span></span>
<span class="line"><span>        LambdaInterface superf = super::sf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //4. 构造方法调用</span></span>
<span class="line"><span>        LambdaInterface tt = LambdaClassSuper::new;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>访问变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int i = 0;</span></span>
<span class="line"><span>Collections.sort(strings, (Integer o1, Integer o2) -&gt; o1 - i);</span></span>
<span class="line"><span>//i =3;</span></span></code></pre></div><p>lambda 表达式可以引用外边变量，但是该变量默认拥有 final 属性，不能被修改，如果修改，编译时就报错。</p><p>to be contined......</p><h3 id="_4、stream" tabindex="-1">4、Stream <a class="header-anchor" href="#_4、stream" aria-label="Permalink to &quot;4、Stream&quot;">​</a></h3><blockquote><p>Stream 是什么</p></blockquote><p>java 新增了 <code>java.util.stream</code> 包，它和之前的流大同小异。之前接触最多的是资源流，比如<code>java.io.FileInputStream</code>，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何 CRUD。</p><p><code>Stream</code>依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据、包括筛选、排序、统计、计数等。可以想象成是 Sql 语句。</p><p>它的源数据可以是 <code>Collection</code>、<code>Array</code> 等。由于它的方法参数都是函数式接口类型，所以一般和 Lambda 配合使用。</p><blockquote><p>流类型</p></blockquote><ol><li>stream 串行流</li><li>parallelStream 并行流，可多线程执行</li></ol><h4 id="stream-常用方法" tabindex="-1">Stream 常用方法 <a class="header-anchor" href="#stream-常用方法" aria-label="Permalink to &quot;Stream 常用方法&quot;">​</a></h4><ul><li><code>stream()</code>, <code>parallelStream()</code></li><li><code>filter()</code></li><li><code>findAny()</code> <code>findFirst()</code></li><li><code>sort</code></li><li><code>forEach</code> void</li><li><code>map(), reduce()</code></li><li><code>flatMap()</code> - 将多个Stream连接成一个Stream</li><li><code>collect(Collectors.toList())</code></li><li><code>distinct</code>, <code>limit</code></li><li><code>count</code></li><li><code>min</code>, <code>max</code>, <code>summaryStatistics</code></li></ul><h3 id="_5、optional" tabindex="-1">5、Optional <a class="header-anchor" href="#_5、optional" aria-label="Permalink to &quot;5、Optional&quot;">​</a></h3><p>参考： <a href="https://javaguide.cn/java/new-features/java8-common-new-features.html#optional" target="_blank" rel="noreferrer">https://javaguide.cn/java/new-features/java8-common-new-features.html#optional</a></p><p><code>Optional</code>是Java 8引入的一个容器类，用于表示一个值可能存在或不存在。它提供了一种更优雅的方法来处理可空值，从而减少<code>NullPointerException</code>的风险。</p><p>to be contined...</p><h3 id="_6、date-time-api" tabindex="-1">6、Date-Time API <a class="header-anchor" href="#_6、date-time-api" aria-label="Permalink to &quot;6、Date-Time API&quot;">​</a></h3><p>to be contined....</p><hr><p>参考</p><ul><li><a href="http://moxi159753.gitee.io/learningnotes/#/" target="_blank" rel="noreferrer">http://moxi159753.gitee.io/learningnotes/#/</a></li><li><a href="https://www.pdai.tech/md/interview/x-interview.html#_6-1-java-8-%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">https://www.pdai.tech/md/interview/x-interview.html#_6-1-java-8-特性</a></li><li><a href="https://javaguide.cn/java/new-features/java8-common-new-features.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/new-features/java8-common-new-features.html</a></li></ul>`,91)])])}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
