import{_ as n,o as a,c as p,am as l}from"./chunks/framework.CiF4W93w.js";const d=JSON.parse('{"title":"HashMap","description":"","frontmatter":{"title":"HashMap","excerpt":"HashMap 学习","date":"2023-11-15 15:00:00","updated":"2023-11-15 15:00:00"},"headers":[],"relativePath":"基础/核心类库与集合框架/Java 集合框架/HashMap.md","filePath":"基础/核心类库与集合框架/Java 集合框架/HashMap.md","lastUpdated":null}'),e={name:"基础/核心类库与集合框架/Java 集合框架/HashMap.md"};function t(i,s,c,o,r,h){return a(),p("div",null,[...s[0]||(s[0]=[l(`<p>将 HashMap 的相关内容单独拿出来讲一下</p><h3 id="_1、基础概念" tabindex="-1">1、基础概念 <a class="header-anchor" href="#_1、基础概念" aria-label="Permalink to &quot;1、基础概念&quot;">​</a></h3><p>HashMap 主要用来存放键值对，基于哈希表的 Map 接口实现，是常用的 Java 集合之一。</p><p>HashMap是非线程安全的，效率较高。</p><p>它可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个</p><p><strong>底层数据结构</strong>：</p><ul><li>JDK1.8 之前 HashMap 由 数组+链表 组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。</li><li>JDK1.8 以后的 <code>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于等于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。</li></ul><p><strong>扩充机制</strong>：<code>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。并且， <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小。</p><blockquote><p>HashMap的常用方法</p></blockquote><ul><li>1、put(K key, V value)： 将键（key）/值（value）映射存放到Map集合中。</li><li>2、get(Object key)： 返回指定键所映射的值，没有该key对应的值则返回 null。</li><li>3、size()： 返回Map集合中数据数量。</li><li>4、clear()： 清空Map集合。</li><li>5、isEmpty()： 判断Map集合中是否有数据，如果没有则返回true，否则返回false。</li><li>6、remove(Object key)： 删除Map集合中键为key的数据并返回其所对应value值。</li><li>7、values()： 返回Map集合中所有value组成的以Collection数据类型格式数据。</li><li>8、containsKey(Object key)： 判断集合中是否包含指定键，包含返回 true，否则返回false。</li><li>9、containsValue(Object value)： 判断集合中是否包含指定值，包含返回 true，否则返回false。</li><li>10、keySet()： 返回Map集合中所有key组成的Set集合。</li><li>11、entrySet()： 将Map集合每个key-value转换为一个Entry对象并返回由所有的Entry对象组成的Set集合。</li></ul><blockquote><p>HashMap 常用方法测试</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Collection;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.Set;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class HashMapDemo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        HashMap&lt;String, String&gt; map = new HashMap&lt;String, String&gt;();</span></span>
<span class="line"><span>        // 键不能重复，值可以重复</span></span>
<span class="line"><span>        map.put(&quot;san&quot;, &quot;张三&quot;);</span></span>
<span class="line"><span>        map.put(&quot;si&quot;, &quot;李四&quot;);</span></span>
<span class="line"><span>        map.put(&quot;wu&quot;, &quot;王五&quot;);</span></span>
<span class="line"><span>        map.put(&quot;wang&quot;, &quot;老王&quot;);</span></span>
<span class="line"><span>        map.put(&quot;wang&quot;, &quot;老王2&quot;);// 老王被覆盖</span></span>
<span class="line"><span>        map.put(&quot;lao&quot;, &quot;老王&quot;);</span></span>
<span class="line"><span>        System.out.println(&quot;-------直接输出hashmap:-------&quot;);</span></span>
<span class="line"><span>        System.out.println(map);</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 遍历HashMap</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        // 1.获取Map中的所有键</span></span>
<span class="line"><span>        System.out.println(&quot;-------foreach获取Map中所有的键:------&quot;);</span></span>
<span class="line"><span>        Set&lt;String&gt; keys = map.keySet();</span></span>
<span class="line"><span>        for (String key : keys) {</span></span>
<span class="line"><span>            System.out.print(key+&quot;  &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.println();//换行</span></span>
<span class="line"><span>        // 2.获取Map中所有值</span></span>
<span class="line"><span>        System.out.println(&quot;-------foreach获取Map中所有的值:------&quot;);</span></span>
<span class="line"><span>        Collection&lt;String&gt; values = map.values();</span></span>
<span class="line"><span>        for (String value : values) {</span></span>
<span class="line"><span>            System.out.print(value+&quot;  &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.println();//换行</span></span>
<span class="line"><span>        // 3.得到key的值的同时得到key所对应的值</span></span>
<span class="line"><span>        System.out.println(&quot;-------得到key的值的同时得到key所对应的值:-------&quot;);</span></span>
<span class="line"><span>        Set&lt;String&gt; keys2 = map.keySet();</span></span>
<span class="line"><span>        for (String key : keys2) {</span></span>
<span class="line"><span>            System.out.print(key + &quot;：&quot; + map.get(key)+&quot;   &quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 如果既要遍历key又要value，那么建议这种方式，因为如果先获取keySet然后再执行map.get(key)，map内部会执行两次遍历。</span></span>
<span class="line"><span>         * 一次是在获取keySet的时候，一次是在遍历所有key的时候。</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        // 当我调用put(key,value)方法的时候，首先会把key和value封装到</span></span>
<span class="line"><span>        // Entry这个静态内部类对象中，把Entry对象再添加到数组中，所以我们想获取</span></span>
<span class="line"><span>        // map中的所有键值对，我们只要获取数组中的所有Entry对象，接下来</span></span>
<span class="line"><span>        // 调用Entry对象中的getKey()和getValue()方法就能获取键值对了</span></span>
<span class="line"><span>        Set&lt;java.util.Map.Entry&lt;String, String&gt;&gt; entrys = map.entrySet();</span></span>
<span class="line"><span>        for (java.util.Map.Entry&lt;String, String&gt; entry : entrys) {</span></span>
<span class="line"><span>            System.out.println(entry.getKey() + &quot;--&quot; + entry.getValue());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * HashMap其他常用方法</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        System.out.println(&quot;after map.size()：&quot;+map.size());</span></span>
<span class="line"><span>        System.out.println(&quot;after map.isEmpty()：&quot;+map.isEmpty());</span></span>
<span class="line"><span>        System.out.println(map.remove(&quot;san&quot;));</span></span>
<span class="line"><span>        System.out.println(&quot;after map.remove()：&quot;+map);</span></span>
<span class="line"><span>        System.out.println(&quot;after map.get(si)：&quot;+map.get(&quot;si&quot;));</span></span>
<span class="line"><span>        System.out.println(&quot;after map.containsKey(si)：&quot;+map.containsKey(&quot;si&quot;));</span></span>
<span class="line"><span>        System.out.println(&quot;after containsValue(李四)：&quot;+map.containsValue(&quot;李四&quot;));</span></span>
<span class="line"><span>        System.out.println(map.replace(&quot;si&quot;, &quot;李四2&quot;));</span></span>
<span class="line"><span>        System.out.println(&quot;after map.replace(si, 李四2):&quot;+map);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2、底层数据结构" tabindex="-1">2、底层数据结构 <a class="header-anchor" href="#_2、底层数据结构" aria-label="Permalink to &quot;2、底层数据结构&quot;">​</a></h3><h4 id="jdk1-8-之前" tabindex="-1">JDK1.8 之前 <a class="header-anchor" href="#jdk1-8-之前" aria-label="Permalink to &quot;JDK1.8 之前&quot;">​</a></h4><p>JDK1.8 之前 HashMap 底层是 <strong>数组和链表</strong> 结合在一起使用（ <strong>链表散列</strong>）。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231115224010.png" alt="image.png"></p><p>HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 <code>(n - 1) &amp; hash</code> 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，<strong>如果相同的话，直接覆盖</strong>，不相同就通过拉链法解决冲突。</p><p>所谓扰动函数指的就是 HashMap 的 hash 方法。</p><p>使用 hash 方法（扰动函数）是为了防止一些实现比较差的 hashCode() 方法 ，使用扰动函数之后可以减少碰撞。</p><p>所谓 <strong>“拉链法”</strong> 是：将链表和数组相结合。也就是说创建一个链表数组，<strong>数组中每一格就是一个链表</strong>。若遇到哈希冲突，则将冲突的值加到链表中即可。</p><p><strong>hash 方法</strong></p><p>JDK 1.8 HashMap 的 hash 方法源码:</p><p>JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    static final int hash(Object key) {</span></span>
<span class="line"><span>      int h;</span></span>
<span class="line"><span>      // key.hashCode()：返回散列值也就是hashcode</span></span>
<span class="line"><span>      // ^：按位异或</span></span>
<span class="line"><span>      // &gt;&gt;&gt;:无符号右移，忽略符号位，空位都以0补齐</span></span>
<span class="line"><span>      return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>JDK1.7 的 HashMap 的 hash 方法源码.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>static int hash(int h) {</span></span>
<span class="line"><span>    // This function ensures that hashCodes that differ only by</span></span>
<span class="line"><span>    // constant multiples at each bit position have a bounded</span></span>
<span class="line"><span>    // number of collisions (approximately 8 at default load factor).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    h ^= (h &gt;&gt;&gt; 20) ^ (h &gt;&gt;&gt; 12);</span></span>
<span class="line"><span>    return h ^ (h &gt;&gt;&gt; 7) ^ (h &gt;&gt;&gt; 4);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能稍差一点，因为毕竟扰动了 4 次。</p><h4 id="jdk1-8-之后" tabindex="-1">JDK1.8 之后 <a class="header-anchor" href="#jdk1-8-之后" aria-label="Permalink to &quot;JDK1.8 之后&quot;">​</a></h4><p>当链表长度大于阈值（默认为 8）时，会首先调用 <code>treeifyBin()</code>方法。</p><p>这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。</p><p>否则，就是只是执行 <code>resize()</code> 方法对数组扩容。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231115223309.png" alt="image.png"></p><h4 id="hashmap-的类属性" tabindex="-1">HashMap 的类属性 <a class="header-anchor" href="#hashmap-的类属性" aria-label="Permalink to &quot;HashMap 的类属性&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class HashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt; implements Map&lt;K,V&gt;, Cloneable, Serializable {</span></span>
<span class="line"><span>    // 序列号</span></span>
<span class="line"><span>    private static final long serialVersionUID = 362498820763181265L;</span></span>
<span class="line"><span>    // 默认的初始容量是16</span></span>
<span class="line"><span>    static final int DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4;</span></span>
<span class="line"><span>    // 最大容量</span></span>
<span class="line"><span>    static final int MAXIMUM_CAPACITY = 1 &lt;&lt; 30;</span></span>
<span class="line"><span>    // 默认的负载因子</span></span>
<span class="line"><span>    static final float DEFAULT_LOAD_FACTOR = 0.75f;</span></span>
<span class="line"><span>    // 当桶(bucket)上的结点数大于等于这个值时会转成红黑树</span></span>
<span class="line"><span>    static final int TREEIFY_THRESHOLD = 8;</span></span>
<span class="line"><span>    // 当桶(bucket)上的结点数小于等于这个值时树转链表</span></span>
<span class="line"><span>    static final int UNTREEIFY_THRESHOLD = 6;</span></span>
<span class="line"><span>    // 桶中结构转化为红黑树对应的table的最小容量</span></span>
<span class="line"><span>    static final int MIN_TREEIFY_CAPACITY = 64;</span></span>
<span class="line"><span>    // 存储元素的数组，总是2的幂次倍</span></span>
<span class="line"><span>    transient Node&lt;k,v&gt;[] table;</span></span>
<span class="line"><span>    // 存放具体元素的集</span></span>
<span class="line"><span>    transient Set&lt;map.entry&lt;k,v&gt;&gt; entrySet;</span></span>
<span class="line"><span>    // 存放元素的个数，注意这个不等于数组的长度。</span></span>
<span class="line"><span>    transient int size;</span></span>
<span class="line"><span>    // 每次扩容和更改map结构的计数器</span></span>
<span class="line"><span>    transient int modCount;</span></span>
<span class="line"><span>    // 阈值(容量*负载因子) 当实际大小超过阈值时，会进行扩容</span></span>
<span class="line"><span>    int threshold;</span></span>
<span class="line"><span>    // 负载因子</span></span>
<span class="line"><span>    final float loadFactor;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>几个重要的字段</p><ul><li>loadFactor 负载因子</li><li>threshold 阈值（HashMap 实际能存储的大小）</li><li>DEFAULT_INITIAL_CAPACITY 默认初始容量</li><li>MAXIMUM_CAPACITY 最大容量</li><li>size HashMap实际存储的元素个数</li><li>modCount HashMap的结构被修改的次数，用于迭代器</li></ul><blockquote><p>loadFactor 负载因子</p></blockquote><p>loadFactor 负载因子 是控制数组存放数据的疏密程度，loadFactor 越趋近于 1，那么 数组中存放的数据(entry)也就越多，也就越密，也就是会让链表的长度增加，loadFactor 越小，也就是趋近于 0，数组中存放的数据(entry)也就越少，也就越稀疏。</p><p>loadFactor 太大导致查找元素效率低，太小导致数组的利用率低，存放的数据会很分散。<strong>loadFactor 的默认值为 0.75f</strong> ，是官方给出的一个比较好的临界值。</p><p>HashMap 给定的默认容量为 16，负载因子为 0.75。 Map 在使用过程中不断的往里面存放数据，当数量超过了 16 * 0.75 = 12 , 就需要将当前 16 的容量进行扩容，而扩容这个过程涉及到 rehash、复制数据等操作，所以非常消耗性能。</p><blockquote><p>threshold 阈值</p></blockquote><p><strong>threshold = capacity * loadFactor</strong>，阈值(容量 * 负载因子)</p><p>当实际大小超过阈值时，就要考虑对数组的扩增。阈值是衡量数组是否需要扩增的一个标准。</p><h4 id="node-节点类源码" tabindex="-1">Node 节点类源码 <a class="header-anchor" href="#node-节点类源码" aria-label="Permalink to &quot;Node 节点类源码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 继承自 Map.Entry&lt;K,V&gt;</span></span>
<span class="line"><span>static class Node&lt;K,V&gt; implements Map.Entry&lt;K,V&gt; {</span></span>
<span class="line"><span>       final int hash;// 哈希值，存放元素到hashmap中时用来与其他元素hash值比较</span></span>
<span class="line"><span>       final K key;//键</span></span>
<span class="line"><span>       V value;//值</span></span>
<span class="line"><span>       // 指向下一个节点</span></span>
<span class="line"><span>       Node&lt;K,V&gt; next;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>       Node(int hash, K key, V value, Node&lt;K,V&gt; next) {</span></span>
<span class="line"><span>            this.hash = hash;</span></span>
<span class="line"><span>            this.key = key;</span></span>
<span class="line"><span>            this.value = value;</span></span>
<span class="line"><span>            this.next = next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        public final K getKey()        { return key; }</span></span>
<span class="line"><span>        public final V getValue()      { return value; }</span></span>
<span class="line"><span>        public final String toString() { return key + &quot;=&quot; + value; }</span></span>
<span class="line"><span>        // 重写hashCode()方法</span></span>
<span class="line"><span>        public final int hashCode() {</span></span>
<span class="line"><span>            return Objects.hashCode(key) ^ Objects.hashCode(value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		//相当于把原来的值给覆盖掉，但是返回被覆盖掉的值</span></span>
<span class="line"><span>        public final V setValue(V newValue) {</span></span>
<span class="line"><span>            V oldValue = value;</span></span>
<span class="line"><span>            value = newValue;</span></span>
<span class="line"><span>            return oldValue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 重写 equals() 方法</span></span>
<span class="line"><span>        public final boolean equals(Object o) {</span></span>
<span class="line"><span>            if (o == this)</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            if (o instanceof Map.Entry) {</span></span>
<span class="line"><span>                Map.Entry&lt;?,?&gt; e = (Map.Entry&lt;?,?&gt;)o;</span></span>
<span class="line"><span>                if (Objects.equals(key, e.getKey()) &amp;&amp;</span></span>
<span class="line"><span>                    Objects.equals(value, e.getValue()))</span></span>
<span class="line"><span>                    return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="树节点类源码" tabindex="-1">树节点类源码 <a class="header-anchor" href="#树节点类源码" aria-label="Permalink to &quot;树节点类源码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>static final class TreeNode&lt;K,V&gt; extends LinkedHashMap.Entry&lt;K,V&gt; {</span></span>
<span class="line"><span>        TreeNode&lt;K,V&gt; parent;  // 父</span></span>
<span class="line"><span>        TreeNode&lt;K,V&gt; left;    // 左</span></span>
<span class="line"><span>        TreeNode&lt;K,V&gt; right;   // 右</span></span>
<span class="line"><span>        TreeNode&lt;K,V&gt; prev;    // needed to unlink next upon deletion</span></span>
<span class="line"><span>        boolean red;           // 判断颜色</span></span>
<span class="line"><span>        TreeNode(int hash, K key, V val, Node&lt;K,V&gt; next) {</span></span>
<span class="line"><span>            super(hash, key, val, next);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 返回根节点</span></span>
<span class="line"><span>        final TreeNode&lt;K,V&gt; root() {</span></span>
<span class="line"><span>            for (TreeNode&lt;K,V&gt; r = this, p;;) {</span></span>
<span class="line"><span>                if ((p = r.parent) == null)</span></span>
<span class="line"><span>                    return r;</span></span>
<span class="line"><span>                r = p;</span></span>
<span class="line"><span>       }</span></span></code></pre></div><h3 id="_3、hashmap-源码分析" tabindex="-1">3、HashMap 源码分析 <a class="header-anchor" href="#_3、hashmap-源码分析" aria-label="Permalink to &quot;3、HashMap 源码分析&quot;">​</a></h3><h4 id="构造方法" tabindex="-1">构造方法 <a class="header-anchor" href="#构造方法" aria-label="Permalink to &quot;构造方法&quot;">​</a></h4><p>HashMap 中有四个构造方法，它们分别如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    static final float DEFAULT_LOAD_FACTOR = 0.75f;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	static final int MAXIMUM_CAPACITY = 1 &lt;&lt; 30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	int threshold;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 默认构造函数。</span></span>
<span class="line"><span>    public HashMap() {</span></span>
<span class="line"><span>        this.loadFactor = DEFAULT_LOAD_FACTOR; // all   other fields defaulted</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 包含另一个“Map”的构造函数</span></span>
<span class="line"><span>     public HashMap(Map&lt;? extends K, ? extends V&gt; m) {</span></span>
<span class="line"><span>         this.loadFactor = DEFAULT_LOAD_FACTOR;</span></span>
<span class="line"><span>         putMapEntries(m, false);//下面会分析</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 指定“容量大小”的构造函数</span></span>
<span class="line"><span>     public HashMap(int initialCapacity) {</span></span>
<span class="line"><span>         this(initialCapacity, DEFAULT_LOAD_FACTOR);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 指定“容量大小”和“负载因子”的构造函数</span></span>
<span class="line"><span>     public HashMap(int initialCapacity, float loadFactor) {</span></span>
<span class="line"><span>         if (initialCapacity &lt; 0)</span></span>
<span class="line"><span>             throw new IllegalArgumentException(&quot;Illegal initial capacity: &quot; + initialCapacity);</span></span>
<span class="line"><span>         if (initialCapacity &gt; MAXIMUM_CAPACITY)</span></span>
<span class="line"><span>             initialCapacity = MAXIMUM_CAPACITY;</span></span>
<span class="line"><span>         if (loadFactor &lt;= 0 || Float.isNaN(loadFactor))</span></span>
<span class="line"><span>             throw new IllegalArgumentException(&quot;Illegal load factor: &quot; + loadFactor);</span></span>
<span class="line"><span>         //指定负载因子</span></span>
<span class="line"><span>         this.loadFactor = loadFactor;</span></span>
<span class="line"><span>         // 初始容量暂时存放到 threshold ，在 resize 中再赋值给 newCap 进行table初始化</span></span>
<span class="line"><span>         this.threshold = tableSizeFor(initialCapacity);</span></span>
<span class="line"><span>     }</span></span></code></pre></div><p>上面第二个构造函数中调用了 putMapEntries 方法，下面进行分析：</p><p><strong>putMapEntries 方法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>transient Node&lt;K,V&gt;[] table;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>final void putMapEntries(Map&lt;? extends K, ? extends V&gt; m, boolean evict) {  </span></span>
<span class="line"><span>    int s = m.size();  </span></span>
<span class="line"><span>    if (s &gt; 0) {  </span></span>
<span class="line"><span>        // 判断table是否已经初始化</span></span>
<span class="line"><span>        if (table == null) { // pre-size  </span></span>
<span class="line"><span>            //如果未初始化，s 为 m 的实际元素个数；ft=s/loadFactor =&gt; s=ft*loadFactor；其中 ft 指的是要添加 s 个元素所需要的最小的容量</span></span>
<span class="line"><span>            float ft = ((float)s / loadFactor) + 1.0F;  </span></span>
<span class="line"><span>            //与最大容量作比较，如果小于则 t 为 ft，否则为 MAXIMUM_CAPACITY</span></span>
<span class="line"><span>            int t = ((ft &lt; (float)MAXIMUM_CAPACITY) ?  </span></span>
<span class="line"><span>                     (int)ft : MAXIMUM_CAPACITY);  </span></span>
<span class="line"><span>            //根据上面的构造函数，可以得知此时 table 未初始化，threshold 实际上是存放的初始化容量</span></span>
<span class="line"><span>            //如果添加s个元素所需的最小容量大于初始化容量，则将最小容量扩容为最接近的2的幂次方大小作为初始化。（注意这里不是初始化阈值）</span></span>
<span class="line"><span>            if (t &gt; threshold)  </span></span>
<span class="line"><span>                threshold = tableSizeFor(t);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        // 如果已经初始化，并且m元素个数大于阈值，进行扩容处理</span></span>
<span class="line"><span>        else if (s &gt; threshold)  </span></span>
<span class="line"><span>            resize();  </span></span>
<span class="line"><span>        // 将m中的所有元素添加至HashMap中，如果table未初始化，putVal中会调用resize初始化或扩容    </span></span>
<span class="line"><span>        for (Map.Entry&lt;? extends K, ? extends V&gt; e : m.entrySet()) {  </span></span>
<span class="line"><span>            K key = e.getKey();  </span></span>
<span class="line"><span>            V value = e.getValue();  </span></span>
<span class="line"><span>            putVal(hash(key), key, value, false, evict);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>tableSizeFor 方法：返回一个最接近 cap 的2的幂次方大小数值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>static final int tableSizeFor(int cap) {  </span></span>
<span class="line"><span>    int n = cap - 1;  </span></span>
<span class="line"><span>    n |= n &gt;&gt;&gt; 1;  </span></span>
<span class="line"><span>    n |= n &gt;&gt;&gt; 2;  </span></span>
<span class="line"><span>    n |= n &gt;&gt;&gt; 4;  </span></span>
<span class="line"><span>    n |= n &gt;&gt;&gt; 8;  </span></span>
<span class="line"><span>    n |= n &gt;&gt;&gt; 16;  </span></span>
<span class="line"><span>    return (n &lt; 0) ? 1 : (n &gt;= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="put-方法" tabindex="-1">put 方法 <a class="header-anchor" href="#put-方法" aria-label="Permalink to &quot;put 方法&quot;">​</a></h4><p>HashMap 只提供了 put 用于添加元素，putVal 方法是 put 方法调用的一个方法，并没有提供给用户使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public V put(K key, V value) {</span></span>
<span class="line"><span>    return putVal(hash(key), key, value, false, true);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>putVal 方法 图解</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231115230931.png" alt="image.png"></p><p>putVal 方法添加元素分析：</p><ul><li>如果定位到的数组位置没有元素 就直接插入。</li><li>如果定位到的数组位置有元素就和要插入的 key 比较， <ul><li>如果 key 相同就直接覆盖，</li><li>如果 key 不相同，就判断 p 是否是一个树节点， <ul><li>如果是就调用<code>e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value)</code>将元素添加进入。</li><li>如果不是就遍历链表插入(插入的是链表尾部)。</li></ul></li></ul></li></ul><blockquote><p>putVal 方法</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>final V putVal(int hash, K key, V value, boolean onlyIfAbsent,</span></span>
<span class="line"><span>                   boolean evict) {</span></span>
<span class="line"><span>    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i;</span></span>
<span class="line"><span>    // table未初始化或者长度为0，进行扩容</span></span>
<span class="line"><span>    if ((tab = table) == null || (n = tab.length) == 0)</span></span>
<span class="line"><span>        n = (tab = resize()).length;</span></span>
<span class="line"><span>    // (n - 1) &amp; hash 确定元素存放在哪个桶中，桶为空，新生成结点放入桶中(此时，这个结点是放在数组中)</span></span>
<span class="line"><span>    if ((p = tab[i = (n - 1) &amp; hash]) == null)</span></span>
<span class="line"><span>        tab[i] = newNode(hash, key, value, null);</span></span>
<span class="line"><span>    // 桶中已经存在元素（处理hash冲突）</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        Node&lt;K,V&gt; e; K k;</span></span>
<span class="line"><span>        //快速判断第一个节点table[i]的key是否与插入的key一样，若相同就直接使用插入的值p替换掉旧的值e。</span></span>
<span class="line"><span>        if (p.hash == hash &amp;&amp;</span></span>
<span class="line"><span>            ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>                e = p;</span></span>
<span class="line"><span>        // 判断插入的是否是红黑树节点</span></span>
<span class="line"><span>        else if (p instanceof TreeNode)</span></span>
<span class="line"><span>            // 放入树中</span></span>
<span class="line"><span>            e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);</span></span>
<span class="line"><span>        // 不是红黑树节点则说明为链表结点</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            // 在链表最末插入结点</span></span>
<span class="line"><span>            for (int binCount = 0; ; ++binCount) {</span></span>
<span class="line"><span>                // 到达链表的尾部</span></span>
<span class="line"><span>                if ((e = p.next) == null) {</span></span>
<span class="line"><span>                    // 在尾部插入新结点</span></span>
<span class="line"><span>                    p.next = newNode(hash, key, value, null);</span></span>
<span class="line"><span>                    // 结点数量达到阈值(默认为 8 )，执行 treeifyBin 方法</span></span>
<span class="line"><span>                    // 这个方法会根据 HashMap 数组来决定是否转换为红黑树。</span></span>
<span class="line"><span>                    // 只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是对数组扩容。</span></span>
<span class="line"><span>                    if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st</span></span>
<span class="line"><span>                        treeifyBin(tab, hash);</span></span>
<span class="line"><span>                    // 跳出循环</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 判断链表中结点的key值与插入的元素的key值是否相等</span></span>
<span class="line"><span>                if (e.hash == hash &amp;&amp;</span></span>
<span class="line"><span>                    ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>                    // 相等，跳出循环</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                // 用于遍历桶中的链表，与前面的e = p.next组合，可以遍历链表</span></span>
<span class="line"><span>                p = e;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 表示在桶中找到key值、hash值与插入元素相等的结点</span></span>
<span class="line"><span>        if (e != null) {</span></span>
<span class="line"><span>            // 记录e的value</span></span>
<span class="line"><span>            V oldValue = e.value;</span></span>
<span class="line"><span>            // onlyIfAbsent为false或者旧值为null</span></span>
<span class="line"><span>            if (!onlyIfAbsent || oldValue == null)</span></span>
<span class="line"><span>                //用新值替换旧值</span></span>
<span class="line"><span>                e.value = value;</span></span>
<span class="line"><span>            // 访问后回调</span></span>
<span class="line"><span>            afterNodeAccess(e);</span></span>
<span class="line"><span>            // 返回旧值</span></span>
<span class="line"><span>            return oldValue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 结构性修改</span></span>
<span class="line"><span>    ++modCount;</span></span>
<span class="line"><span>    // 实际大小大于阈值则扩容</span></span>
<span class="line"><span>    if (++size &gt; threshold)</span></span>
<span class="line"><span>        resize();</span></span>
<span class="line"><span>    // 插入后回调</span></span>
<span class="line"><span>    afterNodeInsertion(evict);</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><strong>对比 JDK1.7 put 方法的代码</strong></p></blockquote><p><strong>对于 put 方法的分析如下：</strong></p><ul><li>① 如果定位到的数组位置没有元素 就直接插入。</li><li>② 如果定位到的数组位置有元素，遍历以这个元素为头结点的链表，依次和插入的 key 比较，如果 key 相同就直接覆盖，不同就采用头插法插入元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public V put(K key, V value)</span></span>
<span class="line"><span>    if (table == EMPTY_TABLE) {</span></span>
<span class="line"><span>    inflateTable(threshold);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    if (key == null)</span></span>
<span class="line"><span>        return putForNullKey(value);</span></span>
<span class="line"><span>    int hash = hash(key);</span></span>
<span class="line"><span>    int i = indexFor(hash, table.length);</span></span>
<span class="line"><span>    for (Entry&lt;K,V&gt; e = table[i]; e != null; e = e.next) { // 先遍历</span></span>
<span class="line"><span>        Object k;</span></span>
<span class="line"><span>        if (e.hash == hash &amp;&amp; ((k = e.key) == key || key.equals(k))) {</span></span>
<span class="line"><span>            V oldValue = e.value;</span></span>
<span class="line"><span>            e.value = value;</span></span>
<span class="line"><span>            e.recordAccess(this);</span></span>
<span class="line"><span>            return oldValue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    modCount++;</span></span>
<span class="line"><span>    addEntry(hash, key, value, i);  // 再插入</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="get-方法" tabindex="-1">get 方法 <a class="header-anchor" href="#get-方法" aria-label="Permalink to &quot;get 方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public V get(Object key) {</span></span>
<span class="line"><span>    Node&lt;K,V&gt; e;</span></span>
<span class="line"><span>    return (e = getNode(hash(key), key)) == null ? null : e.value;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>final Node&lt;K,V&gt; getNode(int hash, Object key) {</span></span>
<span class="line"><span>    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; first, e; int n; K k;</span></span>
<span class="line"><span>    if ((tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 &amp;&amp;</span></span>
<span class="line"><span>        (first = tab[(n - 1) &amp; hash]) != null) {</span></span>
<span class="line"><span>        // 数组元素相等</span></span>
<span class="line"><span>        if (first.hash == hash &amp;&amp; // always check first node</span></span>
<span class="line"><span>            ((k = first.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>            return first;</span></span>
<span class="line"><span>        // 桶中不止一个节点</span></span>
<span class="line"><span>        if ((e = first.next) != null) {</span></span>
<span class="line"><span>            // 在树中get</span></span>
<span class="line"><span>            if (first instanceof TreeNode)</span></span>
<span class="line"><span>                return ((TreeNode&lt;K,V&gt;)first).getTreeNode(hash, key);</span></span>
<span class="line"><span>            // 在链表中get</span></span>
<span class="line"><span>            do {</span></span>
<span class="line"><span>                if (e.hash == hash &amp;&amp;</span></span>
<span class="line"><span>                    ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>                    return e;</span></span>
<span class="line"><span>            } while ((e = e.next) != null);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="resize-方法" tabindex="-1">resize 方法 <a class="header-anchor" href="#resize-方法" aria-label="Permalink to &quot;resize 方法&quot;">​</a></h4><p>进行扩容，会伴随着一次重新 hash 分配，并且会遍历 hash 表中所有的元素，是非常耗时的。在编写程序中，要尽量避免 resize。</p><p>resize 方法实际上是将 table 初始化和 table 扩容 进行了整合，底层的行为都是给 table 赋值一个新的数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>final Node&lt;K,V&gt;[] resize() {</span></span>
<span class="line"><span>    Node&lt;K,V&gt;[] oldTab = table;</span></span>
<span class="line"><span>    int oldCap = (oldTab == null) ? 0 : oldTab.length;</span></span>
<span class="line"><span>    int oldThr = threshold;</span></span>
<span class="line"><span>    int newCap, newThr = 0;</span></span>
<span class="line"><span>    if (oldCap &gt; 0) {</span></span>
<span class="line"><span>        // 超过最大值就不再扩充了，就只好随你碰撞去吧</span></span>
<span class="line"><span>        if (oldCap &gt;= MAXIMUM_CAPACITY) {</span></span>
<span class="line"><span>            threshold = Integer.MAX_VALUE;</span></span>
<span class="line"><span>            return oldTab;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 没超过最大值，就扩充为原来的2倍</span></span>
<span class="line"><span>        else if ((newCap = oldCap &lt;&lt; 1) &lt; MAXIMUM_CAPACITY &amp;&amp; oldCap &gt;= DEFAULT_INITIAL_CAPACITY)</span></span>
<span class="line"><span>            newThr = oldThr &lt;&lt; 1; // double threshold</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (oldThr &gt; 0) // initial capacity was placed in threshold</span></span>
<span class="line"><span>        // 创建对象时初始化容量大小放在threshold中，此时只需要将其作为新的数组容量</span></span>
<span class="line"><span>        newCap = oldThr;</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        // signifies using defaults 无参构造函数创建的对象在这里计算容量和阈值</span></span>
<span class="line"><span>        newCap = DEFAULT_INITIAL_CAPACITY;</span></span>
<span class="line"><span>        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (newThr == 0) {</span></span>
<span class="line"><span>        // 创建时指定了初始化容量或者负载因子，在这里进行阈值初始化，</span></span>
<span class="line"><span>    	// 或者扩容前的旧容量小于16，在这里计算新的resize上限</span></span>
<span class="line"><span>        float ft = (float)newCap * loadFactor;</span></span>
<span class="line"><span>        newThr = (newCap &lt; MAXIMUM_CAPACITY &amp;&amp; ft &lt; (float)MAXIMUM_CAPACITY ? (int)ft : Integer.MAX_VALUE);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    threshold = newThr;</span></span>
<span class="line"><span>    @SuppressWarnings({&quot;rawtypes&quot;,&quot;unchecked&quot;})</span></span>
<span class="line"><span>        Node&lt;K,V&gt;[] newTab = (Node&lt;K,V&gt;[])new Node[newCap];</span></span>
<span class="line"><span>    table = newTab;</span></span>
<span class="line"><span>    if (oldTab != null) {</span></span>
<span class="line"><span>        // 把每个bucket都移动到新的buckets中</span></span>
<span class="line"><span>        for (int j = 0; j &lt; oldCap; ++j) {</span></span>
<span class="line"><span>            Node&lt;K,V&gt; e;</span></span>
<span class="line"><span>            if ((e = oldTab[j]) != null) {</span></span>
<span class="line"><span>                oldTab[j] = null;</span></span>
<span class="line"><span>                if (e.next == null)</span></span>
<span class="line"><span>                    // 只有一个节点，直接计算元素新的位置即可</span></span>
<span class="line"><span>                    newTab[e.hash &amp; (newCap - 1)] = e;</span></span>
<span class="line"><span>                else if (e instanceof TreeNode)</span></span>
<span class="line"><span>                    // 将红黑树拆分成2棵子树，如果子树节点数小于等于 UNTREEIFY_THRESHOLD（默认为 6），则将子树转换为链表。</span></span>
<span class="line"><span>                    // 如果子树节点数大于 UNTREEIFY_THRESHOLD，则保持子树的树结构。</span></span>
<span class="line"><span>                    ((TreeNode&lt;K,V&gt;)e).split(this, newTab, j, oldCap);</span></span>
<span class="line"><span>                else {</span></span>
<span class="line"><span>                    Node&lt;K,V&gt; loHead = null, loTail = null;</span></span>
<span class="line"><span>                    Node&lt;K,V&gt; hiHead = null, hiTail = null;</span></span>
<span class="line"><span>                    Node&lt;K,V&gt; next;</span></span>
<span class="line"><span>                    do {</span></span>
<span class="line"><span>                        next = e.next;</span></span>
<span class="line"><span>                        // 原索引</span></span>
<span class="line"><span>                        if ((e.hash &amp; oldCap) == 0) {</span></span>
<span class="line"><span>                            if (loTail == null)</span></span>
<span class="line"><span>                                loHead = e;</span></span>
<span class="line"><span>                            else</span></span>
<span class="line"><span>                                loTail.next = e;</span></span>
<span class="line"><span>                            loTail = e;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        // 原索引+oldCap</span></span>
<span class="line"><span>                        else {</span></span>
<span class="line"><span>                            if (hiTail == null)</span></span>
<span class="line"><span>                                hiHead = e;</span></span>
<span class="line"><span>                            else</span></span>
<span class="line"><span>                                hiTail.next = e;</span></span>
<span class="line"><span>                            hiTail = e;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } while ((e = next) != null);</span></span>
<span class="line"><span>                    // 原索引放到bucket里</span></span>
<span class="line"><span>                    if (loTail != null) {</span></span>
<span class="line"><span>                        loTail.next = null;</span></span>
<span class="line"><span>                        newTab[j] = loHead;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // 原索引+oldCap放到bucket里</span></span>
<span class="line"><span>                    if (hiTail != null) {</span></span>
<span class="line"><span>                        hiTail.next = null;</span></span>
<span class="line"><span>                        newTab[j + oldCap] = hiHead;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return newTab;</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><p>参考：</p><ul><li><a href="https://javaguide.cn/java/collection/hashmap-source-code.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/collection/hashmap-source-code.html</a></li><li><a href="https://blog.csdn.net/xiao_a_ruo_ya/article/details/98882507" target="_blank" rel="noreferrer">https://blog.csdn.net/xiao_a_ruo_ya/article/details/98882507</a></li><li><a href="https://blog.csdn.net/rain67/article/details/124043769" target="_blank" rel="noreferrer">https://blog.csdn.net/rain67/article/details/124043769</a></li><li><a href="https://segmentfault.com/a/1190000039302830" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039302830</a></li><li><a href="https://blog.csdn.net/weixin_47257050/article/details/118926555" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_47257050/article/details/118926555</a></li></ul>`,78)])])}const g=n(e,[["render",t]]);export{d as __pageData,g as default};
