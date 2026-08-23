import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const u=JSON.parse('{"title":"MongoDB_基本操作","description":"","frontmatter":{"title":"MongoDB_基本操作","excerpt":"MongoDB_基本操作","date":"2023-11-30 12:49:48","updated":"2023-11-30 12:49:48"},"headers":[],"relativePath":"数据库/NoSQL数据库/MongoDB_基本操作/index.md","filePath":"数据库/NoSQL数据库/MongoDB_基本操作/index.md","lastUpdated":null}'),l={name:"数据库/NoSQL数据库/MongoDB_基本操作/index.md"};function t(i,s,o,c,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>mongodb 的数据库中的一种，是面向文档存储的数据库；</p><p>他的概念和关系型数据有些区别。</p><p>跟 MySQL 类似，他能够执行 CRUD，事务，索引 等操作。</p><p>在技术选型的时候，对于高并发、海量数据读写、高可用、搞可扩展有需求，数据量大，写入频率，价值较低，对事务性要求不高的时候，可以考虑使用 MongoDB来实现数据的存储。</p><h4 id="体系结构" tabindex="-1">体系结构 <a class="header-anchor" href="#体系结构" aria-label="Permalink to &quot;体系结构&quot;">​</a></h4><ul><li>database collectino document field index</li></ul><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/202311301336438.png" alt="image.png"></p><blockquote><p>什么是 MongoDB</p></blockquote><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/feb9bb3170c4dbf4d079301e2e2b7f6.png" alt="feb9bb3170c4dbf4d079301e2e2b7f6.png"></p><h4 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h4><p>在Spring Boot应用中集成MongoDB来进行数据的CRUD操作</p><p>首先，在你的<code>pom.xml</code>文件中添加Spring Boot的Starter Data MongoDB依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!-- 添加Spring Boot的Web支持 --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><p>在<code>application.properties</code>或<code>application.yml</code>配置文件中配置MongoDB的连接信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># application.properties</span></span>
<span class="line"><span>spring.data.mongodb.uri=mongodb://yourUsername:yourPassword@localhost:27017/yourDatabase</span></span></code></pre></div><p>或者使用YAML格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># application.yml</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  data:</span></span>
<span class="line"><span>    mongodb:</span></span>
<span class="line"><span>      uri: mongodb://yourUsername:yourPassword@localhost:27017/yourDatabase</span></span></code></pre></div><p>创建实体类</p><p>定义一个MongoDB的文档类。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.data.annotation.Id;</span></span>
<span class="line"><span>import org.springframework.data.mongodb.core.mapping.Document;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Document</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span>    @Id</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 省略构造函数、Getter和Setter方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建一个继承<code>MongoRepository</code>的接口用于数据访问。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.data.mongodb.repository.MongoRepository;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface UserRepository extends MongoRepository&lt;User, String&gt; {</span></span>
<span class="line"><span>    // 这里可以定义一些根据字段查询的方法，Spring Data会自动实现</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建一个REST控制器来处理HTTP请求。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/users&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private UserRepository userRepository;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public User addUser(@RequestBody User user) {</span></span>
<span class="line"><span>        return userRepository.save(user);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @GetMapping</span></span>
<span class="line"><span>    public List&lt;User&gt; getUsers() {</span></span>
<span class="line"><span>        return userRepository.findAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public User getUserById(@PathVariable String id) {</span></span>
<span class="line"><span>        return userRepository.findById(id).orElse(null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @PutMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public User updateUser(@PathVariable String id, @RequestBody User updatedUser) {</span></span>
<span class="line"><span>        updatedUser.setId(id);</span></span>
<span class="line"><span>        return userRepository.save(updatedUser);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @DeleteMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public void deleteUser(@PathVariable String id) {</span></span>
<span class="line"><span>        userRepository.deleteById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="docker-方式安装-mongodb" tabindex="-1">Docker 方式安装 MongoDB <a class="header-anchor" href="#docker-方式安装-mongodb" aria-label="Permalink to &quot;Docker 方式安装 MongoDB&quot;">​</a></h3><p>参考： <a href="https://blog.csdn.net/li_wen_jin/article/details/133639954" target="_blank" rel="noreferrer">https://blog.csdn.net/li_wen_jin/article/details/133639954</a></p><p>拉取镜像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull mongo:latest</span></span></code></pre></div><p>挂载目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /mydata/mongo/config</span></span>
<span class="line"><span>mkdir -p /mydata/mongo/data</span></span>
<span class="line"><span>mkdir -p /mydata/mongo/logs</span></span>
<span class="line"><span>touch /mydata/mongo/config/mongod.conf</span></span>
<span class="line"><span>chmod 777 /mydata/mongo</span></span></code></pre></div><p>配置文件内容 mongod.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 数据库存储路径</span></span>
<span class="line"><span>dbpath=/mydata/mongo/data</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 日志文件路径</span></span>
<span class="line"><span>logpath=/mydata/mongo/logs/mongod.log</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 监听的端口</span></span>
<span class="line"><span>port=27017</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 允许所有的 IP 地址连接</span></span>
<span class="line"><span>bind_ip=0.0.0.0</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 启用日志记录</span></span>
<span class="line"><span>journal=true</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 是否后台运行</span></span>
<span class="line"><span>fork=true     </span></span>
<span class="line"><span>                   </span></span>
<span class="line"><span># 启用身份验证</span></span>
<span class="line"><span>#auth=true</span></span></code></pre></div><p>运行容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -dit --name mongo \\</span></span>
<span class="line"><span>-p 27017:27017 \\</span></span>
<span class="line"><span>-v /mydata/mongo/config/mongod.conf:/etc/mongod.conf \\</span></span>
<span class="line"><span>-v /mydata/mongo/data:/data/db \\</span></span>
<span class="line"><span>-v /mydata/mongo/logs:/var/log/mongodb \\</span></span>
<span class="line"><span>-e MONGO_INITDB_ROOT_USERNAME=admin \\</span></span>
<span class="line"><span>-e MONGO_INITDB_ROOT_PASSWORD=wz65432 \\</span></span>
<span class="line"><span>--restart=always  \\</span></span>
<span class="line"><span>mongo</span></span></code></pre></div><hr><p>参考</p><ul><li><a href="https://blog.csdn.net/efew212efe/article/details/124524863" target="_blank" rel="noreferrer">https://blog.csdn.net/efew212efe/article/details/124524863</a></li><li><a href="https://www.mongodb.com/docs/manual/" target="_blank" rel="noreferrer">https://www.mongodb.com/docs/manual/</a></li><li><a href="https://www.runoob.com/mongodb/mongodb-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/mongodb/mongodb-tutorial.html</a></li></ul>`,37)])])}const b=n(l,[["render",t]]);export{u as __pageData,b as default};
