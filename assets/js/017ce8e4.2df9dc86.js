"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[84131],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,f=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67612:(e,t,a)=>{a.d(t,{i:()=>r});var n=a(67294);const r=()=>{const e=(0,n.useRef)();return(0,n.useEffect)((()=>{const t=new Kucs["1.10.0"].MobileDateTimePicker({value:"2021-11-11"});e.current.appendChild(t)}),[]),n.createElement("div",{className:"sample-container",id:"mobile-datetime-picker"},n.createElement("div",{id:"sample-container__components",className:"mobile",ref:e}))}},65170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(67612);const i={id:"mobile-datetime-picker",title:"MobileDateTimePicker",sidebar_label:"MobileDateTimePicker",original_id:"mobile-datetime-picker"},o=void 0,p={unversionedId:"components/mobile/mobile-datetime-picker",id:"version-1.10.0/components/mobile/mobile-datetime-picker",title:"MobileDateTimePicker",description:"Overview",source:"@site/versioned_docs/version-1.10.0/components/mobile/mobile-datetime-picker.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-datetime-picker",permalink:"/docs/components/mobile/mobile-datetime-picker",draft:!1,tags:[],version:"1.10.0",frontMatter:{id:"mobile-datetime-picker",title:"MobileDateTimePicker",sidebar_label:"MobileDateTimePicker",original_id:"mobile-datetime-picker"},sidebar:"version-1.10.0-docs",previous:{title:"MobileDatePicker",permalink:"/docs/components/mobile/mobile-date-picker"},next:{title:"MobileDropdown",permalink:"/docs/components/mobile/mobile-dropdown"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],c={toc:d},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The MobileDateTimePicker component allows the user to display a input area of time & date and each selection part."),(0,r.kt)(l.i,{mdxType:"MobileDateTimePickerComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Language setting"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Available options: "auto", "en", "ja", "zh", "zh-TW"',(0,r.kt)("br",null),'If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format is YYYY-MM-DDTHH:MM:SS",(0,r.kt)("br",null),"The below date and time can be used (it will be converted to YYYY-MM-DDTHH:MM:SS internally):",(0,r.kt)("li",null,"2021"),(0,r.kt)("li",null,"2021T01"),(0,r.kt)("li",null,"2021-06"),(0,r.kt)("li",null,"2021-12-12"),(0,r.kt)("li",null,"2021-12-12T01"),(0,r.kt)("li",null,"2021-12-12T01:01"),"If the date and/or month is ignored, it will be supplemented with 01",(0,r.kt)("br",null),"If the hour, minute, and/or second is ignored, it will be supplemented with 00",(0,r.kt)("br",null),"Will result an error if setting invalid format or value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hour12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available options:",(0,r.kt)("br",null),"true: 12-hour clock",(0,r.kt)("br",null),"false: 24-hour clock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when the value has been changed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can receive the following values in event.detail",(0,r.kt)("br",null),"event.detail.oldValue : Value before the change",(0,r.kt)("br",null),"event.detail.value : Value after the change",(0,r.kt)("br",null),'event.detail.changedPart : "date" or "time" which has been changed')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," *1: The displayed date format is automatically switched depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," property setting as follows:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'"en": MM/DD/YYYY'),(0,r.kt)("li",{parentName:"ul"},'"ja", "zh", "zh-TW": YYYY-MM-DD'))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"MobileDateTimePicker(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst mobileDateTimePicker = new Kuc.MobileDateTimePicker({\n  label: 'DateTime',\n  requiredIcon: true,\n  language: 'auto',\n  hour12: false,\n  value: '2021-11-11T11:30:00',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(mobileDateTimePicker);\n\nmobileDateTimePicker.addEventListener('change', event => {\n  console.log(event);\n});\n")))}k.isMDXComponent=!0}}]);