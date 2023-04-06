"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[72106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73506:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(67294);const a=()=>{const e=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=new Kuc.Spinner({className:"spinner"});t.open(),e.current.appendChild(t)}),[]),r.createElement("div",{className:"sample-container",id:"spinner"},r.createElement("div",{id:"sample-container__components",ref:e}))}},6698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(73506);const i={id:"spinner",title:"Spinner",sidebar_label:"Spinner",original_id:"spinner"},l=void 0,p={unversionedId:"components/desktop/spinner",id:"version-1.4.0/components/desktop/spinner",title:"Spinner",description:"Overview",source:"@site/versioned_docs/version-1.4.0/components/desktop/spinner.md",sourceDirName:"components/desktop",slug:"/components/desktop/spinner",permalink:"/kuc-docusaurus-v2/docs/1.4.0/components/desktop/spinner",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"spinner",title:"Spinner",sidebar_label:"Spinner",original_id:"spinner"},sidebar:"version-1.4.0-docs",previous:{title:"RadioButton",permalink:"/kuc-docusaurus-v2/docs/1.4.0/components/desktop/radio-button"},next:{title:"Text",permalink:"/kuc-docusaurus-v2/docs/1.4.0/components/desktop/text"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Spinner component allows the user to display a rolling spinner."),(0,a.kt)(o.O,{mdxType:"SpinnerComponent"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed at the bottom of the loader icon"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Displays the default value if the value for text is unspecified or empty")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'If the text is unspecified or empty, consider assigning a visually-hidden class and given the word "Now loading..." in a hidden state for accessibility.')),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Spinner(options)",(0,a.kt)("br",null),"\nHere is a list of available constructors:"),(0,a.kt)("h4",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"Here is a list of available methods:"),(0,a.kt)("h4",{id:"open"},"open()"),(0,a.kt)("p",null,"Show the component"),(0,a.kt)("h5",{id:"parameter-1"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("h4",{id:"close"},"close()"),(0,a.kt)("p",null,"Hide the component"),(0,a.kt)("h5",{id:"parameter-2"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return-1"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please check the ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,a.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst spinner = new Kuc.Spinner({\n  text: 'now loading...'\n});\n\nspinner.open();\nspinner.close();\n")))}m.isMDXComponent=!0}}]);