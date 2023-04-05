"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[88913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(t),k=a,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},25687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:"bulk-update-customization",title:"Bulk update customization",sidebar_label:"Bulk update customization",original_id:"bulk-update-customization"},l=void 0,i={unversionedId:"guides/bulk-update-customization",id:"guides/bulk-update-customization",title:"Bulk update customization",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/bulk-update-customization.md",sourceDirName:"guides",slug:"/guides/bulk-update-customization",permalink:"/ja/docs/next/guides/bulk-update-customization",draft:!1,tags:[],version:"current",frontMatter:{id:"bulk-update-customization",title:"Bulk update customization",sidebar_label:"Bulk update customization",original_id:"bulk-update-customization"},sidebar:"tutorialSidebar",previous:{title:"Attachment customization",permalink:"/ja/docs/next/guides/attachment-customization"},next:{title:"Cleaning check list customization",permalink:"/ja/docs/next/guides/cleaning-check-list-customization"}},u={},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",level:2},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:2},{value:"\u4e00\u89a7\u753b\u9762\u306b\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e",id:"\u4e00\u89a7\u753b\u9762\u306b\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e",level:3},{value:"Bulk approval \u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u6642\u306e\u51e6\u7406",id:"bulk-approval-\u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u6642\u306e\u51e6\u7406",level:3},{value:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a",id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a",level:3}],c={toc:p},s="wrapper";function d(e){let{components:n,...o}=e;return(0,a.kt)(s,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"\u30d7\u30ed\u30bb\u30b9\u7ba1\u7406\u5229\u7528\u6642\u3001\u30b9\u30c6\u30fc\u30bf\u30b9\u627f\u8a8d\u304c\u5fc5\u8981\u306a\u30ec\u30b3\u30fc\u30c9\u304c\u6e9c\u307e\u3063\u3066\u304d\u305f\u30b1\u30fc\u30b9\u3092\u60f3\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u8907\u6570\u30ec\u30b3\u30fc\u30c9\u306e\u500b\u5225\u627f\u8a8d\u306f\u624b\u9593\u304c\u304b\u304b\u308b\u306e\u3067\u3001\u30ec\u30b3\u30fc\u30c9\u4e00\u89a7\u753b\u9762\u304b\u3089\u4e00\u62ec\u3067\u627f\u8a8d\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\nUI \u5468\u308a\u306b kintone UI Component \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001kintone \u306b\u30de\u30c3\u30c1\u3059\u308b\u753b\u9762\u3092\u30b9\u30d4\u30fc\u30c7\u30a3\u30fc\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/next/components/desktop/button"},"Button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/next/components/desktop/notification"},"Notification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/next/components/desktop/spinner"},"Spinner"))),(0,a.kt)("h2",{id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"},"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u304c\u3001\u753b\u9762\u306e\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bulk Update",src:t(35390).Z,width:"1000",height:"421"})),(0,a.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,a.kt)("p",null,"\u4e00\u62ec\u627f\u8a8d\u5c02\u7528\u306e\u30ec\u30b3\u30fc\u30c9\u4e00\u89a7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u300c\uff08\u4f5c\u696d\u8005\u304c\u81ea\u5206\uff09\u300d\u306e\u4e00\u89a7\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u4eca\u56de\u306f\u308f\u304b\u308a\u3084\u3059\u3044\u4e00\u89a7\u3092\u5225\u9014\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u4f8b\u3068\u3057\u3066\u3001\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u300cIn progress\u300d\u3001\u4f5c\u696d\u8005\u304c\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u30ec\u30b3\u30fc\u30c9\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u308b\u4e00\u89a7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,a.kt)("p",null,"kintone UI Component \u306e UMD \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30d7\u30ea\u306b\u8aad\u307f\u8fbc\u3093\u3060\u4e0a\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u3092\u3057\u305f JavaScript \u30d5\u30a1\u30a4\u30eb\uff08bulkUpdate.js\uff09\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u65b9\u6cd5\u306a\u3069\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/getting-started/quick-start"},"Quick Start")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",null)),(0,a.kt)("p",null,"\u4eca\u56de\u306f\u3001\u78ba\u8a8d\u753b\u9762\u306e\u4f5c\u6210\u306b SweetAlert2 \u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u3001\u5225\u9014\u4ee5\u4e0b\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/sweetalert2@11"},"https://cdn.jsdelivr.net/npm/sweetalert2@11"))),(0,a.kt)("p",null,"\u4eca\u5f8c\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3067 Dialog \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u63d0\u4f9b\u3092\u4e88\u5b9a\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u78ba\u8a8d\u753b\u9762\u306e\u5b9f\u88c5\u306f\u5c06\u6765\u7684\u306b\u306f\u305d\u3061\u3089\u3067\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"bulkUpdate.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.events.on('app.record.index.show', (event) => {\n\n  // Write the process here\n\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4e00\u89a7\u753b\u9762\u306b\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e"},"\u4e00\u89a7\u753b\u9762\u306b\u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Button \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30ec\u30b3\u30fc\u30c9\u4e00\u89a7\u753b\u9762\u306b Bulk approval \u30dc\u30bf\u30f3\u3092\u8a2d\u7f6e\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u3053\u3053\u3067\u306f\u3001\u5404\u4e00\u89a7\u304c\u6301\u3064 view ID \u3092\u5229\u7528\u3057\u3066\u3001\u4e00\u62ec\u627f\u8a8d\u5c02\u7528\u306e\u4e00\u89a7\u306b\u306e\u307f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3055\u305b\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u203b view ID \u306f\u30ec\u30b3\u30fc\u30c9\u4e00\u89a7\u753b\u9762\u306e URL \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"if (event.viewId !== 6342505) {\n  return event;\n}\n\n// Prevent duplication bug with ID granted by property\nif (document.getElementById('kuc_button') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\nconst button = new Kuc.Button({\n  type: 'submit',\n  text: 'Bulk approval',\n  id: 'kuc_button'\n});\nheader.appendChild(button);\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bulk-approval-\u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u6642\u306e\u51e6\u7406"},"Bulk approval \u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u6642\u306e\u51e6\u7406"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Bulk approval \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u6642\u306e\u52d5\u4f5c\u3067\u3059\u3002",(0,a.kt)("br",null),"\n\u5bfe\u8c61\u306e\u30ec\u30b3\u30fc\u30c9\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3055\u305b\u308b\u524d\u306b\u51e6\u7406\u3092\u4e2d\u65ad\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u3067\u30ad\u30e3\u30f3\u30bb\u30eb\u3092\u62bc\u3057\u305f\u6642\u3082\u3001\u51e6\u7406\u3092\u4e2d\u65ad\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a\u306b\u306f Notification \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"button.addEventListener('click', () => {\n\n  // When there is no records being processed\n  if (event.records.length === 0) {\n    const updateAlert = new Kuc.Notification({\n      text: 'There are no records being processed.'\n    });\n    updateAlert.open();\n    return event;\n  }\n\n  Swal.fire({\n    title: 'Are you sure to approve the displayed records in bulk?',\n    icon: 'question',\n    showCancelButton: true,\n  }).then((resp) => {\n\n    // When Cancel is pressed\n    if (!resp.isConfirmed) {\n      const cancelInfo = new Kuc.Notification({\n        text: 'Canceled.',\n        type: 'info'\n      });\n      cancelInfo.open();\n      return event;\n    }\n\n    // Write subsequent process\n\n  });\n});\n")),(0,a.kt)("p",null,"\u4eca\u56de\u306f\u8907\u6570\u30ec\u30b3\u30fc\u30c9\u306e\u4e00\u62ec\u51e6\u7406\u306a\u306e\u3067\u3001\u66f4\u65b0\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u4e2d\u306b\u8868\u793a\u3059\u308b\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u306e\u5b9f\u88c5\u306b\u306f\u3001 Spinner \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002",(0,a.kt)("br",null)),(0,a.kt)("p",null,"open() \u30e1\u30bd\u30c3\u30c9\u3067\u3001\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u304c\u59cb\u307e\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Start bulk approval\nconst spinner = new Kuc.Spinner({\n  text: 'now loading...'\n});\nspinner.open();\n")),(0,a.kt)("p",null,"\u4e00\u62ec\u66f4\u65b0\u51e6\u7406\u306b\u4f7f\u3046\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4e00\u89a7\u753b\u9762\u3067\u8868\u793a\u4e2d\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u30eb\u30fc\u30d7\u3055\u305b\u3066\u3001\u30ec\u30b3\u30fc\u30c9 ID \u3068\u30d7\u30ed\u30bb\u30b9\u7ba1\u7406\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u540d\u3092\u6301\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3080\u914d\u5217\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\nobj.action \u306b\u306f\u3001\u30d7\u30ed\u30bb\u30b9\u7ba1\u7406\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u540d\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u66f4\u65b0\u5bfe\u8c61\u306f\u3001\u4e00\u89a7\u753b\u9762\u3067\u8868\u793a\u4e2d\u306e\u30ec\u30b3\u30fc\u30c9\u306e\u307f\u3067\u3042\u308b\u3053\u3068\u306b\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const records =  event.records.map(record => {\n  let obj = {};\n  obj.id = record.$id.value;\n  obj.action = 'Approve';\n  return obj;\n});\n\nconst appId = kintone.app.getId();\nconst param = {\n  'app': appId,\n  'records': records\n};\n")),(0,a.kt)("p",null,"\u66f4\u65b0\u306b\u6210\u529f\u3057\u305f\u3089\u3001 Notification \u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3055\u305b\u307e\u3059\u3002",(0,a.kt)("br",null),"\nSpinner \u306e close() \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3063\u3066\u3001\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u3092\u7d42\u4e86\u3055\u305b\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",null),"\nv1.2.0 \u3067\u8ffd\u52a0\u3055\u308c\u305f close \u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u3001Notification \u306e\u9589\u3058\u308b\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u753b\u9762\u3092\u30ea\u30ed\u30fc\u30c9\u3055\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.api(kintone.api.url('/k/v1/records/status', true), 'PUT', param).then(() => {\n\n  const successInfo = new Kuc.Notification({\n    text: 'Bulk approval was successful!',\n    type: 'info'\n  });\n  successInfo.open();\n\n  // Finish bulk approval\n  spinner.close();\n\n  // When close button is pressed\n  successInfo.addEventListener('close', () => {\n    location.reload();\n  });\n\n}).catch(error => {\n  // Process when REST API error occurs\n\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u51e6\u7406\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001 Notification \u3092\u4f7f\u3063\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"}).catch(error => {\n  // Process when REST API error occurs\n  let errmsg = 'An error occurred while retrieving the record.';\n  if (error.message) {\n    errmsg += ' ' + error.message;\n  }\n  const updateError = new Kuc.Notification({\n    text: errmsg\n  });\n  updateError.open();\n  spinner.close();\n});\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u8a18\u4e8b\u306f\u3001 2022 \u5e74 1 \u6708\u6642\u70b9\u306e kintone \u3068 Google Chrome \u3067\u78ba\u8a8d\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u4f7f\u7528\u3057\u305f kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001v1.3.0 \u3067\u3059\u3002")))}d.isMDXComponent=!0},35390:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/bulk_update-4313e713c85ad7c50ea473ddbaf54c56.gif"}}]);