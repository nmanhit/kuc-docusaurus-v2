"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[92563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},r=void 0,l={unversionedId:"getting-started/quick-start",id:"version-1.2.0/getting-started/quick-start",title:"Quick Start",description:"What is Kintone UI Component?",source:"@site/versioned_docs/version-1.2.0/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/1.2.0/getting-started/quick-start",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},sidebar:"version-1.2.0-docs",next:{title:"Button",permalink:"/docs/1.2.0/components/desktop/button"}},p={},s=[{value:"What is Kintone UI Component?",id:"what-is-kintone-ui-component",level:2},{value:"Example for Desktop components",id:"example-for-desktop-components",level:3},{value:"Example for Mobile components",id:"example-for-mobile-components",level:3},{value:"Preparation: Create App",id:"preparation-create-app",level:2},{value:"Installation",id:"installation",level:2},{value:"Use the UMD",id:"use-the-umd",level:3},{value:"Use the CDN",id:"use-the-cdn",level:3},{value:"Use the npm package",id:"use-the-npm-package",level:3},{value:"Browser support status",id:"browser-support-status",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-kintone-ui-component"},"What is Kintone UI Component?"),(0,a.kt)("p",null,"Kintone UI Component is a library that enables Kintone developers to build forms with Kintone's styling with ease."),(0,a.kt)("h3",{id:"example-for-desktop-components"},"Example for Desktop components"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"desktop components",src:n(81946).Z,width:"450",height:"463"})),(0,a.kt)("h3",{id:"example-for-mobile-components"},"Example for Mobile components"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mobile components",src:n(28042).Z,width:"350",height:"437"})),(0,a.kt)("h2",{id:"preparation-create-app"},"Preparation: Create App"),(0,a.kt)("p",null,"In this tutorial, you will place a Button component inside the header menu space on the Record List page of a Kintone app."),(0,a.kt)("p",null,"First, follow the below steps to create an app to install Kintone UI Component."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a blank app. (",(0,a.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/create_app/tutorial.html"},"Creating an App from Scratch"),")",(0,a.kt)("br",null),"\nYou do not need to set up any fields in this app.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Kintone UI Component supports installation via a UMD, a CDN, or a npm package.",(0,a.kt)("br",null),"\nYou can choose to import or implement the library according to the environment such as the browser environment or Node.js environment.",(0,a.kt)("br",null),"\nIn this article, we will show you how to install and implement using each approach."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See the Components section in the sidebar for more details on each component.",(0,a.kt)("br",null),"\n(Additional components will be added in order.)")),(0,a.kt)("h3",{id:"use-the-umd"},"Use the UMD"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the file located inside Kintone UI Component repository's ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kintone-labs/kintone-ui-component/releases"},"each version Release field"),". Unzip the attached archives folder (kintone-ui-component-{version} .tgz). Upload the following file to the ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," inside Kintone's app setting.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"./umd/kuc.min.js\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"kintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"To apply the customization, upload ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," file to the ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," inside the Kintone app settings. (",(0,a.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button customize",src:n(66486).Z,width:"1100",height:"422"})),(0,a.kt)("h3",{id:"use-the-cdn"},"Use the CDN"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following CDN URL into the ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript and CSS Customization")," of a deployed Kintone app. (",(0,a.kt)("a",{parentName:"p",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")",(0,a.kt)("br",null),"\nOnce the CDN is being imported to the app, you will have access to the global object of ",(0,a.kt)("inlineCode",{parentName:"p"},"Kuc"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the latest version of Kintone UI Component:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/browse/kintone-ui-component/umd/kuc.min.js\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want to import a particular version, specify the version number after the project name."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/browse/kintone-ui-component@1.0.0/umd/kuc.min.js\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The following is the same as the UMD."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.",(0,a.kt)("br",null),"\nIn the production environment, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," of the UMD to avoid any failures and problems related to unpkg.")),(0,a.kt)("h3",{id:"use-the-npm-package"},"Use the npm package"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a folder name ",(0,a.kt)("inlineCode",{parentName:"li"},"my-customization"),", and move your root into the folder, then execute the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-customization && cd my-customization\nnpm install kintone-ui-component\nnpm install webpack\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If necessary, install ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-loader")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"css-loader"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Import the components you want to use, and create a ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," files under ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," folder.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'kintone-ui-component/lib/button';\n\nkintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add the following ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," file into the root:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nconst path = require('path');\nmodule.exports = (env = {}) => {\n  return {\n    entry: {\n      \"my-customization\": './src/index.js'\n    },\n    output: {\n      path: path.resolve(__dirname, 'dist'),\n      filename: '[name].min.js',\n    },\n    watch: env.watch\n  }\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Add webpack build script into ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "build:webpack": "cross-env NODE_ENV=production webpack",\n  ...\n}\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Execute the following command to generate a file for customization:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"npm run build:webpack\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Output Result\uff1a\n./dist/my-customization.min.js\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Upload the bundled file created in the previous step to the ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," option inside Kintone app settings. (",(0,a.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button customize",src:n(66486).Z,width:"1100",height:"422"})),(0,a.kt)("h2",{id:"browser-support-status"},"Browser support status"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chrome"),(0,a.kt)("th",null,"Safari"),(0,a.kt)("th",null,"Firefox"),(0,a.kt)("th",null,"Edge"),(0,a.kt)("th",null,"IE11")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u25cb"),(0,a.kt)("td",null,"\u25cb"),(0,a.kt)("td",null,"\u25cb"),(0,a.kt)("td",null,"\u25cb"),(0,a.kt)("td",null,"\u25b3"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The components have been tested in the latest version of each supported browser.",(0,a.kt)("br",null),"\nKintone UI Component v1 does not work properly in IE11 due to the balance with the library currently used by Kintone.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can preview the components in the Overview section in each component's reference page.",(0,a.kt)("br",null),"\nPlease be noted that it is not supported in IE11.")))}m.isMDXComponent=!0},66486:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/button_customize-fac19f838e2df23103a3a18b4c6dfafa.png"},81946:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/desktop_components-7e041db73496daf1645f1b973c675a83.png"},28042:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mobile_components-00733770677229e424a53ef5386ef40d.png"}}]);