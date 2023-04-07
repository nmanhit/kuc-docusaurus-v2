"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[27053],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):A(A({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,A(A({ref:e},d),{},{components:n})):a.createElement(k,A({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,A=new Array(l);A[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:r,A[1]=i;for(var p=2;p<l;p++)A[p]=n[p];return a.createElement.apply(null,A)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62814:(t,e,n)=>{n.d(e,{a:()=>r});var a=n(67294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=Kucs["1.10.0"],n=new e.Button({text:"OK",type:"submit"}),a=new e.Button({text:"Cancel",type:"normal"});a.style.marginRight="16px";const r=document.createElement("div");r.style.display="flex",r.appendChild(a),r.appendChild(n);const l=new e.Dialog({title:"Title",content:"<div><p style='margin: 0;'>This is Content</p></div>",footer:r,icon:"info",className:"dialog"});l.open(),t.current.appendChild(l)}),[]),a.createElement("div",{className:"sample-container",id:"dialog"},a.createElement("div",{id:"sample-container__components",ref:t}))}},89164:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>A,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(62814);const A={id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},i=void 0,o={unversionedId:"components/desktop/dialog",id:"version-1.6.0/components/desktop/dialog",title:"Dialog",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.6.0/components/desktop/dialog.md",sourceDirName:"components/desktop",slug:"/components/desktop/dialog",permalink:"/kuc-docusaurus-v2/ja/docs/1.6.0/components/desktop/dialog",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},sidebar:"version-1.6.0-docs",previous:{title:"DateTimePicker",permalink:"/kuc-docusaurus-v2/ja/docs/1.6.0/components/desktop/datetime-picker"},next:{title:"Dropdown",permalink:"/kuc-docusaurus-v2/ja/docs/1.6.0/components/desktop/dropdown"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],c={toc:d},m="wrapper";function s(t){let{components:e,...A}=t;return(0,r.kt)(m,(0,a.Z)({},c,A,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Dialog \u306f\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.a,{mdxType:"DialogComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"content \u9818\u57df\u5de6\u4e0a\u306b\u8868\u793a\u3059\u308b\u30a2\u30a4\u30b3\u30f3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u4e0b\u3092\u6307\u5b9a\u3067\u304d\u308b:",(0,r.kt)("li",null,'"info" : ',(0,r.kt)("img",{alt:"info",src:n(25003).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"success" : ',(0,r.kt)("img",{alt:"success",src:n(99188).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"error" : ',(0,r.kt)("img",{alt:"error",src:n(48817).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"warning" : ',(0,r.kt)("img",{alt:"warning",src:n(4447).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"question" : ',(0,r.kt)("img",{alt:"question",src:n(29956).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"" : \u30a2\u30a4\u30b3\u30f3\u306a\u3057'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Header \u306e\u30bf\u30a4\u30c8\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Content \u306e DOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u304c\u8a18\u8f09\u3055\u308c\u305f string \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b HTML \u306b\u5909\u63db\u3057\u3066\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"footer *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Footer \u306e DOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u304c\u8a18\u8f09\u3055\u308c\u305f string \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b HTML \u306b\u5909\u63db\u3057\u3066\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u308b")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"*1: kintone UI Component \u306f\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u3092\u5185\u90e8\u7684\u306b\u30b5\u30cb\u30bf\u30a4\u30ba\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u30fc\u5165\u529b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3088\u3046\u306a\u5b9f\u88c5\u3067\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u958b\u767a\u8005\u81ea\u8eab\u3067 XSS \u5bfe\u7b56\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u9589\u3058\u3089\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Dialog(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"open"},"open()"),(0,r.kt)("p",null,"Dialog \u3092\u8868\u793a\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-1"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("h4",{id:"close"},"close()"),(0,r.kt)("p",null,"Dialog \u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-2"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return-1"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/ja/docs/1.6.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst dialog = new Kuc.Dialog({\n  title:  'Title',\n  content: '<div>This is Content</div>',\n  footer: 'Footer',\n  icon: 'info'\n});\n\ndialog.addEventListener('close', event => {\n  console.log(event);\n});\n\ndialog.open();\ndialog.close();\n")))}s.isMDXComponent=!0},48817:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAAN9QQORKOudMPOZNPeVMPOhNPedLO+hMPOdMPOhMPOdLO+hMPOdMPOhURexwY+14bO15bfOooPSvp/W1r/ra1/rf3Pve3Pvj4fzm5Pzo5fzo5v///104GHUAAAANdFJOUwAQMEBQgI+fr7/P3+//B4LmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAo0lEQVQoU1WP6xYCIQiEcW/aisvWZrnl+z9nDHo6NT9QPhkBMo3zyrwuQ8tUbkldSydD7EDFI4hbe2piILg2QSqbhkA0gdxeyqQcYBPNeH7WUyTXgmJP9pOmZ675ijtTa6esE0VsJ9BpPVL6GrN6jUWbQUrNu+I3WKBB43YU/Uce9zYEBTCz2KgeC/2sqP0cNvpbW20m30G6WI1p8jFxDCgh+gC1VQ6XTzxqtQAAAABJRU5ErkJggg=="},25003:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjUExURQAAAECPz0CHx0WKykSHx0OJyUKKykSJyESJyUSLy0OKykSKy0SKykSKykOKykSKykSKylCRzVuZ0Weg1HOn136v24q23pa94aHE5a3M6LnT68Xa7tDi8tzp9ejw+PP4/P///xOhKp4AAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAnElEQVQoU02Q2xqDIAyDi6J4GFo3dAec9v2fcpKi33JBfnLTNgQZ6/q+sUZ/SXZglcuBaXNwyBeIzuSRniElFf7M8/5N1hyRR8Ac5AMvqIQzT3NQcFQrhFU2pZ46+LS8ZAXxeM3b5Kngz4Gz7JNSR0YhSgx3UE2kx2wSF8BojwNB74jlddVrAOS1jb/spmcTlbmc8SwnqXJtrpDoB8aEECWvwHxCAAAAAElFTkSuQmCC"},29956:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABRUExURQAAAGBgYGhoaGVlZWRkZGZmZmVlZWZmZmdnZ2ZmZmVlZczMzL+/v9jY2KOjo2ZmZpWVlYiIiPn5+WZmZnx8fP39/WZmZnFxcf7+/mZmZv///2bTdFkAAAAZdFJOUwAQIDBAUGCPn6+/v8DAyM/P2Njf4+Pv8PCxXtwTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAnklEQVQoUz2P2RaDIAxEpyJ1qUqtGCD//6HNQjsvuczJhASmcUpE1zz6SxSW1pWG7lA3VNY4uJOzFQpirUrvD/N9KCUgas2VKzNbY8SkZeNaMvOmPOPSUs5TbLYk4fedOHsx+luV904elOh9+xbt8vGi4qnWFowOMurlFIFkoNMNVj3I6KjVusiO7FETSUwVPCta9WhXnGUXWp4PAPgCY/wXHtDEt1oAAAAASUVORK5CYII="},99188:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABdUExURQAAADDPcDDHcDDKcCzLcC3McC3KcC7LcC7LcC7Nci/Nci/Mci3McS7McS7McS7McS7McTvPekjSg1XWjG/cnXzfponir5bmuLHsyr7v08vy29j15OX57fL89v///+H3HSkAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAmklEQVQoU1XQ2RKDIAwF0KC4UvTSxVqp/P9nNoEwY++Dk5wHQ0I5xg7OjdaUTmIXlAwKZlLg+CbTRYBFpNNGMzJ5rTlbDEBDrbacLaUoI3qun1VOrhzNwOs8WN5FsMq8I6UPdhV4GRgi/4TlIYKZDH/F0veeBT2RLMNWZbW8oBRhV8lP/V/Il2tc7FbWJmr1OGs9jqQbJj0h0Q8jSxDEKlEKWwAAAABJRU5ErkJggg=="},4447:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAAP/PAP/HAP/KAP/LAP/MAP/KAP/LAP/LAP/NAP/NAP/MAP/MAP/MAP/MAP/MADMzM0A9MGZZJnNjI4x2HZmAGaaJFr+cEMymDdmvCuW5BvLCA//MAOM429UAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAl0lEQVQoU02Q3RaDIAyDi6L4M6RO3WT2/Z9z0NRzzA0fuWibkMr5MM+Dd/hV+UWgYIYbzSiKjVrqXDn/6rtUp6skF/OuMBQrKhXroyANtQBZ+QsI1APkzRkw0wSQnXW8SMK+omyjJNrChyZyRsd2AnoihDmZN4XkS0ClctehUE+9F+CGiDYesV+ITdRaOekup6oLo1VI9AfQ6RejphO2ewAAAABJRU5ErkJggg=="}}]);