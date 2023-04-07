"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[19713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||v[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"version",title:"version",sidebar_label:"version",original_id:"version"},a=void 0,s={unversionedId:"utilities/version",id:"version-1.2.0/utilities/version",title:"version",description:"Overview",source:"@site/versioned_docs/version-1.2.0/utilities/version.md",sourceDirName:"utilities",slug:"/utilities/version",permalink:"/kuc-docusaurus-v2/docs/1.2.0/utilities/version",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"version",title:"version",sidebar_label:"version",original_id:"version"},sidebar:"version-1.2.0-docs",previous:{title:"MobileTextArea",permalink:"/kuc-docusaurus-v2/docs/1.2.0/components/mobile/mobile-textarea"},next:{title:"A commentary on the difference between v0 and v1",permalink:"/kuc-docusaurus-v2/docs/1.2.0/guides/comparison-v0-v1"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"Use the UMD",id:"use-the-umd",level:3},{value:"Use the npm package",id:"use-the-npm-package",level:3}],u={toc:c},p="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The version feature allows the user to retrieve the version information of the package."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"You can retrieve the package's version information of the version property value in package.json."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"Here is a sample code when accessing the version information:"),(0,o.kt)("h3",{id:"use-the-umd"},"Use the UMD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Kuc.version);\n")),(0,o.kt)("h3",{id:"use-the-npm-package"},"Use the npm package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { version } from "kintone-ui-component/lib/version";\nconsole.log(version);\n')))}v.isMDXComponent=!0}}]);