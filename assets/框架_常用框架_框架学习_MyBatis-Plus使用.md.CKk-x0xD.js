import{_ as s,o as n,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const g=JSON.parse('{"title":"框架学习_MyBatis-Plus使用","description":"","frontmatter":{"title":"框架学习_MyBatis-Plus使用","excerpt":"记录一下自己对于MyBatisPlus日常的使用和理解","date":"2025-06-20 06:54:11","updated":"2025-06-20 06:54:11"},"headers":[],"relativePath":"框架/常用框架/框架学习_MyBatis-Plus使用.md","filePath":"框架/常用框架/框架学习_MyBatis-Plus使用.md","lastUpdated":null}'),l={name:"框架/常用框架/框架学习_MyBatis-Plus使用.md"};function t(i,a,r,o,c,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p><strong>MyBatis</strong>作为一款优秀的ORM（对象关系映射）框架，被广泛使用。</p><p>然而，随着项目规模的扩大和复杂度的提升，传统的MyBatis在代码量和开发效率上可能无法满足需求。为了解决这些问题，诞生了<strong>MyBatis-Plus</strong>。</p><p>MyBatis-Plus（以下简称MP）是对MyBatis的增强工具，旨在以最少的代码，实现对数据库的CRUD（增删改查）操作，提升开发效率。 本篇博客将全面详解MyBatis-Plus的使用，包括其特点、安装配置、基本使用、高级功能以及最佳实践。</p><hr><blockquote><p>什么是 MyBatis-Plus</p></blockquote><p>MyBatis-Plus 是 MyBatis 的增强版，它在不改变 MyBatis 原有功能的基础上，为其提供了一系列的增强功能，如：</p><ul><li><strong>CRUD 接口封装</strong>：提供了常用的 CRUD 接口，无需手写 SQL 即可实现单表的常规操作。</li><li><strong>条件构造器</strong>：通过Lambda表达式封装查询条件，防止字段名写错，增强代码可读性。</li><li><strong>分页插件</strong>：内置高效的分页插件，支持多种数据库分页。</li></ul><blockquote><p>MyBatis-Plus 的特点</p></blockquote><ul><li><strong>开箱即用</strong>：只需少量配置，即可整合到项目中使用。</li><li><strong>无侵入性</strong>：不影响已有的 MyBatis 配置和方法。</li><li><strong>扩展性强</strong>：提供了丰富的插件，如分页、代码生成器、性能分析等。</li><li><strong>支持主流数据库</strong>：如MySQL、Oracle、PostgreSQL、SQL Server等。</li></ul><hr><h3 id="整合mybatisplus" tabindex="-1">整合MybatisPlus <a class="header-anchor" href="#整合mybatisplus" aria-label="Permalink to &quot;整合MybatisPlus&quot;">​</a></h3><p>springboot + mybatisplus</p><p>环境准备</p><ul><li><strong>JDK 版本</strong>：1.8 及以上</li><li><strong>Maven</strong>：项目管理工具</li><li><strong>数据库</strong>：MySQL 5.7 及以上（以 MySQL 为例）</li><li><strong>IDE</strong>：IntelliJ IDEA 或其他</li></ul><p>创建 Maven 项目</p><p>使用 IDE 新建一个 Maven 项目，选择合适的 GroupId 和 ArtifactId。</p><h4 id="添加依赖" tabindex="-1">添加依赖 <a class="header-anchor" href="#添加依赖" aria-label="Permalink to &quot;添加依赖&quot;">​</a></h4><p>在 <code>pom.xml</code> 中添加 MyBatis-Plus 相关的依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;!-- MyBatis-Plus 核心依赖 --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;3.5.3.1&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- MySQL 驱动 --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;8.0.33&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Druid 数据源（可选） --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.2.15&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Spring Boot Starter（如果是 Spring Boot 项目） --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><h4 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h4><p>数据库配置</p><p>在 <code>application.yml</code> 或 <code>application.properties</code> 中配置数据库连接信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/your_database_name?useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span>    username: your_username</span></span>
<span class="line"><span>    password: your_password</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span></code></pre></div><blockquote><p>配置 MyBatis-Plus</p></blockquote><p>MyBatis-Plus 的基本配置包括 mapper 的扫描路径，具体配置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span>  mapper-locations: classpath:/mapper/**/*.xml</span></span>
<span class="line"><span>  type-aliases-package: com.example.demo.entity</span></span></code></pre></div><hr><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><h4 id="创建实体类" tabindex="-1">创建实体类 <a class="header-anchor" href="#创建实体类" aria-label="Permalink to &quot;创建实体类&quot;">​</a></h4><p>创建与数据库表对应的实体类，例如，一个 <code>User</code> 实体：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.entity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.annotation.TableId;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.annotation.TableName;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@TableName(&quot;user&quot;) // 指定对应的数据库表名</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @TableId // 标识主键</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private String email;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="创建-mapper-接口" tabindex="-1">创建 Mapper 接口 <a class="header-anchor" href="#创建-mapper-接口" aria-label="Permalink to &quot;创建 Mapper 接口&quot;">​</a></h4><p>创建 Mapper 接口，继承自 <code>BaseMapper&lt;T&gt;</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.mapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.mapper.BaseMapper;</span></span>
<span class="line"><span>import com.example.demo.entity.User;</span></span>
<span class="line"><span>import org.apache.ibatis.annotations.Mapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface UserMapper extends BaseMapper&lt;User&gt; {</span></span>
<span class="line"><span>    // 这里可以自定义方法或使用默认提供的 CRUD 方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="编写-service-层-可选" tabindex="-1">编写 Service 层（可选） <a class="header-anchor" href="#编写-service-层-可选" aria-label="Permalink to &quot;编写 Service 层（可选）&quot;">​</a></h4><p>为了更好的分层，可以创建 Service 接口和实现类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.extension.service.IService;</span></span>
<span class="line"><span>import com.example.demo.entity.User;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface UserService extends IService&lt;User&gt; {</span></span>
<span class="line"><span>    // 可以自定义业务方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实现类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.service.impl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;</span></span>
<span class="line"><span>import com.example.demo.entity.User;</span></span>
<span class="line"><span>import com.example.demo.mapper.UserMapper;</span></span>
<span class="line"><span>import com.example.demo.service.UserService;</span></span>
<span class="line"><span>import org.springframework.stereotype.Service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UserServiceImpl extends ServiceImpl&lt;UserMapper, User&gt; implements UserService {</span></span>
<span class="line"><span>    // 实现自定义业务方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="测试-crud-操作" tabindex="-1">测试 CRUD 操作 <a class="header-anchor" href="#测试-crud-操作" aria-label="Permalink to &quot;测试 CRUD 操作&quot;">​</a></h4><p>在 Controller 或测试类中使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.example.demo.entity.User;</span></span>
<span class="line"><span>import com.example.demo.service.UserService;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 新增用户</span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public String addUser(@RequestBody User user) {</span></span>
<span class="line"><span>        boolean save = userService.save(user);</span></span>
<span class="line"><span>        return save ? &quot;success&quot; : &quot;fail&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查询所有用户</span></span>
<span class="line"><span>    @GetMapping</span></span>
<span class="line"><span>    public List&lt;User&gt; getUsers() {</span></span>
<span class="line"><span>        return userService.list();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据ID查询用户</span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public User getUserById(@PathVariable Long id) {</span></span>
<span class="line"><span>        return userService.getById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 更新用户信息</span></span>
<span class="line"><span>    @PutMapping</span></span>
<span class="line"><span>    public String updateUser(@RequestBody User user) {</span></span>
<span class="line"><span>        boolean update = userService.updateById(user);</span></span>
<span class="line"><span>        return update ? &quot;success&quot; : &quot;fail&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 删除用户</span></span>
<span class="line"><span>    @DeleteMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public String deleteUser(@PathVariable Long id) {</span></span>
<span class="line"><span>        boolean remove = userService.removeById(id);</span></span>
<span class="line"><span>        return remove ? &quot;success&quot; : &quot;fail&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="条件构造器" tabindex="-1">条件构造器 <a class="header-anchor" href="#条件构造器" aria-label="Permalink to &quot;条件构造器&quot;">​</a></h3><p>MyBatis-Plus 提供了强大的条件构造器，支持链式调用，构建复杂的查询条件。</p><h4 id="querywrapper" tabindex="-1">QueryWrapper <a class="header-anchor" href="#querywrapper" aria-label="Permalink to &quot;QueryWrapper&quot;">​</a></h4><p><code>QueryWrapper</code> 用于构建查询条件，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询年龄大于20岁的用户</span></span>
<span class="line"><span>QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>queryWrapper.gt(&quot;age&quot;, 20);</span></span>
<span class="line"><span>List&lt;User&gt; users = userService.list(queryWrapper);</span></span></code></pre></div><h4 id="lambdaquerywrapper" tabindex="-1">LambdaQueryWrapper <a class="header-anchor" href="#lambdaquerywrapper" aria-label="Permalink to &quot;LambdaQueryWrapper&quot;">​</a></h4><p><code>LambdaQueryWrapper</code> 使用 Lambda 表达式，更安全可靠：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询名字为 &quot;张三&quot; 的用户</span></span>
<span class="line"><span>LambdaQueryWrapper&lt;User&gt; lambdaQuery = new LambdaQueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>lambdaQuery.eq(User::getName, &quot;张三&quot;);</span></span>
<span class="line"><span>List&lt;User&gt; users = userService.list(lambdaQuery);</span></span></code></pre></div><h4 id="常用条件方法" tabindex="-1">常用条件方法 <a class="header-anchor" href="#常用条件方法" aria-label="Permalink to &quot;常用条件方法&quot;">​</a></h4><ul><li><strong>eq</strong>：等于</li><li><strong>ne</strong>：不等于</li><li><strong>gt</strong>：大于</li><li><strong>ge</strong>：大于等于</li><li><strong>lt</strong>：小于</li><li><strong>le</strong>：小于等于</li><li><strong>between</strong>：在...之间</li><li><strong>like</strong>：模糊匹配</li><li><strong>in</strong>：包含于</li><li><strong>or</strong>：或者</li><li><strong>orderBy</strong>：排序</li></ul><h4 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h4><p>复杂插件</p><p>实际使用的时候可以问一下大模型，这里的复杂程度算低的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LambdaQueryWrapper&lt;User&gt; query = new LambdaQueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>query.eq(User::getAge, 25)</span></span>
<span class="line"><span>     .like(User::getName, &quot;张&quot;)</span></span>
<span class="line"><span>     .orderByDesc(User::getId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>List&lt;User&gt; users = userService.list(query);</span></span></code></pre></div><hr><h3 id="分页插件" tabindex="-1">分页插件 <a class="header-anchor" href="#分页插件" aria-label="Permalink to &quot;分页插件&quot;">​</a></h3><p>MyBatis-Plus 自带分页插件，支持多种数据库。</p><h4 id="引入分页插件" tabindex="-1">引入分页插件 <a class="header-anchor" href="#引入分页插件" aria-label="Permalink to &quot;引入分页插件&quot;">​</a></h4><p>在配置类中注入分页插件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class MybatisPlusConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 旧版本使用 PaginationInterceptor，新版本改为 MybatisPlusInterceptor</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public PaginationInterceptor paginationInterceptor() {</span></span>
<span class="line"><span>        return new PaginationInterceptor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="使用分页查询" tabindex="-1">使用分页查询 <a class="header-anchor" href="#使用分页查询" aria-label="Permalink to &quot;使用分页查询&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.baomidou.mybatisplus.extension.plugins.pagination.Page;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Page&lt;User&gt; page = new Page&lt;&gt;(1, 5); // 当前页，页大小</span></span>
<span class="line"><span>Page&lt;User&gt; userPage = userService.page(page);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>List&lt;User&gt; records = userPage.getRecords();</span></span>
<span class="line"><span>long total = userPage.getTotal();</span></span></code></pre></div><h4 id="与条件构造器结合" tabindex="-1">与条件构造器结合 <a class="header-anchor" href="#与条件构造器结合" aria-label="Permalink to &quot;与条件构造器结合&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LambdaQueryWrapper&lt;User&gt; query = new LambdaQueryWrapper&lt;&gt;();</span></span>
<span class="line"><span>query.gt(User::getAge, 20);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Page&lt;User&gt; page = new Page&lt;&gt;(1, 5);</span></span>
<span class="line"><span>Page&lt;User&gt; userPage = userService.page(page, query);</span></span></code></pre></div><hr><h3 id="代码生成器" tabindex="-1">代码生成器 <a class="header-anchor" href="#代码生成器" aria-label="Permalink to &quot;代码生成器&quot;">​</a></h3><p>MyBatis-Plus 提供了代码生成器，可快速生成实体类、Mapper、Service、Controller 等代码。</p><h4 id="引入依赖" tabindex="-1">引入依赖 <a class="header-anchor" href="#引入依赖" aria-label="Permalink to &quot;引入依赖&quot;">​</a></h4><p>在 <code>pom.xml</code> 中添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.5.3.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 代码生成器需要的模板引擎 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h4 id="编写生成器代码" tabindex="-1">编写生成器代码 <a class="header-anchor" href="#编写生成器代码" aria-label="Permalink to &quot;编写生成器代码&quot;">​</a></h4><p>创建一个 Java 类，用于执行代码生成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.annotation.DbType;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.toolkit.StringPool;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.generator.AutoGenerator;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.generator.engine.VelocityTemplateEngine;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.generator.config.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CodeGenerator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 1. 全局配置</span></span>
<span class="line"><span>        GlobalConfig gc = new GlobalConfig();</span></span>
<span class="line"><span>        gc.setAuthor(&quot;YourName&quot;)</span></span>
<span class="line"><span>          .setOutputDir(System.getProperty(&quot;user.dir&quot;) + &quot;/src/main/java&quot;)</span></span>
<span class="line"><span>          .setOpen(false)</span></span>
<span class="line"><span>          .setServiceName(&quot;%sService&quot;)</span></span>
<span class="line"><span>          .setSwagger2(true); // 实体属性 Swagger2 注解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 数据源配置</span></span>
<span class="line"><span>        DataSourceConfig dsc = new DataSourceConfig();</span></span>
<span class="line"><span>        dsc.setUrl(&quot;jdbc:mysql://localhost:3306/your_database_name?useUnicode=true&amp;useSSL=false&amp;characterEncoding=utf8&quot;);</span></span>
<span class="line"><span>        dsc.setDriverName(&quot;com.mysql.cj.jdbc.Driver&quot;);</span></span>
<span class="line"><span>        dsc.setUsername(&quot;your_username&quot;);</span></span>
<span class="line"><span>        dsc.setPassword(&quot;your_password&quot;);</span></span>
<span class="line"><span>        dsc.setDbType(DbType.MYSQL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 包配置</span></span>
<span class="line"><span>        PackageConfig pc = new PackageConfig();</span></span>
<span class="line"><span>        pc.setModuleName(&quot;demo&quot;)</span></span>
<span class="line"><span>          .setParent(&quot;com.example&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4. 策略配置</span></span>
<span class="line"><span>        StrategyConfig strategy = new StrategyConfig();</span></span>
<span class="line"><span>        strategy.setNaming(NamingStrategy.underline_to_camel) // 表名生成策略</span></span>
<span class="line"><span>                .setColumnNaming(NamingStrategy.underline_to_camel)</span></span>
<span class="line"><span>                .setEntityLombokModel(true) // 自动生成 Lombok 注解</span></span>
<span class="line"><span>                .setRestControllerStyle(true) // 生成 @RestController 控制器</span></span>
<span class="line"><span>                .setInclude(&quot;user&quot;); // 生成的表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 5. 整合配置</span></span>
<span class="line"><span>        AutoGenerator mpg = new AutoGenerator();</span></span>
<span class="line"><span>        mpg.setGlobalConfig(gc)</span></span>
<span class="line"><span>           .setDataSource(dsc)</span></span>
<span class="line"><span>           .setPackageInfo(pc)</span></span>
<span class="line"><span>           .setStrategy(strategy)</span></span>
<span class="line"><span>           .setTemplateEngine(new VelocityTemplateEngine());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 6. 执行生成</span></span>
<span class="line"><span>        mpg.execute();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行该类的 <code>main</code> 方法，即可自动生成代码。</p><hr><h3 id="乐观锁与逻辑删除" tabindex="-1">乐观锁与逻辑删除 <a class="header-anchor" href="#乐观锁与逻辑删除" aria-label="Permalink to &quot;乐观锁与逻辑删除&quot;">​</a></h3><h4 id="乐观锁" tabindex="-1">乐观锁 <a class="header-anchor" href="#乐观锁" aria-label="Permalink to &quot;乐观锁&quot;">​</a></h4><p>MyBatis-Plus 支持乐观锁，需在实体类中加入 <code>@Version</code> 注解。</p><h5 id="配置乐观锁插件" tabindex="-1">配置乐观锁插件 <a class="header-anchor" href="#配置乐观锁插件" aria-label="Permalink to &quot;配置乐观锁插件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public OptimisticLockerInterceptor optimisticLockerInterceptor() {</span></span>
<span class="line"><span>    return new OptimisticLockerInterceptor();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="在实体类中添加版本字段" tabindex="-1">在实体类中添加版本字段 <a class="header-anchor" href="#在实体类中添加版本字段" aria-label="Permalink to &quot;在实体类中添加版本字段&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.demo.entity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.annotation.Version;</span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private String email;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Version</span></span>
<span class="line"><span>    private Integer version;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="乐观锁更新示例" tabindex="-1">乐观锁更新示例 <a class="header-anchor" href="#乐观锁更新示例" aria-label="Permalink to &quot;乐观锁更新示例&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>User user = userService.getById(1L);</span></span>
<span class="line"><span>user.setEmail(&quot;new_email@example.com&quot;);</span></span>
<span class="line"><span>userService.updateById(user); // 更新时，会根据 version 乐观锁版本号进行控制</span></span></code></pre></div><h4 id="逻辑删除" tabindex="-1">逻辑删除 <a class="header-anchor" href="#逻辑删除" aria-label="Permalink to &quot;逻辑删除&quot;">​</a></h4><p>MyBatis-Plus 支持逻辑删除，无需真的删除数据库记录，而是在删除时更新标识。</p><h5 id="配置逻辑删除" tabindex="-1">配置逻辑删除 <a class="header-anchor" href="#配置逻辑删除" aria-label="Permalink to &quot;配置逻辑删除&quot;">​</a></h5><p>在 <code>application.yml</code> 中配置逻辑删除字段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span>  global-config:</span></span>
<span class="line"><span>    db-config:</span></span>
<span class="line"><span>      logic-delete-field: deleted</span></span>
<span class="line"><span>      logic-delete-value: 1</span></span>
<span class="line"><span>      logic-not-delete-value: 0</span></span></code></pre></div><h5 id="实体类中添加逻辑删除字段" tabindex="-1">实体类中添加逻辑删除字段 <a class="header-anchor" href="#实体类中添加逻辑删除字段" aria-label="Permalink to &quot;实体类中添加逻辑删除字段&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.baomidou.mybatisplus.annotation.TableLogic;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private String email;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @TableLogic</span></span>
<span class="line"><span>    private Integer deleted; // 逻辑删除字段</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="逻辑删除操作" tabindex="-1">逻辑删除操作 <a class="header-anchor" href="#逻辑删除操作" aria-label="Permalink to &quot;逻辑删除操作&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>userService.removeById(1L); // 实际上是更新 deleted 字段为 1</span></span></code></pre></div><hr><h3 id="多数据源支持" tabindex="-1">多数据源支持 <a class="header-anchor" href="#多数据源支持" aria-label="Permalink to &quot;多数据源支持&quot;">​</a></h3><p>MyBatis-Plus 支持多数据源配置，可根据业务需求配置多个数据源。</p><h4 id="配置多数据源" tabindex="-1">配置多数据源 <a class="header-anchor" href="#配置多数据源" aria-label="Permalink to &quot;配置多数据源&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    primary:</span></span>
<span class="line"><span>      url: jdbc:mysql://localhost:3306/primary_db</span></span>
<span class="line"><span>      username: xxx</span></span>
<span class="line"><span>      password: xxx</span></span>
<span class="line"><span>    secondary:</span></span>
<span class="line"><span>      url: jdbc:mysql://localhost:3306/secondary_db</span></span>
<span class="line"><span>      username: xxx</span></span>
<span class="line"><span>      password: xxx</span></span></code></pre></div><h4 id="定义数据源配置类" tabindex="-1">定义数据源配置类 <a class="header-anchor" href="#定义数据源配置类" aria-label="Permalink to &quot;定义数据源配置类&quot;">​</a></h4><p>编写配置类，指定不同的数据源。</p><hr><h3 id="性能分析插件" tabindex="-1">性能分析插件 <a class="header-anchor" href="#性能分析插件" aria-label="Permalink to &quot;性能分析插件&quot;">​</a></h3><p>MyBatis-Plus 提供性能分析插件，可输出 SQL 语句及执行时间，便于调优。</p><h4 id="配置性能分析插件" tabindex="-1">配置性能分析插件 <a class="header-anchor" href="#配置性能分析插件" aria-label="Permalink to &quot;配置性能分析插件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public PerformanceInterceptor performanceInterceptor() {</span></span>
<span class="line"><span>    PerformanceInterceptor interceptor = new PerformanceInterceptor();</span></span>
<span class="line"><span>    interceptor.setMaxTime(1000); // 设置 SQL 执行的最大时间，超过则抛出异常</span></span>
<span class="line"><span>    interceptor.setFormat(true); // 是否格式化 SQL</span></span>
<span class="line"><span>    return interceptor;</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><p>参考资料</p><ul><li><a href="https://baomidou.com/" target="_blank" rel="noreferrer">MyBatis-Plus 官方文档</a></li><li><a href="https://github.com/baomidou/mybatis-plus" target="_blank" rel="noreferrer">MyBatis-Plus GitHub 仓库</a></li><li><a href="https://caochenlei.blog.csdn.net/article/details/108809902" target="_blank" rel="noreferrer">https://caochenlei.blog.csdn.net/article/details/108809902</a></li><li><a href="https://caochenlei.blog.csdn.net/article/details/108281646?spm=1001.2014.3001.5502&amp;ydreferer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDkwNDU3Lz90eXBlPWJsb2c%3D" target="_blank" rel="noreferrer">https://caochenlei.blog.csdn.net/article/details/108281646?spm=1001.2014.3001.5502&amp;ydreferer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDkwNDU3Lz90eXBlPWJsb2c%3D</a></li></ul>`,112)])])}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
