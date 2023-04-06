"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[46695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},r=void 0,l={unversionedId:"getting-started/quick-start",id:"version-1.8.0/getting-started/quick-start",title:"Quick Start",description:"What is Kintone UI Component?",source:"@site/versioned_docs/version-1.8.0/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/kuc-docusaurus-v2/docs/1.8.0/getting-started/quick-start",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},sidebar:"version-1.8.0-docs",next:{title:"Custom CSS",permalink:"/kuc-docusaurus-v2/docs/1.8.0/getting-started/custom-css"}},s={},p=[{value:"What is Kintone UI Component?",id:"what-is-kintone-ui-component",level:2},{value:"Example for Desktop components",id:"example-for-desktop-components",level:3},{value:"Example for Mobile components",id:"example-for-mobile-components",level:3},{value:"Preparation: Create App",id:"preparation-create-app",level:2},{value:"Installation",id:"installation",level:2},{value:"Use the UMD",id:"use-the-umd",level:3},{value:"Use the CDN",id:"use-the-cdn",level:3},{value:"Use the npm package",id:"use-the-npm-package",level:3},{value:"Browser support status",id:"browser-support-status",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-kintone-ui-component"},"What is Kintone UI Component?"),(0,o.kt)("p",null,"Kintone UI Component is a library that enables Kintone developers to build forms with Kintone's styling with ease."),(0,o.kt)("h3",{id:"example-for-desktop-components"},"Example for Desktop components"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"desktop components",src:n(81946).Z,width:"450",height:"463"})),(0,o.kt)("h3",{id:"example-for-mobile-components"},"Example for Mobile components"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mobile components",src:n(28042).Z,width:"350",height:"437"})),(0,o.kt)("h2",{id:"preparation-create-app"},"Preparation: Create App"),(0,o.kt)("p",null,"In this tutorial, you will place a Button component inside the header menu space on the Record List page of a Kintone app."),(0,o.kt)("p",null,"First, follow the below steps to create an app to install Kintone UI Component."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a blank app. (",(0,o.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/create_app/tutorial.html"},"Creating an App from Scratch"),")",(0,o.kt)("br",null),"\nYou do not need to set up any fields in this app.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Kintone UI Component supports installation via a UMD, a CDN, or a npm package.",(0,o.kt)("br",null),"\nYou can choose to import or implement the library according to the environment such as the browser environment or Node.js environment.",(0,o.kt)("br",null),"\nIn this article, we will show you how to install and implement using each approach."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend that you should upgrade Kintone UI Component to the latest version for your projects.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See the Components section in the sidebar for more details on each component.",(0,o.kt)("br",null),"\n(Additional components will be added in order.)")),(0,o.kt)("h3",{id:"use-the-umd"},"Use the UMD"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When using a version on and after v1.4.0, please use ",(0,o.kt)("inlineCode",{parentName:"p"},'Kucs["1.x.x"]')," instead of Kuc and specify your expected version (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},'new Kucs["1.4.0"].Button()'),").",(0,o.kt)("br",null),"\nThe rendered components' tags and class names will include the version number.",(0,o.kt)("br",null),"\nYou may still use ",(0,o.kt)("inlineCode",{parentName:"p"},"Kuc")," as a global variable but ",(0,o.kt)("strong",{parentName:"p"},"note that it may be conflicting when adding two or more ",(0,o.kt)("inlineCode",{parentName:"strong"},"kuc.min.js")," files")," on Kintone customization or plug-in. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kuc")," object refers to the last loaded ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file.",(0,o.kt)("br",null),"\nIn case that there is only one ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file in the Kintone system or there is no problem with using last loaded ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file, you can use Kuc object. Please remove ",(0,o.kt)("inlineCode",{parentName:"p"},"const Kuc = Kucs['1.x.x'];")," line.\nWhen using a version before v1.4.0, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"Kuc")," as a global variable but ",(0,o.kt)("strong",{parentName:"p"},"note that it may be conflicting when adding two or more ",(0,o.kt)("inlineCode",{parentName:"strong"},"kuc.min.js")," files")," on Kintone customization or plug-in.",(0,o.kt)("br",null),"\nPlease read this ",(0,o.kt)("a",{parentName:"p",href:"../guides/version-conflicts-issue-solution"},"Version conflicts issue and solution")," article for more information!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the file located inside Kintone UI Component repository's ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kintone-labs/kintone-ui-component/releases"},"each version Release field"),". Unzip the attached archives folder (kintone-ui-component-{version} .tgz). Upload the following file to the ",(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," inside Kintone's app setting.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./umd/kuc.min.js\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," file.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you only have one ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file in your system, or you are okay with using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js"),' file loaded last, you can remove the "',(0,o.kt)("inlineCode",{parentName:"p"},"const Kuc = Kucs['1.x.x']"),'" line.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Kuc = Kucs[\"1.x.x\"];\n\nkintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To apply the customization, upload ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," file to the ",(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," inside the Kintone app settings. (",(0,o.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"button customize",src:n(66486).Z,width:"1100",height:"422"})),(0,o.kt)("h3",{id:"use-the-cdn"},"Use the CDN"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See the guidance and sample code at ",(0,o.kt)("a",{parentName:"p",href:"#use-the-umd"},"Use UMD")," section.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following CDN URL into the ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript and CSS Customization")," of a deployed Kintone app. (",(0,o.kt)("a",{parentName:"p",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")",(0,o.kt)("br",null),"\nOnce the CDN is being imported to the app, you will have access to the global object of ",(0,o.kt)("inlineCode",{parentName:"p"},"Kuc"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the latest version of Kintone UI Component:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/kintone-ui-component/umd/kuc.min.js\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to import a particular version, specify the version number after the project name."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following is the same as the UMD."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.",(0,o.kt)("br",null),"\nIn the production environment, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," of the UMD to avoid any failures and problems related to unpkg.")),(0,o.kt)("h3",{id:"use-the-npm-package"},"Use the npm package"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When using on and after v1.4.0, rendered components' tags and class names will include the version number.",(0,o.kt)("br",null),"\nPlease read this ",(0,o.kt)("a",{parentName:"p",href:"../guides/version-conflicts-issue-solution"},"Version conflicts issue and solution")," article for more information! ",(0,o.kt)("br",null))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a folder name ",(0,o.kt)("inlineCode",{parentName:"li"},"customization"),", and move your root into the folder, then execute the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir customization && cd customization\nnpm init -y\nnpm install kintone-ui-component\nnpm install webpack webpack-cli --save-dev\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If necessary, install ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Import the components you want to use, and create a ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," files under ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'kintone-ui-component/lib/button';\n\nkintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the following ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," file into the root:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = (env = {}) => {\n  return {\n    entry: {\n      \"customization\": './src/index.js'\n    },\n    output: {\n      path: path.resolve(__dirname, 'dist'),\n      filename: '[name].min.js',\n    }\n  }\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add webpack build script into ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "build:webpack": "webpack --mode production",\n  ...\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Execute the following command to generate a file for customization:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"npm run build:webpack\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Output Result\uff1a\n./dist/customization.min.js\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Upload the bundled file created in the previous step to the ",(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript and CSS Customization")," option inside Kintone app settings. (",(0,o.kt)("a",{parentName:"li",href:"https://get.kintone.help/k/en/user/app_settings/js_customize.html"},"Customizing an App with JavaScript and CSS"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"button customize",src:n(66486).Z,width:"1100",height:"422"})),(0,o.kt)("h2",{id:"browser-support-status"},"Browser support status"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Chrome"),(0,o.kt)("th",null,"Safari"),(0,o.kt)("th",null,"Firefox"),(0,o.kt)("th",null,"Edge")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u25cb"),(0,o.kt)("td",null,"\u25cb"),(0,o.kt)("td",null,"\u25cb"),(0,o.kt)("td",null,"\u25cb"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The components have been tested in the latest version of each supported browser.\nYou can preview the components in the Overview section in each component's reference page.")))}m.isMDXComponent=!0},66486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/button_customize-fac19f838e2df23103a3a18b4c6dfafa.png"},81946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/desktop_components-7e041db73496daf1645f1b973c675a83.png"},28042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mobile_components-00733770677229e424a53ef5386ef40d.png"}}]);