"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[62212],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),c=d(a),u=n,s=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(s,i(i({ref:e},k),{},{components:a})):r.createElement(s,i({ref:e},k))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87450:(t,e,a)=>{a.d(e,{L:()=>n});var r=a(67294);const n=()=>{const t=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=new Kucs["1.10.0"].DatePicker({value:"2021-11-11"});t.current.appendChild(e)}),[]),r.createElement("div",{className:"sample-container",id:"date-picker"},r.createElement("div",{id:"sample-container__components",ref:t}))}},87471:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>k});var r=a(87462),n=(a(67294),a(3905)),l=a(87450);const i={id:"date-picker",title:"DatePicker",sidebar_label:"DatePicker",original_id:"date-picker"},p=void 0,o={unversionedId:"components/desktop/date-picker",id:"version-1.3.0/components/desktop/date-picker",title:"DatePicker",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.0/components/desktop/date-picker.md",sourceDirName:"components/desktop",slug:"/components/desktop/date-picker",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.0/components/desktop/date-picker",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"date-picker",title:"DatePicker",sidebar_label:"DatePicker",original_id:"date-picker"},sidebar:"version-1.3.0-docs",previous:{title:"Checkbox",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.0/components/desktop/checkbox"},next:{title:"DateTimePicker",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.0/components/desktop/datetime-picker"}},d={},k=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],c={toc:k},m="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"DatePicker \u306f\u5165\u529b\u30a8\u30ea\u30a2\u3068\u65e5\u4ed8\u9078\u629e\u7528\u306e\u30ab\u30ec\u30f3\u30c0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)(l.L,{mdxType:"DatePickerComponent"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("h3",{id:"property"},"Property"),(0,n.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"className"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"language *1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a00\u8a9e\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"},'\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3: "auto", "en", "ja", "zh"',(0,n.kt)("br",null),'"auto" \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001HTML \u306e lang \u8a2d\u5b9a\u306b\u5f93\u3046\uff08lang \u8a2d\u5b9a\u304c "en"/"zh"/"ja" \u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u8a00\u8a9e\u8a2d\u5b9a\u304c "en" \u306b\u306a\u308b\uff09')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f YYYY-MM-DD",(0,n.kt)("br",null),"\u4ee5\u4e0b\u306e\u65e5\u4ed8\u3082\u6307\u5b9a\u3067\u304d\u308b\uff08\u5185\u90e8\u7684\u306b YYYY-MM-DD \u306b\u5909\u63db\u3055\u308c\u308b\uff09:",(0,n.kt)("li",null,"2021"),(0,n.kt)("li",null,"2021-1"),(0,n.kt)("li",null,"2021-01"),(0,n.kt)("li",null,"2021-1-9"),(0,n.kt)("li",null,"21-01-01"),"\u5e74\u304c 4\u6587\u5b57\u4ee5\u4e0b\u306e\u5834\u5408\u30010 \u304c\u5148\u982d\u306b\u88dc\u5b8c\u3055\u308c\u308b",(0,n.kt)("br",null),"\u65e5\u3084\u6708\u306e\u8a18\u8f09\u304c\u306a\u3044\u5834\u5408\u300101 \u3067\u88dc\u5b8c\u3055\u308c\u308b",(0,n.kt)("br",null),"\u65e5\u3084\u6708\u304c 1\u6587\u5b57\u306e\u5834\u5408\u30010 \u304c\u5148\u982d\u306b\u88dc\u5b8c\u3055\u308c\u308b",(0,n.kt)("br",null),"\u4e0d\u6b63\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084\u5024\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9078\u629e\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"*1: \u8868\u793a\u3055\u308c\u308b\u65e5\u4ed8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001language \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u81ea\u52d5\u7684\u306b\u5207\u308a\u66ff\u308f\u308b\u3002"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'"en" \u306e\u5834\u5408: MM/DD/YYYY'),(0,n.kt)("li",{parentName:"ul"},'"ja", "zh" \u306e\u5834\u5408: YYYY-MM-DD'))),(0,n.kt)("h3",{id:"event"},"Event"),(0,n.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"change"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,n.kt)("br",null),(0,n.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,n.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,n.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024")))),(0,n.kt)("h3",{id:"constructor"},"Constructor"),(0,n.kt)("p",null,"DatePicker(options)",(0,n.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,n.kt)("h4",{id:"parameter"},"Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"options"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sample-code"},"Sample Code"),(0,n.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.app.record.getSpaceElement('space');\nconst datePicker = new Kuc.DatePicker({\n  label: 'Date',\n  requiredIcon: true,\n  language: 'auto',\n  value: '2021-11-11',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(datePicker);\n\ndatePicker.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);