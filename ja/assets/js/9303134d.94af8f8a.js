"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[36390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73506:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(67294);const a=()=>{const e=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=new Kuc.Spinner({className:"spinner"});t.open(),e.current.appendChild(t)}),[]),r.createElement("div",{className:"sample-container",id:"spinner"},r.createElement("div",{id:"sample-container__components",ref:e}))}},54290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(73506);const o={id:"spinner",title:"Spinner",sidebar_label:"Spinner",original_id:"spinner"},i=void 0,p={unversionedId:"components/desktop/spinner",id:"version-1.7.0/components/desktop/spinner",title:"Spinner",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.7.0/components/desktop/spinner.md",sourceDirName:"components/desktop",slug:"/components/desktop/spinner",permalink:"/ja/docs/1.7.0/components/desktop/spinner",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"spinner",title:"Spinner",sidebar_label:"Spinner",original_id:"spinner"},sidebar:"version-1.7.0-docs",previous:{title:"RadioButton",permalink:"/ja/docs/1.7.0/components/desktop/radio-button"},next:{title:"Text",permalink:"/ja/docs/1.7.0/components/desktop/text"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Spinner \u306f\u3001\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30d4\u30ca\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)(l.O,{mdxType:"SpinnerComponent"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30fc\u30c0\u30fc\u30a2\u30a4\u30b3\u30f3\u4e0b\u90e8\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"text \u304c\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408*\u306f\u3001\u521d\u671f\u5024\u3092\u8868\u793a\u3059\u308b")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'text \u304c\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u306f\u3001\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u3092\u8003\u616e\u3057\u3066 visually-hidden class \u3092\u4ed8\u4e0e\u3057\u3001"now loading\u2026" \u306e\u6587\u8a00\u3092\u8996\u899a\u7684\u306b\u898b\u3048\u306a\u3044\u72b6\u614b\u3067\u8868\u793a\u3059\u308b\u3002')),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Spinner(options)",(0,a.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"open"},"open()"),(0,a.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("h5",{id:"parameter-1"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("h4",{id:"close"},"close()"),(0,a.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,a.kt)("h5",{id:"parameter-2"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return-1"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/ja/docs/1.7.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst spinner = new Kuc.Spinner({\n  text: 'now loading...'\n});\n\nspinner.open();\nspinner.close();\n")))}m.isMDXComponent=!0}}]);