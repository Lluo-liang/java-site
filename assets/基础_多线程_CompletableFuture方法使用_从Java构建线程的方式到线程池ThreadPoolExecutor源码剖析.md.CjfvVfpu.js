import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析","description":"","frontmatter":{"title":"从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析","excerpt":"从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析","date":"2023-12-21 20:54:14","updated":"2023-12-21 20:54:14"},"headers":[],"relativePath":"基础/多线程/CompletableFuture方法使用/从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析.md","filePath":"基础/多线程/CompletableFuture方法使用/从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析.md","lastUpdated":null}'),l={name:"基础/多线程/CompletableFuture方法使用/从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析.md"};function i(c,n,o,t,r,d){return a(),p("div",null,[...n[0]||(n[0]=[e(`<blockquote><p>大纲</p></blockquote><ul><li>Java 构建线程的方式</li><li>线程池的7个参数</li><li>线程池的执行流程</li><li>线程池属性标识</li><li>线程池的 execute 方法执行</li><li>Worker 的封装</li></ul><blockquote><p>从Java构建线程的方式到线程池ThreadPoolExecutor源码剖析</p></blockquote><h3 id="一、java-构建线程的方式-常识" tabindex="-1">一、Java 构建线程的方式（常识） <a class="header-anchor" href="#一、java-构建线程的方式-常识" aria-label="Permalink to &quot;一、Java 构建线程的方式（常识）&quot;">​</a></h3><ul><li>继承 Thread</li><li>实现 Runnable</li><li>实现 Callable</li><li>线程池方式（Java提供了构建线程池的方式） <ul><li>Java提供了 Executors 可以去创建（规范中不允许使用这种方式创建线程池，这种方式对线程的控制粒度比较低）</li><li>推荐手动创建线程池</li></ul></li></ul><h3 id="二、线程池的7个参数-常识" tabindex="-1">二、线程池的7个参数（常识） <a class="header-anchor" href="#二、线程池的7个参数-常识" aria-label="Permalink to &quot;二、线程池的7个参数（常识）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public ThreadPoolExecutor(int corePoolSize,   //核心线程池</span></span>
<span class="line"><span>                          int maximumPoolSize,   //最大线程数</span></span>
<span class="line"><span>                          long keepAliveTime,    //最大空闲时间</span></span>
<span class="line"><span>                          TimeUnit unit,         //时间单位</span></span>
<span class="line"><span>                          BlockingQueue&lt;Runnable&gt; workQueue,  //阻塞队列</span></span>
<span class="line"><span>                          ThreadFactory threadFactory,        //线程工厂</span></span>
<span class="line"><span>                          RejectedExecutionHandler handler) {   //拒绝策略</span></span></code></pre></div><h3 id="三、线程池的执行流程-常识" tabindex="-1">三、线程池的执行流程（常识） <a class="header-anchor" href="#三、线程池的执行流程-常识" aria-label="Permalink to &quot;三、线程池的执行流程（常识）&quot;">​</a></h3><blockquote><p>线程池执行流程</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231221203519.png" alt="image.png"></p><p>为什么要先进阻塞再去尝试创建非核心线程：</p><p>饭店（线程池） - 厨子（线程） - 人多先排队（阻塞队列）- 招厨子（创建最大线程数） - 今日客满（拒绝策略）</p><h3 id="四、线程池属性标识" tabindex="-1">四、线程池属性标识 <a class="header-anchor" href="#四、线程池属性标识" aria-label="Permalink to &quot;四、线程池属性标识&quot;">​</a></h3><h4 id="_4-1-线程池属性" tabindex="-1">4.1 线程池属性 <a class="header-anchor" href="#_4-1-线程池属性" aria-label="Permalink to &quot;4.1 线程池属性&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//ctl 是一个int 类型的数值，表达了两个意思，1：声明当前线程池的状态, 2: 声明线程池中的线程数</span></span>
<span class="line"><span>//高3位是：线程池状态</span></span>
<span class="line"><span>//低29位是： 线程池中的线程个数</span></span>
<span class="line"><span>private final AtomicInteger ctl = new AtomicInteger(ctlOf(RUNNING, 0));  </span></span>
<span class="line"><span>private static final int COUNT_BITS = Integer.SIZE - 3;  //29，方便后面做位运算</span></span>
<span class="line"><span>private static final int CAPACITY   = (1 &lt;&lt; COUNT_BITS) - 1;   //通过位运算得出最大容量</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// runState is stored in the high-order bits  </span></span>
<span class="line"><span>//线程池状态</span></span>
<span class="line"><span>private static final int RUNNING    = -1 &lt;&lt; COUNT_BITS;  //111 代表线程池为RUNNING，代表正常接收任务</span></span>
<span class="line"><span>private static final int SHUTDOWN   =  0 &lt;&lt; COUNT_BITS;  //000 代表线程池为\`SHUTDOWN\`状态，不接收新任务，但是内部还会处理阻塞队列中的任务，正在进行的任务也正常处理</span></span>
<span class="line"><span>private static final int STOP       =  1 &lt;&lt; COUNT_BITS;  //001  代表线程池为\`STOP\`状态，不接收新任务，也不去处理阻塞队列中的任务，同时会中断正在执行的任务</span></span>
<span class="line"><span>private static final int TIDYING    =  2 &lt;&lt; COUNT_BITS;  //010 代表线程池为\`TIDYING\`状态，过渡的状态，代表当前线程池即将Game Over</span></span>
<span class="line"><span>private static final int TERMINATED =  3 &lt;&lt; COUNT_BITS;  //011 代表线程池为\`TERMINATED\`，要执行terminated(),真的凉凉了</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// Packing and unpacking ctl  </span></span>
<span class="line"><span>private static int runStateOf(int c)     { return c &amp; ~CAPACITY; }  //得到线程池的状态</span></span>
<span class="line"><span>private static int workerCountOf(int c)  { return c &amp; CAPACITY; }   //得到当前线程池的线程数量</span></span></code></pre></div><p><code>ThreadPoolExecutor</code>类使用了一些高级的位操作来高效地管理线程池的状态和工作线程的数量。</p><blockquote><p>核心变量解释</p></blockquote><ul><li><code>AtomicInteger ctl</code><ul><li>实际它是使用了 <code>AtomicInteger ctl</code> 这个变量来进行存储线程池的状态和线程数。原子操作保证了线程安全，即在多线程环境下，对这个变量的修改是原子性的，避免了竞态条件。</li><li>高3位是：线程池状态</li><li>低29位是： 线程池中的线程个数</li></ul></li><li><code>COUNT_BITS</code><ul><li>用于计算和存储线程数量的位数。它是<code>Integer.SIZE</code>（Java中整数的位数，通常是32位）减去3。</li><li>29，方便后面做位运算;3位用于表示线程池状态</li></ul></li><li><code>CAPACITY</code><ul><li>表示的最大线程数。它通过将1左移<code>COUNT_BITS</code>位然后减1来计算。</li><li>类似 100000000 - 1 = 011111111111 这种，是常见的位运算的一种表示方式</li></ul></li></ul><blockquote><p>线程池状态</p></blockquote><p>线程池的状态被存储在<code>ctl</code>的高位。这些状态包括：</p><ul><li><strong><code>RUNNING</code></strong><ul><li>111</li><li>线程池可以接受新任务，并且也可以处理排队的任务。</li></ul></li><li><strong><code>SHUTDOWN</code></strong><ul><li>000</li><li>不接受新任务，但是可以处理排队的任务。</li></ul></li><li><strong><code>STOP</code></strong><ul><li>001</li><li>不接受新任务，不处理排队的任务，并且中断正在进行的任务。</li></ul></li><li><strong><code>TIDYING</code></strong><ul><li>010</li><li>所有任务都已终止，workerCount（活动线程数）为零，线程池正在转换到状态<code>TERMINATED</code>。</li></ul></li><li><strong><code>TERMINATED</code></strong><ul><li>011</li><li><code>terminated()</code>方法已经完成</li></ul></li></ul><blockquote><p>位操作方法</p></blockquote><ul><li><strong><code>runStateOf(int c)</code></strong>: 提取<code>ctl</code>中的状态部分。</li><li><strong><code>workerCountOf(int c)</code></strong>: 提取<code>ctl</code>中的工作线程数部分。</li><li><strong><code>ctlOf(int rs, int wc)</code></strong>: 将运行状态和工作线程数组合成一个<code>ctl</code>值</li></ul><h4 id="_4-2-线程池状态变化" tabindex="-1">4.2 线程池状态变化 <a class="header-anchor" href="#_4-2-线程池状态变化" aria-label="Permalink to &quot;4.2 线程池状态变化&quot;">​</a></h4><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20231222005453.png" alt="image.png"></p><h3 id="五、线程池的-execute-方法执行" tabindex="-1">五、线程池的 execute 方法执行 <a class="header-anchor" href="#五、线程池的-execute-方法执行" aria-label="Permalink to &quot;五、线程池的 execute 方法执行&quot;">​</a></h3><p>在Java的<code>ThreadPoolExecutor</code>类中，<code>execute</code>方法是用于提交任务的关键方法。</p><p>它决定如何将一个新的<code>Runnable</code>任务添加到线程池中。</p><h4 id="execute-方法" tabindex="-1">execute 方法 <a class="header-anchor" href="#execute-方法" aria-label="Permalink to &quot;execute 方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void execute(Runnable command) {</span></span>
<span class="line"><span>    // 检查提交的任务不是null</span></span>
<span class="line"><span>    if (command == null)</span></span>
<span class="line"><span>        throw new NullPointerException();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取当前线程池状态和工作线程数</span></span>
<span class="line"><span>    int c = ctl.get();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果当前工作线程数小于核心线程数</span></span>
<span class="line"><span>    if (workerCountOf(c) &lt; corePoolSize) {</span></span>
<span class="line"><span>        // 尝试添加一个新工作线程来执行这个任务</span></span>
<span class="line"><span>        if (addWorker(command, true))</span></span>
<span class="line"><span>            return; // 如果成功，直接返回</span></span>
<span class="line"><span>        // 如果添加工作线程失败，重新获取线程池状态</span></span>
<span class="line"><span>        c = ctl.get();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果线程池处于运行状态，且任务能被添加到队列中</span></span>
<span class="line"><span>    if (isRunning(c) &amp;&amp; workQueue.offer(command)) {</span></span>
<span class="line"><span>        // 重新检查线程池状态</span></span>
<span class="line"><span>        int recheck = ctl.get();</span></span>
<span class="line"><span>        // 如果线程池不再运行，并且能从队列中移除任务，则拒绝任务</span></span>
<span class="line"><span>        if (!isRunning(recheck) &amp;&amp; remove(command))</span></span>
<span class="line"><span>            reject(command);</span></span>
<span class="line"><span>        // 如果没有活动的工作线程，则添加一个新的工作线程</span></span>
<span class="line"><span>        else if (workerCountOf(recheck) == 0)</span></span>
<span class="line"><span>            addWorker(null, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 如果任务不能被添加到队列，尝试创建一个新工作线程来执行这个任务</span></span>
<span class="line"><span>    else if (!addWorker(command, false))</span></span>
<span class="line"><span>        reject(command); // 如果创建失败，则拒绝任务</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实现步骤：</p><ol><li><strong>参数检查</strong>: 首先检查传入的<code>Runnable</code>对象不是<code>null</code>。</li><li><strong>工作线程数量检查</strong>: 如果当前工作线程的数量小于核心线程数<code>corePoolSize</code>，尝试直接创建一个新的工作线程来执行任务。</li><li><strong>任务队列处理</strong>: 如果当前线程数已经达到或超过核心线程数，或者新工作线程的创建失败，则尝试将任务加入到等待队列中。</li><li><strong>状态重新检查</strong>: 在成功将任务加入队列后，需要再次检查线程池的状态，确保线程池仍在运行。如果线程池状态改变（例如，被关闭了），则尝试移除刚加入的任务，并执行拒绝策略。</li><li><strong>无活动线程处理</strong>: 如果任务被成功加入队列，但没有活动的工作线程可以处理队列中的任务，这时会尝试创建一个新的工作线程。</li><li><strong>拒绝策略</strong>: 如果无法将任务加入队列，且无法创建新的工作线程，最后的选项是拒绝任务。</li></ol><h4 id="addworker-方法" tabindex="-1">addWorker 方法 <a class="header-anchor" href="#addworker-方法" aria-label="Permalink to &quot;addWorker 方法&quot;">​</a></h4><p>在Java的<code>ThreadPoolExecutor</code>类中，<code>addWorker</code>方法是用于向线程池中添加新的工作线程的关键方法。</p><p>它在处理新任务或者需要增加线程池中的线程数量时被调用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>private boolean addWorker(Runnable firstTask, boolean core) {</span></span>
<span class="line"><span>    retry:</span></span>
<span class="line"><span>    for (;;) {</span></span>
<span class="line"><span>        // 获取当前线程池的控制状态</span></span>
<span class="line"><span>        int c = ctl.get();</span></span>
<span class="line"><span>        // 获取运行状态</span></span>
<span class="line"><span>        int rs = runStateOf(c);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 检查线程池的状态是否允许添加新的工作线程</span></span>
<span class="line"><span>        // 仅在以下情况返回false：</span></span>
<span class="line"><span>        // 1. 线程池状态为SHUTDOWN以上（不包括SHUTDOWN）且不满足以下所有条件：</span></span>
<span class="line"><span>        //    - 状态为SHUTDOWN</span></span>
<span class="line"><span>        //    - firstTask为null</span></span>
<span class="line"><span>        //    - 工作队列不为空</span></span>
<span class="line"><span>        if (rs &gt;= SHUTDOWN &amp;&amp;</span></span>
<span class="line"><span>            !(rs == SHUTDOWN &amp;&amp;</span></span>
<span class="line"><span>              firstTask == null &amp;&amp;</span></span>
<span class="line"><span>              !workQueue.isEmpty()))</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 无限循环，尝试增加工作线程的数量</span></span>
<span class="line"><span>        for (;;) {</span></span>
<span class="line"><span>            int wc = workerCountOf(c);</span></span>
<span class="line"><span>            // 检查当前工作线程数是否超过了最大容量或设置的阈值</span></span>
<span class="line"><span>            // 如果超过容量或者超过corePoolSize/maximumPoolSize，则返回false</span></span>
<span class="line"><span>            if (wc &gt;= CAPACITY ||</span></span>
<span class="line"><span>                wc &gt;= (core ? corePoolSize : maximumPoolSize))</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            // 使用CAS操作增加工作线程计数</span></span>
<span class="line"><span>            // 如果CAS成功，跳出retry标签，继续向下执行</span></span>
<span class="line"><span>            if (compareAndIncrementWorkerCount(c))</span></span>
<span class="line"><span>                break retry;</span></span>
<span class="line"><span>            // 如果CAS失败，重新读取ctl</span></span>
<span class="line"><span>            c = ctl.get(); </span></span>
<span class="line"><span>            // 如果运行状态发生变化，重新开始外层循环</span></span>
<span class="line"><span>            if (runStateOf(c) != rs)</span></span>
<span class="line"><span>                continue retry;</span></span>
<span class="line"><span>            // 如果CAS失败但运行状态没有变化，继续尝试内层循环的CAS操作</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加工作线程的过程</span></span>
<span class="line"><span>    boolean workerStarted = false;</span></span>
<span class="line"><span>    boolean workerAdded = false;</span></span>
<span class="line"><span>    Worker w = null;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 创建新的工作线程</span></span>
<span class="line"><span>        w = new Worker(firstTask);</span></span>
<span class="line"><span>        final Thread t = w.thread;</span></span>
<span class="line"><span>        // 如果成功创建线程</span></span>
<span class="line"><span>        if (t != null) {</span></span>
<span class="line"><span>            final ReentrantLock mainLock = this.mainLock;</span></span>
<span class="line"><span>            mainLock.lock();</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                // 在持有锁的情况下再次检查线程池状态</span></span>
<span class="line"><span>                int rs = runStateOf(ctl.get());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 如果线程池状态允许添加工作线程，则将其添加到工作集合中</span></span>
<span class="line"><span>                if (rs &lt; SHUTDOWN ||</span></span>
<span class="line"><span>                    (rs == SHUTDOWN &amp;&amp; firstTask == null)) {</span></span>
<span class="line"><span>                    // 检查线程是否已经启动（预防异常情况）</span></span>
<span class="line"><span>                    if (t.isAlive()) </span></span>
<span class="line"><span>                        throw new IllegalThreadStateException();</span></span>
<span class="line"><span>                    workers.add(w);</span></span>
<span class="line"><span>                    int s = workers.size();</span></span>
<span class="line"><span>                    // 更新记录的最大池大小</span></span>
<span class="line"><span>                    if (s &gt; largestPoolSize)</span></span>
<span class="line"><span>                        largestPoolSize = s;</span></span>
<span class="line"><span>                    workerAdded = true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                // 释放锁</span></span>
<span class="line"><span>                mainLock.unlock();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 如果成功添加工作线程，则启动该线程</span></span>
<span class="line"><span>            if (workerAdded) {</span></span>
<span class="line"><span>                t.start();</span></span>
<span class="line"><span>                workerStarted = true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        // 如果工作线程未能成功启动，处理失败情况</span></span>
<span class="line"><span>        if (!workerStarted)</span></span>
<span class="line"><span>            addWorkerFailed(w);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 返回工作线程是否成功启动</span></span>
<span class="line"><span>    return workerStarted;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实现步骤：</p><ol><li><strong>状态检查</strong>: 首先检查线程池的状态，确定是否可以添加新的工作线程。如果线程池正在关闭，并且条件不允许添加工作线程（例如，任务队列为空），则直接返回<code>false</code>。</li><li><strong>增加工作线程数</strong>: 使用一个无限循环，通过CAS（Compare-And-Swap）操作尝试增加工作线程计数。如果CAS操作成功，跳出循环；如果失败，重新尝试。</li><li><strong>创建和启动工作线程</strong>: 创建一个新的<code>Worker</code>对象，并尝试启动其线程。这个过程涉及获取一个全局锁以保证线程安全。</li><li><strong>线程池状态再次检查</strong>: 在锁内部再次检查线程池的状态，以确保在获取锁的过程中状态没有改变。</li><li><strong>添加到工作集合</strong>: 如果一切正常，将新的<code>Worker</code>添加到工作线程集合中，并更新记录的最大池大小。</li><li><strong>启动线程</strong>: 尝试启动线程。如果启动成功，返回<code>true</code>；否则，在<code>finally</code>块中处理启动失败的情况。</li></ol><p><code>addWorker</code>方法的实现体现了线程池如何有效地管理线程的创建和添加。</p><p>使用CAS操作保证了线程安全，而双重检查（在方法开始和持有锁时）确保了即使在高并发的情况下也能正确地管理线程池的状态。</p><h3 id="六、worker-的封装" tabindex="-1">六、Worker 的封装 <a class="header-anchor" href="#六、worker-的封装" aria-label="Permalink to &quot;六、Worker 的封装&quot;">​</a></h3><p>在Java的<code>ThreadPoolExecutor</code>类中，<code>Worker</code>是一个关键的内部类，它封装了线程池中的工作线程的行为和属性。</p><p><code>Worker</code>类继承自<code>AbstractQueuedSynchronizer</code>，是一个用于构建锁和其他同步组件的框架</p><h4 id="threadpoolexecutor内部类worker的构造函数" tabindex="-1"><code>ThreadPoolExecutor</code>内部类<code>Worker</code>的构造函数 <a class="header-anchor" href="#threadpoolexecutor内部类worker的构造函数" aria-label="Permalink to &quot;\`ThreadPoolExecutor\`内部类\`Worker\`的构造函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Worker(Runnable firstTask) {</span></span>
<span class="line"><span>    // 设置Worker的状态为-1，暂时阻止线程中断</span></span>
<span class="line"><span>    // 这是为了防止在Worker真正开始运行前被中断</span></span>
<span class="line"><span>    setState(-1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将传入的任务（可能为null）设置为Worker的第一个任务</span></span>
<span class="line"><span>    // 这个任务将是Worker创建后执行的第一个任务</span></span>
<span class="line"><span>    this.firstTask = firstTask;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用线程池的线程工厂创建一个新线程，并将当前Worker作为任务传递给这个新线程</span></span>
<span class="line"><span>    // 这里，Worker自身实际上是一个Runnable，因为它实现了Runnable接口</span></span>
<span class="line"><span>    this.thread = getThreadFactory().newThread(this);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代码分析：</p><ol><li><strong>暂时禁用中断</strong>: <code>setState(-1)</code>设置Worker的状态，这个状态用于控制线程的中断。设置为-1意味着在<code>runWorker</code>方法真正开始执行之前，线程不应被中断。这是一个预防措施，以确保Worker在开始执行其任务前不会被意外中断。</li><li><strong>设置第一个任务</strong>: <code>this.firstTask = firstTask</code>将传入的任务赋值给Worker的<code>firstTask</code>属性。这个任务是Worker将要执行的第一个任务。如果这个值是<code>null</code>，Worker将从线程池的任务队列中获取任务。</li><li><strong>创建新线程</strong>: <code>this.thread = getThreadFactory().newThread(this)</code>调用线程工厂来创建一个新线程，并将当前Worker作为运行任务传递。由于Worker实现了<code>Runnable</code>接口，它可以被线程直接执行。线程工厂是线程池的一个组成部分，用于定制线程创建过程（例如设置线程名称、优先级等）。</li></ol><h4 id="runworker-方法" tabindex="-1">runWorker 方法 <a class="header-anchor" href="#runworker-方法" aria-label="Permalink to &quot;runWorker 方法&quot;">​</a></h4><p>定义了线程池中的工作线程（<code>Worker</code>）如何执行任务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>final void runWorker(Worker w) {</span></span>
<span class="line"><span>    // 获取当前执行这个方法的线程</span></span>
<span class="line"><span>    Thread wt = Thread.currentThread();</span></span>
<span class="line"><span>    // 从Worker获取第一个任务</span></span>
<span class="line"><span>    Runnable task = w.firstTask;</span></span>
<span class="line"><span>    // 设置Worker的第一个任务为null</span></span>
<span class="line"><span>    w.firstTask = null;</span></span>
<span class="line"><span>    // 释放Worker上的锁，允许中断</span></span>
<span class="line"><span>    w.unlock(); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 标记是否异常完成任务</span></span>
<span class="line"><span>    boolean completedAbruptly = true;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 当有任务执行或者能从任务队列中获取到任务时，继续循环</span></span>
<span class="line"><span>        while (task != null || (task = getTask()) != null) {</span></span>
<span class="line"><span>            // 锁定Worker，以开始执行任务</span></span>
<span class="line"><span>            w.lock();</span></span>
<span class="line"><span>            // 如果线程池正在停止，确保线程被中断；</span></span>
<span class="line"><span>            // 如果不是，则确保线程不被中断。这需要在第二种情况下重新检查以处理shutdownNow竞争状态</span></span>
<span class="line"><span>            if ((runStateAtLeast(ctl.get(), STOP) ||</span></span>
<span class="line"><span>                 (Thread.interrupted() &amp;&amp;</span></span>
<span class="line"><span>                  runStateAtLeast(ctl.get(), STOP))) &amp;&amp;</span></span>
<span class="line"><span>                !wt.isInterrupted())</span></span>
<span class="line"><span>                wt.interrupt();</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                // 在执行任务前的钩子方法</span></span>
<span class="line"><span>                beforeExecute(wt, task);</span></span>
<span class="line"><span>                Throwable thrown = null;</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    // 运行任务</span></span>
<span class="line"><span>                    task.run();</span></span>
<span class="line"><span>                } catch (RuntimeException x) {</span></span>
<span class="line"><span>                    thrown = x; throw x;</span></span>
<span class="line"><span>                } catch (Error x) {</span></span>
<span class="line"><span>                    thrown = x; throw x;</span></span>
<span class="line"><span>                } catch (Throwable x) {</span></span>
<span class="line"><span>                    thrown = x; throw new Error(x);</span></span>
<span class="line"><span>                } finally {</span></span>
<span class="line"><span>                    // 在执行任务后的钩子方法</span></span>
<span class="line"><span>                    afterExecute(task, thrown);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                // 任务执行完毕，清理工作</span></span>
<span class="line"><span>                task = null;</span></span>
<span class="line"><span>                w.completedTasks++;</span></span>
<span class="line"><span>                w.unlock();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 如果正常退出循环，设置completedAbruptly为false</span></span>
<span class="line"><span>        completedAbruptly = false;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        // 处理Worker退出</span></span>
<span class="line"><span>        processWorkerExit(w, completedAbruptly);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行步骤：</p><ol><li><strong>初始化</strong>: 首先获取当前线程和Worker中的第一个任务。解锁Worker以允许线程中断。</li><li><strong>任务执行循环</strong>: 方法进入一个循环，不断执行任务。如果Worker的第一个任务为空，则尝试从线程池的任务队列中获取新的任务。</li><li><strong>中断管理</strong>: 在每次任务执行前，检查线程池的状态，如果需要，根据线程池的状态来决定是否中断当前线程。</li><li><strong>任务执行</strong>: 实际执行任务，并处理任何可能抛出的异常。同时，执行钩子方法<code>beforeExecute</code>和<code>afterExecute</code>，这些方法可以用于在任务执行前后做一些准备和清理工作。</li><li><strong>任务完成后处理</strong>: 更新完成任务的计数，清理变量，解锁Worker。</li><li><strong>异常处理与退出</strong>: 如果任务执行过程中发生异常导致线程意外结束，<code>completedAbruptly</code>标记会保持为<code>true</code>。在最后的<code>finally</code>块中，调用<code>processWorkerExit</code>来处理Worker的退出，这可能包括替换这个Worker或者根据当前线程池状态进行其他处理。</li></ol><hr><p>参考</p><ul><li><a href="https://www.bilibili.com/video/BV1244y1n7bz" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1244y1n7bz</a></li></ul>`,55)])])}const k=s(l,[["render",i]]);export{h as __pageData,k as default};
