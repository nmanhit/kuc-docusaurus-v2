"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[59509],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),f=r,k=s["".concat(p,".").concat(f)]||s[f]||c[f]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},70813:(t,e,a)=>{a.d(e,{Y:()=>r});var n=a(67294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kucs["1.10.0"].Attachment({});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"attachment"},n.createElement("div",{id:"sample-container__components",ref:t}))}},15098:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(70813);const i={id:"attachment",title:"Attachment",sidebar_label:"Attachment",original_id:"attachment"},o=void 0,p={unversionedId:"components/desktop/attachment",id:"components/desktop/attachment",title:"Attachment",description:"Overview",source:"@site/docs/components/desktop/attachment.md",sourceDirName:"components/desktop",slug:"/components/desktop/attachment",permalink:"/kuc-docusaurus-v2/docs/next/components/desktop/attachment",draft:!1,tags:[],version:"current",frontMatter:{id:"attachment",title:"Attachment",sidebar_label:"Attachment",original_id:"attachment"},sidebar:"tutorialSidebar",next:{title:"Button",permalink:"/kuc-docusaurus-v2/docs/next/components/desktop/button"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property this is version 1.12.0 JP",id:"property-this-is-version-1120-jp",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"Related Articles",id:"related-articles",level:2}],s=(c="File",function(t){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)});var c;const f={toc:m},k="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Attachment component allows the user to upload files by selecting or dragging."),(0,r.kt)(l.Y,{mdxType:"AttachmentComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property-this-is-version-1120-jp"},"Property this is version 1.12.0 JP"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Language setting"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Available options: "auto", "en", "ja", "zh", "zh-TW"',(0,r.kt)("br",null),'If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message to display in the component (ex. file type/size restriction)"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\",(0,r.kt)(s,{mdxType:"File"})),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can specify ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File object")," or object contains ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"size"),(0,r.kt)("br",null),"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"files")," is not an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"File.name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"File name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"File.size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"File size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"There are 4 types to show the size:",(0,r.kt)("li",null,"size >= 1073741824: xxx GB"),(0,r.kt)("li",null,"1073741824 > size >= 1048576: xxx MB"),(0,r.kt)("li",null,"1048576 > size >= 1024: xxx KB"),(0,r.kt)("li",null,"1024 > size: xxx bytes"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'*1: The text of "Browse" button and "Drag & drop zone" will be changed according to the ',(0,r.kt)("inlineCode",{parentName:"p"},"language")," property.")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when the files have been changed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,r.kt)("br",null),"You can receive the following values in event.detail ",(0,r.kt)("li",null,"add-file (Triggered if add any file)",(0,r.kt)("ul",null,(0,r.kt)("li",null,'event.detail.type: "add-file"'),(0,r.kt)("li",null,"event.detail.oldFiles: Files before add"),(0,r.kt)("li",null,"event.detail.files: Files after add"),(0,r.kt)("li",null,"event.detail.fileIndex: Index number of the added file (Type: Array\\",(0,r.kt)("number",null),")",(0,r.kt)("ul",null,(0,r.kt)("li",null,'You can get the added file by "event.detail.files[event.detail.fileIndex',"[x]",']"'))))),(0,r.kt)("li",null,"remove-file (Triggered if remove any file)",(0,r.kt)("ul",null,(0,r.kt)("li",null,'event.detail.type: "remove-file"'),(0,r.kt)("li",null,"event.detail.oldFiles: Files before remove"),(0,r.kt)("li",null,"event.detail.files: Files after remove"),(0,r.kt)("li",null,"event.detail.fileIndex: Index number of the removed file (Type: Array\\",(0,r.kt)("number",null),")",(0,r.kt)("ul",null,(0,r.kt)("li",null,'You can get the removed file by "event.detail.oldFiles[event.detail.fileIndex',"[x]",']"'))))))))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Attachment(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst attachment = new Kuc.Attachment({\n  label: 'Attachment',\n  files: [\n    { name: 'file.txt', size: '150' },\n    new File(['foo'], 'foo.txt', { type: 'text/plain' })\n  ],\n  language: 'auto',\n  message: 'Max size: 50MB',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  requiredIcon: false\n});\nspace.appendChild(attachment);\n\nattachment.addEventListener('change', event => {\n  console.log(event);\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"related-articles"},"Related Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/guides/attachment-customization"},"Attachment customization"))))}u.isMDXComponent=!0}}]);