"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[33091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?o.createElement(v,r(r({ref:n},c),{},{components:t})):o.createElement(v,r({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:i,r[1]=a;for(var u=2;u<s;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=t(87462),i=(t(67294),t(3905));const s={id:"version-conflicts-issue-solution",title:"Version conflicts issue and solution",sidebar_label:"Version conflicts issue and solution",original_id:"version-conflicts-issue-solution"},r=void 0,a={unversionedId:"guides/version-conflicts-issue-solution",id:"version-1.7.0/guides/version-conflicts-issue-solution",title:"Version conflicts issue and solution",description:"Overview",source:"@site/versioned_docs/version-1.7.0/guides/version-conflicts-issue-solution.md",sourceDirName:"guides",slug:"/guides/version-conflicts-issue-solution",permalink:"/kuc-docusaurus-v2/docs/1.7.0/guides/version-conflicts-issue-solution",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"version-conflicts-issue-solution",title:"Version conflicts issue and solution",sidebar_label:"Version conflicts issue and solution",original_id:"version-conflicts-issue-solution"},sidebar:"version-1.7.0-docs",previous:{title:"Format setting plug-in",permalink:"/kuc-docusaurus-v2/docs/1.7.0/guides/format-setting-plugin"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Problems of version conflicts",id:"problems-of-version-conflicts",level:2},{value:"Solution",id:"solution",level:2},{value:"Upgrading to the latest version",id:"upgrading-to-the-latest-version",level:2},{value:"Using UMD",id:"using-umd",level:3},{value:"Using CDN",id:"using-cdn",level:3},{value:"Using npm",id:"using-npm",level:3},{value:"Case study",id:"case-study",level:2},{value:"For users using versions before v1.4.0",id:"for-users-using-versions-before-v140",level:3},{value:"When importing multiple KUC packages and files (both ESM and UMD) of the same version or different versions:",id:"when-importing-multiple-kuc-packages-and-files-both-esm-and-umd-of-the-same-version-or-different-versions",level:4},{value:"For users using version on and after v1.4.0",id:"for-users-using-version-on-and-after-v140",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...s}=e;return(0,i.kt)(d,(0,o.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Version conflicts have been a problem for Kintone UI Component (KUC) users before the release of v1.4.0.",(0,i.kt)("br",null),"\nThis guide will help users understand the version conflicts issue and how to adapt and upgrade the KUC package to the latest version starting from v1.4.0."),(0,i.kt)("h2",{id:"problems-of-version-conflicts"},"Problems of version conflicts"),(0,i.kt)("p",null,"It is a problem that the version conflicts error occurs and the component cannot render successfully when an app uses multiple KUC packages of the same version or different versions.",(0,i.kt)("br",null),"\nThis issue occurs in both UMD and ESM ways.",(0,i.kt)("br",null),"\nFor KUC, we use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"Web Components")," and create a component defining a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"custom HTML tag"),".",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry"},"CustomElementRegistry")," that we use in that case is a global window object and we cannot define an already registered custom HTML tag again with Web Components.",(0,i.kt)("br",null),"\nWhen a KUC package tries to register a custom HTML tag, and a later loaded package also tries to define the same tag again, the rendering problem occurs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Multiple packages try to define the same custom HTML tag",src:t(27489).Z,width:"821",height:"311"})),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Because we cannot register the same custom HTML tag more than once, from v1.4.0, custom HTML tags will include a version number at the end. This change also applies to class names to avoid conflicting CSS styles."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Custom HTML tag example",src:t(22050).Z,width:"1324",height:"230"})),(0,i.kt)("center",null,"Tag and class names will include the version number at the end"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CSS example",src:t(43179).Z,width:"994",height:"528"})),(0,i.kt)("center",null,"CSS of the component also changes to include the version number"),(0,i.kt)("p",null,"In addition, we also check to see whether a custom HTML tag has been registered or not before defining it."),(0,i.kt)("h2",{id:"upgrading-to-the-latest-version"},"Upgrading to the latest version"),(0,i.kt)("p",null,"We recommend that you should upgrade KUC to the latest version for your projects."),(0,i.kt)("h3",{id:"using-umd"},"Using UMD"),(0,i.kt)("p",null,"When using a version on and after v1.4.0, please use ",(0,i.kt)("inlineCode",{parentName:"p"},'Kucs["1.x.x"]')," instead of Kuc and specify your expected version (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},'new Kucs["1.4.0"].Button()'),").",(0,i.kt)("br",null),"\nThe rendered components' tags and class names will include the version number. See the ",(0,i.kt)("a",{parentName:"p",href:"#solution"},"Solution")," section."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You may still use ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," as a global variable but ",(0,i.kt)("strong",{parentName:"p"},"note that it may be conflicting when adding two or more ",(0,i.kt)("inlineCode",{parentName:"strong"},"kuc.min.js")," files")," on Kintone customization or plug-in. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," object refers to the last loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file.",(0,i.kt)("br",null),"\nIn case that there is only one ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file in the Kintone system or there is no problem with using last loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file, you can use Kuc object. Please remove ",(0,i.kt)("inlineCode",{parentName:"p"},"const Kuc = Kucs['1.x.x'];")," line.")),(0,i.kt)("p",null,"When using a version before v1.4.0, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," as a global variable but ",(0,i.kt)("strong",{parentName:"p"},"note that it may be conflicting when adding two or more ",(0,i.kt)("inlineCode",{parentName:"strong"},"kuc.min.js")," files")," on Kintone customization or plug-in.",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst button = new Kuc.Button({text: 'Button', type: 'submit'});\ndocument.body.appendChild(button);\n")),(0,i.kt)("h3",{id:"using-cdn"},"Using CDN"),(0,i.kt)("p",null,"See the guidance and sample code at ",(0,i.kt)("a",{parentName:"p",href:"#using-umd"},"Using UMD")," section. CDN behavior is the same with using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file."),(0,i.kt)("h3",{id:"using-npm"},"Using npm"),(0,i.kt)("p",null,"Users using the KUC package through npm do not need to take any action but note the changes in how the components' tags and class names render. See the ",(0,i.kt)("a",{parentName:"p",href:"#solution"},"Solution")," section."),(0,i.kt)("h2",{id:"case-study"},"Case study"),(0,i.kt)("h3",{id:"for-users-using-versions-before-v140"},"For users using versions before v1.4.0"),(0,i.kt)("p",null,"When using a version before v1.4.0, the below version conflicts errors might occur:"),(0,i.kt)("h4",{id:"when-importing-multiple-kuc-packages-and-files-both-esm-and-umd-of-the-same-version-or-different-versions"},"When importing multiple KUC packages and files (both ESM and UMD) of the same version or different versions:"),(0,i.kt)("p",null,"For example, we load the v1.2.0 ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file in the Kintone system and the v1.3.0 ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," file in our app. An ",(0,i.kt)("inlineCode",{parentName:"p"},"Illegal constructor")," error will show when we try to create a new KUC Button component."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Illegal constructor error when importing multiple kuc.min.js files",src:t(77318).Z,width:"644",height:"721"})),(0,i.kt)("h3",{id:"for-users-using-version-on-and-after-v140"},"For users using version on and after v1.4.0"),(0,i.kt)("p",null,"When using a version on and after v1.4.0, loading multiple KUC packages (ESM) of the same version or different versions will not cause version conflicts errors anymore."),(0,i.kt)("p",null,"However, please note that when loading multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," files (UMD), only ",(0,i.kt)("strong",{parentName:"p"},"the last loaded")," one is used if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," instead of the recommended ",(0,i.kt)("inlineCode",{parentName:"p"},"Kucs")," object. Please note that it may not be the version you wanted."),(0,i.kt)("p",null,"When there are both versions before and on/after v1.4.0, you need to be careful.",(0,i.kt)("br",null)),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The case importing a version on and after v1.4.0 last")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"v1.4.0 > v1.3.2 > v1.4.x: ",(0,i.kt)("inlineCode",{parentName:"li"},"window.Kuc.version")," returns 1.4.x and no errors"),(0,i.kt)("li",{parentName:"ul"},"v1.4.0 > v1.4.x > v1.4.0: ",(0,i.kt)("inlineCode",{parentName:"li"},"window.Kuc.version")," returns 1.4.0 and no errors")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The case importing a version before v1.4.0 last")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"v1.4.0 > v1.3.2 > v1.3.0: ",(0,i.kt)("inlineCode",{parentName:"li"},"window.Kuc.version")," returns 1.3.0 and an ",(0,i.kt)("inlineCode",{parentName:"li"},"Illegal constructor")," error occurs"),(0,i.kt)("li",{parentName:"ul"},"v1.3.2 > v1.4.0 > v1.3.2: ",(0,i.kt)("inlineCode",{parentName:"li"},"window.Kuc.version")," returns 1.3.2 and an ",(0,i.kt)("inlineCode",{parentName:"li"},"Illegal constructor")," error occurs")),(0,i.kt)("p",null,"In summary, when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," object, it will occur an error in case that the last loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," is the version before v1.4.0."),(0,i.kt)("p",null,"If you have any questions, please submit on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"},"GitHub issue"),"."))}p.isMDXComponent=!0},77318:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/UMD_multi_files-95aad2070d8d56b66d1bc5e500e4e7f7.jpeg"},43179:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/version-conflict-css-0b6cfa9d79e35c2b71ea1586a76dfdfb.png"},27489:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/version-conflict-diagram-e7c7c7012c3f800aa4938c6d308f492b.jpeg"},22050:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/version-conflict-html-tag-064d278ce2da99e079df9f69b3506b43.png"}}]);