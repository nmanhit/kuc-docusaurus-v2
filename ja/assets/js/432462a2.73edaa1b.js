"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[65269],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,o(o({ref:e},m),{},{components:n})):a.createElement(s,o({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12836:(t,e,n)=>{n.d(e,{r:()=>r});var a=n(67294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=Kucs["1.10.0"],n=new e.Button({text:"Normal",type:"normal",className:"kuc_normal_button"}),a=new e.Button({text:"Submit",type:"submit",className:"kuc_normal_button"}),r=new e.Button({text:"Alert",type:"alert",className:"kuc_normal_button"});t.current.appendChild(n),t.current.appendChild(a),t.current.appendChild(r)}),[]),a.createElement("div",{className:"sample-container",id:"button"},a.createElement("div",{id:"sample-container__components",ref:t}))}},77311:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(12836);const o={id:"button",title:"Button",sidebar_label:"Button",original_id:"button"},i=void 0,p={unversionedId:"components/desktop/button",id:"version-1.5.0/components/desktop/button",title:"Button",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.5.0/components/desktop/button.md",sourceDirName:"components/desktop",slug:"/components/desktop/button",permalink:"/kuc-docusaurus-v2/ja/docs/1.5.0/components/desktop/button",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"button",title:"Button",sidebar_label:"Button",original_id:"button"},sidebar:"version-1.5.0-docs",previous:{title:"Custom CSS",permalink:"/kuc-docusaurus-v2/ja/docs/1.5.0/getting-started/custom-css"},next:{title:"Checkbox",permalink:"/kuc-docusaurus-v2/ja/docs/1.5.0/components/desktop/checkbox"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Custom CSS",id:"custom-css",level:3},{value:"Property",id:"property-1",level:4},{value:"Sample Code",id:"sample-code",level:2}],u={toc:m},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Button \u306f\u3001\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.r,{mdxType:"ButtonComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30dc\u30bf\u30f3\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"normal"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30dc\u30bf\u30f3\u306e\u30c7\u30b6\u30a4\u30f3\u30bf\u30a4\u30d7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u4e0b\u3092\u6307\u5b9a\u3067\u304d\u308b",(0,r.kt)("br",null),'"normal" : Gray(#f7f9fA)',(0,r.kt)("br",null),'"submit" : Blue(#3498db)',(0,r.kt)("br",null),'"alert" : Red(#e74c3c)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7de8\u96c6\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"click"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Button(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"custom-css"},"Custom CSS"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/ja/docs/1.5.0/getting-started/custom-css"},"Custom CSS")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"property-1"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-background-color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-background-hover")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-background-active")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-background-focus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-font-size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--kuc-button-text-color")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/ja/docs/1.5.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\n\nconst button = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit',\n    className: 'options-class',\n    id: 'options-id',\n    visible: true,\n    disabled: false\n});\nheader.appendChild(button);\n\nbutton.addEventListener('click', event => {\n  console.log(event);\n});\n")))}k.isMDXComponent=!0}}]);