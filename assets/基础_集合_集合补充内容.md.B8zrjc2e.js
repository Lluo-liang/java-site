import{_ as a,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"集合补充内容","description":"","frontmatter":{"title":"集合补充内容","excerpt":"集合遇到的一些知识点","date":"2023-11-14 12:00:00","updated":"2023-11-14 12:00:00"},"headers":[],"relativePath":"基础/集合/集合补充内容.md","filePath":"基础/集合/集合补充内容.md","lastUpdated":null}'),t={name:"基础/集合/集合补充内容.md"};function l(i,s,r,c,o,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>记录一下集合相关的概念，对于 Java 集合基础概念的一个补充</p><h4 id="什么是-fail-fast机制-讲述一下他和-fail-safe-的异同。" tabindex="-1">什么是 fail-fast机制，讲述一下他和 fail-safe 的异同。 <a class="header-anchor" href="#什么是-fail-fast机制-讲述一下他和-fail-safe-的异同。" aria-label="Permalink to &quot;什么是 fail-fast机制，讲述一下他和 fail-safe 的异同。&quot;">​</a></h4><p>错误检查机制</p><ul><li>快速失败 fail-fast <ul><li>当方法检测到对象的并发修改，但不允许这种修改时就抛出该异常</li></ul></li><li>fail-safe 机制 <ul><li>fail-safe 任何对集合结构的修改都会在一个复制的集合上进行，因此不会抛出ConcurrentModificationException</li></ul></li></ul><p><strong>fail-fast 解决方法</strong></p><ul><li>方案一：在遍历过程中所有涉及到改变modCount 值的地方全部加上synchronized 或者直接使用 Collection synchronizedList，这样就可以解决问题，但是不推荐，因为增删造成的同步锁可能会阻塞遍历操作。</li><li>方案二：使用CopyOnWriteArrayList 替换 ArrayLIst，推荐使用该方案（即fail-safe）。</li></ul><p><strong>fail-fast和 fail-safe 的区别</strong></p><table tabindex="0"><thead><tr><th></th><th>Fail Fast Iterator</th><th>Fail Safe Iterator</th></tr></thead><tbody><tr><td>Throw ConcurrentModification Exception</td><td>Yes</td><td>No</td></tr><tr><td>Clone object</td><td>No</td><td>Yes</td></tr><tr><td>Memory Overhead</td><td>No</td><td>Yes</td></tr><tr><td>Examples</td><td>HashMap,Vector,ArrayList,HashSet</td><td>CopyOnWriteArrayList, <br>ConcurrentHashMap</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h4 id="通过实现-comparable-或者-comparator-接口来进行排序" tabindex="-1">通过实现 Comparable 或者 Comparator 接口来进行排序 <a class="header-anchor" href="#通过实现-comparable-或者-comparator-接口来进行排序" aria-label="Permalink to &quot;通过实现 Comparable 或者 Comparator 接口来进行排序&quot;">​</a></h4><p><strong>一种情况是集合类本身自带排序功能</strong>，如前面说过的TreeSet、SortedSet、SortedMap等，</p><p>另一种就是本身不带排序功能，我们通过为需要排序的类实现 Comparable 或者 Comparator 接口来实现。</p><p>先来看两个例子，一个是实现Comparable的，一个是实现 Comparator 的</p><p>（1）实现Comparable的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.xtfggef.list.test;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>@SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>public class ComparableTest {</span></span>
<span class="line"><span>	public static void main(String[] args) {  </span></span>
<span class="line"><span>	    List&lt;User&gt; users = new ArrayList();  </span></span>
<span class="line"><span>	    users.add(new User(&quot;egg&quot;, 23));  </span></span>
<span class="line"><span>	    users.add(new User(&quot;niu&quot;, 22));  </span></span>
<span class="line"><span>	    users.add(new User(&quot;qing&quot;, 28));  </span></span>
<span class="line"><span>	  </span></span>
<span class="line"><span>	    Collections.sort(users);  </span></span>
<span class="line"><span>	    for (User user : users) {  </span></span>
<span class="line"><span>	        System.out.println(user.getName() + &quot; &quot; + user.getAge());  </span></span>
<span class="line"><span>	    }  </span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>@SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>class User implements Comparable {</span></span>
<span class="line"><span>	private String name;</span></span>
<span class="line"><span>	private int age;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public User(String name, int age) {</span></span>
<span class="line"><span>		super();</span></span>
<span class="line"><span>		this.name = name;</span></span>
<span class="line"><span>		this.age = age;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public String getName() {</span></span>
<span class="line"><span>		return name;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public void setName(String name) {</span></span>
<span class="line"><span>		this.name = name;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public int getAge() {</span></span>
<span class="line"><span>		return age;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	public void setAge(int age) {</span></span>
<span class="line"><span>		this.age = age;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public int compareTo(Object o) {</span></span>
<span class="line"><span>		return this.age - ((User) o).getAge();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>（2）下面是实现Comparator接口的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.xtfggef.comparator.test;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.Comparator;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>public class ComparatorTest {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        List&lt;User&gt; users = new ArrayList();  </span></span>
<span class="line"><span>        users.add(new User(&quot;egg&quot;, 21));  </span></span>
<span class="line"><span>        users.add(new User(&quot;niu&quot;, 22));  </span></span>
<span class="line"><span>        users.add(new User(&quot;gg&quot;, 29));  </span></span>
<span class="line"><span>        UserComparator comparator = new UserComparator();  </span></span>
<span class="line"><span>        Collections.sort(users, comparator);  </span></span>
<span class="line"><span>        for (User user : users) {  </span></span>
<span class="line"><span>            System.out.println(user.getUsername() + &quot; &quot; + user.getAge());  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>class User {  </span></span>
<span class="line"><span>    private String username;  </span></span>
<span class="line"><span>    private int age;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public User(String username, int age) {  </span></span>
<span class="line"><span>        super();  </span></span>
<span class="line"><span>        this.username = username;  </span></span>
<span class="line"><span>        this.age = age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public String getUsername() {  </span></span>
<span class="line"><span>        return username;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public void setUsername(String username) {  </span></span>
<span class="line"><span>        this.username = username;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public int getAge() {  </span></span>
<span class="line"><span>        return age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public void setAge(int age) {  </span></span>
<span class="line"><span>        this.age = age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class UserComparator implements Comparator&lt;User&gt; {  </span></span>
<span class="line"><span>    @Override  </span></span>
<span class="line"><span>    public int compare(User user1, User user2) {  </span></span>
<span class="line"><span>        int age1 = user1.getAge();  </span></span>
<span class="line"><span>        int age2 = user2.getAge();  </span></span>
<span class="line"><span>        if (age1 &lt; age2) {  </span></span>
<span class="line"><span>            return 1;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        return 0;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>👆 上面这种 Comparator 实现这个接口的时候， 👉 Comparator是一个泛型接口，所以在实现Comparator接口时，类的泛型类型需要指定具体类型，以避免类型擦除带来的问题。</p><hr><p>通过上面的这两个小例子，我们可以看出，Comparator和Comparable用于不同的场景，实现对对象的比较从而进行排序。</p><p>总结为：</p><p><strong>相同点：</strong> 二者都可以实现对象的排序，不论用 Arrays的方法还是用 Collections的sort()方法。</p><p><strong>不同点：</strong></p><p>（1）实现Comparable接口的类，似乎是<strong>预先知道该类将要进行排序</strong>，需要排序的类实现Comparable接口，是一种“静态绑定排序”。</p><p>（2）实现Comparator的类不需要，设计者无需事先为需要排序的类实现任何接口。</p><p>（3）Comparator接口里有两个抽象方法compare()和equals()，<strong>而Comparable接口里只有一个方法</strong>：compareTo()。</p><p>（4）Comparator接口无需改变排序类的内部，也就是说实现算法和数据分离，是一个良好的设计，是一种“动态绑定排序”。</p><p>（5）Comparator接口可以使用多种排序标准，比如升序、降序等。</p><h4 id="set集合是如何保证对象不重复的" tabindex="-1">Set集合是如何保证对象不重复的？ <a class="header-anchor" href="#set集合是如何保证对象不重复的" aria-label="Permalink to &quot;Set集合是如何保证对象不重复的？&quot;">​</a></h4><p>HashSet 的底层采用HashMap来存放数据, 他执行添加元素操作的时候是将元素作为 Map 的Key；</p><p>HashMap保证key的不重复性，对于重复的key，HashMap会根据参数onlyIfAbsent的设置和原value是否为空两个条件来<strong>判断是否替换新value</strong>，</p><p>但要注意的是，对于HashSet，这个value只是个空的Object类的对象，没有任何实际作用，HashSet中的元素实际上是存储在key上的。针对重复的key，<strong>HashMap只有对于value的处理，并不会替换key</strong>，因此在HashSet中加入相同元素不会覆盖。</p><p>源码相关内容：</p><p>HashSet 的添加方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public boolean add(E e) {  </span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><p>当向HashMap中添加元素的时候，</p><ul><li><strong>首先计算元素的hashcode值</strong>，然后根据1处的代码计算出Hashcode的值，</li><li>再根据2处的代码计算出这个元素的存储位置， <ul><li>如果<strong>这个位置为空，就将元素添加进去</strong>；</li><li>如果不为空，则看3-4的代码，遍历索引为i的链上的元素，<strong>如果key重复，则替换并返回oldValue值。</strong></li></ul></li></ul><p><strong>总结</strong>：结果向HashSet中加入相同元素不会进行覆盖。因为HashSet底层使用HashMap实现，元素存在HashMap的key中。在HashMap中，多次put相同的key，只会覆盖value，而不存在key的情况。</p><h4 id="使用for循环删除元素陷阱" tabindex="-1">使用for循环删除元素陷阱 <a class="header-anchor" href="#使用for循环删除元素陷阱" aria-label="Permalink to &quot;使用for循环删除元素陷阱&quot;">​</a></h4><p>先来看看下面这个程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class Test {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="讲述一下-length、length-、size-的区别。" tabindex="-1">讲述一下 length、length()、size() 的区别。 <a class="header-anchor" href="#讲述一下-length、length-、size-的区别。" aria-label="Permalink to &quot;讲述一下 length、length()、size() 的区别。&quot;">​</a></h4><ul><li>java 中的 <code>length</code>属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了 length 这个属性.</li><li>java 中的 <code>length()</code> 方法是针对字符串说的,如果想看这个字符串的长度则用到 <code>length()</code> 这个方法.</li><li>java 中的 <code>size()</code> 方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看!</li></ul><h4 id="在-hashmap-中-为什么不一下子把整个链表变为红黑树呢" tabindex="-1">在 HashMap 中，为什么不一下子把整个链表变为红黑树呢 <a class="header-anchor" href="#在-hashmap-中-为什么不一下子把整个链表变为红黑树呢" aria-label="Permalink to &quot;在 HashMap 中，为什么不一下子把整个链表变为红黑树呢&quot;">​</a></h4><p>为什么非要等到链表的长度大于等于8的时候，才转变成红黑树？</p><p>（1）构造红黑树要比构造链表复杂，在链表的节点不多的时候，从整体的性能看来， 数组+链表+红黑树的结构可能不一定比数组+链表的结构性能高。就好比杀鸡焉用牛刀的意思。</p><p>（2）HashMap频繁的扩容，会造成底部红黑树不断的进行拆分和重组，这是非常耗时的。因此，也就是链表长度比较长的时候转变成红黑树才会<strong>显著提高效率</strong>。</p>`,53)])])}const h=a(t,[["render",l]]);export{g as __pageData,h as default};
