"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[23804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"cleaning-check-list-customization",title:"Cleaning check list customization",sidebar_label:"Cleaning check list customization",original_id:"cleaning-check-list-customization"},r=void 0,s={unversionedId:"guides/cleaning-check-list-customization",id:"version-1.4.0/guides/cleaning-check-list-customization",title:"Cleaning check list customization",description:"Overview",source:"@site/versioned_docs/version-1.4.0/guides/cleaning-check-list-customization.md",sourceDirName:"guides",slug:"/guides/cleaning-check-list-customization",permalink:"/docs/1.4.0/guides/cleaning-check-list-customization",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"cleaning-check-list-customization",title:"Cleaning check list customization",sidebar_label:"Cleaning check list customization",original_id:"cleaning-check-list-customization"},sidebar:"version-1.4.0-docs",previous:{title:"Mobile timecard customization",permalink:"/docs/1.4.0/guides/mobile-timecard-customization"},next:{title:"Bulk update customization",permalink:"/docs/1.4.0/guides/bulk-update-customization"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:3},{value:"Completed image",id:"completed-image",level:2},{value:"JavaScript and CSS customization",id:"javascript-and-css-customization",level:2},{value:"Display check list items",id:"display-check-list-items",level:3},{value:"Adjust the spacing of buttons using CSS",id:"adjust-the-spacing-of-buttons-using-css",level:3},{value:"What happens when the Save button is clicked?",id:"what-happens-when-the-save-button-is-clicked",level:3},{value:"Display error message",id:"display-error-message",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section describes how to customize an app to display components in the Record List page and let the user create a record without opening the Record Create page. It is described using a cleaning check list as an example.",(0,a.kt)("br",null),"\nYou can also learn how to transfer values from components to Kintone fields."),(0,a.kt)("h3",{id:"components-to-use"},"Components to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.4.0/components/desktop/radio-button"},"RadioButton")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.4.0/components/desktop/checkbox"},"Checkbox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.4.0/components/desktop/dropdown"},"Dropdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.4.0/components/desktop/button"},"Button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.4.0/components/desktop/notification"},"Notification"))),(0,a.kt)("h2",{id:"completed-image"},"Completed image"),(0,a.kt)("p",null,"The completed image of the customized page is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cleaning Check List",src:n(84023).Z,width:"1096",height:"424"})),(0,a.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS customization"),(0,a.kt)("p",null,"Import the UMD file of Kintone UI Component to the app and upload the JavaScript file with the implementation described below.",(0,a.kt)("br",null),"\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/getting-started/quick-start"},"Quick Start")," for how to upload a file."),(0,a.kt)("h3",{id:"display-check-list-items"},"Display check list items"),(0,a.kt)("p",null,"Display the check list items labeled as Check Status, Replenishment Item and Cleaning Status on the Record List page of the app.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Checkbox and Dropdown components display the value of Item.value if Item.label is not specified."),(0,a.kt)("li",{parentName:"ul"},'Set the requiredIcon property to true if you want to display the "required item" icon in each component.'),(0,a.kt)("li",{parentName:"ul"},"If you want to set an initial value to the RadioButton or Dropdown component, specify a value for their value property.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For this customization, specify 'Done' for value of the RadioButton component and '-----' for value of the Dropdown component as their initial values.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.events.on('app.record.index.show', (event) => {\n\n  // Prevent components duplication bug\n  if (document.getElementById('kuc_radiobutton') || document.getElementById('kuc_checkbox') || document.getElementById('kuc_dropdown')\n    || document.getElementById('kuc_button')) {\n    return event;\n  }\n\n  const app = kintone.app.getId();\n  const header = kintone.app.getHeaderSpaceElement();\n\n  // Display RadioButton\n  const radiobutton = new Kuc.RadioButton({\n    id: 'kuc_radiobutton',\n    label: 'Check Status',\n    items: [\n      {\n        value: 'Done'\n      },\n      {\n        value: 'Not Yet'\n      }\n    ],\n    value: 'Done',\n    requiredIcon: true\n  });\n\n  // Display Checkbox\n  const checkbox = new Kuc.Checkbox({\n    id: 'kuc_checkbox',\n    label: 'Replenishment Item',\n    items: [\n      {\n        value: 'Toilet Paper'\n      },\n      {\n        value: 'Hand Soap'\n      },\n      {\n        value: 'Hand Paper'\n      }\n    ],\n    requiredIcon: true\n  });\n\n  // Display Dropdown\n  const dropdown = new Kuc.Dropdown({\n    id: 'kuc_dropdown',\n    label: 'Cleaning Status',\n    items: [\n      {\n        value: '-----'\n      },\n      {\n        value: 'Done'\n      },\n      {\n        value: 'Not Yet'\n      },\n      {\n        value: 'Asking Cleaner'\n      }\n    ],\n    value: '-----',\n    requiredIcon: true\n  });\n\n  // Display Button\n  const button = new Kuc.Button({\n    id: 'kuc_button',\n    text: 'Save',\n    type: 'submit'\n  });\n  header.appendChild(radiobutton);\n  header.appendChild(checkbox);\n  header.appendChild(dropdown);\n  header.appendChild(button);\n")),(0,a.kt)("h3",{id:"adjust-the-spacing-of-buttons-using-css"},"Adjust the spacing of buttons using CSS"),(0,a.kt)("p",null,"Assign a value to the id property of the Button component and adjust the spacing of the buttons using CSS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@charset "UTF-8";\n#kuc_button {\n  margin: 25px 0px 0px 5px;\n}\n')),(0,a.kt)("h3",{id:"what-happens-when-the-save-button-is-clicked"},"What happens when the Save button is clicked?"),(0,a.kt)("p",null,"You can specify a click event for the Button component.",(0,a.kt)("br",null),"\nThe required items are checked for whether they have values when the Save button is clicked."),(0,a.kt)("p",null,"If a value is missing for an item, the component should display an error message.",(0,a.kt)("br",null),"\n*The error message should be first initialized with an empty string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"button.addEventListener('click', () => {\n  // Reset error messages\n  checkbox.error = '';\n  dropdown.error = '';\n\n  // Check required itmes\n  let erorrFlag = false;\n\n  if (!checkbox.value.length) {\n    checkbox.error = 'Please check';\n    erorrFlag = true;\n  }\n  if (dropdown.value === '-----') {\n    dropdown.error = 'Please select';\n    erorrFlag = true;\n  }\n\n  if (erorrFlag) {\n    return;\n  }\n")),(0,a.kt)("p",null,"The record should be created after it is verified that the required items have values.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The values of the required items entered on the page can be retrieved using ",(0,a.kt)("inlineCode",{parentName:"p"},"<Component variable name.value>"),".",(0,a.kt)("br",null),"\nFor this customization, the value entered in each component is retrieved using radiobutton.value, checkbox.value and dropdown.value."),(0,a.kt)("p",null,"The Notification component displays a message if the record is successfully created and registered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create request paramerter\nconst postParam = {\n  app,\n  record: {\n    'status': {\n      value: radiobutton.value\n      },\n    'item': {\n      value: checkbox.value\n    },\n    'cleaning': {\n      value: dropdown.value\n    }\n  }\n};\n\n// Register record\nkintone.api(kintone.api.url('/k/v1/record', true), 'POST', postParam).then((resp) => {\n  // Display success message\n  const success = new Kuc.Notification({\n    text: 'Registered check items',\n    type: 'success'\n  });\n  success.open();\n})\n")),(0,a.kt)("h3",{id:"display-error-message"},"Display error message"),(0,a.kt)("p",null,"The Notification component displays an error message when an error occurs during the process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"}).catch((error) => {\n  console.log(error);\n\n  // Display error message\n  let errmsg = 'An error occurred.';\n  if (error.message) {\n    errmsg += ' ' + error.message;\n  }\n  const alert = new Kuc.Notification({\n    text: errmsg\n  });\n  alert.open();\n});\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article was reviewed using Kintone and Google Chrome as of September, 2021.",(0,a.kt)("br",null),"\nThe version of Kintone UI Component used in this customization is v1.1.0.")))}d.isMDXComponent=!0},84023:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleaning_check_list-f7af1e986b605751ba9e03fddd985ef0.png"}}]);