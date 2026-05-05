import{_ as s,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const y=JSON.parse('{"title":"ArrayList","description":"","frontmatter":{"title":"ArrayList","excerpt":"ArrayList 的学习","date":"2023-11-14 20:30:00","updated":"2023-11-14 20:30:00"},"headers":[],"relativePath":"基础/核心类库与集合框架/Java 集合框架/ArrayList.md","filePath":"基础/核心类库与集合框架/Java 集合框架/ArrayList.md","lastUpdated":null}'),l={name:"基础/核心类库与集合框架/Java 集合框架/ArrayList.md"};function i(c,n,t,r,o,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<p>将 ArrayList 的相关内容单独拿出来讲一下</p><h3 id="一、核心源码" tabindex="-1">一、核心源码 <a class="header-anchor" href="#一、核心源码" aria-label="Permalink to &quot;一、核心源码&quot;">​</a></h3><p>这里以 JDK1.8 为例，分析一下 <code>ArrayList</code> 的底层源码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;</span></span>
<span class="line"><span>        implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable {</span></span>
<span class="line"><span>    private static final long serialVersionUID = 8683452581122892189L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 默认初始容量大小</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private static final int DEFAULT_CAPACITY = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 空数组（用于空实例）。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private static final Object[] EMPTY_ELEMENTDATA = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //用于默认大小空实例的共享空数组实例。</span></span>
<span class="line"><span>    //我们把它从EMPTY_ELEMENTDATA数组中区分出来，以知道在添加第一个元素时容量需要增加多少。</span></span>
<span class="line"><span>    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 保存ArrayList数据的数组</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    transient Object[] elementData; // non-private to simplify nested class access</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
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
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 默认无参构造函数</span></span>
<span class="line"><span>     * DEFAULTCAPACITY_EMPTY_ELEMENTDATA 为0.初始化为10，也就是说初始其实是空数组 当添加第一个元素的时候数组容量才变成10</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ArrayList() {</span></span>
<span class="line"><span>        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
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
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改这个ArrayList实例的容量是列表的当前大小。 应用程序可以使用此操作来最小化ArrayList实例的存储。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void trimToSize() {</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        if (size &lt; elementData.length) {</span></span>
<span class="line"><span>            elementData = (size == 0)</span></span>
<span class="line"><span>                    ? EMPTY_ELEMENTDATA</span></span>
<span class="line"><span>                    : Arrays.copyOf(elementData, size);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>//下面是ArrayList的扩容机制</span></span>
<span class="line"><span>//ArrayList的扩容机制提高了性能，如果每次只扩充一个，</span></span>
<span class="line"><span>//那么频繁的插入会导致频繁的拷贝，降低性能，而ArrayList的扩容机制避免了这种情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 如有必要，增加此ArrayList实例的容量，以确保它至少能容纳元素的数量</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param minCapacity 所需的最小容量</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void ensureCapacity(int minCapacity) {</span></span>
<span class="line"><span>        //如果是true，minExpand的值为0，如果是false,minExpand的值为10</span></span>
<span class="line"><span>        int minExpand = (elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA)</span></span>
<span class="line"><span>                // any size if not default element table</span></span>
<span class="line"><span>                ? 0</span></span>
<span class="line"><span>                // larger than default for default empty table. It&#39;s already</span></span>
<span class="line"><span>                // supposed to be at default size.</span></span>
<span class="line"><span>                : DEFAULT_CAPACITY;</span></span>
<span class="line"><span>        //如果最小容量大于已有的最大容量</span></span>
<span class="line"><span>        if (minCapacity &gt; minExpand) {</span></span>
<span class="line"><span>            ensureExplicitCapacity(minCapacity);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据给定的最小容量和当前数组元素来计算所需容量。</span></span>
<span class="line"><span>    private static int calculateCapacity(Object[] elementData, int minCapacity) {</span></span>
<span class="line"><span>        // 如果当前数组元素为空数组（初始情况），返回默认容量和最小容量中的较大值作为所需容量</span></span>
<span class="line"><span>        if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {</span></span>
<span class="line"><span>            return Math.max(DEFAULT_CAPACITY, minCapacity);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 否则直接返回最小容量</span></span>
<span class="line"><span>        return minCapacity;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 确保内部容量达到指定的最小容量。</span></span>
<span class="line"><span>    private void ensureCapacityInternal(int minCapacity) {</span></span>
<span class="line"><span>        ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //判断是否需要扩容</span></span>
<span class="line"><span>    private void ensureExplicitCapacity(int minCapacity) {</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        // overflow-conscious code</span></span>
<span class="line"><span>        if (minCapacity - elementData.length &gt; 0)</span></span>
<span class="line"><span>            //调用grow方法进行扩容，调用此方法代表已经开始扩容了</span></span>
<span class="line"><span>            grow(minCapacity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 要分配的最大数组大小</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * ArrayList扩容的核心方法。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void grow(int minCapacity) {</span></span>
<span class="line"><span>        // oldCapacity为旧容量，newCapacity为新容量</span></span>
<span class="line"><span>        int oldCapacity = elementData.length;</span></span>
<span class="line"><span>        //将oldCapacity 右移一位，其效果相当于oldCapacity /2，</span></span>
<span class="line"><span>        //我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，</span></span>
<span class="line"><span>        int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1);</span></span>
<span class="line"><span>        //然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，</span></span>
<span class="line"><span>        if (newCapacity - minCapacity &lt; 0)</span></span>
<span class="line"><span>            newCapacity = minCapacity;</span></span>
<span class="line"><span>        //再检查新容量是否超出了ArrayList所定义的最大容量，</span></span>
<span class="line"><span>        //若超出了，则调用hugeCapacity()来比较minCapacity和 MAX_ARRAY_SIZE，</span></span>
<span class="line"><span>        //如果minCapacity大于MAX_ARRAY_SIZE，则新容量则为Integer.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE。</span></span>
<span class="line"><span>        if (newCapacity - MAX_ARRAY_SIZE &gt; 0)</span></span>
<span class="line"><span>            newCapacity = hugeCapacity(minCapacity);</span></span>
<span class="line"><span>        // minCapacity is usually close to size, so this is a win:</span></span>
<span class="line"><span>        elementData = Arrays.copyOf(elementData, newCapacity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //比较minCapacity和 MAX_ARRAY_SIZE</span></span>
<span class="line"><span>    private static int hugeCapacity(int minCapacity) {</span></span>
<span class="line"><span>        if (minCapacity &lt; 0) // overflow</span></span>
<span class="line"><span>            throw new OutOfMemoryError();</span></span>
<span class="line"><span>        return (minCapacity &gt; MAX_ARRAY_SIZE) ?</span></span>
<span class="line"><span>                Integer.MAX_VALUE :</span></span>
<span class="line"><span>                MAX_ARRAY_SIZE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回此列表中的元素数。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public int size() {</span></span>
<span class="line"><span>        return size;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 如果此列表不包含元素，则返回 true 。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean isEmpty() {</span></span>
<span class="line"><span>        //注意=和==的区别</span></span>
<span class="line"><span>        return size == 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 如果此列表包含指定的元素，则返回true 。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean contains(Object o) {</span></span>
<span class="line"><span>        //indexOf()方法：返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1</span></span>
<span class="line"><span>        return indexOf(o) &gt;= 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public int indexOf(Object o) {</span></span>
<span class="line"><span>        if (o == null) {</span></span>
<span class="line"><span>            for (int i = 0; i &lt; size; i++)</span></span>
<span class="line"><span>                if (elementData[i] == null)</span></span>
<span class="line"><span>                    return i;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            for (int i = 0; i &lt; size; i++)</span></span>
<span class="line"><span>                //equals()方法比较</span></span>
<span class="line"><span>                if (o.equals(elementData[i]))</span></span>
<span class="line"><span>                    return i;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回此列表中指定元素的最后一次出现的索引，如果此列表不包含元素，则返回-1。.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public int lastIndexOf(Object o) {</span></span>
<span class="line"><span>        if (o == null) {</span></span>
<span class="line"><span>            for (int i = size - 1; i &gt;= 0; i--)</span></span>
<span class="line"><span>                if (elementData[i] == null)</span></span>
<span class="line"><span>                    return i;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            for (int i = size - 1; i &gt;= 0; i--)</span></span>
<span class="line"><span>                if (o.equals(elementData[i]))</span></span>
<span class="line"><span>                    return i;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回此ArrayList实例的浅拷贝。 （元素本身不被复制。）</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public Object clone() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ArrayList&lt;?&gt; v = (ArrayList&lt;?&gt;) super.clone();</span></span>
<span class="line"><span>            //Arrays.copyOf功能是实现数组的复制，返回复制后的数组。参数是被复制的数组和复制的长度</span></span>
<span class="line"><span>            v.elementData = Arrays.copyOf(elementData, size);</span></span>
<span class="line"><span>            v.modCount = 0;</span></span>
<span class="line"><span>            return v;</span></span>
<span class="line"><span>        } catch (CloneNotSupportedException e) {</span></span>
<span class="line"><span>            // 这不应该发生，因为我们是可以克隆的</span></span>
<span class="line"><span>            throw new InternalError(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以正确的顺序（从第一个到最后一个元素）返回一个包含此列表中所有元素的数组。</span></span>
<span class="line"><span>     * 返回的数组将是“安全的”，因为该列表不保留对它的引用。 （换句话说，这个方法必须分配一个新的数组）。</span></span>
<span class="line"><span>     * 因此，调用者可以自由地修改返回的数组。 此方法充当基于阵列和基于集合的API之间的桥梁。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public Object[] toArray() {</span></span>
<span class="line"><span>        return Arrays.copyOf(elementData, size);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）;</span></span>
<span class="line"><span>     * 返回的数组的运行时类型是指定数组的运行时类型。 如果列表适合指定的数组，则返回其中。</span></span>
<span class="line"><span>     * 否则，将为指定数组的运行时类型和此列表的大小分配一个新数组。</span></span>
<span class="line"><span>     * 如果列表适用于指定的数组，其余空间（即数组的列表数量多于此元素），则紧跟在集合结束后的数组中的元素设置为null 。</span></span>
<span class="line"><span>     * （这仅在调用者知道列表不包含任何空元素的情况下才能确定列表的长度。）</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>    public &lt;T&gt; T[] toArray(T[] a) {</span></span>
<span class="line"><span>        if (a.length &lt; size)</span></span>
<span class="line"><span>            // 新建一个运行时类型的数组，但是ArrayList数组的内容</span></span>
<span class="line"><span>            return (T[]) Arrays.copyOf(elementData, size, a.getClass());</span></span>
<span class="line"><span>        //调用System提供的arraycopy()方法实现数组之间的复制</span></span>
<span class="line"><span>        System.arraycopy(elementData, 0, a, 0, size);</span></span>
<span class="line"><span>        if (a.length &gt; size)</span></span>
<span class="line"><span>            a[size] = null;</span></span>
<span class="line"><span>        return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Positional Access Operations</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>    E elementData(int index) {</span></span>
<span class="line"><span>        return (E) elementData[index];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回此列表中指定位置的元素。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public E get(int index) {</span></span>
<span class="line"><span>        rangeCheck(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return elementData(index);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 用指定的元素替换此列表中指定位置的元素。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public E set(int index, E element) {</span></span>
<span class="line"><span>        //对index进行界限检查</span></span>
<span class="line"><span>        rangeCheck(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        E oldValue = elementData(index);</span></span>
<span class="line"><span>        elementData[index] = element;</span></span>
<span class="line"><span>        //返回原来在这个位置的元素</span></span>
<span class="line"><span>        return oldValue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将指定的元素追加到此列表的末尾。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean add(E e) {</span></span>
<span class="line"><span>        ensureCapacityInternal(size + 1);  // Increments modCount!!</span></span>
<span class="line"><span>        //这里看到ArrayList添加元素的实质就相当于为数组赋值</span></span>
<span class="line"><span>        elementData[size++] = e;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 在此列表中的指定位置插入指定的元素。</span></span>
<span class="line"><span>     * 先调用 rangeCheckForAdd 对index进行界限检查；然后调用 ensureCapacityInternal 方法保证capacity足够大；</span></span>
<span class="line"><span>     * 再将从index开始之后的所有成员后移一个位置；将element插入index位置；最后size加1。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void add(int index, E element) {</span></span>
<span class="line"><span>        rangeCheckForAdd(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ensureCapacityInternal(size + 1);  // Increments modCount!!</span></span>
<span class="line"><span>        //arraycopy()这个实现数组之间复制的方法一定要看一下，下面就用到了arraycopy()方法实现数组自己复制自己</span></span>
<span class="line"><span>        System.arraycopy(elementData, index, elementData, index + 1,</span></span>
<span class="line"><span>                size - index);</span></span>
<span class="line"><span>        elementData[index] = element;</span></span>
<span class="line"><span>        size++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 删除该列表中指定位置的元素。 将任何后续元素移动到左侧（从其索引中减去一个元素）。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public E remove(int index) {</span></span>
<span class="line"><span>        rangeCheck(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        E oldValue = elementData(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int numMoved = size - index - 1;</span></span>
<span class="line"><span>        if (numMoved &gt; 0)</span></span>
<span class="line"><span>            System.arraycopy(elementData, index + 1, elementData, index,</span></span>
<span class="line"><span>                    numMoved);</span></span>
<span class="line"><span>        elementData[--size] = null; // clear to let GC do its work</span></span>
<span class="line"><span>        //从列表中删除的元素</span></span>
<span class="line"><span>        return oldValue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从列表中删除指定元素的第一个出现（如果存在）。 如果列表不包含该元素，则它不会更改。</span></span>
<span class="line"><span>     * 返回true，如果此列表包含指定的元素</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean remove(Object o) {</span></span>
<span class="line"><span>        if (o == null) {</span></span>
<span class="line"><span>            for (int index = 0; index &lt; size; index++)</span></span>
<span class="line"><span>                if (elementData[index] == null) {</span></span>
<span class="line"><span>                    fastRemove(index);</span></span>
<span class="line"><span>                    return true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            for (int index = 0; index &lt; size; index++)</span></span>
<span class="line"><span>                if (o.equals(elementData[index])) {</span></span>
<span class="line"><span>                    fastRemove(index);</span></span>
<span class="line"><span>                    return true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>     * Private remove method that skips bounds checking and does not</span></span>
<span class="line"><span>     * return the value removed.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void fastRemove(int index) {</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        int numMoved = size - index - 1;</span></span>
<span class="line"><span>        if (numMoved &gt; 0)</span></span>
<span class="line"><span>            System.arraycopy(elementData, index + 1, elementData, index,</span></span>
<span class="line"><span>                    numMoved);</span></span>
<span class="line"><span>        elementData[--size] = null; // clear to let GC do its work</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从列表中删除所有元素。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void clear() {</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 把数组中所有的元素的值设为null</span></span>
<span class="line"><span>        for (int i = 0; i &lt; size; i++)</span></span>
<span class="line"><span>            elementData[i] = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        size = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 按指定集合的Iterator返回的顺序将指定集合中的所有元素追加到此列表的末尾。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean addAll(Collection&lt;? extends E&gt; c) {</span></span>
<span class="line"><span>        Object[] a = c.toArray();</span></span>
<span class="line"><span>        int numNew = a.length;</span></span>
<span class="line"><span>        ensureCapacityInternal(size + numNew);  // Increments modCount</span></span>
<span class="line"><span>        System.arraycopy(a, 0, elementData, size, numNew);</span></span>
<span class="line"><span>        size += numNew;</span></span>
<span class="line"><span>        return numNew != 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将指定集合中的所有元素插入到此列表中，从指定的位置开始。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean addAll(int index, Collection&lt;? extends E&gt; c) {</span></span>
<span class="line"><span>        rangeCheckForAdd(index);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object[] a = c.toArray();</span></span>
<span class="line"><span>        int numNew = a.length;</span></span>
<span class="line"><span>        ensureCapacityInternal(size + numNew);  // Increments modCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int numMoved = size - index;</span></span>
<span class="line"><span>        if (numMoved &gt; 0)</span></span>
<span class="line"><span>            System.arraycopy(elementData, index, elementData, index + numNew,</span></span>
<span class="line"><span>                    numMoved);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.arraycopy(a, 0, elementData, index, numNew);</span></span>
<span class="line"><span>        size += numNew;</span></span>
<span class="line"><span>        return numNew != 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从此列表中删除所有索引为fromIndex （含）和toIndex之间的元素。</span></span>
<span class="line"><span>     * 将任何后续元素移动到左侧（减少其索引）。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    protected void removeRange(int fromIndex, int toIndex) {</span></span>
<span class="line"><span>        modCount++;</span></span>
<span class="line"><span>        int numMoved = size - toIndex;</span></span>
<span class="line"><span>        System.arraycopy(elementData, toIndex, elementData, fromIndex,</span></span>
<span class="line"><span>                numMoved);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // clear to let GC do its work</span></span>
<span class="line"><span>        int newSize = size - (toIndex - fromIndex);</span></span>
<span class="line"><span>        for (int i = newSize; i &lt; size; i++) {</span></span>
<span class="line"><span>            elementData[i] = null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        size = newSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 检查给定的索引是否在范围内。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void rangeCheck(int index) {</span></span>
<span class="line"><span>        if (index &gt;= size)</span></span>
<span class="line"><span>            throw new IndexOutOfBoundsException(outOfBoundsMsg(index));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * add和addAll使用的rangeCheck的一个版本</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void rangeCheckForAdd(int index) {</span></span>
<span class="line"><span>        if (index &gt; size || index &lt; 0)</span></span>
<span class="line"><span>            throw new IndexOutOfBoundsException(outOfBoundsMsg(index));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回IndexOutOfBoundsException细节信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private String outOfBoundsMsg(int index) {</span></span>
<span class="line"><span>        return &quot;Index: &quot; + index + &quot;, Size: &quot; + size;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从此列表中删除指定集合中包含的所有元素。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean removeAll(Collection&lt;?&gt; c) {</span></span>
<span class="line"><span>        Objects.requireNonNull(c);</span></span>
<span class="line"><span>        //如果此列表被修改则返回true</span></span>
<span class="line"><span>        return batchRemove(c, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 仅保留此列表中包含在指定集合中的元素。</span></span>
<span class="line"><span>     * 换句话说，从此列表中删除其中不包含在指定集合中的所有元素。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean retainAll(Collection&lt;?&gt; c) {</span></span>
<span class="line"><span>        Objects.requireNonNull(c);</span></span>
<span class="line"><span>        return batchRemove(c, true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从列表中的指定位置开始，返回列表中的元素（按正确顺序）的列表迭代器。</span></span>
<span class="line"><span>     * 指定的索引表示初始调用将返回的第一个元素为next 。 初始调用previous将返回指定索引减1的元素。</span></span>
<span class="line"><span>     * 返回的列表迭代器是fail-fast 。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ListIterator&lt;E&gt; listIterator(int index) {</span></span>
<span class="line"><span>        if (index &lt; 0 || index &gt; size)</span></span>
<span class="line"><span>            throw new IndexOutOfBoundsException(&quot;Index: &quot; + index);</span></span>
<span class="line"><span>        return new ListItr(index);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 返回列表中的列表迭代器（按适当的顺序）。</span></span>
<span class="line"><span>     * 返回的列表迭代器是fail-fast 。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ListIterator&lt;E&gt; listIterator() {</span></span>
<span class="line"><span>        return new ListItr(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以正确的顺序返回该列表中的元素的迭代器。</span></span>
<span class="line"><span>     * 返回的迭代器是fail-fast 。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public Iterator&lt;E&gt; iterator() {</span></span>
<span class="line"><span>        return new Itr();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="二、arraylist-扩容机制" tabindex="-1">二、ArrayList 扩容机制 <a class="header-anchor" href="#二、arraylist-扩容机制" aria-label="Permalink to &quot;二、ArrayList 扩容机制&quot;">​</a></h3><p>先了解一下基础的 ArrayList 的扩容机制概念：<code>ArrayList</code> 的内部使用数组存储元素，当添加的元素超过当前数组容量时，<code>ArrayList</code> 会自动扩容（通常是扩大到原来的 1.5 倍），以容纳更多的元素。</p><p>这里以无参构造函数创建的 ArrayList 为例分析, （JDK8）</p><h4 id="add-方法" tabindex="-1">add 方法 <a class="header-anchor" href="#add-方法" aria-label="Permalink to &quot;add 方法&quot;">​</a></h4><p>我们来看 add 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>private int size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>	 * 将指定的元素追加到此列表的末尾。</span></span>
<span class="line"><span> */ </span></span>
<span class="line"><span>public boolean add(E e) { </span></span>
<span class="line"><span>	//添加元素之前，先调用ensureCapacityInternal 方法</span></span>
<span class="line"><span>    ensureCapacityInternal(size + 1);  // Increments modCount!!  </span></span>
<span class="line"><span>    //这里看到ArrayList添加元素的实质就相当于为数组赋值</span></span>
<span class="line"><span>    elementData[size++] = e;  </span></span>
<span class="line"><span>    return true;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：JDK11 移除了 <code>ensureCapacityInternal()</code> 和 <code>ensureExplicitCapacity()</code> 方法</p></blockquote><h4 id="ensurecapacityinternal-方法" tabindex="-1">ensureCapacityInternal 方法 <a class="header-anchor" href="#ensurecapacityinternal-方法" aria-label="Permalink to &quot;ensureCapacityInternal 方法&quot;">​</a></h4><p>进入 ensureCapacityInternal 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//得到最小扩容量</span></span>
<span class="line"><span>private void ensureCapacityInternal(int minCapacity) {  </span></span>
<span class="line"><span>    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {  </span></span>
<span class="line"><span>	    // 获取默认的容量和传入参数的比较最大值</span></span>
<span class="line"><span>        minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    ensureExplicitCapacity(minCapacity);  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>add</code> 方法 首先调用了<code>ensureCapacityInternal(size + 1)</code>, ArrayList 的默认容量是 10；</p><p>当 要 add 进第 1 个元素时，minCapacity 为 1，在 Math.max( )方法比较后，minCapacity 为 10。</p><h4 id="ensureexplicitcapacity-方法" tabindex="-1"><code>ensureExplicitCapacity()</code> 方法 <a class="header-anchor" href="#ensureexplicitcapacity-方法" aria-label="Permalink to &quot;\`ensureExplicitCapacity()\` 方法&quot;">​</a></h4><p>进入到 <code>ensureExplicitCapacity()</code> 方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//判断是否需要扩容</span></span>
<span class="line"><span>private void ensureExplicitCapacity(int minCapacity) {  </span></span>
<span class="line"><span>    modCount++;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // overflow-conscious code  </span></span>
<span class="line"><span>    if (minCapacity - elementData.length &gt; 0)  </span></span>
<span class="line"><span>	    //调用grow方法进行扩容，调用此方法代表已经开始扩容了</span></span>
<span class="line"><span>        grow(minCapacity);  </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>当 add 添加第一个元素到 ArrayList 时， <ul><li>elementData.length 为 0 （此时还是一个空的 list）；</li><li>执行 <code>ensureCapacityInternal()</code> 方法 ， minCapacity 此时为 10。</li><li>此时，<code>minCapacity - elementData.length &gt; 0</code>成立，会进入 <code>grow(minCapacity)</code> 方法。</li></ul></li><li>当 add 第 2 个元素时， <ul><li>minCapacity 为 2，此时 elementData.length(容量)在添加第一个元素后扩容成 10 了。</li><li>此时，<code>minCapacity - elementData.length &gt; 0</code> 不成立，所以不会进入 （执行）<code>grow(minCapacity)</code> 方法。</li></ul></li><li>添加第 3、4···到第 10 个元素时，依然不会执行 grow 方法，数组容量都为 10。</li></ul><p>直到添加第 11 个元素，minCapacity(为 11)比 elementData.length（为 10）要大。进入 grow 方法进行扩容。</p><h4 id="grow-方法" tabindex="-1"><code>grow 方法</code> <a class="header-anchor" href="#grow-方法" aria-label="Permalink to &quot;\`grow 方法\`&quot;">​</a></h4><p>进入到 <code>grow 方法</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//要分配的最大数组大小</span></span>
<span class="line"><span>private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**  </span></span>
<span class="line"><span>	 * Increases the capacity to ensure that it can hold at least the number of elements specified by the minimum capacity argument. </span></span>
<span class="line"><span>	 * @param minCapacity - the desired minimum capacity  </span></span>
<span class="line"><span>	 * ArrayList扩容的核心方法。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span> private void grow(int minCapacity) {  </span></span>
<span class="line"><span>    // overflow-conscious code  </span></span>
<span class="line"><span>    // oldCapacity为旧容量，newCapacity为新容量</span></span>
<span class="line"><span>    int oldCapacity = elementData.length;  </span></span>
<span class="line"><span>    //将oldCapacity 右移一位，其效果相当于oldCapacity /2，</span></span>
<span class="line"><span>    //位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，</span></span>
<span class="line"><span>    int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1);  </span></span>
<span class="line"><span>    //检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，</span></span>
<span class="line"><span>    if (newCapacity - minCapacity &lt; 0)  </span></span>
<span class="line"><span>        newCapacity = minCapacity;  </span></span>
<span class="line"><span>    // 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) \`hugeCapacity()\` 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，</span></span>
<span class="line"><span>    //如果minCapacity大于最大容量，则新容量则为\`Integer.MAX_VALUE\`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 \`Integer.MAX_VALUE - 8\`。</span></span>
<span class="line"><span>    if (newCapacity - MAX_ARRAY_SIZE &gt; 0)  </span></span>
<span class="line"><span>        newCapacity = hugeCapacity(minCapacity);  </span></span>
<span class="line"><span>    // minCapacity is usually close to size, so this is a win:  </span></span>
<span class="line"><span>    elementData = Arrays.copyOf(elementData, newCapacity);  </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>当 add 第 1 个元素时， <ul><li>oldCapacity 为 0，经比较后第一个 if 判断成立，<strong>newCapacity = minCapacity(为 10)</strong>。</li><li>但是第二个 if 判断不会成立，即 newCapacity 不比 MAX_ARRAY_SIZE 大，则不会进入 <code>hugeCapacity</code> 方法。</li><li>数组容量为 10，add 方法中 return true,</li><li>size 增为 1。【elementData[size++] = e; 】</li></ul></li><li>当 add 第 11 个元素进入 grow 方法时， <ul><li>newCapacity 为 15，比 minCapacity（为 11）大，第一个 if 判断不成立。</li><li>新容量没有大于数组最大 size，不会进入 hugeCapacity 方法。数组容量扩为 15，</li><li>add 方法中 return true, size 增为 11。</li></ul></li><li>以此类推······</li></ul><h4 id="hugecapacity-方法" tabindex="-1"><code>hugeCapacity()</code> 方法 <a class="header-anchor" href="#hugecapacity-方法" aria-label="Permalink to &quot;\`hugeCapacity()\` 方法&quot;">​</a></h4><p>如果新容量大于 MAX_ARRAY_SIZE,进入(执行) <code>hugeCapacity()</code> 方法</p><p>如果 minCapacity 大于最大容量，则新容量则为<code>Integer.MAX_VALUE</code>，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 <code>Integer.MAX_VALUE - 8</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>private static int hugeCapacity(int minCapacity) {  </span></span>
<span class="line"><span>    if (minCapacity &lt; 0) // overflow  </span></span>
<span class="line"><span>        throw new OutOfMemoryError();  </span></span>
<span class="line"><span>	//对minCapacity和MAX_ARRAY_SIZE进行比较</span></span>
<span class="line"><span>	//若minCapacity大，将Integer.MAX_VALUE作为新数组的大小</span></span>
<span class="line"><span>	//若MAX_ARRAY_SIZE大，将MAX_ARRAY_SIZE作为新数组的大小</span></span>
<span class="line"><span>	//MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;</span></span>
<span class="line"><span>    return (minCapacity &gt; MAX_ARRAY_SIZE) ?  </span></span>
<span class="line"><span>        Integer.MAX_VALUE :  </span></span>
<span class="line"><span>        MAX_ARRAY_SIZE;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="小结-★★" tabindex="-1">小结 ★★ <a class="header-anchor" href="#小结-★★" aria-label="Permalink to &quot;小结  ★★&quot;">​</a></h4><p>流程图输出：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311151356624.png" alt="image.png"></p><p>通过面试题的方式来回答这个问题：</p><blockquote><p>讲一下 ArrayList 的扩容机制。</p></blockquote><p>ArrayList 的默认初始容量是10，容量不足时，会扩容到原来的 1.5 倍。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240208120458.png" alt="image.png"></p><h3 id="记录-records" tabindex="-1">记录 Records <a class="header-anchor" href="#记录-records" aria-label="Permalink to &quot;记录 Records&quot;">​</a></h3><h4 id="关于-oldcapacity-oldcapacity-1-的说明" tabindex="-1">关于 oldCapacity + (oldCapacity &gt;&gt; 1) 的说明： <a class="header-anchor" href="#关于-oldcapacity-oldcapacity-1-的说明" aria-label="Permalink to &quot;关于 oldCapacity + (oldCapacity &gt;&gt; 1) 的说明：&quot;">​</a></h4><p><strong>int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1),所以 ArrayList 每次扩容之后容量都会变为原来的 1.5 倍左右（oldCapacity 为偶数就是 1.5 倍，否则是 1.5 倍左右）！</strong> 奇偶不同，比如：10+10/2 = 15, 33+33/2=49。如果是奇数的话会丢掉小数.</p><blockquote><p>&quot;&gt;&gt;&quot;（移位运算符）：&gt;&gt;1 右移一位相当于除 2，右移 n 位相当于除以 2 的 n 次方。这里 oldCapacity 明显右移了 1 位所以相当于 oldCapacity /2。对于大数据的 2 进制运算,位移运算符比那些普通运算符的运算要快很多,因为程序仅仅移动一下而已,不去计算,这样提高了效率,节省了资源</p></blockquote><h4 id="关于-arrays-copyof-方法" tabindex="-1">关于 <code>Arrays.copyOf()</code>方法 <a class="header-anchor" href="#关于-arrays-copyof-方法" aria-label="Permalink to &quot;关于 \`Arrays.copyOf()\`方法&quot;">​</a></h4><p>源码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public static &lt;T,U&gt; T[] copyOf(U[] original, int newLength, Class&lt;? extends T[]&gt; newType) {  </span></span>
<span class="line"><span>	// 申请一个新的数组</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)  </span></span>
<span class="line"><span>    T[] copy = ((Object)newType == (Object)Object[].class)  </span></span>
<span class="line"><span>        ? (T[]) new Object[newLength]  </span></span>
<span class="line"><span>        : (T[]) Array.newInstance(newType.getComponentType(), newLength); </span></span>
<span class="line"><span>    // 调用System.arraycopy,将源数组中的数据进行拷贝,并返回新的数组     </span></span>
<span class="line"><span>    System.arraycopy(original, 0, copy, 0,  </span></span>
<span class="line"><span>                     Math.min(original.length, newLength));  </span></span>
<span class="line"><span>    return copy;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>System.arraycopy()</code> 方法</p><p>源码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    // arraycopy 是一个 native 方法,接下来解释一下各个参数的具体意义</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    *   复制数组</span></span>
<span class="line"><span>    * @param src 源数组</span></span>
<span class="line"><span>    * @param srcPos 源数组中的起始位置</span></span>
<span class="line"><span>    * @param dest 目标数组</span></span>
<span class="line"><span>    * @param destPos 目标数组中的起始位置</span></span>
<span class="line"><span>    * @param length 要复制的数组元素的数量</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    public static native void arraycopy(Object src,  int  srcPos,</span></span>
<span class="line"><span>                                        Object dest, int destPos,</span></span>
<span class="line"><span>                                        int length);</span></span></code></pre></div><hr><p>参考：</p><ul><li><a href="https://javaguide.cn/java/collection/arraylist-source-code.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/collection/arraylist-source-code.html</a></li><li><a href="https://blog.csdn.net/czxlylc/article/details/106892156" target="_blank" rel="noreferrer">https://blog.csdn.net/czxlylc/article/details/106892156</a></li></ul>`,49)])])}const m=s(l,[["render",i]]);export{y as __pageData,m as default};
