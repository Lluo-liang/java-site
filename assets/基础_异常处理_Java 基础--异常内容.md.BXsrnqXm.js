import{_ as a,o as n,c as e,am as p}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Java 基础--异常内容","description":"","frontmatter":{"title":"Java 基础--异常内容"},"headers":[],"relativePath":"基础/异常处理/Java 基础--异常内容.md","filePath":"基础/异常处理/Java 基础--异常内容.md","lastUpdated":null}'),t={name:"基础/异常处理/Java 基础--异常内容.md"};function l(i,s,o,c,r,d){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h3 id="java-异常处理机制" tabindex="-1">Java 异常处理机制 <a class="header-anchor" href="#java-异常处理机制" aria-label="Permalink to &quot;Java 异常处理机制&quot;">​</a></h3><p>在 Java 开发中，<strong>异常处理机制</strong>不仅是编程的基础，更是提高系统健壮性与可维护性的关键。</p><hr><h2 id="一、java-异常体系概览" tabindex="-1">一、Java 异常体系概览 <a class="header-anchor" href="#一、java-异常体系概览" aria-label="Permalink to &quot;一、Java 异常体系概览&quot;">​</a></h2><p>Java 的异常体系以 <code>Throwable</code> 为根基，其核心结构如图所示：</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250109003604.png" alt="image.png"></p><h3 id="_1-1-throwable-分类" tabindex="-1">1.1 Throwable 分类 <a class="header-anchor" href="#_1-1-throwable-分类" aria-label="Permalink to &quot;1.1 Throwable 分类&quot;">​</a></h3><p><code>Throwable</code> 包括两个主要分支：</p><ul><li><strong>Error</strong> 系统级问题，几乎无法通过程序恢复。例如： <ul><li><code>OutOfMemoryError</code></li><li><code>StackOverflowError</code></li><li><code>NoClassDefFoundError</code></li></ul></li><li><strong>Exception</strong> 应用层面的问题，可通过程序逻辑进行处理。它又进一步分为： <ul><li><strong>Checked Exception</strong>：必须通过 <code>try-catch</code> 或 <code>throws</code> 显式处理的异常。</li><li><strong>Unchecked Exception</strong>：也称运行时异常，编译器不会强制要求显式处理。这些通常是代码逻辑错误。</li></ul></li></ul><hr><blockquote><p>Throwable 类常用方法</p></blockquote><ul><li><code>String getMessage()</code>: 返回异常发生时的详细信息</li><li><code>String toString()</code>: 返回异常发生时的简要描述</li><li><code>String getLocalizedMessage()</code>: 返回异常对象的本地化信息。使用 <code>Throwable</code> 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 <code>getMessage()</code>返回的结果相同</li><li><code>void printStackTrace()</code>: 在控制台上打印 <code>Throwable</code> 对象封装的异常信息</li></ul><hr><h3 id="_1-2-checked-与-unchecked-的对比" tabindex="-1">1.2 Checked 与 Unchecked 的对比 <a class="header-anchor" href="#_1-2-checked-与-unchecked-的对比" aria-label="Permalink to &quot;1.2 Checked 与 Unchecked 的对比&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>Checked Exception</th><th>Unchecked Exception</th></tr></thead><tbody><tr><td><strong>分类</strong></td><td><code>Exception</code>（排除 <code>RuntimeException</code>）</td><td><code>RuntimeException</code> 及其子类</td></tr><tr><td><strong>编译检查</strong></td><td>是，必须显式处理</td><td>否，编译器不会强制处理</td></tr><tr><td><strong>典型场景</strong></td><td>I/O 操作（<code>IOException</code>）、SQL 错误等</td><td><code>NullPointerException</code>、<code>ArrayIndexOutOfBoundsException</code></td></tr><tr><td><strong>处理方式</strong></td><td>捕获或抛出（<code>try-catch</code> 或 <code>throws</code>）</td><td>通常是代码修复，少量情况下捕获处理</td></tr></tbody></table><p><code>RuntimeException</code> 及其子类都统称为非受检查异常，常见的有：</p><ul><li><code>NullPointerException</code>(空指针错误)</li><li><code>IllegalArgumentException</code>(参数错误比如方法入参类型错误)</li><li><code>NumberFormatException</code>（字符串转换为数字格式错误，<code>IllegalArgumentException</code>的子类）</li><li><code>ArrayIndexOutOfBoundsException</code>（数组越界错误）</li><li><code>ClassCastException</code>（类型转换错误）</li><li><code>ArithmeticException</code>（算术错误）</li><li><code>SecurityException</code> （安全错误比如权限不够）</li><li><code>UnsupportedOperationException</code>(不支持的操作错误比如重复创建同一用户)</li><li>……</li></ul><hr><h2 id="二、java-异常处理基础" tabindex="-1">二、Java 异常处理基础 <a class="header-anchor" href="#二、java-异常处理基础" aria-label="Permalink to &quot;二、Java 异常处理基础&quot;">​</a></h2><p>Java 提供了<strong>两种异常处理方式</strong>：<strong>捕获异常</strong> 和 <strong>抛出异常</strong>。</p><h3 id="_2-1-try-catch-finally-机制" tabindex="-1">2.1 try-catch-finally 机制 <a class="header-anchor" href="#_2-1-try-catch-finally-机制" aria-label="Permalink to &quot;2.1 try-catch-finally 机制&quot;">​</a></h3><ul><li><strong><code>try</code> 块</strong>：用于捕获可能产生异常的代码。其后可接零个或多个 <code>catch</code> 块，如果没有 <code>catch</code> 块，则必须跟一个 <code>finally</code> 块</li><li><strong><code>catch</code> 块</strong>：用于处理捕获的具体异常类型。</li><li><strong><code>finally</code> 块</strong>：无论是否捕获到异常，总会执行的代码块，比如资源释放。当在 <code>try</code> 块或 <code>catch</code> 块中遇到 <code>return</code> 语句时，<code>finally</code> 语句块将在方法返回之前被执行。</li></ul><h4 id="示例代码与解析" tabindex="-1">示例代码与解析： <a class="header-anchor" href="#示例代码与解析" aria-label="Permalink to &quot;示例代码与解析：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    System.out.println(&quot;Start&quot;);</span></span>
<span class="line"><span>    int result = 10 / 0; // ArithmeticException</span></span>
<span class="line"><span>} catch (ArithmeticException e) {</span></span>
<span class="line"><span>    System.out.println(&quot;Caught Exception: &quot; + e.getMessage());</span></span>
<span class="line"><span>} finally {</span></span>
<span class="line"><span>    System.out.println(&quot;Finally Block Executed&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>输出结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start</span></span>
<span class="line"><span>Caught Exception: / by zero</span></span>
<span class="line"><span>Finally Block Executed</span></span></code></pre></div><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h4><ol><li><strong><code>finally</code> 中避免使用 <code>return</code>, 否则会覆盖 <code>try</code> 或 <code>catch</code> 块的返回值。</strong></li><li>如果程序因 <strong>系统级错误</strong>（如 <code>OutOfMemoryError</code>）导致终止，<code>finally</code> 块可能不会执行。</li></ol><hr><h4 id="举例" tabindex="-1">举例 <a class="header-anchor" href="#举例" aria-label="Permalink to &quot;举例&quot;">​</a></h4><p>举例1: **<code>finally</code> 中避免使用 <code>return</code>, 否则会覆盖 <code>try</code> 或 <code>catch</code> 块的返回值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public int getInt() {</span></span>
<span class="line"><span>    int i = 0;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        i = 1;</span></span>
<span class="line"><span>        return i;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        i = 2;</span></span>
<span class="line"><span>        return i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public int getInt2() {</span></span>
<span class="line"><span>    int i = 0;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        i = 1;</span></span>
<span class="line"><span>        return i;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        i = 2;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>Idea插件 jclasslibBytecodeViewer</p></blockquote><p>getInt() 字节码信息</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250109171120.png" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 0  iconst_0        // 将常量 0 压入操作数栈</span></span>
<span class="line"><span> 1  istore_1        // 将栈顶的值存储到局部变量表索引 1 中 (i = 0)</span></span>
<span class="line"><span> 2  iconst_1        // 将常量 1 压入操作数栈</span></span>
<span class="line"><span> 3  istore_1        // 将栈顶的值存储到局部变量表索引 1 中 (i = 1)</span></span>
<span class="line"><span> 4  iload_1         // 将局部变量 1 的值加载到操作数栈 (值为 1)</span></span>
<span class="line"><span> 5  istore_2        // 将栈顶的值存储到局部变量表索引 2 中</span></span>
<span class="line"><span> 6  iconst_2        // 将常量 2 压入操作数栈</span></span>
<span class="line"><span> 7  istore_1        // 将栈顶的值存储到局部变量表索引 1 中 (i = 2)</span></span>
<span class="line"><span> 8  iload_1         // 将局部变量 1 的值加载到操作数栈 (值为 2)</span></span>
<span class="line"><span> 9  ireturn         // 返回栈顶的值（最终返回的是 2）</span></span>
<span class="line"><span>10 astore_3         // 异常处理准备：将栈顶的异常对象存储在局部变量表索引 3 中</span></span>
<span class="line"><span>11 iconst_2         // 将常量 2 压入操作数栈</span></span>
<span class="line"><span>12 istore_1         // 将栈顶的值存储到局部变量表索引 1 中 (i = 2)</span></span>
<span class="line"><span>13 iload_1          // 将局部变量 1 的值加载到操作数栈 (值为 2)</span></span>
<span class="line"><span>14 ireturn          // 返回栈顶的值（在异常处理中最终返回 2）</span></span></code></pre></div><hr><h3 id="_2-2-try-with-resources-机制" tabindex="-1">2.2 try-with-resources 机制 <a class="header-anchor" href="#_2-2-try-with-resources-机制" aria-label="Permalink to &quot;2.2 try-with-resources 机制&quot;">​</a></h3><p>在 Java 7 引入的 <code>try-with-resources</code> 机制，是一种自动管理资源的语法糖。该机制要求资源实现 <code>AutoCloseable</code> 或 <code>Closeable</code> 接口。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try (FileInputStream in = new FileInputStream(&quot;test.txt&quot;)) {</span></span>
<span class="line"><span>    int data = in.read();</span></span>
<span class="line"><span>    System.out.println(data);</span></span>
<span class="line"><span>} catch (IOException e) {</span></span>
<span class="line"><span>    e.printStackTrace();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h4><ul><li>自动释放资源，无需显式调用 <code>close()</code> 方法。</li><li>减少因资源未关闭可能引起的内存泄漏。</li></ul><h4 id="举例-1" tabindex="-1">举例 <a class="header-anchor" href="#举例-1" aria-label="Permalink to &quot;举例&quot;">​</a></h4><p>打包多个文件为 zip 格式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> /**</span></span>
<span class="line"><span>     * 打包多个文件为 zip 格式</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param fileList 文件列表</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static void zipFile(List&lt;File&gt; fileList) {</span></span>
<span class="line"><span>        // 文件的压缩包路径</span></span>
<span class="line"><span>        String zipPath = OUT + &quot;/打包附件.zip&quot;;</span></span>
<span class="line"><span>        // 获取文件压缩包输出流</span></span>
<span class="line"><span>        try (OutputStream outputStream = new FileOutputStream(zipPath);</span></span>
<span class="line"><span>             CheckedOutputStream checkedOutputStream = new CheckedOutputStream(outputStream, new Adler32());</span></span>
<span class="line"><span>             ZipOutputStream zipOut = new ZipOutputStream(checkedOutputStream)) {</span></span>
<span class="line"><span>            for (File file : fileList) {</span></span>
<span class="line"><span>                // 获取文件输入流</span></span>
<span class="line"><span>                InputStream fileIn = new FileInputStream(file);</span></span>
<span class="line"><span>                // 使用 common.io中的IOUtils获取文件字节数组</span></span>
<span class="line"><span>                byte[] bytes = IOUtils.toByteArray(fileIn);</span></span>
<span class="line"><span>                // 写入数据并刷新</span></span>
<span class="line"><span>                zipOut.putNextEntry(new ZipEntry(file.getName()));</span></span>
<span class="line"><span>                zipOut.write(bytes, 0, bytes.length);</span></span>
<span class="line"><span>                zipOut.flush();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (FileNotFoundException e) {</span></span>
<span class="line"><span>            System.out.println(&quot;文件未找到&quot;);</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            System.out.println(&quot;读取文件异常&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>反编译后的代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public static void zipFile(List&lt;File&gt; fileList) {</span></span>
<span class="line"><span>        String zipPath = &quot;./打包附件.zip&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            OutputStream outputStream = new FileOutputStream(zipPath);</span></span>
<span class="line"><span>            Throwable var3 = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                CheckedOutputStream checkedOutputStream = new CheckedOutputStream(outputStream, new Adler32());</span></span>
<span class="line"><span>                Throwable var5 = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    ZipOutputStream zipOut = new ZipOutputStream(checkedOutputStream);</span></span>
<span class="line"><span>                    Throwable var7 = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    try {</span></span>
<span class="line"><span>                        Iterator var8 = fileList.iterator();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        while(var8.hasNext()) {</span></span>
<span class="line"><span>                            File file = (File)var8.next();</span></span>
<span class="line"><span>                            InputStream fileIn = new FileInputStream(file);</span></span>
<span class="line"><span>                            byte[] bytes = IOUtils.toByteArray(fileIn);</span></span>
<span class="line"><span>                            zipOut.putNextEntry(new ZipEntry(file.getName()));</span></span>
<span class="line"><span>                            zipOut.write(bytes, 0, bytes.length);</span></span>
<span class="line"><span>                            zipOut.flush();</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } catch (Throwable var60) {</span></span>
<span class="line"><span>                        var7 = var60;</span></span>
<span class="line"><span>                        throw var60;</span></span>
<span class="line"><span>                    } finally {</span></span>
<span class="line"><span>                        if (zipOut != null) {</span></span>
<span class="line"><span>                            if (var7 != null) {</span></span>
<span class="line"><span>                                try {</span></span>
<span class="line"><span>                                    zipOut.close();</span></span>
<span class="line"><span>                                } catch (Throwable var59) {</span></span>
<span class="line"><span>                                    var7.addSuppressed(var59);</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            } else {</span></span>
<span class="line"><span>                                zipOut.close();</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } catch (Throwable var62) {</span></span>
<span class="line"><span>                    var5 = var62;</span></span>
<span class="line"><span>                    throw var62;</span></span>
<span class="line"><span>                } finally {</span></span>
<span class="line"><span>                    if (checkedOutputStream != null) {</span></span>
<span class="line"><span>                        if (var5 != null) {</span></span>
<span class="line"><span>                            try {</span></span>
<span class="line"><span>                                checkedOutputStream.close();</span></span>
<span class="line"><span>                            } catch (Throwable var58) {</span></span>
<span class="line"><span>                                var5.addSuppressed(var58);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            checkedOutputStream.close();</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (Throwable var64) {</span></span>
<span class="line"><span>                var3 = var64;</span></span>
<span class="line"><span>                throw var64;</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                if (outputStream != null) {</span></span>
<span class="line"><span>                    if (var3 != null) {</span></span>
<span class="line"><span>                        try {</span></span>
<span class="line"><span>                            outputStream.close();</span></span>
<span class="line"><span>                        } catch (Throwable var57) {</span></span>
<span class="line"><span>                            var3.addSuppressed(var57);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        outputStream.close();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (FileNotFoundException var66) {</span></span>
<span class="line"><span>            System.out.println(&quot;文件未找到&quot;);</span></span>
<span class="line"><span>        } catch (IOException var67) {</span></span>
<span class="line"><span>            System.out.println(&quot;读取文件异常&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>从反编辑代码中，可以看到：</p><p><code>try-with-resources</code> 声明是一种简化资源管理的语法，它会在 <code>try</code> 块结束时自动关闭资源，而不需要显式地在 <code>finally</code> 块中调用 <code>close()</code> 方法。在编译时，<code>try-with-resources</code> 会被转换为包含 <code>try-catch-finally</code> 的代码结构，确保资源被正确关闭。</p><hr><h3 id="_2-3-finally-vs-try-with-resources-对比表格" tabindex="-1">2.3 <code>finally</code> vs <code>try-with-resources</code>：对比表格 <a class="header-anchor" href="#_2-3-finally-vs-try-with-resources-对比表格" aria-label="Permalink to &quot;2.3 \`finally\` vs \`try-with-resources\`：对比表格&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th><code>finally</code></th><th><code>try-with-resources</code></th></tr></thead><tbody><tr><td><strong>资源关闭</strong></td><td>需要手动在 <code>finally</code> 中完成</td><td>自动管理（实现 <code>AutoCloseable</code> 接口）</td></tr><tr><td><strong>代码可读性</strong></td><td>较繁琐，需手动检查是否资源为空</td><td>简洁，无需显式关闭资源</td></tr><tr><td><strong>推荐场景</strong></td><td>复杂操作逻辑，需要确保清理多种资源情况</td><td>普通 I/O 操作，数据库连接等场景</td></tr></tbody></table><h3 id="_2-4-抛出异常" tabindex="-1">2.4 抛出异常 <a class="header-anchor" href="#_2-4-抛出异常" aria-label="Permalink to &quot;2.4 抛出异常&quot;">​</a></h3><p>在 Java 中，<strong>异常机制</strong>是用来处理程序运行期间可能出现的错误或意外情况的常见方式。异常的抛出主要通过以下两个关键字实现：</p><hr><h4 id="_1-throw" tabindex="-1">1. <strong><code>throw</code></strong> <a class="header-anchor" href="#_1-throw" aria-label="Permalink to &quot;1. **\`throw\`**&quot;">​</a></h4><ul><li><p><strong>定义</strong>：</p><ul><li>用于在<strong>方法内部</strong>抛出一个具体的异常对象。这是触发异常的实际操作，一旦执行到 <code>throw</code> 语句，当前方法会立即终止，并将异常传递给调用者进行处理或进一步抛出。</li></ul></li><li><p><strong>核心特点</strong>：</p><ul><li><code>throw</code> 后面必须跟一个具体的异常对象，一般通过 <code>new</code> 操作符来实例化，如：<code>throw new Exception(&quot;异常消息&quot;)</code>。</li><li>它直接导致异常的抛出，程序流程从执行到抛出异常点发生中断。</li></ul></li></ul><hr><h4 id="_2-throws" tabindex="-1">2. <strong><code>throws</code></strong> <a class="header-anchor" href="#_2-throws" aria-label="Permalink to &quot;2. **\`throws\`**&quot;">​</a></h4><ul><li><p><strong>定义</strong>：</p><ul><li>用于在<strong>方法声明</strong>中声明该方法可能抛出的异常类型。它并不会直接抛出异常，而是告诉调用该方法的地方，“请注意，这个方法可能会抛出某种异常，你需要准备妥善处理”。</li></ul></li><li><p><strong>核心特点</strong>：</p><ul><li><code>throws</code> 只能在方法签名上声明异常类型（一个或者多个异常）。</li><li>不会实际抛出任何异常，它只是静态声明。但如果声明的方法在运行时未妥善处理所声明的异常，将会引发编译错误。</li></ul></li></ul><hr><blockquote><p><code>throw</code> 与 <code>throws</code> 的比较</p></blockquote><table tabindex="0"><thead><tr><th><strong>比较维度</strong></th><th><strong><code>throw</code></strong></th><th><strong><code>throws</code></strong></th></tr></thead><tbody><tr><td><strong>出现的位置</strong></td><td>方法的内部（方法体中）</td><td>方法的声明部分（方法的头部）</td></tr><tr><td><strong>作用</strong></td><td>用于抛出一个具体的异常对象</td><td>用于声明方法可能会抛出一种或多种异常</td></tr><tr><td><strong>功能</strong></td><td>明确地触发异常</td><td>告知调用者方法可能引发的异常类型</td></tr><tr><td><strong>配合使用</strong></td><td>必须搭配异常实例（如：<code>throw new Exception()</code>）使用</td><td>通常与方法签名一起出现（如：<code>throws Exception</code>）</td></tr><tr><td><strong>是否立刻生效</strong></td><td>当执行到 <code>throw</code> 语句时，立即抛出异常并中断方法执行</td><td>仅供声明，不会直接触发异常</td></tr></tbody></table><hr><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 声明方法，表示其可能抛出 IllegalArgumentException 异常</span></span>
<span class="line"><span>public static void riskyMethod(int value) throws IllegalArgumentException {</span></span>
<span class="line"><span>    // 检查输入值是否有效</span></span>
<span class="line"><span>    if (value &lt; 0) {</span></span>
<span class="line"><span>        // 抛出具体异常</span></span>
<span class="line"><span>        throw new IllegalArgumentException(&quot;值不能为负数！&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    System.out.println(&quot;值是：&quot; + value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // 调用可能抛出异常的 riskyMethod 方法</span></span>
<span class="line"><span>        riskyMethod(-5);</span></span>
<span class="line"><span>    } catch (IllegalArgumentException e) {</span></span>
<span class="line"><span>        // 捕获并处理由 riskyMethod 抛出的异常</span></span>
<span class="line"><span>        System.out.println(&quot;捕获到异常：&quot; + e.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>分析</strong>： <ul><li><code>riskyMethod</code> 方法在声明中使用 <code>throws</code> 关键字说明其可能抛出 <code>IllegalArgumentException</code> 类型的异常。</li><li>在方法体内，当 <code>value &lt; 0</code> 时，通过 <code>throw new IllegalArgumentException(...)</code> 抛出具体的异常。</li><li>在 <code>main</code> 方法中，调用 <code>riskyMethod</code> 可能会引发异常，因此通过 <code>try-catch</code> 语句捕获并处理异常。</li></ul></li></ul><hr><p>注意事项</p><p><strong>检查异常与运行时异常</strong>：</p><ul><li>编译期异常（如 <code>IOException</code>）必须在方法声明中使用 <code>throws</code>，调用它的方法必须显式处理这些异常。</li><li>运行时异常（如 <code>NullPointerException</code>）属于非强制处理，哪怕未声明 <code>throws</code> 也不会导致编译报错，程序会在运行过程中可能中断。</li></ul><p><strong>异常链</strong>：</p><p>在实际开发中，可以通过 <code>throw</code> 抛出一个新异常，同时将原始异常作为原因嵌套传入，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class ExceptionChainingDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟低层方法可能抛出一个异常</span></span>
<span class="line"><span>            lowerMethod();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            // 在上层捕获异常，并进一步抛出新的异常</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;服务层处理失败&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void lowerMethod() throws Exception {</span></span>
<span class="line"><span>        throw new Exception(&quot;底层方法发生错误&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="三、异常处理规范" tabindex="-1">三、异常处理规范 <a class="header-anchor" href="#三、异常处理规范" aria-label="Permalink to &quot;三、异常处理规范&quot;">​</a></h2><p>阿里巴巴Java异常处理规约</p><p><a href="https://www.mapull.com/gitbook/fexa/exception/exception.html" target="_blank" rel="noreferrer">https://www.mapull.com/gitbook/fexa/exception/exception.html</a></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250109180046.png" alt="image.png"></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250109180159.png" alt="image.png"></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250109184408.png" alt="image.png"></p><h2 id="四、不推荐的异常处理方式" tabindex="-1">四、不推荐的异常处理方式 <a class="header-anchor" href="#四、不推荐的异常处理方式" aria-label="Permalink to &quot;四、不推荐的异常处理方式&quot;">​</a></h2><h3 id="_1-捕获阶段" tabindex="-1"><strong>1. 捕获阶段</strong> <a class="header-anchor" href="#_1-捕获阶段" aria-label="Permalink to &quot;**1. 捕获阶段**&quot;">​</a></h3><h4 id="不规范案例" tabindex="-1">不规范案例: <a class="header-anchor" href="#不规范案例" aria-label="Permalink to &quot;不规范案例:&quot;">​</a></h4><ol><li><strong>不区分异常类型</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    // …</span></span>
<span class="line"><span>} catch (Exception e) { </span></span>
<span class="line"><span>    // 不推荐：对所有类型的异常统一处理</span></span>
<span class="line"><span>    // 没有区分业务异常与系统异常</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>问题：</p><ul><li>粗粒度地捕获 <code>Exception</code> 类甚至父类（如 <code>Throwable</code>），导致难以针对不同异常执行细化操作。</li><li>会忽略掉系统异常与业务异常的差异，隐藏潜在的严重问题。</li></ul><ol><li><strong>捕获异常不完全</strong></li></ol><p>例如：某些特定类型的异常未被捕获，而这些异常可能在运行时发生，程序未提供后续处理机制。</p><hr><h4 id="改进建议" tabindex="-1">改进建议： <a class="header-anchor" href="#改进建议" aria-label="Permalink to &quot;改进建议：&quot;">​</a></h4><ul><li>针对 <strong>不同的异常类型</strong>，逐一列出 <code>catch</code> 块，体现异常处理的意义：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    // 1. 业务逻辑处理</span></span>
<span class="line"><span>} catch (BusinessException e) { // 捕获业务异常并处理</span></span>
<span class="line"><span>    log.warn(&quot;Business issue: {}&quot;, e.getMessage(), e);</span></span>
<span class="line"><span>} catch (SystemException e) { // 捕获系统异常</span></span>
<span class="line"><span>    log.error(&quot;System issue occurred!&quot;, e);</span></span>
<span class="line"><span>} catch (Exception e) { // 通用异常兜底（可选）</span></span>
<span class="line"><span>    log.error(&quot;Unexpected issue!&quot;, e);</span></span>
<span class="line"><span>    throw new RuntimeException(&quot;Critical Error: &quot;, e); // 可能需要重新抛出</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>不要直接捕获顶层异常（如 <code>Throwable</code> 或 <code>Exception</code>），除非是特殊情况，如框架中的全局异常处理器。</li></ul><hr><h3 id="_2-异常传递阶段" tabindex="-1"><strong>2. 异常传递阶段</strong> <a class="header-anchor" href="#_2-异常传递阶段" aria-label="Permalink to &quot;**2\\. 异常传递阶段**&quot;">​</a></h3><h4 id="不规范案例-1" tabindex="-1">不规范案例: <a class="header-anchor" href="#不规范案例-1" aria-label="Permalink to &quot;不规范案例:&quot;">​</a></h4><blockquote><p><strong>异常信息丢失</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>throw new Exception(e.getMessage());</span></span></code></pre></div><p>问题：</p><ul><li>只保留了异常的消息部分，而丢失了栈踪（<code>StackTrace</code>）信息。这会让开发者难以追踪异常的具体来源。</li></ul><blockquote><p><strong>不必要的异常包装</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>throw new BIZException(e);</span></span></code></pre></div><p>问题：</p><ul><li>如果直接包装并不提供新的语义信息，则是冗余的操作，会降低代码清晰度。</li></ul><blockquote><p><strong>异常转译错误</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>throw new Exception(e);</span></span></code></pre></div><p>问题：</p><ul><li>将业务异常（高抽象级别）包装为系统异常（低抽象级别），丢失了业务语义信息。</li></ul><blockquote><p><strong>吃掉异常（既不记录日志，也不抛出异常）</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>catch (Biz4Exception e) {</span></span>
<span class="line"><span>    // 什么都没处理</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>问题：</p><ul><li>在异常发生后没有日志记录，也没有传递到上一层，导致问题静默消失，增加了问题诊断难度。</li></ul><hr><h4 id="改进建议-1" tabindex="-1">改进建议： <a class="header-anchor" href="#改进建议-1" aria-label="Permalink to &quot;改进建议：&quot;">​</a></h4><ul><li><strong>尽量保留原始异常的上下文信息</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    // …</span></span>
<span class="line"><span>} catch (BusinessException e) {</span></span>
<span class="line"><span>    throw new NewBusinessException(&quot;New context message&quot;, e); // 保留原始异常</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>避免不必要的包装</strong>： 如果没有带来语义上的重大变化，不要重新包装相同类型的异常：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>catch (BIZException e) {</span></span>
<span class="line"><span>    throw e; // 直接往上传递</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>避免低级抽象异常包装高级抽象异常</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>catch (BizException e) {</span></span>
<span class="line"><span>    // 正确做法是传递同一抽象级别异常</span></span>
<span class="line"><span>    throw new BizException(&quot;Detailed business problem&quot;, e);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>避免吃掉异常：</strong></li></ul><p>记录日志并通知调用方：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>catch (Biz4Exception e) {</span></span>
<span class="line"><span>    log.error(&quot;Biz4Exception occurred&quot;, e);</span></span>
<span class="line"><span>    throw e; // 或者选择重新封装传递</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="_3-异常处理阶段" tabindex="-1"><strong>3. 异常处理阶段</strong> <a class="header-anchor" href="#_3-异常处理阶段" aria-label="Permalink to &quot;**3\\. 异常处理阶段**&quot;">​</a></h3><h4 id="不规范案例-2" tabindex="-1">不规范案例: <a class="header-anchor" href="#不规范案例-2" aria-label="Permalink to &quot;不规范案例:&quot;">​</a></h4><ol><li><strong>重复处理</strong> 同一异常被多个 <code>catch</code> 块或嵌套 <code>try-catch</code> 块重复记录或者处理：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        // …</span></span>
<span class="line"><span>    } catch (Biz1Exception e) {</span></span>
<span class="line"><span>        log.error(e); // 重复 LOG</span></span>
<span class="line"><span>        throw e;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} catch (BizException e) {</span></span>
<span class="line"><span>    log.error(e); // 再次记录</span></span>
<span class="line"><span>    throw e;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li><strong>处理方式不统一或分散</strong></li></ol><p>不同类型异常的处理方式不一致，日志记录、报警、抛出异常等方式各异：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>catch (Biz1Exception e) {</span></span>
<span class="line"><span>    log.warn(&quot;Special handling for Biz1&quot;, e);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>catch (Exception e) {</span></span>
<span class="line"><span>    log.error(&quot;General error&quot;, e);</span></span>
<span class="line"><span>    throw e; // 直接抛出</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h4 id="改进建议-2" tabindex="-1">改进建议： <a class="header-anchor" href="#改进建议-2" aria-label="Permalink to &quot;改进建议：&quot;">​</a></h4><ul><li><strong>减少重复处理：</strong> 确保异常只在合理的层次中被捕获并记录，避免重复操作：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    // 核心逻辑</span></span>
<span class="line"><span>} catch (SpecificException e) {</span></span>
<span class="line"><span>    log.error(&quot;Localized issue&quot;, e);</span></span>
<span class="line"><span>    throw new HighLevelException(&quot;Re-wrapped exception&quot;, e); // 层次清晰</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>集中处理：</strong> 统一的异常处理策略可以避免分散的冗余处理：</p></li><li><p>提取通用的异常处理逻辑到工具类或拦截器。</p></li><li><p>封装全局异常捕获机制（如 <code>ControllerAdvice</code> 式处理）。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class GlobalExceptionHandler {</span></span>
<span class="line"><span>    @ExceptionHandler(BusinessException.class)</span></span>
<span class="line"><span>    public ResponseEntity&lt;?&gt; handleBusinessException(BusinessException ex) {</span></span>
<span class="line"><span>        log.warn(&quot;Business error: {}&quot;, ex.getMessage());</span></span>
<span class="line"><span>        return ResponseEntity.badRequest().body(&quot;Business Error&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="五、异常处理建议" tabindex="-1">五、异常处理建议 <a class="header-anchor" href="#五、异常处理建议" aria-label="Permalink to &quot;五、异常处理建议&quot;">​</a></h2><ul><li>使用 try-with-resource 关闭资源。</li><li>抛出具体的异常而不是 Exception，并在注释中使用 @throw 进行说明。</li><li>捕获异常后使用描述性语言记录错误信息，如果是调用外部服务最好是包括入参和出参。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>logger.error(&quot;说明信息，异常信息：{}&quot;, e.getMessage(), e)</span></span></code></pre></div><ul><li>优先捕获具体异常。</li><li>不要捕获 Throwable 异常，除非特殊情况。</li><li>不要忽略异常，异常捕获一定需要处理。</li><li>不要同时记录和抛出异常，因为异常会打印多次，正确的处理方式要么抛出异常要么记录异常，如果抛出异常，不要原封不动的抛出，可以自定义异常抛出。</li><li>自定义异常不要丢弃原有异常，应该将原始异常传入自定义异常中。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>throw MyException(&quot;my exception&quot;, e);</span></span></code></pre></div><ul><li>自定义异常尽量不要使用检查异常。</li><li>尽可能晚的捕获异常，如非必要，建议所有的异常都不要在下层捕获，而应该由最上层捕获并统一处理这些异常</li><li>避免重复输出异常日志，建议所有的异常日志都统一交由最上层输出。就算下层捕获到了某个异常，如非特殊情况，也不要将异常信息输出，应该交给最上层统一输出日志</li></ul><h2 id="六、项目中的异常处理" tabindex="-1">六、项目中的异常处理 <a class="header-anchor" href="#六、项目中的异常处理" aria-label="Permalink to &quot;六、项目中的异常处理&quot;">​</a></h2><p>使用异常的好处：</p><ul><li>能够将错误代码和正常代码分离</li><li>能够在调用堆栈上传递异常</li><li>能够将异常分组和区分</li></ul><p><strong>可以通过异常对不同的业务问题进行分类，以便排查问题。</strong></p><h3 id="自定义异常" tabindex="-1">自定义异常 <a class="header-anchor" href="#自定义异常" aria-label="Permalink to &quot;自定义异常&quot;">​</a></h3><p>对于 Java 体系中定义的异常类来说，这些是技术层面的异常；而在实际项目中，应用程序中更多是业务方面的异常，比如用户参数输入不合法，用户没有权限等。</p><p>可以通过异常对不同的业务问题进行分类，以便排查问题。</p><p>抛出自定义异常</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (null == activity) {  </span></span>
<span class="line"><span>    throw new GenericException(GenericException.Code.NOT_EXISTS, &quot;活动不存在&quot;);  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="通用异常枚举类" tabindex="-1">通用异常枚举类 <a class="header-anchor" href="#通用异常枚举类" aria-label="Permalink to &quot;通用异常枚举类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.shein.plm.philosopherstones.soul.exception;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>import com.shein.plm.philosopherstones.soul.enums.ErrorLevel;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class GenericException extends ExceptionContract {  </span></span>
<span class="line"><span>    public GenericException(ExceptionCodeContract code) {  </span></span>
<span class="line"><span>        super(code);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public GenericException(ExceptionCodeContract code, String message) {  </span></span>
<span class="line"><span>        super(code, message);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public GenericException(ExceptionCodeContract code, String message, Throwable cause) {  </span></span>
<span class="line"><span>        super(code, cause);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public static enum Code implements ExceptionCodeContract {  </span></span>
<span class="line"><span>        SUCCESS(&quot;0&quot;, &quot;成功&quot;, ErrorLevel.INFO),  </span></span>
<span class="line"><span>        FAIL(&quot;1&quot;, &quot;失败&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        ENUM_VALUE_NOT_EXIST(&quot;2&quot;, &quot;枚举值不存在&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        UNAUTHENTICATED(&quot;302&quot;, &quot;未登录&quot;, ErrorLevel.INFO),  </span></span>
<span class="line"><span>        PARAMS_ERROR(&quot;400&quot;, &quot;请求参数错误&quot;, ErrorLevel.INFO),  </span></span>
<span class="line"><span>        UNAUTHORIZED(&quot;403&quot;, &quot;无权限&quot;, ErrorLevel.INFO),  </span></span>
<span class="line"><span>        ROUTE_NOT_FOUND(&quot;404&quot;, &quot;路由不存在&quot;, ErrorLevel.WARN),  </span></span>
<span class="line"><span>        ILLEGAL_OPERATION(&quot;405&quot;, &quot;非法操作&quot;, ErrorLevel.WARN),  </span></span>
<span class="line"><span>        REPEAT_OPERATION(&quot;406&quot;, &quot;重复操作&quot;, ErrorLevel.WARN),  </span></span>
<span class="line"><span>        SYSTEM_MAINTAINING(&quot;500&quot;, &quot;系统维护升级中，请稍后再试~&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        SYSTEM_ERROR(&quot;501&quot;, &quot;系统出现异常，请联系客服号处理&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        RPC_ERROR(&quot;502&quot;, &quot;请求 【{}】 外部系统异常，{}&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        ALREADY_EXISTS(&quot;600&quot;, &quot;数据已存在，不可重复添加&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        NOT_EXISTS(&quot;601&quot;, &quot;数据不存在&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        CASTS_NOT_DEFINED(&quot;602&quot;, &quot;模型字段未定义&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        DATA_OUTED(&quot;603&quot;, &quot;数据已过期&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        INSERT_FAIL(&quot;604&quot;, &quot;数据插入失败&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        SEARCH_RANGE_TOO_LARGE(&quot;605&quot;, &quot;搜索范围过大，请调整搜索条件来缩小搜索范围！&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        SEARCH_FIELD_NOT_DEFINED(&quot;606&quot;, &quot;搜索字段未定义&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        SEARCH_FAIL(&quot;607&quot;, &quot;搜索失败&quot;, ErrorLevel.ERROR),  </span></span>
<span class="line"><span>        SEARCH_TIMEOUT(&quot;608&quot;, &quot;搜索范围过大导致超时，请检查模糊搜索输入框是否可以输入更多的信息来缩小搜索范围，或者清空模糊搜索输入框内容！&quot;, ErrorLevel.ERROR);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        private String code;  </span></span>
<span class="line"><span>        private String description;  </span></span>
<span class="line"><span>        private ErrorLevel level;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        public String getCode() {  </span></span>
<span class="line"><span>            return this.code;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        public String getDescription() {  </span></span>
<span class="line"><span>            return this.description;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        public ErrorLevel getLevel() {  </span></span>
<span class="line"><span>            return this.level;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        private Code(String code, String description, ErrorLevel level) {  </span></span>
<span class="line"><span>            this.code = code;  </span></span>
<span class="line"><span>            this.description = description;  </span></span>
<span class="line"><span>            this.level = level;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="业务异常和系统异常" tabindex="-1">业务异常和系统异常 <a class="header-anchor" href="#业务异常和系统异常" aria-label="Permalink to &quot;业务异常和系统异常&quot;">​</a></h3><p>该异常用户能否处理，如果用户能处理则抛出业务异常，如果用户不能处理需要程序员处理则抛出系统异常。</p><p>业务异常：比如：“用户没有登录”，“没有权限操作”。</p><p>系统异常：如 NullPointerException，IndexOfException。</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20250110085116.png" alt="image.png"></p><h3 id="错误码" tabindex="-1">错误码 <a class="header-anchor" href="#错误码" aria-label="Permalink to &quot;错误码&quot;">​</a></h3><p>异常码表： <a href="https://wiki.dotfashion.cn/pages/viewpage.action?pageId=356122791" target="_blank" rel="noreferrer">https://wiki.dotfashion.cn/pages/viewpage.action?pageId=356122791</a></p><h3 id="如何处理异常" tabindex="-1">如何处理异常 <a class="header-anchor" href="#如何处理异常" aria-label="Permalink to &quot;如何处理异常&quot;">​</a></h3><p>尽可能晚的捕获异常，如非必要，建议所有的异常都不要在下层捕获，而应该由最上层捕获并统一处理这些异常</p><h3 id="全局异常处理" tabindex="-1">全局异常处理 <a class="header-anchor" href="#全局异常处理" aria-label="Permalink to &quot;全局异常处理&quot;">​</a></h3><p>略</p><h3 id="参考" tabindex="-1">参考： <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考：&quot;">​</a></h3><ul><li><a href="https://www.mapull.com/gitbook/fexa/exception/exception.html" target="_blank" rel="noreferrer">https://www.mapull.com/gitbook/fexa/exception/exception.html</a></li><li><a href="https://www.runoob.com/java/java-exceptions.html" target="_blank" rel="noreferrer">https://www.runoob.com/java/java-exceptions.html</a></li><li><a href="https://javaguide.cn/java/basis/java-basic-questions-03.html" target="_blank" rel="noreferrer">https://javaguide.cn/java/basis/java-basic-questions-03.html</a></li><li><a href="https://juejin.cn/post/7217399337989898295#heading-22" target="_blank" rel="noreferrer">https://juejin.cn/post/7217399337989898295#heading-22</a></li></ul>`,169)])])}const g=a(t,[["render",l]]);export{h as __pageData,g as default};
