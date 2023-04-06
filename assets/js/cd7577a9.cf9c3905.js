"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[68859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=l,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98744:(e,t,n)=>{n.d(t,{n:()=>l});var a=n(67294);const l=()=>{const e=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=new Kucs["1.10.0"].MobileDropdown({value:"Orange",items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}]});e.current.appendChild(t)}),[]),a.createElement("div",{className:"sample-container",id:"mobile-dropdown"},a.createElement("div",{id:"sample-container__components",className:"mobile",ref:e}))}},37900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),r=n(98744);const i={id:"mobile-dropdown",title:"MobileDropdown",sidebar_label:"MobileDropdown",original_id:"mobile-dropdown"},o=void 0,d={unversionedId:"components/mobile/mobile-dropdown",id:"version-1.3.1/components/mobile/mobile-dropdown",title:"MobileDropdown",description:"Overview",source:"@site/versioned_docs/version-1.3.1/components/mobile/mobile-dropdown.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-dropdown",permalink:"/kuc-docusaurus-v2/docs/1.3.1/components/mobile/mobile-dropdown",draft:!1,tags:[],version:"1.3.1",frontMatter:{id:"mobile-dropdown",title:"MobileDropdown",sidebar_label:"MobileDropdown",original_id:"mobile-dropdown"},sidebar:"version-1.3.1-docs",previous:{title:"MobileCheckbox",permalink:"/kuc-docusaurus-v2/docs/1.3.1/components/mobile/mobile-checkbox"},next:{title:"MobileMultiChoice",permalink:"/kuc-docusaurus-v2/docs/1.3.1/components/mobile/mobile-multichoice"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The MobileDropdown component allows the user to select one out of several options."),(0,l.kt)(r.n,{mdxType:"MobileDropdownComponent"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"className"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"error"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or left empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label will not be displayed if unspecified or left empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Selected value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No option will be selected if the ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," are unspecified",(0,l.kt)("br",null),"If setting duplicated value and not setting ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex"),", the first mapped value item in ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," will be the index number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Index of selected item"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It supports specifying which duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected if there is duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," in ",(0,l.kt)("inlineCode",{parentName:"td"},"items"),(0,l.kt)("br",null),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," is not set and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is valid, item that has the index number will be selected",(0,l.kt)("br",null),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," is set with duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," value maps with duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"value"),", the item that has the index number will be selected",(0,l.kt)("br",null),"Will result an error if the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is not a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component from selecting"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"items"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of options to display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"items")," is not an array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Text for each option"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.label")," is unspecified, the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," is displayed on the UI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Value of each option"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Can set duplicated value in ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value"))))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"}," *1: You can set duplicated value in ",(0,l.kt)("inlineCode",{parentName:"p"},"Item.value"),". In case setting duplicated value, you can handle selected item using ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," property.",(0,l.kt)("br",null),"\nExample: When setting ",(0,l.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]")),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If setting ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and not setting ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value = 'fruit': The first item will be selected."),(0,l.kt)("li",{parentName:"ul"},"value = 'other': No item will be selected."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If not setting ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and setting ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"selectedIndex = 1: The second item will be selected."),(0,l.kt)("li",{parentName:"ul"},"selectedIndex = 99: No item will be selected."))))),(0,l.kt)("h3",{id:"event"},"Event"),(0,l.kt)("p",null,"Here is a list of events that can be specified:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"change"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Event handler when the value has been changed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,l.kt)("br",null),(0,l.kt)("br",null),"You can receive the following values in event.detail",(0,l.kt)("br",null),"event.detail.oldValue : Value before the change",(0,l.kt)("br",null),"event.detail.value : Value after the change")))),(0,l.kt)("h3",{id:"constructor"},"Constructor"),(0,l.kt)("p",null,"MobileDropdown(options)",(0,l.kt)("br",null),"\nHere is a list of available constructors:"),(0,l.kt)("h4",{id:"parameter"},"Parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.mobile.app.record.getSpaceElement('space');\nconst mobileDropdown = new Kuc.MobileDropdown({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: 'Orange',\n  selectedIndex: 0,\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(mobileDropdown);\n\nmobileDropdown.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);