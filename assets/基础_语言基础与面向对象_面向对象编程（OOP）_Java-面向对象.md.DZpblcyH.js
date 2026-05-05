import{_ as s,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const h=JSON.parse('{"title":"Java-面向对象","description":"","frontmatter":{"title":"Java-面向对象","excerpt":"Java基础_基础内容02","date":"2024-01-08 14:04:46","updated":"2024-01-08 14:04:46"},"headers":[],"relativePath":"基础/语言基础与面向对象/面向对象编程（OOP）/Java-面向对象.md","filePath":"基础/语言基础与面向对象/面向对象编程（OOP）/Java-面向对象.md","lastUpdated":null}'),t={name:"基础/语言基础与面向对象/面向对象编程（OOP）/Java-面向对象.md"};function l(i,n,o,c,d,r){return a(),p("div",null,[...n[0]||(n[0]=[e(`<p>本章节主要讲述：Java中对象的使用，Object 基类的使用，以及 String 类的使用。</p><h3 id="一、面向对象基础" tabindex="-1">一、面向对象基础 <a class="header-anchor" href="#一、面向对象基础" aria-label="Permalink to &quot;一、面向对象基础&quot;">​</a></h3><h4 id="_1-1、面向对象和面向过程的区别" tabindex="-1">1.1、面向对象和面向过程的区别 <a class="header-anchor" href="#_1-1、面向对象和面向过程的区别" aria-label="Permalink to &quot;1.1、面向对象和面向过程的区别&quot;">​</a></h4><p>两者的主要区别在于解决问题的方式不同：</p><ul><li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li><li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li></ul><h4 id="_1-2、创建对象" tabindex="-1">1.2、创建对象 <a class="header-anchor" href="#_1-2、创建对象" aria-label="Permalink to &quot;1.2、创建对象&quot;">​</a></h4><p>new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。</p><ul><li>一个对象引用可以指向 0 个或 1 个对象（一根绳子可以不系气球，也可以系一个气球）；</li><li>一个对象可以有 n 个引用指向它（可以用 n 条绳子系住一个气球）。</li></ul><blockquote><p>对象的相等和引用相等的区别</p></blockquote><ul><li>对象的相等一般比较的是内存中存放的内容是否相等。</li><li>引用相等一般比较的是他们指向的内存地址是否相等。</li></ul><p>对象是什么？</p><p>对象是类的一个实例，类定义了对象的状态（属性）和行为（方法）</p><p>创建对象的步骤：</p><ol><li><strong>定义类</strong>: 首先，需要定义一个类，作为对象的蓝图。类定义了对象的属性和方法。</li><li><strong>声明对象</strong>: 接下来，声明一个类的变量。这个变量将引用新创建的对象。</li><li><strong>实例化对象</strong>: 使用 <code>new</code> 关键字创建类的一个实例。</li><li><strong>初始化对象</strong>: 通过调用类的构造器来初始化新创建的对象</li></ol><p>创建对象示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 定义Person类</span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Person(String name, int age) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在另一个类中创建Person的对象</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建Person对象</span></span>
<span class="line"><span>        Person person = new Person(&quot;Alice&quot;, 30);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，<code>new Person(&quot;Alice&quot;, 30);</code> 创建了一个 <code>Person</code> 类的实例，并且用 <code>Alice</code> 和 <code>30</code> 初始化这个对象的 <code>name</code> 和 <code>age</code> 属性。</p><h4 id="_1-3、构造方法" tabindex="-1">1.3、构造方法 <a class="header-anchor" href="#_1-3、构造方法" aria-label="Permalink to &quot;1.3、构造方法&quot;">​</a></h4><p>构造方法的作用：构造方法是一种特殊的方法，主要作用是完成对象的初始化工作。</p><p>如果没有声明构造方法，类会有一个默认的不带参数的改造方法。</p><p>构造方法的特点：</p><ul><li>名字与类名相同。</li><li>没有返回值，但不能用 void 声明构造函数。</li><li>生成类的对象时自动执行，无需调用。</li></ul><p>构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况</p><h4 id="_1-4、面向对象特征" tabindex="-1">1.4、面向对象特征 <a class="header-anchor" href="#_1-4、面向对象特征" aria-label="Permalink to &quot;1.4、面向对象特征&quot;">​</a></h4><p>面向对象的三大特征：</p><ul><li>封装</li><li>继承</li><li>多态</li></ul><p>面向对象编程（OOP）的三大特征是封装、继承和多态。这些特征共同为创建模块化、可重用和易于维护的代码提供了基础。</p><table tabindex="0"><thead><tr><th>特征</th><th>描述</th><th>优点</th></tr></thead><tbody><tr><td>封装</td><td>封装是把数据（属性）和行为（方法）组合成一个单元（类），并对数据的访问进行限制和保护。在Java中，可以通过使用访问修饰符（如<code>private</code>, <code>public</code>）来实现。</td><td>- 提高了数据安全性<br>- 减少了代码间的耦合<br>- 增强了代码的可读性和可维护性</td></tr><tr><td>继承</td><td>继承是一种使得一个类（子类）能够继承另一个类（父类）的属性和方法的机制。子类可以扩展或修改继承自父类的行为。</td><td>- 促进了代码的重用<br>- 建立了类之间的层次关系<br>- 提高了代码的可维护性</td></tr><tr><td>多态</td><td>多态是指允许不同类的对象对同一消息作出响应的能力，即同一操作作用于不同的对象时可以有不同的解释和行为。</td><td>- 增强了程序的灵活性和扩展性<br>- 允许不同类的对象被统一处理</td></tr></tbody></table><blockquote><p>类比</p></blockquote><ol><li><strong>封装</strong>: 就像一个咖啡机，它隐藏了内部的复杂机械过程，只暴露出简单的接口（按钮）给用户使用。</li><li><strong>继承</strong>: 类似于父母与孩子的关系。孩子会继承父母的一些特征（如眼睛的颜色），同时也可以发展自己独特的特性（如不同的职业技能）。</li><li><strong>多态</strong>: 可以比作一个通用的电源插座。不同的电器（即使是不同类型的电器）都可以插入同一个插座，但插入后的行为（如充电、运转）依赖于接入的具体电器。</li></ol><h4 id="_1-5、接口与抽象类" tabindex="-1">1.5、接口与抽象类 <a class="header-anchor" href="#_1-5、接口与抽象类" aria-label="Permalink to &quot;1.5、接口与抽象类&quot;">​</a></h4><blockquote><p>接口和抽象类的区别</p></blockquote><ul><li>首先是类和接口的区别，接口可以实现多个接口，类只能继承单个；</li><li>然后更多的是用法上面的区别：接口是一个协议，强调功能的相似性（相同的行为）；抽闲类强调的是类之间的共性（公共类结构）。</li></ul><hr><p>接口（Interfaces）和抽象类（Abstract Classes）是用于实现抽象层次的两种主要方式。</p><p>它们都不能被实例化，但在用法和目的上存在一些关键区别。</p><blockquote><p>对比</p></blockquote><table tabindex="0"><thead><tr><th>特征</th><th>接口（Interfaces）</th><th>抽象类（Abstract Classes）</th></tr></thead><tbody><tr><td>实例化</td><td>不能直接实例化。</td><td>也不能直接实例化。</td></tr><tr><td>方法定义</td><td>可以有默认方法和静态方法。所有方法默认为public。不需要使用<code>abstract</code>关键字。</td><td>可以包含抽象方法（没有实现体的方法）和非抽象方法。抽象方法使用<code>abstract</code>关键字。</td></tr><tr><td>属性定义</td><td>只能定义常量（默认为public static final）。</td><td>可以包含非常量字段，且这些字段可以有各种访问控制。</td></tr><tr><td>实现/扩展</td><td>一个类可以实现多个接口。</td><td>一个类只能继承一个抽象类。</td></tr><tr><td>构造器</td><td>不能有构造器。</td><td>可以有构造器。</td></tr><tr><td>多重继承的支持</td><td>支持（一个类可以实现多个接口）。</td><td>不支持（一个类只能继承一个类，但可以实现多个接口）。</td></tr><tr><td>默认方法</td><td>Java 8之后，接口可以有默认方法（有方法体）。</td><td>抽象类可以有具有实现的方法。</td></tr><tr><td>访问修饰符限制</td><td>接口中的方法默认是public的，属性默认是public static final的。</td><td>抽象类中的方法和属性可以有多种访问修饰符。</td></tr><tr><td>使用场景</td><td>当各个实现之间没有共享的代码，但需要共同遵守某些规则（方法）时使用。</td><td>当各个实现之间有大量共享的代码或属性时使用。</td></tr></tbody></table><p>类比</p><ol><li><strong>接口</strong>: 就像一个标准或协议，它定义了规范，但不提供完整的实现。就像电器的插头和插座的标准，制造商需要按照这个标准制造产品。</li><li><strong>抽象类</strong>: 可以看作是半成品，它定义了一些基本功能和结构，但留下了一些空白（抽象方法）供继承它的子类完成。</li></ol><h4 id="_1-6、深拷贝与浅拷贝-引用拷贝" tabindex="-1">1.6、深拷贝与浅拷贝，引用拷贝 <a class="header-anchor" href="#_1-6、深拷贝与浅拷贝-引用拷贝" aria-label="Permalink to &quot;1.6、深拷贝与浅拷贝，引用拷贝&quot;">​</a></h4><p>区别：</p><ul><li><strong>浅拷贝</strong>：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。</li><li><strong>深拷贝</strong>：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象</li></ul><p>对比</p><table tabindex="0"><thead><tr><th>类型</th><th>描述</th><th>结果</th></tr></thead><tbody><tr><td>浅拷贝</td><td>只复制对象的基本类型字段和引用类型字段的引用，不复制引用对象本身。</td><td>两个对象共享引用类型的成员。</td></tr><tr><td>深拷贝</td><td>复制对象的所有字段，包括基本类型和引用类型字段，引用类型的对象也会被复制。</td><td>两个对象完全独立，不共享任何成员。</td></tr><tr><td>引用拷贝</td><td>只复制对象的引用，不复制对象本身。</td><td>两个引用指向同一个对象，任何一个对象的改变都会影响到另一个。</td></tr></tbody></table><p>类比</p><ul><li><strong>浅拷贝</strong>: 就像拍摄一张画作的照片，你得到的是画作的表面复制品，但它仍然连接着原来的画。</li><li><strong>深拷贝</strong>: 就像复制一个画作的每一笔细节来创建一个全新的画作，完全独立于原作。</li><li><strong>引用拷贝</strong>: 就像给别人画作的一个指向地址，两人看的是同一幅画。</li></ul><p>图描述：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240109211507.png" alt="image.png"></p><h4 id="_1-7、内部类" tabindex="-1">1.7、内部类 <a class="header-anchor" href="#_1-7、内部类" aria-label="Permalink to &quot;1.7、内部类&quot;">​</a></h4><blockquote><p>什么是内部类</p></blockquote><p>内部类是定义在另一个类内部的类。在Java中，内部类主要用于将一些逻辑密切相关的类组织在一起，从而提供更好的封装和维护性。</p><p>内部类提供了一种强大的方式来组织和封装复杂的逻辑，但同时也增加了代码的复杂性。因此，在使用内部类时应该权衡其带来的好处和复杂性。</p><p><strong>基本概念</strong>:</p><ul><li>内部类可以访问其外部类的成员，包括私有成员。</li><li>内部类的对象与其外部类的对象之间存在联系。</li></ul><blockquote><p>内部类的类型</p></blockquote><ul><li><strong>成员内部类</strong>（非静态内部类）：定义在外部类的成员位置，需要外部类的实例来创建。</li><li><strong>静态内部类</strong>：用<code>static</code>修饰的内部类，不需要外部类的实例就可以创建。</li><li><strong>局部内部类</strong>：定义在方法内的类，只在该方法的作用域内可见和可用。</li><li><strong>匿名内部类</strong>：没有名字的局部内部类，通常用于创建那些只需要一次使用的类实例。</li></ul><p>详细一些的解释：</p><p><strong>成员内部类</strong>:</p><ul><li>定义在外部类的成员位置。</li><li>可以访问外部类的所有成员，包括私有成员。</li><li>需要外部类的实例来创建。</li><li>语法：<code>OuterClass.InnerClass innerObject = outerObject.new InnerClass();</code></li></ul><p><strong>静态内部类</strong>:</p><ul><li>用<code>static</code>修饰，是外部类的静态成员。</li><li>可以不依赖于外部类实例被创建。</li><li>只能访问外部类的静态成员。</li><li>语法：<code>OuterClass.StaticInnerClass innerObject = new OuterClass.StaticInnerClass();</code></li></ul><p><strong>局部内部类</strong>:</p><ul><li>定义在方法内部。</li><li>只能在定义它的方法中被使用。</li><li>可以访问外部类的所有成员和方法内的final局部变量。</li></ul><p><strong>匿名内部类</strong>:</p><ul><li>没有名称的局部内部类。</li><li>通常用于实现接口或继承抽象类的临时需求。</li><li>语法：<code>new InterfaceName() { /* 实现 */ }</code> 或 <code>new ClassName() { /* 扩展 */ }</code>。</li></ul><blockquote><p>使用示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例：成员内部类、静态内部类、局部内部类和匿名内部类的使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class OuterClass {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String outerField = &quot;Outer&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 成员内部类</span></span>
<span class="line"><span>    class MemberInnerClass {</span></span>
<span class="line"><span>        void display() {</span></span>
<span class="line"><span>            System.out.println(&quot;Member Inner Class: &quot; + outerField);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 静态内部类</span></span>
<span class="line"><span>    static class StaticInnerClass {</span></span>
<span class="line"><span>        void display() {</span></span>
<span class="line"><span>            System.out.println(&quot;Static Inner Class&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void test() {</span></span>
<span class="line"><span>        // 局部内部类</span></span>
<span class="line"><span>        class LocalInnerClass {</span></span>
<span class="line"><span>            void display() {</span></span>
<span class="line"><span>                System.out.println(&quot;Local Inner Class: &quot; + outerField);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        LocalInnerClass localInner = new LocalInnerClass();</span></span>
<span class="line"><span>        localInner.display();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 匿名内部类</span></span>
<span class="line"><span>    Runnable getRunnable() {</span></span>
<span class="line"><span>        return new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;Anonymous Inner Class&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        OuterClass outer = new OuterClass();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用成员内部类</span></span>
<span class="line"><span>        OuterClass.MemberInnerClass memberInner = outer.new MemberInnerClass();</span></span>
<span class="line"><span>        memberInner.display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用静态内部类</span></span>
<span class="line"><span>        OuterClass.StaticInnerClass staticInner = new OuterClass.StaticInnerClass();</span></span>
<span class="line"><span>        staticInner.display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用局部内部类</span></span>
<span class="line"><span>        outer.test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用匿名内部类</span></span>
<span class="line"><span>        Runnable runnable = outer.getRunnable();</span></span>
<span class="line"><span>        runnable.run();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="匿名内部类" tabindex="-1">匿名内部类 <a class="header-anchor" href="#匿名内部类" aria-label="Permalink to &quot;匿名内部类&quot;">​</a></h5><p>参考： <a href="https://www.cnblogs.com/nerxious/archive/2013/01/25/2876489.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/nerxious/archive/2013/01/25/2876489.html</a></p><p>一般使用匿名内部类是用来简化代码编写，匿名内部类一般只使用一次</p><p>如何使用：使用匿名内部类需要继承一个父类或实现一个接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//当不使用匿名内部类的情况</span></span>
<span class="line"><span>abstract class Person {</span></span>
<span class="line"><span>    public abstract void eat();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class Child extends Person {</span></span>
<span class="line"><span>    public void eat() {</span></span>
<span class="line"><span>        System.out.println(&quot;eat something&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Person p = new Child();</span></span>
<span class="line"><span>        p.eat();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//当使用匿名内部类的情况</span></span>
<span class="line"><span>//匿名内部类的基本实现</span></span>
<span class="line"><span>abstract class Person {</span></span>
<span class="line"><span>    public abstract void eat();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Person p = new Person() {</span></span>
<span class="line"><span>            public void eat() {</span></span>
<span class="line"><span>                System.out.println(&quot;eat something&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        p.eat();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在接口上使用匿名内部类</span></span>
<span class="line"><span>interface Person {</span></span>
<span class="line"><span>    public void eat();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Person p = new Person() {</span></span>
<span class="line"><span>            public void eat() {</span></span>
<span class="line"><span>                System.out.println(&quot;eat something&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        p.eat();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Thread类的匿名内部类实现</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Thread t = new Thread() {</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span>                    System.out.print(i + &quot; &quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        t.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Runnable接口的匿名内部类实现</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Runnable r = new Runnable() {</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span>                    System.out.print(i + &quot; &quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        Thread t = new Thread(r);</span></span>
<span class="line"><span>        t.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="二、object" tabindex="-1">二、Object <a class="header-anchor" href="#二、object" aria-label="Permalink to &quot;二、Object&quot;">​</a></h3><h4 id="_2-1-object-类的常用方法" tabindex="-1">2.1 Object 类的常用方法 <a class="header-anchor" href="#_2-1-object-类的常用方法" aria-label="Permalink to &quot;2.1 Object 类的常用方法&quot;">​</a></h4><p>Object 类是一个特殊的类，是所有类的父类。它主要提供了以下 11 个方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final native Class&lt;?&gt; getClass()</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public native int hashCode()</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public boolean equals(Object obj)</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * native 方法，用于创建并返回当前对象的一份拷贝。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>protected native Object clone() throws CloneNotSupportedException</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public String toString()</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final native void notify()</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final native void notifyAll()</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final native void wait(long timeout) throws InterruptedException</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final void wait(long timeout, int nanos) throws InterruptedException</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public final void wait() throws InterruptedException</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 实例被垃圾回收器回收的时候触发的操作</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>protected void finalize() throws Throwable { }</span></span></code></pre></div><p>以下是Java中 <code>Object</code> 类的常用方法的总结，包括每个方法的功能和特性：</p><table tabindex="0"><thead><tr><th>方法签名</th><th>返回类型</th><th>描述</th><th>特性</th></tr></thead><tbody><tr><td><code>public final native Class&lt;?&gt; getClass()</code></td><td><code>Class&lt;?&gt;</code></td><td>返回当前运行时对象的Class对象。</td><td>使用 <code>final</code> 和 <code>native</code> 关键字，不能被子类重写</td></tr><tr><td><code>public native int hashCode()</code></td><td>int</td><td>返回对象的哈希码，主要用于哈希表。</td><td><code>native</code> 方法，通常与 <code>equals()</code> 方法一起使用。</td></tr><tr><td><code>public boolean equals(Object obj)</code></td><td>boolean</td><td>比较两个对象的内存地址是否相等。String类重写了此方法来比较字符串值。</td><td>可被子类重写以提供相等性逻辑。</td></tr><tr><td><code>protected native Object clone()</code></td><td>Object</td><td>创建并返回当前对象的一份拷贝。</td><td><code>native</code> 方法，类必须实现 <code>Cloneable</code> 接口才能使用此方法。</td></tr><tr><td><code>public String toString()</code></td><td>String</td><td>返回对象的字符串表示，通常包括类名和哈希码的16进制字符串。</td><td>建议所有子类重写此方法。</td></tr><tr><td><code>public final native void notify()</code></td><td>void</td><td>唤醒在此对象监视器上等待的单个线程。</td><td>使用 <code>final</code> 和 <code>native</code> 关键字，不能被子类重写。</td></tr><tr><td><code>public final native void notifyAll()</code></td><td>void</td><td>唤醒在此对象监视器上等待的所有线程。</td><td>使用 <code>final</code> 和 <code>native</code> 关键字，不能被子类重写。</td></tr><tr><td><code>public final native void wait(long timeout)</code></td><td>void</td><td>使当前线程等待直到另一个线程调用 <code>notify()</code> 或 <code>notifyAll()</code>，或超时。</td><td>使用 <code>final</code> 和 <code>native</code> 关键字，不能被子类重写。释放对象的锁。</td></tr><tr><td><code>public final void wait(long timeout, int nanos)</code></td><td>void</td><td>使当前线程等待直到另一个线程调用 <code>notify()</code> 或 <code>notifyAll()</code>，或超时加额外纳秒。</td><td>使用 <code>final</code> 关键字，不能被子类重写。释放对象的锁。</td></tr><tr><td><code>public final void wait()</code></td><td>void</td><td>使当前线程无限期等待，直到另一个线程调用 <code>notify()</code> 或 <code>notifyAll()</code>。</td><td>使用 <code>final</code> 关键字，不能被子类重写。释放对象的锁。</td></tr><tr><td><code>protected void finalize()</code></td><td>void</td><td>在对象被垃圾回收器回收时触发的操作。</td><td>在Java 9中被弃用，但子类可以重写以进行清理操作。</td></tr></tbody></table><p>这些方法提供了对象行为的基本框架，从对象的生命周期管理到线程间的通信。</p><h4 id="_2-2-和-equals-的区别" tabindex="-1">2.2 == 和 equals() 的区别 <a class="header-anchor" href="#_2-2-和-equals-的区别" aria-label="Permalink to &quot;2.2 == 和 equals() 的区别&quot;">​</a></h4><p>== 对于基本类型和引用类型的作用效果是不同的：</p><ul><li>对于基本数据类型来说，== 比较的是值。</li><li>对于引用数据类型来说，== 比较的是对象的内存地址。</li></ul><p>在Java中，== 运算符和<code>equals()</code>方法用于比较两个对象，但它们在比较方式上有本质的不同。</p><blockquote><p>== 运算符</p></blockquote><ol><li><p><strong>用途</strong>: 主要用于比较基本数据类型的值和引用类型的地址。</p></li><li><p><strong>对基本类型</strong>: 比较两个基本类型的值是否相同（例如，<code>int</code>, <code>char</code>, <code>double</code>等）。</p></li><li><p><strong>对引用类型</strong>: 比较两个对象引用是否指向内存中的同一位置。</p></li></ol><blockquote><p><code>equals()</code> 方法</p></blockquote><ol><li><p><strong>用途</strong>: 主要用于比较两个对象的内容或状态是否相等。</p></li><li><p><strong>默认行为</strong>: 在 <code>Object</code> 类中定义的 <code>equals()</code> 方法默认行为与 == 相同，即比较对象的内存地址。</p></li><li><p><strong>重写</strong>: 多数类，如 <code>String</code>, <code>Date</code> 等，都重写了 <code>equals()</code> 方法来进行逻辑比较，即比较对象的内容而不是内存地址。</p></li></ol><blockquote><p>表格比较</p></blockquote><table tabindex="0"><thead><tr><th>特性</th><th>== 运算符</th><th><code>equals()</code> 方法</th></tr></thead><tbody><tr><td>比较类型</td><td>基本数据类型的值 / 引用类型的内存地址</td><td>对象内容（可重写）</td></tr><tr><td>默认行为</td><td>比较内存地址（对于引用类型）</td><td>在 <code>Object</code> 类中也是比较内存地址</td></tr><tr><td>可重写性</td><td>不可重写</td><td>可以重写以提供自定义比较逻辑</td></tr><tr><td>使用场景</td><td>当需要检查两个变量是否指向相同的对象时使用</td><td>当需要检查两个对象是否在逻辑上相等时使用</td></tr><tr><td>例子</td><td><code>a == b</code>（对于基本类型或检查两个引用是否指向同一对象）</td><td><code>a.equals(b)</code>（对于检查两个对象的内容是否相等）</td></tr></tbody></table><blockquote><p>类比</p></blockquote><ul><li><p><strong>== 运算符</strong>: 就像检查两张名片上的地址是否一样，即使两张名片属于同一人，但如果地址不同，结果就是不相等。</p></li><li><p><strong><code>equals()</code> 方法</strong>: 就像比较两个人的面貌，即使他们住在不同的地方（不同的内存地址），只要面貌相同（内容相同），就认为他们相等。</p></li></ul><p>扩展的一些问题：</p><p>to be conteind...</p><h4 id="_2-3-hashcode-有什么用" tabindex="-1">2.3 hashCode 有什么用 <a class="header-anchor" href="#_2-3-hashcode-有什么用" aria-label="Permalink to &quot;2.3 hashCode 有什么用&quot;">​</a></h4><p><code>hashCode()</code> 的作用是获取哈希码（<code>int</code> 整数），也称为散列码。这个哈希码的作用是确定该对象在哈希表中的索引位置。</p><p><code>hashCode()</code> 定义在 JDK 的 <code>Object</code> 类中，这就意味着 Java 中的任何类都包含有 <code>hashCode()</code> 函数。另外需要注意的是：<code>Object</code> 的 <code>hashCode()</code> 方法是本地方法，也就是用 C 语言或 C++ 实现的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public native int hashCode();</span></span></code></pre></div><p>散列表存储的是键值对(key-value)，它的特点是：<strong>能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）</strong></p><p>hashCode() 和 equals() 方法</p><ul><li>如果两个对象的<code>hashCode</code> 值相等，那这两个对象不一定相等（哈希碰撞）。</li><li>如果两个对象的<code>hashCode</code> 值相等并且<code>equals()</code>方法也返回 <code>true</code>，我们才认为这两个对象相等。</li><li>如果两个对象的<code>hashCode</code> 值不相等，我们就可以直接认为这两个对象不相等。</li></ul><blockquote><p>为什么重写 equals() 时必须重写 hashCode() 方法？</p></blockquote><p>因为两个相等的对象的 <code>hashCode</code> 值必须是相等。也就是说如果 <code>equals</code> 方法判断两个对象是相等的，那这两个对象的 <code>hashCode</code> 值也要相等。</p><p>如果重写 <code>equals()</code> 时没有重写 <code>hashCode()</code> 方法的话就可能会导致 <code>equals</code> 方法判断是相等的两个对象，<code>hashCode</code> 值却不相等。</p><p><strong>思考</strong>：重写 <code>equals()</code> 时没有重写 <code>hashCode()</code> 方法的话，使用 <code>HashMap</code> 可能会出现什么问题。</p><p>如果没有重写哈希函数的话，两个键获取哈希表位置索引可能会不对，造成一些现象，比如：在集合中查找对象时可能会失败，即使该对象已经存在；即使使用一个逻辑上相等的键去查找，也可能无法找到对应的值，导致数据访问上的问题等。</p><blockquote><p>散列表</p></blockquote><p>散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在存储器存储位置的数据结构。也就是说，它通过计算出一个键值的函数，将所需查询的数据映射到表中一个位置来让人访问，这加快了查找速度。</p><p>这个映射函数称做散列函数，存放记录的数组称做散列表。</p><p>一个通俗的例子是，</p><p>为了查找电话簿中某人的号码，可以创建一个按照人名首字母顺序排列的表（即建立人名 x 到首字母 F(x) 的一个函数关系），在首字母为W的表中查找“王”姓的电话号码，显然比直接查找就要快得多。这里使用人名作为关键字，“取首字母”是这个例子中散列函数的函数法则 F( )，存放首字母的表对应散列表。关键字和函数法则理论上可以任意确定。</p><blockquote><p>哈希表</p></blockquote><p>哈希表（Hash Table）其实也叫散列表，是一个数据结构。</p><p>哈希表本质上就是一个数组，只不过数组存放的是单一的数据，而哈希表中存放的是键值对（key - value pair）</p><p>key 通过哈希函数（hash function）得到数组的索引，进而存取索引位置的值。</p><p>不同的 key 通过哈希函数可能得到相同的索引值，此时，产生了哈希碰撞。</p><p>通过在数组中插入链表或者二叉树，可以解决哈希碰撞问题。</p><hr><h3 id="三、string" tabindex="-1">三、String <a class="header-anchor" href="#三、string" aria-label="Permalink to &quot;三、String&quot;">​</a></h3><h4 id="_3-1-string、stringbuffer、stringbuilder-的区别" tabindex="-1">3.1 String、StringBuffer、StringBuilder 的区别？ <a class="header-anchor" href="#_3-1-string、stringbuffer、stringbuilder-的区别" aria-label="Permalink to &quot;3.1  String、StringBuffer、StringBuilder 的区别？&quot;">​</a></h4><table tabindex="0"><thead><tr><th>特性</th><th><code>String</code></th><th><code>StringBuffer</code></th><th><code>StringBuilder</code></th></tr></thead><tbody><tr><td>可变性</td><td>不可变</td><td>可变</td><td>可变</td></tr><tr><td>线程安全</td><td>是</td><td>是</td><td>否</td></tr><tr><td>性能</td><td>较低（对于频繁修改）</td><td>高（线程安全）</td><td>高（非线程安全）</td></tr><tr><td>用途</td><td>文本不频繁改变时</td><td>多线程中文本频繁改变</td><td>单线程中文本频繁改变</td></tr></tbody></table><p>String 是通过 final 进行修饰的，我们每次对<code>String</code>对象的修改实际都会生成一个新的<code>String</code>对象。</p><p><code>StringBuffer</code>和<code>StringBuilder</code>的默认容量大小都是16个字符。</p><h4 id="_3-2-string-为什么是不可变的" tabindex="-1">3.2 String 为什么是不可变的 <a class="header-anchor" href="#_3-2-string-为什么是不可变的" aria-label="Permalink to &quot;3.2 String 为什么是不可变的&quot;">​</a></h4><p><code>String</code> 真正不可变有下面几点原因：</p><ol><li>保存字符串的数组被 <code>final</code> 修饰且为私有的，并且<code>String</code> 类没有提供/暴露修改这个字符串的方法。</li><li><code>String</code> 类被 <code>final</code> 修饰导致其不能被继承，进而避免了子类破坏 <code>String</code> 不可变</li></ol><h4 id="_3-3-字符串拼接用-还是-stringbuilder" tabindex="-1">3.3 字符串拼接用“+” 还是 StringBuilder? <a class="header-anchor" href="#_3-3-字符串拼接用-还是-stringbuilder" aria-label="Permalink to &quot;3.3  字符串拼接用“+” 还是 StringBuilder?&quot;">​</a></h4><p>Java 语言本身并不支持运算符重载，“+”和“+=”是专门为 String 类重载过的运算符，也是 Java 中仅有的两个重载过的运算符。</p><p>在JDK8中，字符串对象通过“+”的字符串拼接方式，实际上是通过 <code>StringBuilder</code> 调用 <code>append()</code> 方法实现的，拼接完成之后调用 <code>toString()</code> 得到一个 <code>String</code> 对象 。</p><p>不过，在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：<strong>编译器不会创建单个 <code>StringBuilder</code> 以复用，会导致创建过多的 <code>StringBuilder</code> 对象</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String str1 = &quot;he&quot;;</span></span>
<span class="line"><span>String str2 = &quot;llo&quot;;</span></span>
<span class="line"><span>String str3 = &quot;world&quot;;</span></span>
<span class="line"><span>String str4 = str1 + str2 + str3;</span></span></code></pre></div><p>对应字节码</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202401101412356.png" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String[] arr = {&quot;he&quot;, &quot;llo&quot;, &quot;world&quot;};</span></span>
<span class="line"><span>String s = &quot;&quot;;</span></span>
<span class="line"><span>for (int i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    s += arr[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System.out.println(s);</span></span></code></pre></div><p><code>StringBuilder</code> 对象是在循环内部被创建的，这意味着每循环一次就会创建一个 <code>StringBuilder</code> 对象</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202401101412821.png" alt="image.png"></p><p>如果直接使用 <code>StringBuilder</code> 对象进行字符串拼接的话，就不会存在这个问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String[] arr = {&quot;he&quot;, &quot;llo&quot;, &quot;world&quot;};</span></span>
<span class="line"><span>StringBuilder s = new StringBuilder();</span></span>
<span class="line"><span>for (String value : arr) {</span></span>
<span class="line"><span>    s.append(value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System.out.println(s);</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202401101413874.png" alt="image.png"></p><p>而在 JDK9中，字符串相加 “+” 改为了用动态方法 <code>makeConcatWithConstants()</code> 来实现，而不是大量的 <code>StringBuilder</code>；这也意味着 JDK 9 之后，我们可以放心使用“+” 进行字符串拼接。</p><h4 id="_3-4-string-equals-和-object-equals-有何区别" tabindex="-1">3.4 String#equals() 和 Object#equals() 有何区别 <a class="header-anchor" href="#_3-4-string-equals-和-object-equals-有何区别" aria-label="Permalink to &quot;3.4  String#equals() 和 Object#equals() 有何区别&quot;">​</a></h4><p><code>String</code> 中的 <code>equals</code> 方法是被重写过的，比较的是 String 字符串的值是否相等。 <code>Object</code> 的 <code>equals</code> 方法是比较的对象的内存地址。</p><h4 id="_3-5-字符串常量池-🐎" tabindex="-1">3.5 字符串常量池 🐎 <a class="header-anchor" href="#_3-5-字符串常量池-🐎" aria-label="Permalink to &quot;3.5 字符串常量池   🐎&quot;">​</a></h4><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在堆中创建字符串对象”ab“</span></span>
<span class="line"><span>// 将字符串对象”ab“的引用保存在字符串常量池中</span></span>
<span class="line"><span>String aa = &quot;ab&quot;;</span></span>
<span class="line"><span>// 直接返回字符串常量池中字符串对象”ab“的引用</span></span>
<span class="line"><span>String bb = &quot;ab&quot;;</span></span>
<span class="line"><span>System.out.println(aa==bb);// true</span></span></code></pre></div><blockquote><p>说一下字符串常量池在JVM中的位置</p></blockquote><p>字符串常量池是被存放在方法区这个位置；方法区 1.7 之前是叫永久代；1.8 之后是叫元空间（存放在本地内存）</p><p>说一下 方法区和 堆的区别，主要说一下存放内容的差别：</p><ul><li>方法区： <ul><li>存储已被虚拟机加载的类信息、常量、静态变量、即时编译后的代码等数据。</li><li>方法区存储类结构（如运行时常量池、字段、方法数据）等。</li></ul></li><li>堆：存储对象实例和数组，是垃圾收集器管理的主要区域，也是Java应用最大的内存消耗区域。</li></ul><hr><p>最近也看到了字符串常量池的相关概念，通过直接赋值的方式创建的Stirng 字符串是存放在了常量池的位置；</p><p>而通过 new 的方式是放到了 堆内存。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例：String的创建方式</span></span>
<span class="line"><span>String s1 = &quot;a&quot;;  // 字符串常量池</span></span>
<span class="line"><span>String s2 = new String(&quot;a&quot;);  // 堆内存</span></span></code></pre></div><p>当您在Java中使用<code>String s = &quot;a&quot;;</code>和<code>String s = new String(&quot;a&quot;);</code>这两种方式创建字符串时，它们在内存中的存储方式不同。</p><ol><li><strong><code>String s = &quot;a&quot;;</code></strong>: <ul><li>这种方式创建的字符串对象存储在字符串常量池中。</li><li>字符串常量池位于Java堆内存中，但它是一块特殊的存储区域，专门用于存放字符串常量。</li><li>如果字符串常量池已经包含了一个等于<code>&quot;a&quot;</code>的字符串，那么<code>s1</code>将指向这个已存在的字符串，而不是创建一个新的。</li></ul></li><li><strong><code>String s = new String(&quot;a&quot;);</code></strong>: <ul><li>这种方式创建的字符串对象存储在堆内存中。</li><li>使用<code>new</code>关键字会强制在堆内存中创建一个新的<code>String</code>对象，即使字符串常量池中已经存在一个相同内容的字符串。</li><li>这意味着即使内容相同，<code>s2</code>也是一个全新的对象。</li></ul></li></ol><p>在大多数情况下，推荐使用字符串字面量的方式（如<code>&quot;a&quot;</code>），这样可以更有效地利用Java的字符串常量池，提高性能和减少内存开销。使用<code>new String(&quot;a&quot;)</code>的方式主要在某些特定场景下使用，例如，当你需要创建一个与常量池中字符串内容相同但是独立的对象时。</p><h4 id="_3-6-string-s1-new-string-abc-这句话创建了几个字符串对象-🐕" tabindex="-1">3.6 String s1 = new String(&quot;abc&quot;);这句话创建了几个字符串对象 🐕 <a class="header-anchor" href="#_3-6-string-s1-new-string-abc-这句话创建了几个字符串对象-🐕" aria-label="Permalink to &quot;3.6 String s1 = new String(&quot;abc&quot;);这句话创建了几个字符串对象  🐕&quot;">​</a></h4><p>会创建 1 或 2 个字符串对象。</p><p>to be contined...</p><h4 id="_3-7-intern-方法" tabindex="-1">3.7 intern 方法 <a class="header-anchor" href="#_3-7-intern-方法" aria-label="Permalink to &quot;3.7 intern 方法&quot;">​</a></h4><p><code>String.intern()</code> 是一个 native（本地）方法，其作用是将指定的字符串对象的引用保存在字符串常量池中</p><p>to be contined...</p><h4 id="_3-8-string-类型的变量和常量做-运算时发生了什么" tabindex="-1">3.8 String 类型的变量和常量做“+”运算时发生了什么 <a class="header-anchor" href="#_3-8-string-类型的变量和常量做-运算时发生了什么" aria-label="Permalink to &quot;3.8 String 类型的变量和常量做“+”运算时发生了什么&quot;">​</a></h4><p>to be contined...</p><h4 id="_3-9-编码转换" tabindex="-1">3.9 编码转换 <a class="header-anchor" href="#_3-9-编码转换" aria-label="Permalink to &quot;3.9  编码转换&quot;">​</a></h4><p>先直接看操作示例代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例：String字符串的编码转换</span></span>
<span class="line"><span>String originalStr = &quot;Hello, 世界&quot;;  // 假设这是UTF-8编码的字符串</span></span>
<span class="line"><span>byte[] bytes;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    // 将字符串从UTF-8转换为ISO-8859-1</span></span>
<span class="line"><span>    bytes = originalStr.getBytes(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>    String newStr = new String(bytes, &quot;ISO-8859-1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将字符串从ISO-8859-1转回UTF-8</span></span>
<span class="line"><span>    bytes = newStr.getBytes(&quot;ISO-8859-1&quot;);</span></span>
<span class="line"><span>    String finalStr = new String(bytes, &quot;UTF-8&quot;);</span></span>
<span class="line"><span>} catch (UnsupportedEncodingException e) {</span></span>
<span class="line"><span>    e.printStackTrace();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>字符串（<code>String</code>）的编码转换操作步骤：</p><ul><li>将<code>String</code>转换为字节数组 <ul><li>使用<code>String</code>的<code>getBytes(String charsetName)</code>方法，<code>charsetName</code>是目标编码格式，如&quot;UTF-8&quot;、&quot;ISO-8859-1&quot;等</li></ul></li><li>从字节数组重新创建<code>String</code><ul><li>使用<code>new String(byte[] bytes, String charsetName)</code>构造函数</li></ul></li></ul><p>需要注意的是，不是所有的字符都可以在不同的编码之间无损转换。例如，将包含中文字符的字符串从UTF-8转换为ISO-8859-1可能会丢失信息，因为ISO-8859-1编码不支持中文字符。因此，在进行编码转换时，应确保目标编码能够支持源字符串中的所有字符。</p><p>此外，处理编码转换时还需要注意<code>UnsupportedEncodingException</code>异常，这种异常会在指定了不支持的字符集时抛出。在实际应用中，应适当处理或抛出这种异常。</p><h4 id="_3-10-字符串工具类-stringutils" tabindex="-1">3.10 字符串工具类 StringUtils <a class="header-anchor" href="#_3-10-字符串工具类-stringutils" aria-label="Permalink to &quot;3.10  字符串工具类 StringUtils&quot;">​</a></h4><blockquote><p>字符串工具类 isEmpty 和 isBlank 的区别</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例：字符串工具类中的 isEmpty 和 isBlank 方法</span></span>
<span class="line"><span>public class StringUtils {</span></span>
<span class="line"><span>    public static boolean isEmpty(String str) {</span></span>
<span class="line"><span>        return str == null || str.length() == 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static boolean isBlank(String str) {</span></span>
<span class="line"><span>        return str == null || str.trim().length() == 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>isEmpty 方法会检查字符串是否为 null 以及长度为 0 ;isEmpty(&quot; &quot;) → false</li><li>isBlank 方法会检查字符串是否为 null 以及是否是空字符串; isBlank(&quot; &quot;) → true</li></ul><hr><h3 id="四、常用api" tabindex="-1">四、常用API <a class="header-anchor" href="#四、常用api" aria-label="Permalink to &quot;四、常用API&quot;">​</a></h3><h4 id="enum" tabindex="-1">Enum <a class="header-anchor" href="#enum" aria-label="Permalink to &quot;Enum&quot;">​</a></h4><p>枚举类是JDK1.5引入的一个类型</p><p>参考：</p><ul><li><a href="https://javaniuniu.com/java/enums/01" target="_blank" rel="noreferrer">https://javaniuniu.com/java/enums/01</a></li><li><a href="https://blog.csdn.net/qq_27093465/article/details/52180865" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_27093465/article/details/52180865</a></li></ul><blockquote><p>枚举类常量</p></blockquote><p>枚举是一个特殊的class, 相当于被 final static修饰，是不能被继承的；同时所有的枚举都继承自java.lang.Enum类， 由于Java 不支持多继承，所以枚举对象不能再继承其他类的</p><p>最简单的使用方法是把相关的常量分组到一个枚举类型里，示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public enum Color {  </span></span>
<span class="line"><span>  RED, GREEN, BLANK, YELLOW  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>同时 switch 是支持 枚举类型的参数的，也是一种常见的用法；</p><p>除此之外，可以看一下向枚举中添加新方法等用法，覆盖枚举方法等操作。</p><p>to be contined...</p><p>写法规范建议：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202401311026670.png" alt="image.png"></p><hr><p>参考</p><ul><li><a href="https://javaguide.cn/java/basis/java-basic-questions-02.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/basis/java-basic-questions-02.html</a></li><li><a href="https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E8%A1%A8" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/哈希表</a></li><li><a href="https://www.cnblogs.com/Steven-HU/p/14505316.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/Steven-HU/p/14505316.html</a></li></ul>`,193)])])}const b=s(t,[["render",l]]);export{h as __pageData,b as default};
