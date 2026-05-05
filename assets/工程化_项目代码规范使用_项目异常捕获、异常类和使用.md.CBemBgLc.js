import{_ as n,o as a,c as e,am as t}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"项目异常捕获、异常类和使用","description":"","frontmatter":{"title":"项目异常捕获、异常类和使用","excerpt":"摘要","date":"2025-11-18 11:00:56","updated":"2025-11-18 11:00:56"},"headers":[],"relativePath":"工程化/项目代码规范使用/项目异常捕获、异常类和使用.md","filePath":"工程化/项目代码规范使用/项目异常捕获、异常类和使用.md","lastUpdated":null}'),p={name:"工程化/项目代码规范使用/项目异常捕获、异常类和使用.md"};function l(i,s,o,c,r,d){return a(),e("div",null,[...s[0]||(s[0]=[t(`<h3 id="异常捕获" tabindex="-1">异常捕获 <a class="header-anchor" href="#异常捕获" aria-label="Permalink to &quot;异常捕获&quot;">​</a></h3><h4 id="局部捕获" tabindex="-1">局部捕获 <a class="header-anchor" href="#局部捕获" aria-label="Permalink to &quot;局部捕获&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>try {</span></span>
<span class="line"><span>    // 可能发生异常的代码</span></span>
<span class="line"><span>    int result = 10 / 0;</span></span>
<span class="line"><span>} catch (ArithmeticException e) {</span></span>
<span class="line"><span>    log.error(&quot;出现异常：&quot;, e); // 记录日志</span></span>
<span class="line"><span>    throw e; // 再抛出供上层调用者处理</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>一般捕获异常后，会进行日志记录，写入日志文件或告警系统。</p><h4 id="全局捕获" tabindex="-1">全局捕获 <a class="header-anchor" href="#全局捕获" aria-label="Permalink to &quot;全局捕获&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@RestControllerAdvice</span></span>
<span class="line"><span>public class GlobalExceptionHandler {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ExceptionHandler(Exception.class)</span></span>
<span class="line"><span>    public ResponseEntity&lt;String&gt; handleException(Exception e) {</span></span>
<span class="line"><span>        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(&quot;系统错误：&quot; + e.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExceptionHandler(BusinessException.class)</span></span>
<span class="line"><span>    public ResponseEntity&lt;String&gt; handleBusinessException(BusinessException e) {</span></span>
<span class="line"><span>        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;业务异常：&quot; + e.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="异常类设计" tabindex="-1">异常类设计 <a class="header-anchor" href="#异常类设计" aria-label="Permalink to &quot;异常类设计&quot;">​</a></h3><p>Java 语言中的异常定义分类：</p><ul><li><strong>检查型异常（Checked Exception）：</strong> 必须显式处理（<code>throws</code> 或 <code>try-catch</code>），如 <code>IOException</code> 等</li><li><strong>运行时异常（Unchecked Exception）：</strong> 是继承自 <code>RuntimeException</code> 的异常，程序可以不必捕获，默认会向上抛出</li></ul><p>在项目开发的时候，我们一般会将异常分为两类：</p><ul><li><strong>业务异常：</strong> 适合使用 <code>RuntimeException</code>（可以继承）</li><li><strong>系统异常：</strong> 适合继承 <code>Exception</code>（检查型）</li></ul><p>实际的项目中使用. to be contined...</p>`,12)])])}const _=n(p,[["render",l]]);export{h as __pageData,_ as default};
