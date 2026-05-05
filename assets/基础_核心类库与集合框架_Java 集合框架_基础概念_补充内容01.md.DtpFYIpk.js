import{_ as a,o as n,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const m=JSON.parse('{"title":"基础概念_补充内容01","description":"","frontmatter":{"title":"基础概念_补充内容01","excerpt":"集合遇到的一些知识点","date":"2023-11-14 12:00:00","updated":"2023-11-14 12:00:00"},"headers":[],"relativePath":"基础/核心类库与集合框架/Java 集合框架/基础概念_补充内容01.md","filePath":"基础/核心类库与集合框架/Java 集合框架/基础概念_补充内容01.md","lastUpdated":null}'),t={name:"基础/核心类库与集合框架/Java 集合框架/基础概念_补充内容01.md"};function l(i,s,r,c,o,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<p>记录一下集合相关的概念，对于 Java 集合基础概念的一个补充</p><h4 id="_1、什么是-fail-fast机制-讲述一下他和-fail-safe-的异同。" tabindex="-1">1、什么是 fail-fast机制，讲述一下他和 fail-safe 的异同。 <a class="header-anchor" href="#_1、什么是-fail-fast机制-讲述一下他和-fail-safe-的异同。" aria-label="Permalink to &quot;1、什么是 fail-fast机制，讲述一下他和 fail-safe 的异同。&quot;">​</a></h4><p>错误检查机制</p><ul><li>快速失败 fail-fast <ul><li>当方法检测到对象的并发修改，但不允许这种修改时就抛出该异常</li></ul></li><li>fail-safe 机制 <ul><li>fail-safe 任何对集合结构的修改都会在一个复制的集合上进行，因此不会抛出ConcurrentModificationException</li></ul></li></ul><p><strong>fail-fast 解决方法</strong></p><ul><li>方案一：在遍历过程中所有涉及到改变modCount 值的地方全部加上synchronized 或者直接使用 Collection synchronizedList，这样就可以解决问题，但是不推荐，因为增删造成的同步锁可能会阻塞遍历操作。</li><li>方案二：使用CopyOnWriteArrayList 替换 ArrayLIst，推荐使用该方案（即fail-safe）。</li></ul><p><strong>fail-fast和 fail-safe 的区别</strong></p><table tabindex="0"><thead><tr><th></th><th>Fail Fast Iterator</th><th>Fail Safe Iterator</th></tr></thead><tbody><tr><td>Throw ConcurrentModification Exception</td><td>Yes</td><td>No</td></tr><tr><td>Clone object</td><td>No</td><td>Yes</td></tr><tr><td>Memory Overhead</td><td>No</td><td>Yes</td></tr><tr><td>Examples</td><td>HashMap,Vector,ArrayList,HashSet</td><td>CopyOnWriteArrayList, <br>ConcurrentHashMap</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h4 id="_2、通过实现-comparable-或者-comparator-接口来进行排序" tabindex="-1">2、通过实现 Comparable 或者 Comparator 接口来进行排序 <a class="header-anchor" href="#_2、通过实现-comparable-或者-comparator-接口来进行排序" aria-label="Permalink to &quot;2、通过实现 Comparable 或者 Comparator 接口来进行排序&quot;">​</a></h4><p><strong>一种情况是集合类本身自带排序功能</strong>，如前面说过的TreeSet、SortedSet、SortedMap等，</p><p>另一种就是本身不带排序功能，我们通过为需要排序的类实现 Comparable 或者 Comparator 接口来实现。</p><p>先来看两个例子，一个是实现Comparable的，一个是实现 Comparator 的</p><p>（1）实现Comparable的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.xtfggef.list.test;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>👆 上面这种 Comparator 实现这个接口的时候， 👉 Comparator是一个泛型接口，所以在实现Comparator接口时，类的泛型类型需要指定具体类型，以避免类型擦除带来的问题。</p><hr><p>通过上面的这两个小例子，我们可以看出，Comparator和Comparable用于不同的场景，实现对对象的比较从而进行排序。</p><p>总结为：</p><p><strong>相同点：</strong> 二者都可以实现对象的排序，不论用 Arrays的方法还是用 Collections的sort()方法。</p><p><strong>不同点：</strong></p><p>（1）实现Comparable接口的类，似乎是<strong>预先知道该类将要进行排序</strong>，需要排序的类实现Comparable接口，是一种“静态绑定排序”。</p><p>（2）实现Comparator的类不需要，设计者无需事先为需要排序的类实现任何接口。</p><p>（3）Comparator接口里有两个抽象方法compare()和equals()，<strong>而Comparable接口里只有一个方法</strong>：compareTo()。</p><p>（4）Comparator接口无需改变排序类的内部，也就是说实现算法和数据分离，是一个良好的设计，是一种“动态绑定排序”。</p><p>（5）Comparator接口可以使用多种排序标准，比如升序、降序等。</p>`,27)])])}const g=a(t,[["render",l]]);export{m as __pageData,g as default};
