"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[13052],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return a?n.createElement(f,i(i({ref:e},m),{},{components:a})):n.createElement(f,i({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46977:(t,e,a)=>{a.d(e,{V:()=>r});var n=a(67294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kucs["1.10.0"].ReadOnlyTable({rowsPerPage:3,pagination:!0,columns:[{title:"Number",field:"index"},{title:"City",field:"name"},{title:"Country",field:"country"},{title:"Population",field:"population"},{title:"Coordinates (lat, lng)",field:"coordinates"}],data:[{index:"1",name:"HoChiMinh",country:"Vietnam",population:"8,371,000",coordinates:"10.762622, 106.660172"},{index:"2",name:"Tokyo",country:"Japan",population:"14,000,000",coordinates:"35.689487, 139.691711"},{index:"3",name:"New York",country:"USA",population:"8,400,000",coordinates:"40.712776, -74.005974"},{index:"4",name:"Edmonton",country:"Canada",population:"981,000",coordinates:"53.544388, -113.490929"},{index:"5",name:"Sydney",country:"Australia",population:"6,000,000",coordinates:"-33.868820, 151.209290"},{index:"6",name:"Paris",country:"France",population:"2,165,423",coordinates:"48.856613, 2.352222"}]});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"readonly-table"},n.createElement("div",{id:"sample-container__components",ref:t}))}},11006:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(46977);const i={id:"readonly-table",title:"ReadOnlyTable",sidebar_label:"ReadOnlyTable",original_id:"readonly-table"},o=void 0,p={unversionedId:"components/desktop/readonly-table",id:"version-1.7.0/components/desktop/readonly-table",title:"ReadOnlyTable",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.7.0/components/desktop/readonly-table.md",sourceDirName:"components/desktop",slug:"/components/desktop/readonly-table",permalink:"/ja/docs/1.7.0/components/desktop/readonly-table",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"readonly-table",title:"ReadOnlyTable",sidebar_label:"ReadOnlyTable",original_id:"readonly-table"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],c={toc:m},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ReadOnlyTable \u306f\u3001kintone \u8a73\u7d30\u753b\u9762\u306e\u8aad\u307f\u53d6\u308a\u30c6\u30fc\u30d6\u30eb\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.V,{mdxType:"ReadOnlyTableComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"columns"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<Columns",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30fc\u30d6\u30eb\u30d8\u30c3\u30c0\u30fc\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u306e\u914d\u5217"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Columns \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"columns.header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30fc\u30d6\u30eb\u30d8\u30c3\u30c0\u30fc\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"columns.header.text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30fc\u30d6\u30eb\u30d8\u30c3\u30c0\u30fc\u306b\u8868\u793a\u3059\u308b\u6587\u5b57\u5217"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"columns.visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5217\u3054\u3068\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<Array\\<string",">",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30fc\u30d6\u30eb\u30dc\u30c7\u30a3\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u306e\u4e8c\u6b21\u5143\u914d\u5217"),(0,r.kt)("td",{parentName:"tr",align:"left"},"data, data \u5185\u306e\u5024\u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"ReadOnlyTable(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.app.record.getSpaceElement('space');\nconst readOnlyTable = new Kuc.ReadOnlyTable({\n  label: 'Table',\n  columns: [\n    {\n      header: {\n        text: 'fruit',\n      },\n      visible: true\n    },\n    {\n      header: {\n        text: 'Producing area',\n      },\n      visible: true,\n    },\n    {\n      header: {\n        text: 'Price',\n      },\n      visible: true\n    }\n  ],\n  data: [\n    ['Orange', 'Ehime', '400'],\n    ['Apple', 'Aomori', '200'],\n    ['Banana', 'Tokyo', '100']\n  ],\n  className: 'options-class',\n  id: 'options-id',\n  visible: true\n});\nspace.appendChild(readOnlyTable);\n")))}u.isMDXComponent=!0}}]);