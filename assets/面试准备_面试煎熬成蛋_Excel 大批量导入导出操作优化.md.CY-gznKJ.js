import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Excel 大批量导入导出操作优化","description":"","frontmatter":{"title":"Excel 大批量导入导出操作优化","excerpt":"这一篇的主要内容是介绍 Java 对于 Excel 文件的一些基本操作，同时通过实际示例去进行大批量数据导入导出的操作（纯后端）；主要会用到 EasyExcel 和一些常用的操作技术。","date":"2024-01-05 11:27:26","updated":"2024-01-05 11:27:26"},"headers":[],"relativePath":"面试准备/面试煎熬成蛋/Excel 大批量导入导出操作优化.md","filePath":"面试准备/面试煎熬成蛋/Excel 大批量导入导出操作优化.md","lastUpdated":null}'),l={name:"面试准备/面试煎熬成蛋/Excel 大批量导入导出操作优化.md"};function i(t,s,c,r,o,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="_1、java-中的流行库" tabindex="-1">1、Java 中的流行库 <a class="header-anchor" href="#_1、java-中的流行库" aria-label="Permalink to &quot;1、Java 中的流行库&quot;">​</a></h3><p>Java 对 Excel 的常用操作通常涉及读取、创建、编辑和保存 Excel 文件。</p><p>这些操作主要通过 Apache POI 和 jExcelAPI 这两个流行的库来实现。Apache POI 支持老式的 Excel XLS 格式和较新的 XLSX 格式，而 jExcelAPI 主要用于处理 XLS 文件。</p><p>以下是一些常见的操作示例：</p><h4 id="apache-poi" tabindex="-1">Apache POI <a class="header-anchor" href="#apache-poi" aria-label="Permalink to &quot;Apache POI&quot;">​</a></h4><p>Apache POI 是处理 Microsoft Office 文档的流行 Java 库，特别是 Excel 文档（包括 XLS 和 XLSX 格式）。</p><p>POI 提供了不同的模型来处理 Excel 文档，主要包括 HSSF（用于 <code>.xls</code> 格式）、XSSF（用于 <code>.xlsx</code> 格式）以及 SXSSF（用于处理大型 <code>.xlsx</code> 文件的扩展版本）。在处理 <code>.xlsx</code> 格式文件时，主要使用的是 XSSF 和 SXSSF。</p><p>使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 基本依赖，仅操作 xls 格式只需引入此依赖 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.14&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!-- 使用 xlsx 格式需要额外引入此依赖 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.14&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>演示代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.excel;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.apache.poi.ss.usermodel.Cell;</span></span>
<span class="line"><span>import org.apache.poi.ss.usermodel.Row;</span></span>
<span class="line"><span>import org.apache.poi.xssf.usermodel.XSSFSheet;</span></span>
<span class="line"><span>import org.apache.poi.xssf.usermodel.XSSFWorkbook;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File ApachePOITestOperation.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/3 15:18</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class ApachePOITestOperation {</span></span>
<span class="line"><span>    public static void main(String[] args){</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            writeExcel();</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void readExcel()  throws IOException {</span></span>
<span class="line"><span>        FileInputStream file = new FileInputStream(new File(&quot;path/to/excel.xlsx&quot;));</span></span>
<span class="line"><span>        XSSFWorkbook workbook = new XSSFWorkbook(file);</span></span>
<span class="line"><span>        //读取工作表</span></span>
<span class="line"><span>        XSSFSheet sheet = workbook.getSheetAt(0);</span></span>
<span class="line"><span>        //遍历行与单元格</span></span>
<span class="line"><span>        for (Row row : sheet) {</span></span>
<span class="line"><span>            for (Cell cell : row) {</span></span>
<span class="line"><span>                switch (cell.getCellType()) {</span></span>
<span class="line"><span>                    case STRING: System.out.print(cell.getStringCellValue() + &quot; &quot;);</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    case NUMERIC: System.out.print(cell.getNumericCellValue() + &quot; &quot;);</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    case BOOLEAN: System.out.print(cell.getBooleanCellValue() + &quot; &quot;);</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    default:</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.out.println();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void writeExcel() throws IOException {</span></span>
<span class="line"><span>        //创建 Excel 文件</span></span>
<span class="line"><span>        XSSFWorkbook workbook = new XSSFWorkbook();</span></span>
<span class="line"><span>        XSSFSheet sheet = workbook.createSheet(&quot;Name of the Sheet&quot;);</span></span>
<span class="line"><span>        //创建行和单元格</span></span>
<span class="line"><span>        Row row = sheet.createRow(0);</span></span>
<span class="line"><span>        Cell cell = row.createCell(0);</span></span>
<span class="line"><span>        cell.setCellValue(&quot;Cell Value&quot;);</span></span>
<span class="line"><span>        //保存 Excel 操作</span></span>
<span class="line"><span>        FileOutputStream out = new FileOutputStream(new File(&quot;path/to/excel2.xlsx&quot;));</span></span>
<span class="line"><span>        workbook.write(out);</span></span>
<span class="line"><span>        out.close();</span></span>
<span class="line"><span>        workbook.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="jexcelapi" tabindex="-1">jExcelAPI <a class="header-anchor" href="#jexcelapi" aria-label="Permalink to &quot;jExcelAPI&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;net.sourceforge.jexcelapi&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jxl&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.6.12&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre></div><p>演示代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.excel;</span></span>
<span class="line"><span>import jxl.Cell;</span></span>
<span class="line"><span>import jxl.Sheet;</span></span>
<span class="line"><span>import jxl.Workbook;</span></span>
<span class="line"><span>import jxl.read.biff.BiffException;</span></span>
<span class="line"><span>import jxl.write.Label;</span></span>
<span class="line"><span>import jxl.write.WritableSheet;</span></span>
<span class="line"><span>import jxl.write.WritableWorkbook;</span></span>
<span class="line"><span>import jxl.write.WriteException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File jExcelAPITestOpeartion.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/3 15:56</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class JExcelAPITestOpeartion {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            JExcelAPITestOpeartion jExcelAPITestOpeartion = new JExcelAPITestOpeartion();</span></span>
<span class="line"><span>            jExcelAPITestOpeartion.readExcel();</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } catch (BiffException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public  void readExcel() throws IOException, BiffException {</span></span>
<span class="line"><span>        //读取Excel 操作</span></span>
<span class="line"><span>        Workbook workbook = Workbook.getWorkbook(new File(&quot;path/to/excel.xls&quot;));</span></span>
<span class="line"><span>        //读取工作表</span></span>
<span class="line"><span>        Sheet sheet = workbook.getSheet(0);</span></span>
<span class="line"><span>        //读取内容</span></span>
<span class="line"><span>        Cell cell = sheet.getCell(0, 0);</span></span>
<span class="line"><span>        String content = cell.getContents();</span></span>
<span class="line"><span>        System.out.println(content);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void writeExcel() throws IOException, WriteException {</span></span>
<span class="line"><span>        WritableWorkbook workbook = Workbook.createWorkbook(new File(&quot;path/to/excel.xls&quot;));</span></span>
<span class="line"><span>        WritableSheet sheet = workbook.createSheet(&quot;Sheet Name&quot;, 0);</span></span>
<span class="line"><span>        Label label = new Label(0, 0, &quot;Content&quot;);</span></span>
<span class="line"><span>        sheet.addCell(label);</span></span>
<span class="line"><span>        workbook.write();</span></span>
<span class="line"><span>        workbook.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2、excel的存储格式" tabindex="-1">2、Excel的存储格式 <a class="header-anchor" href="#_2、excel的存储格式" aria-label="Permalink to &quot;2、Excel的存储格式&quot;">​</a></h3><p>参考： <a href="https://albenw.github.io/posts/d093ca4e/" target="_blank" rel="noreferrer">https://albenw.github.io/posts/d093ca4e/</a></p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240404004217.png" alt="image.png"></p><p>Excel的存储格式</p><ul><li>XLS <ul><li>XLS一个Sheet最多也只能有 65535 行数据</li><li>每个Sheet最多只能有 256 列（从A到IV）</li></ul></li><li>XLSX（底层使用xml存储） <ul><li>一个Sheet最多可以有 1048576 行数据</li><li>每个Sheet最多可以有 16384 列（从A到XFD）</li><li>文件大小更小</li></ul></li></ul><h4 id="导出优化" tabindex="-1">导出优化 <a class="header-anchor" href="#导出优化" aria-label="Permalink to &quot;导出优化&quot;">​</a></h4><p>建议可以采用： SXSSFWorkbook 方式。</p><h4 id="导入优化" tabindex="-1">导入优化 <a class="header-anchor" href="#导入优化" aria-label="Permalink to &quot;导入优化&quot;">​</a></h4><p>官网示例： <a href="https://poi.apache.org/components/spreadsheet/how-to.html" target="_blank" rel="noreferrer">https://poi.apache.org/components/spreadsheet/how-to.html</a></p><p>POI对导入分为3种模式，用户模式 User Model，事件模式 Event Model，还有 Event User Model。</p><ul><li>POI对XLS支持 Event Model</li><li>POI对 XLSX 支持 Event Model 和 Event User Model</li></ul><p>默认采用：</p><p>Apache POI 在处理 <code>.xlsx</code> 文件时默认采用的是 User Model，它提供了更直观、更灵活的方式来处理 Excel 文件，但代价是较高的内存消耗。当处理大型文件或需要优化内存使用时，可以考虑使用 Event Model 或 Event User Model，尽管这需要更复杂的实现逻辑。</p><p>具体实现的话，可能会稍微复杂一点，需要自定义一些相关的配置和处理。</p><hr><h3 id="_3、easyexcel" tabindex="-1">3、EasyExcel <a class="header-anchor" href="#_3、easyexcel" aria-label="Permalink to &quot;3、EasyExcel&quot;">​</a></h3><p>对于导入的一些优化操作：</p><p>准备环境：</p><ul><li>使用 .xlsx 文件</li><li>导入的时候需要进行数据校验 <ul><li>数据校验有两种： <ul><li>字段长度、字段正则表达式校验等，内存内校验不存在外部数据交互。对性能影响较小。</li><li>数据重复性校验(需要查询数据库，十分影响性能)。</li></ul></li></ul></li><li>校验完成后，进行数据导入操作。 <ul><li>这里的环境是：数据库使用 MySQL 5.7，未分库分表，连接池使用 Druid</li></ul></li></ul><p>迭代记录：</p><ul><li><ol><li>POI + 逐行查询校对 + 逐行插入</li></ol></li><li><ol start="2"><li>EasyPOI + 缓存数据库查询操作 + 批量插入</li></ol></li><li><ol start="3"><li>EasyExcel + 缓存数据库查询操作 + 批量插入</li></ol></li></ul><h4 id="优化建议" tabindex="-1">优化建议 <a class="header-anchor" href="#优化建议" aria-label="Permalink to &quot;优化建议&quot;">​</a></h4><p>提升Excel导入速度的方法：</p><ul><li>使用更快的 Excel 读取框架(推荐使用阿里 EasyExcel)。</li><li>对于需要<strong>与数据库交互的校验</strong>、按照业务逻辑适当的使用缓存。用空间换时间。</li><li>使用 values( ),( ),( ) 拼接长 SQL 一次插入多行数据。</li><li>使用多线程插入数据，利用掉网络IO等待时间(推荐使用并行流，简单易用)。</li><li>避免在循环中打印无用的日志。</li></ul><hr><p>这里是使用的 若依 分离版进行二次改造</p><p>单独新增了一个页面，用于导入操作</p><p>引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;easyexcel&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.1.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>具体操作</p><ul><li>1、定义实体类</li><li>2、定义字典转换（如果需要，导出或者导入操作）</li><li>3、定义导入和导出接口（最简单）</li><li>4、考虑如何进行优化，并通过不同示例去掌握具体使用。</li></ul><p>参考： <a href="https://zhuanlan.zhihu.com/p/641135306" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/641135306</a></p><p>实体类：</p><p>这里定义一个车辆订单的信息</p><p>先进行数据库表设计，再做实体类的映射关系，这里不使用前端，就使用后端接口进行测试操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>订单号</span></span>
<span class="line"><span>订单状态</span></span>
<span class="line"><span>下单时间</span></span>
<span class="line"><span>排序号</span></span>
<span class="line"><span>VIN号</span></span></code></pre></div><p>创建表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE IF NOT EXISTS orders (</span></span>
<span class="line"><span>    order_id VARCHAR(32) NOT NULL,</span></span>
<span class="line"><span>    order_status VARCHAR(8) NOT NULL,</span></span>
<span class="line"><span>    order_time DATETIME NOT NULL,</span></span>
<span class="line"><span>    sort_number INT NOT NULL,</span></span>
<span class="line"><span>    vin_number VARCHAR(32) NOT NULL,</span></span>
<span class="line"><span>    PRIMARY KEY (order_id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>通过若以的代码生成，生成一下后端的代码</p><p>细节文件这里跳过</p><ul><li>Orders</li><li>OrdersController</li><li>IOrdersService</li><li>OrdersServiceImpl</li><li>OrdersMapper</li><li>OrdersMapper.xml</li></ul><h4 id="测试批量插入操作" tabindex="-1">测试批量插入操作 <a class="header-anchor" href="#测试批量插入操作" aria-label="Permalink to &quot;测试批量插入操作&quot;">​</a></h4><p>OrdersExcelOpertaion</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.luoqi.excel;</span></span>
<span class="line"><span>import com.ruoyi.system.domain.Orders;</span></span>
<span class="line"><span>import com.ruoyi.system.service.IOrdersService;</span></span>
<span class="line"><span>import org.junit.jupiter.api.Test;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.boot.test.context.SpringBootTest;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Random;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File OrdersDataInsertOpertaion.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/5 10:08</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class OrdersDataInsertOpertaion {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private IOrdersService ordersService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSomeServiceMethod() {</span></span>
<span class="line"><span>        int startNum = 1;</span></span>
<span class="line"><span>        int endNum = 1000;</span></span>
<span class="line"><span>        //计算耗时</span></span>
<span class="line"><span>        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        for(int i = startNum;i&lt;= endNum ;i ++){</span></span>
<span class="line"><span>            Orders orders = new Orders();</span></span>
<span class="line"><span>            orders.setOrderId(String.valueOf(i));</span></span>
<span class="line"><span>            orders.setOrderStatus(&quot;20&quot;);</span></span>
<span class="line"><span>            orders.setSortNumber((long) i);</span></span>
<span class="line"><span>            orders.setVinNumber(getRandomSeventeenLength());</span></span>
<span class="line"><span>            orders.setOrderTime(new Date());</span></span>
<span class="line"><span>            ordersService.insertOrders(orders);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法执行耗时: &quot; + (endTime - startTime) + &quot; 毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSomeServiceMethodBatch() {</span></span>
<span class="line"><span>        // 创建一个订单列表用于批量插入</span></span>
<span class="line"><span>        List&lt;Orders&gt; ordersList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        int startNum = 2001;</span></span>
<span class="line"><span>        int endNum = 10000;</span></span>
<span class="line"><span>        //计算耗时</span></span>
<span class="line"><span>        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        for(int i = startNum;i&lt;= endNum ;i ++){</span></span>
<span class="line"><span>            Orders orders = new Orders();</span></span>
<span class="line"><span>            orders.setOrderId(String.valueOf(i));</span></span>
<span class="line"><span>            orders.setOrderStatus(&quot;20&quot;);</span></span>
<span class="line"><span>            orders.setSortNumber((long) i);</span></span>
<span class="line"><span>            orders.setVinNumber(getRandomSeventeenLength());</span></span>
<span class="line"><span>            orders.setOrderTime(new Date());</span></span>
<span class="line"><span>            ordersList.add(orders);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ordersService.insertOrdersList(ordersList);</span></span>
<span class="line"><span>        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法执行耗时: &quot; + (endTime - startTime) + &quot; 毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSomeServiceMethodBatchUpdate() {</span></span>
<span class="line"><span>        //MySQL默认的最大包大小是4MB（可通过max_allowed_packet参数调整），这意味着一次批量插入操作的数据总量不能超过这个限制</span></span>
<span class="line"><span>        // 创建一个订单列表用于批量插入</span></span>
<span class="line"><span>        List&lt;Orders&gt; ordersList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        int startNum = 10001;</span></span>
<span class="line"><span>        int endNum = 20000;</span></span>
<span class="line"><span>        //计算耗时</span></span>
<span class="line"><span>        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        for(int i = startNum;i&lt;= endNum ;i ++){</span></span>
<span class="line"><span>            Orders orders = new Orders();</span></span>
<span class="line"><span>            orders.setOrderId(String.valueOf(i));</span></span>
<span class="line"><span>            orders.setOrderStatus(&quot;20&quot;);</span></span>
<span class="line"><span>            orders.setSortNumber((long) i);</span></span>
<span class="line"><span>            orders.setVinNumber(getRandomSeventeenLength());</span></span>
<span class="line"><span>            orders.setOrderTime(new Date());</span></span>
<span class="line"><span>            ordersList.add(orders);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //批量大小的控制看实际情况，一方面要考虑实际插入大小（包括数据复杂的程度），另一方面还要考虑网络、数据库等的影响</span></span>
<span class="line"><span>        ordersService.batchInsert(ordersList,1000);</span></span>
<span class="line"><span>        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法执行耗时: &quot; + (endTime - startTime) + &quot; 毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getRandomSeventeenLength()  {</span></span>
<span class="line"><span>        Random random = new Random();</span></span>
<span class="line"><span>        StringBuilder sb = new StringBuilder(17);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 定义可能出现的字符集</span></span>
<span class="line"><span>        String characters = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int i = 0; i &lt; 17; i++) {</span></span>
<span class="line"><span>            // 随机选择一个字符</span></span>
<span class="line"><span>            int index = random.nextInt(characters.length());</span></span>
<span class="line"><span>            sb.append(characters.charAt(index));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String randomString = sb.toString();</span></span>
<span class="line"><span>        return randomString;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>特意说一下这个分配插入这里，这里是在 service 添加了一下事务控制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override  </span></span>
<span class="line"><span>@Transactional  </span></span>
<span class="line"><span>public void batchInsert(List&lt;Orders&gt; allOrders, int batchSize) {  </span></span>
<span class="line"><span>    // 分批处理数据  </span></span>
<span class="line"><span>    int totalSize = allOrders.size();  </span></span>
<span class="line"><span>    for (int i = 0; i &lt; totalSize; i += batchSize) {  </span></span>
<span class="line"><span>        int end = Math.min(totalSize, i + batchSize);  </span></span>
<span class="line"><span>        List&lt;Orders&gt; batchList = allOrders.subList(i, end);  </span></span>
<span class="line"><span>        // 执行批量插入  </span></span>
<span class="line"><span>        ordersMapper.insertOrdersList(batchList);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试数据添加的情况</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>遍历插入1000条数据，方法执行耗时: 1465 毫秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>批量插入1000条数据，方法执行耗时: 205 毫秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>批量插入8000条数据，方法执行耗时: 699 毫秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分批量插入 10000条数据，每次插入1000条，方法执行耗时: 650 毫秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分批量插入 20000条数据，每次插入1000条，方法执行耗时: 875 毫秒</span></span></code></pre></div><p>分批量的情况下的确会好很多</p><h4 id="自定义导出-excel-注解" tabindex="-1">自定义导出 Excel 注解 <a class="header-anchor" href="#自定义导出-excel-注解" aria-label="Permalink to &quot;自定义导出 Excel 注解&quot;">​</a></h4><p>在实际使用到 若依 的分离版项目的时候，他这里并没有使用 easyexcel ，仍然使用的是 poi ，然后使用了 自定义注解的方式。</p><p>SysLogininfor 待分析</p><p>to be contined....</p><h4 id="easyexcel-的一些基础操作" tabindex="-1">EasyExcel 的一些基础操作 <a class="header-anchor" href="#easyexcel-的一些基础操作" aria-label="Permalink to &quot;EasyExcel 的一些基础操作&quot;">​</a></h4><p>常用的一些注解属性，一般在 domain 类上使用</p><ul><li><strong>@ExcelProperty：</strong> 核心注解，value属性可用来设置表头名称，converter属性可以用来设置类型转换器；</li><li><strong>@ColumnWidth：</strong> 用于设置表格列的宽度；</li><li><strong>@DateTimeFormat：</strong> 用于设置日期转换格式；</li><li><strong>@NumberFormat：</strong> 用于设置数字转换格式。</li></ul><p>建议看一下官网的示例： <a href="https://easyexcel.opensource.alibaba.com" target="_blank" rel="noreferrer">https://easyexcel.opensource.alibaba.com</a></p><p>Order</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.system.domain;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.excel.annotation.ExcelIgnore;</span></span>
<span class="line"><span>import com.alibaba.excel.annotation.ExcelProperty;</span></span>
<span class="line"><span>import com.alibaba.excel.annotation.format.DateTimeFormat;</span></span>
<span class="line"><span>import com.alibaba.excel.annotation.write.style.ColumnWidth;</span></span>
<span class="line"><span>import com.fasterxml.jackson.annotation.JsonFormat;</span></span>
<span class="line"><span>import com.ruoyi.system.domain.converter.OrderStatusConverter;</span></span>
<span class="line"><span>import org.apache.commons.lang3.builder.ToStringBuilder;</span></span>
<span class="line"><span>import org.apache.commons.lang3.builder.ToStringStyle;</span></span>
<span class="line"><span>import com.ruoyi.common.annotation.Excel;</span></span>
<span class="line"><span>import com.ruoyi.common.core.domain.BaseEntity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File Orders.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/5 9:47</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Orders</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private static final long serialVersionUID = 1L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExcelProperty(value = &quot;订单ID&quot;)</span></span>
<span class="line"><span>    private String orderId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //Excel的列描述, 字典转换：converter , converter = OrderStatusConverter.class</span></span>
<span class="line"><span>    @ExcelProperty(value = &quot;订单状态&quot;, converter = OrderStatusConverter.class)</span></span>
<span class="line"><span>    //列宽</span></span>
<span class="line"><span>    @ColumnWidth(20)</span></span>
<span class="line"><span>    private String orderStatus;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExcelProperty(&quot;订单时间&quot;)</span></span>
<span class="line"><span>    //日期转换格式</span></span>
<span class="line"><span>    @DateTimeFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;)</span></span>
<span class="line"><span>    private Date orderTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExcelProperty(&quot;排序号&quot;)</span></span>
<span class="line"><span>    private Long sortNumber;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExcelProperty(&quot;VIN号&quot;)</span></span>
<span class="line"><span>    private String vinNumber;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setOrderId(String orderId)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.orderId = orderId;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getOrderId()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return orderId;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setOrderStatus(String orderStatus)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.orderStatus = orderStatus;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getOrderStatus()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return orderStatus;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setOrderTime(Date orderTime)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.orderTime = orderTime;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Date getOrderTime()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return orderTime;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setSortNumber(Long sortNumber)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.sortNumber = sortNumber;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Long getSortNumber()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return sortNumber;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setVinNumber(String vinNumber)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.vinNumber = vinNumber;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getVinNumber()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return vinNumber;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)</span></span>
<span class="line"><span>                .append(&quot;orderId&quot;, getOrderId())</span></span>
<span class="line"><span>                .append(&quot;orderStatus&quot;, getOrderStatus())</span></span>
<span class="line"><span>                .append(&quot;orderTime&quot;, getOrderTime())</span></span>
<span class="line"><span>                .append(&quot;sortNumber&quot;, getSortNumber())</span></span>
<span class="line"><span>                .append(&quot;vinNumber&quot;, getVinNumber())</span></span>
<span class="line"><span>                .toString();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用这个类导出的时候遇到一个坑，建议不要继承子类，导出是导出所有字段，除非你字段上显示忽略</p><p>OrderStatusConverter</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.ruoyi.system.domain.converter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.excel.converters.Converter;</span></span>
<span class="line"><span>import com.alibaba.excel.converters.ReadConverterContext;</span></span>
<span class="line"><span>import com.alibaba.excel.converters.WriteConverterContext;</span></span>
<span class="line"><span>import com.alibaba.excel.enums.CellDataTypeEnum;</span></span>
<span class="line"><span>import com.alibaba.excel.metadata.data.WriteCellData;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author luoqi</span></span>
<span class="line"><span> * @File OrderStatusConverter.java</span></span>
<span class="line"><span> * @Desc</span></span>
<span class="line"><span> * @Create 2024/4/5 11:25</span></span>
<span class="line"><span> * @ChangeList --------------------------------------------------------------------</span></span>
<span class="line"><span> * Date                          Editor                     ChangeReason</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class OrderStatusConverter implements Converter&lt;String&gt; {</span></span>
<span class="line"><span>    private static final Map&lt;String, String&gt; statusToDescriptionMap = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    private static final Map&lt;String, String&gt; descriptionToStatusMap = new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;00&quot;, &quot;初始化&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;05&quot;, &quot;排序&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;10&quot;, &quot;VIN生成&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;15&quot;, &quot;展开&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;20&quot;, &quot;发布&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;25&quot;, &quot;在制&quot;);</span></span>
<span class="line"><span>        statusToDescriptionMap.put(&quot;30&quot;, &quot;下线&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;初始化&quot;, &quot;00&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;排序&quot;, &quot;05&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;VIN生成&quot;, &quot;10&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;展开&quot;, &quot;15&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;发布&quot;, &quot;20&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;在制&quot;, &quot;25&quot;);</span></span>
<span class="line"><span>        descriptionToStatusMap.put(&quot;下线&quot;, &quot;30&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Class&lt;String&gt; supportJavaTypeKey() {</span></span>
<span class="line"><span>        return String.class;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public CellDataTypeEnum supportExcelTypeKey() {</span></span>
<span class="line"><span>        return CellDataTypeEnum.STRING;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //导入时进行类型转换操作</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String convertToJavaData(ReadConverterContext&lt;?&gt; context) {</span></span>
<span class="line"><span>        String description = context.getReadCellData().getStringValue();</span></span>
<span class="line"><span>        return descriptionToStatusMap.getOrDefault(description, &quot;未知状态码&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //导出时进行类型转换操作</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public WriteCellData&lt;?&gt; convertToExcelData(WriteConverterContext&lt;String&gt; context) {</span></span>
<span class="line"><span>        String description = statusToDescriptionMap.getOrDefault(context.getValue(), &quot;未知状态&quot;);</span></span>
<span class="line"><span>        return new WriteCellData&lt;&gt;(description);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@SpringBootTest  </span></span>
<span class="line"><span>public class OrdersExcelOpertaion {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Autowired  </span></span>
<span class="line"><span>    private IOrdersService ordersService;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Test  </span></span>
<span class="line"><span>    public void exportOrderExcel2() {  </span></span>
<span class="line"><span>            Orders orders = new Orders();  </span></span>
<span class="line"><span>            orders.setSortNumber(789L);  </span></span>
<span class="line"><span>            List&lt;Orders&gt; list = ordersService.selectOrdersList(orders);  </span></span>
<span class="line"><span>            String fileName = &quot;path/to/orderExcel2.xlsx&quot;;  </span></span>
<span class="line"><span>            EasyExcel.write(fileName, Orders.class)  </span></span>
<span class="line"><span>                    .head(Orders.class)  </span></span>
<span class="line"><span>                    .sheet(&quot;用户列表&quot;)  </span></span>
<span class="line"><span>                    .doWrite(list);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Test  </span></span>
<span class="line"><span>    public void importOrderExcel2() {  </span></span>
<span class="line"><span>        try {  </span></span>
<span class="line"><span>            FileInputStream file = new FileInputStream(new File(&quot;path/to/orderExcel2.xlsx&quot;));  </span></span>
<span class="line"><span>            List&lt;Orders&gt; ordersList = EasyExcel.read(file)  </span></span>
<span class="line"><span>                    .head(Orders.class)  </span></span>
<span class="line"><span>                    .sheet()  </span></span>
<span class="line"><span>                    .doReadSync();  </span></span>
<span class="line"><span>            for(Orders orders:ordersList)  </span></span>
<span class="line"><span>            {  </span></span>
<span class="line"><span>                System.out.println(orders);  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>            //读取后进行存放  </span></span>
<span class="line"><span>            ordersService.batchInsert(ordersList,100);  </span></span>
<span class="line"><span>        } catch (IOException e) {  </span></span>
<span class="line"><span>            System.out.println(&quot;执行异常&quot;);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果是在 controller 类上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@GetMapping(&quot;/export2/order&quot;)  </span></span>
<span class="line"><span>public void exportOrderExcel(HttpServletResponse response) {  </span></span>
<span class="line"><span>    try {  </span></span>
<span class="line"><span>        Orders orders = new Orders();  </span></span>
<span class="line"><span>        orders.setSortNumber(789L);  </span></span>
<span class="line"><span>        //这个方法用于设置响应头，以便告知浏览器要下载一个文件，而不是直接在浏览器中打开这个响应。  </span></span>
<span class="line"><span>        this.setExcelResponseProp(response, &quot;用户列表&quot;);  </span></span>
<span class="line"><span>        List&lt;Orders&gt; list = ordersService.selectOrdersList(orders);  </span></span>
<span class="line"><span>        EasyExcel.write(response.getOutputStream())  </span></span>
<span class="line"><span>                .head(Orders.class)  </span></span>
<span class="line"><span>                .excelType(ExcelTypeEnum.XLSX)  </span></span>
<span class="line"><span>                .sheet(&quot;用户列表&quot;)  </span></span>
<span class="line"><span>                .doWrite(list);  </span></span>
<span class="line"><span>    } catch (IOException e) {  </span></span>
<span class="line"><span>        throw new RuntimeException(e);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public void setExcelResponseProp(HttpServletResponse response, String fileName) {  </span></span>
<span class="line"><span>    try {  </span></span>
<span class="line"><span>        // 防止中文乱码  </span></span>
<span class="line"><span>        fileName = URLEncoder.encode(fileName, StandardCharsets.UTF_8.name());  </span></span>
<span class="line"><span>    } catch (UnsupportedEncodingException e) {  </span></span>
<span class="line"><span>        // 日志记录错误或其他处理  </span></span>
<span class="line"><span>        throw new RuntimeException(&quot;文件名编码失败&quot;, e);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 设置响应类型  </span></span>
<span class="line"><span>    response.setContentType(&quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;);  </span></span>
<span class="line"><span>    // 设置文件名  </span></span>
<span class="line"><span>    response.setHeader(&quot;Content-disposition&quot;, &quot;attachment;filename=&quot; + fileName);  </span></span>
<span class="line"><span>    // 防止浏览器缓存  </span></span>
<span class="line"><span>    response.setHeader(&quot;Pragma&quot;, &quot;no-cache&quot;);  </span></span>
<span class="line"><span>    response.setHeader(&quot;Cache-Control&quot;, &quot;no-cache&quot;);  </span></span>
<span class="line"><span>    response.setDateHeader(&quot;Expires&quot;, 0);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>@PostMapping(&quot;/import2/order&quot;)  </span></span>
<span class="line"><span>public AjaxResult importOrderExcel(@RequestPart(value = &quot;file&quot;) MultipartFile file) {  </span></span>
<span class="line"><span>    try {  </span></span>
<span class="line"><span>        List&lt;Orders&gt; ordersList = EasyExcel.read(file.getInputStream())  </span></span>
<span class="line"><span>                .head(Orders.class)  </span></span>
<span class="line"><span>                .sheet()  </span></span>
<span class="line"><span>                .doReadSync();  </span></span>
<span class="line"><span>        for(Orders orders:ordersList)  </span></span>
<span class="line"><span>        {  </span></span>
<span class="line"><span>            System.out.println(orders);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        //读取后进行存放  </span></span>
<span class="line"><span>        ordersService.batchInsert(ordersList,100);  </span></span>
<span class="line"><span>        return success(ordersList);  </span></span>
<span class="line"><span>    } catch (IOException e) {  </span></span>
<span class="line"><span>        return error();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>本人使用的是 apifox</p><p>导出操作（选择发送并下载）</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240405161551.png" alt="image.png"></p><p>导入操作（主要是 body 这里注意一下）</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240405161626.png" alt="image.png"></p><h4 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h4><ul><li>1、看官网，去看示例</li><li>2、主要是掌握一些优化手段</li></ul><p>包括：</p><ul><li>使用更快的 Excel 读取框架(推荐使用阿里 EasyExcel)。</li><li>对于需要<strong>与数据库交互的校验</strong>、按照业务逻辑适当的使用缓存。用空间换时间。</li><li>使用 values( ),( ),( ) 拼接长 SQL 一次插入多行数据。</li><li>使用多线程插入数据，利用掉网络IO等待时间(推荐使用并行流，简单易用)。</li><li>避免在循环中打印无用的日志。</li></ul><p>讲一下第四点：</p><p>在处理大量数据导入数据库时，网络I/O等待时间（特别是在分布式数据库环境中）可能成为性能瓶颈。</p><p>为了减少这些等待时间并提高数据处理速度，可以采用多线程或并行处理技术来并发执行数据插入操作。Java 8引入的并行流（Parallel Streams）提供了一种简单而强大的方式来利用多核处理器的并行处理能力。</p><blockquote><p>使用并行流进行数据插入</p></blockquote><p>并行流利用了Java的<code>ForkJoinPool</code>，它将一个大任务拆分成多个小任务，这些小任务被分发到线程池中的不同线程上并行执行，最后将结果合并。这使得并行流特别适合进行批量数据处理和插入操作。</p><p>以下是一个使用并行流进行数据插入优化的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSomeServiceMethodBatchUpdateByForkJoin() {</span></span>
<span class="line"><span>        //MySQL默认的最大包大小是4MB（可通过max_allowed_packet参数调整），这意味着一次批量插入操作的数据总量不能超过这个限制</span></span>
<span class="line"><span>        // 创建一个订单列表用于批量插入</span></span>
<span class="line"><span>        List&lt;Orders&gt; ordersList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        int startNum = 40001;</span></span>
<span class="line"><span>        int endNum = 60000;</span></span>
<span class="line"><span>        //计算耗时</span></span>
<span class="line"><span>        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        for(int i = startNum;i&lt;= endNum ;i ++){</span></span>
<span class="line"><span>            Orders orders = new Orders();</span></span>
<span class="line"><span>            orders.setOrderId(String.valueOf(i));</span></span>
<span class="line"><span>            orders.setOrderStatus(&quot;20&quot;);</span></span>
<span class="line"><span>            orders.setSortNumber((long) i);</span></span>
<span class="line"><span>            orders.setVinNumber(getRandomSeventeenLength());</span></span>
<span class="line"><span>            orders.setOrderTime(new Date());</span></span>
<span class="line"><span>            ordersList.add(orders);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //批量大小的控制看实际情况，一方面要考虑实际插入大小（包括数据复杂的程度），另一方面还要考虑网络、数据库等的影响</span></span>
<span class="line"><span>        importData(ordersList);</span></span>
<span class="line"><span>        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        System.out.println(&quot;方法执行耗时: &quot; + (endTime - startTime) + &quot; 毫秒&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 自定义并行度</span></span>
<span class="line"><span>    private static final int parallelism = 4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void importData1(List&lt;Orders&gt; dataList) {</span></span>
<span class="line"><span>        int batchSize = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用自定义的ForkJoinPool来控制并行流的并行度</span></span>
<span class="line"><span>        ForkJoinPool customThreadPool = new ForkJoinPool(parallelism);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            customThreadPool.submit(() -&gt; {</span></span>
<span class="line"><span>                // 分批处理数据，使用并行流进行批量插入</span></span>
<span class="line"><span>                dataList.stream()</span></span>
<span class="line"><span>                        .collect(Collectors.groupingBy(data -&gt; dataList.indexOf(data) / batchSize))</span></span>
<span class="line"><span>                        .values()</span></span>
<span class="line"><span>                        .parallelStream()</span></span>
<span class="line"><span>                        .forEach(batchList -&gt; ordersService.batchInsert(batchList,batchSize));</span></span>
<span class="line"><span>            }).get(); // 等待所有任务完成</span></span>
<span class="line"><span>        } catch (InterruptedException | ExecutionException e) {</span></span>
<span class="line"><span>            Thread.currentThread().interrupt();</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;Failed to import data in parallel&quot;, e);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            customThreadPool.shutdown();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void importData(List&lt;Orders&gt; dataList) {</span></span>
<span class="line"><span>        int batchSize = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用自定义的ForkJoinPool来控制并行流的并行度</span></span>
<span class="line"><span>        ForkJoinPool customThreadPool = new ForkJoinPool(parallelism);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            customThreadPool.submit(() -&gt;</span></span>
<span class="line"><span>                    //改进点：1、直接使用批次索引；2、避免使用 indexOf；3、数据分割考虑使用其他方式替代 groupingBy</span></span>
<span class="line"><span>                    IntStream.range(0, (dataList.size() + batchSize - 1) / batchSize)</span></span>
<span class="line"><span>                            .parallel()</span></span>
<span class="line"><span>                            .mapToObj(batchNum -&gt; dataList.subList(batchNum * batchSize,</span></span>
<span class="line"><span>                                    Math.min(dataList.size(), (batchNum + 1) * batchSize)))</span></span>
<span class="line"><span>                            .forEach(batchList -&gt; ordersService.batchInsert(batchList, batchSize))</span></span>
<span class="line"><span>            ).get(); // 等待所有任务完成</span></span>
<span class="line"><span>        } catch (InterruptedException | ExecutionException e) {</span></span>
<span class="line"><span>            Thread.currentThread().interrupt();</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;Failed to import data in parallel&quot;, e);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            customThreadPool.shutdown();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>使用 importData 方法，可以在 分批量插入 20000条数据，每次插入1000条，方法执行耗时: 800 毫秒；的基础上提升到 500毫秒左右。</p><h3 id="_4、导出优化" tabindex="-1">4、导出优化 <a class="header-anchor" href="#_4、导出优化" aria-label="Permalink to &quot;4、导出优化&quot;">​</a></h3><p>上文虽然讲述了一下 EasyExcel 的基础使用，以及对于导入操作的一些常见的优化手段，但关于导入，其实还有一些内容需要去了解下，这里主要以 <a href="https://mp.weixin.qq.com/s/5Ytgq_B8nvgFpU3FNeiyOQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/5Ytgq_B8nvgFpU3FNeiyOQ</a> 这篇文章内容，然后实际去运行和跑，看一下实际的效果。</p><p>先过一下基本的一些思路，实现放一下后面</p><ul><li>1、依然是使用 esayexcel 的开源框架，内部进行了很大的一个优化，比起 Poi 的方式来说；</li><li>2、基本处理方式 <ul><li>一个SHEET一次查询导出</li><li>数据量适中（100W以内）：一个SHEET分批查询导出</li><li>数据里很大（几百万都行）：多个SHEET分批查询导出</li></ul></li></ul><p>参考： <a href="https://www.cxyxiaowu.com/20723.html" target="_blank" rel="noreferrer">https://www.cxyxiaowu.com/20723.html</a></p><hr><p>参考：</p><ul><li><a href="https://albenw.github.io/posts/d093ca4e/" target="_blank" rel="noreferrer">https://albenw.github.io/posts/d093ca4e/</a></li><li><a href="https://www.51cto.com/article/717718.html" target="_blank" rel="noreferrer">https://www.51cto.com/article/717718.html</a></li><li><a href="https://mp.weixin.qq.com/s/5Ytgq_B8nvgFpU3FNeiyOQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/5Ytgq_B8nvgFpU3FNeiyOQ</a></li><li><a href="https://github.com/alibaba/easyexcel" target="_blank" rel="noreferrer">https://github.com/alibaba/easyexcel</a></li><li><a href="https://www.bilibili.com/video/BV13m4y1p7GJ" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV13m4y1p7GJ</a></li><li><a href="https://blog.csdn.net/yangxiao_hui/article/details/103262704" target="_blank" rel="noreferrer">https://blog.csdn.net/yangxiao_hui/article/details/103262704</a></li><li><a href="https://zhuanlan.zhihu.com/p/641135306" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/641135306</a></li></ul>`,106)])])}const m=n(l,[["render",i]]);export{h as __pageData,m as default};
