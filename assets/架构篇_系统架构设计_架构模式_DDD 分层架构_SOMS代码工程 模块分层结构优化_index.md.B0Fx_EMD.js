import{_ as a,o as n,c as t,am as p}from"./chunks/framework._FJXuPhs.js";const v=JSON.parse('{"title":"SOMS代码工程 模块分层结构优化","description":"","frontmatter":{"title":"SOMS代码工程 模块分层结构优化","excerpt":"摘要","date":"2026-05-28 19:24:16","updated":"2026-05-28 19:24:16"},"headers":[],"relativePath":"架构篇/系统架构设计/架构模式/DDD 分层架构/SOMS代码工程 模块分层结构优化/index.md","filePath":"架构篇/系统架构设计/架构模式/DDD 分层架构/SOMS代码工程 模块分层结构优化/index.md","lastUpdated":null}'),i={name:"架构篇/系统架构设计/架构模式/DDD 分层架构/SOMS代码工程 模块分层结构优化/index.md"};function e(l,s,r,c,d,o){return n(),t("div",null,[...s[0]||(s[0]=[p(`<p>目标: 将现有代码逐步迁移到标准DDD分层结构</p><h2 id="现状分析" tabindex="-1">现状分析 <a class="header-anchor" href="#现状分析" aria-label="Permalink to &quot;现状分析&quot;">​</a></h2><p><strong>当前项目模块</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service/  </span></span>
<span class="line"><span>├── soms-service-application/      57个文件(仅消息处理器等)  </span></span>
<span class="line"><span>├── soms-service-domain/           362个文件(包含Repository实现)  </span></span>
<span class="line"><span>├── soms-service-infrastructure/   267个文件 </span></span>
<span class="line"><span>├── soms-service-common/           少量通用文件 </span></span>
<span class="line"><span>└── soms-service-start/            1337个文件 </span></span>
<span class="line"><span>    ├── application/               应用服务  </span></span>
<span class="line"><span>    ├── domain/                    领域逻辑  </span></span>
<span class="line"><span>    ├── userinterface/             用户接口  </span></span>
<span class="line"><span>    ├── helper/                    工具类  </span></span>
<span class="line"><span>    ├── constant/                  常量(146个文件)  </span></span>
<span class="line"><span>    └── infrastructure/            基础设施</span></span></code></pre></div><p>初步分析建议：</p><ul><li>1、考虑添加一下模块：soms-service-adapter/ &lt;-- web controller、API 接口、DTO 转换</li><li>2、soms-service-infrastructure 目前放置了实体类和部分网关接口，可以考虑将 domian 模块下 的Repository实现、Tunnel 放在infrastructure</li><li>3、模块 application 没有正确使用起来，职责有些分散，目前application服务分散在start和 application 两个模块</li><li>4、需要将 start 模块下的文件逐步迁移到其他模块下，仅保留启动类和配置</li></ul><p>目标架构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service/</span></span>
<span class="line"><span>├── soms-service-adapter/          Controller, DTO, RPC, MQ Consumer</span></span>
<span class="line"><span>├── soms-service-application/      AppService, Assembler, Event</span></span>
<span class="line"><span>├── soms-service-domain/           Model, Repository接口, DomainService</span></span>
<span class="line"><span>├── soms-service-infrastructure/   RepositoryImpl, Gateway, Mapper, PO</span></span>
<span class="line"><span>├── soms-service-common/           通用常量、工具、枚举</span></span>
<span class="line"><span>└── soms-service-start/            仅启动类和配置</span></span></code></pre></div><h2 id="分层架构开发规范" tabindex="-1">分层架构开发规范 <a class="header-anchor" href="#分层架构开发规范" aria-label="Permalink to &quot;分层架构开发规范&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    Adapter Layer                         │</span></span>
<span class="line"><span>│  (用户接口层 - 对外暴露接口,适配外部请求)                 │</span></span>
<span class="line"><span>│  - Web Controller / RPC Service / MQ Consumer            │</span></span>
<span class="line"><span>└─────────────────┬───────────────────────────────────────┘</span></span>
<span class="line"><span>                  │ 调用</span></span>
<span class="line"><span>                  ↓</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                 Application Layer                        │</span></span>
<span class="line"><span>│  (应用层 - 业务流程编排,跨聚合协调)                       │</span></span>
<span class="line"><span>│  - Application Service / Event Publisher                 │</span></span>
<span class="line"><span>└─────────────────┬───────────────────────────────────────┘</span></span>
<span class="line"><span>                  │ 调用</span></span>
<span class="line"><span>                  ↓</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                   Domain Layer                           │</span></span>
<span class="line"><span>│  (领域层 - 核心业务逻辑,聚合根,领域规则)                  │</span></span>
<span class="line"><span>│  - Entity / Value Object / Domain Service / Repository   │</span></span>
<span class="line"><span>└─────────────────┬───────────────────────────────────────┘</span></span>
<span class="line"><span>                  │ 接口定义</span></span>
<span class="line"><span>                  ↓ 接口实现(依赖倒置)</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│               Infrastructure Layer                       │</span></span>
<span class="line"><span>│  (基础设施层 - 技术实现,外部系统集成)                     │</span></span>
<span class="line"><span>│  - Repository Impl / Gateway / MQ Producer / Cache       │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           ┌─────────────────────────────┐</span></span>
<span class="line"><span>           │      Common Layer            │</span></span>
<span class="line"><span>           │  (公共层 - 通用工具,常量)     │</span></span>
<span class="line"><span>           └─────────────────────────────┘</span></span></code></pre></div><h4 id="模块职责定义" tabindex="-1">模块职责定义 <a class="header-anchor" href="#模块职责定义" aria-label="Permalink to &quot;模块职责定义&quot;">​</a></h4><table tabindex="0"><thead><tr><th>模块</th><th>职责</th><th>包含内容</th><th>禁止内容</th></tr></thead><tbody><tr><td>soms-service-adapter</td><td>用户接口层/适配器层<br>对外暴露服务接口、请求转换、参数校验</td><td>- Web Controller (REST接口)<br>- RPC Service 实现<br>- MQ Consumer<br>- WebSocket Handler<br>- 接口DTO (Request/Response)<br>- DTO Convertor (接口DTO↔应用DTO)</td><td>❌业务逻辑实现<br>❌直接调用Domain Service<br>❌直接操作数据库<br>❌直接调用外部系统</td></tr><tr><td>soms-service-application</td><td>应用层<br>业务用例编排、事务、事件发布、权限检查</td><td>- Application Service (应用服务)<br>- Application DTO<br>- Assembler (DTO↔Domain)<br>- Event Publisher/Subscriber</td><td>❌核心领域逻辑<br>❌技术实现细节<br>❌接口细节</td></tr><tr><td>soms-service-domain</td><td>领域层<br>核心业务逻辑、领域规则、聚合管理、事件定义</td><td>- Entity<br>- Value Object<br>- Aggregate Root<br>- Domain Service<br>- Repository接口<br>- Domain Event<br>- Factory<br>- Specification<br>- Policy</td><td>❌Repository实现类<br>❌MyBatis/JPA Entity<br>❌外部调用<br>❌Spring注解(除领域服务)<br>❌Tunnel/Gateway实现<br>❌DTO</td></tr><tr><td>soms-service-infrastructure</td><td>基础设施层<br>接口实现、外部集成、持久化、技术工具</td><td>- Repository实现类<br>- Mapper/Repository<br>- PO<br>- Gateway实现<br>- MQ Producer<br>- Cache实现<br>- 技术配置类<br>- 工具类</td><td>❌业务逻辑<br>❌领域规则</td></tr><tr><td>soms-service-common</td><td>公共层<br>通用能力、工具</td><td>- 通用常量<br>- 通用枚举<br>- 通用异常<br>- 通用工具类<br>- 通用注解</td><td>❌业务常量<br>❌业务枚举<br>❌业务工具类</td></tr><tr><td>soms-service-start</td><td>启动层<br>应用启动与全局配置</td><td>- Application.java<br>- 配置类<br>- application.yml/properties</td><td>❌application/应用服务<br>❌domain/领域逻辑<br>❌userinterface/接口<br>❌helper/工具<br>❌constant/常量<br>❌任何业务代码</td></tr></tbody></table><h3 id="标准包结构" tabindex="-1">标准包结构 <a class="header-anchor" href="#标准包结构" aria-label="Permalink to &quot;标准包结构&quot;">​</a></h3><h4 id="soms-service-adapter-包结构" tabindex="-1">soms-service-adapter 包结构 <a class="header-anchor" href="#soms-service-adapter-包结构" aria-label="Permalink to &quot;soms-service-adapter 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-adapter/</span></span>
<span class="line"><span>└── src/main/java/com/shein/somsservice/adapter/</span></span>
<span class="line"><span>    ├── web/                                    # Web适配器</span></span>
<span class="line"><span>    │   ├── controller/                         # REST控制器</span></span>
<span class="line"><span>    │   │   ├── PlatformActivityController.java</span></span>
<span class="line"><span>    │   │   └── SelfActivityController.java</span></span>
<span class="line"><span>    │   ├── dto/                                # 接口DTO</span></span>
<span class="line"><span>    │   │   ├── request/                        # 请求DTO</span></span>
<span class="line"><span>    │   │   │   ├── CreateActivityRequest.java</span></span>
<span class="line"><span>    │   │   │   └── UpdateActivityRequest.java</span></span>
<span class="line"><span>    │   │   └── response/                       # 响应DTO</span></span>
<span class="line"><span>    │   │       ├── ActivityDetailResponse.java</span></span>
<span class="line"><span>    │   │       └── ActivityListResponse.java</span></span>
<span class="line"><span>    │   ├── convertor/                          # DTO转换器</span></span>
<span class="line"><span>    │   │   └── ActivityWebConvertor.java       # Request/Response ↔ AppDTO</span></span>
<span class="line"><span>    │   └── filter/                             # Web过滤器</span></span>
<span class="line"><span>    │       └── AuthFilter.java</span></span>
<span class="line"><span>    ├── rpc/                                    # RPC适配器</span></span>
<span class="line"><span>    │   ├── service/                            # RPC服务实现</span></span>
<span class="line"><span>    │   │   └── ActivityRpcServiceImpl.java</span></span>
<span class="line"><span>    │   └── dto/                                # RPC DTO</span></span>
<span class="line"><span>    ├── mq/                                     # 消息队列消费者</span></span>
<span class="line"><span>    │   ├── consumer/                           # 消费者</span></span>
<span class="line"><span>    │   │   └── ActivityMessageConsumer.java</span></span>
<span class="line"><span>    │   └── dto/                                # 消息DTO</span></span>
<span class="line"><span>    │       └── ActivityMessageDTO.java</span></span>
<span class="line"><span>    └── job/                                    # 定时任务</span></span>
<span class="line"><span>        └── ActivitySyncJob.java</span></span></code></pre></div><h4 id="soms-service-application-包结构" tabindex="-1">soms-service-application 包结构 <a class="header-anchor" href="#soms-service-application-包结构" aria-label="Permalink to &quot;soms-service-application 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-application/</span></span>
<span class="line"><span>└── src/main/java/com/shein/somsservice/application/</span></span>
<span class="line"><span>    ├── service/                                # 应用服务</span></span>
<span class="line"><span>    │   ├── PlatformActivityAppService.java     # 平台活动应用服务</span></span>
<span class="line"><span>    │   └── SelfActivityAppService.java         # 自营活动应用服务</span></span>
<span class="line"><span>    ├── dto/                                    # 应用层DTO</span></span>
<span class="line"><span>    │   ├── ActivityAppDTO.java</span></span>
<span class="line"><span>    │   └── ProductAppDTO.java</span></span>
<span class="line"><span>    ├── assembler/                              # 组装器</span></span>
<span class="line"><span>    │   └── ActivityAssembler.java              # AppDTO ↔ Domain Object</span></span>
<span class="line"><span>    └── event/                                  # 应用事件</span></span>
<span class="line"><span>        ├── publisher/                          # 事件发布器</span></span>
<span class="line"><span>        │   └── ActivityEventPublisher.java</span></span>
<span class="line"><span>        └── subscriber/                         # 事件订阅器</span></span>
<span class="line"><span>            └── ActivityEventSubscriber.java</span></span></code></pre></div><h4 id="soms-service-domain-包结构" tabindex="-1">soms-service-domain 包结构 <a class="header-anchor" href="#soms-service-domain-包结构" aria-label="Permalink to &quot;soms-service-domain 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-domain/</span></span>
<span class="line"><span>└── src/main/java/com/shein/somsservice/domain/</span></span>
<span class="line"><span>    ├── platformactivity/                       # 聚合根:平台活动</span></span>
<span class="line"><span>    │   ├── entity/                             # 实体</span></span>
<span class="line"><span>    │   │   ├── PlatformActivity.java           # 聚合根</span></span>
<span class="line"><span>    │   │   └── ActivityProduct.java            # 实体</span></span>
<span class="line"><span>    │   ├── valueobject/                        # 值对象</span></span>
<span class="line"><span>    │   │   ├── ActivityTime.java</span></span>
<span class="line"><span>    │   │   └── DiscountRate.java</span></span>
<span class="line"><span>    │   ├── service/                            # 领域服务</span></span>
<span class="line"><span>    │   │   ├── PlatformActivityDomainService.java  # 接口</span></span>
<span class="line"><span>    │   │   └── impl/</span></span>
<span class="line"><span>    │   │       └── PlatformActivityDomainServiceImpl.java</span></span>
<span class="line"><span>    │   ├── repository/                         # 仓储接口</span></span>
<span class="line"><span>    │   │   └── PlatformActivityRepository.java # ⚠️ 只有接口,无impl</span></span>
<span class="line"><span>    │   ├── factory/                            # 工厂</span></span>
<span class="line"><span>    │   │   └── PlatformActivityFactory.java</span></span>
<span class="line"><span>    │   ├── specification/                      # 规约</span></span>
<span class="line"><span>    │   │   └── ActivityValidSpecification.java</span></span>
<span class="line"><span>    │   └── event/                              # 领域事件</span></span>
<span class="line"><span>    │       └── ActivityCreatedEvent.java</span></span>
<span class="line"><span>    ├── selfactivity/                           # 聚合根:自营活动</span></span>
<span class="line"><span>    │   └── ... (同上结构)</span></span>
<span class="line"><span>    └── shared/                                 # 共享领域概念</span></span>
<span class="line"><span>        ├── constant/                           # 领域常量</span></span>
<span class="line"><span>        │   └── ActivityStatus.java</span></span>
<span class="line"><span>        ├── enums/                              # 领域枚举</span></span>
<span class="line"><span>        │   └── ActivityType.java</span></span>
<span class="line"><span>        └── exception/                          # 领域异常</span></span>
<span class="line"><span>            └── ActivityBusinessException.java</span></span></code></pre></div><h4 id="soms-service-infrastructure-包结构" tabindex="-1">soms-service-infrastructure 包结构 <a class="header-anchor" href="#soms-service-infrastructure-包结构" aria-label="Permalink to &quot;soms-service-infrastructure 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-infrastructure/</span></span>
<span class="line"><span>└── src/main/java/com/shein/somsservice/infrastructure/</span></span>
<span class="line"><span>    ├── persistence/                            # 持久化</span></span>
<span class="line"><span>    │   ├── dataobject/                         # 数据对象(PO)</span></span>
<span class="line"><span>    │   │   ├── PlatformActivityPO.java</span></span>
<span class="line"><span>    │   │   └── ActivityProductPO.java</span></span>
<span class="line"><span>    │   ├── mapper/                             # MyBatis Mapper</span></span>
<span class="line"><span>    │   │   └── PlatformActivityMapper.java</span></span>
<span class="line"><span>    │   ├── repository/                         # 仓储实现</span></span>
<span class="line"><span>    │   │   └── impl/</span></span>
<span class="line"><span>    │   │       └── PlatformActivityRepositoryImpl.java  # ✅ 实现Domain接口</span></span>
<span class="line"><span>    │   ├── convertor/                          # PO转换器</span></span>
<span class="line"><span>    │   │   └── ActivityPersistenceConvertor.java  # PO ↔ Entity</span></span>
<span class="line"><span>    │   └── typehandler/                        # 类型处理器</span></span>
<span class="line"><span>    │       └── JsonTypeHandler.java</span></span>
<span class="line"><span>    ├── gateway/                                # 外部服务网关(防腐层)</span></span>
<span class="line"><span>    │   ├── plm/                                # PLM系统网关</span></span>
<span class="line"><span>    │   │   ├── PlmGateway.java                 # 网关接口(可选)</span></span>
<span class="line"><span>    │   │   ├── PlmGatewayImpl.java             # 网关实现</span></span>
<span class="line"><span>    │   │   ├── client/                         # 外部客户端</span></span>
<span class="line"><span>    │   │   │   └── PlmClient.java</span></span>
<span class="line"><span>    │   │   ├── request/                        # 外部请求对象</span></span>
<span class="line"><span>    │   │   │   └── PlmProductRequest.java</span></span>
<span class="line"><span>    │   │   ├── response/                       # 外部响应对象</span></span>
<span class="line"><span>    │   │   │   └── PlmProductResponse.java</span></span>
<span class="line"><span>    │   │   └── convertor/                      # 防腐转换器</span></span>
<span class="line"><span>    │   │       └── PlmDomainConvertor.java     # 外部对象 ↔ Domain对象</span></span>
<span class="line"><span>    │   ├── ppc/                                # PPC系统网关</span></span>
<span class="line"><span>    │   │   └── ... (同上结构)</span></span>
<span class="line"><span>    │   └── spfm/                               # SPFM系统网关</span></span>
<span class="line"><span>    │       └── ... (同上结构)</span></span>
<span class="line"><span>    ├── mq/                                     # 消息队列基础设施</span></span>
<span class="line"><span>    │   ├── producer/                           # 生产者</span></span>
<span class="line"><span>    │   │   └── ActivityEventProducer.java</span></span>
<span class="line"><span>    │   └── config/                             # MQ配置</span></span>
<span class="line"><span>    │       └── KafkaProducerConfig.java</span></span>
<span class="line"><span>    ├── cache/                                  # 缓存实现</span></span>
<span class="line"><span>    │   ├── ActivityCacheManager.java</span></span>
<span class="line"><span>    │   └── config/</span></span>
<span class="line"><span>    │       └── RedisConfig.java</span></span>
<span class="line"><span>    ├── config/                                 # 基础设施配置</span></span>
<span class="line"><span>    │   ├── DataSourceConfig.java</span></span>
<span class="line"><span>    │   └── ThreadPoolConfig.java</span></span>
<span class="line"><span>    └── utils/                                  # 基础设施工具类</span></span>
<span class="line"><span>        ├── TransactionUtils.java</span></span>
<span class="line"><span>        └── BatchHelper.java</span></span></code></pre></div><h4 id="soms-service-common-包结构" tabindex="-1">soms-service-common 包结构 <a class="header-anchor" href="#soms-service-common-包结构" aria-label="Permalink to &quot;soms-service-common 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-common/</span></span>
<span class="line"><span>└── src/main/java/com/shein/somsservice/common/</span></span>
<span class="line"><span>    ├── constant/                               # 通用常量</span></span>
<span class="line"><span>    │   └── CommonConstants.java</span></span>
<span class="line"><span>    ├── enums/                                  # 通用枚举</span></span>
<span class="line"><span>    │   └── YesNoEnum.java</span></span>
<span class="line"><span>    ├── exception/                              # 通用异常</span></span>
<span class="line"><span>    │   ├── BaseException.java</span></span>
<span class="line"><span>    │   └── SystemException.java</span></span>
<span class="line"><span>    ├── util/                                   # 通用工具类</span></span>
<span class="line"><span>    │   ├── DateUtil.java</span></span>
<span class="line"><span>    │   ├── StringUtil.java</span></span>
<span class="line"><span>    │   └── JsonUtil.java</span></span>
<span class="line"><span>    └── annotation/                             # 通用注解</span></span>
<span class="line"><span>        └── Trace.java</span></span></code></pre></div><h4 id="soms-service-start-包结构" tabindex="-1">soms-service-start 包结构 <a class="header-anchor" href="#soms-service-start-包结构" aria-label="Permalink to &quot;soms-service-start 包结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>soms-service-start/</span></span>
<span class="line"><span>├── src/main/java/com/shein/somsservice/</span></span>
<span class="line"><span>│   ├── Application.java                       # ✅ 启动类</span></span>
<span class="line"><span>│   └── config/                                # ✅ 全局配置</span></span>
<span class="line"><span>│       ├── GlobalExceptionHandler.java</span></span>
<span class="line"><span>│       └── SwaggerConfig.java</span></span>
<span class="line"><span>└── src/main/resources/</span></span>
<span class="line"><span>    ├── application.yml                        # ✅ 配置文件</span></span>
<span class="line"><span>    ├── application-dev.yml</span></span>
<span class="line"><span>    ├── application-prod.yml</span></span>
<span class="line"><span>    └── logback-spring.xml</span></span></code></pre></div><hr><h3 id="常见的数据对象类型定义" tabindex="-1">常见的数据对象类型定义 <a class="header-anchor" href="#常见的数据对象类型定义" aria-label="Permalink to &quot;常见的数据对象类型定义&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>所属层次</th><th>用途/定义</th><th>数据注解</th><th>是否包含业务逻辑</th><th>与数据库映射关系</th></tr></thead><tbody><tr><td><strong>Entity（实体）</strong></td><td>domain（领域层）</td><td>表达核心业务对象，有唯一业务标识，封装业务规则与行为</td><td>领域相关注解（少量）</td><td><strong>有（核心业务规则）</strong></td><td>无</td></tr><tr><td><strong>Value Object（值对象）</strong></td><td>domain（领域层）</td><td>一组不可分割的属性，无唯一标识，业务不可变值</td><td>无</td><td><strong>有（只读、不可变）</strong></td><td>无</td></tr><tr><td><strong>DTO（数据传输对象）</strong></td><td>application/interface/adaptor（应用、接口、适配层）</td><td>系统间或前后端数据交换、参数传递</td><td>校验或序列化注解（可选）</td><td><strong>无</strong></td><td>可能有/无</td></tr><tr><td><strong>PO（持久化对象）</strong></td><td>infrastructure（基础设施/持久化层）</td><td>数据库存储对象，与表字段一一映射，做数据持久化</td><td>ORM/数据库相关注解</td><td><strong>无</strong></td><td>一一映射数据库表</td></tr><tr><td><strong>Model（模型类）</strong></td><td>多义，各层次均可能出现</td><td>①页面模型 ②接口交互模型 ③临时/业务模型等</td><td>项目相关配置</td><td>通常无（视场景而定）</td><td>依项目而异</td></tr></tbody></table><h3 id="分层开发规范" tabindex="-1">分层开发规范 <a class="header-anchor" href="#分层开发规范" aria-label="Permalink to &quot;分层开发规范&quot;">​</a></h3><table tabindex="0"><thead><tr><th>层级</th><th>规范对象</th><th>主要职责与规范</th><th>禁止/注意事项</th></tr></thead><tbody><tr><td><strong>Adapter</strong></td><td>Controller</td><td>- 接收/响应 HTTP 请求<br>- 参数校验<br>- 调用应用服务<br>- DTO转换</td><td>禁止写业务逻辑<br>禁止直接操作数据库/领域服务</td></tr><tr><td></td><td>DTO</td><td>- 面向接口设计<br>- 基础类型、校验注解<br>- 数据交互载体</td><td>不包含业务逻辑</td></tr><tr><td><strong>Application</strong></td><td>Application Service</td><td>- 业务流程编排<br>- 跨聚合协调<br>- 事务管理<br>- DTO ↔ 领域对象转换<br>- 应用事件</td><td>禁止核心业务逻辑<br>禁止直连DB/外部系统</td></tr><tr><td></td><td>Assembler</td><td>- 负责 DTO 与领域模型互转</td><td>仅做字段/结构映射，不包含复杂逻辑</td></tr><tr><td><strong>Domain</strong></td><td>Entity</td><td>- 聚合根<br>- 业务逻辑实现<br>- 状态维护/不变性</td><td>禁止贫血模型<br>禁止暴露基础 setter 绕业务规则</td></tr><tr><td></td><td>Value Object</td><td>- 不可变<br>- 业务属性封装<br>- 内部校验与只读业务逻辑</td><td>无 ID，不可变，不含持久化注解</td></tr><tr><td></td><td>Domain Service</td><td>- 跨实体业务<br>- 领域规则（无法归属单一实体）<br>- 可依赖仓储<br>- 无状态</td><td>禁止技术实现细节<br>禁止外部系统直接调用</td></tr><tr><td></td><td>Repository Interface</td><td>- 领域对象持久化接口<br>- 领域语义方法签名<br>- 面向实体/聚合</td><td>仅定义接口，不含实现<br>参数/返回值用领域对象</td></tr><tr><td><strong>Infrastructure</strong></td><td>Repository Impl</td><td>- 实现 Repository 接口<br>- Entity ↔ PO 映射<br>- DB 操作细节</td><td>不掺杂业务逻辑<br>通过注解声明</td></tr><tr><td></td><td>Gateway</td><td>- 外部系统调用适配、反腐封装<br>- 外部模型转领域模型<br>- 处理异常</td><td>禁止领域污染<br>实现细节只在基础设施层</td></tr></tbody></table><h3 id="依赖关系规范" tabindex="-1">依赖关系规范 <a class="header-anchor" href="#依赖关系规范" aria-label="Permalink to &quot;依赖关系规范&quot;">​</a></h3><table tabindex="0"><thead><tr><th>层/模块</th><th>允许依赖</th><th>禁止依赖</th><th>依赖说明</th></tr></thead><tbody><tr><td><strong>Adapter</strong></td><td>Application, Common</td><td>Domain, Infrastructure</td><td>仅依赖应用编排层和通用工具，不直连领域/持久化层</td></tr><tr><td><strong>Application</strong></td><td>Domain, Common</td><td>Adapter, Infrastructure</td><td>只依赖领域模型和通用工具，不能降级/跳跃依赖</td></tr><tr><td><strong>Domain</strong></td><td>Common, 基础框架(如Spring 可provided)</td><td>Application, Infrastructure, Adapter, 技术框架（如MyBatis/Redis）</td><td>核心业务模型，最大程度解耦，仅实现领域本身</td></tr><tr><td><strong>Infrastructure</strong></td><td>Domain(实现接口), Common, 技术框架</td><td>Application, Adapter</td><td>仅连接领域接口，持久化/网关/外部集成相关依赖</td></tr><tr><td><strong>Common</strong></td><td>无限制/基础依赖库</td><td>无</td><td>所有层都可依赖的通用模块，放工具/常量等</td></tr><tr><td><strong>Start/启动模块</strong></td><td>所有层</td><td>无</td><td>汇总依赖各业务层与基础设施层</td></tr></tbody></table><h3 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h3><h3 id="各层dto与对象转换规范" tabindex="-1">各层DTO与对象转换规范 <a class="header-anchor" href="#各层dto与对象转换规范" aria-label="Permalink to &quot;各层DTO与对象转换规范&quot;">​</a></h3><h2 id="迁移计划" tabindex="-1">迁移计划 <a class="header-anchor" href="#迁移计划" aria-label="Permalink to &quot;迁移计划&quot;">​</a></h2><h3 id="迁移规范" tabindex="-1">迁移规范 <a class="header-anchor" href="#迁移规范" aria-label="Permalink to &quot;迁移规范&quot;">​</a></h3><ul><li>1、逐步迁移，从下往上迁移，分阶段迁移，迁移后需要回归验证。</li><li>2、新功能严格按照新结构开发</li><li>3、迁移期间保持系统稳定,老代码逐步重构</li></ul><h3 id="迁移阶段" tabindex="-1">迁移阶段 <a class="header-anchor" href="#迁移阶段" aria-label="Permalink to &quot;迁移阶段&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>第一阶段: Infrastructure层(Repository实现、Tunnel)  </span></span>
<span class="line"><span>	 ↓第二阶段: Domain层纯化  </span></span>
<span class="line"><span>	 ↓第三阶段: Application层整合  </span></span>
<span class="line"><span>	 ↓第四阶段: Adapter层激活  </span></span>
<span class="line"><span>	 ↓第五阶段: Start层瘦身</span></span></code></pre></div><h3 id="迁移策略" tabindex="-1">迁移策略 <a class="header-anchor" href="#迁移策略" aria-label="Permalink to &quot;迁移策略&quot;">​</a></h3><p>新老并存</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 创建新位置的类  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">infrastructure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">persistence</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">impl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PlatformActivityRepositoryImpl.java  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 老位置标记为@Deprecated  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Deprecated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">platformactivity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">impl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PlatformActivityRepositoryMpImpl.java  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 老类委托给新类  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Deprecated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PlatformActivityRepositoryMpImpl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PlatformActivityRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PlatformActivityRepositoryImpl newImpl;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PlatformActivity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Long </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {        </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newImpl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 委托给新实现  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }}  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 逐步迁移调用方  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5. 删除老类</span></span></code></pre></div><h3 id="迁移任务" tabindex="-1">迁移任务 <a class="header-anchor" href="#迁移任务" aria-label="Permalink to &quot;迁移任务&quot;">​</a></h3><table tabindex="0"><thead><tr><th>阶段</th><th>目标/里程碑</th><th>关键任务与操作</th><th>迁移/重构对象示例</th><th>验收标准（关键勾选项）</th></tr></thead><tbody><tr><td>0</td><td>准备与基础设施搭建</td><td>制定规范文档、迁移指引、代码清单、ArchUnit用例、团队培训</td><td>文档、测试用例、代码清单</td><td></td></tr><tr><td>1</td><td>Infrastructure 层迁移与领域纯化</td><td>Repository 实现迁移，Tunnel → Gateway，Convertor梳理</td><td>RepositoryMpImpl、Tunnel、Convertor</td><td>☐ Domain 层无 Repository 实现类<br>☐ Tunnel 类剥离<br>☐ 测试通过</td></tr><tr><td>2</td><td>Adapter 层接管接口</td><td>Adapter 模块搭建，Controller/DTO 迁移</td><td>Controller、Request/Response DTO</td><td>☐ Adapter 层覆盖所有 Controller<br>☐ Controller 只依赖 Application 层<br>☐ 测试通过</td></tr><tr><td>3</td><td>Application 层整合优化</td><td>AppService 迁移，DTO 梳理，Assembler 创建</td><td>Application Service、AppDTO、Assembler</td><td>☐ 所有功能均由 AppService 管理<br>☐ Assembler 解耦数据转换<br>☐ AppService 无业务逻辑<br>☐ 测试通过</td></tr><tr><td>4</td><td>Domain 层重构与聚合建模</td><td>Service/Repository迁移归类，聚合根重组，实体充血化</td><td>Domain Service、Aggregates、Entity</td><td>☐ 聚合根结构合理<br>☐ Entity 具备业务方法<br>☐ 无技术依赖<br>☐ 测试通过</td></tr><tr><td>5</td><td>工具类与常量规范</td><td>Helper/Util 类及业务常量、枚举梳理归类</td><td>Helper、Constant、Enums</td><td>☐ 工具类/常量目录清理<br>☐ 分类归类规范</td></tr><tr><td>6</td><td>启动层优化与收口</td><td>清理无关代码，仅保留启动和全局配置，迁移 DataSource 等</td><td>Application、配置、辅助类</td><td>☐ 仅剩启动类及核心配置<br>☐ 文件数量 &lt; 20<br>☐ 应用可正常启动</td></tr></tbody></table><h2 id="输出内容" tabindex="-1">输出内容 <a class="header-anchor" href="#输出内容" aria-label="Permalink to &quot;输出内容&quot;">​</a></h2><ul><li><ol><li>DDD 分层规范文档</li></ol></li><li><ol start="2"><li>Skills 功能模块迁移</li></ol></li><li><ol start="3"><li>claude.md 编写规范文档</li></ol></li><li><ol start="4"><li>项目分层结构清晰，完全符合 DDD 设计原则</li></ol></li></ul>`,46)])])}const m=a(i,[["render",e]]);export{v as __pageData,m as default};
