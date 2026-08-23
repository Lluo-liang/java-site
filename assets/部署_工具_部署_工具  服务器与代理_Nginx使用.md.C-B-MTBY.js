import{_ as n,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const h=JSON.parse('{"title":"Nginx使用","description":"","frontmatter":{"title":"Nginx使用","excerpt":"Nginx_基础概念","date":"2023-11-20 23:13:33","updated":"2023-11-20 23:13:33"},"headers":[],"relativePath":"部署&工具/部署&工具  服务器与代理/Nginx使用.md","filePath":"部署&工具/部署&工具  服务器与代理/Nginx使用.md","lastUpdated":null}'),t={name:"部署&工具/部署&工具  服务器与代理/Nginx使用.md"};function l(i,s,o,c,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="_1、启动nginx" tabindex="-1">1、启动Nginx <a class="header-anchor" href="#_1、启动nginx" aria-label="Permalink to &quot;1、启动Nginx&quot;">​</a></h3><blockquote><p>Windows 下启动 nginx</p></blockquote><p>在下载 nginx 后，在nginx安装目录的绝对路径的框框内输入 <code>cmd</code></p><p>直接输入 <code>nginx</code> 或者 <code>start nginx</code>，然后回车，就可以启动nginx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nginx</span></span>
<span class="line"><span>#推荐这一种</span></span>
<span class="line"><span>start nginx</span></span></code></pre></div><p>在浏览器地址栏输入 <code>localhost:80</code>，然后再回车, 查看是否有 nginx 访问主页，如果有，则启动成功。</p><p>一般访问问题是端口占用，可以改一下 nginx 访问端口，或者杀掉对应进程。</p><p>关闭nginx的命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#快速关闭</span></span>
<span class="line"><span>nginx -s stop</span></span>
<span class="line"><span>#优雅关闭</span></span>
<span class="line"><span>nginx -s quit</span></span></code></pre></div><p>重新加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nginx -s reload</span></span></code></pre></div><p>一般来说，启动 nginx 后会出现两个或两个以上的线程，其中 1 个是主线程，另外 n 个是工作进程。（通过使用多个工作进程来并行处理请求，从而实现高性能和高并发处理能力）</p><p>默认情况下，Nginx可能会根据你的服务器的CPU核心数自动设置工作进程的数量，以最大化利用硬件资源。</p><p>如何区分，一般在 windows 环境下，PID 较小的那个是先启动的（PID较小的那个进程通常是首先启动的进程，也就是主进程。）</p><p><code>tasklist /fi &quot;IMAGENAME eq nginx.exe</code>，可以通过这个命令或者在任务管理器上看对应的线程信息</p><p>linux 环境下，可以通过 <code>ps aux | grep nginx</code> 查看进程信息</p><p>会有类似输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root     12345  0.0  0.1  123456  7890 ?        Ss   Apr10   0:00 nginx: master process /usr/sbin/nginx -g daemon off;</span></span>
<span class="line"><span>nginx    12346  0.0  0.2  123457  7891 ?        S    Apr10   0:00 nginx: worker process</span></span></code></pre></div><h3 id="通过-nginx-访问服务器文件-预览" tabindex="-1">通过 nginx 访问服务器文件（预览） <a class="header-anchor" href="#通过-nginx-访问服务器文件-预览" aria-label="Permalink to &quot;通过 nginx 访问服务器文件（预览）&quot;">​</a></h3><p>这里演示操作是在 docker 容器中进行的，在容器内部，Nginx的配置文件，通常位于<code>/etc/nginx/nginx.conf</code>或<code>/etc/nginx/conf.d/</code>目录下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vi /etc/nginx/nginx.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###修改后重新加载</span></span>
<span class="line"><span>nginx -s reload</span></span></code></pre></div><p>实际操作这里 vi 显示不存在命令，看了一下建议：对于生产环境的容器，直接进入容器修改配置文件并不是最佳实践。最好是通过更新配置文件和重新部署容器的方式来管理更改</p><p>看了一下 Portainer 工具中里面是写了映射路径的，根据提示找到配置文件：/home/nginx/conf/nginx.conf</p><p><img src="https://obsidian-picture.oss-cn-shenzhen.aliyuncs.com/luoblog/20240321202905.png" alt="image.png"></p><p>修改配置文件</p><p><strong>配置一个新的server块或修改现有的server块</strong>，以指向你的文件存储目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    192.168.0.21; # 替换为你的域名或IP地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /files {</span></span>
<span class="line"><span>        alias /root/wJF/shareFiles/; # 指向实际的文件目录</span></span>
<span class="line"><span>        autoindex on; # 开启目录列表</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启容器</p><p>访问：<a href="http://192.168.0.21/files" target="_blank" rel="noreferrer">http://192.168.0.21/files</a></p><p>修正：</p><p>启动命令的原因，然后由于是 Docker 容器内，需要挂载路径，需要改一下配置文件和启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	server {</span></span>
<span class="line"><span>		listen 80;</span></span>
<span class="line"><span>		server_name 192.168.0.21; # 替换为你的域名或IP地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		location /files { </span></span>
<span class="line"><span>			alias /usr/share/nginx/shareFile/; # 指向实际的文件目录</span></span>
<span class="line"><span>			autoindex on; # 开启目录列表</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span></code></pre></div><p>启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run \\</span></span>
<span class="line"><span>-p 9002:80 \\</span></span>
<span class="line"><span>--name nginx \\</span></span>
<span class="line"><span>-v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\</span></span>
<span class="line"><span>-v /home/nginx/conf/conf.d:/etc/nginx/conf.d \\</span></span>
<span class="line"><span>-v /home/nginx/log:/var/log/nginx \\</span></span>
<span class="line"><span>-v /home/nginx/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span>-v /home/nginx/shareFile/:/usr/share/nginx/shareFile \\</span></span>
<span class="line"><span>-v /home/nginx/ssl:/etc/nginx/ssl \\</span></span>
<span class="line"><span>-d nginx:latest</span></span></code></pre></div><p>访问： <a href="http://192.168.0.21:9002/files/" target="_blank" rel="noreferrer">http://192.168.0.21:9002/files/</a></p><hr><p>docker 容器内访问有点问题，改为在 windows 本地环境下操作</p><p>修改配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	server {</span></span>
<span class="line"><span>		listen 8087;</span></span>
<span class="line"><span>		server_name localhost; # 替换为你的域名或IP地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		location /files {</span></span>
<span class="line"><span>			alias D:/01_LQ/DiaryLearn/Java/Nginx/test/; # 指向实际的文件目录</span></span>
<span class="line"><span>			autoindex on; # 开启目录列表</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span></code></pre></div><p>同端口 80 关闭一下，正常访问 <a href="http://localhost:8087/files" target="_blank" rel="noreferrer">http://localhost:8087/files</a> 能够显示对应文件，文件名不要是中文的，支持 pdf 预览和下载操作。</p><hr><h4 id="从目标服务器下载文件" tabindex="-1">从目标服务器下载文件 <a class="header-anchor" href="#从目标服务器下载文件" aria-label="Permalink to &quot;从目标服务器下载文件&quot;">​</a></h4><p>经过上面的配置后，你能够在浏览器进行访问相关文件夹的内容，如果你需要下载，可以通过下面操作：</p><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -O 192.168.0.21:9002/files/MQ.pdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wget 192.168.0.21:9002/files/MQ.pdf (Liinux)</span></span></code></pre></div><h3 id="上传文件操作" tabindex="-1">上传文件操作 <a class="header-anchor" href="#上传文件操作" aria-label="Permalink to &quot;上传文件操作&quot;">​</a></h3><p>做一个简易的反向代理就行，后端服务可以使用 Java 的程序或者其他的</p><p>看了一下相关的操作说明，一般都是 通过代理操作来进行文件上传操作的，然后在文件上传过程中，对于 nginx 的配置是有一些配置项配置的。</p><p>了解一些关于大文件传输时可能会用的配置项：</p><table tabindex="0"><thead><tr><th>配置项</th><th>描述</th></tr></thead><tbody><tr><td>client_max_body_size</td><td>设置请求体允许最大体积</td></tr><tr><td>client_header_timeout</td><td>等待客户端发送一个请求头的超时时间</td></tr><tr><td>client_body_timeout</td><td>设置读取请求体的超时时间</td></tr><tr><td>proxy_read_timeout</td><td>设置请求被后端服务器读取时，Nginx等待的最长时间</td></tr><tr><td>proxy_send_timeout</td><td>设置</td></tr></tbody></table><p>在传输大文件时，<code>client_max_body_size</code>、<code>client_header_timeout</code>、<code>proxy_read_timeout</code>、<code>proxy_send_timeout</code>这四个参数值都可以根据自己项目的实际情况来配置。</p><p>实际操作进行的配置</p><p>nginx.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	server {</span></span>
<span class="line"><span>		listen 8087;</span></span>
<span class="line"><span>		server_name localhost; # 替换为你的域名或IP地址 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>		location /files {</span></span>
<span class="line"><span>			alias D:/01_LQ/DiaryLearn/Java/Nginx/test/download/; # 指向实际的文件目录</span></span>
<span class="line"><span>			autoindex on; # 开启目录列表</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		location /upload {</span></span>
<span class="line"><span>			#指定客户端请求体的临时存储路径。如果客户端上传的数据非常大，不能一次性读入内存，Nginx会将接收到的数据流分块写入这个临时文件夹。</span></span>
<span class="line"><span>			client_body_temp_path D:/01_LQ/DiaryLearn/Java/Nginx/test/uploads/1/;</span></span>
<span class="line"><span>			#设置客户端请求体的大小限制为5MB。如果请求体的大小超过这个值，客户端会收到一个表示请求实体过大的413错误。</span></span>
<span class="line"><span>			client_max_body_size 5m;</span></span>
<span class="line"><span>			proxy_set_header Host $http_host;</span></span>
<span class="line"><span>			proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>			#所有匹配/upload的请求将被转发到本机的8080端口的HTTP服务器。这意味着实际处理文件上传的是监听在8080端口的服务器。</span></span>
<span class="line"><span>			proxy_pass http://localhost:8080/system/file/upload;</span></span>
<span class="line"><span>			error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span></code></pre></div><p>java 的后端代码示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@RestController  </span></span>
<span class="line"><span>@RequestMapping(&quot;/system/file&quot;)  </span></span>
<span class="line"><span>public class FileUploadController {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @PostMapping(&quot;/upload&quot;)  </span></span>
<span class="line"><span>    public ResponseEntity&lt;String&gt; handleFileUpload(@RequestParam(&quot;file&quot;) MultipartFile file) {  </span></span>
<span class="line"><span>        String message = &quot;&quot;;  </span></span>
<span class="line"><span>        try {  </span></span>
<span class="line"><span>            // 目标目录路径字符串  </span></span>
<span class="line"><span>            String directory = &quot;D:/01_LQ/DiaryLearn/Java/Nginx/test/uploads/2/&quot;;  </span></span>
<span class="line"><span>            // 通过Paths.get()转换为Path对象  </span></span>
<span class="line"><span>            Path path = Paths.get(directory);  </span></span>
<span class="line"><span>            // 确保目录存在  </span></span>
<span class="line"><span>            Files.createDirectories(path);  </span></span>
<span class="line"><span>            // 解析路径与文件原始名称组合为新路径  </span></span>
<span class="line"><span>            Path filePath = path.resolve(file.getOriginalFilename());  </span></span>
<span class="line"><span>            // 保存文件  </span></span>
<span class="line"><span>            Files.copy(file.getInputStream(), filePath);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>            message = &quot;You successfully uploaded &quot; + file.getOriginalFilename() + &quot;!&quot;;  </span></span>
<span class="line"><span>            return ResponseEntity.status(200).body(message);  </span></span>
<span class="line"><span>        } catch (Exception e) {  </span></span>
<span class="line"><span>            message = &quot;Failed to upload &quot; + file.getOriginalFilename() + &quot; due to &quot; + e.getMessage();  </span></span>
<span class="line"><span>            return ResponseEntity.status(500).body(message);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置头相关的内容注意一下。</p><p>这里改善一下上述的 java 文件传输代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@PostMapping(&quot;/upload&quot;)  </span></span>
<span class="line"><span>public ResponseEntity&lt;String&gt; handleFileUpload(@RequestParam(&quot;file&quot;) MultipartFile file) {  </span></span>
<span class="line"><span>    String message = &quot;&quot;;  </span></span>
<span class="line"><span>    if (file.isEmpty()) {  </span></span>
<span class="line"><span>        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;The file is empty.&quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    // 目标目录路径字符串  </span></span>
<span class="line"><span>    String directory = &quot;D:/01_LQ/DiaryLearn/Java/Nginx/test/uploads/2/&quot;;  </span></span>
<span class="line"><span>    // 通过Paths.get()转换为Path对象  </span></span>
<span class="line"><span>    Path path = Paths.get(directory);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    try {  </span></span>
<span class="line"><span>        // 确保目录存在  </span></span>
<span class="line"><span>        Files.createDirectories(path);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 解析路径与文件原始名称组合为新路径  </span></span>
<span class="line"><span>        Path filePath = path.resolve(file.getOriginalFilename());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 检查文件是否已存在  </span></span>
<span class="line"><span>        if (Files.exists(filePath)) {  </span></span>
<span class="line"><span>            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;File already exists: &quot; + file.getOriginalFilename());  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 保存文件  </span></span>
<span class="line"><span>        try (InputStream inputStream = file.getInputStream()) {  </span></span>
<span class="line"><span>            Files.copy(inputStream, filePath);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        message = &quot;2 You successfully uploaded &quot; + file.getOriginalFilename() + &quot;!&quot;;  </span></span>
<span class="line"><span>        return ResponseEntity.status(HttpStatus.OK).body(message);  </span></span>
<span class="line"><span>    } catch (IOException e) {  </span></span>
<span class="line"><span>        message = &quot;Failed to upload &quot; + file.getOriginalFilename() + &quot; due to &quot; + e.getMessage();  </span></span>
<span class="line"><span>        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(message);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里主要的区别是添加了 try-with-resources （注意添加一下）</p><p><code>try-with-resources</code>语句可以自动管理资源，确保在语句结束时自动关闭资源，这对于文件上传中的输入流非常有用。</p><h3 id="文件传输" tabindex="-1">文件传输 <a class="header-anchor" href="#文件传输" aria-label="Permalink to &quot;文件传输&quot;">​</a></h3><p>nginx 应该不支持文件传输，需要使用第三方组件进行文件传输，比如 sftp 等。</p><hr><p>参考</p><ul><li><a href="https://blog.csdn.net/weixin_44251179/article/details/129700793" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44251179/article/details/129700793</a></li></ul>`,66)])])}const u=n(t,[["render",l]]);export{h as __pageData,u as default};
