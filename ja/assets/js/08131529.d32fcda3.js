"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[70443],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(a),s=r,u=c["".concat(o,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},70813:(t,e,a)=>{a.d(e,{Y:()=>r});var n=a(67294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kucs["1.10.0"].Attachment({});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"attachment"},n.createElement("div",{id:"sample-container__components",ref:t}))}},81566:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(70813);const i={id:"attachment",title:"Attachment",sidebar_label:"Attachment",original_id:"attachment"},p=void 0,o={unversionedId:"components/desktop/attachment",id:"version-1.10.0/components/desktop/attachment",title:"Attachment",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.10.0/components/desktop/attachment.md",sourceDirName:"components/desktop",slug:"/components/desktop/attachment",permalink:"/kuc-docusaurus-v2/ja/docs/1.10.0/components/desktop/attachment",draft:!1,tags:[],version:"1.10.0",frontMatter:{id:"attachment",title:"Attachment",sidebar_label:"Attachment",original_id:"attachment"},sidebar:"version-1.10.0-docs",previous:{title:"Usage with TypeScript",permalink:"/kuc-docusaurus-v2/ja/docs/1.10.0/getting-started/usage-with-typescript"},next:{title:"Button",permalink:"/kuc-docusaurus-v2/ja/docs/1.10.0/components/desktop/button"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"Related Articles",id:"related-articles",level:2}],c=(k="File",function(t){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)});var k;const s={toc:m},u="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Attachment \u306f\u9078\u629e\u3082\u3057\u304f\u306f\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Y,{mdxType:"AttachmentComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8a00\u8a9e\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3: "auto", "en", "ja", "zh", "zh-TW"',(0,r.kt)("br",null),'"auto" \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001HTML \u306e lang \u8a2d\u5b9a\u306b\u5f93\u3046\uff08lang \u8a2d\u5b9a\u304c "en"/"zh"/"zh-TW"/"ja" \u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u8a00\u8a9e\u8a2d\u5b9a\u304c "en" \u306b\u306a\u308b\uff09')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\uff08file type/size \u306e\u5236\u9650\u4e8b\u9805\u306a\u3069\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9078\u629e\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\",(0,r.kt)(c,{mdxType:"File"})),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/ja/docs/Web/API/File"},"File object"),"\u3082\u3057\u304f\u306f name \u3068 size \u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6307\u5b9a\u3067\u304d\u308b",(0,r.kt)("br",null),"files \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"File.name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"File.size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306b\u5fdc\u3058\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3055\u308c\u308b",(0,r.kt)("li",null,"size >= 1073741824: xxx GB"),(0,r.kt)("li",null,"1073741824 > size >= 1048576: xxx MB"),(0,r.kt)("li",null,"1048576 > size >= 1024: xxx KB"),(0,r.kt)("li",null,"1024 > size: xxx bytes"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'*1: "\u53c2\u7167" \u30dc\u30bf\u30f3\u3068 "\u3053\u3053\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059" \u306e\u30c6\u30ad\u30b9\u30c8\u306f language \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u306b\u5fdc\u3058\u3066\u5207\u308a\u66ff\u308f\u308b.')),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("li",null,"add-file\uff08\u30d5\u30a1\u30a4\u30eb\u8ffd\u52a0\u3055\u308c\u305f\u6642\u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308b\uff09",(0,r.kt)("ul",null,(0,r.kt)("li",null,'event.detail.type: "add-file"'),(0,r.kt)("li",null,"event.detail.oldFiles: \u8ffd\u52a0\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8"),(0,r.kt)("li",null,"event.detail.files: \u8ffd\u52a0\u5f8c\u306e\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8"),(0,r.kt)("li",null,"event.detail.fileIndex: \u8ffd\u52a0\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u5217\u756a\u53f7\uff08Type: Array\\",(0,r.kt)("number",null),"\uff09",(0,r.kt)("ul",null,(0,r.kt)("li",null,'"event.detail.files[event.detail.fileIndex',"[x]",']" \u3067\u8ffd\u52a0\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3067\u304d\u308b'))))),(0,r.kt)("li",null,"remove-file\uff08\u30d5\u30a1\u30a4\u30eb\u524a\u9664\u3055\u308c\u305f\u6642\u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308b\uff09",(0,r.kt)("ul",null,(0,r.kt)("li",null,'event.detail.type: "remove-file"'),(0,r.kt)("li",null,"event.detail.oldFiles: \u524a\u9664\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8"),(0,r.kt)("li",null,"event.detail.files: \u524a\u9664\u5f8c\u306e\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8"),(0,r.kt)("li",null,"event.detail.fileIndex: \u524a\u9664\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u5217\u756a\u53f7\uff08Type: Array\\",(0,r.kt)("number",null),"\uff09",(0,r.kt)("ul",null,(0,r.kt)("li",null,'"event.detail.oldFiles[event.detail.fileIndex',"[x]",']" \u3067\u524a\u9664\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3067\u304d\u308b'))))))))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Attachment(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/ja/docs/1.10.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst attachment = new Kuc.Attachment({\n  label: 'Attachment',\n  files: [\n    { name: 'file.txt', size: '150' },\n    new File(['foo'], 'foo.txt', { type: 'text/plain' })\n  ],\n  language: 'auto',\n  message: 'Max size: 50MB',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  requiredIcon: false\n});\nspace.appendChild(attachment);\n\nattachment.addEventListener('change', event => {\n  console.log(event);\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"related-articles"},"Related Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.10.0/guides/attachment-customization"},"Attachment customization"))))}f.isMDXComponent=!0}}]);