const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VTDocDiagramPresenter.JJ2as7cU.js","assets/chunks/framework._FJXuPhs.js","assets/chunks/theme.D5fwq7tX.js","assets/chunks/VTDocDotIndicator.4KgczZtR.js","assets/chunks/purify.es.t2lEkcJL.js"])))=>i.map(i=>d[i]);
import{d as se,q as oe,$ as ae,o as r,c as d,j as t,F as v,B as m,n as U,t as p,a6 as l,ao as N,am as ie,e as le,ap as w,aq as V,a as ne,b as re,k as T,E as x,U as pe,V as de,ar as ce,p as f,h as c,P as he,_ as ue}from"./framework._FJXuPhs.js";const ge={class:"pg-root"},fe={class:"playground"},ve={class:"playground-panel"},me={class:"panel-section"},ye={class:"preset-grid"},be=["onClick"],we={class:"preset-label"},Pe={class:"preset-copy"},De={class:"panel-section"},Se={class:"diagram-tabs",role:"tablist"},ke=["aria-selected","onClick"],Ce={class:"panel-section"},_e={class:"field"},Re={class:"panel-section"},Ne={class:"field"},Te=["disabled"],Ee={key:0,class:"field-hint"},Me={class:"field"},Ae={class:"field field-checkbox"},Ue=["disabled"],Ve={class:"panel-section"},xe={class:"field"},Ie=["placeholder"],Be={class:"field"},Oe={class:"panel-section"},Ke={class:"field field-checkbox"},$e={class:"field field-checkbox"},Fe={class:"panel-section"},He={class:"field field-checkbox"},Ge={class:"field field-checkbox"},We={class:"field"},je={class:"panel-section"},qe={class:"timing-details"},Le={class:"timing-fields"},Qe={class:"field-label"},Ye=["onUpdate:modelValue"],ze={class:"panel-section"},Je={class:"checklist"},Xe={class:"panel-section snippet-section"},Ze={class:"snippet-header"},et={class:"snippet-pre"},tt={class:"playground-preview"},st={class:"preview-section"},ot={class:"tip-pills"},at={class:"preview-section"},it={class:"showcase-grid"},lt={class:"showcase-title"},nt={class:"showcase-copy"},rt={class:"preview-section"},pt={class:"story-grid"},dt={class:"snippet-pre"},ct=se({__name:"VTDocMermaidPlayground",setup(ht){const P=pe(()=>de(()=>import("./VTDocDiagramPresenter.JJ2as7cU.js"),__vite__mapDeps([0,1,2,3,4]))),h={flowchart:{label:"Flowchart",highlightSuggestion:"Process,Done",defaultHighlight:"Process,Done",code:`flowchart TD
    Start([▶ Start]) --> Input[/User Input/]
    Input --> Validate{Valid?}
    Validate -->|Yes| Process[Process Data]
    Validate -->|No| Error[Show Error]
    Error --> Input
    Process --> Done([✓ Done])`},state:{label:"State Diagram",highlightSuggestion:"Active,Done",defaultHighlight:"Active,Done",code:`stateDiagram-v2
    [*] --> Idle
    Idle --> Active: Start
    Active --> Paused: Pause
    Paused --> Active: Resume
    Active --> Done: Complete
    Done --> [*]
    Done --> Idle: Reset`},sequence:{label:"Sequence",highlightSuggestion:"",defaultHighlight:"",code:`sequenceDiagram
    participant U as User
    participant A as App
    participant W as Worker
    participant S as Store

    U->>A: Upload file
    A->>W: processFrame()
    W-->>A: detections[]
    A->>S: confirmPlate()
    S-->>A: plateAdded
    A-->>U: Show result`},class:{label:"Class",highlightSuggestion:"",defaultHighlight:"",code:`classDiagram
    class Vehicle {
      +String make
      +String model
      +int year
      +start() void
    }
    class Car {
      +int doors
      +openTrunk() void
    }
    class Truck {
      +float payload
      +tow() void
    }
    class ElectricCar {
      +int batteryKwh
      +charge() void
    }
    Vehicle <|-- Car
    Vehicle <|-- Truck
    Car <|-- ElectricCar`},er:{label:"ER",highlightSuggestion:"",defaultHighlight:"",code:`erDiagram
    USER {
      int id PK
      string name
      string email
    }
    ADDRESS {
      int id PK
      int user_id FK
      string street
      string city
      string country
    }
    ORDER {
      int id PK
      date created_at
      string status
    }
    PRODUCT {
      int id PK
      string name
      float price
    }
    ORDER_ITEM {
      int order_id FK
      int product_id FK
      int quantity
    }
    USER ||--o{ ADDRESS : has
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : "included in"`}},G=[{id:"phase-nav",title:"Phase navigation",description:"Guided walkthrough with Prev/Next buttons and animated phase dots.",code:`flowchart TD
    Camera[Camera Frame] --> Detect{Plate found?}
    Detect -->|Yes| Confirm[Confirm result]
    Detect -->|No| Retry[Keep scanning]
    Confirm --> Save[Save in history]
    Retry --> Camera`,presenterProps:{autoPlay:"none",caption:"Phase-by-phase walkthrough",controls:!0,highlight:[],highlightMode:"pulse",phaseNav:!0,preset:"soft",spotlight:!1}},{id:"spotlight",title:"Hover spotlight",description:"Hover any node to dim unrelated branches and reveal the local context.",code:`flowchart TD
    Start([Entry]) --> Parse[Parse frame]
    Parse --> Quality{Readable plate?}
    Quality -->|Yes| OCR[OCR]
    Quality -->|No| Reject[Discard frame]
    OCR --> Match[Deduplicate]
    Match --> Save[Save result]
    Reject --> Start`,presenterProps:{autoPlay:"none",caption:"Contextual spotlight on connected nodes",controls:!0,highlight:[],highlightMode:"pulse",phaseNav:!1,preset:"soft",spotlight:!0}},{id:"neon",title:"Neon presentation",description:"Dark preset with highlight glow and post-play edge emphasis.",code:`stateDiagram-v2
    [*] --> Waiting
    Waiting --> Processing: Plate seen
    Processing --> Confirmed: Confidence OK
    Processing --> Waiting: Discard
    Confirmed --> Archived: Persisted
    Archived --> [*]`,presenterProps:{autoPlay:"all",caption:"Neon preset + glow highlight",controls:!0,highlight:["Processing","Confirmed"],highlightMode:"glow",phaseNav:!1,preset:"neon",spotlight:!1}}],I={intake:`flowchart TD
  Upload[Upload frame] --> Queue[Queue job]
  Queue --> Worker[Worker starts OCR]
  Worker --> Result[Emit result]`,confirmation:`stateDiagram-v2
  [*] --> Candidate
  Candidate --> Confirmed: Confidence threshold met
  Confirmed --> Stored: Added to history
  Stored --> [*]`},B=["nodeDuration","nodeStagger","edgeDuration","edgeStagger","levelGap"],E={nodeDuration:.45,nodeStagger:.11,edgeDuration:.7,edgeStagger:.09,levelGap:.1},O=[{id:"balanced",label:"Balanced",description:"Default flowchart playground with all runtime controls enabled.",diagramKey:"flowchart",highlight:"Process,Done",props:{preset:"auto",controls:!0,showBadge:!1,autoPlay:"none",highlightMode:"pulse",speed:"normal",loop:!1,caption:"",phaseNav:!1,spotlight:!1,timing:{}}},{id:"phase-nav",label:"Phase nav",description:"Switch the main preview into guided walkthrough mode.",diagramKey:"flowchart",highlight:"",props:{preset:"soft",controls:!0,showBadge:!0,autoPlay:"none",highlightMode:"pulse",speed:"normal",loop:!1,caption:"Guided phase navigation demo",phaseNav:!0,spotlight:!1,timing:{}}},{id:"spotlight",label:"Spotlight",description:"Use hover spotlight to isolate connected branches.",diagramKey:"flowchart",highlight:"Validate,Process",props:{preset:"soft",controls:!0,showBadge:!1,autoPlay:"none",highlightMode:"pulse",speed:"normal",loop:!1,caption:"Hover any node to focus the branch",phaseNav:!1,spotlight:!0,timing:{}}},{id:"neon",label:"Neon",description:"Stress-test highlight, modal controls, and edge glow in the dark preset.",diagramKey:"state",highlight:"Active,Done",props:{preset:"neon",controls:!0,showBadge:!1,autoPlay:"all",highlightMode:"glow",speed:"normal",loop:!1,caption:"Neon preset with persistent highlight",phaseNav:!1,spotlight:!1,timing:{}}}];function K(){return{preset:"auto",controls:!0,showBadge:!1,autoPlay:"none",highlightMode:"pulse",speed:"normal",loop:!1,caption:"",phaseNav:!1,spotlight:!1,timing:{...E}}}const s=ce(K()),n=f("flowchart"),M=f("balanced"),y=f(h.flowchart.defaultHighlight),D=f(!1),S=f(null),A=f(null),k=f(null);let b=null,u=null;function W(a={}){const e=K(),{timing:o,...i}=a;Object.assign(s,e,i),s.timing={...E,...o??{}}}function $(a){const e=O.find(o=>o.id===a);e&&(M.value=e.id,n.value=e.diagramKey,y.value=e.highlight,W(e.props))}function j(a){n.value=a,M.value=null,y.value=h[a].defaultHighlight}oe(()=>s.phaseNav,a=>{a&&(s.loop=!1,s.autoPlay="none")});const C=c(()=>y.value.split(",").map(a=>a.trim()).filter(Boolean)),_=c(()=>{const a={};for(const e of B)s.timing[e]!==E[e]&&(a[e]=s.timing[e]);return Object.keys(a).length?a:void 0}),F=c(()=>s.caption||`${h[n.value].label} preview`),q=c(()=>JSON.stringify({code:n.value,preset:s.preset,controls:s.controls,showBadge:s.showBadge,autoPlay:s.autoPlay,highlight:C.value,highlightMode:s.highlightMode,speed:s.speed,loop:s.loop,caption:F.value,phaseNav:s.phaseNav,spotlight:s.spotlight,timing:_.value})),L=c(()=>{const a=["Double-click the diagram to open the fullscreen modal.","Use Space, ←/→, 1/2/3, R, F and Esc inside the modal.","Export uses SVG so the result stays faithful to Mermaid labels and theme styling."];return s.phaseNav?a.push("phaseNav replaces continuous playback with Prev/Next stepping."):a.push("Drag the scrubber or use arrow keys on it for manual seeking."),s.spotlight&&a.push("Hover spotlight is clearest on flowchart and state diagrams."),(n.value==="class"||n.value==="er")&&a.push("Class and ER adapters animate classes/entities as a group. Highlight and spotlight are not supported for these types."),a}),Q=c(()=>{const a=["Modal shortcuts","SVG export","Zoom-to-node"];return a.push(s.phaseNav?"Phase navigation":"Scrubber seek"),s.spotlight&&a.push("Hover spotlight"),s.preset==="neon"&&a.push("Neon glow"),a}),H=c(()=>{const a=h[n.value].code,e=[];if(s.preset!=="auto"&&e.push(`preset="${s.preset}"`),s.controls||e.push(':controls="false"'),s.showBadge&&e.push("showBadge"),s.autoPlay!=="none"&&e.push(`autoPlay="${s.autoPlay}"`),C.value.length&&e.push(`:highlight="[${C.value.map(i=>`'${i}'`).join(", ")}]"`),s.highlightMode!=="pulse"&&e.push(`highlightMode="${s.highlightMode}"`),s.speed!=="normal"&&e.push(`speed="${s.speed}"`),s.loop&&e.push("loop"),s.caption&&e.push(`caption="${s.caption}"`),s.phaseNav&&e.push("phaseNav"),s.spotlight&&e.push("spotlight"),_.value){const i=Object.entries(_.value).map(([g,R])=>`${g}: ${R}`).join(", ");e.push(`:timing="{ ${i} }"`)}const o=e.length?`<DiagramPresenter
  :code="myDiagram"
  ${e.join(`
  `)}
/>`:'<DiagramPresenter :code="myDiagram" />';return`<script setup>
const myDiagram = \`
${a}
\`
<\/script>

${o}`}),Y=c(()=>`<script setup>
import { ref } from 'vue'

const first = ref(null)
const second = ref(null)

const playSecondStep = () => {
  setTimeout(() => second.value?.play?.(), 400)
}
<\/script>

<DiagramPresenter
  ref="first"
  :code="firstDiagram"
  @play-complete="playSecondStep"
/>

<DiagramPresenter
  ref="second"
  :code="secondDiagram"
  :controls="false"
/>`);async function z(){try{await navigator.clipboard.writeText(H.value),D.value=!0,b&&clearTimeout(b),b=setTimeout(()=>{D.value=!1},2e3)}catch{}}function J(){var a,e;(e=(a=S.value)==null?void 0:a.play)==null||e.call(a)}function X(){var a,e;(e=(a=S.value)==null?void 0:a.reset)==null||e.call(a)}function Z(){var a,e;(e=(a=S.value)==null?void 0:a.exportDiagram)==null||e.call(a,"svg")}function ee(){u&&clearTimeout(u),u=setTimeout(()=>{var a,e,o,i;(e=(a=k.value)==null?void 0:a.reset)==null||e.call(a),(i=(o=k.value)==null?void 0:o.play)==null||i.call(o)},400)}async function te(){var a,e,o,i,g,R;u&&clearTimeout(u),(e=(a=A.value)==null?void 0:a.reset)==null||e.call(a),(i=(o=k.value)==null?void 0:o.reset)==null||i.call(o),await he(),(R=(g=A.value)==null?void 0:g.play)==null||R.call(g)}return ae(()=>{b&&clearTimeout(b),u&&clearTimeout(u)}),$("balanced"),(a,e)=>(r(),d("div",ge,[t("div",fe,[t("aside",ve,[t("section",me,[e[11]||(e[11]=t("h4",{class:"section-title"},"Feature presets",-1)),t("div",ye,[(r(),d(v,null,m(O,o=>t("button",{key:o.id,type:"button",class:U(["preset-btn",{active:M.value===o.id}]),onClick:i=>$(o.id)},[t("span",we,p(o.label),1),t("span",Pe,p(o.description),1)],10,be)),64))])]),t("section",De,[e[12]||(e[12]=t("h4",{class:"section-title"},"Diagram",-1)),t("div",Se,[(r(),d(v,null,m(h,(o,i)=>t("button",{key:i,type:"button",role:"tab","aria-selected":n.value===i,class:U(["tab-btn",{active:n.value===i}]),onClick:g=>j(i)},p(o.label),11,ke)),64))])]),t("section",Ce,[e[15]||(e[15]=t("h4",{class:"section-title"},"Style",-1)),t("label",_e,[e[14]||(e[14]=t("span",{class:"field-label"},"preset",-1)),l(t("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.preset=o),class:"field-select"},[...e[13]||(e[13]=[t("option",{value:"auto"},"auto",-1),t("option",{value:"soft"},"soft",-1),t("option",{value:"neon"},"neon",-1)])],512),[[N,s.preset]])])]),t("section",Re,[e[21]||(e[21]=t("h4",{class:"section-title"},"Animation",-1)),t("label",Ne,[e[17]||(e[17]=t("span",{class:"field-label"},"autoPlay",-1)),l(t("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.autoPlay=o),class:"field-select",disabled:s.phaseNav},[...e[16]||(e[16]=[ie('<option value="none" data-v-3b8e5840>none</option><option value="nodes" data-v-3b8e5840>nodes</option><option value="edges" data-v-3b8e5840>edges</option><option value="all" data-v-3b8e5840>all</option><option value="intersect" data-v-3b8e5840>intersect</option>',5)])],8,Te),[[N,s.autoPlay]]),s.phaseNav?(r(),d("span",Ee," phaseNav uses manual step controls, so autoplay stays disabled here. ")):le("",!0)]),t("label",Me,[e[19]||(e[19]=t("span",{class:"field-label"},"speed",-1)),l(t("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.speed=o),class:"field-select"},[...e[18]||(e[18]=[t("option",{value:"slow"},"slow",-1),t("option",{value:"normal"},"normal",-1),t("option",{value:"fast"},"fast",-1)])],512),[[N,s.speed]])]),t("label",Ae,[l(t("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>s.loop=o),type:"checkbox",class:"field-check",disabled:s.phaseNav},null,8,Ue),[[w,s.loop]]),e[20]||(e[20]=t("span",{class:"field-label"},"loop",-1))])]),t("section",Ve,[e[26]||(e[26]=t("h4",{class:"section-title"},"Highlight",-1)),t("label",xe,[e[22]||(e[22]=t("span",{class:"field-label"},"highlight",-1)),l(t("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>y.value=o),type:"text",class:"field-input",placeholder:h[n.value].highlightSuggestion||"NodeA,NodeB"},null,8,Ie),[[V,y.value]]),e[23]||(e[23]=t("span",{class:"field-hint"},"comma-separated node keys",-1))]),t("label",Be,[e[25]||(e[25]=t("span",{class:"field-label"},"highlightMode",-1)),l(t("select",{"onUpdate:modelValue":e[5]||(e[5]=o=>s.highlightMode=o),class:"field-select"},[...e[24]||(e[24]=[t("option",{value:"pulse"},"pulse",-1),t("option",{value:"glow"},"glow",-1)])],512),[[N,s.highlightMode]])])]),t("section",Oe,[e[29]||(e[29]=t("h4",{class:"section-title"},"New features",-1)),t("label",Ke,[l(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>s.phaseNav=o),type:"checkbox",class:"field-check"},null,512),[[w,s.phaseNav]]),e[27]||(e[27]=t("span",{class:"field-label"},"phaseNav",-1))]),t("label",$e,[l(t("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>s.spotlight=o),type:"checkbox",class:"field-check"},null,512),[[w,s.spotlight]]),e[28]||(e[28]=t("span",{class:"field-label"},"spotlight",-1))]),e[30]||(e[30]=t("p",{class:"field-hint feature-hint"}," `phaseNav` is ideal for guided walkthroughs. `spotlight` works best on flowchart/state diagrams because they expose connectivity. ",-1))]),t("section",Fe,[e[34]||(e[34]=t("h4",{class:"section-title"},"Display",-1)),t("label",He,[l(t("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>s.controls=o),type:"checkbox",class:"field-check"},null,512),[[w,s.controls]]),e[31]||(e[31]=t("span",{class:"field-label"},"controls",-1))]),t("label",Ge,[l(t("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>s.showBadge=o),type:"checkbox",class:"field-check"},null,512),[[w,s.showBadge]]),e[32]||(e[32]=t("span",{class:"field-label"},"showBadge",-1))]),t("label",We,[e[33]||(e[33]=t("span",{class:"field-label"},"caption",-1)),l(t("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>s.caption=o),type:"text",class:"field-input",placeholder:"Optional caption…"},null,512),[[V,s.caption]])])]),t("section",je,[t("details",qe,[e[35]||(e[35]=t("summary",{class:"section-title timing-summary"},[ne(" Timing "),t("span",{class:"section-hint"},"(seconds)")],-1)),t("div",Le,[(r(),d(v,null,m(B,o=>t("label",{key:o,class:"field"},[t("span",Qe,p(o),1),l(t("input",{"onUpdate:modelValue":i=>s.timing[o]=i,type:"number",step:"0.05",min:"0.05",class:"field-input field-input-num"},null,8,Ye),[[V,s.timing[o],void 0,{number:!0}]])])),64))])])]),t("section",ze,[e[36]||(e[36]=t("h4",{class:"section-title"},"Current preview checklist",-1)),t("ul",Je,[(r(!0),d(v,null,m(L.value,o=>(r(),d("li",{key:o},p(o),1))),128))])]),t("section",Xe,[t("div",Ze,[e[37]||(e[37]=t("h4",{class:"section-title snippet-title"},"Usage",-1)),t("button",{type:"button",class:U(["copy-btn",{copied:D.value}]),onClick:z},p(D.value?"✓ Copied":"Copy"),3)]),t("pre",et,[t("code",null,p(H.value),1)])])]),t("div",tt,[t("section",st,[t("div",{class:"preview-header"},[e[38]||(e[38]=t("div",null,[t("h3",{class:"preview-title"},"Interactive preview"),t("p",{class:"preview-copy"}," Tune the props live, then open the modal to test keyboard shortcuts, zoom-to-node, minimap, and SVG export. ")],-1)),t("div",{class:"preview-actions"},[t("button",{type:"button",class:"action-btn",onClick:J},"Play"),t("button",{type:"button",class:"action-btn",onClick:X},"Reset"),t("button",{type:"button",class:"action-btn action-btn-primary",onClick:Z}," Export SVG ")])]),t("div",ot,[(r(!0),d(v,null,m(Q.value,o=>(r(),d("span",{key:o,class:"tip-pill"},p(o),1))),128))]),(r(),re(T(P),{ref_key:"previewPresenterRef",ref:S,key:q.value,code:h[n.value].code,preset:s.preset,controls:s.controls,"show-badge":s.showBadge,"auto-play":s.autoPlay,highlight:C.value,"highlight-mode":s.highlightMode,speed:s.speed,loop:s.loop,caption:F.value,"phase-nav":s.phaseNav,spotlight:s.spotlight,timing:_.value},null,8,["code","preset","controls","show-badge","auto-play","highlight","highlight-mode","speed","loop","caption","phase-nav","spotlight","timing"]))])])]),t("section",at,[e[39]||(e[39]=t("div",{class:"preview-header"},[t("div",null,[t("h3",{class:"preview-title"},"Feature showcase"),t("p",{class:"preview-copy"}," These examples stay preconfigured so you can verify the new behaviors quickly without rebuilding the main preview from scratch. ")])],-1)),t("div",it,[(r(),d(v,null,m(G,o=>t("article",{key:o.id,class:"showcase-card"},[t("h4",lt,p(o.title),1),t("p",nt,p(o.description),1),x(T(P),{code:o.code,preset:o.presenterProps.preset,controls:o.presenterProps.controls,"auto-play":o.presenterProps.autoPlay,highlight:o.presenterProps.highlight,"highlight-mode":o.presenterProps.highlightMode,caption:o.presenterProps.caption,"phase-nav":o.presenterProps.phaseNav,spotlight:o.presenterProps.spotlight},null,8,["code","preset","controls","auto-play","highlight","highlight-mode","caption","phase-nav","spotlight"])])),64))])]),t("section",rt,[t("div",{class:"preview-header"},[e[40]||(e[40]=t("div",null,[t("h3",{class:"preview-title"},"Story mode pattern"),t("p",{class:"preview-copy"}," `DiagramPresenter` does not need an extra story API. Chain presenters with the existing `play-complete` event and exposed methods. ")],-1)),t("div",{class:"preview-actions"},[t("button",{type:"button",class:"action-btn action-btn-primary",onClick:te}," Run story demo ")])]),t("div",pt,[x(T(P),{ref_key:"storyLeadPresenterRef",ref:A,code:I.intake,preset:"soft",caption:"Step 1 — Intake",onPlayComplete:ee},null,8,["code"]),x(T(P),{ref_key:"storyFollowPresenterRef",ref:k,code:I.confirmation,preset:"neon",controls:!1,highlight:["Confirmed"],"highlight-mode":"glow",caption:"Step 2 — Confirmation"},null,8,["code"])]),t("pre",dt,[t("code",null,p(Y.value),1)])])]))}}),gt=ue(ct,[["__scopeId","data-v-3b8e5840"]]);export{gt as default};
