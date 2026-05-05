import{_ as n,o as a,c as p,am as e}from"./chunks/framework.CiF4W93w.js";const f=JSON.parse('{"title":"IO基础操作","description":"","frontmatter":{"title":"IO基础操作","excerpt":"主要是围绕IO下实现类的一些常用方法进行记录和说明","date":"2024-04-03 15:59:29","updated":"2024-04-03 15:59:29"},"headers":[],"relativePath":"基础/异常处理与IO/NIO/Java IO与NIO/IO基础操作.md","filePath":"基础/异常处理与IO/NIO/Java IO与NIO/IO基础操作.md","lastUpdated":null}'),l={name:"基础/异常处理与IO/NIO/Java IO与NIO/IO基础操作.md"};function i(t,s,c,o,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h3><p>在 Java 中，<code>File</code> 类是 <code>java.io</code> 包的一部分，用于表示文件和目录路径名的抽象表示形式。它可以用来创建、删除、获取和设置文件或目录的属性。</p><p><code>File</code> 类不可以用于文件内容的读写；如果需要读写文件内容，应使用 <code>FileInputStream</code>、<code>FileOutputStream</code>、<code>FileReader</code>、<code>FileWriter</code> 等其他流类。</p><p>File 这个类一般是用于对于文件或者目录的创建删除的常用操作。</p><h4 id="创建文件操作" tabindex="-1">创建文件操作 <a class="header-anchor" href="#创建文件操作" aria-label="Permalink to &quot;创建文件操作&quot;">​</a></h4><p>创建一个 <code>File</code> 实例不会在硬盘上创建一个文件，它只是一个抽象表示。要创建或访问文件，可以如下操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>File file = new File(&quot;path/to/file.txt&quot;);</span></span></code></pre></div><p>这里的路径可以是相对路径或绝对路径。相对路径相对于当前工作目录。</p><p>如果要看当前工作空间目录是哪个，可以通过 下述操作查看。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 获取当前工作目录  </span></span>
<span class="line"><span>String workingDir = System.getProperty(&quot;user.dir&quot;);  </span></span>
<span class="line"><span>// 打印当前工作目录  </span></span>
<span class="line"><span>System.out.println(&quot;当前工作目录: &quot; + workingDir);</span></span></code></pre></div><h3 id="日常记录" tabindex="-1">日常记录 <a class="header-anchor" href="#日常记录" aria-label="Permalink to &quot;日常记录&quot;">​</a></h3><h4 id="遍历-d-盘路径下的文件-获取指定文件名的路径位置" tabindex="-1">遍历 D 盘路径下的文件，获取指定文件名的路径位置 <a class="header-anchor" href="#遍历-d-盘路径下的文件-获取指定文件名的路径位置" aria-label="Permalink to &quot;遍历 D 盘路径下的文件，获取指定文件名的路径位置&quot;">​</a></h4><blockquote><p>操作一：使用 File 进行遍历操作</p></blockquote><p>环境：本地电脑，D 盘占用磁盘大概 300 G 左右</p><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Found: D:\\01_LQ\\DiaryLearn\\2024年Flag.mp4</span></span>
<span class="line"><span>Found: D:\\01_LQ\\DiaryLearn\\Java\\MindMap\\2024年Flag.mp4</span></span>
<span class="line"><span>Cannot list files in the directory or access is denied.</span></span>
<span class="line"><span>方法调用耗时:8576毫秒</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.file;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File FolderTraversalExample.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/12 16:10</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class FileSearcherMethodOne {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        long start = System.currentTimeMillis();</span></span>
<span class="line"><span>        String folderName = &quot;D:\\\\&quot;;</span></span>
<span class="line"><span>        String filename = &quot;2024年Flag.mp4&quot;;</span></span>
<span class="line"><span>        findFilePath(folderName,filename);</span></span>
<span class="line"><span>        long end = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法调用耗时:&quot; + (end - start) + &quot;毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void findFilePath(String folderName,String filename){</span></span>
<span class="line"><span>        // 步骤1：创建一个文件对象来表示要遍历的文件夹</span></span>
<span class="line"><span>        File folder = new File(folderName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 步骤2：检查文件对象是否存在，并且是一个文件夹</span></span>
<span class="line"><span>        if (folder.exists() &amp;&amp; folder.isDirectory()) {</span></span>
<span class="line"><span>            // 步骤3：获取文件夹下的所有文件和子文件夹</span></span>
<span class="line"><span>            File[] files = folder.listFiles();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 步骤4：遍历所有文件和子文件夹</span></span>
<span class="line"><span>            for (File file : files) {</span></span>
<span class="line"><span>                if (file.isDirectory()) {</span></span>
<span class="line"><span>                    // 是一个文件夹，递归遍历</span></span>
<span class="line"><span>                    traverseFolder(file,filename);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    // 是一个文件</span></span>
<span class="line"><span>                    String fileName = file.getName();</span></span>
<span class="line"><span>                    // 对文件名称进行处理</span></span>
<span class="line"><span>                    if(fileName.equals(filename)){</span></span>
<span class="line"><span>                        String path = file.getPath();</span></span>
<span class="line"><span>                        System.out.println(&quot;Found: &quot; + path);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 文件夹不存在或者不是一个文件夹</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void traverseFolder(File folder,String filename) {</span></span>
<span class="line"><span>        if (folder == null || !folder.exists() || !folder.isDirectory()) {</span></span>
<span class="line"><span>            System.out.println(&quot;Provided file is not a directory or does not exist.&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        File[] files = folder.listFiles();</span></span>
<span class="line"><span>        if (files == null) {  // 检查返回值是否为 null</span></span>
<span class="line"><span>            System.out.println(&quot;Cannot list files in the directory or access is denied.&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (File file : files) {</span></span>
<span class="line"><span>            if (file.isDirectory()) {</span></span>
<span class="line"><span>                // 是一个文件夹，递归遍历</span></span>
<span class="line"><span>                traverseFolder(file,filename);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // 是一个文件</span></span>
<span class="line"><span>                String fileName = file.getName();</span></span>
<span class="line"><span>                // 对文件名称进行处理</span></span>
<span class="line"><span>                if(fileName.equals(filename)){</span></span>
<span class="line"><span>                    String path = file.getPath();</span></span>
<span class="line"><span>                    System.out.println(&quot;Found: &quot; + path);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>进行了一个扫描文件操作，然后放入到 Node 树节点中</p></blockquote><p>FileNode</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.file;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File FileNode.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/12 14:44</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class FileNode {</span></span>
<span class="line"><span>    private String path;</span></span>
<span class="line"><span>    private String fileName;</span></span>
<span class="line"><span>    private List&lt;FileNode&gt; children;</span></span>
<span class="line"><span>    private static Map&lt;String, List&lt;FileNode&gt;&gt; fileMap = new HashMap&lt;&gt;();  // 用于存储文件名和节点的映射</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public FileNode(String path, String fileName) {</span></span>
<span class="line"><span>        this.path = path;</span></span>
<span class="line"><span>        this.fileName = fileName;</span></span>
<span class="line"><span>        this.children = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        addToFileMap(fileName, this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addChild(FileNode child) {</span></span>
<span class="line"><span>        this.children.add(child);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getPath() {</span></span>
<span class="line"><span>        return path;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getFileName() {</span></span>
<span class="line"><span>        return fileName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public List&lt;FileNode&gt; getChildren() {</span></span>
<span class="line"><span>        return children;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Map&lt;String, List&lt;FileNode&gt;&gt; getFileMap() { return fileMap;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加节点到fileMap中</span></span>
<span class="line"><span>    private static void addToFileMap(String fileName, FileNode node) {</span></span>
<span class="line"><span>        fileMap.computeIfAbsent(fileName, k -&gt; new ArrayList&lt;&gt;()).add(node);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 通过文件名获取FileNode列表</span></span>
<span class="line"><span>    public static List&lt;FileNode&gt; getNodesByFileName(String fileName) {</span></span>
<span class="line"><span>        return fileMap.getOrDefault(fileName, new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>FileSearcherMethodTwo</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.file;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.nio.file.Path;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File FileSearcherMethodTwo.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/12 17:50</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class FileSearcherMethodTwo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static FileNode fileNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        long start = System.currentTimeMillis();</span></span>
<span class="line"><span>        //String folderName = &quot;D:\\\\01_LQ\\\\DiaryLearn\\\\Java&quot;;</span></span>
<span class="line"><span>        String folderName = &quot;D:\\\\&quot;;</span></span>
<span class="line"><span>        String filename = &quot;2024年Flag.mp4&quot;;</span></span>
<span class="line"><span>        scanFilePath(folderName,filename);</span></span>
<span class="line"><span>        long end = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法调用耗时:&quot; + (end - start) + &quot;毫秒&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        long start2 = System.currentTimeMillis();</span></span>
<span class="line"><span>        //List&lt;FileNode&gt; fileNodes = fileNode.getFileMap().get(filename);</span></span>
<span class="line"><span>        List&lt;FileNode&gt; nodes = fileNode.getNodesByFileName(filename);</span></span>
<span class="line"><span>        if (nodes.isEmpty()) {</span></span>
<span class="line"><span>            System.out.println(&quot;No files found with the name &quot; + filename);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            System.out.println(&quot;Found files:&quot;);</span></span>
<span class="line"><span>            for (FileNode node : nodes) {</span></span>
<span class="line"><span>                System.out.println(node.getPath());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        long end2 = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法2调用耗时:&quot; + (end2 - start2) + &quot;毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void scanFilePath(String folderName,String filename){</span></span>
<span class="line"><span>        // 步骤1：创建一个文件对象来表示要遍历的文件夹</span></span>
<span class="line"><span>        File folder = new File(folderName);</span></span>
<span class="line"><span>        //当的确需要将文件路径和文件名信息放入到整体的一个 HashMap 中</span></span>
<span class="line"><span>        //一方面是进行遍历的时候，一方面是生成新的节点信息，一方面是进行关联上层节点信息，从而形成树结构</span></span>
<span class="line"><span>        //根节点</span></span>
<span class="line"><span>        fileNode = new FileNode(folderName, &quot;&quot;);</span></span>
<span class="line"><span>        // 步骤2：检查文件对象是否存在，并且是一个文件夹</span></span>
<span class="line"><span>        if (folder.exists() &amp;&amp; folder.isDirectory()) {</span></span>
<span class="line"><span>            // 步骤3：获取文件夹下的所有文件和子文件夹</span></span>
<span class="line"><span>            File[] files = folder.listFiles();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 步骤4：遍历所有文件和子文件夹</span></span>
<span class="line"><span>            for (File file : files) {</span></span>
<span class="line"><span>                if (file.isDirectory()) {</span></span>
<span class="line"><span>                    //如果是目录的话，正常应该 Node 对象下 children 不为空，同时 filename 是空的</span></span>
<span class="line"><span>                    FileNode dirNode = new FileNode(file.getPath(), &quot;&quot;);</span></span>
<span class="line"><span>                    fileNode.addChild(dirNode);</span></span>
<span class="line"><span>                    // 是一个文件夹，递归遍历</span></span>
<span class="line"><span>                    traverseFolder(file,filename,dirNode);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    // 是一个文件</span></span>
<span class="line"><span>                    String fileName = file.getName();</span></span>
<span class="line"><span>                    // 对文件名称进行处理</span></span>
<span class="line"><span>                    if(fileName.equals(filename)){</span></span>
<span class="line"><span>                        String path = file.getPath();</span></span>
<span class="line"><span>                        //System.out.println(&quot;Found: &quot; + path);</span></span>
<span class="line"><span>                        FileNode fileNodeSon = new FileNode(path, filename);</span></span>
<span class="line"><span>                        fileNode.addChild(fileNodeSon);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 文件夹不存在或者不是一个文件夹</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void traverseFolder(File folder,String filename,FileNode fileNode) {</span></span>
<span class="line"><span>        if (folder == null || !folder.exists() || !folder.isDirectory()) {</span></span>
<span class="line"><span>            System.out.println(&quot;Provided file is not a directory or does not exist.&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        File[] files = folder.listFiles();</span></span>
<span class="line"><span>        if (files == null) {  // 检查返回值是否为 null</span></span>
<span class="line"><span>            System.out.println(&quot;Cannot list files in the directory or access is denied.&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (File file : files) {</span></span>
<span class="line"><span>            if (file.isDirectory()) {</span></span>
<span class="line"><span>                FileNode dirNode = new FileNode(file.getPath(), &quot;&quot;);</span></span>
<span class="line"><span>                fileNode.addChild(dirNode);</span></span>
<span class="line"><span>                // 是一个文件夹，递归遍历</span></span>
<span class="line"><span>                traverseFolder(file,filename,dirNode);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // 是一个文件</span></span>
<span class="line"><span>                String fileName = file.getName();</span></span>
<span class="line"><span>                // 对文件名称进行处理</span></span>
<span class="line"><span>                if(fileName.equals(filename)){</span></span>
<span class="line"><span>                    String path = file.getPath();</span></span>
<span class="line"><span>                    //System.out.println(&quot;Found: &quot; + path);</span></span>
<span class="line"><span>                    FileNode fileNodeSon = new FileNode(path, filename);</span></span>
<span class="line"><span>                    fileNode.addChild(fileNodeSon);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>输出结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Cannot list files in the directory or access is denied.</span></span>
<span class="line"><span>方法调用耗时:7785毫秒</span></span>
<span class="line"><span>Found files:</span></span>
<span class="line"><span>D:\\01_LQ\\DiaryLearn\\2024年Flag.mp4</span></span>
<span class="line"><span>D:\\01_LQ\\DiaryLearn\\Java\\MindMap\\2024年Flag.mp4</span></span>
<span class="line"><span>方法2调用耗时:0毫秒</span></span></code></pre></div><p>还有一些更高级的内容，比如 NIO、并行流之类的；这个实际放后面看了（掌握程度太浅，实际跑的隐患太大）</p><hr>`,26)])])}const h=n(l,[["render",i]]);export{f as __pageData,h as default};
