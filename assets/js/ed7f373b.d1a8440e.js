"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[15203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={id:"comparison-v0-v1",title:"A commentary on the difference between v0 and v1",sidebar_label:"A commentary on the difference between v0 and v1",original_id:"comparison-v0-v1"},i=void 0,l={unversionedId:"guides/comparison-v0-v1",id:"version-1.0.1/guides/comparison-v0-v1",title:"A commentary on the difference between v0 and v1",description:"Overview",source:"@site/versioned_docs/version-1.0.1/guides/comparison-v0-v1.md",sourceDirName:"guides",slug:"/guides/comparison-v0-v1",permalink:"/kuc-docusaurus-v2/docs/1.0.1/guides/comparison-v0-v1",draft:!1,tags:[],version:"1.0.1",frontMatter:{id:"comparison-v0-v1",title:"A commentary on the difference between v0 and v1",sidebar_label:"A commentary on the difference between v0 and v1",original_id:"comparison-v0-v1"},sidebar:"version-1.0.1-docs",previous:{title:"MobileTextArea",permalink:"/kuc-docusaurus-v2/docs/1.0.1/components/mobile/mobile-textarea"},next:{title:"Search box customization",permalink:"/kuc-docusaurus-v2/docs/1.0.1/guides/search-box-customization"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Completed image",id:"completed-image",level:2},{value:"JavaScript and CSS Customization",id:"javascript-and-css-customization",level:2},{value:"When v0 is used",id:"when-v0-is-used",level:3},{value:"When v1 is used",id:"when-v1-is-used",level:3},{value:"The difference between v0 and v1",id:"the-difference-between-v0-and-v1",level:2},{value:"Naming Space is simplified",id:"naming-space-is-simplified",level:4},{value:"render() method is no longer required",id:"render-method-is-no-longer-required",level:4},{value:"Property can now be used to update values",id:"property-can-now-be-used-to-update-values",level:4},{value:"Improved DOM positioning",id:"improved-dom-positioning",level:4},{value:"Restructured the component property",id:"restructured-the-component-property",level:4},{value:"Included additional properties for Alert and Label",id:"included-additional-properties-for-alert-and-label",level:4},{value:"Auto-completion of Item.label",id:"auto-completion-of-itemlabel",level:4},{value:"Conclusion",id:"conclusion",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kintone UI Component")," v1 has been reviewed to make it easier for developers to create Kintone style components."),(0,r.kt)("p",null,"This section explains the differences between the code written in v0 and v1, as well as the key advantages when using v1 for customizing the Kintone app."),(0,r.kt)("h2",{id:"completed-image"},"Completed image"),(0,r.kt)("p",null,"For example, you can use the Kintone UI Component to create a search button on the Record List page.",(0,r.kt)("br",null),"\nHere is the image for example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search box",src:n(23372).Z,width:"2108",height:"644"})),(0,r.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS Customization"),(0,r.kt)("p",null,"Let's start by looking at the code.",(0,r.kt)("br",null),"\nThe Kintone UI Component UMD file is used here.",(0,r.kt)("br",null),"\nYou can see how to upload a file in the ",(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/1.0.1/getting-started/quick-start"},"Quick Start"),"."),(0,r.kt)("h3",{id:"when-v0-is-used"},"When v0 is used"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Process to prevent component duplication bug\nif (document.getElementById('my_index_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\n\n// Show search box\nconst text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n\nconst button = new kintoneUIComponent.Button({\n  type: 'submit',\n  text: 'Search'\n});\n\n// Use text and a button side by side\ntext.element.style.float = 'left';\nbutton.element.style.float = 'right';\n\nheader.appendChild(text.render());\nheader.appendChild(button.render());\n\n// Specified id for component duplication bug prevention\ntext.element.id = 'my_index_text';\n")),(0,r.kt)("h3",{id:"when-v1-is-used"},"When v1 is used"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Process to prevent component duplication bug\nif (document.getElementById('kuc_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\n\n// Show search box\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text'\n});\n\nconst button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\nheader.appendChild(text);\nheader.appendChild(button);\n")),(0,r.kt)("h2",{id:"the-difference-between-v0-and-v1"},"The difference between v0 and v1"),(0,r.kt)("p",null,"So what has changed between v0 and v1 in terms of coding?"),(0,r.kt)("p",null,"The main difference is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Naming space is simplified"),(0,r.kt)("li",{parentName:"ul"},"render() method is no longer required"),(0,r.kt)("li",{parentName:"ul"},"Property can now be used to update values"),(0,r.kt)("li",{parentName:"ul"},"Improved DOM positioning"),(0,r.kt)("li",{parentName:"ul"},"Restructured the component property"),(0,r.kt)("li",{parentName:"ul"},"Included additional properties for Alert and Label"),(0,r.kt)("li",{parentName:"ul"},"Auto-completion of Item.label")),(0,r.kt)("p",null,"The following section will explain in further detail."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"naming-space-is-simplified"},"Naming Space is simplified"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v1, you can call the instance from new kintoneUIComponent to ",(0,r.kt)("strong",{parentName:"p"},"new Kuc")," in order to write a concise code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const text = new Kuc.Text({\n  placeholder: 'Enter keywords'\n});\n")),(0,r.kt)("p",null,"In addition, there is no risk that one of them will be overwritten when both v0 and v1 UMD are loaded in the same app."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"render-method-is-no-longer-required"},"render() method is no longer required"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v0, the element of the component must be returned by using the render() method along with appendChild() for internal implementation reasons.",(0,r.kt)("br",null),"\nIn v1, render() is no longer required, and the components can be displayed easier."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"header.appendChild(text.render());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"header.appendChild(text);\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"property-can-now-be-used-to-update-values"},"Property can now be used to update values"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v0, when a value is updated, a method must be called separately.",(0,r.kt)("br",null),"\nIn v1, you can use properties to update values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new kintoneUIComponent.Button({\n  type: 'submit',\n  text: 'Search'\n});\n\n// Update the value by calling the method\nbutton.setText('Register');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\n// Property can be used to update values\nbutton.text = 'Register';\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"improved-dom-positioning"},"Improved DOM positioning"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v0, the specifications of each part are lined up vertically by default, and CSS is required to be adjusted in the same order."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"v0",src:n(39048).Z,width:"2108",height:"646"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"style must be adjusted")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Use text and button side by side\ntext.element.style.float = 'left';\nbutton.element.style.float = 'right';\n")),(0,r.kt)("p",null,"In v1, the internal specifications are being restructured, and most of the components are side by side by default, so no additional adjustment is required.",(0,r.kt)("br",null),"\n(For some components, the default value is set to vertical for convenience.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search box",src:n(23372).Z,width:"2108",height:"644"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"restructured-the-component-property"},"Restructured the component property"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v1, the properties of each component have been reviewed and updated."),(0,r.kt)("p",null,"For example, you can add an id to the component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property that is newly added in v1.",(0,r.kt)("br",null),"\nYou can then use the id to retrieve the element."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Process to prevent component duplication bug\nif (document.getElementById('my_index_text') !== null) {\n  return event;\n}\n\nconst text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n\n// ID property is missing, ID must be granted separately\ntext.element.id = 'my_index_text';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Process to prevent component duplication bug (ID name granted by the property is available)\nif (document.getElementById('kuc_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text'\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"included-additional-properties-for-alert-and-label"},"Included additional properties for Alert and Label"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In v0, when you want to display an error message in a component, or when you want to display a label, you need to implement it in another component such as Alert or Label."),(0,r.kt)("p",null,"In v1, you can assign values to the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," property in a component.",(0,r.kt)("br",null),"\nLet's take a look at the Text component ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," property for example:"),(0,r.kt)("p",null,"In the beginning, I have introduced a code to use KUC to create the search box, but there is no response when you click the button."),(0,r.kt)("p",null,"After adding additional handler, when the button is clicked, the text input value is checked and the error message is displayed only when there is no value."),(0,r.kt)("p",null,"Here is a sample code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\n/* Add the following code */\n\n// Add the process of click event to the displayed button\nbutton.addEventListener('click', event => {\n  const keyword = text.value;\n  const errorMessage = 'Please enter a value.';\n  // Hide the error message\n  text.error = '';\n\n  // Check if there is a value\n  if (!keyword) {\n    // Show the error message\n    text.error = errorMessage;\n    return;\n  }\n});\n")),(0,r.kt)("p",null,"In the above code, inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"click")," event, the value is retrieved from text.value, and is checked using regular expressions.",(0,r.kt)("br",null),"\nIf the result of the check is not a full-width, the error message is displayed and the process is interrupted."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," property is used to display the error message."),(0,r.kt)("p",null,"When you initialize the message (hide the error message), you will only need to assign an empty string to text.error property."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search_box_error",src:n(13249).Z,width:"2112",height:"646"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"auto-completion-of-itemlabel"},"Auto-completion of Item.label"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When creating multiple choice components in v0, the developer had to specify both ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value"),"."),(0,r.kt)("p",null,"However, when using v1, only ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value")," is required. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.label")," is not specified, only the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value")," will be set.",(0,r.kt)("br",null),"\nThis means that the coding will be more concise when the backend value and the label displayed in the UI are the same."),(0,r.kt)("p",null,"You can abbreviate the coding as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const checkbox = new Kuc.Checkbox({\n  items: [\n    {\n      value: "orange"\n    }\n  ],\n});\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"How is it working out for you?",(0,r.kt)("br",null),"\nWe hope you will experience a better Kintone development than ever before using the new Kintone UI Component library."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This article was reviewed by Kintone and Google Chrome as of February, 2021.",(0,r.kt)("br",null),"\nIn addition, the version of Kintone UI Component that is used for customizations is v0.7.4 and v1.0.0.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The documentation for v0 is a separate site.Please check ",(0,r.kt)("a",{parentName:"p",href:"https://kintone-labs.github.io/kintone-ui-component/latest/"},"here"),".")))}c.isMDXComponent=!0},39048:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/v0_search_box-700736f261367d2d463d342d0fab326c.png"},23372:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/v1_search_box-7a02c5c35640aebfda1f873a68e87706.png"},13249:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/v1_search_box_error-75c6a9644ebbbb5ba80c192c2f119b99.png"}}]);