"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[2838],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),f=r,s=k["".concat(o,".").concat(f)]||k[f]||c[f]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},86422:(t,e,a)=>{a.d(e,{U:()=>r});var n=a(67294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kucs["1.10.0"].TextArea({});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"textarea"},n.createElement("div",{id:"sample-container__components",ref:t}))}},32557:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(86422);const i={id:"textarea",title:"TextArea",sidebar_label:"TextArea",original_id:"textarea"},p=void 0,o={unversionedId:"components/desktop/textarea",id:"version-1.3.2/components/desktop/textarea",title:"TextArea",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.2/components/desktop/textarea.md",sourceDirName:"components/desktop",slug:"/components/desktop/textarea",permalink:"/ja/docs/1.3.2/components/desktop/textarea",draft:!1,tags:[],version:"1.3.2",frontMatter:{id:"textarea",title:"TextArea",sidebar_label:"TextArea",original_id:"textarea"},sidebar:"version-1.3.2-docs",previous:{title:"Text",permalink:"/ja/docs/1.3.2/components/desktop/text"},next:{title:"TimePicker",permalink:"/ja/docs/1.3.2/components/desktop/time-picker"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],k={toc:m},c="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"TextArea \u306f\u3001\u8907\u6570\u884c\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.U,{mdxType:"TextAreaComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u6b04\u6642\u306b\u5165\u529b\u4f8b\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7de8\u96c6\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,r.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30ab\u30b9\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.value : \u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306e value \u306e\u5024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u308b\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.data : \u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217",(0,r.kt)("br",null),"event.detail.value : \u30bf\u30fc\u30b2\u30c3\u30c8\u8981\u7d20\u306e value \u306e\u5024",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u203b event.detail.data \u306e\u5024\u306b\u3064\u3044\u3066\u306e\u88dc\u8db3",(0,r.kt)("br",null),"\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u6307\u3059",(0,r.kt)("br",null),"\u30da\u30fc\u30b9\u30c8\u3084\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u306b\u3088\u3063\u3066\u5165\u529b\u3057\u305f\u5834\u5408\u306f\u3001null \u306b\u306a\u308b",(0,r.kt)("br",null),"Enter, Delete, Backspace \u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u5834\u5408\u306f\u3001null \u306b\u306a\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"TextArea(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.app.record.getSpaceElement('space');\nconst textarea = new Kuc.TextArea({\n  label: 'Fruit',\n  requiredIcon: true,\n  placeholder: 'Apple',\n  value: 'Apple',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(textarea);\n\ntextarea.addEventListener('change', event => {\n  console.log(event);\n});\n\ntextarea.addEventListener('focus', event => {\n  console.log(event);\n});\n\ntextarea.addEventListener('input', event => {\n  console.log(event);\n});\n")))}f.isMDXComponent=!0}}]);