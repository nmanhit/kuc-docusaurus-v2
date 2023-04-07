"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[43533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"usage-with-typescript",title:"Usage with TypeScript",sidebar_label:"Usage with TypeScript",original_id:"usage-with-typescript"},i=void 0,p={unversionedId:"getting-started/usage-with-typescript",id:"version-1.10.0/getting-started/usage-with-typescript",title:"Usage with TypeScript",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.10.0/getting-started/usage-with-typescript.md",sourceDirName:"getting-started",slug:"/getting-started/usage-with-typescript",permalink:"/kuc-docusaurus-v2/ja/docs/getting-started/usage-with-typescript",draft:!1,tags:[],version:"1.10.0",frontMatter:{id:"usage-with-typescript",title:"Usage with TypeScript",sidebar_label:"Usage with TypeScript",original_id:"usage-with-typescript"},sidebar:"version-1.10.0-docs",previous:{title:"Custom CSS",permalink:"/kuc-docusaurus-v2/ja/docs/getting-started/custom-css"},next:{title:"Attachment",permalink:"/kuc-docusaurus-v2/ja/docs/components/desktop/attachment"}},l={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u69cb\u6210",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u69cb\u6210",level:2},{value:"KUC \u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"kuc-\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"TypeScript \u3092\u4f7f\u3046\u3068\u3001JavaScript \u306b\u9759\u7684\u578b\u4ed8\u3051\u3092\u8ffd\u52a0\u3057\u3066\u958b\u767a\u8005\u306e\u751f\u7523\u6027\u3068\u30b3\u30fc\u30c9\u306e\u54c1\u8cea\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001TypeScript \u3068 webpack \u3092\u4f7f\u3063\u3066 kintone UI Component\uff08KUC\uff09\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u65b9\u6cd5\u3092\u5b66\u7fd2\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u69cb\u6210"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u69cb\u6210"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm")," \u3092\u4f7f\u7528\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"li"},"kuc-demo-ts")," \u3068\u3044\u3046\u540d\u524d\u306e\u65b0\u3057\u3044 KUC \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir kuc-demo-ts\ncd kuc-demo-ts\nnpm init -y\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"webpack")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack-cli")," (\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067 webpack \u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c4\u30fc\u30eb) \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev webpack webpack-cli\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"TypeScript \u30b3\u30f3\u30d1\u30a4\u30e9\u3068\u30ed\u30fc\u30c0\u30fc\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev typescript ts-loader\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u6b21\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kuc-demo-ts\n  |- dist\n    |- index.html\n  |- /src\n    |- index.ts\n  |- package.json\n  |- package-lock.json\n  |- webpack.config.js\n  |- tsconfig.json\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/tree/master/demos/typescript-app"},"KUC \u30ea\u30dd\u30b8\u30c8\u30ea"),"\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3066\u30d5\u30a1\u30a4\u30eb\u3068\u305d\u306e\u8a2d\u5b9a\u5185\u5bb9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"kuc-\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"},"KUC \u306e\u30a4\u30f3\u30dd\u30fc\u30c8"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kintone-ui-component")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install kintone-ui-component\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"src/index.ts")," \u3092\u7de8\u96c6\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Dropdown, DropdownProps, DropdownItem, DropdownChangeEventDetail } from 'kintone-ui-component';\n\nconst root = document.getElementById('root');\nconst items: DropdownItem[] = [\n  {\n    label: '-----',\n    value: '-----',\n  },\n  {\n    label: 'Orange',\n    value: 'orange',\n  },\n  {\n    label: 'Banana',\n    value: 'banana',\n  },\n];\nconst dropdownProps: DropdownProps = {\n  items: items,\n  value: '-----',\n  label: 'Fruit',\n  error: 'Error occurred!',\n};\nconst dropdown = new Dropdown(dropdownProps);\ndropdown.addEventListener('change', ((event: CustomEvent) => {\n  const detail: DropdownChangeEventDetail = event.detail;\n  console.log(detail);\n}) as EventListener);\nroot.appendChild(dropdown);\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u30d3\u30eb\u30c9\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," \u3092\u958b\u304d\u307e\u3059\u3002\u554f\u984c\u304c\u306a\u3051\u308c\u3070\u3001\u30da\u30fc\u30b8\u306b Dropdown \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n",(0,a.kt)("img",{alt:"dropdown image",src:n(52677).Z,width:"436",height:"294"}),"\nKUC \u306f TypeScript \u3067\u66f8\u304b\u308c\u3066\u3044\u3066\u578b\u5b9a\u7fa9\u3082\u5145\u5b9f\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u30b5\u30b8\u30a7\u30b9\u30c1\u30e7\u30f3\u3084\u578b\u30c1\u30a7\u30c3\u30af\u3092\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dropdown param image",src:n(45593).Z,width:"1310",height:"224"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dropdown props image",src:n(66316).Z,width:"996",height:"614"})),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306b\u3001KUC \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u81ea\u7531\u306b\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u578b\u5b9a\u7fa9\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Items \u30d7\u30ed\u30d1\u30c6\u30a3 (ex: DropdownItem)"),(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3 (ex: DropdownProps, DatePickerProps)"),(0,a.kt)("li",{parentName:"ul"},"CustomEvent.detail \u30d7\u30ed\u30d1\u30c6\u30a3\uff08ex: DropdownChangeEventDetail\uff09")))}u.isMDXComponent=!0},45593:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-param-b3bc49d96dd2e508cee3b498280d1c2f.png"},66316:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-props-78ed7f9f33de99f0e9d794bcaff66234.png"},52677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-0bdecbd78ebc2d9466733b4f078915de.png"}}]);