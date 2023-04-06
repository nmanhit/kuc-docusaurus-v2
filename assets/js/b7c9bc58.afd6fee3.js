"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[18468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"release-notes-v1.4.0",title:"v1.4.0 Release Notes",sidebar_label:"v1.4.0 Release Notes",original_id:"release-notes-v1.4.0"},i=void 0,l={unversionedId:"releases/release-notes-v1.4.0",id:"releases/release-notes-v1.4.0",title:"v1.4.0 Release Notes",description:"Overview",source:"@site/docs/releases/release-notes-v1.4.0.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.4.0",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.4.0",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.4.0",title:"v1.4.0 Release Notes",sidebar_label:"v1.4.0 Release Notes",original_id:"release-notes-v1.4.0"},sidebar:"tutorialSidebar",previous:{title:"v1.3.2 Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.3.2"},next:{title:"Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"New Components",id:"new-components",level:3},{value:"New Features",id:"new-features",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Here are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.4.0"},"kintone UI Component v1.4.0")," Release Notes.",(0,a.kt)("br",null),"\nNew components and features, document updates, security updates, and maintenance have been made."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that in this version, there is backward compatible big change with coding way and components' tags and class names for resolving version conflicts issue.\nFor more details, please check the ",(0,a.kt)("a",{parentName:"p",href:"../guides/version-conflicts-issue-solution"},"Version conflicts issue and solution")," and the new ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/quick-start"},"Quick Start")," article.")),(0,a.kt)("h2",{id:"update-details"},"Update details"),(0,a.kt)("h3",{id:"new-components"},"New Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added Mobile Date/Time series components (MobileDatePicker, MobileTimePicker, and MobileDateTimePicker).")),(0,a.kt)("h3",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"timeStep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," properties on TimePicker and DateTimePicker components."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"icon")," property on Dialog component.")),(0,a.kt)("h3",{id:"maintenance"},"Maintenance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolved version conflicts issue."),(0,a.kt)("li",{parentName:"ul"},"Exported type definition."),(0,a.kt)("li",{parentName:"ul"},"Fixed style of Mobile Date/Time series.")),(0,a.kt)("h3",{id:"security-updates"},"Security Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated dependent libraries: nth-check, core-js, webpack, webpack-cli, @storybook/builder-webpack5, @storybook/manager-webpack5, @storybook/web-components, @storybook/addon-actions, @storybook/addon-controls, @storybook/addon-viewport, @storybook/addon-a11y, karma-coverage, @babel/preset-env, @babel/core, babel-loader, ts-loader, @open-wc/testing, karma, prettier, @cybozu/eslint-config, lit, @types/uuid, typescript.")),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added an article to explain the version conflicts issue and solution, updated quick start description, component sample code and README."),(0,a.kt)("li",{parentName:"ul"},"Added Mobile Date/Time series components document."),(0,a.kt)("li",{parentName:"ul"},"Added/updated description of ",(0,a.kt)("inlineCode",{parentName:"li"},"timeStep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," properties of TimePicker and DateTimePicker components."),(0,a.kt)("li",{parentName:"ul"},"Added description of ",(0,a.kt)("inlineCode",{parentName:"li"},"icon")," property of Dialog component."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Format setting plug-in")," article."),(0,a.kt)("li",{parentName:"ul"},"Fixed default value of RadioButton component's ",(0,a.kt)("inlineCode",{parentName:"li"},"borderVisible")," property.")))}u.isMDXComponent=!0}}]);