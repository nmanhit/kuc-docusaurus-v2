"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[2413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={id:"search-box-customization",title:"Search box customization",sidebar_label:"Search box customization",original_id:"search-box-customization"},a=void 0,s={unversionedId:"guides/search-box-customization",id:"version-1.0.2/guides/search-box-customization",title:"Search box customization",description:"Overview",source:"@site/versioned_docs/version-1.0.2/guides/search-box-customization.md",sourceDirName:"guides",slug:"/guides/search-box-customization",permalink:"/kuc-docusaurus-v2/docs/1.0.2/guides/search-box-customization",draft:!1,tags:[],version:"1.0.2",frontMatter:{id:"search-box-customization",title:"Search box customization",sidebar_label:"Search box customization",original_id:"search-box-customization"},sidebar:"version-1.0.2-docs",previous:{title:"A commentary on the difference between v0 and v1",permalink:"/kuc-docusaurus-v2/docs/1.0.2/guides/comparison-v0-v1"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Completed image",id:"completed-image",level:2},{value:"Desktop version",id:"desktop-version",level:4},{value:"Mobile version",id:"mobile-version",level:4},{value:"JavaScript and CSS Customization",id:"javascript-and-css-customization",level:2},{value:"Display a search box",id:"display-a-search-box",level:3},{value:"Search character check",id:"search-character-check",level:3},{value:"Component duplication bug prevention",id:"component-duplication-bug-prevention",level:3},{value:"Show results with Notification",id:"show-results-with-notification",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This section describes how to create the search box by using the kintone UI Component's Text component, Button component, and the Notification component."),(0,r.kt)("h2",{id:"completed-image"},"Completed image"),(0,r.kt)("p",null,"The complete image of the search box is as follows:"),(0,r.kt)("h4",{id:"desktop-version"},"Desktop version"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search box (Desktop)",src:n(39863).Z,width:"454",height:"73"})),(0,r.kt)("h4",{id:"mobile-version"},"Mobile version"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search box (Mobile)",src:n(67429).Z,width:"486",height:"106"})),(0,r.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS Customization"),(0,r.kt)("p",null,"When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:",(0,r.kt)("br",null),"\nYou can see how to upload a file in the ",(0,r.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/1.0.2/getting-started/quick-start"},"Quick Start"),"."),(0,r.kt)("h3",{id:"display-a-search-box"},"Display a search box"),(0,r.kt)("p",null,"Use the Text component and the Button component to display the search box.",(0,r.kt)("br",null),"\nYou can use the placeholder property of the Text component to describe the contents of the entry.",(0,r.kt)("br",null),"\nIf you want to enable the mobile version, you can do so by using the MobileButton component for mobile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const header = kintone.app.getHeaderMenuSpaceElement();\n\n// Show entry field and button in the search box\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text'\n});\n\nconst button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\nheader.appendChild(text);\nheader.appendChild(button);\n")),(0,r.kt)("h3",{id:"search-character-check"},"Search character check"),(0,r.kt)("p",null,"The Button component can specify a click event.",(0,r.kt)("br",null),"\nIn this case, the following process is added."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you click a button, check if there is a value in the text box."),(0,r.kt)("li",{parentName:"ul"},"If the input value is blank, assign the error message to the error property and display it."),(0,r.kt)("li",{parentName:"ul"},"Hide the error message by setting the error property to an empty string.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\n// Add the process of click event to the displayed button\nbutton.addEventListener('click', event => {\n  const keyword = text.value;\n  const errorMessage = 'Please enter a value.';\n  // Hide the error message\n  text.error = '';\n\n  // Check if there is a value\n  if (!keyword) {\n    // Show the error message\n    text.error = errorMessage;\n    return;\n  }\n});\n")),(0,r.kt)("h3",{id:"component-duplication-bug-prevention"},"Component duplication bug prevention"),(0,r.kt)("p",null,"The id property is used to determine whether the component is already displayed and to prevent the duplication bug."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Prevent duplication bug with ID granted by property\nif (document.getElementById('kuc_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text' // Add ID\n});\n")),(0,r.kt)("h3",{id:"show-results-with-notification"},"Show results with Notification"),(0,r.kt)("p",null,"Displays the message for success or failure in the REST API runtime using the Notification component.",(0,r.kt)("br",null),"\nThe Notification is invoked using the ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," method and the type property will set the background color."),(0,r.kt)("p",null,"For this example, it is set to be displayed in the following situation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When no records are found"),(0,r.kt)("li",{parentName:"ul"},"When the REST API fails to execute")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const app = kintone.app.getId();\nconst params = {\n  app: app,\n  query: 'text like \"' + keyword + '\"'\n};\n\nkintone.api(kintone.api.url('/k/v1/records', true), 'GET', params).then(resp => {\n  if (resp.records.length !== 0) {\n    // Process of displaying record retrieval result\n    const url = '?view=' + id + '&q=f6054049%20like%20' + '\"' + keyword + '\"';\n    window.location.replace(url);\n  } else if (resp.records.length === 0) {\n    // Process when no record is found\n    const info = new Kuc.Notification({\n      text: 'No records',\n      type: 'info' // Blue background color is set\n    });\n    info.open();\u3000// Show info\n  }\n}).catch(error => {\n  // Process when REST API error occurs\n  const errmsg = 'An error occurred while retrieving the record.';\n  if (error.message !== undefined) {\n    errmsg += '\\n' + error.message;\n  }\n  const alert = new Kuc.Notification({\n    text: errmsg\n    // If the type property is not specified, red background color is set\n  });\n  alert.open();\u3000// Show alert\n});\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"How is it working out for you? This section explains how to create a search box using the Kintone UI Component.",(0,r.kt)("br",null),"\nWe hope you can easily develop kintone customizations by using the kintone UI Component library."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article was reviewed by Kintone and Google Chrome as of February, 2021.",(0,r.kt)("br",null),"\nIn addition, the version of Kintone UI Component that is used for customizations is v1.0.0.")))}d.isMDXComponent=!0},39863:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/desktop_search_box-8206b3929a543c79a1640f1201d3e021.png"},67429:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mobile_search_box-ac789b16744e26e256487ad918c042f2.png"}}]);