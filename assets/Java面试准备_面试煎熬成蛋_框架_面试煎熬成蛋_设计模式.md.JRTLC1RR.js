import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"面试煎熬成蛋_设计模式","description":"","frontmatter":{"title":"面试煎熬成蛋_设计模式","excerpt":"面试煎熬成蛋_设计模式","date":"2024-03-10 20:29:44","updated":"2024-03-10 20:29:44"},"headers":[],"relativePath":"Java面试准备/面试煎熬成蛋_框架/面试煎熬成蛋_设计模式.md","filePath":"Java面试准备/面试煎熬成蛋_框架/面试煎熬成蛋_设计模式.md","lastUpdated":null}'),l={name:"Java面试准备/面试煎熬成蛋_框架/面试煎熬成蛋_设计模式.md"};function i(t,s,c,o,r,g){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>问法：框架中的设计模式、项目中的设计模式</p><p>有空整合一下 <a href="./.html">编程_设计模式</a></p><h4 id="工厂设计模式" tabindex="-1">工厂设计模式 <a class="header-anchor" href="#工厂设计模式" aria-label="Permalink to &quot;工厂设计模式&quot;">​</a></h4><p>讲一下工厂设计模式，你在项目中是如何使用的</p><p>工厂设计模式主要用于创建对象，尤其是在创建对象的逻辑比较复杂时，可以将对象的创建和使用分离，提高系统的灵活性和可维护性。</p><p>工厂模式主要有三种变体：</p><ul><li>简单工厂模式</li><li>工厂方法模式</li><li>抽象工厂模式</li></ul><hr><p>有空可以系统化学习一下设计模式相关的内容，包括符号表示和创建型 xxx 等概念。(软件工厂体系内容)</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302202206.png" alt="image.png"></p><h5 id="简单工厂模式" tabindex="-1">简单工厂模式 <a class="header-anchor" href="#简单工厂模式" aria-label="Permalink to &quot;简单工厂模式&quot;">​</a></h5><p>简单工厂模式又叫静态工厂方法模式，就是建立一个工厂类，对实现了同一接口的一些类进行 实例的创建</p><p>接口 → 不同实现类 → 创建交给工厂类</p><blockquote><ol><li>简单工厂模式（Simple Factory）</li></ol></blockquote><p>简单工厂模式并不是GoF（四人帮）定义的设计模式之一，但它是工厂模式的一种简化，主要用于创建同一类对象。</p><ul><li><strong>结构</strong>：一个工厂类根据传入的参数，决定创建出哪一种产品类的实例。</li><li><strong>优点</strong>：将对象的创建和使用分离。</li><li><strong>缺点</strong>：工厂类的职责相对过重，增加新的产品时需要修改工厂类的逻辑，违反了开闭原则。</li></ul><p>示例：这里给出一个简单工厂模式的Java代码示例，模拟一个日常项目中可能遇到的场景：根据不同的日志类型（如文件日志、数据库日志）创建不同的日志记录器。</p><p>首先，定义一个日志记录器接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface Logger {</span></span>
<span class="line"><span>    void log(String message);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后，实现具体的日志记录器类，如文件日志记录器和数据库日志记录器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class FileLogger implements Logger {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void log(String message) {</span></span>
<span class="line"><span>        System.out.println(&quot;Logging to a file: &quot; + message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class DatabaseLogger implements Logger {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void log(String message) {</span></span>
<span class="line"><span>        System.out.println(&quot;Logging to a database: &quot; + message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来，创建简单工厂类，用于根据日志类型创建具体的日志记录器对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class LoggerFactory {</span></span>
<span class="line"><span>    public static Logger getLogger(String type) {</span></span>
<span class="line"><span>        if (type == null) {</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (type.equalsIgnoreCase(&quot;FILE&quot;)) {</span></span>
<span class="line"><span>            return new FileLogger();</span></span>
<span class="line"><span>        } else if (type.equalsIgnoreCase(&quot;DATABASE&quot;)) {</span></span>
<span class="line"><span>            return new DatabaseLogger();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，演示如何使用这个简单工厂来创建并使用不同类型的日志记录器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class SimpleFactoryDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Logger fileLogger = LoggerFactory.getLogger(&quot;FILE&quot;);</span></span>
<span class="line"><span>        fileLogger.log(&quot;This is a message to log in a file.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Logger databaseLogger = LoggerFactory.getLogger(&quot;DATABASE&quot;);</span></span>
<span class="line"><span>        databaseLogger.log(&quot;This is a message to log in a database.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面示例代码的核心：将对象的创建与使用分离</p><p>在这个示例中，<code>LoggerFactory</code>类根据传入的日志类型参数（&quot;FILE&quot;或&quot;DATABASE&quot;）决定创建并返回哪种类型的<code>Logger</code>实例。 这样，当需要增加新的日志类型时，只需添加新的<code>Logger</code>实现类并修改<code>LoggerFactory</code>类即可，而使用日志记录器的客户端代码不需要任何改动。</p><h5 id="工厂方法模式" tabindex="-1">工厂方法模式 <a class="header-anchor" href="#工厂方法模式" aria-label="Permalink to &quot;工厂方法模式&quot;">​</a></h5><blockquote><ol start="2"><li>工厂方法模式（Factory Method）</li></ol></blockquote><p>工厂方法模式定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个。工厂方法让类的实例化推迟到子类中进行。</p><ul><li><strong>结构</strong>：定义一个创建对象的接口，但由实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化延迟到其子类。</li><li><strong>优点</strong>：在添加新产品时不需要修改已有的工厂类，符合开闭原则。</li><li><strong>缺点</strong>：每增加一个产品，就需要增加一个具体类和对象实现工厂，增加了系统的复杂度。</li></ul><p>示例使用：</p><p>假设我们有一个应用，需要根据不同的文件类型（如文本文件、图像文件）来处理文件，我们可以为每种文件类型定义一个处理器，并使用工厂方法模式来创建相应的文件处理器。</p><p>首先，定义一个<code>FileProcessor</code>接口和几个实现这个接口的类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// FileProcessor接口</span></span>
<span class="line"><span>public interface FileProcessor {</span></span>
<span class="line"><span>    void process(String fileName);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文本文件处理器</span></span>
<span class="line"><span>public class TextFileProcessor implements FileProcessor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void process(String fileName) {</span></span>
<span class="line"><span>        System.out.println(&quot;Processing text file: &quot; + fileName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图像文件处理器</span></span>
<span class="line"><span>public class ImageFileProcessor implements FileProcessor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void process(String fileName) {</span></span>
<span class="line"><span>        System.out.println(&quot;Processing image file: &quot; + fileName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接着，定义一个抽象的工厂类，以及具体的工厂类来实现这个接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 抽象工厂类</span></span>
<span class="line"><span>public abstract class FileProcessorFactory {</span></span>
<span class="line"><span>    // 工厂方法</span></span>
<span class="line"><span>    public abstract FileProcessor createProcessor();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文本文件处理器工厂</span></span>
<span class="line"><span>public class TextFileProcessorFactory extends FileProcessorFactory {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public FileProcessor createProcessor() {</span></span>
<span class="line"><span>        return new TextFileProcessor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图像文件处理器工厂</span></span>
<span class="line"><span>public class ImageFileProcessorFactory extends FileProcessorFactory {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public FileProcessor createProcessor() {</span></span>
<span class="line"><span>        return new ImageFileProcessor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，使用这些工厂来创建并使用文件处理器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class FactoryMethodDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        FileProcessorFactory textFactory = new TextFileProcessorFactory();</span></span>
<span class="line"><span>        FileProcessor textProcessor = textFactory.createProcessor();</span></span>
<span class="line"><span>        textProcessor.process(&quot;document.txt&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        FileProcessorFactory imageFactory = new ImageFileProcessorFactory();</span></span>
<span class="line"><span>        FileProcessor imageProcessor = imageFactory.createProcessor();</span></span>
<span class="line"><span>        imageProcessor.process(&quot;image.png&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个示例中，<code>FileProcessorFactory</code>是一个抽象的工厂类，它定义了一个抽象的<code>createProcessor</code>方法。<code>TextFileProcessorFactory</code>和<code>ImageFileProcessorFactory</code>是具体的工厂类，它们实现了<code>createProcessor</code>方法来创建具体类型的文件处理器。 这样，当我们需要处理不同类型的文件时，只需要使用相应类型的工厂实例来创建处理器，而不需要直接实例化处理器对象。</p><p>使用方法和简单工厂模式类似，不过区别是：工厂方法模式每增加一个产品，就需要增加一个具体类和对象实现工厂。</p><hr><h5 id="抽象工厂模式" tabindex="-1">抽象工厂模式 <a class="header-anchor" href="#抽象工厂模式" aria-label="Permalink to &quot;抽象工厂模式&quot;">​</a></h5><p>抽象工厂模式是在简单工厂的基础上将未来可能需要修改的代码抽象出来，通过继承的方式让 子类去做决定。</p><p>接口 → 不同实现类</p><p>抽象工厂（定义统一行为） → 实现类工厂（不同接口方法组合） → 子类决定实例化具体类</p><p>抽象工厂模式是一种创建型设计模式，它允许创建一系列相关或相互依赖的对象，而无需指定它们具体的类。这种模式通过定义一个用于创建一组对象的接口（抽象工厂），让子类决定实例化具体类。</p><blockquote><ol start="3"><li>抽象工厂模式（Abstract Factory）</li></ol></blockquote><p>抽象工厂模式提供了一个接口，用于创建相关的对象家族，而不需要明确指定具体类。</p><ul><li><strong>结构</strong>：多个抽象产品类，每个抽象产品类可以派生出多个具体产品类；一个抽象工厂类，可以派生出多个具体工厂类，每个具体工厂类可以创建多个具体产品类的实例，不同的工厂类互不影响。</li><li><strong>优点</strong>：能够确保客户端使用的是同一家族的产品。</li><li><strong>缺点</strong>：当产品家族中需要增加一个新的产品时，所有的工厂类都需要进行修改。</li></ul><p>示例：假设我们需要创建跨平台的UI元素，例如按钮和复选框，不同的操作系统（如Windows和Mac）有不同风格的UI元素实现。</p><p>首先，定义抽象产品接口及其具体实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 抽象产品 - 按钮</span></span>
<span class="line"><span>interface Button {</span></span>
<span class="line"><span>    void paint();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体产品 - Windows按钮</span></span>
<span class="line"><span>class WindowsButton implements Button {</span></span>
<span class="line"><span>    public void paint() {</span></span>
<span class="line"><span>        System.out.println(&quot;Render a button in a Windows style.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体产品 - Mac按钮</span></span>
<span class="line"><span>class MacButton implements Button {</span></span>
<span class="line"><span>    public void paint() {</span></span>
<span class="line"><span>        System.out.println(&quot;Render a button in a Mac style.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象产品 - 复选框</span></span>
<span class="line"><span>interface Checkbox {</span></span>
<span class="line"><span>    void paint();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体产品 - Windows复选框</span></span>
<span class="line"><span>class WindowsCheckbox implements Checkbox {</span></span>
<span class="line"><span>    public void paint() {</span></span>
<span class="line"><span>        System.out.println(&quot;Render a checkbox in a Windows style.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体产品 - Mac复选框</span></span>
<span class="line"><span>class MacCheckbox implements Checkbox {</span></span>
<span class="line"><span>    public void paint() {</span></span>
<span class="line"><span>        System.out.println(&quot;Render a checkbox in a Mac style.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来，定义抽象工厂接口及其具体实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 抽象工厂</span></span>
<span class="line"><span>interface GUIFactory {</span></span>
<span class="line"><span>    Button createButton();</span></span>
<span class="line"><span>    Checkbox createCheckbox();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体工厂 - Windows工厂</span></span>
<span class="line"><span>class WindowsFactory implements GUIFactory {</span></span>
<span class="line"><span>    public Button createButton() {</span></span>
<span class="line"><span>        return new WindowsButton();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public Checkbox createCheckbox() {</span></span>
<span class="line"><span>        return new WindowsCheckbox();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体工厂 - Mac工厂</span></span>
<span class="line"><span>class MacFactory implements GUIFactory {</span></span>
<span class="line"><span>    public Button createButton() {</span></span>
<span class="line"><span>        return new MacButton();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public Checkbox createCheckbox() {</span></span>
<span class="line"><span>        return new MacCheckbox();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，客户端代码根据不同的需求创建不同的UI元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class AbstractFactoryDemo {</span></span>
<span class="line"><span>    private static GUIFactory factory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void configure(String osType) {</span></span>
<span class="line"><span>        if (osType.equalsIgnoreCase(&quot;Windows&quot;)) {</span></span>
<span class="line"><span>            factory = new WindowsFactory();</span></span>
<span class="line"><span>        } else if (osType.equalsIgnoreCase(&quot;Mac&quot;)) {</span></span>
<span class="line"><span>            factory = new MacFactory();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            throw new IllegalArgumentException(&quot;Unknown operating system type.&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        configure(&quot;Windows&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Button button = factory.createButton();</span></span>
<span class="line"><span>        Checkbox checkbox = factory.createCheckbox();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        button.paint();</span></span>
<span class="line"><span>        checkbox.paint();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，抽象工厂<code>GUIFactory</code>提供了创建一系列产品（按钮和复选框）的接口，而<code>WindowsFactory</code>和<code>MacFactory</code>具体实现了这些接口，分别创建Windows风格和Mac风格的UI元素。</p><p>客户端代码通过抽象工厂接口与具体工厂解耦，使得在不同环境下可以灵活地更换工厂，而不需要修改客户端代码。</p><h4 id="策略模式" tabindex="-1">策略模式 <a class="header-anchor" href="#策略模式" aria-label="Permalink to &quot;策略模式&quot;">​</a></h4><blockquote><p>讲一下策略模式，你在项目中是如何使用的</p></blockquote><p>策略模式定义了算法族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。</p><ul><li><strong>结构</strong>：一个策略接口，多个策略实现类；一个上下文（Context）类，用来维护一个策略对象。</li><li><strong>优点</strong>：策略模式提供了管理相关的算法族的方法。</li><li><strong>缺点</strong>：客户端必须知道所有的策略类，并自行决定使用哪一个策略类。</li></ul><p>策略模式（Strategy Pattern）允许在运行时选择算法的行为。这种模式定义了一系列算法，并将每一个算法封装起来，使它们可以互相替换。策略模式让算法独立于使用它的客户而变化。</p><p>以下是策略模式的一个具体示例，演示了如何实现一个简单的支付系统，该系统根据不同的支付策略（如信用卡支付、PayPal支付）来处理支付。</p><p>首先，定义支付策略接口和具体策略类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 支付策略接口</span></span>
<span class="line"><span>public interface PaymentStrategy {</span></span>
<span class="line"><span>    void pay(int amount);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 信用卡支付策略</span></span>
<span class="line"><span>public class CreditCardStrategy implements PaymentStrategy {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private String cardNumber;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CreditCardStrategy(String name, String cardNumber) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.cardNumber = cardNumber;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void pay(int amount) {</span></span>
<span class="line"><span>        System.out.println(amount + &quot; paid with credit card.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// PayPal支付策略</span></span>
<span class="line"><span>public class PaypalStrategy implements PaymentStrategy {</span></span>
<span class="line"><span>    private String emailId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public PaypalStrategy(String email) {</span></span>
<span class="line"><span>        this.emailId = email;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void pay(int amount) {</span></span>
<span class="line"><span>        System.out.println(amount + &quot; paid using PayPal.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来，定义一个上下文（Context）类，它将根据客户选择的支付策略来处理支付：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ShoppingCart {</span></span>
<span class="line"><span>    private List&lt;Item&gt; items;</span></span>
<span class="line"><span>    private PaymentStrategy paymentStrategy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ShoppingCart() {</span></span>
<span class="line"><span>        this.items = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addItem(Item item) {</span></span>
<span class="line"><span>        this.items.add(item);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {</span></span>
<span class="line"><span>        this.paymentStrategy = paymentStrategy;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int calculateTotal() {</span></span>
<span class="line"><span>        int sum = 0;</span></span>
<span class="line"><span>        for (Item item : items) {</span></span>
<span class="line"><span>            sum += item.getPrice();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return sum;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void pay() {</span></span>
<span class="line"><span>        int amount = calculateTotal();</span></span>
<span class="line"><span>        paymentStrategy.pay(amount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，演示如何使用不同的支付策略来处理支付：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class StrategyPatternDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ShoppingCart cart = new ShoppingCart();</span></span>
<span class="line"><span>        cart.addItem(new Item(&quot;1234&quot;, 10));</span></span>
<span class="line"><span>        cart.addItem(new Item(&quot;5678&quot;, 40));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用信用卡支付</span></span>
<span class="line"><span>        cart.setPaymentStrategy(new CreditCardStrategy(&quot;John Doe&quot;, &quot;1234567890123456&quot;));</span></span>
<span class="line"><span>        cart.pay();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 改用PayPal支付</span></span>
<span class="line"><span>        cart.setPaymentStrategy(new PaypalStrategy(&quot;john.doe@example.com&quot;));</span></span>
<span class="line"><span>        cart.pay();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个示例中，<code>PaymentStrategy</code>接口定义了支付方法，<code>CreditCardStrategy</code>和<code>PaypalStrategy</code>是具体的支付策略实现。<code>ShoppingCart</code>类允许客户添加商品并设置支付策略。在客户端代码中，可以根据需要轻松更换支付策略，无需修改购物车代码。这样，策略模式使得算法可以独立于使用它的客户端变化，并且可以动态地在运行时改变算法。</p><hr><p>上述策略模式的基础使用是通过定义了一个抽象类，然后根据实际的不同行为来进行不同策略行为的实现</p><p>策略接口 → 不同策略实现类（对应不同行为实现）</p><p>一般常用的操作还可以：</p><ul><li>1、定义了一个公共接口 A，里面定义了不同的策略接口（具体是实现会交给抽象类的子类）</li><li>2、定义了一个抽象类，这个抽象类实现了公共接口 A，并提供一些公共参数和方法</li><li>3、具体实现类继承抽象类，然后实现公共接口 A 中的某种策略。</li></ul><p>通过一个中转的抽象类，可用在这个抽象类中加一些公共的内容，可能对于策略模式的使用也是一种比较好的借鉴。</p><h4 id="模板模式" tabindex="-1">模板模式 <a class="header-anchor" href="#模板模式" aria-label="Permalink to &quot;模板模式&quot;">​</a></h4><p>模板模式主要是定义一个抽象类，然后这个抽象类中的核心方法中会定义一个既定的行为执行顺序</p><p>示例：</p><p>假设我们有一个制作饮料的过程，不同的饮料（如咖啡和茶）制作过程中的某些步骤相同（比如煮沸水），而某些步骤不同（如冲泡的原料不同）。我们可以使用模板方法模式来实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 抽象类</span></span>
<span class="line"><span>abstract class Beverage {</span></span>
<span class="line"><span>    // 模板方法，制作饮料的步骤</span></span>
<span class="line"><span>    final void prepareRecipe() {</span></span>
<span class="line"><span>        boilWater();</span></span>
<span class="line"><span>        brew();</span></span>
<span class="line"><span>        pourInCup();</span></span>
<span class="line"><span>        addCondiments();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 抽象方法，由子类实现</span></span>
<span class="line"><span>    abstract void brew();</span></span>
<span class="line"><span>    abstract void addCondiments();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void boilWater() {</span></span>
<span class="line"><span>        System.out.println(&quot;Boiling water&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void pourInCup() {</span></span>
<span class="line"><span>        System.out.println(&quot;Pouring into cup&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体类，咖啡</span></span>
<span class="line"><span>class Coffee extends Beverage {</span></span>
<span class="line"><span>    void brew() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dripping Coffee through filter&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void addCondiments() {</span></span>
<span class="line"><span>        System.out.println(&quot;Adding Sugar and Milk&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体类，茶</span></span>
<span class="line"><span>class Tea extends Beverage {</span></span>
<span class="line"><span>    void brew() {</span></span>
<span class="line"><span>        System.out.println(&quot;Steeping the tea&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void addCondiments() {</span></span>
<span class="line"><span>        System.out.println(&quot;Adding Lemon&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 客户端代码</span></span>
<span class="line"><span>public class TemplateMethodDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Beverage tea = new Tea();</span></span>
<span class="line"><span>        Beverage coffee = new Coffee();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;Making tea...&quot;);</span></span>
<span class="line"><span>        tea.prepareRecipe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;\\nMaking coffee...&quot;);</span></span>
<span class="line"><span>        coffee.prepareRecipe();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="组合模式" tabindex="-1">组合模式 <a class="header-anchor" href="#组合模式" aria-label="Permalink to &quot;组合模式&quot;">​</a></h4><p>比较适合：构建树状结构的对象组合，通过定义一个组件接口，然后在组合对象中使用到了这个组件接口</p><p>示例：</p><p>我们将创建一个文件系统的树状结构，其中包含文件和文件夹。</p><p>定义组件接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 组件接口</span></span>
<span class="line"><span>interface Component {</span></span>
<span class="line"><span>    void showInfo();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建叶子对象 <code>File</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 叶子对象 - 文件</span></span>
<span class="line"><span>class File implements Component {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public File(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void showInfo() {</span></span>
<span class="line"><span>        System.out.println(&quot;File: &quot; + name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建组合对象 <code>Folder</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组合对象 - 文件夹</span></span>
<span class="line"><span>class Folder implements Component {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private List&lt;Component&gt; children = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Folder(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void add(Component component) {</span></span>
<span class="line"><span>        children.add(component);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void remove(Component component) {</span></span>
<span class="line"><span>        children.remove(component);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void showInfo() {</span></span>
<span class="line"><span>        System.out.println(&quot;Folder: &quot; + name);</span></span>
<span class="line"><span>        for (Component component : children) {</span></span>
<span class="line"><span>            component.showInfo();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>客户端代码使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class CompositePatternDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        File file1 = new File(&quot;file1.txt&quot;);</span></span>
<span class="line"><span>        File file2 = new File(&quot;file2.txt&quot;);</span></span>
<span class="line"><span>        Folder folder1 = new Folder(&quot;Folder 1&quot;);</span></span>
<span class="line"><span>        folder1.add(file1);</span></span>
<span class="line"><span>        folder1.add(file2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        File file3 = new File(&quot;file3.txt&quot;);</span></span>
<span class="line"><span>        Folder folder2 = new Folder(&quot;Folder 2&quot;);</span></span>
<span class="line"><span>        folder2.add(file3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Folder rootFolder = new Folder(&quot;Root&quot;);</span></span>
<span class="line"><span>        rootFolder.add(folder1);</span></span>
<span class="line"><span>        rootFolder.add(folder2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rootFolder.showInfo();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个示例中，我们创建了文件和文件夹的树状结构，其中包含了叶子对象和组合对象。客户端可以递归地访问整个文件系统，而不需要关心对象是文件还是文件夹，体现了组合模式的统一处理特性。</p><h4 id="责任链模式" tabindex="-1">责任链模式 <a class="header-anchor" href="#责任链模式" aria-label="Permalink to &quot;责任链模式&quot;">​</a></h4><blockquote><p>讲一下责任链模式，你在项目中是如何使用的</p></blockquote><p>责任链模式为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦。</p><ul><li><strong>结构</strong>：抽象处理者角色（Handler）定义了一个处理请求的接口，一系列具体处理者（ConcreteHandler）尝试处理请求，如果一个对象不能处理该请求，它会把相同的请求传给下一个接收者，依此类推。</li><li><strong>优点</strong>：降低耦合度。它将请求的发送者和接收者解耦。</li><li><strong>缺点</strong>：在找到正确的处理对象之前，所有的条件判断都要被执行一遍，当责任链过长时，可能会影响性能，尤其是在递归调用的时候。</li></ul><p>关于责任链和策略模式的具体使用，需要再看一下相关视频： <a href="https://www.bilibili.com/list/watchlater" target="_blank" rel="noreferrer">https://www.bilibili.com/list/watchlater</a></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240317095803.png" alt="image.png"></p><p>优缺点</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240317100107.png" alt="image.png"></p><p>常用场景</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240317100219.png" alt="image.png"></p><hr><p>责任链模式</p><p>责任链：通过客户端定义执行链条，并设置下一链条执行流程，</p><p>责任链模式：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。</p><p>典型使用：SpringMVC 中的拦截器</p><p>示例：</p><p>考虑一个简单的日志系统，它可以根据消息的严重性将消息输出到不同的地方（例如：控制台、文件、邮件等）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>abstract class Logger {</span></span>
<span class="line"><span>    public static int INFO = 1;</span></span>
<span class="line"><span>    public static int DEBUG = 2;</span></span>
<span class="line"><span>    public static int ERROR = 3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected int level;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //责任链中的下一个元素</span></span>
<span class="line"><span>    protected Logger nextLogger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setNextLogger(Logger nextLogger) {</span></span>
<span class="line"><span>        this.nextLogger = nextLogger;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void logMessage(int level, String message) {</span></span>
<span class="line"><span>        if (this.level &lt;= level) {</span></span>
<span class="line"><span>            write(message);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (nextLogger != null) {</span></span>
<span class="line"><span>            nextLogger.logMessage(level, message);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    abstract protected void write(String message);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ConsoleLogger extends Logger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ConsoleLogger(int level) {</span></span>
<span class="line"><span>        this.level = level;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void write(String message) {        </span></span>
<span class="line"><span>        System.out.println(&quot;Standard Console::Logger: &quot; + message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ErrorLogger extends Logger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ErrorLogger(int level) {</span></span>
<span class="line"><span>        this.level = level;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void write(String message) {        </span></span>
<span class="line"><span>        System.out.println(&quot;Error Console::Logger: &quot; + message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class FileLogger extends Logger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public FileLogger(int level) {</span></span>
<span class="line"><span>        this.level = level;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void write(String message) {</span></span>
<span class="line"><span>        System.out.println(&quot;File::Logger: &quot; + message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ChainPatternDemo {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    private static Logger getChainOfLoggers(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Logger errorLogger = new ErrorLogger(Logger.ERROR);</span></span>
<span class="line"><span>        Logger fileLogger = new FileLogger(Logger.DEBUG);</span></span>
<span class="line"><span>        Logger consoleLogger = new ConsoleLogger(Logger.INFO);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        errorLogger.setNextLogger(fileLogger);</span></span>
<span class="line"><span>        fileLogger.setNextLogger(consoleLogger);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return errorLogger;  </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Logger loggerChain = getChainOfLoggers();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        loggerChain.logMessage(Logger.INFO, &quot;This is an information.&quot;);</span></span>
<span class="line"><span>        loggerChain.logMessage(Logger.DEBUG, &quot;This is a debug level information.&quot;);</span></span>
<span class="line"><span>        loggerChain.logMessage(Logger.ERROR, &quot;This is an error information.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，我们创建了一个日志处理的链。每个处理器（<code>ConsoleLogger</code>、<code>FileLogger</code>、<code>ErrorLogger</code>）负责处理特定类型的日志消息。<code>logMessage</code>方法会根据消息的级别决定是否由当前处理器处理，如果不是，则传递给链中的下一个处理器。</p><hr><p>责任链模式：客户端定义一个处理链条，一般情况下是：如果链路中它中间有一环能够处理，则这个链路进行处理，不行再到下一个链路</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240317101818.png" alt="image.png"></p><h4 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h4><blockquote><p>你平常有了解过单例模式吗，一般怎么实现单例模式</p></blockquote><p>单例模式是一种常用的软件设计模式，在应用这个模式时，单例对象的类必须保证只有一个实 例存在，整个系统只能使用一个对象实例</p><p>单例模式有很多种写法，懒汉模式， 饿汉模式，双重检查模式等。懒汉模式就是用的时候再去创建对象，饿汉模式就是提前就已经加载 好的静态static对象，双重检查模式就是两次检查避免多线程造成创建了多个对象。</p><p>单例模式有很多种的写法</p><ul><li>（1）饿汉式单例模式的写法：线程安全</li><li>（2）懒汉式单例模式的写法：非线程安全</li><li>（3）双检锁单例模式的写法：线程安全</li></ul><p>饿汉式</p><p>饿汉式单例模式在类加载时就完成了实例的初始化。它通过确保构造函数为private，避免了类在外部被实例化，在自己内部定义了自己的一个实例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class SingletonEager {</span></span>
<span class="line"><span>    // 在类加载时就完成实例化</span></span>
<span class="line"><span>    private static final SingletonEager instance = new SingletonEager();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 私有构造函数，防止被实例化</span></span>
<span class="line"><span>    private SingletonEager() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取唯一可用的对象</span></span>
<span class="line"><span>    public static SingletonEager getInstance() {</span></span>
<span class="line"><span>        return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>懒汉式</p><p>懒汉式单例模式在第一次被引用时，才会将自己实例化。它同样保证了构造函数为private，确保类不能在外部被实例化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class SingletonLazy {</span></span>
<span class="line"><span>    private static SingletonLazy instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private SingletonLazy() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用synchronized关键字保证线程安全</span></span>
<span class="line"><span>    public static synchronized SingletonLazy getInstance() {</span></span>
<span class="line"><span>        if (instance == null) {</span></span>
<span class="line"><span>            instance = new SingletonLazy();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>双检锁单例模式</p><p>双检锁单例模式结合了懒汉式单例模式的懒加载特性和饿汉式单例模式的线程安全特性。它在<code>getInstance()</code>方法中两次检查实例是否已经创建，并使用同步块确保只有一个实例被创建。这种方式既能保证线程安全，也能够减少同步带来的性能影响。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class SingletonDoubleCheckedLocking {</span></span>
<span class="line"><span>    // 使用volatile关键字确保多线程环境下的可见性和禁止指令重排</span></span>
<span class="line"><span>    private static volatile SingletonDoubleCheckedLocking instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private SingletonDoubleCheckedLocking() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static SingletonDoubleCheckedLocking getInstance() {</span></span>
<span class="line"><span>        // 第一次检查，避免不必要的同步</span></span>
<span class="line"><span>        if (instance == null) {</span></span>
<span class="line"><span>            synchronized (SingletonDoubleCheckedLocking.class) {</span></span>
<span class="line"><span>                // 第二次检查，确保只有一个实例被创建</span></span>
<span class="line"><span>                if (instance == null) {</span></span>
<span class="line"><span>                    instance = new SingletonDoubleCheckedLocking();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>每种单例模式实现方式都有其适用场景：</p><ul><li><strong>饿汉式</strong>适合于单例对象较少时使用。</li><li><strong>懒汉式</strong>适合于单例对象较多或单例对象创建开销大时使用，但需注意线程安全问题。</li><li><strong>双检锁</strong>则是一种既保证了懒加载也保证了线程安全的优化方案，但使用复杂且需要注意<code>volatile</code>关键字的使用。</li></ul><h5 id="你在项目中有使用过单例模式吗" tabindex="-1">你在项目中有使用过单例模式吗 <a class="header-anchor" href="#你在项目中有使用过单例模式吗" aria-label="Permalink to &quot;你在项目中有使用过单例模式吗&quot;">​</a></h5><h4 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h4><p>代理模式是给某一个对象提供一个代理，并由代理对象控制对原对象的引用。</p><p>代理模式是一种结构型设计模式，它为其他对象提供一个代理以控制对这个对象的访问。代理对象在客户端和目标对象之间起到中介的作用，可以在不改变目标对象接口的前提下，增强或控制对目标对象的访问。</p><p>对目标对象进行一定额外的操作</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240316231329.png" alt="image.png"></p>`,141)])])}const h=n(l,[["render",i]]);export{u as __pageData,h as default};
