import{_ as s,o as a,c as p,am as e}from"./chunks/framework._FJXuPhs.js";const _=JSON.parse('{"title":"单元测试代码覆盖率-脚本文件","description":"","frontmatter":{"title":"单元测试代码覆盖率-脚本文件","excerpt":"摘要","date":"2025-09-15 17:00:54","updated":"2025-09-15 17:00:54"},"headers":[],"relativePath":"工程化/项目代码规范使用/测试代码覆盖率/单元测试代码覆盖率-脚本文件.md","filePath":"工程化/项目代码规范使用/测试代码覆盖率/单元测试代码覆盖率-脚本文件.md","lastUpdated":null}'),l={name:"工程化/项目代码规范使用/测试代码覆盖率/单元测试代码覆盖率-脚本文件.md"};function o(t,n,c,i,u,r){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h3 id="查看单个类的覆盖情况" tabindex="-1">查看单个类的覆盖情况 <a class="header-anchor" href="#查看单个类的覆盖情况" aria-label="Permalink to &quot;查看单个类的覆盖情况&quot;">​</a></h3><p>执行 mvn test 命令，然后打开浏览器查看动作</p><p>quick-coverage.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># JaCoCo覆盖率检查脚本  </span></span>
<span class="line"><span># 用法: ./check-coverage.sh [类名]  </span></span>
<span class="line"><span># 例如: ./check-coverage.sh PickGoodsSelfProductAppService  </span></span>
<span class="line"><span># 例如: ./check-coverage.sh PickGoodsPlatformActivityDomainService  </span></span>
<span class="line"><span># 默认类名  </span></span>
<span class="line"><span>DEFAULT_CLASS=&quot;SelfActivityApplyProductService&quot;  </span></span>
<span class="line"><span>CLASS_NAME=\${1:-$DEFAULT_CLASS}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>set -e  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 帮助信息  </span></span>
<span class="line"><span>if [| &quot;$1&quot; == &quot;--help&quot;](); then  </span></span>
<span class="line"><span>    echo &quot;JaCoCo覆盖率检查脚本&quot;  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;用法:&quot;  </span></span>
<span class="line"><span>    echo &quot;  $0 [类名]&quot;  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;参数:&quot;  </span></span>
<span class="line"><span>    echo &quot;  类名    要检查覆盖率的Java类名（不包含.java扩展名）&quot;  </span></span>
<span class="line"><span>    echo &quot;          如果不提供，则使用默认类: PickGoodsSelfProductAppService&quot;  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;示例:&quot;  </span></span>
<span class="line"><span>    echo &quot;  $0                                          # 使用默认类，生成 coverage-analysis-PickGoodsSelfProductAppService.md&quot;    echo &quot;  $0 PickGoodsSelfProductAppService          # 检查应用服务类，生成对应的分析文件&quot;  </span></span>
<span class="line"><span>    echo &quot;  $0 PickGoodsPlatformActivityDomainService  # 检查领域服务类，生成对应的分析文件&quot;  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;选项:&quot;  </span></span>
<span class="line"><span>    echo &quot;  -h, --help    显示此帮助信息&quot;  </span></span>
<span class="line"><span>    exit 0  </span></span>
<span class="line"><span>fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 覆盖率阈值设置  </span></span>
<span class="line"><span>COVERAGE_THRESHOLD=80  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 颜色定义  </span></span>
<span class="line"><span>RED=&#39;\\033[0;31m&#39;  </span></span>
<span class="line"><span>GREEN=&#39;\\033[0;32m&#39;  </span></span>
<span class="line"><span>YELLOW=&#39;\\033[1;33m&#39;  </span></span>
<span class="line"><span>BLUE=&#39;\\033[0;34m&#39;  </span></span>
<span class="line"><span>NC=&#39;\\033[0m&#39; # No Color  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}========================================\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}  JaCoCo 覆盖率检查脚本\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}========================================\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;目标类: \${YELLOW}\${CLASS_NAME}\${NC}&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 切换到项目根目录  </span></span>
<span class="line"><span>cd &quot;$(dirname &quot;$0&quot;)/..&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 1. 运行测试并生成JaCoCo报告  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤1: 运行测试并生成JaCoCo报告...\${NC}&quot;  </span></span>
<span class="line"><span>./mvnw test -Dmaven.test.failure.ignore=true jacoco:report -pl soms-service-start -q  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if [ $? -eq 0 ]; then  </span></span>
<span class="line"><span>    echo -e &quot;\${GREEN}✓ 测试和报告生成完成\${NC}&quot;  </span></span>
<span class="line"><span>else  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}✗ 测试或报告生成失败\${NC}&quot;  </span></span>
<span class="line"><span>    exit 1  </span></span>
<span class="line"><span>fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 2. 动态查找类的包路径和检查报告文件  </span></span>
<span class="line"><span>JACOCO_REPORT_DIR=&quot;soms-service-start/target/jacoco&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤2: 查找类的包路径...\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 查找类文件以确定正确的包路径  </span></span>
<span class="line"><span>CLASS_FILE=$(find . -name &quot;\${CLASS_NAME}.java&quot; -path &quot;*/src/main/java/*&quot; | head -1)  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if [ -z &quot;$CLASS_FILE&quot; ]; then  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}✗ 未找到类文件: \${CLASS_NAME}.java\${NC}&quot;  </span></span>
<span class="line"><span>    echo -e &quot;\${YELLOW}请检查类名是否正确\${NC}&quot;  </span></span>
<span class="line"><span>    exit 1  </span></span>
<span class="line"><span>fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 从文件路径提取包路径  </span></span>
<span class="line"><span>PACKAGE_PATH=$(echo &quot;$CLASS_FILE&quot; | sed &#39;s|.*/src/main/java/||&#39; | sed &#39;s|/[^/]*\\.java$||&#39;)  </span></span>
<span class="line"><span>echo -e &quot;\${GREEN}✓ 找到类文件: \${PACKAGE_PATH}/\${CLASS_NAME}.java\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 构建HTML报告文件路径 - JaCoCo使用点号分隔包名  </span></span>
<span class="line"><span>PACKAGE_PATH_FOR_HTML=$(echo &quot;$PACKAGE_PATH&quot; | sed &#39;s|/|.|g&#39;)  </span></span>
<span class="line"><span>HTML_REPORT_FILE=&quot;\${JACOCO_REPORT_DIR}/\${PACKAGE_PATH_FOR_HTML}/\${CLASS_NAME}.java.html&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤3: 检查报告文件...\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if [ -f &quot;$HTML_REPORT_FILE&quot; ]; then  </span></span>
<span class="line"><span>    echo -e &quot;\${GREEN}✓ 找到覆盖率报告文件\${NC}&quot;  </span></span>
<span class="line"><span>else  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}✗ 未找到覆盖率报告文件: $HTML_REPORT_FILE\${NC}&quot;  </span></span>
<span class="line"><span>    echo -e &quot;\${YELLOW}可能的原因:\${NC}&quot;  </span></span>
<span class="line"><span>    echo -e &quot;  - 类名不正确&quot;  </span></span>
<span class="line"><span>    echo -e &quot;  - 测试未执行成功&quot;  </span></span>
<span class="line"><span>    echo -e &quot;  - JaCoCo报告未生成&quot;  </span></span>
<span class="line"><span>    exit 1  </span></span>
<span class="line"><span>fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 4. 解析XML报告获取覆盖率数据  </span></span>
<span class="line"><span>XML_REPORT_FILE=&quot;\${JACOCO_REPORT_DIR}/jacoco.xml&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤4: 解析覆盖率数据...\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if [ -f &quot;$XML_REPORT_FILE&quot; ]; then  </span></span>
<span class="line"><span>    # 提取特定类的覆盖率信息  </span></span>
<span class="line"><span>    python3 &lt;&lt; EOF  </span></span>
<span class="line"><span>import xml.etree.ElementTree as ET  </span></span>
<span class="line"><span>import sys  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>try:  </span></span>
<span class="line"><span>    tree = ET.parse(&#39;$XML_REPORT_FILE&#39;)    root = tree.getroot()    # 转换包路径格式 (将/替换为.)  </span></span>
<span class="line"><span>    package_name = &#39;$PACKAGE_PATH&#39;.replace(&#39;/&#39;, &#39;.&#39;)    # 查找目标类  </span></span>
<span class="line"><span>    target_class = None    for package in root.findall(&#39;.//package[@name=&quot;$PACKAGE_PATH&quot;]&#39;):        for clazz in package.findall(&#39;.//class&#39;):            class_name = clazz.get(&#39;name&#39;, &#39;&#39;)            if &#39;$CLASS_NAME&#39; in class_name:                target_class = clazz                break        if target_class is not None:            break        if target_class is None:  </span></span>
<span class="line"><span>        print(&quot;未找到类 $CLASS_NAME 的覆盖率数据&quot;)  </span></span>
<span class="line"><span>        sys.exit(1)        print(&quot;\\\\n&quot; + &quot;=&quot;*60)  </span></span>
<span class="line"><span>    print(f&quot;📊 {target_class.get(&#39;name&#39;)} 覆盖率报告&quot;)  </span></span>
<span class="line"><span>    print(&quot;=&quot;*60)    # 获取各种覆盖率指标  </span></span>
<span class="line"><span>    counters = target_class.findall(&#39;counter&#39;)    coverage_data = {}        for counter in counters:  </span></span>
<span class="line"><span>        counter_type = counter.get(&#39;type&#39;)        missed = int(counter.get(&#39;missed&#39;, 0))        covered = int(counter.get(&#39;covered&#39;, 0))        total = missed + covered                if total &gt; 0:  </span></span>
<span class="line"><span>            percentage = (covered / total) * 100            coverage_data[counter_type] = {                &#39;covered&#39;: covered,                &#39;missed&#39;: missed,                &#39;total&#39;: total,                &#39;percentage&#39;: percentage            }    # 显示覆盖率统计  </span></span>
<span class="line"><span>    metrics = [        (&#39;INSTRUCTION&#39;, &#39;指令覆盖率&#39;),  </span></span>
<span class="line"><span>        (&#39;BRANCH&#39;, &#39;分支覆盖率&#39;),  </span></span>
<span class="line"><span>        (&#39;LINE&#39;, &#39;行覆盖率&#39;),  </span></span>
<span class="line"><span>        (&#39;METHOD&#39;, &#39;方法覆盖率&#39;),  </span></span>
<span class="line"><span>        (&#39;CLASS&#39;, &#39;类覆盖率&#39;)  </span></span>
<span class="line"><span>    ]        for metric_key, metric_name in metrics:  </span></span>
<span class="line"><span>        if metric_key in coverage_data:            data = coverage_data[metric_key]            percentage = data[&#39;percentage&#39;]            status = &quot;🟢&quot; if percentage &gt;= 80 else &quot;🟡&quot; if percentage &gt;= 60 else &quot;🔴&quot;  </span></span>
<span class="line"><span>            print(f&quot;{status} {metric_name:12} {percentage:6.1f}% ({data[&#39;covered&#39;]}/{data[&#39;total&#39;]})&quot;)        else:            print(f&quot;⚪ {metric_name:12} 无数据&quot;)  </span></span>
<span class="line"><span>        print(&quot;=&quot;*60)  </span></span>
<span class="line"><span>    # 生成方法级别的覆盖率进度报告  </span></span>
<span class="line"><span>    methods_data = []    for method in target_class.findall(&#39;method&#39;):        method_name = method.get(&#39;name&#39;, &#39;unknown&#39;)        method_line = method.get(&#39;line&#39;, &#39;unknown&#39;)                method_coverage = {}  </span></span>
<span class="line"><span>        for counter in method.findall(&#39;counter&#39;):            counter_type = counter.get(&#39;type&#39;)            missed = int(counter.get(&#39;missed&#39;, 0))            covered = int(counter.get(&#39;covered&#39;, 0))            total = missed + covered                        if total &gt; 0:  </span></span>
<span class="line"><span>                percentage = (covered / total) * 100                method_coverage[counter_type] = {                    &#39;covered&#39;: covered,                    &#39;missed&#39;: missed,                    &#39;total&#39;: total,                    &#39;percentage&#39;: percentage                }        # 计算方法的综合状态  </span></span>
<span class="line"><span>        line_coverage = method_coverage.get(&#39;LINE&#39;, {})        instruction_coverage = method_coverage.get(&#39;INSTRUCTION&#39;, {})        branch_coverage = method_coverage.get(&#39;BRANCH&#39;, {})                if line_coverage:  </span></span>
<span class="line"><span>            line_pct = line_coverage[&#39;percentage&#39;]            status = &quot;🟢 已达标&quot; if line_pct &gt;= 80 else &quot;🟡 部分覆盖&quot; if line_pct &gt;= 50 else &quot;🔴 未达标&quot;  </span></span>
<span class="line"><span>        else:            line_pct = 0            status = &quot;🔴 未覆盖&quot;  </span></span>
<span class="line"><span>                methods_data.append({  </span></span>
<span class="line"><span>            &#39;name&#39;: method_name,            &#39;line&#39;: method_line,            &#39;line_coverage&#39;: line_coverage,            &#39;instruction_coverage&#39;: instruction_coverage,            &#39;branch_coverage&#39;: branch_coverage,            &#39;line_percentage&#39;: line_pct,            &#39;status&#39;: status        })        print(&quot;生成未覆盖方法代码文件...&quot;)  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>except Exception as e:  </span></span>
<span class="line"><span>    print(f&quot;解析XML报告时出错: {e}&quot;)  </span></span>
<span class="line"><span>    sys.exit(1)EOF  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 5. 生成覆盖率分析报告  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤5: 生成覆盖率分析报告...\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>python3 &lt;&lt; EOF  </span></span>
<span class="line"><span>import xml.etree.ElementTree as ET  </span></span>
<span class="line"><span>import sys  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>try:  </span></span>
<span class="line"><span>    tree = ET.parse(&#39;$XML_REPORT_FILE&#39;)    root = tree.getroot()    # 查找目标类  </span></span>
<span class="line"><span>    target_class = None    for package in root.findall(&#39;.//package[@name=&quot;$PACKAGE_PATH&quot;]&#39;):        for clazz in package.findall(&#39;.//class&#39;):            class_name = clazz.get(&#39;name&#39;, &#39;&#39;)            if &#39;$CLASS_NAME&#39; in class_name:                target_class = clazz                break        if target_class is not None:            break        if target_class is None:  </span></span>
<span class="line"><span>        print(&quot;未找到类 $CLASS_NAME 的覆盖率数据&quot;)  </span></span>
<span class="line"><span>        sys.exit(1)    # 获取各种覆盖率指标  </span></span>
<span class="line"><span>    counters = target_class.findall(&#39;counter&#39;)    coverage_data = {}        for counter in counters:  </span></span>
<span class="line"><span>        counter_type = counter.get(&#39;type&#39;)        missed = int(counter.get(&#39;missed&#39;, 0))        covered = int(counter.get(&#39;covered&#39;, 0))        total = missed + covered                if total &gt; 0:  </span></span>
<span class="line"><span>            percentage = (covered / total) * 100            coverage_data[counter_type] = {                &#39;covered&#39;: covered,                &#39;missed&#39;: missed,                &#39;total&#39;: total,                &#39;percentage&#39;: percentage            }    # 生成方法级别的覆盖率进度报告  </span></span>
<span class="line"><span>    methods_data = []    for method in target_class.findall(&#39;method&#39;):        method_name = method.get(&#39;name&#39;, &#39;unknown&#39;)        method_line = method.get(&#39;line&#39;, &#39;unknown&#39;)                method_coverage = {}  </span></span>
<span class="line"><span>        for counter in method.findall(&#39;counter&#39;):            counter_type = counter.get(&#39;type&#39;)            missed = int(counter.get(&#39;missed&#39;, 0))            covered = int(counter.get(&#39;covered&#39;, 0))            total = missed + covered                        if total &gt; 0:  </span></span>
<span class="line"><span>                percentage = (covered / total) * 100                method_coverage[counter_type] = {                    &#39;covered&#39;: covered,                    &#39;missed&#39;: missed,                    &#39;total&#39;: total,                    &#39;percentage&#39;: percentage                }        # 计算方法的综合状态  </span></span>
<span class="line"><span>        line_coverage = method_coverage.get(&#39;LINE&#39;, {})                if line_coverage:  </span></span>
<span class="line"><span>            line_pct = line_coverage[&#39;percentage&#39;]        else:            line_pct = 0                methods_data.append({  </span></span>
<span class="line"><span>            &#39;name&#39;: method_name,            &#39;line&#39;: method_line,            &#39;line_coverage&#39;: line_coverage,            &#39;line_percentage&#39;: line_pct        })    # 生成简洁的覆盖率分析文件  </span></span>
<span class="line"><span>    with open(f&#39;plan/coverage-analysis-$CLASS_NAME.md&#39;, &#39;w&#39;, encoding=&#39;utf-8&#39;) as f:        f.write(f&quot;# {target_class.get(&#39;name&#39;).split(&#39;/&#39;)[-1]} 覆盖率分析\\\\n\\\\n&quot;)  </span></span>
<span class="line"><span>        # 整体覆盖率 - 只显示关键指标  </span></span>
<span class="line"><span>        f.write(&quot;## 整体覆盖率\\\\n\\\\n&quot;)  </span></span>
<span class="line"><span>        class_coverage = coverage_data.get(&#39;CLASS&#39;, {}).get(&#39;percentage&#39;, 0)        method_coverage = coverage_data.get(&#39;METHOD&#39;, {}).get(&#39;percentage&#39;, 0)        line_coverage = coverage_data.get(&#39;LINE&#39;, {}).get(&#39;percentage&#39;, 0)        branch_coverage = coverage_data.get(&#39;BRANCH&#39;, {}).get(&#39;percentage&#39;, 0)                f.write(f&quot;**类覆盖率**: {class_coverage:.1f}%\\\\n&quot;)  </span></span>
<span class="line"><span>        f.write(f&quot;**方法覆盖率**: {method_coverage:.1f}%\\\\n&quot;)  </span></span>
<span class="line"><span>        f.write(f&quot;**行覆盖率**: {line_coverage:.1f}%\\\\n&quot;)  </span></span>
<span class="line"><span>        f.write(f&quot;**分支覆盖率**: {branch_coverage:.1f}%\\\\n\\\\n&quot;)  </span></span>
<span class="line"><span>        # 未达标方法  </span></span>
<span class="line"><span>        threshold = $COVERAGE_THRESHOLD        underperforming_methods = [m for m in methods_data if m[&#39;line_percentage&#39;] &lt; threshold and not m[&#39;name&#39;].startswith(&#39;lambda&#39;)]        if underperforming_methods:            f.write(f&quot;## 未达到{threshold}%覆盖率的方法\\\\n\\\\n&quot;)  </span></span>
<span class="line"><span>            for method in underperforming_methods:                f.write(f&quot;- **{method[&#39;name&#39;]}** (行 {method[&#39;line&#39;]}) - {method[&#39;line_percentage&#39;]:.1f}%\\\\n&quot;)        else:            f.write(f&quot;## ✅ 所有方法都达到{threshold}%覆盖率\\\\n&quot;)  </span></span>
<span class="line"><span>        print(&quot;\\\\n📄 已生成覆盖率分析报告:&quot;)  </span></span>
<span class="line"><span>    print(f&quot;   🔍 plan/coverage-analysis-$CLASS_NAME.md&quot;)  </span></span>
<span class="line"><span>except Exception as e:  </span></span>
<span class="line"><span>    print(f&quot;解析XML报告时出错: {e}&quot;)  </span></span>
<span class="line"><span>    sys.exit(1)EOF  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>else  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}✗ 未找到XML报告文件: $XML_REPORT_FILE\${NC}&quot;  </span></span>
<span class="line"><span>    exit 1  </span></span>
<span class="line"><span>fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 6. 打开HTML报告  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${BLUE}步骤6: 打开覆盖率报告...\${NC}&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 获取绝对路径  </span></span>
<span class="line"><span>ABS_HTML_PATH=&quot;$(pwd)/$HTML_REPORT_FILE&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>echo -e &quot;\${GREEN}✓ 覆盖率检查完成！\${NC}&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${YELLOW}📊 报告文件位置:\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;  HTML报告: $ABS_HTML_PATH&quot;  </span></span>
<span class="line"><span>echo -e &quot;  分析报告: $(pwd)/plan/coverage-analysis-\${CLASS_NAME}.md&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${YELLOW}🌐 浏览器访问:\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;  file://$ABS_HTML_PATH&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${YELLOW}💡 IDE本地服务器访问:\${NC}&quot;  </span></span>
<span class="line"><span>echo -e &quot;  http://localhost:63342/soms-service/soms-service-start/target/jacoco/\${PACKAGE_PATH_FOR_HTML}/\${CLASS_NAME}.java.html&quot;  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 尝试自动打开浏览器 (可选)  </span></span>
<span class="line"><span>#if command -v open &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>#    echo -e &quot;\${BLUE}正在尝试打开浏览器...\${NC}&quot;  </span></span>
<span class="line"><span>#    open &quot;file://$ABS_HTML_PATH&quot; 2&gt;/dev/null || echo -e &quot;\${YELLOW}无法自动打开浏览器，请手动打开上述链接\${NC}&quot;  </span></span>
<span class="line"><span>#elif command -v xdg-open &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>#    echo -e &quot;\${BLUE}正在尝试打开浏览器...\${NC}&quot;  </span></span>
<span class="line"><span>#    xdg-open &quot;file://$ABS_HTML_PATH&quot; 2&gt;/dev/null || echo -e &quot;\${YELLOW}无法自动打开浏览器，请手动打开上述链接\${NC}&quot;  </span></span>
<span class="line"><span>#else  </span></span>
<span class="line"><span>#    echo -e &quot;\${YELLOW}请手动在浏览器中打开上述链接查看详细报告\${NC}&quot;  </span></span>
<span class="line"><span>#fi  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>echo &quot;&quot;  </span></span>
<span class="line"><span>echo -e &quot;\${GREEN}🎉 脚本执行完成！\${NC}&quot;</span></span></code></pre></div><p>方法场景计划文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span># PickGoodsSelfProductAppService.plmApply 方法测试场景计划</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 方法签名</span></span>
<span class="line"><span>	\`\`\`java</span></span>
<span class="line"><span>	public Result&lt;PickGoodsProductApplyResponse&gt; plmApply(TrendFollowPlmProductApplyRequest request)</span></span>
<span class="line"><span>	\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 方法逻辑分析</span></span>
<span class="line"><span>该方法是一个简单的代理方法，主要职责：</span></span>
<span class="line"><span>1. 接收 \`TrendFollowPlmProductApplyRequest\` 请求参数</span></span>
<span class="line"><span>2. 通过 \`PickGoodsSelfProductConvertor.INSTANCE.toModel(request)\` 转换请求模型</span></span>
<span class="line"><span>3. 调用 \`pickGoodsSelfProductDomainService.plmApply()\` 执行业务逻辑</span></span>
<span class="line"><span>4. 将返回的 List 包装成 Result 对象返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 测试场景规划</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景1：正常流程 - 成功处理请求</span></span>
<span class="line"><span>- [x] **测试目标**: 验证正常请求的处理流程</span></span>
<span class="line"><span>- **测试数据**: 创建有效的 TrendFollowPlmProductApplyRequest 对象</span></span>
<span class="line"><span>- **Mock设置**: </span></span>
<span class="line"><span>  - pickGoodsSelfProductDomainService.plmApply() 返回包含数据的 List</span></span>
<span class="line"><span>- **预期结果**: </span></span>
<span class="line"><span>  - 返回 Result 对象，其中 data 为 List，total 为 List.size()</span></span>
<span class="line"><span>  - 验证转换器和领域服务的调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景2：空列表返回</span></span>
<span class="line"><span>- [x] **测试目标**: 验证领域服务返回空列表时的处理</span></span>
<span class="line"><span>- **测试数据**: 创建有效的 TrendFollowPlmProductApplyRequest 对象</span></span>
<span class="line"><span>- **Mock设置**: </span></span>
<span class="line"><span>  - pickGoodsSelfProductDomainService.plmApply() 返回空 List</span></span>
<span class="line"><span>- **预期结果**: </span></span>
<span class="line"><span>  - 返回 Result 对象，其中 data 为空 List，total 为 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景3：空参数输入</span></span>
<span class="line"><span>- [x] **测试目标**: 验证 null 参数的处理</span></span>
<span class="line"><span>- **测试数据**: request = null</span></span>
<span class="line"><span>- **Mock设置**: </span></span>
<span class="line"><span>  - 根据转换器和领域服务的行为设置相应的 Mock</span></span>
<span class="line"><span>- **预期结果**: </span></span>
<span class="line"><span>  - 如果转换器或领域服务抛出异常，则应该抛出相应异常</span></span>
<span class="line"><span>  - 如果能正常处理，则返回相应结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景4：多条数据返回</span></span>
<span class="line"><span>- [x] **测试目标**: 验证返回多条数据时的处理</span></span>
<span class="line"><span>- **测试数据**: 创建有效的 TrendFollowPlmProductApplyRequest 对象</span></span>
<span class="line"><span>- **Mock设置**: </span></span>
<span class="line"><span>  - pickGoodsSelfProductDomainService.plmApply() 返回包含多个元素的 List (例如3个)</span></span>
<span class="line"><span>- **预期结果**: </span></span>
<span class="line"><span>  - 返回 Result 对象，其中 data 包含3个元素，total 为 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景5：领域服务异常处理</span></span>
<span class="line"><span>- [x] **测试目标**: 验证领域服务抛出异常时的处理</span></span>
<span class="line"><span>- **测试数据**: 创建有效的 TrendFollowPlmProductApplyRequest 对象</span></span>
<span class="line"><span>- **Mock设置**: </span></span>
<span class="line"><span>  - pickGoodsSelfProductDomainService.plmApply() 抛出 RuntimeException</span></span>
<span class="line"><span>- **预期结果**: </span></span>
<span class="line"><span>  - 异常应该向上传播，不被捕获</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 依赖分析</span></span>
<span class="line"><span>- **PickGoodsSelfProductConvertor.INSTANCE**: 静态转换器实例</span></span>
<span class="line"><span>- **pickGoodsSelfProductDomainService**: 注入的领域服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 测试重要性</span></span>
<span class="line"><span>- 该方法覆盖率为 0%，是优先处理的目标</span></span>
<span class="line"><span>- 作为应用服务层的入口方法，需要确保其正确性</span></span>
<span class="line"><span>- 验证请求转换和结果包装的逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 实现注意事项</span></span>
<span class="line"><span>- 需要 Mock PickGoodsSelfProductDomainService</span></span>
<span class="line"><span>- 可能需要 Mock 静态方法 PickGoodsSelfProductConvertor.INSTANCE.toModel()</span></span>
<span class="line"><span>- 验证 Result 对象的构造是否正确</span></span></code></pre></div><h3 id="当前分支的增量覆盖率" tabindex="-1">当前分支的增量覆盖率 <a class="header-anchor" href="#当前分支的增量覆盖率" aria-label="Permalink to &quot;当前分支的增量覆盖率&quot;">​</a></h3><p>diff_cover_2.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env bash  </span></span>
<span class="line"><span>set -euo pipefail  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 配置参数 =====MODULES=\${MODULES:-&quot;soms-service-start&quot;}                     # 多个模块用逗号分隔，为空时自动检测  </span></span>
<span class="line"><span>THRESHOLD=\${THRESHOLD:-100}                # 覆盖率阈值  </span></span>
<span class="line"><span>OUTPUT_DIR=\${OUTPUT_DIR:-&quot;./reports&quot;} # 报告输出目录  </span></span>
<span class="line"><span>SKIP_TESTS=\${SKIP_TESTS:-0}               # 跳过测试执行: 1=跳过  </span></span>
<span class="line"><span>FORCE_ANALYSIS=\${FORCE_ANALYSIS:-0}       # 强制分析: 1=强制  </span></span>
<span class="line"><span>BASE_BRANCH=\${BASE_BRANCH:-&quot;&quot;}            # 基准分支  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 颜色定义 =====RED=&#39;\\033[0;31m&#39;  </span></span>
<span class="line"><span>GREEN=&#39;\\033[0;32m&#39;  </span></span>
<span class="line"><span>YELLOW=&#39;\\033[1;33m&#39;  </span></span>
<span class="line"><span>BLUE=&#39;\\033[0;34m&#39;  </span></span>
<span class="line"><span>NC=&#39;\\033[0m&#39; # No Color  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 日志函数 =====log_info() {  </span></span>
<span class="line"><span>    echo -e &quot;\${BLUE}ℹ️  $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_success() {  </span></span>
<span class="line"><span>    echo -e &quot;\${GREEN}✅ $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_warning() {  </span></span>
<span class="line"><span>    echo -e &quot;\${YELLOW}⚠️  $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_error() {  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}❌ $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 自动检测远程分支 =====detect_base_branch() {  </span></span>
<span class="line"><span>    log_info &quot;自动检测远程基准分支...&quot;  </span></span>
<span class="line"><span>    # 获取远程默认分支  </span></span>
<span class="line"><span>    local default_branch  </span></span>
<span class="line"><span>    default_branch=$(git remote show origin | grep -E &quot;HEAD 分支|HEAD branch&quot; | sed &#39;s/.*[：:] *//&#39; | xargs 2&gt;/dev/null || echo &quot;main&quot;)  </span></span>
<span class="line"><span>    # 尝试获取远程分支信息  </span></span>
<span class="line"><span>    if git fetch origin &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>        BASE_BRANCH=&quot;origin/\${default_branch}&quot;  </span></span>
<span class="line"><span>        log_success &quot;检测到远程基准分支: $BASE_BRANCH&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;无法获取远程分支信息，请检查网络连接&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 检查分支是否存在  </span></span>
<span class="line"><span>    if ! git show-ref --verify --quiet &quot;refs/remotes/$BASE_BRANCH&quot; 2&gt;/dev/null &amp;&amp; ! git show-ref --verify --quiet &quot;refs/heads/$BASE_BRANCH&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_error &quot;基准分支 $BASE_BRANCH 不存在&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查分支完整性 =====check_branch_integrity() {  </span></span>
<span class="line"><span>    log_info &quot;检查当前分支是否包含基准分支的所有提交...&quot;  </span></span>
<span class="line"><span>    # 获取当前分支名  </span></span>
<span class="line"><span>    local current_branch  </span></span>
<span class="line"><span>    current_branch=$(git rev-parse --abbrev-ref HEAD)  </span></span>
<span class="line"><span>    # 检查当前分支是否包含基准分支的所有提交  </span></span>
<span class="line"><span>    if git merge-base --is-ancestor &quot;$BASE_BRANCH&quot; &quot;$current_branch&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_success &quot;当前分支 $current_branch 包含基准分支 $BASE_BRANCH 的所有提交&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_warning &quot;当前分支 $current_branch 不包含基准分支 $BASE_BRANCH 的所有提交&quot;  </span></span>
<span class="line"><span>        log_warning &quot;这可能导致增量覆盖率分析不准确&quot;  </span></span>
<span class="line"><span>        # 显示缺失的提交数量  </span></span>
<span class="line"><span>        local missing_commits  </span></span>
<span class="line"><span>        missing_commits=$(git rev-list --count &quot;$BASE_BRANCH&quot; ^&quot;$current_branch&quot; 2&gt;/dev/null || echo &quot;未知&quot;)  </span></span>
<span class="line"><span>        log_warning &quot;基准分支领先当前分支 $missing_commits 个提交&quot;  </span></span>
<span class="line"><span>        # 询问是否继续  </span></span>
<span class="line"><span>        if [&quot;\${FORCE_ANALYSIS:-0}&quot; != &quot;1&quot;](); then  </span></span>
<span class="line"><span>            log_warning &quot;建议先合并基准分支或使用 --force 参数强制分析&quot;  </span></span>
<span class="line"><span>            log_warning &quot;设置环境变量 FORCE_ANALYSIS=1 可以跳过此检查&quot;  </span></span>
<span class="line"><span>            exit 1  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_warning &quot;已设置 FORCE_ANALYSIS=1，继续分析...&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 自动检测模块 =====detect_modules() {  </span></span>
<span class="line"><span>    if [-n &quot;$MODULES&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;使用指定的模块: $MODULES&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_info &quot;自动检测项目模块...&quot;  </span></span>
<span class="line"><span>    # 检测 Gradle 项目模块  </span></span>
<span class="line"><span>    if [-f &quot;settings.gradle&quot;](); then  </span></span>
<span class="line"><span>        local gradle_modules  </span></span>
<span class="line"><span>        gradle_modules=$(grep &quot;include &quot; settings.gradle | sed &quot;s/.*include [&#39;\\&quot;]//g&quot; | sed &quot;s/[&#39;\\&quot;].*//g&quot; | tr &#39;\\n&#39; &#39;,&#39; | sed &#39;s/,$//&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        if [-n &quot;$gradle_modules&quot;](); then  </span></span>
<span class="line"><span>            MODULES=&quot;$gradle_modules&quot;  </span></span>
<span class="line"><span>            log_success &quot;检测到 Gradle 模块: $MODULES&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi    # 检测 Maven 项目模块  </span></span>
<span class="line"><span>    if [-f &quot;pom.xml&quot;](); then  </span></span>
<span class="line"><span>        local maven_modules  </span></span>
<span class="line"><span>        maven_modules=$(grep -E &quot;&lt;module&gt;&quot; pom.xml | sed &quot;s/.*&lt;module&gt;//g&quot; | sed &quot;s/&lt;\\/module&gt;.*//g&quot; | tr &#39;\\n&#39; &#39;,&#39; | sed &#39;s/,$//&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        if [-n &quot;$maven_modules&quot;](); then  </span></span>
<span class="line"><span>            MODULES=&quot;$maven_modules&quot;  </span></span>
<span class="line"><span>            log_success &quot;检测到 Maven 模块: $MODULES&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi    # 默认模块检测（基于目录结构）  </span></span>
<span class="line"><span>    local detected_modules=&quot;&quot;  </span></span>
<span class="line"><span>    for dir in */; do  </span></span>
<span class="line"><span>        if [-d &quot;\${dir}src/main/java&quot;]() || [-d &quot;\${dir}src/main/kotlin&quot;](); then  </span></span>
<span class="line"><span>            local module_name=&quot;\${dir%/}&quot;  </span></span>
<span class="line"><span>            if [-z &quot;$detected_modules&quot;](); then  </span></span>
<span class="line"><span>                detected_modules=&quot;$module_name&quot;  </span></span>
<span class="line"><span>            else  </span></span>
<span class="line"><span>                detected_modules=&quot;$detected_modules,$module_name&quot;  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi    done    if [-n &quot;$detected_modules&quot;](); then  </span></span>
<span class="line"><span>        MODULES=&quot;$detected_modules&quot;  </span></span>
<span class="line"><span>        log_success &quot;检测到模块: $MODULES&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;未检测到模块，请手动指定 MODULES 环境变量&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查环境 =====check_environment() {  </span></span>
<span class="line"><span>    log_info &quot;检查环境依赖...&quot;  </span></span>
<span class="line"><span>    # 检查必要工具  </span></span>
<span class="line"><span>    for tool in git python3 pip3; do  </span></span>
<span class="line"><span>        if ! command -v &quot;$tool&quot; &amp;&gt; /dev/null; then  </span></span>
<span class="line"><span>            log_error &quot;$tool 未安装或不在PATH中&quot;  </span></span>
<span class="line"><span>            exit 1  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    done    # 检查并安装 diff-cover    if ! python3 -c &quot;import diff_cover&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_info &quot;安装 diff-cover...&quot;        pip3 install --break-system-packages diff_cover &gt;/dev/null 2&gt;&amp;1  </span></span>
<span class="line"><span>        log_success &quot;diff-cover 安装完成&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 设置 diff-cover 命令路径  </span></span>
<span class="line"><span>    DIFF_COVER_CMD=&quot;&quot;  </span></span>
<span class="line"><span>    if command -v diff-cover &amp;&gt; /dev/null; then  </span></span>
<span class="line"><span>        DIFF_COVER_CMD=&quot;diff-cover&quot;  </span></span>
<span class="line"><span>    elif [ -f &quot;/Users/80892291/Library/Python/3.9/bin/diff-cover&quot; ]; then  </span></span>
<span class="line"><span>        DIFF_COVER_CMD=&quot;/Users/80892291/Library/Python/3.9/bin/diff-cover&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        # 尝试查找用户本地安装的 diff-cover        local user_bin=&quot;$HOME/Library/Python/3.9/bin/diff-cover&quot;  </span></span>
<span class="line"><span>        if [ -f &quot;$user_bin&quot; ]; then  </span></span>
<span class="line"><span>            DIFF_COVER_CMD=&quot;$user_bin&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_error &quot;未找到 diff-cover 命令&quot;  </span></span>
<span class="line"><span>            exit 1  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi    log_info &quot;使用 diff-cover 命令: $DIFF_COVER_CMD&quot;  </span></span>
<span class="line"><span>    log_success &quot;环境检查通过&quot;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查覆盖率报告 =====check_coverage_report() {  </span></span>
<span class="line"><span>    local module=&quot;$1&quot;  </span></span>
<span class="line"><span>    if [$SKIP_TESTS -eq 1](); then  </span></span>
<span class="line"><span>        log_info &quot;[$module] 跳过测试执行，使用现有报告...&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_info &quot;[$module] 检查覆盖率报告...&quot;  </span></span>
<span class="line"><span>        log_warning &quot;请确保已运行测试并生成了 Jacoco 报告&quot;  </span></span>
<span class="line"><span>        log_warning &quot;例如: mvn test jacoco:report -pl $module&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    local coverage_xml=&quot;$module/target/jacoco/jacoco.xml&quot;  </span></span>
<span class="line"><span>    if [ ! -f &quot;$coverage_xml&quot; ]; then  </span></span>
<span class="line"><span>        log_error &quot;未找到 Jacoco 报告: $coverage_xml&quot;  </span></span>
<span class="line"><span>        log_error &quot;请先运行测试生成覆盖率报告&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_success &quot;找到 Jacoco 报告: $coverage_xml&quot;  </span></span>
<span class="line"><span>    echo &quot;$coverage_xml&quot;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 转换Jacoco XML为Cobertura XML =====  </span></span>
<span class="line"><span>convert_jacoco_to_cobertura() {  </span></span>
<span class="line"><span>    local jacoco_xml=&quot;$1&quot;  </span></span>
<span class="line"><span>    local cobertura_xml=&quot;$2&quot;  </span></span>
<span class="line"><span>    log_info &quot;转换 Jacoco XML 为 Cobertura XML 格式...&quot;  </span></span>
<span class="line"><span>    # 创建临时转换脚本  </span></span>
<span class="line"><span>    local script_file=&quot;/tmp/jacoco_to_cobertura_$$.py&quot;  </span></span>
<span class="line"><span>    cat &gt; &quot;$script_file&quot; &lt;&lt; &#39;EOF&#39;  </span></span>
<span class="line"><span>#!/usr/bin/env python3  </span></span>
<span class="line"><span>import xml.etree.ElementTree as ET  </span></span>
<span class="line"><span>import sys  </span></span>
<span class="line"><span>import os  </span></span>
<span class="line"><span>import time  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>def convert_jacoco_to_cobertura(jacoco_file, cobertura_file):  </span></span>
<span class="line"><span>    try:        tree = ET.parse(jacoco_file)        root = tree.getroot()                coverage = ET.Element(&#39;coverage&#39;)  </span></span>
<span class="line"><span>        coverage.set(&#39;line-rate&#39;, &#39;0.0&#39;)        coverage.set(&#39;branch-rate&#39;, &#39;0.0&#39;)        coverage.set(&#39;lines-covered&#39;, &#39;0&#39;)        coverage.set(&#39;lines-valid&#39;, &#39;0&#39;)        coverage.set(&#39;branches-covered&#39;, &#39;0&#39;)        coverage.set(&#39;branches-valid&#39;, &#39;0&#39;)        coverage.set(&#39;complexity&#39;, &#39;0.0&#39;)        coverage.set(&#39;version&#39;, &#39;1.9&#39;)        coverage.set(&#39;timestamp&#39;, str(int(time.time())))                sources = ET.SubElement(coverage, &#39;sources&#39;)  </span></span>
<span class="line"><span>        source = ET.SubElement(sources, &#39;source&#39;)        # 动态获取模块名和源码路径  </span></span>
<span class="line"><span>        jacoco_dir = os.path.dirname(jacoco_file)        # 从 jacoco.xml 路径推导模块路径: dps-application/target/jacoco/jacoco.xml -&gt; dps-application  </span></span>
<span class="line"><span>        module_name = os.path.basename(os.path.dirname(os.path.dirname(jacoco_dir)))        source.text = os.path.join(os.getcwd(), module_name, &#39;src&#39;, &#39;main&#39;, &#39;java&#39;)                packages = ET.SubElement(coverage, &#39;packages&#39;)  </span></span>
<span class="line"><span>        total_lines_covered = 0        total_lines_valid = 0                for package in root.findall(&#39;.//package&#39;):  </span></span>
<span class="line"><span>            pkg_name = package.get(&#39;name&#39;, &#39;&#39;)            pkg_lines_covered = 0            pkg_lines_valid = 0                        pkg_elem = ET.SubElement(packages, &#39;package&#39;)  </span></span>
<span class="line"><span>            pkg_elem.set(&#39;name&#39;, pkg_name)            pkg_elem.set(&#39;line-rate&#39;, &#39;0.0&#39;)            pkg_elem.set(&#39;branch-rate&#39;, &#39;0.0&#39;)            pkg_elem.set(&#39;complexity&#39;, &#39;0.0&#39;)                        classes = ET.SubElement(pkg_elem, &#39;classes&#39;)  </span></span>
<span class="line"><span>                        for sourcefile in package.findall(&#39;.//sourcefile&#39;):  </span></span>
<span class="line"><span>                class_name = sourcefile.get(&#39;name&#39;, &#39;&#39;).replace(&#39;.java&#39;, &#39;&#39;)                class_lines_covered = 0                class_lines_valid = 0                                class_elem = ET.SubElement(classes, &#39;class&#39;)  </span></span>
<span class="line"><span>                class_elem.set(&#39;name&#39;, class_name)                class_elem.set(&#39;filename&#39;, f&quot;{pkg_name.replace(&#39;.&#39;, &#39;/&#39;)}/{sourcefile.get(&#39;name&#39;, &#39;&#39;)}&quot;)                class_elem.set(&#39;line-rate&#39;, &#39;0.0&#39;)                class_elem.set(&#39;branch-rate&#39;, &#39;0.0&#39;)                class_elem.set(&#39;complexity&#39;, &#39;0.0&#39;)                                lines = ET.SubElement(class_elem, &#39;lines&#39;)  </span></span>
<span class="line"><span>                                for line in sourcefile.findall(&#39;.//line&#39;):  </span></span>
<span class="line"><span>                    line_num = line.get(&#39;nr&#39;, &#39;0&#39;)                    line_hits = int(line.get(&#39;ci&#39;, &#39;0&#39;))                                        line_elem = ET.SubElement(lines, &#39;line&#39;)  </span></span>
<span class="line"><span>                    line_elem.set(&#39;number&#39;, line_num)                    line_elem.set(&#39;hits&#39;, str(line_hits))                    line_elem.set(&#39;branch&#39;, &#39;false&#39;)                                        class_lines_valid += 1  </span></span>
<span class="line"><span>                    if line_hits &gt; 0:                        class_lines_covered += 1                                if class_lines_valid &gt; 0:  </span></span>
<span class="line"><span>                    class_rate = class_lines_covered / class_lines_valid                    class_elem.set(&#39;line-rate&#39;, f&quot;{class_rate:.4f}&quot;)                                pkg_lines_covered += class_lines_covered  </span></span>
<span class="line"><span>                pkg_lines_valid += class_lines_valid                        if pkg_lines_valid &gt; 0:  </span></span>
<span class="line"><span>                pkg_rate = pkg_lines_covered / pkg_lines_valid                pkg_elem.set(&#39;line-rate&#39;, f&quot;{pkg_rate:.4f}&quot;)                        total_lines_covered += pkg_lines_covered  </span></span>
<span class="line"><span>            total_lines_valid += pkg_lines_valid                if total_lines_valid &gt; 0:  </span></span>
<span class="line"><span>            total_rate = total_lines_covered / total_lines_valid            coverage.set(&#39;line-rate&#39;, f&quot;{total_rate:.4f}&quot;)            coverage.set(&#39;lines-covered&#39;, str(total_lines_covered))            coverage.set(&#39;lines-valid&#39;, str(total_lines_valid))                tree = ET.ElementTree(coverage)  </span></span>
<span class="line"><span>        ET.indent(tree, space=&quot;  &quot;, level=0)        tree.write(cobertura_file, encoding=&#39;utf-8&#39;, xml_declaration=True)        return True            except Exception as e:  </span></span>
<span class="line"><span>        print(f&quot;转换失败: {e}&quot;, file=sys.stderr)  </span></span>
<span class="line"><span>        return False  </span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:  </span></span>
<span class="line"><span>    if len(sys.argv) != 3:        print(&quot;用法: python3 jacoco_to_cobertura.py &lt;jacoco.xml&gt; &lt;cobertura.xml&gt;&quot;, file=sys.stderr)  </span></span>
<span class="line"><span>        sys.exit(1)        if convert_jacoco_to_cobertura(sys.argv[1], sys.argv[2]):  </span></span>
<span class="line"><span>        print(f&quot;转换成功: {sys.argv[2]}&quot;)  </span></span>
<span class="line"><span>        sys.exit(0)    else:        sys.exit(1)EOF  </span></span>
<span class="line"><span>    # 执行转换  </span></span>
<span class="line"><span>    if python3 &quot;$script_file&quot; &quot;$jacoco_xml&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>        log_success &quot;转换完成: $cobertura_xml&quot;  </span></span>
<span class="line"><span>        rm -f &quot;$script_file&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;转换失败&quot;  </span></span>
<span class="line"><span>        rm -f &quot;$script_file&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 使用diff-cover分析增量覆盖率 =====analyze_diff_coverage() {  </span></span>
<span class="line"><span>    local module=&quot;$1&quot;  </span></span>
<span class="line"><span>    local cobertura_xml=&quot;$2&quot;  </span></span>
<span class="line"><span>    log_info &quot;[$module] 使用 diff-cover 分析增量覆盖率...&quot;  </span></span>
<span class="line"><span>    # 创建报告目录  </span></span>
<span class="line"><span>    mkdir -p &quot;$OUTPUT_DIR&quot;  </span></span>
<span class="line"><span>    local html_report=&quot;$OUTPUT_DIR/\${module}-diff-cover-report.html&quot;  </span></span>
<span class="line"><span>    local json_report=&quot;$OUTPUT_DIR/\${module}-diff-cover-report.json&quot;  </span></span>
<span class="line"><span>    # 执行diff-cover，指定源码根目录以正确匹配路径  </span></span>
<span class="line"><span>    # 添加更多报告选项以增强覆盖情况展示  </span></span>
<span class="line"><span>    local diff_output  </span></span>
<span class="line"><span>    if diff_output=$(&quot;$DIFF_COVER_CMD&quot; &quot;$cobertura_xml&quot; \\  </span></span>
<span class="line"><span>        --compare-branch &quot;$BASE_BRANCH&quot; \\  </span></span>
<span class="line"><span>        --src-roots &quot;$module/src/main/java&quot; \\  </span></span>
<span class="line"><span>        --format &quot;html:$html_report&quot; \\  </span></span>
<span class="line"><span>        --format &quot;json:$json_report&quot; \\  </span></span>
<span class="line"><span>        --format &quot;markdown:$OUTPUT_DIR/\${module}-diff-cover-report.md&quot; \\  </span></span>
<span class="line"><span>        --show-uncovered \\  </span></span>
<span class="line"><span>        --fail-under 0 2&gt;&amp;1); then  </span></span>
<span class="line"><span>        log_success &quot;[$module] diff-cover 分析完成&quot;  </span></span>
<span class="line"><span>        log_info &quot;报告文件:&quot;  </span></span>
<span class="line"><span>        log_info &quot;  - HTML: $html_report&quot;  </span></span>
<span class="line"><span>        log_info &quot;  - JSON: $json_report&quot;  </span></span>
<span class="line"><span>        log_info &quot;  - Markdown: $OUTPUT_DIR/\${module}-diff-cover-report.md&quot;  </span></span>
<span class="line"><span>        # 显示详细的覆盖率信息  </span></span>
<span class="line"><span>        echo &quot;&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;📊 [$module] 增量覆盖率详情&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        # 提取并显示覆盖率摘要信息  </span></span>
<span class="line"><span>        local coverage_summary=$(echo &quot;$diff_output&quot; | sed -n &#39;/^Total:/,/^Coverage:/p&#39;)  </span></span>
<span class="line"><span>        if [-n &quot;$coverage_summary&quot;](); then  </span></span>
<span class="line"><span>            echo &quot;$coverage_summary&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 显示文件级别的覆盖率信息  </span></span>
<span class="line"><span>        local file_coverage=$(echo &quot;$diff_output&quot; | grep -E &quot;\\.java \\([0-9.]+%\\):&quot; | head -10)  </span></span>
<span class="line"><span>        if [-n &quot;$file_coverage&quot;](); then  </span></span>
<span class="line"><span>            echo &quot;&quot;  </span></span>
<span class="line"><span>            echo &quot;📁 文件覆盖率详情:&quot;  </span></span>
<span class="line"><span>            echo &quot;$file_coverage&quot; | while read -r line; do  </span></span>
<span class="line"><span>                echo &quot;  $line&quot;  </span></span>
<span class="line"><span>            done  </span></span>
<span class="line"><span>            # 如果文件超过10个，显示省略信息  </span></span>
<span class="line"><span>            local total_files=$(echo &quot;$diff_output&quot; | grep -c &quot;\\.java \\([0-9.]+%\\):&quot;)  </span></span>
<span class="line"><span>            if [$total_files -gt 10](); then  </span></span>
<span class="line"><span>                echo &quot;  ... 还有 $((total_files - 10)) 个文件&quot;  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;&quot;  </span></span>
<span class="line"><span>        # 从控制台输出中解析覆盖率  </span></span>
<span class="line"><span>        local coverage_percent=$(echo &quot;$diff_output&quot; | grep &quot;Coverage:&quot; | sed &#39;s/.*Coverage: \\([0-9.]*\\)%.*/\\1/&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        if [-z &quot;$coverage_percent&quot;](); then  </span></span>
<span class="line"><span>            # 如果没有找到覆盖率信息，检查是否有&quot;No lines with coverage information&quot;  </span></span>
<span class="line"><span>            if echo &quot;$diff_output&quot; | grep -q &quot;No lines with coverage information&quot;; then  </span></span>
<span class="line"><span>                log_info &quot;[$module] 没有检测到需要覆盖的代码行&quot;  </span></span>
<span class="line"><span>                return 0  </span></span>
<span class="line"><span>            else  </span></span>
<span class="line"><span>                log_warning &quot;[$module] 无法解析覆盖率信息&quot;  </span></span>
<span class="line"><span>                return 0  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi        if (( $(echo &quot;$coverage_percent &lt; $THRESHOLD&quot; | bc -l) )); then  </span></span>
<span class="line"><span>            log_warning &quot;[$module] 覆盖率 $coverage_percent% 低于阈值 $THRESHOLD%&quot;  </span></span>
<span class="line"><span>            return 0  # 阈值不达标只是警告，不返回失败  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_success &quot;[$module] 覆盖率 $coverage_percent% 达到阈值 $THRESHOLD%&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    else        log_error &quot;[$module] diff-cover 分析失败&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 主函数 =====main() {  </span></span>
<span class="line"><span>    log_info &quot;开始基于 diff-cover 的增量覆盖率分析...&quot;  </span></span>
<span class="line"><span>    check_environment  </span></span>
<span class="line"><span>    detect_modules  </span></span>
<span class="line"><span>    detect_base_branch  </span></span>
<span class="line"><span>    check_branch_integrity  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    local success_count=0  </span></span>
<span class="line"><span>    local total_count=0  </span></span>
<span class="line"><span>    IFS=&#39;,&#39; read -ra MODULE_LIST &lt;&lt;&lt; &quot;$MODULES&quot;  </span></span>
<span class="line"><span>    for module in &quot;\${MODULE_LIST[@]}&quot;; do  </span></span>
<span class="line"><span>        module=$(echo &quot;$module&quot; | xargs)  </span></span>
<span class="line"><span>        total_count=$((total_count + 1))  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        log_info &quot;处理模块: $module&quot;  </span></span>
<span class="line"><span>        # 检查覆盖率报告  </span></span>
<span class="line"><span>        local coverage_xml  </span></span>
<span class="line"><span>        if ! coverage_xml=$(check_coverage_report &quot;$module&quot;); then  </span></span>
<span class="line"><span>            log_error &quot;模块 $module 处理失败&quot;  </span></span>
<span class="line"><span>            continue  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 转换Jacoco XML为Cobertura XML  </span></span>
<span class="line"><span>        local cobertura_xml=&quot;$module/target/jacoco/cobertura.xml&quot;  </span></span>
<span class="line"><span>        # 确保目标目录存在  </span></span>
<span class="line"><span>        mkdir -p &quot;$(dirname &quot;$cobertura_xml&quot;)&quot;  </span></span>
<span class="line"><span>        if ! convert_jacoco_to_cobertura &quot;$coverage_xml&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>            log_error &quot;模块 $module XML转换失败&quot;  </span></span>
<span class="line"><span>            continue  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 使用diff-cover分析  </span></span>
<span class="line"><span>        if analyze_diff_coverage &quot;$module&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>            success_count=$((success_count + 1))  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_error &quot;模块 $module diff-cover分析失败&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    done    # 总结  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;========================================&quot;  </span></span>
<span class="line"><span>    echo &quot;📊 分析完成&quot;  </span></span>
<span class="line"><span>    echo &quot;========================================&quot;  </span></span>
<span class="line"><span>    echo &quot;成功处理模块: $success_count/$total_count&quot;  </span></span>
<span class="line"><span>    echo &quot;报告目录: $OUTPUT_DIR&quot;  </span></span>
<span class="line"><span>    if [ $success_count -eq $total_count ]; then  </span></span>
<span class="line"><span>        log_success &quot;所有模块分析完成&quot;  </span></span>
<span class="line"><span>        exit 0  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;部分模块分析失败&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 脚本入口 =====main &quot;$@&quot;</span></span></code></pre></div><h3 id="当前分支的增量覆盖率读取第二个版本" tabindex="-1">当前分支的增量覆盖率读取第二个版本 <a class="header-anchor" href="#当前分支的增量覆盖率读取第二个版本" aria-label="Permalink to &quot;当前分支的增量覆盖率读取第二个版本&quot;">​</a></h3><p>diff_cover_venv.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env bash  </span></span>
<span class="line"><span>set -euo pipefail  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 合并版本：虚拟环境 + diff-cover 分析脚本 =====# 特点：单文件，用完即抛，不修改工程代码  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 配置参数 =====MODULES=\${MODULES:-&quot;soms-service-start&quot;}                     # 多个模块用逗号分隔，为空时自动检测  </span></span>
<span class="line"><span>THRESHOLD=\${THRESHOLD:-100}                # 覆盖率阈值  </span></span>
<span class="line"><span>OUTPUT_DIR=\${OUTPUT_DIR:-&quot;./reports&quot;} # 报告输出目录  </span></span>
<span class="line"><span>SKIP_TESTS=\${SKIP_TESTS:-0}               # 跳过测试执行检查，使用现有报告: 1=跳过  </span></span>
<span class="line"><span>FORCE_ANALYSIS=\${FORCE_ANALYSIS:-0}       # 强制分析: 1=强制  </span></span>
<span class="line"><span>BASE_BRANCH=\${BASE_BRANCH:-&quot;&quot;}            # 基准分支  </span></span>
<span class="line"><span>SKIP_BRANCH_CHECK=\${SKIP_BRANCH_CHECK:-0} # 跳过远程分支比对: 1=跳过  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 虚拟环境相关配置  </span></span>
<span class="line"><span>VENV_DIR=\${VENV_DIR:-&quot;./temp_venv&quot;}           # 临时虚拟环境目录  </span></span>
<span class="line"><span>CLEANUP_VENV=\${CLEANUP_VENV:-1}               # 执行后是否清理虚拟环境: 1=清理  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 颜色定义 =====RED=&#39;\\033[0;31m&#39;  </span></span>
<span class="line"><span>GREEN=&#39;\\033[0;32m&#39;  </span></span>
<span class="line"><span>YELLOW=&#39;\\033[1;33m&#39;  </span></span>
<span class="line"><span>BLUE=&#39;\\033[0;34m&#39;  </span></span>
<span class="line"><span>NC=&#39;\\033[0m&#39; # No Color  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 日志函数 =====log_info() {  </span></span>
<span class="line"><span>    echo -e &quot;\${BLUE}ℹ️  $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_success() {  </span></span>
<span class="line"><span>    echo -e &quot;\${GREEN}✅ $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_warning() {  </span></span>
<span class="line"><span>    echo -e &quot;\${YELLOW}⚠️  $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>log_error() {  </span></span>
<span class="line"><span>    echo -e &quot;\${RED}❌ $1\${NC}&quot; &gt;&amp;2  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查环境依赖 =====check_environment() {  </span></span>
<span class="line"><span>    log_info &quot;检查环境依赖...&quot;  </span></span>
<span class="line"><span>    # 检查必要工具  </span></span>
<span class="line"><span>    for tool in git python3 bc; do  </span></span>
<span class="line"><span>        if ! command -v &quot;$tool&quot; &amp;&gt; /dev/null; then  </span></span>
<span class="line"><span>            log_error &quot;$tool 未安装或不在PATH中&quot;  </span></span>
<span class="line"><span>            log_info &quot;请安装 $tool 后重试&quot;  </span></span>
<span class="line"><span>            exit 1  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    done    log_success &quot;环境检查通过&quot;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 虚拟环境管理 =====create_temp_venv() {  </span></span>
<span class="line"><span>    if [-d &quot;$VENV_DIR&quot;](); then  </span></span>
<span class="line"><span>        if [&quot;$CLEANUP_VENV&quot; == &quot;1&quot;](); then  </span></span>
<span class="line"><span>            log_info &quot;发现已存在的虚拟环境，清理后重建: $VENV_DIR&quot;  </span></span>
<span class="line"><span>            rm -rf &quot;$VENV_DIR&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_info &quot;发现已存在的虚拟环境，复用现有环境: $VENV_DIR&quot;  </span></span>
<span class="line"><span>            # 检查现有环境是否可用  </span></span>
<span class="line"><span>            if [-f &quot;$VENV_DIR/bin/activate&quot;](); then  </span></span>
<span class="line"><span>                log_success &quot;复用现有虚拟环境&quot;  </span></span>
<span class="line"><span>                return 0  </span></span>
<span class="line"><span>            else  </span></span>
<span class="line"><span>                log_warning &quot;现有虚拟环境不完整，重建...&quot;  </span></span>
<span class="line"><span>                rm -rf &quot;$VENV_DIR&quot;  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi    fi    log_info &quot;创建临时虚拟环境: $VENV_DIR&quot;  </span></span>
<span class="line"><span>    # 创建虚拟环境  </span></span>
<span class="line"><span>    if python3 -m venv &quot;$VENV_DIR&quot; &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>        log_success &quot;虚拟环境创建成功&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;虚拟环境创建失败&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>setup_venv() {  </span></span>
<span class="line"><span>    log_info &quot;激活虚拟环境并安装依赖...&quot;  </span></span>
<span class="line"><span>    # 激活虚拟环境  </span></span>
<span class="line"><span>    source &quot;$VENV_DIR/bin/activate&quot;  </span></span>
<span class="line"><span>    log_success &quot;虚拟环境已激活&quot;  </span></span>
<span class="line"><span>    # 检查diff-cover是否已安装  </span></span>
<span class="line"><span>    if python -c &quot;import diff_cover&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_success &quot;diff-cover已安装，跳过安装步骤&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 升级pip  </span></span>
<span class="line"><span>    log_info &quot;升级pip...&quot;  </span></span>
<span class="line"><span>    pip install --upgrade pip &gt;/dev/null 2&gt;&amp;1  </span></span>
<span class="line"><span>    # 安装diff-cover  </span></span>
<span class="line"><span>    log_info &quot;安装diff-cover...&quot;  </span></span>
<span class="line"><span>    if pip install diff-cover &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>        log_success &quot;diff-cover安装完成&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;diff-cover安装失败&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 验证安装  </span></span>
<span class="line"><span>    if python -c &quot;import diff_cover&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_success &quot;依赖验证通过&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;依赖验证失败&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>cleanup_venv() {  </span></span>
<span class="line"><span>    if [&quot;$CLEANUP_VENV&quot; == &quot;1&quot; &amp;&amp; -d &quot;$VENV_DIR&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;清理临时虚拟环境: $VENV_DIR&quot;  </span></span>
<span class="line"><span>        rm -rf &quot;$VENV_DIR&quot;  </span></span>
<span class="line"><span>        log_success &quot;临时虚拟环境已清理&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 验证分支是否存在 =====validate_branch() {  </span></span>
<span class="line"><span>    local branch=&quot;$1&quot;  </span></span>
<span class="line"><span>    local branch_type=&quot;$2&quot;  </span></span>
<span class="line"><span>    if git show-ref --verify --quiet &quot;refs/remotes/$branch&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_success &quot;$branch_type 验证通过: $branch&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;$branch_type $branch 不存在&quot;  </span></span>
<span class="line"><span>        log_info &quot;可用的分支:&quot;  </span></span>
<span class="line"><span>        git branch -a 2&gt;/dev/null | head -10 | while read -r line; do  </span></span>
<span class="line"><span>            log_info &quot;  $line&quot;  </span></span>
<span class="line"><span>        done  </span></span>
<span class="line"><span>        log_info &quot;&quot;  </span></span>
<span class="line"><span>        log_info &quot;解决方案：&quot;  </span></span>
<span class="line"><span>        log_info &quot;  1. 手动指定远程分支: BASE_BRANCH=origin/your-branch ./diff_cover_venv.sh&quot;  </span></span>
<span class="line"><span>        log_info &quot;  2. 拉取远程分支: git fetch origin&quot;  </span></span>
<span class="line"><span>        log_info &quot;  3. 检查远程分支是否存在: git branch -r&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 自动检测远程分支 =====detect_base_branch() {  </span></span>
<span class="line"><span>    # 如果用户已经指定了基准分支，直接使用  </span></span>
<span class="line"><span>    if [-n &quot;$BASE_BRANCH&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;使用用户指定的基准分支: $BASE_BRANCH&quot;  </span></span>
<span class="line"><span>        validate_branch &quot;$BASE_BRANCH&quot; &quot;基准分支&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 如果设置了跳过远程分支比对，使用当前分支  </span></span>
<span class="line"><span>    if [&quot;$SKIP_BRANCH_CHECK&quot; == &quot;1&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;跳过远程分支比对，使用当前分支作为基准&quot;  </span></span>
<span class="line"><span>        BASE_BRANCH=$(git rev-parse --abbrev-ref HEAD 2&gt;/dev/null || echo &quot;main&quot;)  </span></span>
<span class="line"><span>        log_success &quot;使用当前分支作为基准: $BASE_BRANCH&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_info &quot;自动检测远程基准分支...&quot;  </span></span>
<span class="line"><span>    # 检查是否有远程仓库配置  </span></span>
<span class="line"><span>    if ! git remote get-url origin &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>        log_error &quot;未配置远程仓库 origin，请检查 Git 配置&quot;  </span></span>
<span class="line"><span>        log_info &quot;解决方案：&quot;  </span></span>
<span class="line"><span>        log_info &quot;  1. 检查是否在 Git 仓库中: git status&quot;  </span></span>
<span class="line"><span>        log_info &quot;  2. 添加远程仓库: git remote add origin &lt;仓库URL&gt;&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 只从远程获取默认分支，不允许降级到本地分支  </span></span>
<span class="line"><span>    local default_branch=&quot;&quot;  </span></span>
<span class="line"><span>    if ! git fetch origin &gt;/dev/null 2&gt;&amp;1; then  </span></span>
<span class="line"><span>        log_error &quot;无法连接到远程仓库 origin&quot;        log_info &quot;解决方案：&quot;  </span></span>
<span class="line"><span>        log_info &quot;  1. 检查网络连接&quot;  </span></span>
<span class="line"><span>        log_info &quot;  2. 检查远程仓库配置: git remote -v&quot;  </span></span>
<span class="line"><span>        log_info &quot;  3. 手动指定远程分支: BASE_BRANCH=origin/main ./diff_cover_venv.sh&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 尝试多种方式获取远程默认分支  </span></span>
<span class="line"><span>    default_branch=$(git remote show origin | sed -n &#39;/HEAD branch/s/.*: //p&#39; 2&gt;/dev/null)  </span></span>
<span class="line"><span>    # 如果上面失败，尝试从远程分支列表获取  </span></span>
<span class="line"><span>    if [-z &quot;$default_branch&quot;](); then  </span></span>
<span class="line"><span>        default_branch=$(git ls-remote --symref origin HEAD | sed -n &#39;s/.*refs\\/heads\\/\\([^[:space:]]*\\).*/\\1/p&#39; 2&gt;/dev/null)  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 如果还是失败，尝试常见的默认分支名  </span></span>
<span class="line"><span>    if [-z &quot;$default_branch&quot;](); then  </span></span>
<span class="line"><span>        for branch in main master develop; do  </span></span>
<span class="line"><span>            if git ls-remote --heads origin &quot;$branch&quot; | grep -q &quot;$branch&quot;; then  </span></span>
<span class="line"><span>                default_branch=&quot;$branch&quot;  </span></span>
<span class="line"><span>                log_info &quot;通过远程分支检测到默认分支: $branch&quot;  </span></span>
<span class="line"><span>                break  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        done    fi    # 如果仍然找不到远程分支，报错  </span></span>
<span class="line"><span>    if [-z &quot;$default_branch&quot;](); then  </span></span>
<span class="line"><span>        log_error &quot;无法检测到远程默认分支&quot;  </span></span>
<span class="line"><span>        log_info &quot;可用的远程分支:&quot;  </span></span>
<span class="line"><span>        git ls-remote --heads origin 2&gt;/dev/null | sed &#39;s/.*refs\\/heads\\///&#39; | head -10 | while read -r branch; do  </span></span>
<span class="line"><span>            log_info &quot;  origin/$branch&quot;  </span></span>
<span class="line"><span>        done  </span></span>
<span class="line"><span>        log_info &quot;&quot;  </span></span>
<span class="line"><span>        log_info &quot;解决方案：&quot;  </span></span>
<span class="line"><span>        log_info &quot;  1. 手动指定远程分支: BASE_BRANCH=origin/main ./diff_cover_venv.sh&quot;  </span></span>
<span class="line"><span>        log_info &quot;  2. 检查远程仓库是否有默认分支&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 设置基准分支 - 只使用远程分支  </span></span>
<span class="line"><span>    if [&quot;$default_branch&quot; == *&quot;origin/&quot;*](); then  </span></span>
<span class="line"><span>        BASE_BRANCH=&quot;$default_branch&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        # 只使用远程分支，不允许降级到本地分支  </span></span>
<span class="line"><span>        BASE_BRANCH=&quot;origin/$default_branch&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_success &quot;检测到基准分支: $BASE_BRANCH&quot;  </span></span>
<span class="line"><span>    # 最终验证远程分支是否存在  </span></span>
<span class="line"><span>    validate_branch &quot;$BASE_BRANCH&quot; &quot;基准分支&quot;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查分支完整性 =====check_branch_integrity() {  </span></span>
<span class="line"><span>    # 如果设置了跳过远程分支比对，也跳过分支完整性检查  </span></span>
<span class="line"><span>    if [&quot;$SKIP_BRANCH_CHECK&quot; == &quot;1&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;跳过分支完整性检查&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_info &quot;检查当前分支是否包含基准分支的所有提交...&quot;  </span></span>
<span class="line"><span>    # 获取当前分支名  </span></span>
<span class="line"><span>    local current_branch  </span></span>
<span class="line"><span>    current_branch=$(git rev-parse --abbrev-ref HEAD)  </span></span>
<span class="line"><span>    # 检查当前分支是否包含基准分支的所有提交  </span></span>
<span class="line"><span>    if git merge-base --is-ancestor &quot;$BASE_BRANCH&quot; &quot;$current_branch&quot; 2&gt;/dev/null; then  </span></span>
<span class="line"><span>        log_success &quot;当前分支 $current_branch 包含基准分支 $BASE_BRANCH 的所有提交&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_warning &quot;当前分支 $current_branch 不包含基准分支 $BASE_BRANCH 的所有提交&quot;  </span></span>
<span class="line"><span>        log_warning &quot;这可能导致增量覆盖率分析不准确&quot;  </span></span>
<span class="line"><span>        # 显示缺失的提交数量  </span></span>
<span class="line"><span>        local missing_commits  </span></span>
<span class="line"><span>        missing_commits=$(git rev-list --count &quot;$BASE_BRANCH&quot; ^&quot;$current_branch&quot; 2&gt;/dev/null || echo &quot;未知&quot;)  </span></span>
<span class="line"><span>        log_warning &quot;基准分支领先当前分支 $missing_commits 个提交&quot;  </span></span>
<span class="line"><span>        # 询问是否继续  </span></span>
<span class="line"><span>        if [&quot;\${FORCE_ANALYSIS:-0}&quot; != &quot;1&quot;](); then  </span></span>
<span class="line"><span>            log_warning &quot;建议先合并基准分支或使用 --force 参数强制分析&quot;  </span></span>
<span class="line"><span>            log_warning &quot;设置环境变量 FORCE_ANALYSIS=1 可以跳过此检查&quot;  </span></span>
<span class="line"><span>            exit 1  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_warning &quot;已设置 FORCE_ANALYSIS=1，继续分析...&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 自动检测模块 =====detect_modules() {  </span></span>
<span class="line"><span>    if [-n &quot;$MODULES&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;使用指定的模块: $MODULES&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_info &quot;自动检测项目模块...&quot;  </span></span>
<span class="line"><span>    # 检测 Gradle 项目模块  </span></span>
<span class="line"><span>    if [-f &quot;settings.gradle&quot;](); then  </span></span>
<span class="line"><span>        local gradle_modules  </span></span>
<span class="line"><span>        gradle_modules=$(grep &quot;include &quot; settings.gradle | sed &quot;s/.*include [&#39;\\&quot;]//g&quot; | sed &quot;s/[&#39;\\&quot;].*//g&quot; | tr &#39;\\n&#39; &#39;,&#39; | sed &#39;s/,$//&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        if [-n &quot;$gradle_modules&quot;](); then  </span></span>
<span class="line"><span>            MODULES=&quot;$gradle_modules&quot;  </span></span>
<span class="line"><span>            log_success &quot;检测到 Gradle 模块: $MODULES&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi    # 检测 Maven 项目模块  </span></span>
<span class="line"><span>    if [-f &quot;pom.xml&quot;](); then  </span></span>
<span class="line"><span>        local maven_modules  </span></span>
<span class="line"><span>        maven_modules=$(grep -E &quot;&lt;module&gt;&quot; pom.xml | sed &quot;s/.*&lt;module&gt;//g&quot; | sed &quot;s/&lt;\\/module&gt;.*//g&quot; | tr &#39;\\n&#39; &#39;,&#39; | sed &#39;s/,$//&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        if [-n &quot;$maven_modules&quot;](); then  </span></span>
<span class="line"><span>            MODULES=&quot;$maven_modules&quot;  </span></span>
<span class="line"><span>            log_success &quot;检测到 Maven 模块: $MODULES&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    fi    # 默认模块检测（基于目录结构）  </span></span>
<span class="line"><span>    local detected_modules=&quot;&quot;  </span></span>
<span class="line"><span>    for dir in */; do  </span></span>
<span class="line"><span>        if [-d &quot;\${dir}src/main/java&quot;]() || [-d &quot;\${dir}src/main/kotlin&quot;](); then  </span></span>
<span class="line"><span>            local module_name=&quot;\${dir%/}&quot;  </span></span>
<span class="line"><span>            if [-z &quot;$detected_modules&quot;](); then  </span></span>
<span class="line"><span>                detected_modules=&quot;$module_name&quot;  </span></span>
<span class="line"><span>            else  </span></span>
<span class="line"><span>                detected_modules=&quot;$detected_modules,$module_name&quot;  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi    done    if [-n &quot;$detected_modules&quot;](); then  </span></span>
<span class="line"><span>        MODULES=&quot;$detected_modules&quot;  </span></span>
<span class="line"><span>        log_success &quot;检测到模块: $MODULES&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;未检测到模块，请手动指定 MODULES 环境变量&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 检查覆盖率报告 =====check_coverage_report() {  </span></span>
<span class="line"><span>    local module=&quot;$1&quot;  </span></span>
<span class="line"><span>    if [$SKIP_TESTS -eq 1](); then  </span></span>
<span class="line"><span>        log_info &quot;[$module] 跳过测试执行检查，直接使用现有报告...&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_info &quot;[$module] 检查覆盖率报告...&quot;  </span></span>
<span class="line"><span>        log_warning &quot;请确保已运行测试并生成了 Jacoco 报告&quot;  </span></span>
<span class="line"><span>        log_warning &quot;例如: mvn test jacoco:report -pl $module&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    local coverage_xml=&quot;$module/target/jacoco/jacoco.xml&quot;  </span></span>
<span class="line"><span>    if [ ! -f &quot;$coverage_xml&quot; ]; then  </span></span>
<span class="line"><span>        log_error &quot;未找到 Jacoco 报告: $coverage_xml&quot;  </span></span>
<span class="line"><span>        log_error &quot;请先运行测试生成覆盖率报告&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    log_success &quot;找到 Jacoco 报告: $coverage_xml&quot;  </span></span>
<span class="line"><span>    echo &quot;$coverage_xml&quot;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 转换Jacoco XML为Cobertura XML =====  </span></span>
<span class="line"><span>convert_jacoco_to_cobertura() {  </span></span>
<span class="line"><span>    local jacoco_xml=&quot;$1&quot;  </span></span>
<span class="line"><span>    local cobertura_xml=&quot;$2&quot;  </span></span>
<span class="line"><span>    log_info &quot;转换 Jacoco XML 为 Cobertura XML 格式...&quot;  </span></span>
<span class="line"><span>    # 创建临时转换脚本  </span></span>
<span class="line"><span>    local script_file=&quot;/tmp/jacoco_to_cobertura_$$.py&quot;  </span></span>
<span class="line"><span>    cat &gt; &quot;$script_file&quot; &lt;&lt; &#39;EOF&#39;  </span></span>
<span class="line"><span>#!/usr/bin/env python3  </span></span>
<span class="line"><span>import xml.etree.ElementTree as ET  </span></span>
<span class="line"><span>import sys  </span></span>
<span class="line"><span>import os  </span></span>
<span class="line"><span>import time  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>def convert_jacoco_to_cobertura(jacoco_file, cobertura_file):  </span></span>
<span class="line"><span>    try:        tree = ET.parse(jacoco_file)        root = tree.getroot()                coverage = ET.Element(&#39;coverage&#39;)  </span></span>
<span class="line"><span>        coverage.set(&#39;line-rate&#39;, &#39;0.0&#39;)        coverage.set(&#39;branch-rate&#39;, &#39;0.0&#39;)        coverage.set(&#39;lines-covered&#39;, &#39;0&#39;)        coverage.set(&#39;lines-valid&#39;, &#39;0&#39;)        coverage.set(&#39;branches-covered&#39;, &#39;0&#39;)        coverage.set(&#39;branches-valid&#39;, &#39;0&#39;)        coverage.set(&#39;complexity&#39;, &#39;0.0&#39;)        coverage.set(&#39;version&#39;, &#39;1.9&#39;)        coverage.set(&#39;timestamp&#39;, str(int(time.time())))                sources = ET.SubElement(coverage, &#39;sources&#39;)  </span></span>
<span class="line"><span>        source = ET.SubElement(sources, &#39;source&#39;)        # 动态获取模块名和源码路径  </span></span>
<span class="line"><span>        jacoco_dir = os.path.dirname(jacoco_file)        # 从 jacoco.xml 路径推导模块路径: hinton-application/target/jacoco/jacoco.xml -&gt; hinton-application  </span></span>
<span class="line"><span>        module_name = os.path.basename(os.path.dirname(os.path.dirname(jacoco_dir)))        source.text = os.path.join(os.getcwd(), module_name, &#39;src&#39;, &#39;main&#39;, &#39;java&#39;)                packages = ET.SubElement(coverage, &#39;packages&#39;)  </span></span>
<span class="line"><span>        total_lines_covered = 0        total_lines_valid = 0                for package in root.findall(&#39;.//package&#39;):  </span></span>
<span class="line"><span>            pkg_name = package.get(&#39;name&#39;, &#39;&#39;)            pkg_lines_covered = 0            pkg_lines_valid = 0                        pkg_elem = ET.SubElement(packages, &#39;package&#39;)  </span></span>
<span class="line"><span>            pkg_elem.set(&#39;name&#39;, pkg_name)            pkg_elem.set(&#39;line-rate&#39;, &#39;0.0&#39;)            pkg_elem.set(&#39;branch-rate&#39;, &#39;0.0&#39;)            pkg_elem.set(&#39;complexity&#39;, &#39;0.0&#39;)                        classes = ET.SubElement(pkg_elem, &#39;classes&#39;)  </span></span>
<span class="line"><span>                        for sourcefile in package.findall(&#39;.//sourcefile&#39;):  </span></span>
<span class="line"><span>                class_name = sourcefile.get(&#39;name&#39;, &#39;&#39;).replace(&#39;.java&#39;, &#39;&#39;)                class_lines_covered = 0                class_lines_valid = 0                                class_elem = ET.SubElement(classes, &#39;class&#39;)  </span></span>
<span class="line"><span>                class_elem.set(&#39;name&#39;, class_name)                class_elem.set(&#39;filename&#39;, f&quot;{pkg_name.replace(&#39;.&#39;, &#39;/&#39;)}/{sourcefile.get(&#39;name&#39;, &#39;&#39;)}&quot;)                class_elem.set(&#39;line-rate&#39;, &#39;0.0&#39;)                class_elem.set(&#39;branch-rate&#39;, &#39;0.0&#39;)                class_elem.set(&#39;complexity&#39;, &#39;0.0&#39;)                                lines = ET.SubElement(class_elem, &#39;lines&#39;)  </span></span>
<span class="line"><span>                                for line in sourcefile.findall(&#39;.//line&#39;):  </span></span>
<span class="line"><span>                    line_num = line.get(&#39;nr&#39;, &#39;0&#39;)                    line_hits = int(line.get(&#39;ci&#39;, &#39;0&#39;))                                        line_elem = ET.SubElement(lines, &#39;line&#39;)  </span></span>
<span class="line"><span>                    line_elem.set(&#39;number&#39;, line_num)                    line_elem.set(&#39;hits&#39;, str(line_hits))                    line_elem.set(&#39;branch&#39;, &#39;false&#39;)                                        class_lines_valid += 1  </span></span>
<span class="line"><span>                    if line_hits &gt; 0:                        class_lines_covered += 1                                if class_lines_valid &gt; 0:  </span></span>
<span class="line"><span>                    class_rate = class_lines_covered / class_lines_valid                    class_elem.set(&#39;line-rate&#39;, f&quot;{class_rate:.4f}&quot;)                                pkg_lines_covered += class_lines_covered  </span></span>
<span class="line"><span>                pkg_lines_valid += class_lines_valid                        if pkg_lines_valid &gt; 0:  </span></span>
<span class="line"><span>                pkg_rate = pkg_lines_covered / pkg_lines_valid                pkg_elem.set(&#39;line-rate&#39;, f&quot;{pkg_rate:.4f}&quot;)                        total_lines_covered += pkg_lines_covered  </span></span>
<span class="line"><span>            total_lines_valid += pkg_lines_valid                if total_lines_valid &gt; 0:  </span></span>
<span class="line"><span>            total_rate = total_lines_covered / total_lines_valid            coverage.set(&#39;line-rate&#39;, f&quot;{total_rate:.4f}&quot;)            coverage.set(&#39;lines-covered&#39;, str(total_lines_covered))            coverage.set(&#39;lines-valid&#39;, str(total_lines_valid))                tree = ET.ElementTree(coverage)  </span></span>
<span class="line"><span>        ET.indent(tree, space=&quot;  &quot;, level=0)        tree.write(cobertura_file, encoding=&#39;utf-8&#39;, xml_declaration=True)        return True            except Exception as e:  </span></span>
<span class="line"><span>        print(f&quot;转换失败: {e}&quot;, file=sys.stderr)  </span></span>
<span class="line"><span>        return False  </span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:  </span></span>
<span class="line"><span>    if len(sys.argv) != 3:        print(&quot;用法: python3 jacoco_to_cobertura.py &lt;jacoco.xml&gt; &lt;cobertura.xml&gt;&quot;, file=sys.stderr)  </span></span>
<span class="line"><span>        sys.exit(1)        if convert_jacoco_to_cobertura(sys.argv[1], sys.argv[2]):  </span></span>
<span class="line"><span>        print(f&quot;转换成功: {sys.argv[2]}&quot;)  </span></span>
<span class="line"><span>        sys.exit(0)    else:        sys.exit(1)EOF  </span></span>
<span class="line"><span>    # 执行转换  </span></span>
<span class="line"><span>    if python &quot;$script_file&quot; &quot;$jacoco_xml&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>        log_success &quot;转换完成: $cobertura_xml&quot;  </span></span>
<span class="line"><span>        rm -f &quot;$script_file&quot;  </span></span>
<span class="line"><span>        return 0  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;转换失败&quot;  </span></span>
<span class="line"><span>        rm -f &quot;$script_file&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 使用diff-cover分析增量覆盖率 =====analyze_diff_coverage() {  </span></span>
<span class="line"><span>    local module=&quot;$1&quot;  </span></span>
<span class="line"><span>    local cobertura_xml=&quot;$2&quot;  </span></span>
<span class="line"><span>    log_info &quot;[$module] 使用 diff-cover 分析增量覆盖率...&quot;  </span></span>
<span class="line"><span>    # 创建报告目录（如果不存在）  </span></span>
<span class="line"><span>    [! -d &quot;$OUTPUT_DIR&quot;]() &amp;&amp; mkdir -p &quot;$OUTPUT_DIR&quot;  </span></span>
<span class="line"><span>    local html_report=&quot;$OUTPUT_DIR/\${module}-diff-cover-report.html&quot;  </span></span>
<span class="line"><span>    local json_report=&quot;$OUTPUT_DIR/\${module}-diff-cover-report.json&quot;  </span></span>
<span class="line"><span>    # 执行diff-cover，指定源码根目录以正确匹配路径  </span></span>
<span class="line"><span>    # 添加更多报告选项以增强覆盖情况展示  </span></span>
<span class="line"><span>    local diff_output  </span></span>
<span class="line"><span>    local diff_cmd=&quot;diff-cover \\&quot;$cobertura_xml\\&quot;&quot;  </span></span>
<span class="line"><span>    # 如果设置了跳过远程分支比对，不进行分支比对  </span></span>
<span class="line"><span>    if [&quot;$SKIP_BRANCH_CHECK&quot; == &quot;1&quot;](); then  </span></span>
<span class="line"><span>        log_info &quot;[$module] 跳过分支比对，进行整体覆盖率分析&quot;  </span></span>
<span class="line"><span>        diff_cmd=&quot;$diff_cmd --src-roots \\&quot;$module/src/main/java\\&quot;&quot;  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        diff_cmd=&quot;$diff_cmd --compare-branch \\&quot;$BASE_BRANCH\\&quot; --src-roots \\&quot;$module/src/main/java\\&quot;&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    # 添加调试信息  </span></span>
<span class="line"><span>    log_info &quot;[$module] 执行命令: $diff_cmd&quot;  </span></span>
<span class="line"><span>    log_info &quot;[$module] HTML报告路径: $html_report&quot;  </span></span>
<span class="line"><span>    log_info &quot;[$module] JSON报告路径: $json_report&quot;  </span></span>
<span class="line"><span>    if diff_output=$(eval &quot;$diff_cmd \\        --html-report \\&quot;$html_report\\&quot; \\  </span></span>
<span class="line"><span>        --json-report \\&quot;$json_report\\&quot; \\  </span></span>
<span class="line"><span>        --markdown-report \\&quot;$OUTPUT_DIR/\${module}-diff-cover-report.md\\&quot; \\  </span></span>
<span class="line"><span>        --show-uncovered \\        --fail-under 0&quot; 2&gt;&amp;1); then  </span></span>
<span class="line"><span>        log_success &quot;[$module] diff-cover 分析完成&quot;  </span></span>
<span class="line"><span>        log_info &quot;报告文件:&quot;  </span></span>
<span class="line"><span>        # 检查报告文件是否真的被创建  </span></span>
<span class="line"><span>        if [-f &quot;$html_report&quot;](); then  </span></span>
<span class="line"><span>            log_info &quot;  - HTML: $html_report ✅&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_warning &quot;  - HTML: $html_report ❌ (文件未创建)&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        if [-f &quot;$json_report&quot;](); then  </span></span>
<span class="line"><span>            log_info &quot;  - JSON: $json_report ✅&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_warning &quot;  - JSON: $json_report ❌ (文件未创建)&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        if [-f &quot;$OUTPUT_DIR/\${module}-diff-cover-report.md&quot;](); then  </span></span>
<span class="line"><span>            log_info &quot;  - Markdown: $OUTPUT_DIR/\${module}-diff-cover-report.md ✅&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_warning &quot;  - Markdown: $OUTPUT_DIR/\${module}-diff-cover-report.md ❌ (文件未创建)&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 显示详细的覆盖率信息  </span></span>
<span class="line"><span>        echo &quot;&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;📊 [$module] 增量覆盖率详情&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        # 提取并显示覆盖率摘要信息  </span></span>
<span class="line"><span>        local coverage_summary=$(echo &quot;$diff_output&quot; | sed -n &#39;/^Total:/,/^Coverage:/p&#39;)  </span></span>
<span class="line"><span>        if [-n &quot;$coverage_summary&quot;](); then  </span></span>
<span class="line"><span>            echo &quot;$coverage_summary&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 显示文件级别的覆盖率信息  </span></span>
<span class="line"><span>        local file_coverage=$(echo &quot;$diff_output&quot; | grep -E &quot;\\.java \\([0-9.]+%\\):&quot; | head -10)  </span></span>
<span class="line"><span>        if [-n &quot;$file_coverage&quot;](); then  </span></span>
<span class="line"><span>            echo &quot;&quot;  </span></span>
<span class="line"><span>            echo &quot;📁 文件覆盖率详情:&quot;  </span></span>
<span class="line"><span>            echo &quot;$file_coverage&quot; | while read -r line; do  </span></span>
<span class="line"><span>                echo &quot;  $line&quot;  </span></span>
<span class="line"><span>            done  </span></span>
<span class="line"><span>            # 如果文件超过10个，显示省略信息  </span></span>
<span class="line"><span>            local total_files=$(echo &quot;$diff_output&quot; | grep -c &quot;\\.java \\([0-9.]+%\\):&quot;)  </span></span>
<span class="line"><span>            if [$total_files -gt 10](); then  </span></span>
<span class="line"><span>                echo &quot;  ... 还有 $((total_files - 10)) 个文件&quot;  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;&quot;  </span></span>
<span class="line"><span>        # 从控制台输出中解析覆盖率  </span></span>
<span class="line"><span>        local coverage_percent=$(echo &quot;$diff_output&quot; | grep &quot;Coverage:&quot; | sed &#39;s/.*Coverage: \\([0-9.]*\\)%.*/\\1/&#39;)  </span></span>
<span class="line"><span>        local total_lines=$(echo &quot;$diff_output&quot; | grep &quot;Total:&quot; | sed &#39;s/.*Total: *\\([0-9]*\\) lines.*/\\1/&#39;)  </span></span>
<span class="line"><span>        local missing_lines=$(echo &quot;$diff_output&quot; | grep &quot;Missing:&quot; | sed &#39;s/.*Missing: *\\([0-9]*\\) lines.*/\\1/&#39;)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        # 调试信息（可选，用于排查问题）  </span></span>
<span class="line"><span>        # log_info &quot;[$module] 调试 - 原始输出片段:&quot;  </span></span>
<span class="line"><span>        # echo &quot;$diff_output&quot; | grep -E &quot;(Total:|Missing:|Coverage:)&quot; | head -3 | while read -r line; do        #     log_info &quot;[$module] 调试 - $line&quot;        # done        if [-z &quot;$coverage_percent&quot;](); then  </span></span>
<span class="line"><span>            # 如果没有找到覆盖率信息，检查是否有&quot;No lines with coverage information&quot;  </span></span>
<span class="line"><span>            if echo &quot;$diff_output&quot; | grep -q &quot;No lines with coverage information&quot;; then  </span></span>
<span class="line"><span>                log_info &quot;[$module] 没有检测到需要覆盖的代码行&quot;  </span></span>
<span class="line"><span>                COVERAGE_INFO=&quot;0,0,0&quot;  # 设置 coverage_percent,total_lines,missing_lines                return 0  </span></span>
<span class="line"><span>            else  </span></span>
<span class="line"><span>                log_warning &quot;[$module] 无法解析覆盖率信息&quot;  </span></span>
<span class="line"><span>                COVERAGE_INFO=&quot;0,0,0&quot;  # 设置 coverage_percent,total_lines,missing_lines                return 0  </span></span>
<span class="line"><span>            fi  </span></span>
<span class="line"><span>        fi        # 将覆盖率信息写入全局变量供主函数使用  </span></span>
<span class="line"><span>        COVERAGE_INFO=&quot;\${coverage_percent},\${total_lines:-0},\${missing_lines:-0}&quot;  </span></span>
<span class="line"><span>        if (( $(echo &quot;$coverage_percent &lt; $THRESHOLD&quot; | bc -l) )); then  </span></span>
<span class="line"><span>            log_warning &quot;[$module] 覆盖率 $coverage_percent% 低于阈值 $THRESHOLD%&quot;  </span></span>
<span class="line"><span>            return 0  # 阈值不达标只是警告，不返回失败  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_success &quot;[$module] 覆盖率 $coverage_percent% 达到阈值 $THRESHOLD%&quot;  </span></span>
<span class="line"><span>            return 0  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    else        log_error &quot;[$module] diff-cover 分析失败&quot;  </span></span>
<span class="line"><span>        log_error &quot;命令输出: $diff_output&quot;  </span></span>
<span class="line"><span>        return 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 显示使用帮助 =====show_help() {  </span></span>
<span class="line"><span>    cat &lt;&lt; EOF  </span></span>
<span class="line"><span>合并版本：虚拟环境 + diff-cover 分析脚本  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>用法:  </span></span>
<span class="line"><span>    $0 [选项] [环境变量...]  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>选项:  </span></span>
<span class="line"><span>    --venv-dir DIR         指定虚拟环境目录 (默认: ./temp_venv)  </span></span>
<span class="line"><span>    --no-cleanup           执行后不清理虚拟环境，下次运行时复用  </span></span>
<span class="line"><span>    --help, -h             显示此帮助信息  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>环境变量:  </span></span>
<span class="line"><span>    MODULES                要分析的模块列表 (默认: hinton-application,hinton-domain)  </span></span>
<span class="line"><span>    THRESHOLD              覆盖率阈值 (默认: 100)  </span></span>
<span class="line"><span>    OUTPUT_DIR             报告输出目录 (默认: ./reports)  </span></span>
<span class="line"><span>    SKIP_TESTS             跳过测试执行检查，使用现有报告 (默认: 0)  </span></span>
<span class="line"><span>    FORCE_ANALYSIS         强制分析 (默认: 0)  </span></span>
<span class="line"><span>    BASE_BRANCH            基准分支 (默认: 自动检测)  </span></span>
<span class="line"><span>    SKIP_BRANCH_CHECK      跳过远程分支比对 (默认: 0)  </span></span>
<span class="line"><span>    VENV_DIR               虚拟环境目录路径  </span></span>
<span class="line"><span>    CLEANUP_VENV           是否清理虚拟环境 (1=清理, 0=保留)  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>示例:  </span></span>
<span class="line"><span>    $0                                    # 使用默认设置  </span></span>
<span class="line"><span>    $0 --venv-dir ./my_venv              # 指定虚拟环境目录  </span></span>
<span class="line"><span>    $0 --no-cleanup                      # 执行后保留虚拟环境  </span></span>
<span class="line"><span>    $0 MODULES=hinton-application,hinton-domain THRESHOLD=80   # 设置环境变量  </span></span>
<span class="line"><span>    $0 BASE_BRANCH=origin/main           # 手动指定基准分支  </span></span>
<span class="line"><span>    $0 SKIP_BRANCH_CHECK=1               # 跳过远程分支比对  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>常见问题解决:  </span></span>
<span class="line"><span>    1. 找不到远程分支 origin/main:       - 检查网络连接: git fetch origin  </span></span>
<span class="line"><span>       - 手动指定远程分支: BASE_BRANCH=origin/main ./diff_cover_venv.sh  </span></span>
<span class="line"><span>       - 检查远程仓库配置: git remote -v  </span></span>
<span class="line"><span>    2. 未配置远程仓库:  </span></span>
<span class="line"><span>       - 添加远程仓库: git remote add origin &lt;仓库URL&gt;  </span></span>
<span class="line"><span>       - 手动指定远程分支: BASE_BRANCH=origin/main ./diff_cover_venv.sh  </span></span>
<span class="line"><span>    3. 网络连接问题:  </span></span>
<span class="line"><span>       - 检查网络连接和代理设置  </span></span>
<span class="line"><span>       - 手动指定远程分支: BASE_BRANCH=origin/main ./diff_cover_venv.sh  </span></span>
<span class="line"><span>       - 跳过远程分支比对: SKIP_BRANCH_CHECK=1 ./diff_cover_venv.sh  </span></span>
<span class="line"><span>    4. 跳过远程分支比对:  </span></span>
<span class="line"><span>       - 使用环境变量: SKIP_BRANCH_CHECK=1 ./diff_cover_venv.sh  </span></span>
<span class="line"><span>       - 将进行整体覆盖率分析，不进行分支比对  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>注意:  </span></span>
<span class="line"><span>    - 脚本会自动创建临时虚拟环境  </span></span>
<span class="line"><span>    - 默认情况下执行完成后会自动清理虚拟环境  </span></span>
<span class="line"><span>    - 使用 --no-cleanup 可以保留虚拟环境，下次运行时复用（节省时间）  </span></span>
<span class="line"><span>    - 如果自动检测失败，可以手动指定 BASE_BRANCH 环境变量  </span></span>
<span class="line"><span>    - 使用 SKIP_BRANCH_CHECK=1 可以跳过远程分支比对，进行整体覆盖率分析  </span></span>
<span class="line"><span>    - 虚拟环境复用逻辑：保留时复用，清理时重建  </span></span>
<span class="line"><span>EOF  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 解析命令行参数 =====parse_args() {  </span></span>
<span class="line"><span>    while [$# -gt 0](); do  </span></span>
<span class="line"><span>        case $1 in  </span></span>
<span class="line"><span>            --venv-dir)  </span></span>
<span class="line"><span>                VENV_DIR=&quot;$2&quot;  </span></span>
<span class="line"><span>                shift 2  </span></span>
<span class="line"><span>                ;;  </span></span>
<span class="line"><span>            --no-cleanup)  </span></span>
<span class="line"><span>                CLEANUP_VENV=0  </span></span>
<span class="line"><span>                shift  </span></span>
<span class="line"><span>                ;;  </span></span>
<span class="line"><span>            --help|-h)  </span></span>
<span class="line"><span>                show_help  </span></span>
<span class="line"><span>                exit 0  </span></span>
<span class="line"><span>                ;;  </span></span>
<span class="line"><span>            *)  </span></span>
<span class="line"><span>                # 其他参数作为环境变量处理  </span></span>
<span class="line"><span>                break  </span></span>
<span class="line"><span>                ;;  </span></span>
<span class="line"><span>        esac    done}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 主函数 =====main() {  </span></span>
<span class="line"><span>    log_info &quot;开始基于虚拟环境的增量覆盖率分析...&quot;  </span></span>
<span class="line"><span>    # 解析参数  </span></span>
<span class="line"><span>    parse_args &quot;$@&quot;  </span></span>
<span class="line"><span>    # 设置退出时清理  </span></span>
<span class="line"><span>    trap cleanup_venv EXIT  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    # 检查环境依赖  </span></span>
<span class="line"><span>    check_environment  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    # 创建临时虚拟环境  </span></span>
<span class="line"><span>    create_temp_venv  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    # 设置虚拟环境  </span></span>
<span class="line"><span>    setup_venv  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    # 检测模块和分支  </span></span>
<span class="line"><span>    detect_modules  </span></span>
<span class="line"><span>    detect_base_branch  </span></span>
<span class="line"><span>    check_branch_integrity  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    local success_count=0  </span></span>
<span class="line"><span>    local total_count=0  </span></span>
<span class="line"><span>    local total_covered_lines=0  </span></span>
<span class="line"><span>    local total_missing_lines=0  </span></span>
<span class="line"><span>    local total_all_lines=0  </span></span>
<span class="line"><span>    IFS=&#39;,&#39; read -ra MODULE_LIST &lt;&lt;&lt; &quot;$MODULES&quot;  </span></span>
<span class="line"><span>    for module in &quot;\${MODULE_LIST[@]}&quot;; do  </span></span>
<span class="line"><span>        module=$(echo &quot;$module&quot; | xargs)  </span></span>
<span class="line"><span>        total_count=$((total_count + 1))  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        log_info &quot;处理模块: $module&quot;  </span></span>
<span class="line"><span>        # 检查覆盖率报告  </span></span>
<span class="line"><span>        local coverage_xml  </span></span>
<span class="line"><span>        if ! coverage_xml=$(check_coverage_report &quot;$module&quot;); then  </span></span>
<span class="line"><span>            log_error &quot;模块 $module 处理失败&quot;  </span></span>
<span class="line"><span>            continue  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 转换Jacoco XML为Cobertura XML  </span></span>
<span class="line"><span>        local cobertura_xml=&quot;$module/target/jacoco/cobertura.xml&quot;  </span></span>
<span class="line"><span>        # 确保目标目录存在  </span></span>
<span class="line"><span>        [! -d &quot;$(dirname &quot;$cobertura_xml&quot;)&quot;]() &amp;&amp; mkdir -p &quot;$(dirname &quot;$cobertura_xml&quot;)&quot;  </span></span>
<span class="line"><span>        if ! convert_jacoco_to_cobertura &quot;$coverage_xml&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>            log_error &quot;模块 $module XML转换失败&quot;  </span></span>
<span class="line"><span>            continue  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>        # 使用diff-cover分析并获取覆盖率信息  </span></span>
<span class="line"><span>        if analyze_diff_coverage &quot;$module&quot; &quot;$cobertura_xml&quot;; then  </span></span>
<span class="line"><span>            success_count=$((success_count + 1))  </span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>            # 解析覆盖率信息: coverage_percent,total_lines,missing_lines  </span></span>
<span class="line"><span>            IFS=&#39;,&#39; read -r coverage_percent total_lines missing_lines &lt;&lt;&lt; &quot;$COVERAGE_INFO&quot;  </span></span>
<span class="line"><span>            # 累计统计信息  </span></span>
<span class="line"><span>            total_all_lines=$((total_all_lines + total_lines))  </span></span>
<span class="line"><span>            total_missing_lines=$((total_missing_lines + missing_lines))  </span></span>
<span class="line"><span>            total_covered_lines=$((total_covered_lines + (total_lines - missing_lines)))  </span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>            log_info &quot;[$module] 覆盖率: \${coverage_percent}% (\${total_lines}行总计, \${missing_lines}行缺失)&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_error &quot;模块 $module diff-cover分析失败&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    done    # 总结  </span></span>
<span class="line"><span>    echo &quot;&quot;  </span></span>
<span class="line"><span>    echo &quot;========================================&quot;  </span></span>
<span class="line"><span>    echo &quot;📊 分析完成&quot;  </span></span>
<span class="line"><span>    echo &quot;========================================&quot;  </span></span>
<span class="line"><span>    echo &quot;成功处理模块: $success_count/$total_count&quot;  </span></span>
<span class="line"><span>    echo &quot;报告目录: $OUTPUT_DIR&quot;  </span></span>
<span class="line"><span>    # 计算合并的覆盖率  </span></span>
<span class="line"><span>    if [ $total_all_lines -gt 0 ]; then  </span></span>
<span class="line"><span>        local overall_coverage  </span></span>
<span class="line"><span>        overall_coverage=$(echo &quot;scale=2; $total_covered_lines * 100 / $total_all_lines&quot; | bc -l)  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        echo &quot;&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;🎯 合并覆盖率统计&quot;  </span></span>
<span class="line"><span>        echo &quot;========================================&quot;  </span></span>
<span class="line"><span>        echo &quot;总代码行数: $total_all_lines&quot;  </span></span>
<span class="line"><span>        echo &quot;已覆盖行数: $total_covered_lines&quot;  </span></span>
<span class="line"><span>        echo &quot;缺失行数: $total_missing_lines&quot;  </span></span>
<span class="line"><span>        echo &quot;合并覆盖率: \${overall_coverage}%&quot;  </span></span>
<span class="line"><span>        # 检查是否达到阈值  </span></span>
<span class="line"><span>        if (( $(echo &quot;$overall_coverage &lt; $THRESHOLD&quot; | bc -l) )); then  </span></span>
<span class="line"><span>            log_warning &quot;合并覆盖率 \${overall_coverage}% 低于阈值 \${THRESHOLD}%&quot;  </span></span>
<span class="line"><span>        else  </span></span>
<span class="line"><span>            log_success &quot;合并覆盖率 \${overall_coverage}% 达到阈值 \${THRESHOLD}%&quot;  </span></span>
<span class="line"><span>        fi  </span></span>
<span class="line"><span>    else        log_warning &quot;没有检测到需要覆盖的代码行&quot;  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>    if [ $success_count -eq $total_count ]; then  </span></span>
<span class="line"><span>        log_success &quot;所有模块分析完成&quot;  </span></span>
<span class="line"><span>        exit 0  </span></span>
<span class="line"><span>    else  </span></span>
<span class="line"><span>        log_error &quot;部分模块分析失败&quot;  </span></span>
<span class="line"><span>        exit 1  </span></span>
<span class="line"><span>    fi  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># ===== 脚本入口 =====main &quot;$@&quot;</span></span></code></pre></div>`,12)])])}const d=s(l,[["render",o]]);export{_ as __pageData,d as default};
