"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[10325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const i={id:"cleaning-check-list-customization",title:"Cleaning check list customization",sidebar_label:"Cleaning check list customization",original_id:"cleaning-check-list-customization"},r=void 0,s={unversionedId:"guides/cleaning-check-list-customization",id:"version-1.1.1/guides/cleaning-check-list-customization",title:"Cleaning check list customization",description:"Overview",source:"@site/versioned_docs/version-1.1.1/guides/cleaning-check-list-customization.md",sourceDirName:"guides",slug:"/guides/cleaning-check-list-customization",permalink:"/docs/1.1.1/guides/cleaning-check-list-customization",draft:!1,tags:[],version:"1.1.1",frontMatter:{id:"cleaning-check-list-customization",title:"Cleaning check list customization",sidebar_label:"Cleaning check list customization",original_id:"cleaning-check-list-customization"},sidebar:"version-1.1.1-docs",previous:{title:"Mobile timecard customization",permalink:"/docs/1.1.1/guides/mobile-timecard-customization"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:3},{value:"Completed image",id:"completed-image",level:2},{value:"JavaScript and CSS customization",id:"javascript-and-css-customization",level:2},{value:"Display check list items",id:"display-check-list-items",level:3},{value:"Adjust the spacing of buttons using CSS",id:"adjust-the-spacing-of-buttons-using-css",level:3},{value:"What happens when the Save button is clicked?",id:"what-happens-when-the-save-button-is-clicked",level:3},{value:"Display error message",id:"display-error-message",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(p,(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section describes how to customize an app to display components in the Record List page and let the user create a record without opening the Record Create page. It is described using a cleaning check list as an example.",(0,a.kt)("br",null),"\nYou can also learn how to transfer values from components to Kintone fields."),(0,a.kt)("h3",{id:"components-to-use"},"Components to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/components/desktop/radio-button"},"RadioButton")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/components/desktop/checkbox"},"Checkbox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/components/desktop/dropdown"},"Dropdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/components/desktop/button"},"Button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/components/desktop/notification"},"Notification"))),(0,a.kt)("h2",{id:"completed-image"},"Completed image"),(0,a.kt)("p",null,"The completed image of the customized page is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cleaning Check List",src:t(84023).Z,width:"1096",height:"424"})),(0,a.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS customization"),(0,a.kt)("p",null,"Import the UMD file of Kintone UI Component to the app and upload the JavaScript file with the implementation described below.",(0,a.kt)("br",null),"\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.1/getting-started/quick-start"},"Quick Start")," for how to upload a file."),(0,a.kt)("h3",{id:"display-check-list-items"},"Display check list items"),(0,a.kt)("p",null,"Display the check list items labeled as Check Status, Replenishment Item and Cleaning Status on the Record List page of the app.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Checkbox and Dropdown components display the value of Item.value if Item.label is not specified."),(0,a.kt)("li",{parentName:"ul"},'Set the requiredIcon property to true if you want to display the "required item" icon in each component.'),(0,a.kt)("li",{parentName:"ul"},"If you want to set an initial value to the RadioButton or Dropdown component, specify a value for their value property.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For this customization, specify 'Done' for value of the RadioButton component and '-----' for value of the Dropdown component as their initial values.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.events.on('app.record.index.show', (event) => {\n\n  // Prevent components duplication bug\n  if (document.getElementById('kuc_radiobutton') || document.getElementById('kuc_checkbox') || document.getElementById('kuc_dropdown')\n    || document.getElementById('kuc_button')) {\n    return event;\n  }\n\n  const app = kintone.app.getId();\n  const header = kintone.app.getHeaderSpaceElement();\n\n  // Display RadioButton\n  const radiobutton = new Kuc.RadioButton({\n    id: 'kuc_radiobutton',\n    label: 'Check Status',\n    items: [\n      {\n        value: 'Done'\n      },\n      {\n        value: 'Not Yet'\n      }\n    ],\n    value: 'Done',\n    requiredIcon: true\n  });\n\n  // Display Checkbox\n  const checkbox = new Kuc.Checkbox({\n    id: 'kuc_checkbox',\n    label: 'Replenishment Item',\n    items: [\n      {\n        value: 'Toilet Paper'\n      },\n      {\n        value: 'Hand Soap'\n      },\n      {\n        value: 'Hand Paper'\n      }\n    ],\n    requiredIcon: true\n  });\n\n  // Display Dropdown\n  const dropdown = new Kuc.Dropdown({\n    id: 'kuc_dropdown',\n    label: 'Cleaning Status',\n    items: [\n      {\n        value: '-----'\n      },\n      {\n        value: 'Done'\n      },\n      {\n        value: 'Not Yet'\n      },\n      {\n        value: 'Asking Cleaner'\n      }\n    ],\n    value: '-----',\n    requiredIcon: true\n  });\n\n  // Display Button\n  const button = new Kuc.Button({\n    id: 'kuc_button',\n    text: 'Save',\n    type: 'submit'\n  });\n  header.appendChild(radiobutton);\n  header.appendChild(checkbox);\n  header.appendChild(dropdown);\n  header.appendChild(button);\n")),(0,a.kt)("h3",{id:"adjust-the-spacing-of-buttons-using-css"},"Adjust the spacing of buttons using CSS"),(0,a.kt)("p",null,"Assign a value to the id property of the Button component and adjust the spacing of the buttons using CSS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'@charset "UTF-8";\n#kuc_button {\n  margin: 25px 0px 0px 5px;\n}\n')),(0,a.kt)("h3",{id:"what-happens-when-the-save-button-is-clicked"},"What happens when the Save button is clicked?"),(0,a.kt)("p",null,"You can specify a click event for the Button component.",(0,a.kt)("br",null),"\nThe required items are checked for whether they have values when the Save button is clicked."),(0,a.kt)("p",null,"If a value is missing for an item, the component should display an error message.",(0,a.kt)("br",null),"\n*The error message should be first initialized with an empty string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"button.addEventListener('click', () => {\n  // Reset error messages\n  checkbox.error = '';\n  dropdown.error = '';\n\n  // Check required itmes\n  let erorrFlag = false;\n\n  if (!checkbox.value.length) {\n    checkbox.error = 'Please check';\n    erorrFlag = true;\n  }\n  if (dropdown.value === '-----') {\n    dropdown.error = 'Please select';\n    erorrFlag = true;\n  }\n\n  if (erorrFlag) {\n    return;\n  }\n")),(0,a.kt)("p",null,"The record should be created after it is verified that the required items have values.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The values of the required items entered on the page can be retrieved using ",(0,a.kt)("inlineCode",{parentName:"p"},"<Component variable name.value>"),".",(0,a.kt)("br",null),"\nFor this customization, the value entered in each component is retrieved using radiobutton.value, checkbox.value and dropdown.value."),(0,a.kt)("p",null,"The Notification component displays a message if the record is successfully created and registered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create request paramerter\nconst postParam = {\n  app,\n  record: {\n    'status': {\n      value: radiobutton.value\n      },\n    'item': {\n      value: checkbox.value\n    },\n    'cleaning': {\n      value: dropdown.value\n    }\n  }\n};\n\n// Register record\nkintone.api(kintone.api.url('/k/v1/record', true), 'POST', postParam).then((resp) => {\n  // Display success message\n  const success = new Kuc.Notification({\n    text: 'Registered check items',\n    type: 'success'\n  });\n  success.open();\n})\n")),(0,a.kt)("h3",{id:"display-error-message"},"Display error message"),(0,a.kt)("p",null,"The Notification component displays an error message when an error occurs during the process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"}).catch((error) => {\n  console.log(error);\n\n  // Display error message\n  let errmsg = 'An error occurred.';\n  if (error.message) {\n    errmsg += ' ' + error.message;\n  }\n  const alert = new Kuc.Notification({\n    text: errmsg\n  });\n  alert.open();\n});\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article was reviewed using Kintone and Google Chrome as of September, 2021.",(0,a.kt)("br",null),"\nThe version of Kintone UI Component used in this customization is v1.1.0.")))}d.isMDXComponent=!0},84023:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cleaning_check_list-f7af1e986b605751ba9e03fddd985ef0.png"}}]);