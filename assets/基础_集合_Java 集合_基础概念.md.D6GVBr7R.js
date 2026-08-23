import{_ as a,o as s,c as e,am as p}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Java 集合_基础概念","description":"","frontmatter":{"title":"Java 集合_基础概念","excerpt":"关于Java集合的一些概念","date":"2023-11-14 10:00:00","updated":"2023-11-14 12:00:00"},"headers":[],"relativePath":"基础/集合/Java 集合_基础概念.md","filePath":"基础/集合/Java 集合_基础概念.md","lastUpdated":null}'),l={name:"基础/集合/Java 集合_基础概念.md"};function i(t,n,o,c,r,d){return s(),e("div",null,[...n[0]||(n[0]=[p(`<p>这篇主要讲述一下关于Java 集合基础的一些内容，同时查漏补缺，完善一下自己对于集合的认识。</p><h3 id="一、基础概念" tabindex="-1">一、基础概念 <a class="header-anchor" href="#一、基础概念" aria-label="Permalink to &quot;一、基础概念&quot;">​</a></h3><p>Java 集合的使用在项目中是大量使用到的，常用的集合类大部分都是 List、Set、Map 的子类；</p><p>成员之间的一个类关系： <img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311141122413.png" alt="image.png"></p><p>在我们实际接触 Java 的时候，可能第一次使用的集合是 List 下 的 ArrayList ，我们作为一个动态数组去使用它。</p><p>实际上，在类关系谱上，List 接口是有一个父接口的，即 Collection 接口； Collection 是所有单列集合类的根接口（不包括 Map，Map 是键值对集合）</p><p>在 Collection 这个根接口下，有两个主要的子接口，分别是 List 和 Set。还有一个特殊用途集合，Queue 接口及其子类。</p><p>另外还有映射接口 Map 接口及其下的实现类。</p><p>并发情况下，可以考虑使用<code>java.util.concurrent</code>包下的类（并发集合）</p><h3 id="二、collection" tabindex="-1">二、Collection <a class="header-anchor" href="#二、collection" aria-label="Permalink to &quot;二、Collection&quot;">​</a></h3><p>在介绍具体的集合实现类之前，我们先了解一下 Collection 这个顶层接口。</p><p>介绍如下：</p><blockquote><p>Collection接口：最基本的集合接口，所代表的是一种规则，它所包含的元素都必须遵循一条或者多条规则。如有些允许重复而有些则不能重复、有些必须要按照顺序插入而有些则是散列，有些支持排序但是有些则不支持。</p></blockquote><p>在Java中所有实现了Collection接口的类都必须提供两套标准的构造函数，一个是无参，用于创建一个空的Collection，一个是带有Collection参数的有参构造函数，用于创建一个新的Collection，这个新的Collection与传入进来的Collection具备相同的元素。</p><p>与 Collection 接口区别的一个常用关键字是 Collections ，Collections 是集合下面的一个常用工具类，提供了一些静态方法用于操作集合，比如排序、搜索、线程安全化等方法。</p><blockquote><p>总结：</p></blockquote><p><code>Collection</code>接口 是 所有单列集合类的根接口，定义了对集合进行基本操作（如添加、删除、清空等）的方法</p><p>在这个根接口下，有两个主要子接口：<code>List</code>和<code>Set</code>。</p><h3 id="三、list" tabindex="-1">三、List <a class="header-anchor" href="#三、list" aria-label="Permalink to &quot;三、List&quot;">​</a></h3><p>List 接口下面的集合一般是指有序的 Collection 数据，使用某种特定的插入顺序来维护元素顺序；</p><p>元素能够通过索引进行访问，并且允许重复元素。</p><p>实现List接口的常用集合类主要有：ArrayList、LinkedList、Vector、Stack等。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311141634443.png" alt="image.png"></p><blockquote><p>小结</p></blockquote><p>List 接口的特点有：</p><ul><li>1、 有序的集合，其中的集合元素是可以重复的，并且元素是可以通过集合的索引下标位置进行访问的；</li><li>2、插入和删除是可以精确进行操作的（根据索引下标）</li><li>3、主要实现类包括：ArrayList、LinkedList 等。</li></ul><blockquote><p>关于 List 接口下的实现类</p></blockquote><ul><li><strong><code>ArrayList</code></strong>：基于动态数组实现，支持随机访问元素，适用于频繁的查找操作。</li><li><strong><code>LinkedList</code></strong>：基于双向链表实现，优于<code>ArrayList</code>进行插入、删除操作，但随机访问速度相对较慢。</li></ul><h4 id="arraylist" tabindex="-1">ArrayList <a class="header-anchor" href="#arraylist" aria-label="Permalink to &quot;ArrayList&quot;">​</a></h4><p><code>ArrayList</code> 是 Java 集合框架中的一部分，属于 <code>List</code> 接口的一个实现。它是基于动态数组的数据结构，提供了快速的随机访问能力。</p><p>ArrayList 的底层数据结构是动态数组，由于是动态数组，比较适合查询操作，对于插入、删除操作不太友好，并且 ArrayList 属于是线程不安全的集合。</p><p>ArrayList 的迭代器在遍历时，如果发现集合被修改，则会立即抛出如果发生异常，会进行抛出 并发修改异常 ConcurrentModificationException。</p><blockquote><p>特点总结</p></blockquote><ul><li>1、底层是动态数组，支持快速随机访问（根据索引访问元素，通过索引直接访问元素的时间复杂度为 O(1)）</li><li>2、对于插入、删除操作不太友好；不过尾部成员的插入、删除操作影响不大，性能较好（不用数组的复制和移动）</li><li>3、元素可重复，有序（保持元素插入的顺序），成员可为任意 Object 子类的对象。</li><li>4、线程不安全</li><li>5、默认初始容量是10，扩容的时候会新增一个原集合容量大小的1.5倍的数组，并复制原数组到一个这个新的更大的数组中，这个操作的时间复杂度为 O(n) 【建议在添加大量元素前最好通过构造函数指定初始容量，以减少扩容次数。】</li></ul><hr><blockquote><p>常用方法</p></blockquote><ul><li><code>add(E e)</code>: 向列表尾部添加一个元素。</li><li><code>add(int index, E element)</code>: 在指定位置插入一个元素。</li><li><code>get(int index)</code>: 返回指定索引处的元素。</li><li><code>remove(int index)</code>: 移除指定索引处的元素。</li><li><code>set(int index, E element)</code>: 替换指定索引处的元素。</li><li><code>size()</code>: 返回列表中的元素数量。</li><li><code>clear()</code>: 移除列表中所有元素。</li><li><code>isEmpty()</code>: 判断列表是否为空。</li><li><code>indexOf(Object o)</code>: 返回指定元素首次出现的索引。</li><li><code>lastIndexOf(Object o)</code>: 返回指定元素最后一次出现的索引。</li></ul><p>使用示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List&lt;String&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>list.add(&quot;Java&quot;);</span></span>
<span class="line"><span>list.add(&quot;Python&quot;);</span></span>
<span class="line"><span>list.add(&quot;C++&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(list.get(0)); // 输出 Java</span></span>
<span class="line"><span></span></span>
<span class="line"><span>list.add(1, &quot;JavaScript&quot;);</span></span>
<span class="line"><span>System.out.println(list); // 输出 [Java, JavaScript, Python, C++]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>list.remove(&quot;C++&quot;);</span></span>
<span class="line"><span>System.out.println(list); // 输出 [Java, JavaScript, Python]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(list.size()); // 输出 3</span></span></code></pre></div><hr><p>关于 ArrayList 集合一些注意的地方</p><blockquote><p>插入和删除是可以精确进行操作的（根据索引下标）</p></blockquote><p>在 ArrayList 中，元素是可以指定索引位置进行插入和删除的；</p><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List&lt;String&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>list.add(&quot;Element 1&quot;);</span></span>
<span class="line"><span>list.add(&quot;Element 2&quot;);</span></span>
<span class="line"><span>list.add(&quot;Element 3&quot;);</span></span>
<span class="line"><span>//新增操作</span></span>
<span class="line"><span>list.add(1, &quot;New Element&quot;); // 在索引1的位置新增一个元素</span></span>
<span class="line"><span>//这时\`list\`中的元素为\`[&quot;Element 1&quot;, &quot;New Element&quot;, &quot;Element 2&quot;, &quot;Element 3&quot;]\`。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除操作示例</span></span>
<span class="line"><span>list.remove(2); // 删除索引为2的元素（&quot;Element 2&quot;）</span></span></code></pre></div><p>注意事项：当使用索引进行操作时，必须确保索引值在合理的范围内（<code>0</code>到<code>list.size()-1</code>），否则会抛出<code>IndexOutOfBoundsException</code></p><p>当在<code>List</code>集合的指定索引位置使用<code>add(int index, E element)</code>方法插入一个新元素时，如果该位置已经有数据元素，那么原有的元素以及其后的所有元素都会向后移动一个位置（索引值增加1），以空出位置给新插入的元素。</p><p>这意味着，新元素会被插入到指定的索引位置，而原来位于该位置的元素以及所有后续元素的索引都会递增。这个操作不会替换或删除原来的元素，而是将所有元素向后推移以保留所有数据。</p><p>同理，删除操作也类似，从<code>List</code>中删除一个指定索引位置的元素时，位于该位置之后的所有元素都会向前移动一个位置（索引值减少1），以填补被删除元素留下的空位。</p><p>插入操作可能会影响性能，特别是对于大型列表或特定类型的<code>List</code>实现（如<code>ArrayList</code>），因为它可能涉及到数组的复制和移动。</p><p>由于这个原因，ArrayList 对于插入、删除操作不太友好；</p><p>考虑到这个原因，在特定情况下（如频繁的插入和删除），可能需要考虑其他类型的集合，如 <code>LinkedList</code>。</p><h5 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h5><p>ArrayList 的底层数据结构是动态数组，这里讲述一下数组相关的一些内容。</p><blockquote><p>数组（Array）是一种用连续的内存空间存储相同数据类型数据的线性数据结构。</p></blockquote><blockquote><p>数组如何获取其他元素的地址值。</p></blockquote><p>寻址公式：a[i] = baseAddress + i * dataTypeSize</p><ul><li>baseAddress:数组的首地址</li><li>dataTypeSize：代办数组中元素类型的大小</li></ul><blockquote><p>为什么数组索引从 0 开始呢，假如从 1 开始不行吗？</p></blockquote><p>参考答案：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301144532.png" alt="image.png"></p><blockquote><p>操作数组的时间复杂度（查找）</p></blockquote><ul><li>索引查找 O(1)</li><li>未排序查找未知位置元素 O(n)</li><li>排序查找未知位置元素 O(logn)</li></ul><p>分为两种情况：一种是根据索引去查找元素，一种是查询未知位置的元素；</p><p>前者的时间复杂度是 O(1); 后者是 O(n ) 【未排序情况】；如果后者是排序的元素，查找的时间复杂度是 O(logn) ]【排序情况，二分查找】</p><blockquote><p>操作数组的时间复杂度（插入、删除）</p></blockquote><p>数组的插入和删除的效率较低，不过在数组头和数组尾的情况是最好情况，时间复杂度是 O(1)</p><p>→ 最好情况下是0(1)的，最坏情况下是O(n)的，平均情况下的时间复杂度是O(n)。</p><h5 id="源码分析" tabindex="-1">源码分析 <a class="header-anchor" href="#源码分析" aria-label="Permalink to &quot;源码分析&quot;">​</a></h5><p>根据 成员变量、构造函数、关键方法 三部分来进行分析（jdk 1.8)</p><h6 id="成员变量" tabindex="-1">成员变量 <a class="header-anchor" href="#成员变量" aria-label="Permalink to &quot;成员变量&quot;">​</a></h6><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301145408.png" alt="image.png"></p><ul><li>DEFAULT_CAPACITY <ul><li><code>DEFAULT_CAPACITY</code>是<code>ArrayList</code>的默认容量。默认是 10</li><li>当使用无参构造函数创建<code>ArrayList</code>实例时，如果第一次添加元素，数组将会被扩展到这个默认大小。</li></ul></li><li>EMPTY_ELEMENTDATA <ul><li><code>EMPTY_ELEMENTDATA</code>是用于空实例的共享空数组实例。</li><li><strong>使用指定容量构造方法</strong>创建<code>ArrayList</code>实例时，内部数组<code>elementData</code>初始化为这个空数组。这种做法是为了优化内存使用，在不需要存储任何元素时不分配内存空间。</li></ul></li><li>DEFAULTCAPACITY_EMPTY_ELEMENTDATA <ul><li>默认大小空实例的共享空数组实例</li><li><code>DEFAULTCAPACITY_EMPTY_ELEMENTDATA</code>与<code>EMPTY_ELEMENTDATA</code>在JDK 1.8中实际上是一样的，都是空数组。</li><li>但其语义上用于区分<code>ArrayList</code>是通过无参构造函数创建的还是通过指定初始容量创建的。它标记着<code>ArrayList</code>使用<strong>无参构造时</strong>的初始状态，当第一次添加元素时，将扩展到<code>DEFAULT_CAPACITY</code>的大小。</li></ul></li><li>elementData <ul><li><code>elementData</code>是存储<code>ArrayList</code>元素的数组缓冲区。<code>ArrayList</code>通过这个数组来存储所有的元素。</li><li>当元素数量超过这个数组的容量时，<code>ArrayList</code>会创建一个新的数组来替换它，并将旧数组的内容复制到新数组中，从而实现动态扩容。</li></ul></li><li>size <ul><li><code>size</code>表示<code>ArrayList</code>中实际存储的元素数量。注意，这个值可能小于<code>elementData</code>的长度，因为<code>elementData</code>的长度代表的是<code>ArrayList</code>的容量，而<code>size</code>才是实际元素的计数。</li></ul></li></ul><p>指定初始容量 → EMPTY_ELEMENTDATA；默认无参构造函数 → DEFAULTCAPACITY_EMPTY_ELEMENTDATA</p><h6 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h6><p>带初始化容量的构造函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * ArrayList 所包含的元素个数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private int size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 带初始容量参数的构造函数（用户可以在创建ArrayList对象时自己指定集合的初始大小）</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ArrayList(int initialCapacity) {</span></span>
<span class="line"><span>        if (initialCapacity &gt; 0) {</span></span>
<span class="line"><span>            //如果传入的参数大于0，创建initialCapacity大小的数组</span></span>
<span class="line"><span>            this.elementData = new Object[initialCapacity];</span></span>
<span class="line"><span>        } else if (initialCapacity == 0) {</span></span>
<span class="line"><span>            //如果传入的参数等于0，创建空数组</span></span>
<span class="line"><span>            this.elementData = EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            //其他情况，抛出异常</span></span>
<span class="line"><span>            throw new IllegalArgumentException(&quot;Illegal Capacity: &quot; +</span></span>
<span class="line"><span>                    initialCapacity);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>无参构造函数，默认创建空集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 默认无参构造函数</span></span>
<span class="line"><span>     * DEFAULTCAPACITY_EMPTY_ELEMENTDATA 为0.初始化为10，也就是说初始其实是空数组 当添加第一个元素的时候数组容量才变成10</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ArrayList() {</span></span>
<span class="line"><span>        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>指定集合构造函数</p><p>collection 参数构造函数，将 collection 对象转换为数组，然后将数组的地址的值内容赋值给 elementData数组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 构造一个包含指定集合的元素的列表，按照它们由集合的迭代器返回的顺序。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ArrayList(Collection&lt;? extends E&gt; c) {</span></span>
<span class="line"><span>        //将指定集合转换为数组</span></span>
<span class="line"><span>        elementData = c.toArray();</span></span>
<span class="line"><span>        //如果elementData数组的长度不为0</span></span>
<span class="line"><span>        if ((size = elementData.length) != 0) {</span></span>
<span class="line"><span>            // 如果elementData不是Object类型数据（c.toArray可能返回的不是Object类型的数组所以加上下面的语句用于判断）</span></span>
<span class="line"><span>            if (elementData.getClass() != Object[].class)</span></span>
<span class="line"><span>                //将原来不是Object类型的elementData数组的内容，赋值给新的Object类型的elementData数组</span></span>
<span class="line"><span>                elementData = Arrays.copyOf(elementData, size, Object[].class);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 其他情况，用空数组代替</span></span>
<span class="line"><span>            this.elementData = EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><blockquote><p>关键方法</p></blockquote><h6 id="添加元素" tabindex="-1">添加元素 <a class="header-anchor" href="#添加元素" aria-label="Permalink to &quot;添加元素&quot;">​</a></h6><p>第一次添加数据</p><ul><li>第一次添加数据的时候会先计算容量，返回 minCapacity</li><li>判断是否需要扩容，第一次的时候会进行一下扩容</li><li>10 &gt; 0 ，进行扩容操作</li><li>然后会获取到第一次初始化数组长度 10 (newCapacity - minCapacity &lt; 0)</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301153139.png" alt="image.png"></p><p>第二次至十次添加元素</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301153847.png" alt="image.png"></p><p>第十一次添加元素</p><p>此时会进行一次扩容，扩容容量为默认容量的 1.5 倍，数据进行数组拷贝到一个新的数组中。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301154017.png" alt="image.png"></p><hr><h5 id="常见面试题" tabindex="-1">常见面试题 <a class="header-anchor" href="#常见面试题" aria-label="Permalink to &quot;常见面试题&quot;">​</a></h5><p>相关的一些概念</p><blockquote><p>ArrayList 和 Array 数组 的的区别。</p></blockquote><p>ArrayList 的底层实现是动态数组，支持自动扩容，支持泛型确保类型安全。</p><p>而 Array 数组是固定的容量大小，需要在声明的时候就指定固定数据类型和指定大小，支持基本类型和对象。</p><blockquote><p>ArrayList 和 Vector 的区别。</p></blockquote><p>ArrayList 和 Vector 都是 List 接口下的实现类，但是 ArrayList 是线程不安全的，性能较高；</p><p>Vector 是线程安全的，是 List 接口的古老实现，但不建议目前使用（同步操作导致性能问题），如果是并发情况下，建议使用 <code>CopyOnWriteArrayList</code> 等.</p><p>另外两者的扩容机制不一样，ArrayList 扩容增长为原来的 1.5 倍，Vector 默认增长为原来的 2 倍。</p><blockquote><p>Vector 和 Stack 的区别。</p></blockquote><p>Vector 是 List 接口的古老实现类，是线程安全的有序集合。</p><p>Stack 继承于 Vector ，是一个栈结构（后进先出 LIFO）。它提供了栈结构的一些标准操作方法，实现了栈的基本功能。</p><p>但是由于同步操作导致性能问题，不推荐目前使用；栈目前一般是使用 <code>Deque</code> 接口的实现类 <code>ArrayDequeu</code> 替代 Stack 。</p><blockquote><p>ArrayList 是否可以添加 null 值。</p></blockquote><p>ArrayList 是可以添加 null 值的，但是不建议；</p><p>尽管 ArryayList 支持添加 null ，并且允许 重复添加，但是在使用的过程中代码可能会抛出空指针异常。</p><p>见下👇：</p><p>在使用包含<code>null</code>值的<code>ArrayList</code>时要特别小心，因为对<code>null</code>的操作可能会导致<code>NullPointerException</code>。</p><p>例如，如果你尝试调用<code>null</code>对象的方法或访问其属性，就会遇到这种异常。因此，在处理可能包含<code>null</code>值的<code>ArrayList</code>时，总是好的做法是进行<code>null</code>检查。</p><blockquote><p>ArrayList 插入和删除的时间复杂度。</p></blockquote><p><code>ArrayList</code>的插入和删除操作的时间复杂度取决于操作的位置：</p><p>插入操作：</p><p>在 ArrayList 中，末尾添加或者移除元素的时间复杂度都是 <code>O(1)</code>操作，因为不需要移动已有的元素</p><p>但是考虑一个情况，就是当插入元素的时候，此时如果数组需要扩容（即当前元素数量已达到数组的容量），则插入的时间复杂度会上升到<code>O(n)</code>，因为需要复制现有的数组到一个更大的数组。</p><p>在<code>ArrayList</code>的特定位置插入元素的时间复杂度是<code>O(n)</code>，因为需要将插入点之后的所有元素向后移动一位以腾出空间。这里的<code>n</code>是从插入点到数组末尾的元素数量。</p><p>删除操作：</p><p>从<code>ArrayList</code>的末尾移除元素通常是<code>O(1)</code>操作，直接删除最后一个元素不需要移动其他元素。</p><p>从<code>ArrayList</code>的特定位置删除元素的时间复杂度是<code>O(n)</code>，</p><blockquote><p>ArrayList 的实现原理是什么？ 🚩</p></blockquote><ul><li>ArrayList 底层是用动态的数组实现的</li><li>ArrayList 初始容量为 0，当第一次添加数据的时候才会初始化容量为 10</li><li>ArrayList在进行扩容的时候是原来容量的1.5倍，每次扩容都需要拷贝数组</li><li>ArrayList在添加数据的时候 <ul><li>确保数组已使用长度(size) 加1 之后足够存下下一个数据</li><li>计算数组的容量，如果当前数组已使用长度+1后的大于当前的数组长度，则调用 grow 方法扩容（原来的1.5倍）</li><li>确保新增的数据有地方存储之后，则将新元素添加到位于 size 的位置上。</li><li>返回添加成功布尔值。</li></ul></li></ul><hr><blockquote><p>ArrayList list = new ArrayList(10) 中的 list 扩容几次？</p></blockquote><p>未扩容</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301154733.png" alt="image.png"></p><blockquote><p>如何实现 数组和List 之间的转换 🚩</p></blockquote><p>参考回答：</p><ul><li>数组转 List， 使用 JDK 中 java.util.Arrays 工具类的 asList 方法</li><li>List 转数组，使用 List 的 toArray 方法， <ul><li>无参 toArray 方法返回 Object 数组，</li><li>传入初始化 长度的数组对象，返回该对象数组</li></ul></li></ul><p>再问：</p><ul><li>用 Arrays.asList 转 List 后，如果修改了数组内容， list 受影响吗</li><li>List 用 toArray 转数组后，如果修改了 List 内容，数组受影响吗</li></ul><p>asList 方法的元素指向地址并没有改，如果修改了数组内容， list 内容也会 受影响</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301170109.png" alt="image.png"></p><p>toArray 方法是将数据赋值到了一个新的数组中</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301170302.png" alt="image.png"></p><p>参考回答：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301170401.png" alt="image.png"></p><hr><p>数组 → List</p><p>使用<code>Arrays.asList(T... a)</code>方法可以将数组转换为List。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String[] array = {&quot;Apple&quot;, &quot;Banana&quot;, &quot;Cherry&quot;};</span></span>
<span class="line"><span>List&lt;String&gt; list = Arrays.asList(array);</span></span>
<span class="line"><span>// 注意：返回的List为固定大小的List</span></span></code></pre></div><p>List → 数组</p><p>使用List的<code>toArray()</code>方法可以将List转换为数组。</p><p>如果要转换的目标是对象数组，可以直接使用无参的<code>toArray()</code>方法；如果要转换为特定类型的数组，可以使用<code>toArray(T[] a)</code>方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//转换为Object数组</span></span>
<span class="line"><span>List&lt;String&gt; list = Arrays.asList(&quot;Apple&quot;, &quot;Banana&quot;, &quot;Cherry&quot;);</span></span>
<span class="line"><span>Object[] objectArray = list.toArray();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//转换为特定类型的数组</span></span>
<span class="line"><span>List&lt;String&gt; list = Arrays.asList(&quot;Apple&quot;, &quot;Banana&quot;, &quot;Cherry&quot;);</span></span>
<span class="line"><span>String[] stringArray = list.toArray(new String[0]);</span></span>
<span class="line"><span>// 注意：toArray(new String[0])中的数组大小通常指定为0，实际返回数组的大小将由List的大小决定</span></span></code></pre></div><blockquote><p>ArrayList 和 LinkedList 的区别是什么？</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301172107.png" alt="image.png"></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301172156.png" alt="image.png"></p><p>总结：</p><ul><li>1、底层数据结构</li><li>2、效率</li><li>3、空间</li><li>4、线程是否安全</li></ul><hr><h4 id="linkedlist" tabindex="-1">LinkedList <a class="header-anchor" href="#linkedlist" aria-label="Permalink to &quot;LinkedList&quot;">​</a></h4><p>LinkedList 底层的数据结构是双向链表；非常适合频繁的插入、删除操作（修改指针就行）；查询性能不太好（需要遍历链表查找元素）</p><p><code>LinkedList</code>是Java集合框架中的一部分，实现了<code>List</code>接口和<code>Deque</code>接口，提供了列表和双端队列的功能。</p><p>与<code>ArrayList</code>相比，<code>LinkedList</code>在内部采用了双向链表的数据结构。</p><p>特点：</p><ul><li>1、底层实现是双向链表，大小是动态的，可以根据需要增加或减少节点（元素）</li><li>2、高效的插入和删除，<code>LinkedList</code>可以在任何位置快速插入和删除元素，时间复杂度为<code>O(1)</code>，只要能直接访问到插入或删除的节点。但是，寻找特定位置的节点需要从头节点或尾节点开始遍历，时间复杂度为<code>O(n)</code>。</li><li>3、支持双向遍历。</li><li>4、<code>LinkedList</code>的每个元素都是一个节点对象，除了数据外，还包含了两个指针（链接前后节点的），因此相比<code>ArrayList</code>，<code>LinkedList</code>通常会有更高的内存开销。</li></ul><p>示例代码：</p><p>创建<code>LinkedList</code>并进行基本操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LinkedList&lt;String&gt; linkedList = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>linkedList.add(&quot;Element 1&quot;); // 添加元素</span></span>
<span class="line"><span>linkedList.addFirst(&quot;Element 0&quot;); // 在头部添加元素</span></span>
<span class="line"><span>linkedList.addLast(&quot;Element 2&quot;); // 在尾部添加元素</span></span>
<span class="line"><span>linkedList.removeFirst(); // 删除头部元素</span></span>
<span class="line"><span>linkedList.removeLast(); // 删除尾部元素</span></span>
<span class="line"><span>String element = linkedList.get(0); // 随机访问，时间复杂度O(n)</span></span></code></pre></div><blockquote><p>关于 LinkedList 支持双向遍历的代码示例说明</p></blockquote><p>在Java的<code>LinkedList</code>类中，双向遍历的支持体现在它实现了<code>List</code>接口和<code>Deque</code>接口。<code>Deque</code>接口提供了在双端队列的两端插入和删除元素的方法，例如：</p><ul><li>使用<code>addFirst(E e)</code>和<code>addLast(E e)</code>方法在链表的头部或尾部添加元素。</li><li>使用<code>removeFirst()</code>和<code>removeLast()</code>方法从链表的头部或尾部移除元素。</li><li>使用<code>getFirst()</code>和<code>getLast()</code>方法获取链表的第一个或最后一个元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>list.add(&quot;A&quot;);</span></span>
<span class="line"><span>list.add(&quot;B&quot;);</span></span>
<span class="line"><span>list.add(&quot;C&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用\`listIterator()\`进行正向遍历\`LinkedList\`，然后使用相同的迭代器进行反向遍历。</span></span>
<span class="line"><span>// 正向遍历</span></span>
<span class="line"><span>ListIterator&lt;String&gt; iterator = list.listIterator();</span></span>
<span class="line"><span>while (iterator.hasNext()) {</span></span>
<span class="line"><span>    System.out.println(iterator.next());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 反向遍历</span></span>
<span class="line"><span>while (iterator.hasPrevious()) {</span></span>
<span class="line"><span>    System.out.println(iterator.previous());</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="四、set" tabindex="-1">四、Set <a class="header-anchor" href="#四、set" aria-label="Permalink to &quot;四、Set&quot;">​</a></h3><p>Set 接口的特点有：</p><ul><li>无序集合，<code>Set</code>接口的实现类通过内部使用映射（Map）来确保元素的唯一性。</li><li>不允许有重复元素的集合。</li><li>允许 null的存在但是仅有一个</li></ul><hr><p>关于 Set 接口下的实现类</p><ul><li><strong><code>HashSet</code></strong>： <ul><li>基于<code>HashMap</code>实现，利用<code>HashMap</code>的键来存储<code>Set</code>中的元素，从而保证元素的唯一性。（哈希表）</li><li>拥有很好的查找和插入性能，但不保证元素的顺序。</li><li>允许使用null元素</li></ul></li><li><strong><code>LinkedHashSet</code></strong>： <ul><li>类似于<code>HashSet</code>，但维护了一个运行于所有条目的双重链接列表，保证了元素的迭代顺序。</li><li>继承于 HashSet、又基于LinkedHashMap来实现</li><li>底层使用LinkedHashMap来保存所有元素，它继承于HashSet，其所有的方法操作上与HashSet相同</li></ul></li><li><strong><code>TreeSet</code></strong>： <ul><li>基于<code>TreeMap</code>实现，不仅确保元素的唯一性，（红黑树）</li><li>可以按照元素的自然顺序或者构造时指定的<code>Comparator</code>进行排序。</li></ul></li><li><code>EnumSet</code><ul><li>枚举的专用Set。所有的元素都是枚举类型</li></ul></li></ul><blockquote><p>Set 接口的常用操作</p></blockquote><ul><li><strong>添加元素</strong>：<code>add(E e)</code>方法用于向集合中添加一个元素。</li><li><strong>检查元素</strong>：<code>contains(Object o)</code>方法用于检查集合中是否存在指定的元素。</li><li><strong>删除元素</strong>：<code>remove(Object o)</code>方法用于删除集合中的指定元素。</li><li><strong>集合大小</strong>：<code>size()</code>方法返回集合中元素的数量。</li><li><strong>遍历</strong>：可以通过迭代器（<code>Iterator</code>）或增强的for循环来遍历<code>Set</code>。</li></ul><p>使用场景</p><ul><li>当需要保持元素唯一性时，如去除重复元素。</li><li>当元素的顺序不重要时，可以选择<code>HashSet</code>以获得更高的性能。</li><li>当需要维护元素插入顺序时，<code>LinkedHashSet</code>是一个好的选择。</li><li>当需要对集合中的元素进行排序时，<code>TreeSet</code>提供了排序的功能。</li></ul><p>示例代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Set&lt;String&gt; hashSet = new HashSet&lt;&gt;();</span></span>
<span class="line"><span>hashSet.add(&quot;Apple&quot;);</span></span>
<span class="line"><span>hashSet.add(&quot;Banana&quot;);</span></span>
<span class="line"><span>hashSet.add(&quot;Apple&quot;); // 重复元素，不会被添加</span></span>
<span class="line"><span>System.out.println(hashSet); // 输出可能是 [Banana, Apple]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set&lt;String&gt; linkedHashSet = new LinkedHashSet&lt;&gt;();</span></span>
<span class="line"><span>linkedHashSet.add(&quot;Apple&quot;);</span></span>
<span class="line"><span>linkedHashSet.add(&quot;Banana&quot;);</span></span>
<span class="line"><span>System.out.println(linkedHashSet); // 输出 [Apple, Banana], 保持插入顺序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set&lt;String&gt; treeSet = new TreeSet&lt;&gt;();</span></span>
<span class="line"><span>treeSet.add(&quot;Banana&quot;);</span></span>
<span class="line"><span>treeSet.add(&quot;Apple&quot;);</span></span>
<span class="line"><span>System.out.println(treeSet); // 输出 [Apple, Banana], 自然排序</span></span></code></pre></div><h4 id="sortedset" tabindex="-1">SortedSet <a class="header-anchor" href="#sortedset" aria-label="Permalink to &quot;SortedSet&quot;">​</a></h4><p>回顾类关系</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311141122413.png" alt="image.png"></p><p><code>SortedSet</code> 是 <code>Set</code> 接口的一个扩展，用于保持元素的排序。<code>SortedSet</code> 确保集合中的元素是按照某种特定的顺序排列的，无论是自然排序还是根据提供的 <code>Comparator</code> 进行排序</p><p><code>SortedSet</code>默认的排序顺序是自然顺序，默认的迭代顺序是升序排序，开始是最小的元素，慢慢变大。</p><blockquote><p>Comparator 比较仪，比较标准；对照物</p></blockquote><ul><li><strong>主要方法</strong>: <ul><li><code>first()</code>: 返回集合中的第一个（最低）元素。</li><li><code>last()</code>: 返回集合中的最后一个（最高）元素。</li><li><code>headSet(toElement)</code>: 返回此集合中小于 <code>toElement</code> 的元素的视图。</li><li><code>tailSet(fromElement)</code>: 返回此集合中大于或等于 <code>fromElement</code> 的元素的视图。</li><li><code>subSet(fromElement, toElement)</code>: 返回集合的一个部分视图，其元素范围从 <code>fromElement</code>（包含）到 <code>toElement</code>（不包含）。</li></ul></li><li><strong>特点</strong>: 不允许含有重复元素，可以按自然顺序或自定义比较器来排序元素。</li></ul><h4 id="treeset" tabindex="-1">TreeSet <a class="header-anchor" href="#treeset" aria-label="Permalink to &quot;TreeSet&quot;">​</a></h4><ul><li><code>TreeSet</code> 是 <code>SortedSet</code> 接口的一个具体实现，内部使用红黑树（平衡二叉搜索树的一种形式）来管理元素。它保证集合中的元素在任何时间都处于排序状态。</li><li><strong>主要方法</strong>: 作为 <code>SortedSet</code> 的实现，<code>TreeSet</code> 提供了上述 <code>SortedSet</code> 的所有方法。</li></ul><h4 id="自然排序操作" tabindex="-1">自然排序操作 <a class="header-anchor" href="#自然排序操作" aria-label="Permalink to &quot;自然排序操作&quot;">​</a></h4><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.TreeSet;</span></span>
<span class="line"><span>import java.util.SortedSet;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SetPractice {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建一个 TreeSet 实例</span></span>
<span class="line"><span>        SortedSet&lt;Integer&gt; numbers = new TreeSet&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加元素</span></span>
<span class="line"><span>        numbers.add(10);</span></span>
<span class="line"><span>        numbers.add(40);</span></span>
<span class="line"><span>        numbers.add(30);</span></span>
<span class="line"><span>        numbers.add(20);</span></span>
<span class="line"><span>        numbers.add(50);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出排序后的集合</span></span>
<span class="line"><span>        System.out.println(&quot;SortedSet: &quot; + numbers);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取并输出第一个元素和最后一个元素</span></span>
<span class="line"><span>        System.out.println(&quot;First: &quot; + numbers.first());</span></span>
<span class="line"><span>        System.out.println(&quot;Last: &quot; + numbers.last());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里默认使用的是自然排序，实际在上面的使用示例中，Integer 对象等一般都会重写 compareTo 方法</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240414102537.png" alt="image.png"></p><p>实际你去看这个类的时候，会发现它也是实现了 Comparable 接口</p><p><code>public final class Integer extends Number implements Comparable&lt;Integer&gt;</code></p><p><code>compareTo</code> 方法通常是在实现 <code>Comparable</code> 接口的时候定义的。<code>Comparable</code> 接口是 Java 中的一个通用接口，用于定义对象的自然排序。</p><p>再讲几个例子，你可能会更新对此理解更透彻一些。</p><blockquote><p>自然排序操作: 任务管理器：用于管理一系列任务的截止日期，使用 TreeSet 来确保任务按截止日期自然排序</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.collection;</span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 任务管理器：用于管理一系列任务的截止日期，使用 TreeSet 来确保任务按截止日期自然排序。</span></span>
<span class="line"><span> * 这个类展示了如何使用 TreeSet 处理时间敏感的任务排序。</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File TaskManager.java</span></span>
<span class="line"><span> * @Desc 任务管理器类，用于演示 TreeSet 的使用。</span></span>
<span class="line"><span> * @Create 2024/4/14 9:59</span></span>
<span class="line"><span> * @ChangeList</span></span>
<span class="line"><span> * --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date             Editor          ChangeReason</span></span>
<span class="line"><span> * 2024/04/14       luoqi           Initial creation of the file and implementation of task sorting.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class TaskManager {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 使用 TreeSet 来存储任务的截止日期（使用自然排序）</span></span>
<span class="line"><span>        SortedSet&lt;Task&gt; tasks = new TreeSet&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加一些任务</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;项目规划&quot;, new GregorianCalendar(2024, Calendar.APRIL, 20).getTime()));</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;需求分析&quot;, new GregorianCalendar(2024, Calendar.MAY, 15).getTime()));</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;设计阶段&quot;, new GregorianCalendar(2024, Calendar.MAY, 30).getTime()));</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;实施阶段&quot;, new GregorianCalendar(2024, Calendar.JUNE, 30).getTime()));</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;测试&quot;, new GregorianCalendar(2024, Calendar.JULY, 20).getTime()));</span></span>
<span class="line"><span>        tasks.add(new Task(&quot;部署&quot;, new GregorianCalendar(2024, Calendar.AUGUST, 10).getTime()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 显示所有任务</span></span>
<span class="line"><span>        System.out.println(&quot;全部任务按截止日期排序：&quot;);</span></span>
<span class="line"><span>        for (Task task : tasks) {</span></span>
<span class="line"><span>            System.out.println(task);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取最近的任务</span></span>
<span class="line"><span>        if (!tasks.isEmpty()) {</span></span>
<span class="line"><span>            Task firstTask = tasks.first();</span></span>
<span class="line"><span>            System.out.println(&quot;\\n最近的任务是: &quot; + firstTask);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 查找特定时间前的所有任务</span></span>
<span class="line"><span>        Date targetDate = new GregorianCalendar(2024, Calendar.JULY, 1).getTime();</span></span>
<span class="line"><span>        SortedSet&lt;Task&gt; tasksBeforeJuly = tasks.headSet(new Task(&quot;&quot;, targetDate));</span></span>
<span class="line"><span>        System.out.println(&quot;\\n7月1日前的任务：&quot;);</span></span>
<span class="line"><span>        for (Task task : tasksBeforeJuly) {</span></span>
<span class="line"><span>            System.out.println(task);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Task 类用于存储单个任务的详细信息，如名称和截止日期。</span></span>
<span class="line"><span>     * 实现 Comparable 接口允许任务根据截止日期进行排序。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    static class Task implements Comparable&lt;Task&gt; {</span></span>
<span class="line"><span>        String name;</span></span>
<span class="line"><span>        Date deadline;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public Task(String name, Date deadline) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.deadline = deadline;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public int compareTo(Task other) {</span></span>
<span class="line"><span>            return this.deadline.compareTo(other.deadline);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return name + &quot; - 截止日期: &quot; + deadline;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>自然排序操作：音乐节演出管理器：用于管理音乐节中乐队的演出时间表。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.collection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 音乐节演出管理器：用于管理音乐节中乐队的演出时间表。</span></span>
<span class="line"><span> * 使用 SortedSet 来保证按演出时间自然排序，以便快速检索和管理演出事件。</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File MusicFestivalManager.java</span></span>
<span class="line"><span> * @Desc 音乐节演出时间表管理类，使用 SortedSet 处理演出时间的排序和检索。</span></span>
<span class="line"><span> * @Create 2024/4/14 10:59</span></span>
<span class="line"><span> * @ChangeList</span></span>
<span class="line"><span> * --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date             Editor          ChangeReason</span></span>
<span class="line"><span> * 2024/04/14       luoqi           Initial creation and implementation for managing band performances.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class MusicFestivalManager {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 使用 TreeSet 来存储乐队的演出时间（自然排序）</span></span>
<span class="line"><span>        SortedSet&lt;Performance&gt; schedule = new TreeSet&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加演出时间</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;The Beatless&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 20, 0).getTime()));</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;Arctic Monkeys&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 18, 0).getTime()));</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;Radiohead&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 22, 0).getTime()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出全部演出时间按时间排序</span></span>
<span class="line"><span>        System.out.println(&quot;演出时间表：&quot;);</span></span>
<span class="line"><span>        for (Performance performance : schedule) {</span></span>
<span class="line"><span>            System.out.println(performance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取并输出下一场演出</span></span>
<span class="line"><span>        if (!schedule.isEmpty()) {</span></span>
<span class="line"><span>            Performance nextPerformance = schedule.first();</span></span>
<span class="line"><span>            System.out.println(&quot;\\n下一场演出是: &quot; + nextPerformance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 查找晚上7点后的所有演出</span></span>
<span class="line"><span>        Date eveningTime = new GregorianCalendar(2024, Calendar.JUNE, 25, 19, 0).getTime();</span></span>
<span class="line"><span>        SortedSet&lt;Performance&gt; eveningPerformances = schedule.tailSet(new Performance(&quot;&quot;, eveningTime));</span></span>
<span class="line"><span>        System.out.println(&quot;\\n晚上7点后的演出：&quot;);</span></span>
<span class="line"><span>        for (Performance performance : eveningPerformances) {</span></span>
<span class="line"><span>            System.out.println(performance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Performance 类用于存储乐队的名称和演出时间。</span></span>
<span class="line"><span>     * 实现 Comparable 接口以便按时间进行排序。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    static class Performance implements Comparable&lt;Performance&gt; {</span></span>
<span class="line"><span>        String bandName;</span></span>
<span class="line"><span>        Date time;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public Performance(String bandName, Date time) {</span></span>
<span class="line"><span>            this.bandName = bandName;</span></span>
<span class="line"><span>            this.time = time;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 按演出时间对演出进行排序</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public int compareTo(Performance other) {</span></span>
<span class="line"><span>            return this.time.compareTo(other.time);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 返回演出的字符串表示，包括乐队名称和时间</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return bandName + &quot; - 演出时间: &quot; + time;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="自定义比较器" tabindex="-1">自定义比较器 <a class="header-anchor" href="#自定义比较器" aria-label="Permalink to &quot;自定义比较器&quot;">​</a></h4><p>将上面的类 MusicFestivalManager 进行一个基础改造</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.collection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 音乐节演出管理器：用于管理音乐节中乐队的演出时间表。</span></span>
<span class="line"><span> * 使用 SortedSet 和自定义 Comparator 来保证按演出时间自然排序，以便快速检索和管理演出事件。</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File MusicFestivalManager.java</span></span>
<span class="line"><span> * @Desc 音乐节演出时间表管理类，使用 SortedSet 和自定义 Comparator 处理演出时间的排序和检索。</span></span>
<span class="line"><span> * @Create 2024/4/14 10:59</span></span>
<span class="line"><span> * @ChangeList</span></span>
<span class="line"><span> * --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date             Editor          ChangeReason</span></span>
<span class="line"><span> * 2024/04/14       luoqi           Updated to use custom Comparator for sorting performances.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class MusicFestivalManagerComparator {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 定义自定义比较器</span></span>
<span class="line"><span>        Comparator&lt;Performance&gt; performanceComparator = new Comparator&lt;Performance&gt;() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public int compare(Performance p1, Performance p2) {</span></span>
<span class="line"><span>                return p1.time.compareTo(p2.time);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用 TreeSet 和自定义比较器来存储乐队的演出时间</span></span>
<span class="line"><span>        SortedSet&lt;Performance&gt; schedule = new TreeSet&lt;&gt;(performanceComparator);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加演出时间</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;The Beatless&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 20, 0).getTime()));</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;Arctic Monkeys&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 18, 0).getTime()));</span></span>
<span class="line"><span>        schedule.add(new Performance(&quot;Radiohead&quot;, new GregorianCalendar(2024, Calendar.JUNE, 25, 22, 0).getTime()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出全部演出时间按时间排序</span></span>
<span class="line"><span>        System.out.println(&quot;演出时间表：&quot;);</span></span>
<span class="line"><span>        for (Performance performance : schedule) {</span></span>
<span class="line"><span>            System.out.println(performance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取并输出下一场演出</span></span>
<span class="line"><span>        if (!schedule.isEmpty()) {</span></span>
<span class="line"><span>            Performance nextPerformance = schedule.first();</span></span>
<span class="line"><span>            System.out.println(&quot;\\n下一场演出是: &quot; + nextPerformance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 查找晚上7点后的所有演出</span></span>
<span class="line"><span>        Date eveningTime = new GregorianCalendar(2024, Calendar.JUNE, 25, 19, 0).getTime();</span></span>
<span class="line"><span>        SortedSet&lt;Performance&gt; eveningPerformances = schedule.tailSet(new Performance(&quot;&quot;, eveningTime));</span></span>
<span class="line"><span>        System.out.println(&quot;\\n晚上7点后的演出：&quot;);</span></span>
<span class="line"><span>        for (Performance performance : eveningPerformances) {</span></span>
<span class="line"><span>            System.out.println(performance);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Performance 类用于存储乐队的名称和演出时间。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    static class Performance {</span></span>
<span class="line"><span>        String bandName;</span></span>
<span class="line"><span>        Date time;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public Performance(String bandName, Date time) {</span></span>
<span class="line"><span>            this.bandName = bandName;</span></span>
<span class="line"><span>            this.time = time;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 返回演出的字符串表示，包括乐队名称和时间</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return bandName + &quot; - 演出时间: &quot; + time;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>也许你这样看还不是太明显，继续往下看。</p><p>Comparator 的优势</p><ul><li>可以定义多个不同的比较方法。</li><li>可以在运行时传入比较器到集合的构造函数。</li><li>适合那些需要多种排序策略的复杂场景。</li></ul><blockquote><p>自定义比较器：人力资源管理器：用于管理公司员工的列表，并支持根据多种标准对员工进行排序。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.collection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 人力资源管理器：用于管理公司员工的列表，并支持根据多种标准对员工进行排序。</span></span>
<span class="line"><span> * 使用自定义 Comparator 和 TreeSet 实现多层次动态排序。</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File HumanResourcesManager.java</span></span>
<span class="line"><span> * @Desc 人力资源管理系统中的员工排序和管理。</span></span>
<span class="line"><span> * @Create 2024/4/14 12:00</span></span>
<span class="line"><span> * @ChangeList</span></span>
<span class="line"><span> * --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date             Editor          ChangeReason</span></span>
<span class="line"><span> * 2024/04/14       luoqi           Modified to use custom Comparator for sorting employees in a TreeSet.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class HumanResourcesManager {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 定义自定义比较器，先按部门排序，部门相同则按姓名排序</span></span>
<span class="line"><span>        Comparator&lt;Employee&gt; employeeComparator = new Comparator&lt;Employee&gt;() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public int compare(Employee e1, Employee e2) {</span></span>
<span class="line"><span>                int departmentComparison = e1.getDepartment().compareTo(e2.getDepartment());</span></span>
<span class="line"><span>                if (departmentComparison != 0) {</span></span>
<span class="line"><span>                    return departmentComparison;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return e1.getName().compareTo(e2.getName());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用 TreeSet 和自定义比较器来存储员工信息</span></span>
<span class="line"><span>        SortedSet&lt;Employee&gt; employees = new TreeSet&lt;&gt;(employeeComparator);</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Alice Johnson&quot;, &quot;Accounting&quot;, new GregorianCalendar(2019, Calendar.JANUARY, 5).getTime()));</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Bob Smith&quot;, &quot;Marketing&quot;, new GregorianCalendar(2021, Calendar.MARCH, 12).getTime()));</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Charlie Brown&quot;, &quot;IT&quot;, new GregorianCalendar(2020, Calendar.FEBRUARY, 20).getTime()));</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;David Wilson&quot;, &quot;Accounting&quot;, new GregorianCalendar(2022, Calendar.APRIL, 25).getTime()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出全部员工信息按部门和姓名排序</span></span>
<span class="line"><span>        System.out.println(&quot;Employees sorted by Department and Name:&quot;);</span></span>
<span class="line"><span>        for (Employee employee : employees) {</span></span>
<span class="line"><span>            System.out.println(employee);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static class Employee {</span></span>
<span class="line"><span>        private String name;</span></span>
<span class="line"><span>        private String department;</span></span>
<span class="line"><span>        private Date startDate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public Employee(String name, String department, Date startDate) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.department = department;</span></span>
<span class="line"><span>            this.startDate = startDate;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public String getName() { return name; }</span></span>
<span class="line"><span>        public String getDepartment() { return department; }</span></span>
<span class="line"><span>        public Date getStartDate() { return startDate; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return String.format(&quot;%s, %s Department, Start Date: %s&quot;, name, department, startDate);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个是基础的一些用法，当你不需要使用 set 进行去重的话，也可以使用 ArrayList 去进行一些操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.collection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 人力资源管理器：用于管理公司员工的列表，并支持根据多种标准对员工进行排序。</span></span>
<span class="line"><span> * 使用 Comparator 实现多种动态排序策略。</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File HumanResourcesManager.java</span></span>
<span class="line"><span> * @Desc 人力资源管理系统中的员工排序和管理。</span></span>
<span class="line"><span> * @Create 2024/4/14 12:00</span></span>
<span class="line"><span> * @ChangeList</span></span>
<span class="line"><span> * --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date             Editor          ChangeReason</span></span>
<span class="line"><span> * 2024/04/14       luoqi           Initial creation and implementation for managing employees.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class HumanResourcesManagerArrayList {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        List&lt;Employee&gt; employees = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Alice Johnson&quot;, &quot;Accounting&quot;, new GregorianCalendar(2019, Calendar.JANUARY, 5).getTime()));</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Bob Smith&quot;, &quot;Marketing&quot;, new GregorianCalendar(2021, Calendar.MARCH, 12).getTime()));</span></span>
<span class="line"><span>        employees.add(new Employee(&quot;Charlie Brown&quot;, &quot;IT&quot;, new GregorianCalendar(2020, Calendar.FEBRUARY, 20).getTime()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Comparator for name</span></span>
<span class="line"><span>        Comparator&lt;Employee&gt; byName = Comparator.comparing(Employee::getName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Comparator for department</span></span>
<span class="line"><span>        Comparator&lt;Employee&gt; byDepartment = Comparator.comparing(Employee::getDepartment);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Comparator for start date</span></span>
<span class="line"><span>        Comparator&lt;Employee&gt; byStartDate = Comparator.comparing(Employee::getStartDate);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Sort by name</span></span>
<span class="line"><span>        Collections.sort(employees, byName);</span></span>
<span class="line"><span>        System.out.println(&quot;Employees sorted by Name:&quot;);</span></span>
<span class="line"><span>        employees.forEach(System.out::println);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Sort by department</span></span>
<span class="line"><span>        Collections.sort(employees, byDepartment);</span></span>
<span class="line"><span>        System.out.println(&quot;\\nEmployees sorted by Department:&quot;);</span></span>
<span class="line"><span>        employees.forEach(System.out::println);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Sort by start date</span></span>
<span class="line"><span>        Collections.sort(employees, byStartDate);</span></span>
<span class="line"><span>        System.out.println(&quot;\\nEmployees sorted by Start Date:&quot;);</span></span>
<span class="line"><span>        employees.forEach(System.out::println);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static class Employee {</span></span>
<span class="line"><span>        private String name;</span></span>
<span class="line"><span>        private String department;</span></span>
<span class="line"><span>        private Date startDate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public Employee(String name, String department, Date startDate) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.department = department;</span></span>
<span class="line"><span>            this.startDate = startDate;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public String getName() { return name; }</span></span>
<span class="line"><span>        public String getDepartment() { return department; }</span></span>
<span class="line"><span>        public Date getStartDate() { return startDate; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public String toString() {</span></span>
<span class="line"><span>            return String.format(&quot;%s, %s Department, Start Date: %s&quot;, name, department, startDate);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="五、queue" tabindex="-1">五、Queue <a class="header-anchor" href="#五、queue" aria-label="Permalink to &quot;五、Queue&quot;">​</a></h3><p><code>Queue</code>接口在Java集合框架中代表了一个先进先出（FIFO）的队列。</p><p><code>Queue</code>继承自<code>Collection</code>接口，提供了队列操作的基本方法，用于在队列的尾部插入元素、从队列的头部检索和移除元素。它主要用于存储待处理元素的集合，特别适合于消息处理和任务调度的场景。</p><blockquote><p>主要方法</p></blockquote><ul><li><strong>添加元素</strong>： <ul><li><code>boolean add(E e)</code>：将指定的元素插入此队列的尾部。如果队列已满，抛出一个<code>IllegalStateException</code>。</li><li><code>boolean offer(E e)</code>：将指定的元素插入此队列的尾部。如果队列已满，则返回<code>false</code>。</li></ul></li><li><strong>检索元素</strong>： <ul><li><code>E element()</code>：检索但不移除此队列的头部。如果队列为空，抛出一个<code>NoSuchElementException</code>。</li><li><code>E peek()</code>：检索但不移除此队列的头部。如果队列为空，则返回<code>null</code>。</li></ul></li><li><strong>移除元素</strong>： <ul><li><code>E remove()</code>：检索并移除此队列的头部。如果队列为空，抛出一个<code>NoSuchElementException</code>。</li><li><code>E poll()</code>：检索并移除此队列的头部。如果队列为空，则返回<code>null</code>。</li></ul></li></ul><hr><p>关于 Queue 接口下的实现类：</p><ul><li><strong><code>LinkedList</code></strong>： <ul><li>实现了<code>List</code>接口和<code>Queue</code>接口，提供了队列操作的同时，也支持列表操作。作为队列使用时，它是一个双端队列，允许在队列的头部和尾部进行元素插入和移除。</li></ul></li><li><strong><code>PriorityQueue</code></strong>： <ul><li>一个基于优先级堆的无界优先级队列，元素根据其自然顺序或通过构造队列时提供的<code>Comparator</code>来决定顺序。不保证同等优先级元素的顺序。</li></ul></li><li><strong><code>ArrayDeque</code></strong>： <ul><li>既可以作为队列也可以作为栈使用的双端队列。它没有容量限制，内部使用动态数组支持容量的增长</li></ul></li><li><code>LinkedBlockingDeque</code><ul><li>提供了阻塞操作的能力，非常适合用作生产者-消费者场景</li></ul></li></ul><blockquote><p>使用场景与示例</p></blockquote><p><code>Queue</code>接口提供了队列数据结构的标准操作方法，允许按照元素的入队顺序进行处理</p><p>示例:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>queue.offer(&quot;First&quot;);</span></span>
<span class="line"><span>queue.offer(&quot;Second&quot;);</span></span>
<span class="line"><span>queue.offer(&quot;Third&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(queue.peek()); // 输出 &quot;First&quot;，队列的头部</span></span>
<span class="line"><span>System.out.println(queue.poll()); // 移除并输出 &quot;First&quot;</span></span>
<span class="line"><span>System.out.println(queue.peek()); // 输出 &quot;Second&quot;，现在队列的头部</span></span></code></pre></div><hr><h4 id="阻塞队列与双端队列" tabindex="-1">阻塞队列与双端队列 <a class="header-anchor" href="#阻塞队列与双端队列" aria-label="Permalink to &quot;阻塞队列与双端队列&quot;">​</a></h4><p>上文讲述了一下关于 Queue 接口的特点及其实现类的使用示例；</p><p>如果讲队列按照其行为和功能是能被分为不同的类别，队列主要是分为两大类：</p><ul><li>阻塞队列（Blocking Queues） <ul><li>队列满了以后再插入元素则会抛出异常，主要包括ArrayBlockQueue、PriorityBlockingQueue、LinkedBlockingQueue。</li></ul></li><li>双端队列（Deque，即Double Ended Queue） <ul><li>支持在头、尾两端插入和移除元素，主要包括：ArrayDeque、LinkedBlockingDeque、LinkedList。</li></ul></li></ul><blockquote><p>阻塞队列（Blocking Queues）</p></blockquote><p>阻塞队列主要用于生产者-消费者场景，其中队列是生产者和消费者之间共享的资源。</p><p>阻塞队列的特点是它在队列为空时，会阻塞（挂起）尝试从队列中取元素的消费者线程；而在队列满时，会阻塞尝试向队列中插入元素的生产者线程。这种队列对于多线程编程非常有用，因为它们帮助协调生产者和消费者之间的速度差异，减少了需要程序员手动实现的同步和协调工作。</p><p>实现类：</p><ul><li><strong><code>ArrayBlockingQueue</code></strong>：一个由数组支持的有界阻塞队列。</li><li><strong><code>PriorityBlockingQueue</code></strong>：一个支持优先级排序的无界阻塞队列。</li><li><strong><code>LinkedBlockingQueue</code></strong>：一个由链表结构支持的可选有界阻塞队列。</li></ul><blockquote><p>双端队列（Deque）</p></blockquote><p>双端队列是一种特殊的队列，它支持在队列的两端进行插入和移除操作。这种灵活性使得双端队列可以被用作传统的队列和栈两种数据结构。</p><p>双端队列既可以是阻塞的，也可以是非阻塞的，取决于具体的实现。</p><p>实现类：</p><ul><li><strong><code>ArrayDeque</code></strong>：一个由动态数组支持的非阻塞双端队列，不支持存储<code>null</code>元素。</li><li><strong><code>LinkedBlockingDeque</code></strong>：一个由链表结构支持的可选有界阻塞双端队列。</li><li><strong><code>LinkedList</code></strong>：实现了<code>List</code>和<code>Deque</code>接口的链表结构，支持在列表的两端进行插入和移除操作，但它不是阻塞的。</li></ul><blockquote><p>总结：</p></blockquote><p>阻塞队列的关键特性是它们在某些操作无法立即执行时（例如，队列满时插入或队列空时移除）会阻塞线程，直到操作可以执行。</p><p>双端队列提供了从两端操作队列的能力，增加了队列的使用灵活性。它们可以用作传统的FIFO队列或LIFO栈。</p><p>在选择队列类型时，应该根据应用场景的需要（如是否需要阻塞操作、是否需要从两端操作队列等）来选择最合适的队列实现。</p><h4 id="arraydeque-🚩" tabindex="-1">ArrayDeque 🚩 <a class="header-anchor" href="#arraydeque-🚩" aria-label="Permalink to &quot;ArrayDeque  🚩&quot;">​</a></h4><p>前文我们已经讲述到：<code>ArrayDeque</code> 既可以作为队列也可以作为栈使用的双端队列。它没有容量限制，内部使用动态数组支持容量的增长。</p><p>因此在实际使用的时候，也一般会使用 ArrayDeque 来替代 Stack 栈（Stack 继承 Vector，性能不太好，不建议使用）；</p><p>下面是基本介绍：</p><ul><li>1、<code>ArrayDeque</code>是Java集合框架中的一个类，全名为<code>java.util.ArrayDeque</code>。它实现了<code>Deque</code>接口，提供了双端队列（Double-Ended Queue）的功能。</li><li>2、与<code>LinkedList</code>相比，<code>ArrayDeque</code>基于动态数组实现，不支持存储<code>null</code>元素。</li><li>3、<code>ArrayDeque</code>可以作为栈（后进先出，LIFO）或队列（先进先出，FIFO）使用，具有较高的性能和较低的内存开销。</li></ul><blockquote><p>特点：</p></blockquote><ul><li>1、底层是动态数组，可自动扩容</li><li>2、ArrayDeque 不允许插入 null 元素</li><li>3、双端操作，支持在尾部和头部进行插入和删除操作，既可以作为队列使用，也可以作为栈使用</li><li>4、线程不安全 <ul><li>高并发情况下建议使用 <strong><code>ConcurrentLinkedDeque</code></strong> 或者 <code>Collections.synchronizedList(new ArrayList&lt;...&gt;())</code> 以及 <strong><code>BlockingDeque</code></strong> 等。</li></ul></li></ul><hr><blockquote><p>常用方法：</p></blockquote><p>作为<code>Deque</code>的实现，<code>ArrayDeque</code>提供了一系列方法，包括：</p><ul><li><strong>添加元素</strong>： <ul><li><code>addFirst(E e)</code>和<code>offerFirst(E e)</code>：在队列前端添加元素。</li><li><code>addLast(E e)</code>和<code>offerLast(E e)</code>：在队列尾端添加元素。</li></ul></li><li><strong>移除元素</strong>： <ul><li><code>removeFirst()</code>和<code>pollFirst()</code>：移除队列前端的元素。</li><li><code>removeLast()</code>和<code>pollLast()</code>：移除队列尾端的元素。</li></ul></li><li><strong>检查元素</strong>： <ul><li><code>getFirst()</code>和<code>peekFirst()</code>：检查队列前端的元素。</li><li><code>getLast()</code>和<code>peekLast()</code>：检查队列尾端的元素。</li></ul></li><li><strong>栈操作</strong>：（后进先出） <ul><li><code>push(E e)</code>：将元素压入栈顶（队列前端）。</li><li><code>pop()</code>：移除并返回栈顶（队列前端）的元素</li><li><strong>peek()</strong>：返回栈顶元素但不移除。</li></ul></li></ul><p><code>ArrayDeque</code>由于其高效的性能和灵活的操作，适用于以下场景：</p><ul><li><strong>作为栈使用</strong>：利用<code>push</code>、<code>pop</code>方法实现后进先出的数据结构。</li><li><strong>作为队列使用</strong>：利用<code>offer</code>、<code>poll</code>方法实现先进先出的数据结构。</li><li><strong>双端队列</strong>：需要在两端添加或删除元素的场景</li></ul><blockquote><p>示例代码</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 元素入栈</span></span>
<span class="line"><span>stack.push(1);</span></span>
<span class="line"><span>stack.push(2);</span></span>
<span class="line"><span>stack.push(3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 访问栈顶元素</span></span>
<span class="line"><span>System.out.println(&quot;栈顶元素: &quot; + stack.peek()); // 输出 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 元素出栈</span></span>
<span class="line"><span>while (!stack.isEmpty()) {</span></span>
<span class="line"><span>    System.out.println(stack.pop());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出：</span></span>
<span class="line"><span>// 3</span></span>
<span class="line"><span>// 2</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//作为队列使用演示</span></span>
<span class="line"><span>Deque&lt;String&gt; deque = new ArrayDeque&lt;&gt;();</span></span>
<span class="line"><span>deque.offerLast(&quot;A&quot;); // 队列尾部添加</span></span>
<span class="line"><span>deque.offerFirst(&quot;B&quot;); // 队列头部添加</span></span>
<span class="line"><span>System.out.println(deque.pollFirst()); // 输出B，队列头部移除</span></span>
<span class="line"><span>System.out.println(deque.pollLast()); // 输出A，队列尾部移除</span></span></code></pre></div><hr><h4 id="blockingdeque-🐉" tabindex="-1">BlockingDeque 🐉 <a class="header-anchor" href="#blockingdeque-🐉" aria-label="Permalink to &quot;BlockingDeque  🐉&quot;">​</a></h4><p>在前文讲述到，ArrayDeque 并不是线程安全的，在高并发的情况下，我们也可以考虑使用 BlockingDeque 的实现：比如<code>LinkedBlockingDeque</code>，它提供了阻塞操作的能力，非常适合用作生产者-消费者场景。</p><p>基本介绍：</p><ul><li>1、<code>BlockingDeque</code>是Java并发包（<code>java.util.concurrent</code>）提供的一个接口，它扩展了<code>BlockingQueue</code>接口和<code>Deque</code>接口。</li><li>2、<code>BlockingDeque</code>是一个线程安全的双端队列，支持阻塞的插入和移除操作。它主要用于生产者-消费者场景，其中元素可以从队列的两端被插入或移除，同时提供了阻塞操作以便在队列满或空时进行等待，直到队列变为可用状态。</li></ul><p>特点：</p><ul><li>1、线程安全 <ul><li><code>BlockingDeque</code>内部通过锁（通常是重入锁）来保证队列的线程安全，使得在多线程环境中插入、移除和访问操作都能够安全执行。</li></ul></li><li>2、阻塞操作 <ul><li>提供了阻塞的插入和移除方法。当队列满时，队列会阻塞插入操作的线程；当队列空时，队列会阻塞移除操作的线程，直到队列变为非满或非空状态。</li></ul></li><li>3、双端操作 <ul><li>支持在队列的头部和尾部进行插入和移除操作，提供了灵活的数据处理能力。</li></ul></li></ul><blockquote><p>主要方法</p></blockquote><p><code>BlockingDeque</code>接口定义了多种方法，包括但不限于：</p><ul><li><strong>插入方法</strong>： <ul><li><code>addFirst(E e)</code>、<code>addLast(E e)</code>： <ul><li>在队列的头部或尾部添加元素，如果队列满则抛出<code>IllegalStateException</code>。</li></ul></li><li><code>offerFirst(E e, long timeout, TimeUnit unit)</code>、<code>offerLast(E e, long timeout, TimeUnit unit)</code>： <ul><li>在队列的头部或尾部添加元素，如果队列满则等待指定的时间，超时返回<code>false</code>。</li></ul></li></ul></li><li><strong>移除方法</strong>： <ul><li><code>removeFirst()</code>、<code>removeLast()</code>： <ul><li>移除并返回队列头部或尾部的元素，如果队列为空则抛出<code>NoSuchElementException</code>。</li></ul></li><li><code>pollFirst(long timeout, TimeUnit unit)</code>、<code>pollLast(long timeout, TimeUnit unit)</code>： <ul><li>移除并返回队列头部或尾部的元素，如果队列为空则等待指定的时间，超时返回<code>null</code>。</li></ul></li></ul></li><li><strong>检查方法</strong>： <ul><li><code>getFirst()</code>、<code>getLast()</code>： <ul><li>检查但不移除队列头部或尾部的元素，如果队列为空则抛出<code>NoSuchElementException</code>。</li></ul></li><li><code>peekFirst()</code>、<code>peekLast()</code>： <ul><li>检查但不移除队列头部或尾部的元素，如果队列为空则返回<code>null</code>。</li></ul></li></ul></li></ul><blockquote><p>实现类</p></blockquote><p>Java并发包提供了<code>BlockingDeque</code>接口的具体实现类，例如：</p><ul><li><strong><code>LinkedBlockingDeque</code></strong>： <ul><li>一个基于链表结构的阻塞双端队列。它可选地有界，如果未指定容量，那么它等同于无界，但内存是有限的，因此实际上它还是有界的。</li><li><code>LinkedBlockingDeque</code>内部使用一个链表结构来存储元素。这个链表是双向链表，允许在队列的两端进行插入和移除操作。链表的每个节点包含了元素本身以及前后节点的引用，这使得在两端的操作都能高效进行</li></ul></li></ul><p>场景：<code>BlockingDeque</code>非常适合用于生产者-消费者模式，其中生产者和消费者可能在处理速度上有差异。通过阻塞操作，可以在生产者快于消费者时自动进行速度调节，避免资源消耗和溢出，或在消费者快于生产者时等待新元素的产生。</p><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BlockingDeque&lt;String&gt; deque = new LinkedBlockingDeque&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生产者线程</span></span>
<span class="line"><span>new Thread(() -&gt; {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        deque.putFirst(&quot;1&quot;);</span></span>
<span class="line"><span>        deque.putLast(&quot;2&quot;);</span></span>
<span class="line"><span>    } catch (InterruptedException e) {</span></span>
<span class="line"><span>        e.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 消费者线程</span></span>
<span class="line"><span>new Thread(() -&gt; {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        System.out.println(deque.takeFirst()); // 等待并获取队列头部元素</span></span>
<span class="line"><span>        System.out.println(deque.takeLast()); // 等待并获取队列尾部元素</span></span>
<span class="line"><span>    } catch (InterruptedException e) {</span></span>
<span class="line"><span>        e.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).start();</span></span></code></pre></div><hr><h4 id="priorityqueue" tabindex="-1">PriorityQueue <a class="header-anchor" href="#priorityqueue" aria-label="Permalink to &quot;PriorityQueue&quot;">​</a></h4><p><code>PriorityQueue</code> 是 <code>Queue</code>接口 下的一个实现类，是实现优先队列的一个理想选择；</p><p>介绍：</p><ul><li>1、<code>PriorityQueue</code> 按照元素的自然排序或者构造队列时指定的<code>Comparator</code>进行排序，确保队列头部始终是最小（或根据<code>Comparator</code>定义的其他顺序）的元素</li><li>2、<code>PriorityQueue</code>是实现优先队列的理想选择，优先队列允许高优先级的元素先于低优先级的元素被处理</li><li>3、<code>PriorityQueue</code>提供了一种方便的方式来处理需要根据优先级排序的元素集合，它通过堆数据结构实现，保证了高效的元素插入和移除操作。</li></ul><p>特点：</p><ul><li>1、元素排序</li><li>2、线程不安全</li><li>3、不允许插入 null 值</li><li>4、快速访问最小元素 <ul><li>访问最小元素（或根据<code>Comparator</code>定义的顺序中的&quot;最小&quot;元素）的时间复杂度是<code>O(1)</code>，但移除该元素或插入任意新元素的时间复杂度通常是<code>O(log n)</code>。</li></ul></li><li>5、底层实现是<strong>二叉堆</strong>（Binary Heap）</li></ul><hr><p>场景：</p><ul><li><strong>任务调度</strong>：在需要根据优先级处理任务时，如操作系统中的任务调度。</li><li><strong>数据流处理</strong>：在数据流中实时地找到最小（或最大）元素，如求一系列数据中的中位数或其他统计值</li></ul><p>注意事项：</p><ul><li>使用<code>PriorityQueue</code>时，确保其元素实现了<code>Comparable</code>接口或者在构造<code>PriorityQueue</code>时提供了一个<code>Comparator</code>，否则会在运行时抛出<code>ClassCastException</code>。</li><li><code>PriorityQueue</code>的迭代器不保证以排序的顺序遍历元素。如果需要有序遍历，可以考虑先将<code>PriorityQueue</code>转换为数组或列表，并对其排序。</li><li>虽然<code>PriorityQueue</code>提供了快速访问最小元素的能力，但它并不支持随机访问，即不能直接通过索引来访问元素。</li></ul><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();</span></span>
<span class="line"><span>pq.add(10);</span></span>
<span class="line"><span>pq.add(20);</span></span>
<span class="line"><span>pq.add(15);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 访问队列头部元素（最小元素），输出：10</span></span>
<span class="line"><span>System.out.println(pq.peek());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 移除并返回队列头部元素，输出：10</span></span>
<span class="line"><span>System.out.println(pq.poll());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 此时队列头部元素变为15</span></span>
<span class="line"><span>System.out.println(pq.peek());</span></span></code></pre></div><hr><h3 id="六、map" tabindex="-1">六、Map <a class="header-anchor" href="#六、map" aria-label="Permalink to &quot;六、Map&quot;">​</a></h3><p>Map 接口是我们使用频率非常高的一个集合，它与单列集合不同的是，它是基于键值对的一个结构；</p><p>特点：</p><ul><li>1、由一系列键值对组成的集合，提供了key到Value的映射。同时它没有继承Collection；</li><li>2、它保证了key与value之间的一一对应关系，一个key对应一个value；通过键可以快速查找、更新或删除对应的值</li><li>3、键不能重复，value值可以相同。</li></ul><blockquote><p>主要方法</p></blockquote><p><code>Map</code>接口提供了多种操作映射的方法，包括：</p><ul><li><strong><code>put(K key, V value)</code></strong>：将指定的值与此映射中的指定键关联（可选操作）。</li><li><strong><code>get(Object key)</code></strong>：返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回<code>null</code>。</li><li><strong><code>remove(Object key)</code></strong>：如果存在该键的映射关系，则将其从映射中移除（可选操作）。</li><li><strong><code>containsKey(Object key)</code></strong>：如果此映射包含指定键的映射关系，则返回<code>true</code>。</li><li><strong><code>containsValue(Object value)</code></strong>：如果此映射将一个或多个键映射到指定值，则返回<code>true</code>。</li><li><strong><code>keySet()</code></strong>：返回此映射中包含的键的<code>Set</code>视图。</li><li><strong><code>values()</code></strong>：返回此映射中包含的值的<code>Collection</code>视图。</li><li><strong><code>entrySet()</code></strong>：返回此映射中包含的映射关系的<code>Set</code>视图。</li></ul><blockquote><p>主要实现类</p></blockquote><ul><li><strong><code>HashMap</code></strong>：基于哈希表的<code>Map</code>接口的非同步实现，允许使用<code>null</code>作为键和值，不保证映射的顺序。</li><li><strong><code>LinkedHashMap</code></strong>：<code>HashMap</code>的一个子类，保持了映射的插入顺序或最后访问顺序。</li><li><strong><code>TreeMap</code></strong>：基于红黑树的<code>NavigableMap</code>实现。映射按照键的自然顺序（使用<code>Comparable</code>）或构造时提供的<code>Comparator</code>进行排序。</li><li><strong><code>Hashtable</code></strong>：是一种旧的、同步的键值对集合，它与<code>HashMap</code>类似，但不允许<code>null</code>键和<code>null</code>值。由于其同步特性，通常建议在需要线程安全的场景中使用<code>ConcurrentHashMap</code>代替<code>Hashtable</code>。</li></ul><blockquote><p>相关集合</p></blockquote><table tabindex="0"><thead><tr><th>集合</th><th>是否线程安全</th><th>底层实现</th><th>是否支持null key</th><th>是否支持null value</th><th>默认初始容量</th><th>扩容机制</th></tr></thead><tbody><tr><td>HashMap (JDK1.8+)</td><td>否</td><td>数组 + 链表/红黑树</td><td>是 (限1个)</td><td>是</td><td>16</td><td>当容量&gt;75%时，容量翻倍</td></tr><tr><td>Hashtable</td><td>是</td><td>数组 + 链表</td><td>否</td><td>否</td><td>11</td><td>容量翻倍 + 1</td></tr><tr><td>TreeMap</td><td>否</td><td>红黑树</td><td>否</td><td>是</td><td>-</td><td>-</td></tr><tr><td>LinkedHashMap</td><td>否</td><td>数组 + 链表/红黑树 + 双向链表</td><td>是 (限1个)</td><td>是</td><td>16</td><td>当容量&gt;75%时，容量翻倍</td></tr><tr><td>WeakHashMap</td><td>否</td><td>数组 + 链表</td><td>是 (限1个)</td><td>是</td><td>16</td><td>当容量&gt;75%时，容量翻倍</td></tr><tr><td>IdentityHashMap</td><td>否</td><td>数组</td><td>是 (限1个)</td><td>是</td><td>32</td><td>容量翻倍</td></tr><tr><td>EnumMap</td><td>否</td><td>数组</td><td>否</td><td>是</td><td>-</td><td>根据枚举键的数量确定</td></tr><tr><td>ConcurrentHashMap (JDK1.7)</td><td>是</td><td>分段锁</td><td>否</td><td>是</td><td>16</td><td>当段的某个容量&gt;75%时，该段容量翻倍</td></tr><tr><td>ConcurrentHashMap (JDK1.8+)</td><td>是</td><td>数组 + 链表/红黑树</td><td>否</td><td>是</td><td>16</td><td>当容量&gt;75%时，容量翻倍</td></tr></tbody></table><h4 id="hashmap-🚩" tabindex="-1">HashMap 🚩 <a class="header-anchor" href="#hashmap-🚩" aria-label="Permalink to &quot;HashMap   🚩&quot;">​</a></h4><p>HashMap 的 Map 接口下非常核心的一个类，它主要用来存放键值对，基于哈希表实现</p><p>它非常适用需要快速访问、插入和删除键值对的场景，特别是当不关心元素顺序时。</p><p>由于它不是线程安全的，在多线程环境下需要外部同步或使用<code>ConcurrentHashMap</code>。</p><blockquote><p>基本介绍</p></blockquote><ul><li>1、<code>HashMap</code>是Java集合框架中非常核心的一个类，它实现了<code>Map</code>接口，提供了键值存储的映射功能，其中键是唯一的。</li><li>2、<code>HashMap</code>允许使用<code>null</code>值和<code>null</code>键，且不保证映射的顺序（它不保证顺序会随着时间的推移保持不变）。</li></ul><p>特点：</p><ul><li>【键唯一，不保证顺序，允许空值】</li><li>2、<strong>默认初始容量</strong>：<code>HashMap</code>的默认初始容量是16。</li><li>3、<strong>加载因子和扩容</strong>： <ul><li>加载因子默认为0.75，它是容量和阈值的比值。</li><li>当<code>HashMap</code>中的条目数超过容量与加载因子的乘积时，<code>HashMap</code>会进行扩容，即创建一个新的数组来存储元素，并重新计算每个元素的位置。<strong>新数组的容量是原数组的两倍</strong>。</li></ul></li></ul><blockquote><p>时间复杂度</p></blockquote><p><strong>插入和查找</strong>：在理想情况下（哈希函数良好且键均匀分布），<code>HashMap</code>的<code>get</code>和<code>put</code>操作的时间复杂度可以是<code>O(1)</code>。但在最坏的情况下（所有键都映射到同一个桶），时间复杂度会退化到<code>O(n)</code>。通过JDK1.8的优化（引入红黑树），即使在哈希冲突较多的情况下，性能也得到了显著提升。</p><blockquote><p>底层实现</p></blockquote><ul><li>1、在JDK1.8之前 <ul><li><code>HashMap</code>主要通过数组+链表的方式实现。</li><li>数组被用作主要的数据结构来存储元素，而链表则用于解决哈希冲突（两个或多个键的哈希值相同）。</li><li>当多个元素被映射到同一个桶（数组的同一个位置）时，这些元素以链表的形式存储。</li></ul></li><li>2、从JDK1.8开始， <ul><li><code>HashMap</code>的实现引入了红黑树。当链表的长度超过一定阈值（默认为8）时，链表将转换成红黑树，以减少搜索时间。</li><li>相反，当红黑树中的节点数少于阈值时（一旦红黑树的实际节点数降到少于6个时），红黑树会转换回链表。这种结构的引入显著提高了<code>HashMap</code>在高哈希冲突情况下的性能。</li><li>如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树【红黑树的维护成本（比如保持平衡）可能导致性能下降，因此当链表的长度超过一定阈值，也会先要求数组长度超过 64 再考虑转换红黑树】</li></ul></li></ul><h5 id="源码分析-1" tabindex="-1">源码分析 <a class="header-anchor" href="#源码分析-1" aria-label="Permalink to &quot;源码分析&quot;">​</a></h5><h6 id="常见属性" tabindex="-1">常见属性 <a class="header-anchor" href="#常见属性" aria-label="Permalink to &quot;常见属性&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>static final int DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4; // aka 16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static final float DEFAULT_LOAD_FACTOR = 0.75f;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transient Node&lt;K,V&gt;[] table;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transient int size;</span></span></code></pre></div><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302092648.png" alt="image.png"></p><h6 id="添加数据" tabindex="-1">添加数据 <a class="header-anchor" href="#添加数据" aria-label="Permalink to &quot;添加数据&quot;">​</a></h6><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302092753.png" alt="image.png"></p><ul><li>HashMap 是惰性加载，在创建对象时并没有初始化数组</li><li>在无参的构造函数中，设置了默认的加载因子是 0.75</li></ul><p>添加数据流程图</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302094809.png" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public V put(K key, V value) {</span></span>
<span class="line"><span>    return putVal(hash(key), key, value, false, true);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>final V putVal(int hash, K key, V value, boolean onlyIfAbsent,  </span></span>
<span class="line"><span>               boolean evict) {  </span></span>
<span class="line"><span>    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i;  </span></span>
<span class="line"><span>    //判断数组是否未初始化</span></span>
<span class="line"><span>    if ((tab = table) == null || (n = tab.length) == 0)  </span></span>
<span class="line"><span>	    //如果未初始化，调用 resize 方法，进行初始化</span></span>
<span class="line"><span>        n = (tab = resize()).length;  </span></span>
<span class="line"><span>	//通过 &amp; 运算求出该数据(key)的数组下标并判断该下标位置是否有数据</span></span>
<span class="line"><span>    if ((p = tab[i = (n - 1) &amp; hash]) == null)  </span></span>
<span class="line"><span>	    //如果没有，直接将数据放在该下标位置</span></span>
<span class="line"><span>        tab[i] = newNode(hash, key, value, null);  </span></span>
<span class="line"><span>	//该数组下标有数据的情况</span></span>
<span class="line"><span>    else {  </span></span>
<span class="line"><span>        Node&lt;K,V&gt; e; K k;  </span></span>
<span class="line"><span>        //判断该位置的 key 和新来的数据是否一样</span></span>
<span class="line"><span>        if (p.hash == hash &amp;&amp;  </span></span>
<span class="line"><span>            ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))  </span></span>
<span class="line"><span>            //如果一样，证明为修改操作，该节点的数据赋值给 e，后边会用到</span></span>
<span class="line"><span>            e = p;  </span></span>
<span class="line"><span>		//判断是不是红黑树</span></span>
<span class="line"><span>        else if (p instanceof TreeNode)  </span></span>
<span class="line"><span>	        //如果是红黑树的话，进行红黑树的操作</span></span>
<span class="line"><span>            e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);  </span></span>
<span class="line"><span>		//新数据和当前数组既不相同，也不是红黑树节点，证明是链表</span></span>
<span class="line"><span>        else {  </span></span>
<span class="line"><span>	        //遍历链表</span></span>
<span class="line"><span>            for (int binCount = 0; ; ++binCount) {  </span></span>
<span class="line"><span>	            //判断 next 节点，如果为空的话，证明遍历到链表尾部了</span></span>
<span class="line"><span>                if ((e = p.next) == null) {  </span></span>
<span class="line"><span>	                //将新增放入到链表尾部</span></span>
<span class="line"><span>                    p.next = newNode(hash, key, value, null);  </span></span>
<span class="line"><span>                    //因为新插入了一条数据，判断链表长度是不是大于等于8</span></span>
<span class="line"><span>                    if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st  </span></span>
<span class="line"><span>	                    //如果是，进行转换红黑树操作</span></span>
<span class="line"><span>                        treeifyBin(tab, hash);  </span></span>
<span class="line"><span>                    break;  </span></span>
<span class="line"><span>                }  </span></span>
<span class="line"><span>                //判断链表当中有数据相同的值，如果一样，证明为修改</span></span>
<span class="line"><span>                if (e.hash == hash &amp;&amp;  </span></span>
<span class="line"><span>                    ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))  </span></span>
<span class="line"><span>                    break;  </span></span>
<span class="line"><span>				//把下一个节点赋值为当前节点</span></span>
<span class="line"><span>                p = e;  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        //判断 e 是否为空(e 值为修改操作存放原数据的变量)</span></span>
<span class="line"><span>        if (e != null) { // existing mapping for key  </span></span>
<span class="line"><span>	        //不为空的话证明是修改操作，取出老值</span></span>
<span class="line"><span>            V oldValue = e.value;  </span></span>
<span class="line"><span>            //onlyIfAbsent 传过来的是 false（因此这里一定会执行）</span></span>
<span class="line"><span>            if (!onlyIfAbsent || oldValue == null)  </span></span>
<span class="line"><span>	            //将新值赋值给当前节点</span></span>
<span class="line"><span>                e.value = value;  </span></span>
<span class="line"><span>            afterNodeAccess(e);  </span></span>
<span class="line"><span>            //返回老值</span></span>
<span class="line"><span>            return oldValue;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    //计数器，计算当前节点的修改次数 </span></span>
<span class="line"><span>    ++modCount;  </span></span>
<span class="line"><span>    if (++size &gt; threshold)  </span></span>
<span class="line"><span>	    //进行扩容操作</span></span>
<span class="line"><span>        resize();  </span></span>
<span class="line"><span>	//空方法</span></span>
<span class="line"><span>    afterNodeInsertion(evict);  </span></span>
<span class="line"><span>    //添加操作时，返回空值</span></span>
<span class="line"><span>    return null;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>总结：</p><p>HashMapl的put方法的具体流程</p><ul><li>1.判断键值对数组table是否为空或为null,否则执行resize0进行扩容（初始化）</li><li>2.根据键值key计算hash值得到数组索引</li><li>3.判断table[i]== null,条件成立，直接新建节点添加</li><li>4.如果table[0]== null,不成立 <ul><li>4.1 判断table[i] 的首个元素是否和 key一样，如果相同直接覆盖value</li><li>4.2 判断 table[i] 是否为 treeNode,即 table[i] 是否是红黑树，如果是红黑树，则直接在树中插入键值对</li><li>4.3 遍历 table[i] ，链表的尾部插入数据，然后判断链表长度是否大于8，大于8的话把链表转换为红黑树，在红黑树中执行插入操作，遍历过程中若发现 key 已经存在直接覆盖value</li></ul></li><li>5.插入成功后，判断实际存在的键值对数量size是否超多了最大容量threshold(数组长度 * 0.75)，如果超过，进行扩容。</li></ul><h6 id="扩容机制" tabindex="-1">扩容机制 <a class="header-anchor" href="#扩容机制" aria-label="Permalink to &quot;扩容机制&quot;">​</a></h6><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302100009.png" alt="image.png"></p><p>后续优化一下，有相关源码的一个解析： <a href="https://www.bilibili.com/video/BV1yT411H7YK/?p=82&amp;spm_id_from=pageDriver&amp;vd_source=6a019ecccfe7d8f62b9a3fe99c723bd0" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1yT411H7YK/?p=82&amp;spm_id_from=pageDriver&amp;vd_source=6a019ecccfe7d8f62b9a3fe99c723bd0</a></p><p>有部分资料还提供 hashmap 相关的一个演示过程，跳过</p><blockquote><p>总结</p></blockquote><p>讲一讲 HashMap 的扩容机制</p><ul><li>1、在添加元素或初始化的时候需要调用resize方法进行扩容，第一次添加数据初始化数组长度为16，以后每次每次扩容都是达到了扩容阈值（数组长度 * 0.75）</li><li>2、每次扩容的时候，都是扩容之前容量的2倍</li><li>3、扩容之后，会新创建一个数组，需要把老数组中的数据挪动到新的数组中 <ul><li>没有hash冲突的节点，则直接使用e.hash&amp;(newCap-1)计算新数组的索引位置</li><li>如果是红黑树，走红黑树的添加</li><li>如果是链表，则需要遍历链表，可能需要拆分链表，判断(e.hash&amp;oldCap)是否为0，该元素的位置要么停留在原始位置，要么移动到原始位置+增加的数组大小这个位置上</li></ul></li></ul><h5 id="常见面试题-🚩" tabindex="-1">常见面试题 🚩 <a class="header-anchor" href="#常见面试题-🚩" aria-label="Permalink to &quot;常见面试题  🚩&quot;">​</a></h5><blockquote><p>说一下 HashMap 的实现原理。</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301225519.png" alt="image.png"></p><blockquote><p>追问：HashMap 的 JDK 1.7 和 JDK 1.8 有什么区别？</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301225711.png" alt="image.png"></p><p>总结上面两题：</p><p>1.说一下HashMap的实现原理？</p><ul><li>1、底层使用hash表数据结构，即数组+（链表|红黑树）</li><li>2、添加数据时，计算 key 的值确定元素在数组中的下标 <ul><li>key相同则替换</li><li>不同则存入链表或红黑树中</li></ul></li><li>获取数据通过key的hash计算数组下标获取元素</li></ul><p>2.HashMap的jdk1.7和jdk1.8有什么区别</p><ul><li>JDK1.8之前采用的拉链法，数组+链表</li><li>JDK1.8之后采用数组+链表+红黑树，链表长度大于8且数组长度大于64则会从链表转化为红黑树</li></ul><blockquote><p>HashMapl的put方法的具体流程</p></blockquote><ul><li>1.判断键值对数组table是否为空或为null,否则执行resize0进行扩容（初始化）</li><li>2.根据键值key计算hash值得到数组索引</li><li>3.判断table[i]== null,条件成立，直接新建节点添加</li><li>4.如果table[0]== null,不成立 <ul><li>4.1 判断table[i] 的首个元素是否和 key一样，如果相同直接覆盖value</li><li>4.2 判断 table[i] 是否为 treeNode,即 table[i] 是否是红黑树，如果是红黑树，则直接在树中插入键值对</li><li>4.3 遍历 table[i] ，链表的尾部插入数据，然后判断链表长度是否大于8，大于8的话把链表转换为红黑树，在红黑树中执行插入操作，遍历过程中若发现 key 已经存在直接覆盖value</li></ul></li><li>5.插入成功后，判断实际存在的键值对数量size是否超多了最大容量threshold(数组长度 * 0.75)，如果超过，进行扩容。</li></ul><blockquote><p>讲一讲 HashMap 的扩容机制</p></blockquote><ul><li>1、在添加元素或初始化的时候需要调用resize方法进行扩容，第一次添加数据初始化数组长度为16，以后每次每次扩容都是达到了扩容阈值（数组长度 * 0.75）</li><li>2、每次扩容的时候，都是扩容之前容量的2倍</li><li>3、扩容之后，会新创建一个数组，需要把老数组中的数据挪动到新的数组中 <ul><li>没有hash冲突的节点，则直接使用e.hash&amp;(newCap-1)计算新数组的索引位置</li><li>如果是红黑树，走红黑树的添加</li><li>如果是链表，则需要遍历链表，可能需要拆分链表，判断(e.hash&amp;oldCap)是否为0，该元素的位置要么停留在原始位置，要么移动到原始位置+增加的数组大小这个位置上</li></ul></li></ul><blockquote><p>讲一下 HashMap 中的寻址算法</p></blockquote><ul><li>1、计算对象的hashCode()</li><li>2、再进行调用 hash()方法 进行二次哈希，hashcode值右移16位再异或运算，让哈希分布更为均匀</li><li>3、最后(capacity-1)&amp;hash得到索引</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240302101024.png" alt="image.png"></p><blockquote><p>为何 HashMap 的数组长度一定是 2 的次幂？</p></blockquote><ul><li>计算索引时效率更高：如果是2的次幂可以使用位与运算代替取模</li><li>扩容时重新计算索引效率更高：hash&amp;QldCap == 0 的元素留在原来位置，否则新位置=旧位置+oldCap</li></ul><p>这里待确认一下 to be contined...</p><blockquote><p>HashMap 在1.7 情况下的多线程死循环问题</p></blockquote><p>后面再看了 to be contined....</p><hr><h4 id="concurrenthashmap-🚩" tabindex="-1">ConcurrentHashMap 🚩 <a class="header-anchor" href="#concurrenthashmap-🚩" aria-label="Permalink to &quot;ConcurrentHashMap  🚩&quot;">​</a></h4><p>高并发情况键值对集合一般会考虑使用 ConcurrentHashMap；</p><blockquote><p>基本介绍</p></blockquote><ul><li>1、<code>ConcurrentHashMap</code>是Java中支持高并发、线程安全的哈希表实现，它是在<code>java.util.concurrent</code>包中提供的。</li><li>2、在并发情况下提供了更高的读写性能 <ul><li>与<code>Hashtable</code>和同步的<code>HashMap</code>（通过<code>Collections.synchronizedMap</code>方法包装得到）相比，<code>ConcurrentHashMap</code>在并发环境下提供了更高的读写性能</li></ul></li></ul><blockquote><p>基本特点</p></blockquote><ul><li>1、线程安全： <code>ConcurrentHashMap</code>内部采用特定的同步策略来保证多线程环境下的线程安全，而不是简单地对所有方法进行同步处理。</li><li>2、高并发性能： 通过减少锁的竞争，<code>ConcurrentHashMap</code>允许多个线程同时读写不同段的数据，从而提高并发性能。</li><li>3、不允许null键和null值 <ul><li>与<code>HashMap</code>不同，<code>ConcurrentHashMap</code>不允许使用null键或null值，这是为了避免在并发环境下的歧义和错误</li></ul></li></ul><p><strong>底层实现</strong></p><blockquote><p>JDK 1.7</p></blockquote><p>在JDK 1.7及之前的版本中，<code>ConcurrentHashMap</code>采用分段锁机制：</p><ul><li><strong>分段锁（Segmentation）</strong>：整个<code>ConcurrentHashMap</code>被分为若干段（Segment），每一段是一个独立的<code>HashMap</code>，并且拥有自己的锁。当线程访问某一段的数据时，只需要获取这一段的锁，而对其他段的数据的读写操作可以并发进行，从而实现更高的并发度。</li><li><strong>锁粒度</strong>：与对整个数据结构加锁相比，分段锁大大减小了锁的粒度，提高了并发访问时的性能，但同时也增加了内存开销。</li></ul><blockquote><p>JDK 1.8</p></blockquote><p>在JDK 1.8中，<code>ConcurrentHashMap</code>的实现被彻底重写，以实现更高的并发性能：</p><ul><li><strong>CAS操作和synchronized</strong>：JDK 1.8中的<code>ConcurrentHashMap</code>使用了一种不同的同步策略，它放弃了分段锁，转而使用了更细粒度的同步机制。通过使用CAS（Compare-And-Swap）操作来支持无锁的更新，对于需要加锁的场景，则使用内部锁（synchronized）来保证线程安全。</li><li><strong>节点锁</strong>：在结构变化（如节点添加或删除）时，<code>ConcurrentHashMap</code>通过对节点对象加锁来实现线程安全的更新。</li><li><strong>树化</strong>：和<code>HashMap</code>类似，当链表过长时，<code>ConcurrentHashMap</code>会将链表转换为红黑树，以提高搜索效率。</li></ul><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//\`ConcurrentHashMap\`通过高效的并发控制机制，在保证线程安全的同时，提供了高并发性能，是Java并发编程中不可或缺的数据结构。</span></span>
<span class="line"><span>//展示如何创建一个\`ConcurrentHashMap\`，向其中添加一些键值对，以及如何安全地进行读写操作</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentHashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ConcurrentHashMapExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建一个ConcurrentHashMap实例</span></span>
<span class="line"><span>        ConcurrentHashMap&lt;String, Integer&gt; map = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 向ConcurrentHashMap中添加一些键值对</span></span>
<span class="line"><span>        map.put(&quot;one&quot;, 1);</span></span>
<span class="line"><span>        map.put(&quot;two&quot;, 2);</span></span>
<span class="line"><span>        map.put(&quot;three&quot;, 3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用lambda表达式来计算键的值（如果键不存在，则初始化；否则，增加其值）</span></span>
<span class="line"><span>        map.compute(&quot;one&quot;, (key, value) -&gt; (value == null) ? 1 : value + 1);</span></span>
<span class="line"><span>        map.compute(&quot;four&quot;, (key, value) -&gt; (value == null) ? 1 : value + 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 遍历并打印ConcurrentHashMap中的所有键值对</span></span>
<span class="line"><span>        map.forEach((key, value) -&gt; System.out.println(key + &quot; =&gt; &quot; + value));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取并打印一个特定的值</span></span>
<span class="line"><span>        Integer value = map.get(&quot;two&quot;);</span></span>
<span class="line"><span>        System.out.println(&quot;Value for &#39;two&#39;: &quot; + value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用并行操作来转换ConcurrentHashMap中的所有值</span></span>
<span class="line"><span>        map.replaceAll((key, oldValue) -&gt; oldValue * 10);</span></span>
<span class="line"><span>        System.out.println(&quot;After replaceAll operation:&quot;);</span></span>
<span class="line"><span>        map.forEach((key, newValue) -&gt; System.out.println(key + &quot; =&gt; &quot; + newValue));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h4 id="linkedhashmap" tabindex="-1">LinkedHashMap <a class="header-anchor" href="#linkedhashmap" aria-label="Permalink to &quot;LinkedHashMap&quot;">​</a></h4><p><code>LinkedHashMap</code>是Java集合框架中的一部分，它是<code>HashMap</code>的一个子类，底层基于<code>HashMap</code>实现，但同时使用了一个双向链表来维护元素的插入顺序或访问顺序。</p><blockquote><p>基本介绍与特点</p></blockquote><ul><li>1、基于哈希表实现，用于存储键值对（<code>LinkedHashMap</code>继承自<code>HashMap</code>）；支持快速的查找、插入和删除操作。</li><li>2、<code>LinkedHashMap</code>内部维护了一个双向链表来记录所有的键值对。 <ul><li>双向链表中的每个节点包含了键、值、指向前一个节点的引用和指向后一个节点的引用。</li></ul></li><li>3、默认情况下，<code>LinkedHashMap</code>按照元素的插入顺序保存这些元素。 <ul><li>如果在构造函数中设置了<code>accessOrder</code>为<code>true</code>，则会按照访问顺序（最近最少使用顺序）来保存元素。</li></ul></li><li>4、由于使用了双向链表，<code>LinkedHashMap</code>在维护插入顺序方面需要额外的内存。 <ul><li>查找元素的性能与<code>HashMap</code>相似，因为底层都是基于哈希表实现的。</li><li>在迭代整个集合时，<code>LinkedHashMap</code>比普通的<code>HashMap</code>效率更高，因为它通过链表顺序访问元素，而不是哈希表的桶位顺序。</li></ul></li></ul><p>总结：<code>LinkedHashMap</code>是<code>HashMap</code>和双向链表结构的结合，这使得它既具有哈希表的高效键值对存取特性，又能保持键值对的顺序。</p><blockquote><p>使用示例：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.LinkedHashMap;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LinkedHashMapExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建一个LinkedHashMap</span></span>
<span class="line"><span>        Map&lt;String, String&gt; linkedHashMap = new LinkedHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 向LinkedHashMap中添加一些键值对</span></span>
<span class="line"><span>        linkedHashMap.put(&quot;one&quot;, &quot;Java&quot;);</span></span>
<span class="line"><span>        linkedHashMap.put(&quot;two&quot;, &quot;Python&quot;);</span></span>
<span class="line"><span>        linkedHashMap.put(&quot;three&quot;, &quot;C++&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 按插入顺序遍历LinkedHashMap</span></span>
<span class="line"><span>        System.out.println(&quot;Iterating over LinkedHashMap:&quot;);</span></span>
<span class="line"><span>        for (Map.Entry&lt;String, String&gt; entry : linkedHashMap.entrySet()) {</span></span>
<span class="line"><span>            System.out.println(entry.getKey() + &quot; =&gt; &quot; + entry.getValue());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建一个按访问顺序（LRU顺序）的LinkedHashMap</span></span>
<span class="line"><span>        Map&lt;String, String&gt; accessOrderLinkedHashMap = new LinkedHashMap&lt;&gt;(16, 0.75f, true);</span></span>
<span class="line"><span>        accessOrderLinkedHashMap.put(&quot;one&quot;, &quot;Java&quot;);</span></span>
<span class="line"><span>        accessOrderLinkedHashMap.put(&quot;two&quot;, &quot;Python&quot;);</span></span>
<span class="line"><span>        accessOrderLinkedHashMap.put(&quot;three&quot;, &quot;C++&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟访问</span></span>
<span class="line"><span>        accessOrderLinkedHashMap.get(&quot;one&quot;);</span></span>
<span class="line"><span>        accessOrderLinkedHashMap.get(&quot;two&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 再次遍历，观察访问顺序</span></span>
<span class="line"><span>        System.out.println(&quot;\\nIterating over access-order LinkedHashMap:&quot;);</span></span>
<span class="line"><span>        for (Map.Entry&lt;String, String&gt; entry : accessOrderLinkedHashMap.entrySet()) {</span></span>
<span class="line"><span>            System.out.println(entry.getKey() + &quot; =&gt; &quot; + entry.getValue());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="七、并发集合" tabindex="-1">七、并发集合 <a class="header-anchor" href="#七、并发集合" aria-label="Permalink to &quot;七、并发集合&quot;">​</a></h3><p>Java 的 java.util.concurrent包提供了多个线程安全的集合类，如 ConcurrentHashMap、CopyOnWriteArrayList等。</p><blockquote><p>是否推荐使用 <code>Collections.synchronizedList</code>方法</p></blockquote><p><code>Collections.synchronizedList</code>方法提供了一种快捷的方式来将任何列表包装成线程安全的列表。</p><p>这个方法通过在每个方法调用上添加同步锁（即在方法上加上<code>synchronized</code>关键字）来实现线程安全。</p><p>尽管这种方式可以在多线程环境中保护列表免受并发修改的影响，但它并不总是被推荐使用（它的性能开销和限制使得它不适合所有场景）</p><p>在实际应用中，根据具体需求选择专门设计用于并发环境的集合类，往往能够提供更好的性能和更强的功能。</p><h4 id="copyonwritearraylist" tabindex="-1">CopyOnWriteArrayList <a class="header-anchor" href="#copyonwritearraylist" aria-label="Permalink to &quot;CopyOnWriteArrayList&quot;">​</a></h4><p><code>CopyOnWriteArrayList</code>是Java并发包（<code>java.util.concurrent</code>）中提供的一个线程安全的<code>List</code>实现。</p><p>它是<code>ArrayList</code>的一个线程安全变体，使用写时复制（copy-on-write）策略来保证集合的一致性和线程安全，而不是通过锁来同步访问。</p><blockquote><p>写时复制策略</p></blockquote><p>写时复制是一种用于优化多线程环境下读操作远多于写操作的场景的策略。它的工作原理如下：</p><ul><li><strong>读操作</strong>：可以直接读取内部数组，不需要加锁，因为内部数组不会改变，这使得读操作非常高效。</li><li><strong>写操作（如添加、删除、修改元素）</strong>：不直接在当前数组上修改，而是先复制一份当前数组，然后在这个副本上进行修改。修改完成后，将内部引用切换到这个已修改的副本。这个过程需要加锁，以确保副本的创建、修改和引用切换的原子性。</li></ul><blockquote><p>主要特性</p></blockquote><ul><li><strong>线程安全</strong>：通过写时复制策略，<code>CopyOnWriteArrayList</code>提供了线程安全的<code>List</code>操作，无需外部同步。</li><li><strong>高并发性能</strong>：读操作无锁，大大提高了并发读的性能，特别适合读多写少的场景。</li><li><strong>迭代器强一致性</strong>：迭代器反映的是列表在迭代器创建时的状态，不会感知到迭代器创建后的修改。因此，迭代器不会抛出<code>ConcurrentModificationException</code>异常。</li></ul><blockquote><p>使用场景</p></blockquote><p><code>CopyOnWriteArrayList</code>适用于读操作远多于写操作的并发场景，如事件监听器列表、缓存等。</p><p>注意事项：</p><ul><li><strong>内存消耗</strong>：每次写操作都会复制整个底层数组，因此在元素数量较多或元素本身较大时，写操作会消耗较多内存和时间。</li><li><strong>写操作成本</strong>：由于复制整个数组的需要，写操作（添加、删除、修改）比标准的<code>ArrayList</code>慢，特别是对于大型列表。</li></ul><p><code>CopyOnWriteArrayList</code>在迭代过程中对列表进行修改是安全的，迭代器不会抛出<code>ConcurrentModificationException</code>，它操作的是数组的一个快照。</p><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Iterator;</span></span>
<span class="line"><span>import java.util.concurrent.CopyOnWriteArrayList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CopyOnWriteArrayListExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        CopyOnWriteArrayList&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();</span></span>
<span class="line"><span>        list.add(&quot;Java&quot;);</span></span>
<span class="line"><span>        list.add(&quot;Python&quot;);</span></span>
<span class="line"><span>        list.add(&quot;C++&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用迭代器遍历列表</span></span>
<span class="line"><span>        Iterator&lt;String&gt; iterator = list.iterator();</span></span>
<span class="line"><span>        while (iterator.hasNext()) {</span></span>
<span class="line"><span>            String element = iterator.next();</span></span>
<span class="line"><span>            System.out.println(element);</span></span>
<span class="line"><span>            // 迭代过程中修改列表，不会影响到迭代器</span></span>
<span class="line"><span>            list.add(&quot;JavaScript&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 迭代器完成后，列表包含新添加的元素</span></span>
<span class="line"><span>        System.out.println(list);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="八、数据结构" tabindex="-1">八、数据结构 <a class="header-anchor" href="#八、数据结构" aria-label="Permalink to &quot;八、数据结构&quot;">​</a></h3><h4 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h4><h5 id="单向链表" tabindex="-1">单向链表 <a class="header-anchor" href="#单向链表" aria-label="Permalink to &quot;单向链表&quot;">​</a></h5><p>链表中的某个节点为 B ， B 的下一个节点为 C ；表示：B.next == C</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301170526.png" alt="image.png"></p><blockquote><p>查询操作</p></blockquote><ul><li>只有在查看头节点的时候不需要遍历链表，时间复杂度是 O(1)</li><li>查询其他节点需要遍历链表，时间复杂度是 O(n)</li></ul><blockquote><p>插入/删除操作</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301170901.png" alt="image.png"></p><h5 id="双向链表" tabindex="-1">双向链表 <a class="header-anchor" href="#双向链表" aria-label="Permalink to &quot;双向链表&quot;">​</a></h5><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301171008.png" alt="image.png"></p><p>时间复杂度分析：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301171107.png" alt="image.png"></p><p>常见面试题</p><blockquote><p>单向链表和双向链表的区别是什么？</p></blockquote><ul><li>单向链表只有一个方向，结点只有一个后继指针 next。</li><li>双向链表它支持两个方向，每个结点不止有一个后继指针 next 指向后面的结点，还有一个前驱指针 pre 指向前面的结点</li></ul><blockquote><p>链表操作数据的时间复杂度是多少？</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301171910.png" alt="image.png"></p><ul><li>单向链表 <ul><li>查询：头O(1)，其他 O(n)</li><li>插入/删除：头O(1)，其他 O(n)</li></ul></li><li>双向链表 <ul><li>查询：头尾 O(1); 其他 O(n)；给定结点 O(1)</li><li>插入/删除：头尾 O(1); 其他 O(n)；给定结点 O(1)</li></ul></li></ul><h4 id="树" tabindex="-1">树 <a class="header-anchor" href="#树" aria-label="Permalink to &quot;树&quot;">​</a></h4><h4 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h4><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301172638.png" alt="image.png"></p><p>Java 中有两个方式实现二叉树：数组存储，链式存储</p><p>基于链式存储</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301172921.png" alt="image.png"></p><p>在二叉树中，比较常见的二叉树有：</p><ul><li>满二叉树</li><li>完全二叉树</li><li>二叉搜索树</li><li>红黑树</li></ul><h5 id="满二叉树" tabindex="-1">满二叉树 <a class="header-anchor" href="#满二叉树" aria-label="Permalink to &quot;满二叉树&quot;">​</a></h5><p>略</p><h5 id="完全二叉树" tabindex="-1">完全二叉树 <a class="header-anchor" href="#完全二叉树" aria-label="Permalink to &quot;完全二叉树&quot;">​</a></h5><p>略</p><h5 id="二叉搜索树" tabindex="-1">二叉搜索树 <a class="header-anchor" href="#二叉搜索树" aria-label="Permalink to &quot;二叉搜索树&quot;">​</a></h5><p>二叉搜索树（Binary Search Tree, BST）又名：二叉查找树，有序二叉树或者排序二叉树</p><p>树中的任意一个节点，其左子树的每个节点的值，都要小于这个节点的值，而右子树节点的值都要大于这个节点的值。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301173151.png" alt="image.png"></p><p>一般情况下，二叉搜索树的插入、查询、删除的时间复杂度是 O(logn)</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301173310.png" alt="image.png"></p><p>极端情况</p><p>极端情况下会出现单链表的情况，此时查询的时间复杂度是O(n)</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301173337.png" alt="image.png"></p><blockquote><p>总结，面试题</p></blockquote><p>什么是二叉树</p><ul><li>1、每个节点最多有两个“叉”，分别是左子节点和右子节点</li><li>2、不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右字节点</li><li>3、二叉树每个节点的左子树和右子树也分别能满足二叉树的定义</li></ul><p>什么是二叉搜索树</p><ul><li>二叉搜索树(Binary Search Tree,BST）又名二叉查找树，有序二叉树</li><li>在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值而右子树节点的值都大于这个节点的值</li><li>没有键值相等的节点·</li><li>通常情况下二叉树搜索的时间复杂度为O(ogn)</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301173909.png" alt="image.png"></p><h5 id="红黑树" tabindex="-1">红黑树 <a class="header-anchor" href="#红黑树" aria-label="Permalink to &quot;红黑树&quot;">​</a></h5><p>二叉树 → 二叉搜索树 → 红黑树</p><p>红黑树：自平衡二叉搜索树</p><p>红黑树是一种自平衡的二叉搜索树（BST），在1980年由Leonidas J. Guibas和Robert Sedgewick提出。它能够确保<strong>任何一个节点的左右子树的高度差不会超过最短子树的二倍</strong>。因此，红黑树是相对平衡的，这种特性使得它在插入、删除、查找操作中都能保持较高的性能，最坏情况下也能保证这些操作的时间复杂度为O(log n)。</p><p>红黑树的性质如下：</p><ol><li><strong>节点是红色或黑色。</strong></li><li><strong>根节点是黑色。</strong></li><li><strong>每个叶子节点（NIL节点，空节点）是黑色的。</strong></li><li><strong>每个红色节点的两个子节点都是黑色的。（从每个叶子到根的所有路径上不能有两个连续的红色节点）</strong></li><li><strong>从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点。</strong></li></ol><p>红黑树的操作：</p><ul><li><strong>插入</strong>：插入新节点时，默认节点为红色，以保持性质5。如果违反了红黑树的性质，就通过旋转和重新着色的方式来修正。</li><li><strong>删除</strong>：删除节点可能会破坏红黑树的性质，同样需要通过旋转和重新着色来恢复性质。</li><li><strong>查找</strong>：查找操作与普通的二叉搜索树相同，沿树向下进行，直到找到目标节点或到达叶子节点。</li></ul><p>时间复杂度：</p><p>红黑树的时间复杂度主要体现在其基本操作上：查找（搜索）、插入和删除。由于红黑树是一种自平衡的二叉搜索树，它能够保证在最坏的情况下这些操作的时间复杂度为O(log n)，其中n是树中节点的数量。下面是对每种操作复杂度的具体说明：</p><ul><li>查找（搜索） <ul><li><strong>时间复杂度</strong>：O(log n)</li><li><strong>解释</strong>：查找操作与普通二叉搜索树一样，从根节点开始，逐级向下比较，直到找到目标节点或达到叶子节点（NIL节点）。由于红黑树保持了良好的平衡性，其高度大约为log n，所以查找的最坏情况时间复杂度为O(log n)。</li></ul></li><li>插入 <ul><li><strong>时间复杂度</strong>：O(log n)</li><li><strong>解释</strong>：插入操作首先是在二叉搜索树中插入节点，这部分的时间复杂度是O(log n)。插入后可能会违反红黑树的性质，需要通过一系列的旋转和重新着色来修复，但这些操作的时间复杂度是常数级的，因此插入操作的总体时间复杂度仍然是O(log n)。</li></ul></li><li>删除 <ul><li><strong>时间复杂度</strong>：O(log n)</li><li><strong>解释</strong>：删除操作较为复杂，因为删除节点后可能会破坏红黑树的性质。删除操作分为两步：首先是在二叉搜索树中删除节点，然后通过旋转和重新着色来修复可能违反的红黑树性质。与插入操作类似，由于修复操作的复杂度是常数级的，删除操作的总体时间复杂度也是O(log n)。</li></ul></li></ul><hr><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301203331.png" alt="image.png"></p><p>保证平衡</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301203530.png" alt="image.png"></p><p>红黑树的复杂度</p><ul><li>查找 O(logn)</li><li>添加 O(logn)</li><li>删除 O(logn)</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301203622.png" alt="image.png"></p><hr><p>总结：</p><p>什么是红黑树</p><ul><li>红黑树(Red Black Tree):也是一种自平衡的二叉搜索树(BST)</li><li>所有的红黑规则都是希望红黑树能够保证平衡</li><li>红黑树的时间复杂度：查找、添加、删除都是Ologn)</li></ul><h4 id="散列表" tabindex="-1">散列表 <a class="header-anchor" href="#散列表" aria-label="Permalink to &quot;散列表&quot;">​</a></h4><blockquote><p>基础概念</p></blockquote><p>散列表(Hash Table)又名哈希表/Hash表，是根据键(Key)直接访问在内存存储位置值(Value)的数据结构，它是 由数组演化而来的，利用了数组支持按照下标进行随机访问数据的特性。</p><blockquote><p>散列函数</p></blockquote><p>将键(key)映射为数组下标的函数叫做散列函数。可以表示为：hashValue=hash(key)</p><p>散列函数的基本要求：</p><ul><li>散列函数计算得到的散列值必须是大于等于O的正整数，因为hashValue需要作为数组的下标。</li><li>如果key1 == key2,那么经过hash后得到的哈希值也必相同即：hash(key1) == hash(key2)</li><li>如果key1 != key2,那么经过hash后得到的哈希值也必不相同即：hash(key1) != hash(key2)</li></ul><blockquote><p>散列冲突</p></blockquote><p>散列冲突（Hash Collision）发生<strong>在不同的输入值经过散列函数处理后得到相同的散列值</strong>。</p><p>实际的情况下想找一个散列函数能够做到对于不同的 key 计算得到的散列值都不同几乎是不可能的，即便像著名的 MD5,SHA等哈希算法也无法避免这一情况，这就是散列冲突（或者哈希冲突，哈希碰撞，就是指多个key映射到同一个数组下标位置)</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301221804.png" alt="image.png"></p><hr><p>解决哈希冲突的主要方法有下面几种：</p><ul><li>开放寻址法（Open Addressing）</li><li>链地址法（Separate Chaining）</li><li>再散列（Rehashing）</li><li>....</li></ul><p>回答的时候可以就讲一下链地址法</p><p>这种方法就是数组 + 链表的解决方式 👇</p><blockquote><p>散列冲突-链表法（拉链）</p></blockquote><p>链地址法是将所有散列值相同的元素存储在同一个位置，但是这个位置不直接存储元素，而是<strong>存储一个指向元素链表</strong>（或其他动态数据结构，如树）的指针。散列到同一位置的所有元素都将被添加到这个链表中。</p><p>链地址法的优点是简单、直观，链表中的元素可以无限增加，解决了散列表的扩容问题，且删除和添加操作简单。但是链表过长会导致查找效率降低。</p><ul><li>(1)插入操作，通过散列函数计算出对应的散列槽位，将其插入到对应链表中即可，插入的时间复杂度是O(1)</li><li>(2)当查找、删除一个元素时，我们同样通过散列函数计算出对应的槽，然后遍历链表查找或者删除 <ul><li>平均情况下基于链表法解决冲突时查询的时间复杂度是O(1) <ul><li><strong>平均情况下的时间复杂度是O(1)</strong>：当散列表的装载因子适中，且散列函数分布均匀时，每个槽对应的链表长度会比较短，这意味着查找或删除操作中遍历链表的步骤平均只需要常数时间，所以平均情况下的时间复杂度接近O(1)。</li></ul></li><li>散列表可能会退化为链表，查询的时间复杂度就从O(1)退化为O(n) <ul><li><strong>最坏情况下退化为O(n)</strong>：如果散列表中的所有元素都散列到同一个槽中，那么这个槽对应的链表就包含了所有元素，散列表就退化为了普通的链表。在这种情况下，查找或删除一个元素的时间复杂度会退化为O(n)，其中n是散列表中元素的总数。</li></ul></li><li>将链表法中的链表改造为其他高效的动态数据结构，比如红黑树，查询的时间复杂度是O(log) <ul><li><strong>使用高效的动态数据结构优化</strong>：为了避免散列表在极端情况下退化，可以将链地址法中的链表改造为其他高效的动态数据结构，比如红黑树。红黑树是一种自平衡的二叉搜索树，它可以保证在最坏情况下的查找、插入和删除操作的时间复杂度为O(log n)，其中n是树中元素的数量。因此，如果将链表改造为红黑树，即使在最坏的情况下，查找操作的时间复杂度也可以从O(n)优化到O(log n)。</li></ul></li></ul></li></ul><p>将链表法中的链表改造红黑树还有一个非常重要的原因，可以防止 <strong>DDos攻击</strong></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240301224804.png" alt="image.png"></p><hr><p>总结：</p><p>1.什么是散列表？</p><ul><li>散列表(Hash Table)又名哈希表/Hash表</li><li>根据键(Key)直接访问在内存存储位置值(Value)的数据结构</li><li>由数组演化而来的，利用了数组支持按照下标进行随机访问数据</li></ul><p>2.散列冲突</p><ul><li>散列冲突又称哈希冲突，哈希碰撞</li><li>指多个key映射到同一个数组下标位置</li></ul><p>3.散列冲突-链表法（拉链）</p><ul><li>数组的每个下标位置称之为桶(bucket)或者槽(slot)</li><li>每个桶（槽)会对应一条链表</li><li>hash冲突后的元素都放到相同槽位对应的链表中或红黑树中</li></ul><hr><h3 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h3><blockquote><p>集合接口的操作特性</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311141123120.png" alt="image.png"><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311141123036.png" alt="image.png"></p><blockquote><p>Map 接口相关的一些实现类特点</p></blockquote><ul><li>HashMap（JDK1.8及以上） <ul><li>基于哈希表的Map接口的非同步实现</li><li>允许使用 null 值和 null 键</li><li>数据结构可以看成数组+链表+红黑树</li><li>采用了Fail- Fast机制</li></ul></li><li>Hashtable <ul><li>基于哈希表的Map接口的同步实现, 使用synchronized实现线程安全</li><li>不允许使用null值和null键</li><li>底层使用数组实现，数组中每一项是个单链表，即数组和链表的结合体</li></ul></li><li>ConcurrentHashMap（JDK1.7版本） <ul><li>采用数组+分段锁的方式实现</li><li>数据结构：Segment 数组 + HashEntry 数组 + 链表</li></ul></li><li>ConcurrentHashMap（JDK1.8版本） <ul><li>数据结构：Node 数组 + 链表 / 红黑树。</li><li>当冲突链表达到一定长度时，链表会转换成红黑树。</li></ul></li><li>TreeMap <ul><li>实现了SortedMap接口，键以某种排序规则排序</li><li>内部以red-black（红-黑）树数据结构实现</li></ul></li><li>LinkedHashMap <ul><li>继承于HashMap</li><li>非同步，允许使用null值和null键</li><li>底层使用哈希表和双向链表来保存所有元素</li></ul></li><li>WeakHashMap <ul><li>支持null值和null键，fast-fail机制，不允许重复</li><li>key只保留对实际对象的弱引用，当key所引用的对象没有被其他强引用变量所引用，则这些key所引用的对象可能被垃圾回收，WeakHashMap也可能自动删除这些key所对应的key-value对。</li></ul></li><li>IdentifyHashMap <ul><li>在IdentityHashMap中，当且仅当两个key严格相等（key1== key2）时，IdentityHashMap才认为两个key相等；相对于普通HashMap而言，只要key1和key2通过equals()方法返回true，且它们的hashCode值相等即可。</li></ul></li><li>EnumMap <ul><li>EnumMap是一个与枚举类一起使用的Map实现，EnumMap中的所有key都必须是单个枚举类的枚举值。创建EnumMap时必须显示或隐式的指定它对应的枚举类。</li></ul></li></ul><hr><p>参考</p><ul><li><a href="https://javaguide.cn/java/collection/java-collection-questions-01.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/collection/java-collection-questions-01.html</a></li><li><a href="https://javaguide.cn/java/collection/java-collection-questions-02.html#map-%E9%87%8D%E8%A6%81" target="_blank" rel="noreferrer">https://javaguide.cn/java/collection/java-collection-questions-02.html#map-重要</a></li><li><a href="https://www.54benniao.com/a/ptarer.html" target="_blank" rel="noreferrer">https://www.54benniao.com/a/ptarer.html</a></li></ul>`,508)])])}const g=a(l,[["render",i]]);export{h as __pageData,g as default};
