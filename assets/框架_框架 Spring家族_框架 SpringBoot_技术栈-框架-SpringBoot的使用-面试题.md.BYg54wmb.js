import{_ as s,o as a,c as p,am as l}from"./chunks/framework.CiF4W93w.js";const u=JSON.parse('{"title":"技术栈-框架-SpringBoot的使用-面试题","description":"","frontmatter":{"title":"技术栈-框架-SpringBoot的使用-面试题","excerpt":"摘要","date":"2025-05-21 00:38:38","updated":"2025-05-21 00:38:38"},"headers":[],"relativePath":"框架/框架 Spring家族/框架 SpringBoot/技术栈-框架-SpringBoot的使用-面试题.md","filePath":"框架/框架 Spring家族/框架 SpringBoot/技术栈-框架-SpringBoot的使用-面试题.md","lastUpdated":null}'),i={name:"框架/框架 Spring家族/框架 SpringBoot/技术栈-框架-SpringBoot的使用-面试题.md"};function e(o,n,t,r,c,g){return a(),p("div",null,[...n[0]||(n[0]=[l(`<p>后面再整理一下，和之前自己的面试煎熬内容一起整理一下</p><h3 id="二、基础内容" tabindex="-1">二、基础内容 <a class="header-anchor" href="#二、基础内容" aria-label="Permalink to &quot;二、基础内容&quot;">​</a></h3><h4 id="_2-1-配置文件格式" tabindex="-1">2.1 配置文件格式 <a class="header-anchor" href="#_2-1-配置文件格式" aria-label="Permalink to &quot;2.1  配置文件格式&quot;">​</a></h4><blockquote><p>Spring Boot的配置文件有哪几种格式？核心配置文件有哪些？</p></blockquote><div class="language-ad-tldr vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ad-tldr</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: 说明</span></span>
<span class="line"><span>collapse: open 或 closed</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spring Boot支持以下几种格式的配置文件：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **properties文件**：传统的Java属性文件，使用\`.properties\`后缀，文件格式是键值对形式，文件名通常是\`application.properties\`或\`bootstrap.properties\`。</span></span>
<span class="line"><span>2. **YAML文件**：更为现代的配置文件格式，使用\`.yml\`或\`.yaml\`后缀，使用缩进来表示层级关系，文件名通常是\`application.yml\`或\`bootstrap.yml\`。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>核心配置文件通常是指：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **application.properties** 或 **application.yml**：这是Spring Boot的主要配置文件。在此文件中定义的属性可以应用于你的Spring Boot应用程序的任何部分。</span></span>
<span class="line"><span>2. **bootstrap.properties** 或 **bootstrap.yml**：当使用Spring Cloud Config时，这些文件用于外部配置的早期加载。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这些文件可以放在以下位置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 项目的根目录。</span></span>
<span class="line"><span>- \`/config\` 子目录。</span></span>
<span class="line"><span>- 类路径的根目录 (\`/resources\` 或 \`/src/main/resources\`)。</span></span>
<span class="line"><span>- 类路径的\`/config\` 包。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spring Boot会按照特定的顺序来加载这些配置文件，以确保属性的正确覆盖和加载。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>上面提到的  bootstrap 配置文件是属于 SpringCloud 环境，需要引入相关依赖；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 SpringCloud 环境中，**bootstrap配置文件会优先于application配置文件加载**，它主要用于从额外的资源来加载配置参数，通常用来加载外部配置，如Spring Cloud用于加载配置中心的配置参数，也可以用来定义系统不会被改变的参数，它们默认不能被本地相同的配置所覆盖。</span></span></code></pre></div><h4 id="_2-2-配置加载顺序" tabindex="-1">2.2 配置加载顺序 <a class="header-anchor" href="#_2-2-配置加载顺序" aria-label="Permalink to &quot;2.2 配置加载顺序&quot;">​</a></h4><blockquote><p>Spring Boot配置加载顺序是怎样的？</p></blockquote><div class="language-ad-tldr vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ad-tldr</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: 说明</span></span>
<span class="line"><span>collapse: open 或 closed</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spring Boot的配置加载顺序设计用于支持不同的配置需求和环境，从而允许在运行时覆盖应用程序的配置。以下是Spring Boot配置加载的顺序，从高优先级到低优先级：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **开发者工具的配置属性** (如果使用Spring Boot的开发者工具)。</span></span>
<span class="line"><span>2. **命令行参数** (\`java -jar myproject.jar --name=&quot;Spring&quot;\`).</span></span>
<span class="line"><span>3. **来自\`SPRING_APPLICATION_JSON\`的属性** (环境变量或系统属性中的内联JSON)。</span></span>
<span class="line"><span>4. **\`ServletConfig\`初始化参数**。</span></span>
<span class="line"><span>5. **\`ServletContext\`初始化参数**。</span></span>
<span class="line"><span>6. **\`java:comp/env\`里的JNDI属性**。</span></span>
<span class="line"><span>7. **Java系统属性** (\`System.getProperties()\`).</span></span>
<span class="line"><span>8. **操作系统环境变量**。</span></span>
<span class="line"><span>9. *   只有在random. 里定义的随机属性。</span></span>
<span class="line"><span>10. **应用程序在打包时提供的JAR文件外的\`application.properties\`或\`application.yml\`文件**。</span></span>
<span class="line"><span>11. **应用程序打包在JAR内的\`application.properties\`或\`application.yml\`文件**。</span></span>
<span class="line"><span>12. **通过\`@PropertySource\`注解在\`@Configuration\`类上定义的属性**。</span></span>
<span class="line"><span>13. **默认属性** (通过\`SpringApplication.setDefaultProperties\`指定)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在这个顺序中，较高的属性将覆盖较低的属性。这就是为什么命令行参数可以覆盖\`application.properties\`中的属性，因为命令行参数的优先级更高。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>辅助理解：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**命令行 &gt; 外部配置 &gt; 内部配置**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重点配置来源及其优先级（从高到低）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 命令行参数</span></span>
<span class="line"><span>- 外部Jar包配置文件</span></span>
<span class="line"><span>- 应用程序配置文件</span></span>
<span class="line"><span>- 默认属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **命令行参数**：</span></span>
<span class="line"><span>    - 最直接的覆盖方式，适用于临时改变某些配置。</span></span>
<span class="line"><span>    - 例如：\`java -jar app.jar --server.port=9090\`</span></span>
<span class="line"><span>2. **外部配置文件**（外部\`application.properties\`或\`application.yml\`）：</span></span>
<span class="line"><span>    - 这包括位于应用程序jar文件同级目录下的配置文件，或通过\`--spring.config.location\`指定的路径。</span></span>
<span class="line"><span>    - 这些配置文件优先于应用程序内部的配置文件。</span></span>
<span class="line"><span>3. **应用程序内部配置文件**（内部\`application.properties\`或\`application.yml\`）：</span></span>
<span class="line"><span>    - 打包在应用程序jar内的配置文件。</span></span>
<span class="line"><span>    - 对于默认配置或开发时的配置非常有用。</span></span>
<span class="line"><span>4. **\`@PropertySource\`注解**：</span></span>
<span class="line"><span>    - 可以在Spring \`@Configuration\`类上指定额外的配置源。</span></span>
<span class="line"><span>    - 适用于更细粒度的配置或环境特定配置。</span></span>
<span class="line"><span>5. **默认属性**：</span></span>
<span class="line"><span>    - 通过编码方式设置的默认配置，通常在应用启动类中设置。</span></span>
<span class="line"><span>    - 适用于定义全局的回退配置。</span></span></code></pre></div><hr><h4 id="_2-3-常用的日志框架" tabindex="-1">2.3 常用的日志框架 <a class="header-anchor" href="#_2-3-常用的日志框架" aria-label="Permalink to &quot;2.3 常用的日志框架&quot;">​</a></h4><blockquote><p>Spring Boot支持哪些日志框架？</p></blockquote><div class="language-ad-tldr vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ad-tldr</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: 题目解析</span></span>
<span class="line"><span>collapse: open 或 closed</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spring Boot支持以下日志框架：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **Logback** (默认): Spring Boot默认使用Logback作为日志框架。</span></span>
<span class="line"><span>2. **Log4j2**: 通过排除Spring Boot的默认日志依赖并包含log4j2的依赖，可以使用Log4j2。</span></span>
<span class="line"><span>3. **JUL (Java Util Logging)**: Spring Boot也支持JUL，但通常需要额外的配置来整合。</span></span>
<span class="line"><span>4. **SLF4J**: Spring Boot使用SLF4J作为日志抽象层，你可以将其与上述任何日志实现配合使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为了使用特定的日志框架，你需要在项目的依赖管理文件中（如pom.xml或build.gradle）包含对应的依赖，并适当配置日志框架的配置文件（如logback-spring.xml, log4j2.xml等）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>同时需要注意的是：目前Apache已经宣布停止对Log4j 1.x的更新和支持，并且 Log4j 出现了严重的安全漏洞（如Log4Shell）；因此目前 SpringBoot 也不支持  Log4j 版本；我们在使用的时候需要选择 **Log4j2** 而不是 Log4j。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: 配置示例</span></span>
<span class="line"><span>collapse: open 或 closed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Spring Boot配置示例，指定日志框架为Logback</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  main:</span></span>
<span class="line"><span>    web-application-type: none</span></span>
<span class="line"><span>logging:</span></span>
<span class="line"><span>  config: classpath:logback-spring.xml</span></span></code></pre></div><h4 id="_2-4-日志属性配置" tabindex="-1">2.4 日志属性配置 <a class="header-anchor" href="#_2-4-日志属性配置" aria-label="Permalink to &quot;2.4 日志属性配置&quot;">​</a></h4><blockquote><p>Spring Boot如何配置日志？</p></blockquote><p>在Spring Boot中配置日志的关键点主要涉及到日志级别的设置、日志输出的定位以及日志的格式自定义。这些配置项可以通过<code>application.properties</code>或<code>application.yml</code>文件来灵活设置。</p><p>下面是关于这些配置的重点整理：</p><blockquote><ol><li>设置日志级别</li></ol></blockquote><ul><li><strong>目的</strong>：控制日志的输出粒度，例如，在开发过程中可能需要更详细的日志（如<code>DEBUG</code>或<code>TRACE</code>级别），而在生产环境中可能只需<code>INFO</code>或<code>WARN</code>级别的日志。</li><li><strong>配置方式</strong>：<code>logging.level.&lt;logger-name&gt;=&lt;level&gt;</code></li><li><strong>示例</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 设置根日志记录器的日志级别为WARN，这意味着只有WARN级别以上的日志消息（WARN, ERROR, FATAL）会被记录。</span></span>
<span class="line"><span>logging.level.root=WARN</span></span>
<span class="line"><span># 设置org.springframework.web包下的日志记录器的日志级别为DEBUG，这将记录DEBUG级别及以上的日志消息，适用于调试Spring Web相关的行为。</span></span>
<span class="line"><span>logging.level.org.springframework.web=DEBUG</span></span>
<span class="line"><span># 设置com.mycom包的日志级别</span></span>
<span class="line"><span>logging.level.com.mycompany=INFO</span></span></code></pre></div><blockquote><ol start="2"><li>日志文件配置</li></ol></blockquote><ul><li><strong>目的</strong>：指定日志输出的文件名和路径，便于日志的查阅和管理。</li><li><strong>配置项</strong>： <ul><li><code>logging.file.name</code>: 指定日志文件的全名，包括路径。</li><li><code>logging.file.path</code>: 指定日志文件存放的目录，日志文件名由Spring Boot自动生成。</li></ul></li><li><strong>示例</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 配置日志文件的名称为myapp.log。如果设置了logging.file.name，日志将被写入指定的文件中，而不是控制台。</span></span>
<span class="line"><span>logging.file.name=myapp.log</span></span>
<span class="line"><span># 或者</span></span>
<span class="line"><span># 或者，可以单独设置日志文件存储的路径。这里设置日志文件存储在\`/var/log\`目录下。</span></span>
<span class="line"><span>logging.file.path=/var/log</span></span>
<span class="line"><span># 注意：当同时设置logging.file.name和logging.file.path时，日志文件（这里是myapp.log）将被创建在指定的路径下（/var/log/myapp.log）。</span></span></code></pre></div><blockquote><ol start="3"><li>日志格式配置</li></ol></blockquote><ul><li><strong>目的</strong>：自定义日志输出的格式，以满足不同的可读性和信息需求。</li><li><strong>配置项</strong>： <ul><li><code>logging.pattern.console</code>: 控制台日志的格式。</li><li><code>logging.pattern.file</code>: 文件日志的格式。</li></ul></li><li><strong>示例</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 设置控制台输出的日志格式。%d{yyyy-MM-dd HH:mm:ss}是日期时间的格式，%msg是日志消息，%n是新行。</span></span>
<span class="line"><span>logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n</span></span>
<span class="line"><span># 设置写入文件的日志格式。包含了日期时间、线程名、日志级别、日志记录器名和日志消息。 </span></span>
<span class="line"><span># [%thread]显示线程名，%-5level是左对齐的日志级别，%logger{36}是日志记录器的名字，最多36个字符，%msg是日志消息。</span></span>
<span class="line"><span>logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</span></span></code></pre></div><blockquote><ol start="4"><li>使用<code>logback-spring.xml</code>或<code>log4j2-spring.xml</code>文件</li></ol></blockquote><ul><li><strong>目的</strong>：对于更复杂的日志配置需求，如日志归档、异步日志记录等，可以通过这些XML配置文件进行详细设置。</li><li><strong>注意</strong>：确保将这些配置文件放置在<code>src/main/resources</code>目录下，Spring Boot会自动识别并加载它们。</li></ul><blockquote><p>配置重点</p></blockquote><ul><li><strong>灵活性</strong>：Spring Boot允许你通过简单的属性配置来快速设置日志级别和输出位置，同时也支持通过XML配置文件进行更复杂的日志管理配置。</li><li><strong>日志级别的合理设置</strong>：合理设置日志级别可以帮助开发者在开发、测试和生产环境中更有效地获取所需的日志信息。</li><li><strong>日志格式化</strong>：自定义日志格式可以提高日志的可读性，使得日志信息更加直观、易于理解。</li><li><strong>高级配置</strong>：对于高级用户，使用XML配置文件可以实现更高级的日志管理功能，如滚动归档、日志清理策略等。</li></ul><p>后续这里待整理一下 to be contined....</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// application.properties中配置日志级别和日志文件路径的示例</span></span>
<span class="line"><span>logging.level.root=INFO </span></span>
<span class="line"><span>logging.level.org.springframework.web=DEBUG</span></span>
<span class="line"><span>logging.level.com.yourpackage=TRACE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logging.file.name=app.log</span></span>
<span class="line"><span>logging.file.path=/var/log</span></span></code></pre></div><p>在Spring Boot中，你可以通过<code>application.properties</code>或<code>application.yml</code>文件来配置日志。</p><p>以下是一些常用的日志配置选项：</p><ol><li><strong>设置日志级别</strong>: <ul><li>通过<code>logging.level.&lt;logger-name&gt;=&lt;level&gt;</code>设置特定日志记录器的日志级别。</li><li>日志级别包括：<code>TRACE</code>, <code>DEBUG</code>, <code>INFO</code>, <code>WARN</code>, <code>ERROR</code>, <code>FATAL</code>, <code>OFF</code>。</li></ul></li><li><strong>日志文件配置</strong>: <ul><li><code>logging.file.name</code>: 设置日志文件名，会在当前目录生成日志文件。</li><li><code>logging.file.path</code>: 设置日志文件路径，日志文件会在指定的目录生成。</li></ul></li><li><strong>日志格式配置</strong>: <ul><li><code>logging.pattern.console</code>: 设置控制台输出的日志格式。</li><li><code>logging.pattern.file</code>: 设置写入文件的日志格式。</li></ul></li><li><strong>日志归档</strong>: <ul><li>如果使用Logback，默认会进行日志归档（每天生成一个日志文件，过期删除等）。</li><li>详细的归档策略可以通过Logback的<code>logback-spring.xml</code>配置文件来设置。</li></ul></li><li><strong>使用<code>logback-spring.xml</code>或<code>log4j2-spring.xml</code>文件</strong>: <ul><li>对于更复杂的配置，如日志归档、异步记录等，可以使用XML配置文件。</li><li>将这些文件放在<code>src/main/resources</code>目录下，Spring Boot会自动加载它们。</li></ul></li></ol><p>通过这些配置，你可以根据需要灵活地设置日志级别、格式、输出位置等。</p><h4 id="自动配置" tabindex="-1">自动配置 <a class="header-anchor" href="#自动配置" aria-label="Permalink to &quot;自动配置&quot;">​</a></h4><h5 id="spring-boot的自动配置原理是什么" tabindex="-1">Spring Boot的自动配置原理是什么？ <a class="header-anchor" href="#spring-boot的自动配置原理是什么" aria-label="Permalink to &quot;Spring Boot的自动配置原理是什么？&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例：使用自动配置的注解</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class MyApplication {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(MyApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Spring Boot的自动配置原理基于以下几个核心概念：</p><ol><li><p><strong>@SpringBootApplication注解</strong>:</p><ul><li>这是一个便利注解，相当于同时使用了<code>@Configuration</code>、<code>@EnableAutoConfiguration</code>和<code>@ComponentScan</code>。</li><li><code>@EnableAutoConfiguration</code>是自动配置的关键，它告诉Spring Boot开始加载基于类路径下的内容、其他bean和各种属性设置的自动配置。</li></ul></li><li><p><strong>条件注解</strong> (<code>@Conditional...</code>):</p><ul><li>Spring Boot自动配置是条件化的，意味着自动配置类会根据环境和classpath下的类的存在与否应用。</li><li>这些条件可以是类的存在、bean的存在、属性的存在或匹配等。</li></ul></li><li><p><strong><code>spring.factories</code>文件</strong>:</p><ul><li>Spring Boot利用<code>spring.factories</code>文件来加载自动配置候选者。</li><li>在这个文件中，通过<code>org.springframework.boot.autoconfigure.EnableAutoConfiguration</code>键指定自动配置类。</li></ul></li><li><p><strong>自动配置类</strong> (<code>@Configuration</code>):</p><ul><li>自动配置类是常规的Spring配置类，通常用<code>@Configuration</code>标记，并通过条件注解进行条件化配置。</li><li>这些类通过<code>@Bean</code>方法提供了默认的bean定义，并且通常是通过<code>@ConditionalOn...</code>注解来条件化的。</li></ul></li></ol><p>原理简述：</p><ul><li>当Spring应用启动时，<code>@EnableAutoConfiguration</code>注解触发了一个自动配置的过程。</li><li>这个过程从<code>classpath</code>中的<code>META-INF/spring.factories</code>文件中读取并加载所有可用的自动配置类。</li><li>每个自动配置类可以根据条件（比如classpath中是否存在某个类、是否存在某个bean、某个属性是否有特定的值等）决定配置是否应用。</li><li>如果条件满足，相应的配置被应用（比如创建一个bean、添加属性值等）。</li></ul><p>这种自动配置机制大大简化了Spring应用的配置，尤其是在构建独立的、生产级别的Spring应用时。</p><hr><p>自动装配原理：</p><p>Spring Boot的自动配置原理是通过<strong>条件化配置</strong>和Spring的<strong>注解机制</strong>来实现的，当应用启动时，Spring Boot会自动扫描应用中的依赖，根据依赖自动配置Spring应用程序上下文，以便开箱即用。</p><h4 id="常用注解" tabindex="-1">常用注解 <a class="header-anchor" href="#常用注解" aria-label="Permalink to &quot;常用注解&quot;">​</a></h4><h5 id="springboot-有哪些条件注解-这些注解怎么使用的" tabindex="-1">SpringBoot 有哪些条件注解，这些注解怎么使用的 <a class="header-anchor" href="#springboot-有哪些条件注解-这些注解怎么使用的" aria-label="Permalink to &quot;SpringBoot 有哪些条件注解，这些注解怎么使用的&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 示例: 使用条件注解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConditionalOnClass({ExampleService.class})</span></span>
<span class="line"><span>public class ExampleAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean</span></span>
<span class="line"><span>    public ExampleService exampleService() {</span></span>
<span class="line"><span>        return new ExampleServiceImpl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnProperty(name = &quot;example.enabled&quot;, havingValue = &quot;true&quot;, matchIfMissing = true)</span></span>
<span class="line"><span>    public ExampleFeature exampleFeature() {</span></span>
<span class="line"><span>        return new ExampleFeature();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnExpression(&quot;\${example.expression:true}&quot;)</span></span>
<span class="line"><span>    public ExampleComponent exampleComponent() {</span></span>
<span class="line"><span>        return new ExampleComponent();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Spring Boot提供了多种条件注解来控制配置的条件化创建，以下是一些常用的条件注解及其用法：</p><ol><li><strong>@ConditionalOnClass</strong> / <strong>@ConditionalOnMissingClass</strong>: <ul><li>根据类路径上是否存在某个类来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnBean</strong> / <strong>@ConditionalOnMissingBean</strong>: <ul><li>根据上下文中是否存在（或缺失）某个Bean来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnProperty</strong>: <ul><li>根据配置文件中是否存在某个属性，或该属性的值是否符合预期来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnResource</strong>: <ul><li>根据类路径上是否存在某个资源来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnExpression</strong>: <ul><li>根据SpEL表达式的计算结果来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnWebApplication</strong> / <strong>@ConditionalOnNotWebApplication</strong>: <ul><li>根据应用是否是Web应用来决定是否创建Bean。</li></ul></li><li><strong>@ConditionalOnJndi</strong>: <ul><li>根据JNDI位置的存在与否来决定是否创建Bean。</li></ul></li></ol><p>这些注解通常用在自动配置类中，使得Bean的创建可以根据不同的环境或配置动态地进行。</p><p>上面这写是跟 @Conditional 的基础上组合使用的，介绍一下它：</p><ul><li>@Conditional</li><li>这是Spring4.0添加的新注解，用来标识一个Spring Bean或者Configuration配置文件，当满足指定的条件才开启配置。</li></ul><hr><h5 id="spring-boot官方的启动器命名规范是" tabindex="-1">Spring Boot官方的启动器命名规范是？ <a class="header-anchor" href="#spring-boot官方的启动器命名规范是" aria-label="Permalink to &quot;Spring Boot官方的启动器命名规范是？&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-*&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;...&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>Spring Boot官方的启动器（starters）遵循以下命名规范：</p><ul><li><strong>基本格式</strong>: <code>spring-boot-starter-XYZ</code></li><li><strong>XYZ</strong>: 描述启动器的功能，例如 <code>web</code>, <code>data-jpa</code>, <code>security</code> 等。</li><li><strong>版本号</strong>: 根据项目需求指定合适的Spring Boot版本。</li></ul><p>Spring Boot官方的启动器都是以spring-boot-starter--* 命名的，* 代表了一个特定的应用类型。</p><p>第三方的启动器不能以spring-boot开头命名，它们都被Spring Boot官方保留。</p><p>一般一个第三方的应该这样命名，像mybatis的 mybatis-spring-boot-starter。.</p><hr><h5 id="spring-boot的starter是什么" tabindex="-1">Spring Boot的starter是什么？ <a class="header-anchor" href="#spring-boot的starter是什么" aria-label="Permalink to &quot;Spring Boot的starter是什么？&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Spring Boot Starter Dependency Example</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>Spring Boot Starter是一种依赖管理器，它简化了Spring应用程序的依赖配置。</p><p>每个Starter都是一个Maven项目，它封装了特定于某一功能（如Web开发、数据访问等）的依赖关系。使用Starter时，你只需声明单个依赖项，Spring Boot就会为你提供该功能所需的所有依赖项。这极大地简化了项目的构建配置，并有助于避免版本冲突和依赖性问题。</p><h5 id="怎么自定义一个-starter" tabindex="-1">怎么自定义一个 starter <a class="header-anchor" href="#怎么自定义一个-starter" aria-label="Permalink to &quot;怎么自定义一个 starter&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1. 创建一个新的Maven项目作为自定义Starter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 在pom.xml中添加Spring Boot的parent和基本依赖</span></span>
<span class="line"><span>&lt;parent&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.x.x.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/parent&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    // 添加所需功能的依赖</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. 创建自动配置类，使用@Configuration和@ConditionalOn...注解</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConditionalOnClass({ YourService.class })</span></span>
<span class="line"><span>@ConditionalOnProperty(prefix = &quot;your.starter&quot;, name = &quot;enabled&quot;, havingValue = &quot;true&quot;, matchIfMissing = true)</span></span>
<span class="line"><span>public class YourStarterAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean</span></span>
<span class="line"><span>    public YourService yourService() {</span></span>
<span class="line"><span>        return new YourServiceImpl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 4. 在resources/META-INF下创建spring.factories文件，声明自动配置类</span></span>
<span class="line"><span>org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\</span></span>
<span class="line"><span>your.package.YourStarterAutoConfiguration</span></span></code></pre></div><p>步骤：</p><ol><li><strong>创建项目</strong>: 创建一个Maven项目作为你的Starter。</li><li><strong>添加依赖</strong>: 在<code>pom.xml</code>中声明Spring Boot的parent依赖，和其他所需的依赖。</li><li><strong>编写自动配置</strong>: 创建配置类，使用<code>@Configuration</code>注解，通过<code>@ConditionalOn...</code>注解确保只在满足特定条件时才应用配置。</li><li><strong>声明配置</strong>: 在<code>resources/META-INF/spring.factories</code>文件中，声明你的自动配置类，以便Spring Boot在启动时自动发现它。</li></ol><hr><h4 id="内嵌容器" tabindex="-1">内嵌容器 <a class="header-anchor" href="#内嵌容器" aria-label="Permalink to &quot;内嵌容器&quot;">​</a></h4><h5 id="spring-boot支持哪几种内嵌容器" tabindex="-1">Spring Boot支持哪几种内嵌容器？ <a class="header-anchor" href="#spring-boot支持哪几种内嵌容器" aria-label="Permalink to &quot;Spring Boot支持哪几种内嵌容器？&quot;">​</a></h5><p>Spring支特的内嵌式容器有：Tomcat、Jetty、Undertow</p><p>默认的内嵌式容器是：Tomcat。</p><h4 id="配置加载" tabindex="-1">配置加载 <a class="header-anchor" href="#配置加载" aria-label="Permalink to &quot;配置加载&quot;">​</a></h4><h4 id="spring-boot怎么兼容老spring项目" tabindex="-1">Spring Boot怎么兼容老Spring项目？ <a class="header-anchor" href="#spring-boot怎么兼容老spring项目" aria-label="Permalink to &quot;Spring Boot怎么兼容老Spring项目？&quot;">​</a></h4><p>答案是可以兼容，可以使用 <code>@ImportResource</code>注解 来导入之前是 Spring 项目的配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ImportResource({ &quot;classpath*:legacy-spring-context.xml&quot; })</span></span>
<span class="line"><span>public class LegacyConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li><strong>创建一个新的Spring Boot项目</strong>: 初始化一个标准的Spring Boot项目结构。</li><li><strong>集成老项目的配置</strong>: <ul><li>使用<code>@ImportResource</code>注解导入老Spring项目的XML配置文件。</li><li>如果老项目使用的是Java配置，可以直接在Spring Boot的配置类中导入。</li></ul></li><li><strong>逐步迁移</strong>: <ul><li>将老项目的代码和资源文件复制到Spring Boot项目中。</li><li>逐步替换老项目中的Spring功能实现，如数据源配置、事务管理等，使用Spring Boot的自动配置功能。</li></ul></li><li><strong>测试和调优</strong>: <ul><li>仔细测试整合后的应用，确保功能正常。</li><li>根据需要调优Spring Boot的配置，比如日志级别、数据库连接等。</li></ul></li></ol>`,82)])])}const h=s(i,[["render",e]]);export{u as __pageData,h as default};
