"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[80381],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=l,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[u]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const o={id:"table-readonly-table-customization",title:"Table and ReadOnlyTable customization",sidebar_label:"Table and ReadOnlyTable customization",original_id:"table-readonly-table-customization"},i=void 0,r={unversionedId:"guides/table-readonly-table-customization",id:"guides/table-readonly-table-customization",title:"Table and ReadOnlyTable customization",description:"Overview",source:"@site/docs/guides/table-readonly-table-customization.md",sourceDirName:"guides",slug:"/guides/table-readonly-table-customization",permalink:"/kuc-docusaurus-v2/docs/next/guides/table-readonly-table-customization",draft:!1,tags:[],version:"current",frontMatter:{id:"table-readonly-table-customization",title:"Table and ReadOnlyTable customization",sidebar_label:"Table and ReadOnlyTable customization",original_id:"table-readonly-table-customization"},sidebar:"tutorialSidebar",previous:{title:"Search box customization",permalink:"/kuc-docusaurus-v2/docs/next/guides/search-box-customization"},next:{title:"Version conflicts issue and solution",permalink:"/kuc-docusaurus-v2/docs/next/guides/version-conflicts-issue-solution"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:2},{value:"Table and ReadOnlyTable usage difference",id:"table-and-readonlytable-usage-difference",level:2},{value:"Understanding change event",id:"understanding-change-event",level:2},{value:"Create an App",id:"create-an-app",level:3},{value:"JavaScript and CSS Customization",id:"javascript-and-css-customization",level:3},{value:"Prepare basic table",id:"prepare-basic-table",level:3},{value:"The display on UI",id:"the-display-on-ui",level:3},{value:"Modify the event detail",id:"modify-the-event-detail",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"ReadOnlyTable",id:"readonlytable",level:4},{value:"Table",id:"table",level:4},{value:"Multiple components in one cell (Table)",id:"multiple-components-in-one-cell-table",level:3},{value:"Dependent columns (Table)",id:"dependent-columns-table",level:3},{value:"Nested tables (Table)",id:"nested-tables-table",level:3}],c={toc:s},u="wrapper";function p(e){let{components:n,...o}=e;return(0,l.kt)(u,(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This article explains how to utilize and customize the Table, and ReadOnlyTable components and the usage difference between them.",(0,l.kt)("br",null),"\nWe assume the following scenario:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Basic Usage (",(0,l.kt)("em",{parentName:"li"},"Table and ReadOnlyTable"),")"),(0,l.kt)("li",{parentName:"ol"},"Multiple components in one cell (",(0,l.kt)("em",{parentName:"li"},"Table"),")"),(0,l.kt)("li",{parentName:"ol"},"Dependent columns (",(0,l.kt)("em",{parentName:"li"},"Table"),")"),(0,l.kt)("li",{parentName:"ol"},"Nested tables (",(0,l.kt)("em",{parentName:"li"},"Table"),")")),(0,l.kt)("h2",{id:"components-to-use"},"Components to use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/components/desktop/dropdown"},"Dropdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/components/desktop/table"},"Table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/components/desktop/text"},"Text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/components/desktop/readonly-table"},"ReadOnlyTable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/docs/next/components/desktop/radio-button"},"RadioButton"))),(0,l.kt)("h2",{id:"table-and-readonlytable-usage-difference"},"Table and ReadOnlyTable usage difference"),(0,l.kt)("p",null,"Basically, the Table and ReadOnlyTable components have the same structure."),(0,l.kt)("p",null,"The ReadOnlyTable component allows the user to display a read-only mode table. This means that it only displays plain text that the user cannot manipulate."),(0,l.kt)("p",null,"In contrast, the Table component allows the user to manipulate the components displayed in the table cell such as changing data and adding and deleting rows."),(0,l.kt)("p",null,"The biggest difference between Table and ReadOnlyTable components is the ",(0,l.kt)("inlineCode",{parentName:"p"},"columns")," property of the Table has a ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"columns.render"),") to specify which elements to display in the cell that the user can interact with. In addition, also has an ",(0,l.kt)("inlineCode",{parentName:"p"},"actionButton")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"table.actionButton"),") to show/hide the add/remove row button."),(0,l.kt)("h2",{id:"understanding-change-event"},"Understanding change event"),(0,l.kt)("p",null,"It will be easier for you to customize the table when you understand the ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," event flow in the Table."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The table cell will listen ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," event from the component inside the cell and assign that new value to the corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," value.")),(0,l.kt)("h3",{id:"create-an-app"},"Create an App"),(0,l.kt)("p",null,'Create an app that includes a blank space field with the id "space".'),(0,l.kt)("h3",{id:"javascript-and-css-customization"},"JavaScript and CSS Customization"),(0,l.kt)("p",null,"When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:",(0,l.kt)("br",null),"\nYou can see how to upload a file in the ",(0,l.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/docs/next/getting-started/quick-start"},"Quick Start"),"."),(0,l.kt)("h3",{id:"prepare-basic-table"},"Prepare basic table"),(0,l.kt)("p",null,"Suppose we have the following settings to display the username with the Text component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const renderName = (cellData) => {\n  const text = new Kuc.Text({ value: cellData });\n  return text;\n};\n\nconst columns = [{ title: 'Username', field: 'username', render: renderName }];\nconst data = [{ username: 'user1' }, { username: 'user2' }];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n")),(0,l.kt)("h3",{id:"the-display-on-ui"},"The display on UI"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"render",src:t(48197).Z,width:"574",height:"392"})),(0,l.kt)("p",null,"When you edit the input in the first cell, the Text component will trigger ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," event with ",(0,l.kt)("inlineCode",{parentName:"p"},"detail.value = 'user1 edited'"),".\nThe table then catches that value and assigns it back to the ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," field.\nNow the data of the table will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"[{ username: 'user1 edited' }, { username: 'user2' }];\n")),(0,l.kt)("h3",{id:"modify-the-event-detail"},"Modify the event detail"),(0,l.kt)("p",null,"If you want to customize the value that the table receives, you need to modify it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," event before the table receives it.\nWe also use the sample code above and add the following content to the ",(0,l.kt)("inlineCode",{parentName:"p"},"renderName")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nconst renderName = (cellData) => {\n  const text = new Text({ value: cellData });\n\n  // Modify the value before it bubble to table cell\n  text.addEventListener('change', (event) => {\n    event.detail.value = 'modified value' // add any value you want set to username;\n  });\n  return text;\n};\n...\n")),(0,l.kt)("p",null,"When you edit the input in the first cell, the value received by the table will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"'modified value'"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("h4",{id:"readonlytable"},"ReadOnlyTable"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"readonly-table",src:t(78987).Z,width:"692",height:"288"})),(0,l.kt)("p",null,"Display a read-only mode table."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const columns = [\n  {\n      title: 'Name',\n      field: 'name',\n  },\n  {\n      title: 'Gender',\n      field: 'gender',\n  },\n  {\n      title: 'Address',\n      field: 'address',\n  },\n];\n\nconst data = [\n  {\n      name: 'John Brown',\n      gender: 'male',\n      address: 'osaka-japan',\n  },\n  {\n      name: 'Jim Green',\n      gender: 'female',\n      address: 'tokyo-japan',\n  },\n  {\n      name: 'Joe Black',\n      gender: 'male',\n      address: 'hochiminh-vietnam',\n  },\n];\n\nconst readOnlyTable = new Kuc.ReadOnlyTable({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(readOnlyTable);\n"))),(0,l.kt)("h4",{id:"table"},"Table"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"table",src:t(68239).Z,width:"2194",height:"1294"})),(0,l.kt)("p",null,"Display a table that can manipulate the components displayed in it.",(0,l.kt)("br",null),"\nUse the ",(0,l.kt)("inlineCode",{parentName:"p"},"columns.render")," function to specify the component to be displayed in the cell. Please check the ",(0,l.kt)("inlineCode",{parentName:"p"},"renderGender")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"renderAddress")," functions in the following code example:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// render gender column with dropdown\nconst renderGender = (cellData) => {\n  const radioButton = new Kuc.RadioButton({\n      items: [\n      {\n          label: 'Male',\n          value: 'male',\n      },\n      {\n          label: 'Female',\n          value: 'female',\n      },\n      ],\n      itemLayout: 'vertical',\n      value: cellData,\n  });\n\n  return radioButton;\n};\n\n// render address column with dropdown\nconst renderAddress = (cellData) => {\n  const country = cellData.split('-')[1];\n  const dropdownCountry = new Kuc.Dropdown({\n      items: [\n      {\n          label: 'Viet Nam',\n          value: 'vietnam',\n      },\n      {\n          label: 'Japan',\n          value: 'japan',\n      },\n      ],\n      value: country,\n  });\n\n  return dropdownCountry;\n};\n\nconst columns = [\n  {\n    title: 'Name',\n    field: 'name',\n  },\n  {\n    title: 'Gender',\n    field: 'gender',\n    render: renderGender,\n  },\n  {\n    title: 'Address',\n    field: 'address',\n    render: renderAddress,\n  },\n];\n\nconst data = [\n  {\n      name: 'John Brown',\n      gender: 'male',\n      address: 'osaka-japan',\n  },\n  {\n      name: 'Jim Green',\n      gender: 'female',\n      address: 'tokyo-japan',\n  },\n  {\n      name: 'Joe Black',\n      gender: 'male',\n      address: 'hochiminh-vietnam',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"multiple-components-in-one-cell-table"},"Multiple components in one cell (Table)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"multi-components",src:t(15002).Z,width:"1074",height:"444"})),(0,l.kt)("p",null,"Put multiple components in one table cell using the ",(0,l.kt)("inlineCode",{parentName:"p"},"columns.render")," function.",(0,l.kt)("br",null),"\nYou can display two dropdowns (city and country) in the same cell."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const renderAddress = (cellData, rowData) => {\n  // the format of cellData: 'city-country'\n  const city = cellData.split('-')[0];\n  const country = cellData.split('-')[1];\n\n  const dropdownCity = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Tokyo',\n        value: 'tokyo',\n      },\n      {\n        label: 'Osaka',\n        value: 'osaka',\n      },\n      {\n        label: 'Ho Chi Minh',\n        value: 'hochiminh',\n      },\n    ],\n    value: city,\n  });\n  dropdownCity.addEventListener('change', (event) => {\n    const _country = rowData.address.split('-')[1];\n    event.detail.value = `${event.detail.value}-${_country}`;\n  });\n\n  const dropdownCountry = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Viet Nam',\n        value: 'vietnam',\n      },\n      {\n        label: 'Japan',\n        value: 'japan',\n      },\n    ],\n    value: country,\n  });\n  dropdownCountry.addEventListener('change', (event) => {\n    const _city = rowData.address.split('-')[0];\n    event.detail.value = `${_city}-${event.detail.value}`;\n  });\n\n  const container = document.createElement('div');\n  container.style.display = 'flex';\n  container.appendChild(dropdownCountry);\n  container.appendChild(dropdownCity);\n\n  return container;\n};\n\nconst data = [\n  {\n    name: 'John Brown',\n    gender: 'male',\n    address: 'osaka-japan',\n  },\n  {\n    name: 'Jim Green',\n    gender: 'female',\n    address: 'tokyo-japan',\n  },\n  {\n    name: 'Joe Black',\n    gender: 'male',\n    address: 'hochiminh-vietnam',\n  },\n];\n\nconst columns = [\n  {\n    title: 'Name',\n    field: 'name',\n  },\n  {\n    title: 'Address',\n    field: 'address',\n    render: renderAddress,\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"dependent-columns-table"},"Dependent columns (Table)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dependent-columns",src:t(3919).Z,width:"600",height:"221"})),(0,l.kt)("p",null,"Develop the dependent columns.",(0,l.kt)("br",null),"\nThe city dropdown will be updated when the country dropdown is changed."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Each country will have corresponding cities\nconst relatedData = {\n  japan: [\n      {label: 'Tokyo', value: 'tokyo'},\n      {label: 'Osaka', value: 'osaka'},\n  ],\n  vietnam: [\n      {label: 'Ha Noi', value: 'hanoi'},\n      {label: 'Ho Chi Minh', value: 'hochiminh'},\n  ],\n};\n\nconst renderCity = (cellData, rowData) => {\n  const dropdownCity = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Tokyo',\n        value: 'tokyo',\n      },\n      {\n        label: 'Ho Chi Minh',\n        value: 'hochiminh',\n      },\n    ],\n    value: cellData,\n  });\n\n  // Logic update city when country column changed\n  lastRenderedCountryComponent.addEventListener('change', (event) => {\n    dropdownCity.items = relatedData[event.detail.value];\n    rowData.city = '';\n  });\n\n  return dropdownCity;\n};\n\nlet lastRenderedCountryComponent;\nconst renderCountry = (cellData) => {\n  const dropdownCountry = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Viet Nam',\n        value: 'vietnam',\n      },\n      {\n        label: 'Japan',\n        value: 'japan',\n      },\n    ],\n    value: cellData,\n  });\n  lastRenderedCountryComponent = dropdownCountry;\n  return dropdownCountry;\n};\n\nconst columns = [\n  {\n    title: 'Country',\n    field: 'country',\n    render: renderCountry,\n  },\n  {\n    title: 'City',\n    field: 'city',\n    render: renderCity,\n  },\n];\n\nconst data = [\n  {\n    country: 'japan',\n    city: 'tokyo',\n  },\n  {\n    country: 'vietnam',\n    city: 'hochiminh',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"nested-tables-table"},"Nested tables (Table)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"table-in-table",src:t(61927).Z,width:"1040",height:"562"})),(0,l.kt)("p",null,"Show more detailed info on every row with nested tables."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const renderCity = (cellData) => {\n  const dropdown = new Kuc.Dropdown({\n    items: [\n      {label: 'Tokyo', value: 'tokyo'},\n      {label: 'Ho Chi Minh', value: 'hochiminh'},\n    ],\n    value: cellData,\n  });\n\n  return dropdown;\n};\n\nconst renderCountry = (cellData) => {\n  const renderSubTable = (cellDataSubTable) => {\n    const dropdown = new Kuc.Dropdown({\n      items: [\n        {label: 'Japan', value: 'japan'},\n        {label: 'Viet Nam', value: 'vietnam'},\n      ],\n      value: cellDataSubTable,\n    });\n    return dropdown;\n  };\n\n  const columnsSubTable = [\n    {\n      title: 'Sub Table',\n      field: 'dropdown',\n      render: renderSubTable,\n    },\n  ];\n\n  const dataSubTable = [];\n  for (let i = 0; i < cellData.split(',').length; i++) {\n    dataSubTable.push({dropdown: cellData.split(',')[i]});\n  }\n  const subTable = new Kuc.Table({\n    columns: columnsSubTable,\n    data: dataSubTable,\n  });\n\n  subTable.addEventListener('change', (subTableEvent) => {\n    const _dataSubTable = subTableEvent.detail.data;\n    let countries = '';\n    for (let i = 0; i < _dataSubTable.length; i++) {\n      countries += _dataSubTable[i].dropdown;\n      if (i !== _dataSubTable.length - 1) {\n        countries += ',';\n      }\n    }\n    subTableEvent.detail.value = countries;\n  });\n  return subTable;\n};\n\nconst columns = [\n  {\n    title: 'Country',\n    field: 'country',\n    render: renderCountry,\n  },\n  {\n    title: 'City',\n    field: 'city',\n    render: renderCity,\n  },\n];\n\nconst data = [\n  {\n    city: 'tokyo',\n    country: 'japan',\n  },\n  {\n    city: 'hochiminh',\n    country: 'vietnam',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This article was reviewed by Kintone and Google Chrome as of February 2023.",(0,l.kt)("br",null),"\nIn addition, the version of Kintone UI Component that is used for customizations is v1.9.0.")))}p.isMDXComponent=!0},3919:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/dependent-columns-ae0983bf1d41dd96f67c896616b92846.gif"},78987:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/readonly-table-bb660b70250584c4e3f645e3ad1b6180.png"},48197:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-edit-text-5d6be2ee8745bd0561ae6ced2bb11cdf.gif"},61927:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-in-table-74e503f39949f3c326890696213de145.png"},68239:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-6cbd798a8d63b829edd4ee0f210ef92c.png"},15002:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/two-component-in-cell-23fd5128cf0a28dfa67a47df47bd31b6.png"}}]);