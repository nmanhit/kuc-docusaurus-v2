"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[86075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"release-notes-v1.0.0",title:"v1.0.0 Release Notes",sidebar_label:"v1.0.0 Release Notes",original_id:"release-notes-v1.0.0"},l=void 0,i={unversionedId:"releases/release-notes-v1.0.0",id:"version-1.3.2/releases/release-notes-v1.0.0",title:"v1.0.0 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.3.2/releases/release-notes-v1.0.0.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.0.0",permalink:"/kuc-docusaurus-v2/docs/1.3.2/releases/release-notes-v1.0.0",draft:!1,tags:[],version:"1.3.2",frontMatter:{id:"release-notes-v1.0.0",title:"v1.0.0 Release Notes",sidebar_label:"v1.0.0 Release Notes",original_id:"release-notes-v1.0.0"},sidebar:"version-1.3.2-release-notes",previous:{title:"v1.0.1 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.3.2/releases/release-notes-v1.0.1"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Background",id:"background",level:2},{value:"Update details",id:"update-details",level:2},{value:"What we considered for v1",id:"what-we-considered-for-v1",level:2},{value:"Future plans",id:"future-plans",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Here are the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.0"},"kintone UI Component v1.0.0")," Release Notes.",(0,o.kt)("br",null),"\nYou can find the background of the update from v0 to v1 and the future plans of v1."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The following are the reasons why we decided to implement v1."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Variety of requests for v0"),(0,o.kt)("li",{parentName:"ul"},"Complexity of the design and usage of v0"),(0,o.kt)("li",{parentName:"ul"},"Maintenance difficulties of v0")),(0,o.kt)("p",null,"For those engineers who are developing Kintone customization, we have added features to make the experience to develop Kintone-like components easier. Please find the following to learn more about v1."),(0,o.kt)("h2",{id:"update-details"},"Update details"),(0,o.kt)("p",null,"The major updates are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved the reproducibility of Kintone components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The UI and behavior of the components are closer to the native Kintone components."))),(0,o.kt)("li",{parentName:"ul"},"Enabled accessibility",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Support for keyboard operation and voice-to-speech software."))),(0,o.kt)("li",{parentName:"ul"},"Enabled mobile",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added mobile components."))),(0,o.kt)("li",{parentName:"ul"},"Improved documentation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Easy to understand the specification with the sample code."),(0,o.kt)("li",{parentName:"ul"},"Multiple languages supported.")))),(0,o.kt)("h2",{id:"what-we-considered-for-v1"},"What we considered for v1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Interface",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Inherit the interface from v0. This is for v0 users who don't want to experience a significant change for v1.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"v1.0.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    const button = new Kuc.Button({\n      type: 'submit',\n      text: 'Search',\n      id: 'kuc_button' // Add id property\n    });\n    header.appendChild(button);\u3000// Show button\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"v0.7.4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    const button = new kintoneUIComponent.Button({\n      type: 'submit',\n      text: 'Search',\n    });\n    header.appendChild(button.render());\u3000// Show button\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplicity",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Property can be directly accessed without using a method.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"v1.0.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    const button = new Kuc.Button({\n      type: 'submit',\n      text: 'Search',\n      id: 'kuc_button'\n    });\n    header.appendChild(button);\n    button.text = 'Register'; // Update text property\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"v0.7.4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    const button = new kintoneUIComponent.Button({\n      type: 'submit',\n      text: 'Search',\n    });\n    header.appendChild(button.render());\n    button.setText('Register'); // Update text property\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Component prioritization"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We prioritized components which can be used very frequently."),(0,o.kt)("li",{parentName:"ul"},"We have excluded the components such as Attachment, ColorPicker, FieldGroup, IconButton, and Tab at this moment since there are not so many use cases with the components. Of course, we will consider to implement new components if we get many requests. Please give us your feedbacks on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"},"GitHub issue"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Framework"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Implemented with the LitElement of the Web Components framework to improve readability of internal code."),(0,o.kt)("li",{parentName:"ul"},"The Web Components interface will be considered in the future.")))),(0,o.kt)("p",null,"With the above, we aimed to provide components that developers use easily and are aligned with the actual needs from developers.",(0,o.kt)("br",null),"\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/1.3.2/guides/comparison-v0-v1"},"link")," for the details of differences between v0 and v1."),(0,o.kt)("h2",{id:"future-plans"},"Future plans"),(0,o.kt)("p",null,"The following are the plans for the upcoming releases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Additional components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Additional components such as Table, ReadOnlyTable, Dialog, Date, and DateTime are expected to be provided."))),(0,o.kt)("li",{parentName:"ul"},"Mobile components"),(0,o.kt)("li",{parentName:"ul"},"Improvement of documentation")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As for v0, we will continue to fix bugs and update the dependent libraries. However, we are not planning to add new features to v0 as of now.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Thank you for reading the release notes.",(0,o.kt)("br",null),"\nKintone UI Component v1 is a library designed to provide convenience for engineers who are involved in Kintone customization and plug-in development.",(0,o.kt)("br",null),"\nPlease stay tuned for further releases."),(0,o.kt)("p",null,"We always appreciate your feedbacks. Please submit questions and requests on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"},"GitHub issue"),".",(0,o.kt)("br",null),"\nBest regards,"))}d.isMDXComponent=!0}}]);