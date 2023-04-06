"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[36669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=i.createContext({}),c=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(r.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(r,".").concat(g)]||u[g]||p[g]||a;return t?i.createElement(m,l(l({ref:n},d),{},{components:t})):i.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={id:"format-setting-plugin",title:"Format setting plug-in",sidebar_label:"Format setting plug-in",original_id:"format-setting-plugin"},l=void 0,s={unversionedId:"guides/format-setting-plugin",id:"version-1.9.0/guides/format-setting-plugin",title:"Format setting plug-in",description:"Overview",source:"@site/versioned_docs/version-1.9.0/guides/format-setting-plugin.md",sourceDirName:"guides",slug:"/guides/format-setting-plugin",permalink:"/kuc-docusaurus-v2/docs/1.9.0/guides/format-setting-plugin",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"format-setting-plugin",title:"Format setting plug-in",sidebar_label:"Format setting plug-in",original_id:"format-setting-plugin"},sidebar:"version-1.9.0-docs",previous:{title:"Bulk update customization",permalink:"/kuc-docusaurus-v2/docs/1.9.0/guides/bulk-update-customization"},next:{title:"Version conflicts issue and solution",permalink:"/kuc-docusaurus-v2/docs/1.9.0/guides/version-conflicts-issue-solution"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:3},{value:"Completed image",id:"completed-image",level:2},{value:"What you will need to have ready",id:"what-you-will-need-to-have-ready",level:2},{value:"Create a manifest file",id:"create-a-manifest-file",level:2},{value:"HTML customization",id:"html-customization",level:2},{value:"JavaScript and CSS customization (Settings page)",id:"javascript-and-css-customization-settings-page",level:2},{value:"Create components",id:"create-components",level:3},{value:"Display the last saved value",id:"display-the-last-saved-value",level:3},{value:"Place components",id:"place-components",level:3},{value:"When clicking on buttons",id:"when-clicking-on-buttons",level:3},{value:"When clicking on dialog buttons",id:"when-clicking-on-dialog-buttons",level:3},{value:"JavaScript and CSS customization (Kintone app page)",id:"javascript-and-css-customization-kintone-app-page",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"By using Kintone UI Component, the user can expand the range of utilization not only on the Kintone app page but also on the plug-in settings page.",(0,o.kt)("br",null),"\nThis article explains how to use Kintone UI Component on the plug-in settings page.\nThe creation of a simple Conditional Format Plug-in is used as an example."),(0,o.kt)("h3",{id:"components-to-use"},"Components to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.9.0/components/desktop/button"},"Button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.9.0/components/desktop/date-picker"},"DatePicker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.9.0/components/desktop/dialog"},"Dialog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.9.0/components/desktop/dropdown"},"Dropdown")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.9.0/components/desktop/multichoice"},"MultiChoice"))),(0,o.kt)("h2",{id:"completed-image"},"Completed image"),(0,o.kt)("p",null,"The implementation scenarios and the completed image of the customized page are as follows:"),(0,o.kt)("p",null,"Set the account closing date of your company on the plug-in settings page and implement a customization as a plug-in that colors red the target field of a record when today's date is before the closing date."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plugin setting",src:t(79510).Z,width:"2795",height:"1200"}),"\nThis is the plug-in settings page.",(0,o.kt)("br",null),"\nWhen the set conditions match (if today's date is before or after the reference date), the color of the set field changes to red on the Record Details page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation",src:t(34589).Z,width:"1456",height:"1003"}),"\nA confirmation dialog is displayed when saving the settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App image",src:t(10177).Z,width:"1517",height:"901"}),"\nThis is an app that manages deposits.",(0,o.kt)("br",null),"\nThe background color of the field changes according to the conditions set on the plug-in settings page."),(0,o.kt)("h2",{id:"what-you-will-need-to-have-ready"},"What you will need to have ready"),(0,o.kt)("p",null,"Prepare the files with the following folder structure in creating this Kintone plug-in.",(0,o.kt)("br",null),"\nThe folder structure and file names are examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/\n\u251c\u2500\u2500 image/\n|   \u251c\u2500\u2500 icon.png\n\u251c\u2500\u2500 js/\n|   \u251c\u2500\u2500 config.js\n|   \u251c\u2500\u2500 desktop.js\n\u251c\u2500\u2500 css/\n|   \u251c\u2500\u2500 config.css\n\u251c\u2500\u2500 html/\n|   \u251c\u2500\u2500 config.html\n\u251c\u2500\u2500 lib/\n|   \u251c\u2500\u2500 luxon.js\n|   \u251c\u2500\u2500 kuc.min.js\n|\n\u251c\u2500\u2500 manifest.json\n")),(0,o.kt)("h2",{id:"create-a-manifest-file"},"Create a manifest file"),(0,o.kt)("p",null,"Create a manifest file like the one below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manifest_version": 1,\n  "version": 1,\n  "type": "APP",\n  "name": {\n    "en": "Format Setting Plug-in"\n  },\n  "description": {\n    "en": "This is a sample plug-in."\n  },\n  "icon": "image/icon.png",\n  "desktop": {\n    "js": [\n      "js/desktop.js",\n      "lib/luxon.js"\n    ],\n    "css": []\n  },\n  "config": {\n    "html": "html/config.html",\n    "js": [\n      "lib/kuc.min.js",\n      "js/config.js"\n    ],\n    "css": [\n      "css/config.css"\n    ],\n    "required_params": ["date", "condition", "targetFields"]\n  }\n}\n')),(0,o.kt)("p",null,"Kintone UI Component will be used for this customization on the plug-in settings page, so describe the path of the UMD file in the config object.",(0,o.kt)("br",null),"\nSee ",(0,o.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/1.9.0/getting-started/quick-start"},"Quick Start")," for how to upload a UMD file."),(0,o.kt)("h2",{id:"html-customization"},"HTML customization"),(0,o.kt)("p",null,"Create an HTML file for the plug-in settings page.",(0,o.kt)("br",null),"\nCreate a file like the one below. Place each part of Kintone UI Component by using the id set in the div element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<section class="settings">\n  <h2 class="settings-heading">Format Setting Plug-in</h2>\n  <p>If the conditions match, the background color of the target fields will be changed to red.</p>\n  <br/>\n    <h3 class="kintoneplugin-desc">Set the reference date.</h3>\n    <p class="kintoneplugin-row">\n      <div id="date_space"></div>\n    </p>\n    <br/>\n    <h3 class="kintoneplugin-desc">Set the condition to color the fields. The default date is today.</h3>\n    <p class="kintoneplugin-row">\n      <div id="dropdown_space"></div>\n    </p>\n    <br/>\n    <h3 class="kintoneplugin-desc">Select the fields to color.</h3>\n    <p class="kintoneplugin-row">\n      <div id="multichoice_space"></div>\n    </p>\n    <br/>\n    <p class="kintoneplugin-row">\n      <div id="button_space"></div>\n    </p>\n</section>\n')),(0,o.kt)("h2",{id:"javascript-and-css-customization-settings-page"},"JavaScript and CSS customization (Settings page)"),(0,o.kt)("p",null,"This section will explain the implementation code of the settings page.",(0,o.kt)("br",null),"\nPlace the JavaScript file (config.js) described below in the js folder.",(0,o.kt)("br",null)),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="config.js"',title:'"config.js"'},"(async PLUGIN_ID => {\n  // Write the process here\n})(kintone.$PLUGIN_ID);\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-components"},"Create components"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create various components.",(0,o.kt)("br",null),"\nPlace the following as fields.",(0,o.kt)("br",null),"\nReference Date: Sets the reference date.",(0,o.kt)("br",null),"\nCondition: Sets the condition for the reference date",(0,o.kt)("br",null),"\nFields: Set fields (Multiple selectable)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Specify what version to use\nconst Kuc = Kucs["1.x.x"];\n\n// Create DatePicker component\nconst datePicker = new Kuc.DatePicker({\n  label: "Reference Date",\n  requiredIcon: true,\n  language: "auto"\n});\n// Create Dropdown component\nconst dropdown = new Kuc.Dropdown({\n  label: "Condition",\n  requiredIcon: true,\n  items: [\n    {\n      label: "-----",\n      value: "-----"\n    },\n    {\n      label: "Before reference date",\n      value: "before"\n    },\n    {\n      label: "After reference date",\n      value: "after"\n    }\n  ],\n  value: "-----"\n});\n// Get field info to display in MultiChoice component\nconst items = await getFields();\n// Create MultiChoice component\nconst multiChoice = new Kuc.MultiChoice({\n  label: "Fields",\n  requiredIcon: true,\n  items: items\n});\n// Create Button component\nconst saveButton = new Kuc.Button({\n  text: "Save",\n  type: "submit"\n});\nconst cancelButton = new Kuc.Button({\n  text: "Cancel",\n  type: "cancel",\n  id: "kuc_cancel_button"\n});\nconst dialogOKButton = new Kuc.Button({\n  text: "OK",\n  type: "submit"\n});\nconst dialogCancelButton = new Kuc.Button({\n  text: "Cancel",\n  type: "cancel",\n  id: "kuc_dialog_cancel_button"\n});\nconst divEl = document.createElement("div");\ndivEl.setAttribute("id", "kuc_dialog_footer");\n// Create Dialog component\nconst dialog = new Kuc.Dialog({\n  content: `<div style="text-align: center; padding: 48px 24px">\n              <p style="margin: 0;">The target fields are colored according to the conditions.</p>\n              <p>Are you sure to save your settings?</p>\n              <div>`,\n  footer: divEl\n});\n')),(0,o.kt)("p",null,"The following function is called in order to retrieve the field name to be displayed as a choice of the MultiChoice component.",(0,o.kt)("br",null),"\nSince the data structure of the items property is an array consisting of objects whose keys are label and value, the value returned by the function is also in the corresponding form.",(0,o.kt)("br",null),"\nIt is an asynchronous process, so be careful about how you call it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Get field info of tha app\nfunction getFields() {\n  const param = { app: kintone.app.getId() };\n  return kintone\n    .api(kintone.api.url("/k/v1/preview/app/form/fields", true), "GET", param)\n    .then(resp => {\n      const items = [];\n      for (const key in resp.properties) {\n        if (!resp.properties.hasOwnProperty(key)) {\n          continue;\n        }\n        const prop = resp.properties[key];\n        const label = prop.label;\n        const code = prop.code;\n        switch (prop.type) {\n          case "SINGLE_LINE_TEXT":\n          case "NUMBER":\n          case "CALC":\n          case "RADIO_BUTTON":\n          case "DROP_DOWN":\n          case "RECORD_NUMBER":\n          case "MULTI_LINE_TEXT":\n          case "CHECK_BOX":\n          case "MULTI_SELECT":\n          case "DATE":\n          case "DATETIME":\n          case "CREATED_TIME":\n          case "UPDATED_TIME":\n            items.push({ label: label, value: code });\n            break;\n          default:\n            break;\n        }\n      }\n      return items;\n    });\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"display-the-last-saved-value"},"Display the last saved value"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Retrieve the plug-in settings when you open the plug-in settings page and display the value when saved last time, if any."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Display the value when saved last time\nconst config = kintone.plugin.app.getConfig(PLUGIN_ID);\nif (Object.keys(config).length) {\n  datePicker.value = config.date;\n  dropdown.value = config.condition;\n  multiChoice.value = JSON.parse(config.targetFields);\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"place-components"},"Place components"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Retrieve the element where you want to place the component using id in config.html and add the element for each component there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Display components\nconst dateSpaceEl = document.getElementById("date_space");\ndateSpaceEl.appendChild(datePicker);\nconst dropdownSpaceEl = document.getElementById("dropdown_space");\ndropdownSpaceEl.appendChild(dropdown);\nconst multiChoiceSpaceEl = document.getElementById("multichoice_space");\nmultiChoiceSpaceEl.appendChild(multiChoice);\nconst buttonSpaceEl = document.getElementById("button_space");\nbuttonSpaceEl.appendChild(cancelButton);\nbuttonSpaceEl.appendChild(saveButton);\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"when-clicking-on-buttons"},"When clicking on buttons"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When the Save button is clicked, the required items are checked.",(0,o.kt)("br",null),"\nIf at least one item has not been filled in, an error label will be displayed.",(0,o.kt)("br",null),"\nIf there is no problem with the set items, a confirmation dialog will be displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// When the Save button is clicked\nsaveButton.addEventListener("click", event => {\n  // Reset error messages\n  datePicker.error = "";\n  dropdown.error = "";\n  multiChoice.error = "";\n  // Check required itmes\n  let requiredFlag = false;\n  if (!datePicker.value) {\n    datePicker.error = "Please enter";\n    requiredFlag = true;\n  }\n  if (dropdown.value === "-----") {\n    dropdown.error = "Please select";\n    requiredFlag = true;\n  }\n  if (!multiChoice.value.length) {\n    multiChoice.error = "Please select";\n    requiredFlag = true;\n  }\n  if (requiredFlag) return;\n  dialog.open();\n  divEl.appendChild(dialogCancelButton);\n  divEl.appendChild(dialogOKButton);\n});\n// When the Cancel button is clicked\ncancelButton.addEventListener("click", event => {\n  history.back();\n});\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"when-clicking-on-dialog-buttons"},"When clicking on dialog buttons"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To avoid saving unintended settings, insert a confirmation dialog that displays after the save button is clicked.",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation",src:t(34589).Z,width:"1456",height:"1003"})),(0,o.kt)("p",null,"When the OK button is clicked, the information you want the plug-in to have as a setting value is stored in the object and saved in the plug-in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// When the OK button in Dialog is clicked\ndialogOKButton.addEventListener("click", event => {\n  const selectedFields = JSON.stringify(multiChoice.value);\n  const date = datePicker.value;\n  const condition = dropdown.value;\n  const config = {\n    date: date,\n    condition: condition,\n    targetFields: selectedFields\n  };\n  kintone.plugin.app.setConfig(config);\n});\n// When the Cancel button in Dialog is clicked\ndialogCancelButton.addEventListener("click", event => {\n  dialog.close();\n});\n')),(0,o.kt)("h2",{id:"javascript-and-css-customization-kintone-app-page"},"JavaScript and CSS customization (Kintone app page)"),(0,o.kt)("p",null,"This section will explain the implementation code of the Kintone app page.",(0,o.kt)("br",null),"\nPlace the JavaScript file (desktop.js) described below in the js folder.",(0,o.kt)("br",null),"\nThe value is inherited from the component of the plug-in settings page and used for the customization on the Kintone app page. ",(0,o.kt)("br",null),"\nSince the value of the DatePicker component is in yyyy-mm-dd format, today's date is also retrieved in yyyy-mm-dd format for easy comparison.",(0,o.kt)("br",null),"\nAn external date library called luxon.js is used for this customization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="desktop.js"',title:'"desktop.js"'},'(PLUGIN_ID => {\n  kintone.events.on("app.record.detail.show", event => {\n    const CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID);\n    // Get today\'s date with yyyy-mm-dd\n    const currentDate = luxon.DateTime.local().toISODate();\n    const referenceDate = CONFIG.date;\n    const condition = CONFIG.condition;\n    const targetFields = JSON.parse(CONFIG.targetFields);\n    const fieldColor = "#e74c3c";\n    let isBefore = false;\n    if (currentDate < referenceDate) {\n      isBefore = true;\n    }\n    // Change the fields\' color to red depending on the conditions set in the plug-in\n    if (\n      (isBefore && condition === "before") ||\n      (!isBefore && condition === "after")\n    ) {\n      targetFields.forEach(targetField => {\n        const fieldElement = kintone.app.record.getFieldElement(targetField);\n        if (!fieldElement) return;\n        fieldElement.style.backgroundColor = fieldColor;\n      });\n    }\n  });\n})(kintone.$PLUGIN_ID);\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This article introduced a simple plug-in implementation as an example.",(0,o.kt)("br",null),"\nDepending on the customization, it is possible to divide the conditions more finely and to apply conditional formatting to the Record List page. Please try adjusting it according to your actual operations.",(0,o.kt)("br",null)),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article was reviewed using Kintone and Google Chrome as of August 2022.",(0,o.kt)("br",null),"\nThe version of Kintone UI Component used in this customization is v1.4.0.")))}p.isMDXComponent=!0},34589:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dialog-f5d314378b23adcf7c4ab50ce7edd6a5.png"},10177:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/payment_management_app-7c11acba07b6aa2e9827dae6baad10b2.png"},79510:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_setting-10deed46a27a106d3f4afd4c34f13184.png"}}]);