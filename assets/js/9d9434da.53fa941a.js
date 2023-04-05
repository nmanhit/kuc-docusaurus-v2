"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[74559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"usage-with-typescript",title:"Usage with TypeScript",sidebar_label:"Usage with TypeScript",original_id:"usage-with-typescript"},i=void 0,p={unversionedId:"getting-started/usage-with-typescript",id:"version-1.9.0/getting-started/usage-with-typescript",title:"Usage with TypeScript",description:"Overview",source:"@site/versioned_docs/version-1.9.0/getting-started/usage-with-typescript.md",sourceDirName:"getting-started",slug:"/getting-started/usage-with-typescript",permalink:"/docs/1.9.0/getting-started/usage-with-typescript",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"usage-with-typescript",title:"Usage with TypeScript",sidebar_label:"Usage with TypeScript",original_id:"usage-with-typescript"},sidebar:"version-1.9.0-docs",previous:{title:"Custom CSS",permalink:"/docs/1.9.0/getting-started/custom-css"},next:{title:"Attachment",permalink:"/docs/1.9.0/components/desktop/attachment"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Install and configuration",id:"install-and-configuration",level:2},{value:"Import KUC",id:"import-kuc",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"You can add static typing to JavaScript to improve developer productivity and code quality thanks to TypeScript.",(0,o.kt)("br",null),"\nIn this guide, you can learn how to integrate Kintone UI Component (KUC) with TypeScript and webpack."),(0,o.kt)("h2",{id:"install-and-configuration"},"Install and configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As initialization, create a new KUC project named ",(0,o.kt)("inlineCode",{parentName:"li"},"kuc-demo-ts")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir kuc-demo-ts\ncd kuc-demo-ts\nnpm init -y\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," locally and install ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack-cli")," (the tool used to run webpack on the command line).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack webpack-cli\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install the TypeScript compiler and loader.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript ts-loader\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Assuming you have successfully created a project with the following structure.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kuc-demo-ts\n  |- dist\n    |- index.html\n  |- /src\n    |- index.ts\n  |- package.json\n  |- package-lock.json\n  |- webpack.config.js\n  |- tsconfig.json\n")),(0,o.kt)("p",null,"You can refer to the files and their contents at the sample project using TypeScript on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/tree/master/demos/typescript-app"},"KUC repository"),"."),(0,o.kt)("h2",{id:"import-kuc"},"Import KUC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"kintone-ui-component"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install kintone-ui-component\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.ts"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Dropdown, DropdownProps, DropdownItem, DropdownChangeEventDetail } from 'kintone-ui-component';\n\nconst root = document.getElementById('root');\nconst items: DropdownItem[] = [\n  {\n    label: '-----',\n    value: '-----',\n  },\n  {\n    label: 'Orange',\n    value: 'orange',\n  },\n  {\n    label: 'Banana',\n    value: 'banana',\n  },\n];\nconst dropdownProps: DropdownProps = {\n  items: items,\n  value: '-----',\n  label: 'Fruit',\n  error: 'Error occurred!',\n};\nconst dropdown = new Dropdown(dropdownProps);\ndropdown.addEventListener('change', ((event: CustomEvent) => {\n  const detail: DropdownChangeEventDetail = event.detail;\n  console.log(detail);\n}) as EventListener);\nroot.appendChild(dropdown);\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now run the following command to build.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in your browser and, if everything went right, you can see a Dropdown component displayed on the page.\n",(0,o.kt)("img",{alt:"dropdown image",src:n(39233).Z,width:"436",height:"294"}),"\nKUC is written in TypeScript with complete definitions, so please try it out and enjoy the property suggestion and typing check."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dropdown param image",src:n(97335).Z,width:"1310",height:"224"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dropdown props image",src:n(43421).Z,width:"996",height:"614"})),(0,o.kt)("p",null,"You can choose any component of KUC to develop your application.\nNow you can use some type of definition in your project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Items property (ex: DropdownItem)"),(0,o.kt)("li",{parentName:"ul"},"Component property (ex: DropdownProps, DatePickerProps)"),(0,o.kt)("li",{parentName:"ul"},"CustomEvent.detail property (ex: DropdownChangeEventDetail)")))}u.isMDXComponent=!0},97335:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-param-b3bc49d96dd2e508cee3b498280d1c2f.png"},43421:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-props-78ed7f9f33de99f0e9d794bcaff66234.png"},39233:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kuc-dropdown-0bdecbd78ebc2d9466733b4f078915de.png"}}]);