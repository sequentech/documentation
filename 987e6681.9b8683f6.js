(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return r})),t.d(n,"default",(function(){return g}));var a=t(3),i=t(7),o=(t(0),t(88)),l={id:"translation-guide",title:"Translation Guide",sidebar_label:"Translation Guide",slug:"/translation-guide"},s={unversionedId:"translation-guide",id:"translation-guide",isDocsHomePage:!1,title:"Translation Guide",description:"This document describes how to translate the Agora Voting project to a new",source:"@site/docs/translation-guide.mdx",slug:"/translation-guide",permalink:"/admin-manual/docs/translation-guide",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/translation-guide.mdx",version:"current",sidebar_label:"Translation Guide",sidebar:"mainSidebar",previous:{title:"Deployment Troubleshooting",permalink:"/admin-manual/docs/deployment/troubleshooting"},next:{title:"Bulk Election Testing",permalink:"/admin-manual/docs/testing/bulk"}},r=[{value:"Introduction",id:"introduction",children:[]},{value:"How to translate",id:"how-to-translate",children:[{value:"Step 1. Writing the translations",id:"step-1-writing-the-translations",children:[]},{value:"Step 2. Building the translations",id:"step-2-building-the-translations",children:[]},{value:"Step 3. Translation deployment and configuration",id:"step-3-translation-deployment-and-configuration",children:[]},{value:"Step 4. Send the Pull Request",id:"step-4-send-the-pull-request",children:[]}]}],c={toc:r};function g(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to translate the Agora Voting project to a new\nlanguage."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The Agora Voting project user interface is written in javascript using Angular 1\nand uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.i18next.com/"}),"i18next")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ng-i18next"}),"ng-i18next")," for internationalization\n(i18n for short)."),Object(o.b)("p",null,"The user interface is divided in 4 different repositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"agora-gui-common"),": A common library used by the other three."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"agora-gui-admin"),": The election administrator interface."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"agora-gui-elections"),": The public election interface."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"agora-gui-booth"),": The voting booth interface.")),Object(o.b)("p",null,"Each repository has its own set of translation files. The format of these files\nis in JSON and is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.i18next.com/misc/json-format#i-18-next-json-v1"}),"roughly defined here (JSON v1 i18next format)"),"."),Object(o.b)("h2",{id:"how-to-translate"},"How to translate"),Object(o.b)("h3",{id:"step-1-writing-the-translations"},"Step 1. Writing the translations"),Object(o.b)("p",null,"The English version of the translation JSON files is usually the most up to\ndate, and it is the most international language. For these reasons, to create\nyour translation we recommend to base it on the English JSON file for each\nrepository. This English base translation is located in the ",Object(o.b)("inlineCode",{parentName:"p"},"locales/en.json"),"\nin each repository:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/agoravoting/agora-gui-common/blob/master/locales/en.json"}),"agora-gui-common/locales/en.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/agoravoting/agora-gui-admin/blob/master/locales/en.json"}),"agora-gui-admin/locales/en.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/agoravoting/agora-gui-elections/blob/master/locales/en.json"}),"agora-gui-elections/locales/en.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/agoravoting/agora-gui-booth/blob/master/locales/en.json"}),"agora-gui-booth/locales/en.json"))),Object(o.b)("p",null,"To create a translation, just copy each of those files into the same ",Object(o.b)("inlineCode",{parentName:"p"},"locales/"),"\ndirectory as a new file with a name following the pattern\n",Object(o.b)("inlineCode",{parentName:"p"},"<language-code>.json"),". The language code for each language is defined in\nISO 639-1 and a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"}),"table of codes can be found in Wikipedia"),". For example, the language code for Spanish is ",Object(o.b)("inlineCode",{parentName:"p"},"es"),"\nand for German is ",Object(o.b)("inlineCode",{parentName:"p"},"de"),"."),Object(o.b)("p",null,"Currently the Agora Voting Project contains translations for the following\nlanguages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Catalan (ca)"),Object(o.b)("li",{parentName:"ul"},"English (en)"),Object(o.b)("li",{parentName:"ul"},"Finnish (fi)"),Object(o.b)("li",{parentName:"ul"},"Galician (gl)"),Object(o.b)("li",{parentName:"ul"},"Spanish (es)"),Object(o.b)("li",{parentName:"ul"},"Swedish (sv)")),Object(o.b)("h3",{id:"step-2-building-the-translations"},"Step 2. Building the translations"),Object(o.b)("p",null,"Once we have written the translation files and put them in the corresponding\n",Object(o.b)("inlineCode",{parentName:"p"},"locales/")," directories with the proper file names, we are not finished yet. We\nhave to modify the building system to incorporate these files."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"agora-gui-*")," repositories use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gruntjs.com/"}),"GruntJS")," task\nrunner  for building and bundling the javascript code. In each of the\n",Object(o.b)("inlineCode",{parentName:"p"},"agora-gui-*")," repositories you will find a top level file called ",Object(o.b)("inlineCode",{parentName:"p"},"Gruntfile.js"),"\nthat we will need to modify."),Object(o.b)("p",null,"The required modifications are pretty simple. Just search for the string\n",Object(o.b)("inlineCode",{parentName:"p"},"locales/")," inside the file ",Object(o.b)("inlineCode",{parentName:"p"},"Gruntfile.js")," and you will find usually one or two\nplaces where i18n files are processed. For example, in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/agoravoting/agora-gui-common/blob/master/Gruntfile.js#L207"}),"agora-gui-common/Gruntfile.js")," around line 207 you will find\nsomething like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="agora-gui-common/Gruntfile.js fragment"',title:'"agora-gui-common/Gruntfile.js','fragment"':!0}),'    "merge-json": {\n      main: {\n        files: {\n            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],\n            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],\n            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],\n            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],\n            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],\n            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]\n        }\n      }\n    },\n')),Object(o.b)("p",null,"If you are adding a translation for Icelandic (",Object(o.b)("inlineCode",{parentName:"p"},"is")," language code), you should\nadd the following line in between:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="agora-gui-common/Gruntfile.js fragment"',title:'"agora-gui-common/Gruntfile.js','fragment"':!0}),'            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],\n')),Object(o.b)("p",null,"Ending up with the ",Object(o.b)("inlineCode",{parentName:"p"},"merge-json")," task inside the file ",Object(o.b)("inlineCode",{parentName:"p"},"Gruntfile.js")," being as\nfollows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="agora-gui-common/Gruntfile.js fragment" {7}',title:'"agora-gui-common/Gruntfile.js','fragment"':!0,"{7}":!0}),'    "merge-json": {\n      main: {\n        files: {\n            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],\n            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],\n            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],\n            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],\n            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],\n            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],\n            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]\n        }\n      }\n    },\n')),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"merge-json")," task joins the translation files for each language from the\n",Object(o.b)("inlineCode",{parentName:"p"},"locales/")," directory and from the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," directory. "),Object(o.b)("p",null,"You'll notice that the  string ",Object(o.b)("inlineCode",{parentName:"p"},"locales/")," appears in another section inside the\nfile ",Object(o.b)("inlineCode",{parentName:"p"},"Gruntfile.js"),", in the ",Object(o.b)("inlineCode",{parentName:"p"},"uglify")," section around ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/agoravoting/agora-gui-common/blob/master/Gruntfile.js#L226"}),"line 226"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="agora-gui-common/Gruntfile.js fragment" {15-17}',title:'"agora-gui-common/Gruntfile.js','fragment"':!0,"{15-17}":!0}),"    uglify: {\n      main: {\n        options:{\n          mangle: false,\n          compress: {},\n          beautify: true\n        },\n        files: {\n          'dist/appCommon-v20.2.0.js': 'temp/app.js',\n          'dist/libCommon-v20.2.0.js': 'temp/lib.js',\n          'dist/libnocompat-v20.2.0.js': 'temp/libnocompat.js',\n          'dist/libcompat-v20.2.0.js': 'temp/libcompat.js',\n          'dist/avWidgets.js': 'avWidgets.js',\n\n          \"dist/locales/moment/es.js\": \"node_modules/moment/locale/es.js\",\n          \"dist/locales/moment/gl.js\": \"node_modules/moment/locale/gl.js\",\n          \"dist/locales/moment/ca.js\": \"node_modules/moment/locale/ca.js\"\n        }\n")),Object(o.b)("p",null,"This is related to the usage of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://momentjs.com/"}),"momentjs")," library,\nused for internationalization of times and dates. You can add a new line there\nalso for loading the moment internationalization file for your language if there\nis one."),Object(o.b)("p",null,"We have done this for the ",Object(o.b)("inlineCode",{parentName:"p"},"agora-gui-common")," project. We would have to repeat\nthe process for the other three ",Object(o.b)("inlineCode",{parentName:"p"},"agora-gui-*")," projects for which we are adding\ntranslation support for a new language."),Object(o.b)("h3",{id:"step-3-translation-deployment-and-configuration"},"Step 3. Translation deployment and configuration"),Object(o.b)("p",null,"We have now translated the interface to a new language and incorporated the\ntranslations in the building process. The next step is to configure our\ndeployment to include and use the new language translation."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To deploy the Agora Voting project, please follow the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/admin-manual/docs/"}),"Deployment Guide"),"."))),Object(o.b)("p",null,"The configuration is fairly simple. In the ",Object(o.b)("inlineCode",{parentName:"p"},"config.yml")," file inside the\n",Object(o.b)("inlineCode",{parentName:"p"},"agora_gui")," section you can find the following configurations keys:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yml fragment"',title:'"config.yml','fragment"':!0}),"    # Default language of the application\n    language: en\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - en\n      - es\n      - gl\n      - ca\n")),Object(o.b)("p",null,"For example if you want to specify that the default language is going to be\nPolish  (",Object(o.b)("inlineCode",{parentName:"p"},"po")," language code), you would change the ",Object(o.b)("inlineCode",{parentName:"p"},"agora_gui.language")," key to\n",Object(o.b)("inlineCode",{parentName:"p"},"po")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"po")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"languagesWhitelist"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yml fragment" {2,16}',title:'"config.yml','fragment"':!0,"{2,16}":!0}),"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - en\n      - es\n      - gl\n      - ca\n      - po\n")),Object(o.b)("p",null,"If you are doing a deployment only in Polish, you could remove other languages\nfrom the whitelist so that the user won't be able to choose any other language: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yml fragment" {2,12}',title:'"config.yml','fragment"':!0,"{2,12}":!0}),"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - po\n")),Object(o.b)("p",null,"Or maybe you might want to support a secondary language (English for example)\nbut force the default language to be Polish. By default, the user interface will\ntry to detect the preferred language of the web browser, but this behaviour can\nbe overridden using the ",Object(o.b)("inlineCode",{parentName:"p"},"agora_gui.forceLanguage")," setting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yml fragment" {5,13}',title:'"config.yml','fragment"':!0,"{5,13}":!0}),"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: true\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - po\n      - en\n")),Object(o.b)("p",null,"You might have integrated the Agora Voting project deployment with some other\nplatform. If voters access to the Agora Voting interface from some third-party\ninterface, this first interface might have some specific language configuration\nfor each user. When accessing to an Agora Voting deployment link from some other\nweb site, you can modify the access link to force a specific default language\nadding a query string such as ",Object(o.b)("inlineCode",{parentName:"p"},"?lang=pl"),". The name of this URL query string\nparamenter is specified with the ",Object(o.b)("inlineCode",{parentName:"p"},"agora_gui.detectLanguageQueryString"),"\nconfiguration  parameter."),Object(o.b)("h3",{id:"step-4-send-the-pull-request"},"Step 4. Send the Pull Request"),Object(o.b)("p",null,"We welcome your contributions. This is an open source project and we'll be happy\nto accept your pull request adding support for a new language or updating an\nexisting translation. Please ensure you read and follow the step in the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/admin-manual/docs/contribute"}),"Contribution Guide")," to do so."))}g.isMDXComponent=!0}}]);