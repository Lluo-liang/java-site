import{_ as s,o as n,c as e,am as p}from"./chunks/framework._FJXuPhs.js";const m=JSON.parse('{"title":"分布式系统互斥性与幂等性问题的分析与解决","description":"","frontmatter":{"title":"分布式系统互斥性与幂等性问题的分析与解决","excerpt":"摘要","date":"2024-05-14 23:58:44","updated":"2024-05-14 23:58:44"},"headers":[],"relativePath":"架构篇/系统设计_数据安全/分布式系统互斥性与幂等性问题的分析与解决.md","filePath":"架构篇/系统设计_数据安全/分布式系统互斥性与幂等性问题的分析与解决.md","lastUpdated":null}'),l={name:"架构篇/系统设计_数据安全/分布式系统互斥性与幂等性问题的分析与解决.md"};function i(o,a,r,t,c,h){return n(),e("div",null,[...a[0]||(a[0]=[p(`<p>参考： <a href="https://tech.meituan.com/2016/09/29/distributed-system-mutually-exclusive-idempotence-cerberus-gtis.html" target="_blank" rel="noreferrer">https://tech.meituan.com/2016/09/29/distributed-system-mutually-exclusive-idempotence-cerberus-gtis.html</a></p><ul><li><p>互斥性问题。</p></li><li><p>幂等性问题。</p></li><li><p>互斥性问题用通俗的话来讲，就是对共享资源的抢占问题。</p></li><li><p>操作的互斥性问题，也可以理解为一个需要保证时序性、原子性的问题。</p></li><li><p>传统的基于数据库的架构中，对于数据的抢占问题往往是通过数据库事务（ACID）来保证的。</p></li><li><p>在分布式环境中，出于对性能以及一致性敏感度的要求，使得分布式锁成为了一种比较常见而高效的解决方案。</p></li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240515000058.png" alt="image.png"></p><p>多线程解决方案</p><ul><li>Java JDK中提供了两种互斥锁Lock和synchronized。不同的线程之间对同一资源进行抢占，该资源通常表现为某个类的普通成员变量。因此，利用ReentrantLock或者synchronized将共享的变量及其操作锁住，即可基本解决资源抢占的问题。</li><li>原理 <ul><li>ReentrantLock <ul><li>ReentrantLock 主要利用CAS+CLH队列来实现。它支持公平锁和非公平锁，两者的实现类似 <ul><li>CAS：Compare and Swap，比较并交换。CAS有3个操作数：内存值V、预期值A、要修改的新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。该操作是一个原子操作，被广泛的应用在Java的底层实现中。在Java中，CAS主要是由sun.misc.Unsafe这个类通过JNI 调用 CPU 底层指令实现。</li><li>CLH队列：带头结点的双向非循环链表(如下图所示)：<img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240522193349.png" alt="image.png"></li></ul></li><li>ReentrantLock的基本实现可以概括为：先通过CAS尝试获取锁。如果此时已经有线程占据了锁，那就加入CLH队列并且被挂起。当锁被释放之后，排在CLH队列队首的线程会被唤醒，然后CAS再次尝试获取锁。 <ul><li>非公平锁：如果同时还有另一个线程进来尝试获取，那么有可能会让这个线程抢先获取</li><li>公平锁：如果同时还有另一个线程进来尝试获取，当它发现自己不是在队首的话，就会排到队尾，由队首的线程获取到锁。</li></ul></li><li>可重入锁 <ul><li>在尝试获取锁的时候，会先调用上面的方法。如果状态为0，则表明此时无人占有锁。此时尝试进行set，一旦成功，则成功占有锁。如果状态不为0，再判断是否是当前线程获取到锁。如果是的话，将状态+1，因为此时就是当前线程，所以不用CAS。这也就是可重入锁的实现原理</li></ul></li></ul></li><li>synchronized <ul><li>monitor <ul><li>每个对象都有一个锁，也就是监视器（monitor）。当monitor被占有时就表示它被锁定。线程执行monitorenter指令时尝试获取对象所对应的monitor的所有权，过程如下： <ul><li>如果monitor的进入数为0，则该线程进入monitor，然后将进入数设置为1，该线程即为monitor的所有者;</li><li>如果线程已经拥有了该monitor，只是重新进入，则进入monitor的进入数加1;</li><li>如果其他线程已经占用了monitor，则该线程进入阻塞状态，直到monitor的进入数为0，再重新尝试获取monitor的所有权</li></ul></li></ul></li></ul></li></ul></li></ul><p>利用操作系统层面的进程间通信原理来解决临界资源的抢占问题。</p><p>比较常见的一种方法便是使用信号量（Semaphores）。</p><p>信号量在POSIX标准下有两种，分别为有名信号量和无名信号量。无名信号量通常保存在共享内存中，而有名信号量是与一个特定的文件名称相关联。信号量是一个整数变量，有计数信号量和二值信号量两种。对信号量的操作，主要是P操作（wait）和V操作（signal）。</p><ul><li>P操作：先检查信号量的大小，若值大于零，则将信号量减1，同时进程获得共享资源的访问权限，继续执行；若小于或者等于零，则该进程被阻塞后，进入等待队列。</li><li>V操作：该操作将信号量的值加1，如果有进程阻塞着等待该信号量，那么其中一个进程将被唤醒。</li></ul><p>后面自己看一下这篇文章，感觉有价值内容一般</p><p>下面内容是 chatgpt 生成</p><h2 id="semaphore" tabindex="-1">Semaphore <a class="header-anchor" href="#semaphore" aria-label="Permalink to &quot;Semaphore&quot;">​</a></h2><p>sha mo fo er</p><p><code>Semaphore</code> 是 Java 中用于控制对资源访问的并发控制工具。它类似于计数器，用于控制同时访问某一特定资源的线程数量。<code>Semaphore</code> 提供了两种操作：获取（acquire）和释放（release）。获取操作会阻塞线程直到许可可用，而释放操作会增加可用许可的数量。</p><h3 id="semaphore-的基本概念" tabindex="-1"><code>Semaphore</code> 的基本概念 <a class="header-anchor" href="#semaphore-的基本概念" aria-label="Permalink to &quot;\`Semaphore\` 的基本概念&quot;">​</a></h3><ul><li><strong>计数器</strong>：<code>Semaphore</code> 内部有一个计数器，表示当前可用的许可数量。</li><li><strong>获取许可</strong>：线程通过调用 <code>acquire()</code> 方法获取许可，如果当前许可数为 0，线程会被阻塞直到有许可可用。</li><li><strong>释放许可</strong>：线程通过调用 <code>release()</code> 方法释放许可，增加可用许可数量。</li></ul><h3 id="semaphore-的构造方法" tabindex="-1"><code>Semaphore</code> 的构造方法 <a class="header-anchor" href="#semaphore-的构造方法" aria-label="Permalink to &quot;\`Semaphore\` 的构造方法&quot;">​</a></h3><p><code>Semaphore</code> 提供了两种主要的构造方法：</p><ul><li><code>Semaphore(int permits)</code>：创建一个具有给定许可数的 <code>Semaphore</code>。</li><li><code>Semaphore(int permits, boolean fair)</code>：创建一个具有给定许可数且公平的 <code>Semaphore</code>。如果 <code>fair</code> 为 <code>true</code>，则线程将以 FIFO（先进先出）的顺序获取许可。</li></ul><h3 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h3><p>以下是一些使用 <code>Semaphore</code> 的示例：</p><h4 id="_1-控制访问某一资源" tabindex="-1">1. 控制访问某一资源 <a class="header-anchor" href="#_1-控制访问某一资源" aria-label="Permalink to &quot;1. 控制访问某一资源&quot;">​</a></h4><p>假设我们有一个资源，只允许最多三个线程同时访问。我们可以使用 <code>Semaphore</code> 来控制对该资源的访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.concurrent.Semaphore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SemaphoreExample {</span></span>
<span class="line"><span>    private static final int MAX_PERMITS = 3;</span></span>
<span class="line"><span>    private static final Semaphore semaphore = new Semaphore(MAX_PERMITS);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>            new Thread(new Worker(semaphore)).start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Worker implements Runnable {</span></span>
<span class="line"><span>    private final Semaphore semaphore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Worker(Semaphore semaphore) {</span></span>
<span class="line"><span>        this.semaphore = semaphore;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 获取许可</span></span>
<span class="line"><span>            semaphore.acquire();</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; acquired a permit.&quot;);</span></span>
<span class="line"><span>            // 模拟资源访问</span></span>
<span class="line"><span>            Thread.sleep(2000);</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; released a permit.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 释放许可</span></span>
<span class="line"><span>            semaphore.release();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-限制同时访问的线程数量" tabindex="-1">2. 限制同时访问的线程数量 <a class="header-anchor" href="#_2-限制同时访问的线程数量" aria-label="Permalink to &quot;2. 限制同时访问的线程数量&quot;">​</a></h4><p>在某些情况下，我们可能希望限制对某一块代码的同时访问的线程数量。例如，限制一次只能有两个线程访问某一段代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.concurrent.Semaphore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LimitedAccessExample {</span></span>
<span class="line"><span>    private static final int MAX_CONCURRENT_THREADS = 2;</span></span>
<span class="line"><span>    private static final Semaphore semaphore = new Semaphore(MAX_CONCURRENT_THREADS);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>            new Thread(new Task(semaphore)).start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Task implements Runnable {</span></span>
<span class="line"><span>    private final Semaphore semaphore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Task(Semaphore semaphore) {</span></span>
<span class="line"><span>        this.semaphore = semaphore;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 获取许可</span></span>
<span class="line"><span>            semaphore.acquire();</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; is performing a task.&quot;);</span></span>
<span class="line"><span>            // 模拟任务执行</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; has finished the task.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 释放许可</span></span>
<span class="line"><span>            semaphore.release();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="公平性" tabindex="-1">公平性 <a class="header-anchor" href="#公平性" aria-label="Permalink to &quot;公平性&quot;">​</a></h3><p>默认情况下，<code>Semaphore</code> 是非公平的，即无法保证先调用 <code>acquire</code> 的线程会先获取到许可。如果需要保证公平性，可以在创建 <code>Semaphore</code> 对象时指定：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Semaphore semaphore = new Semaphore(MAX_PERMITS, true);</span></span></code></pre></div><p>在这种情况下，<code>Semaphore</code> 会按 FIFO 的顺序分配许可，先请求许可的线程会先得到许可。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li><strong>控制并发访问</strong>：<code>Semaphore</code> 用于控制对共享资源的并发访问，通过设置许可数来限制同时访问的线程数量。</li><li><strong>获取和释放许可</strong>：线程通过 <code>acquire()</code> 方法获取许可，通过 <code>release()</code> 方法释放许可。</li><li><strong>公平性</strong>：可以通过构造方法设置 <code>Semaphore</code> 的公平性，以确保先请求许可的线程先获得许可。</li></ul><p><code>Semaphore</code> 在并发编程中非常有用，适用于限制对资源的访问、实现限流等场景。</p><p>理解和掌握 <code>Semaphore</code> 的使用，对于编写高效、安全的并发程序至关重要。</p>`,35)])])}const u=s(l,[["render",i]]);export{m as __pageData,u as default};
