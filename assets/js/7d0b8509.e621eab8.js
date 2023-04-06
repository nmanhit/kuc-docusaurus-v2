"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[27704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={id:"bulk-update-customization",title:"Bulk update customization",sidebar_label:"Bulk update customization",original_id:"bulk-update-customization"},i=void 0,s={unversionedId:"guides/bulk-update-customization",id:"version-1.3.0/guides/bulk-update-customization",title:"Bulk update customization",description:"Overview",source:"@site/versioned_docs/version-1.3.0/guides/bulk-update-customization.md",sourceDirName:"guides",slug:"/guides/bulk-update-customization",permalink:"/kuc-docusaurus-v2/docs/1.3.0/guides/bulk-update-customization",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"bulk-update-customization",title:"Bulk update customization",sidebar_label:"Bulk update customization",original_id:"bulk-update-customization"},sidebar:"version-1.3.0-docs",previous:{title:"Cleaning check list customization",permalink:"/kuc-docusaurus-v2/docs/1.3.0/guides/cleaning-check-list-customization"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:3},{value:"Completed image",id:"completed-image",level:2},{value:"What you will need to have ready",id:"what-you-will-need-to-have-ready",level:2},{value:"JavaScript and CSS customization",id:"javascript-and-css-customization",level:2},{value:"Place the button in Record List page",id:"place-the-button-in-record-list-page",level:3},{value:"What happens when the bulk approval button is clicked?",id:"what-happens-when-the-bulk-approval-button-is-clicked",level:3},{value:"Display error message",id:"display-error-message",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This article assumes the following scenario: Dealing with accumulated records that require status approval when using process management. ",(0,a.kt)("br",null),"\nApproving multiple records individually is time-consuming. Customization can be used to enable approval in bulk in the Record List page.",(0,a.kt)("br",null),"\nBy adding Kintone UI Component to the UI, the user can rapidly create screens that match Kintone."),(0,a.kt)("h3",{id:"components-to-use"},"Components to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/button"},"Button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/notification"},"Notification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/spinner"},"Spinner"))),(0,a.kt)("h2",{id:"completed-image"},"Completed image"),(0,a.kt)("p",null,"The completed image of the customized page is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bulk Update",src:n(35390).Z,width:"1000",height:"421"})),(0,a.kt)("h2",{id:"what-you-will-need-to-have-ready"},"What you will need to have ready"),(0,a.kt)("p",null,"Create a dedicated record view for bulk approval of records. The \u201c(Assigned to me)\u201d view can also be used, but for illustrative purposes this article will describe the creation of a separate, dedicated view.",(0,a.kt)("br",null),"\nAs an example, this article will show how to create a view that only displays records with the status \u201cIn progress\u201d and that are assigned to the logged-in user."),(0,a.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS customization"),(0,a.kt)("p",null,"Import the UMD file of Kintone UI Component to the app and upload the JavaScript file (bulkUpdate.js) with the implementation described below.",(0,a.kt)("br",null),"\nSee ",(0,a.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/1.3.0/getting-started/quick-start"},"Quick Start")," for how to upload a file.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"For this customization, SweetAlert2 is used to create the confirmation dialog box, so the following file must be imported separately:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/sweetalert2@11"},"https://cdn.jsdelivr.net/npm/sweetalert2@11"))),(0,a.kt)("p",null,"A Dialog component is scheduled to be provided in a future version update. In the future it will be possible to use this component instead of manually implementing the confirmation dialog box."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"bulkUpdate.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.events.on('app.record.index.show', (event) => {\n\n  // Write the process here\n\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"place-the-button-in-record-list-page"},"Place the button in Record List page"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This section shows how to use the Button component to place a bulk approval button in a Record List page.",(0,a.kt)("br",null),"\nThe implementation shown below uses a unique view ID to ensure that the button is only displayed in the dedicated bulk approval view.",(0,a.kt)("br",null),"\n*The view ID can be found in the record view\u2019s URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"if (event.viewId !== 6342505) {\n  return event;\n}\n\n// Prevent duplication bug with ID granted by property\nif (document.getElementById('kuc_button') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\nconst button = new Kuc.Button({\n  type: 'submit',\n  text: 'Bulk approval',\n  id: 'kuc_button'\n});\nheader.appendChild(button);\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-happens-when-the-bulk-approval-button-is-clicked"},"What happens when the bulk approval button is clicked?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The following operation is triggered when the bulk approval button is clicked.",(0,a.kt)("br",null),"\nIf there is no applicable record, the processing will be suspended before displaying the confirmation dialog. ",(0,a.kt)("br",null),"\nThe processing is also suspended if Cancel is selected in the confirmation dialog.",(0,a.kt)("br",null),"\nThe Notification component is used to display the message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"button.addEventListener('click', () => {\n\n  // When there is no records being processed\n  if (event.records.length === 0) {\n    const updateAlert = new Kuc.Notification({\n      text: 'There are no records being processed.'\n    });\n    updateAlert.open();\n    return event;\n  }\n\n  Swal.fire({\n    title: 'Are you sure to approve the displayed records in bulk?',\n    icon: 'question',\n    showCancelButton: true,\n  }).then((resp) => {\n\n    // When Cancel is pressed\n    if (!resp.isConfirmed) {\n      const cancelInfo = new Kuc.Notification({\n        text: 'Canceled.',\n        type: 'info'\n      });\n      cancelInfo.open();\n      return event;\n    }\n\n    // Write subsequent process\n\n  });\n});\n")),(0,a.kt)("p",null,"Since multiple records are processed, the update may take some time.",(0,a.kt)("br",null),"\nFor that reason, a loading screen to be displayed during the update will be implemented.",(0,a.kt)("br",null),"\nThe Spinner component is used to implement the loading screen.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Loading starts by open() method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Start bulk approval\nconst spinner = new Kuc.Spinner({\n  text: 'now loading...'\n});\nspinner.open();\n")),(0,a.kt)("p",null,"Next, create parameters used in bulk update processing."),(0,a.kt)("p",null,"Loop the records being displayed in the Record List page to create array data that contains objects with record IDs and the action names set in the process management settings.",(0,a.kt)("br",null),"\nIn obj.action, input the action name set in the process management settings.",(0,a.kt)("br",null),"\nPlease note that only records being displayed on the screen will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const records =  event.records.map(record => {\n  let obj = {};\n  obj.id = record.$id.value;\n  obj.action = 'Approve';\n  return obj;\n});\n\nconst appId = kintone.app.getId();\nconst param = {\n  'app': appId,\n  'records': records\n};\n")),(0,a.kt)("p",null,"A message will be displayed using the Notification component if the records are successfully updated.",(0,a.kt)("br",null),"\nDo not forget to use the close() method of Spinner to end the loading screen.",(0,a.kt)("br",null),"\nThe close event added in v1.2.0 can be used to reload the screen when the Close button in the Notification component is clicked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.api(kintone.api.url('/k/v1/records/status', true), 'PUT', param).then(() => {\n\n  const successInfo = new Kuc.Notification({\n    text: 'Bulk approval was successful!',\n    type: 'info'\n  });\n  successInfo.open();\n\n  // Finish bulk approval\n  spinner.close();\n\n  // When close button is pressed\n  successInfo.addEventListener('close', () => {\n    location.reload();\n  });\n\n}).catch(error => {\n  // Process when REST API error occurs\n\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"display-error-message"},"Display error message"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The Notification component displays an error message when an error occurs during the process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"}).catch(error => {\n  // Process when REST API error occurs\n  let errmsg = 'An error occurred while retrieving the record.';\n  if (error.message) {\n    errmsg += ' ' + error.message;\n  }\n  const updateError = new Kuc.Notification({\n    text: errmsg\n  });\n  updateError.open();\n  spinner.close();\n});\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article was reviewed using Kintone and Google Chrome as of January 2022.",(0,a.kt)("br",null),"\nThe version of Kintone UI Component used in this customization is v1.3.0.")))}d.isMDXComponent=!0},35390:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bulk_update-4313e713c85ad7c50ea473ddbaf54c56.gif"}}]);