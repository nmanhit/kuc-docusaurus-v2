"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[90006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"release-notes-v1.3.1",title:"v1.3.1 Release Notes",sidebar_label:"v1.3.1 Release Notes",original_id:"release-notes-v1.3.1"},l=void 0,i={unversionedId:"releases/release-notes-v1.3.1",id:"releases/release-notes-v1.3.1",title:"v1.3.1 Release Notes",description:"Overview",source:"@site/docs/releases/release-notes-v1.3.1.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.3.1",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.3.1",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.3.1",title:"v1.3.1 Release Notes",sidebar_label:"v1.3.1 Release Notes",original_id:"release-notes-v1.3.1"},sidebar:"tutorialSidebar",previous:{title:"v1.3.0 Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.3.0"},next:{title:"v1.3.2 Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.3.2"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"Maintenance",id:"maintenance",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Here are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.1"},"kintone UI Component v1.3.1")," Release Notes.",(0,a.kt)("br",null),"\nMaintenances, document updates, and security updates have been made."),(0,a.kt)("h2",{id:"update-details"},"Update details"),(0,a.kt)("h3",{id:"maintenance"},"Maintenance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added padding setting for content and footer parts on Dialog component.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We did this for better appearance as default."))),(0,a.kt)("li",{parentName:"ul"},"Changed checkmark color of selected item when disabled on MultiChoice component.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We did this to make it easier to see it."))),(0,a.kt)("li",{parentName:"ul"},"Improved displayed position and added scroll behavior of Dropdown menu part."),(0,a.kt)("li",{parentName:"ul"},"Fixed the line-height issue when setting on app's HeaderMenuSpaceElement on desktop components.")),(0,a.kt)("h3",{id:"security-updates"},"Security Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated dependent libraries: karma, engine.io, follow-redirects.")),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Published Contributing Guideline and Pull Request template, and updated issue template."),(0,a.kt)("li",{parentName:"ul"},"Published roadmap for 2022 and linked it on README."),(0,a.kt)("li",{parentName:"ul"},"Added the explanation of date format depending on language property setting on DatePicker and DateTimePicker document.")))}p.isMDXComponent=!0}}]);