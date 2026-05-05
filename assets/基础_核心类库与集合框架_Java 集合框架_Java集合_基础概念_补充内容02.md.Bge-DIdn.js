import{_ as s,o as n,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const u=JSON.parse('{"title":"Java集合_基础概念_补充内容02","description":"","frontmatter":{"title":"Java集合_基础概念_补充内容02","excerpt":"Java集合_基础概念_补充内容02","date":"2023-11-14 12:01:00","updated":"2023-11-14 12:00:00"},"headers":[],"relativePath":"基础/核心类库与集合框架/Java 集合框架/Java集合_基础概念_补充内容02.md","filePath":"基础/核心类库与集合框架/Java 集合框架/Java集合_基础概念_补充内容02.md","lastUpdated":null}'),t={name:"基础/核心类库与集合框架/Java 集合框架/Java集合_基础概念_补充内容02.md"};function l(i,a,c,o,r,h){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h4 id="_1、set集合是如何保证对象不重复的" tabindex="-1">1、Set集合是如何保证对象不重复的？ <a class="header-anchor" href="#_1、set集合是如何保证对象不重复的" aria-label="Permalink to &quot;1、Set集合是如何保证对象不重复的？&quot;">​</a></h4><p>HashSet 的底层采用HashMap来存放数据, 他执行添加元素操作的时候是将元素作为 Map 的Key；</p><p>HashMap保证key的不重复性，对于重复的key，HashMap会根据参数onlyIfAbsent的设置和原value是否为空两个条件来<strong>判断是否替换新value</strong>，</p><p>但要注意的是，对于HashSet，这个value只是个空的Object类的对象，没有任何实际作用，HashSet中的元素实际上是存储在key上的。针对重复的key，<strong>HashMap只有对于value的处理，并不会替换key</strong>，因此在HashSet中加入相同元素不会覆盖。</p><p>源码相关内容：</p><p>HashSet 的添加方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public boolean add(E e) {  </span></span>
<span class="line"><span>    return map.put(e, PRESENT)==null;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>hashmap 的 put 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  public V put(K key, V value) {</span></span>
<span class="line"><span>        if (key == null)</span></span>
<span class="line"><span>            return putForNullKey(value);</span></span>
<span class="line"><span>        int hash = hash(key.hashCode());//----------1----------</span></span>
<span class="line"><span>        int i = indexFor(hash, table.length);//-----------2---------</span></span>
<span class="line"><span>        for (Entry e = table[i]; e != null; e = e.next) {//-----------3---------</span></span>
<span class="line"><span>            Object k;</span></span>
<span class="line"><span>            if (e.hash == hash &amp;&amp; ((k = e.key) == key || key.equals(k))) {</span></span>
<span class="line"><span>                V oldValue = e.value;</span></span>
<span class="line"><span>                e.value = value;</span></span>
<span class="line"><span>                e.recordAccess(this);</span></span>
<span class="line"><span>                return oldValue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }//------------------4--------------------</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        addEntry(hash, key, value, i);</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>当向HashMap中添加元素的时候，</p><ul><li><strong>首先计算元素的hashcode值</strong>，然后根据1处的代码计算出Hashcode的值，</li><li>再根据2处的代码计算出这个元素的存储位置， <ul><li>如果<strong>这个位置为空，就将元素添加进去</strong>；</li><li>如果不为空，则看3-4的代码，遍历索引为i的链上的元素，<strong>如果key重复，则替换并返回oldValue值。</strong></li></ul></li></ul><p><strong>总结</strong>：结果向HashSet中加入相同元素不会进行覆盖。因为HashSet底层使用HashMap实现，元素存在HashMap的key中。在HashMap中，多次put相同的key，只会覆盖value，而不存在key的情况。</p><h4 id="_2、使用for循环删除元素陷阱" tabindex="-1">2、使用for循环删除元素陷阱 <a class="header-anchor" href="#_2、使用for循环删除元素陷阱" aria-label="Permalink to &quot;2、使用for循环删除元素陷阱&quot;">​</a></h4><p>先来看看下面这个程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class Test {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public static void main(String[] args) {</span></span>
<span class="line"><span>		List&lt;String&gt; list = new LinkedList&lt;String&gt;();</span></span>
<span class="line"><span>		list.add(&quot;A&quot;);</span></span>
<span class="line"><span>		list.add(&quot;B&quot;);</span></span>
<span class="line"><span>		list.add(&quot;C&quot;);</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		for(int i=0; i&lt;list.size(); i++){</span></span>
<span class="line"><span>			list.remove(i);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		for(String item:list){</span></span>
<span class="line"><span>			System.out.println(item);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以先猜猜这个程序输出什么？</p><p>按我们的思路，应该是输不出什么，<strong>但是执行它，输出的却是：B</strong>。</p><p>分析下这个程序，当第一步remove完后，集合内还剩2个元素，此时i为1，而list.size()的值为2，从0开始的话，i为1时，正好指向第二个元素，也就是说当remove完A后，直接就跳到C，将B漏了。</p><p>解决办法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class Test {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public static void main(String[] args) {</span></span>
<span class="line"><span>		List&lt;String&gt; list = new LinkedList&lt;String&gt;();</span></span>
<span class="line"><span>		list.add(&quot;A&quot;);</span></span>
<span class="line"><span>		list.add(&quot;B&quot;);</span></span>
<span class="line"><span>		list.add(&quot;C&quot;);</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		for(int i=0; i&lt;list.size(); i++){</span></span>
<span class="line"><span>			list.remove(i);</span></span>
<span class="line"><span>			i -= 1;//每次删除完后，i减少1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		for(String item:list){</span></span>
<span class="line"><span>			System.out.println(item);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3、讲述一下-length、length-、size-的区别。" tabindex="-1">3、讲述一下 length、length()、size() 的区别。 <a class="header-anchor" href="#_3、讲述一下-length、length-、size-的区别。" aria-label="Permalink to &quot;3、讲述一下 length、length()、size() 的区别。&quot;">​</a></h4><ul><li>java 中的 <code>length</code>属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了 length 这个属性.</li><li>java 中的 <code>length()</code> 方法是针对字符串说的,如果想看这个字符串的长度则用到 <code>length()</code> 这个方法.</li><li>java 中的 <code>size()</code> 方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看!</li></ul><h4 id="_4、在-hashmap-中-为什么不一下子把整个链表变为红黑树呢" tabindex="-1">4、在 HashMap 中，为什么不一下子把整个链表变为红黑树呢 <a class="header-anchor" href="#_4、在-hashmap-中-为什么不一下子把整个链表变为红黑树呢" aria-label="Permalink to &quot;4、在 HashMap 中，为什么不一下子把整个链表变为红黑树呢&quot;">​</a></h4><p>为什么非要等到链表的长度大于等于8的时候，才转变成红黑树？</p><p>（1）构造红黑树要比构造链表复杂，在链表的节点不多的时候，从整体的性能看来， 数组+链表+红黑树的结构可能不一定比数组+链表的结构性能高。就好比杀鸡焉用牛刀的意思。</p><p>（2）HashMap频繁的扩容，会造成底部红黑树不断的进行拆分和重组，这是非常耗时的。因此，也就是链表长度比较长的时候转变成红黑树才会<strong>显著提高效率</strong>。</p>`,26)])])}const g=s(t,[["render",l]]);export{u as __pageData,g as default};
