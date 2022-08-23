"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[936],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,h=d["".concat(r,".").concat(g)]||d[g]||c[g]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(3117),i=(t(7294),t(3905));const l={sidebar_position:3,title:"Translation Guide"},o=void 0,s={unversionedId:"general/contribute/translation/translation",id:"general/contribute/translation/translation",title:"Translation Guide",description:"This document describes how to translate the Sequent Tech project to a new",source:"@site/docs/general/contribute/translation/translation.md",sourceDirName:"general/contribute/translation",slug:"/general/contribute/translation/",permalink:"/documentation/docs/general/contribute/translation/",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/contribute/translation/translation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Translation Guide"},sidebar:"generalSidebar",previous:{title:"Release How-to",permalink:"/documentation/docs/general/contribute/release-howto"},next:{title:"Production Readiness Checklist",permalink:"/documentation/docs/general/contribute/production-readiness"}},r={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How to translate <code>sequent-ui</code>",id:"how-to-translate-sequent-ui",level:2},{value:"Step 1. Writing the translations",id:"step-1-writing-the-translations",level:3},{value:"Step 2. Building the translations",id:"step-2-building-the-translations",level:3},{value:"Step 3. Translation deployment and configuration",id:"step-3-translation-deployment-and-configuration",level:3},{value:"Step 4. Send the Pull Request",id:"step-4-send-the-pull-request",level:3},{value:"How to translate <code>tally-pipes</code>",id:"how-to-translate-tally-pipes",level:2},{value:"Step 1. Writing the translations",id:"step-1-writing-the-translations-1",level:3},{value:"Step 2. Building the translations",id:"step-2-building-the-translations-1",level:3},{value:"Step 3. Choosing the PDF results language",id:"step-3-choosing-the-pdf-results-language",level:3},{value:"Step 4. Send the Pull Request",id:"step-4-send-the-pull-request-1",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to translate the Sequent Tech project to a new\nlanguage."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Sequent Tech project user interface is written in javascript using Angular 1\nand uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18next")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ng-i18next"},"ng-i18next")," for internationalization\n(i18n for short)."),(0,i.kt)("p",null,"The user interface is divided in 4 different repositories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"common-ui"),": A common library used by the other three."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"admin-console"),": The election administrator interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"election-portal"),": The public election interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"voting-booth"),": The voting booth interface.")),(0,i.kt)("p",null,"Each repository has its own set of translation files. The format of these files\nis in JSON and is ",(0,i.kt)("a",{parentName:"p",href:"https://www.i18next.com/misc/json-format#i-18-next-json-v1"},"roughly defined here (JSON v1 i18next format)"),"."),(0,i.kt)("p",null,"There's also translation files in ",(0,i.kt)("strong",{parentName:"p"},"tally-pipes"),", currently just for\ngenerating PDF results in the chosen language. These work with ",(0,i.kt)("inlineCode",{parentName:"p"},"gettext")," ",(0,i.kt)("inlineCode",{parentName:"p"},".po"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},".pot")," files. "),(0,i.kt)("p",null,"This guide is grouped in two sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to translate ",(0,i.kt)("inlineCode",{parentName:"li"},"sequent-ui-*"),"."),(0,i.kt)("li",{parentName:"ol"},"How to translate ",(0,i.kt)("inlineCode",{parentName:"li"},"tally-pipes"),".")),(0,i.kt)("h2",{id:"how-to-translate-sequent-ui"},"How to translate ",(0,i.kt)("inlineCode",{parentName:"h2"},"sequent-ui")),(0,i.kt)("h3",{id:"step-1-writing-the-translations"},"Step 1. Writing the translations"),(0,i.kt)("p",null,"The English version of the translation JSON files is usually the most up to\ndate, and it is the most international language. For these reasons, to create\nyour translation we recommend to base it on the English JSON file for each\nrepository. This English base translation is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"locales/en.json"),"\nin each repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sequentech/common-ui/blob/master/locales/en.json"},"common-ui/locales/en.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sequentech/admin-console/blob/master/locales/en.json"},"admin-console/locales/en.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sequentech/election-portal/blob/master/locales/en.json"},"election-portal/locales/en.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sequentech/voting-booth/blob/master/locales/en.json"},"voting-booth/locales/en.json"))),(0,i.kt)("p",null,"To create a translation, just copy each of those files into the same ",(0,i.kt)("inlineCode",{parentName:"p"},"locales/"),"\ndirectory as a new file with a name following the pattern\n",(0,i.kt)("inlineCode",{parentName:"p"},"<language-code>.json"),". The language code for each language is defined in\nISO 639-1 and a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"table of codes can be found in Wikipedia"),". For example, the language code for Spanish is ",(0,i.kt)("inlineCode",{parentName:"p"},"es"),"\nand for German is ",(0,i.kt)("inlineCode",{parentName:"p"},"de"),"."),(0,i.kt)("p",null,"Currently the Sequent Tech Project contains translations for the following\nlanguages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Catalan (ca)"),(0,i.kt)("li",{parentName:"ul"},"English (en)"),(0,i.kt)("li",{parentName:"ul"},"Finnish (fi)"),(0,i.kt)("li",{parentName:"ul"},"Galician (gl)"),(0,i.kt)("li",{parentName:"ul"},"Spanish (es)"),(0,i.kt)("li",{parentName:"ul"},"Swedish (sv)")),(0,i.kt)("h3",{id:"step-2-building-the-translations"},"Step 2. Building the translations"),(0,i.kt)("p",null,"Once we have written the translation files and put them in the corresponding\n",(0,i.kt)("inlineCode",{parentName:"p"},"locales/")," directories with the proper file names, we are not finished yet. We\nhave to modify the building system to incorporate these files."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sequent-ui-*")," repositories use the ",(0,i.kt)("a",{parentName:"p",href:"https://gruntjs.com/"},"GruntJS")," task\nrunner  for building and bundling the javascript code. In each of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"sequent-ui-*")," repositories you will find a top level file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Gruntfile.js"),"\nthat we will need to modify."),(0,i.kt)("p",null,"The required modifications are pretty simple. Just search for the string\n",(0,i.kt)("inlineCode",{parentName:"p"},"locales/")," inside the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," and you will find usually one or two\nplaces where i18n files are processed. For example, in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sequentech/common-ui/blob/master/Gruntfile.js#L207"},"common-ui/Gruntfile.js")," around line 207 you will find\nsomething like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="common-ui/Gruntfile.js fragment"',title:'"common-ui/Gruntfile.js','fragment"':!0},'    "merge-json": {\n      main: {\n        files: {\n            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],\n            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],\n            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],\n            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],\n            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],\n            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]\n        }\n      }\n    },\n')),(0,i.kt)("p",null,"If you are adding a translation for Icelandic (",(0,i.kt)("inlineCode",{parentName:"p"},"is")," language code), you should\nadd the following line in between:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="common-ui/Gruntfile.js fragment"',title:'"common-ui/Gruntfile.js','fragment"':!0},'            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],\n')),(0,i.kt)("p",null,"Ending up with the ",(0,i.kt)("inlineCode",{parentName:"p"},"merge-json")," task inside the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," being as\nfollows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="common-ui/Gruntfile.js fragment" {7}',title:'"common-ui/Gruntfile.js','fragment"':!0,"{7}":!0},'    "merge-json": {\n      main: {\n        files: {\n            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],\n            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],\n            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],\n            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],\n            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],\n            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],\n            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]\n        }\n      }\n    },\n')),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"merge-json")," task joins the translation files for each language from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"locales/")," directory and from the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," directory. "),(0,i.kt)("p",null,"You'll notice that the  string ",(0,i.kt)("inlineCode",{parentName:"p"},"locales/")," appears in another section inside the\nfile ",(0,i.kt)("inlineCode",{parentName:"p"},"Gruntfile.js"),", in the ",(0,i.kt)("inlineCode",{parentName:"p"},"uglify")," section around ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sequentech/common-ui/blob/master/Gruntfile.js#L226"},"line 226"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="common-ui/Gruntfile.js fragment" {15-17}',title:'"common-ui/Gruntfile.js','fragment"':!0,"{15-17}":!0},"    uglify: {\n      main: {\n        options:{\n          mangle: false,\n          compress: {},\n          beautify: true\n        },\n        files: {\n          'dist/appCommon-v20.2.0.js': 'temp/app.js',\n          'dist/libCommon-v20.2.0.js': 'temp/lib.js',\n          'dist/libnocompat-v20.2.0.js': 'temp/libnocompat.js',\n          'dist/libcompat-v20.2.0.js': 'temp/libcompat.js',\n          'dist/avWidgets.js': 'avWidgets.js',\n\n          \"dist/locales/moment/es.js\": \"node_modules/moment/locale/es.js\",\n          \"dist/locales/moment/gl.js\": \"node_modules/moment/locale/gl.js\",\n          \"dist/locales/moment/ca.js\": \"node_modules/moment/locale/ca.js\"\n        }\n")),(0,i.kt)("p",null,"This is related to the usage of the ",(0,i.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"momentjs")," library,\nused for internationalization of times and dates. You can add a new line there\nalso for loading the moment internationalization file for your language if there\nis one."),(0,i.kt)("p",null,"We have done this for the ",(0,i.kt)("inlineCode",{parentName:"p"},"common-ui")," project. We would have to repeat\nthe process for the other three ",(0,i.kt)("inlineCode",{parentName:"p"},"sequent-ui-*")," projects for which we are adding\ntranslation support for a new language."),(0,i.kt)("h3",{id:"step-3-translation-deployment-and-configuration"},"Step 3. Translation deployment and configuration"),(0,i.kt)("p",null,"We have now translated the interface to a new language and incorporated the\ntranslations in the building process. The next step is to configure our\ndeployment to include and use the new language translation."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To deploy the Sequent Tech project, please follow the\n",(0,i.kt)("a",{parentName:"p",href:"../../guides/deployment"},"Deployment Guide"),".")),(0,i.kt)("p",null,"The configuration is fairly simple. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"sequent_ui")," section you can find the following configurations keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml fragment"',title:'"config.yml','fragment"':!0},"    # Default language of the application\n    language: en\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - en\n      - es\n      - gl\n      - ca\n")),(0,i.kt)("p",null,"For example if you want to specify that the default language is going to be\nPolish  (",(0,i.kt)("inlineCode",{parentName:"p"},"po")," language code), you would change the ",(0,i.kt)("inlineCode",{parentName:"p"},"sequent_ui.language")," key to\n",(0,i.kt)("inlineCode",{parentName:"p"},"po")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"po")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"languagesWhitelist"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml fragment" {2,16}',title:'"config.yml','fragment"':!0,"{2,16}":!0},"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - en\n      - es\n      - gl\n      - ca\n      - po\n")),(0,i.kt)("p",null,"If you are doing a deployment only in Polish, you could remove other languages\nfrom the whitelist so that the user won't be able to choose any other language: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml fragment" {2,12}',title:'"config.yml','fragment"':!0,"{2,12}":!0},"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: false\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - po\n")),(0,i.kt)("p",null,"Or maybe you might want to support a secondary language (English for example)\nbut force the default language to be Polish. By default, the user interface will\ntry to detect the preferred language of the web browser, but this behaviour can\nbe overridden using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sequent_ui.forceLanguage")," setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml fragment" {5,13}',title:'"config.yml','fragment"':!0,"{5,13}":!0},"    # Default language of the application\n    language: po\n\n    # Forces the default language\n    forceLanguage: true\n\n    # Specifies the set language query string\n    detectLanguageQueryString: lang\n\n    # Specifies what translations will be available\n    languagesWhitelist:\n      - po\n      - en\n")),(0,i.kt)("p",null,"You might have integrated the Sequent Tech project deployment with some other\nplatform. If voters access to the Sequent Tech interface from some third-party\ninterface, this first interface might have some specific language configuration\nfor each user. When accessing to an Sequent Tech deployment link from some other\nweb site, you can modify the access link to force a specific default language\nadding a query string such as ",(0,i.kt)("inlineCode",{parentName:"p"},"?lang=pl"),". The name of this URL query string\nparamenter is specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sequent_ui.detectLanguageQueryString"),"\nconfiguration  parameter."),(0,i.kt)("h3",{id:"step-4-send-the-pull-request"},"Step 4. Send the Pull Request"),(0,i.kt)("p",null,"We welcome your contributions. This is an open source project and we'll be happy\nto accept your pull request adding support for a new language or updating an\nexisting translation. Please ensure you read and follow the step in the\n",(0,i.kt)("a",{parentName:"p",href:"../../contribute/contribute-guide"},"Contribution Guide")," to do so."),(0,i.kt)("h2",{id:"how-to-translate-tally-pipes"},"How to translate ",(0,i.kt)("inlineCode",{parentName:"h2"},"tally-pipes")),(0,i.kt)("h3",{id:"step-1-writing-the-translations-1"},"Step 1. Writing the translations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tally-pipes")," is written in Python and executes in the backend. It uses the\nstandard ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/gettext.html"},"gettext")," library for\ninternationalization in Python projects. We use\n",(0,i.kt)("a",{parentName:"p",href:"http://babel.pocoo.org/en/latest/"},"Babel")," for extracting i18n strings\nand for compiling them and loosely followed\n",(0,i.kt)("a",{parentName:"p",href:"https://www.mattlayman.com/blog/2015/i18n/"},"this guide"),"."),(0,i.kt)("p",null,"The i18n strings inside the code are directly in English language and located\ncurrently only the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sequentech/tally-pipes/blob/master/tally_pipes/pipes/pdf.py"},(0,i.kt)("inlineCode",{parentName:"a"},"tally_pipes/pipes/pdf.py"))," file. The translation template is located in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sequentech/tally-pipes/blob/master/tally_pipes/pipes/locale/pipes.pot"},(0,i.kt)("inlineCode",{parentName:"a"},"tally_pipes/pipes/locale/pipes.pot"))," and the translation for each language are\nto be located in a path following the pattern\n",(0,i.kt)("inlineCode",{parentName:"p"},"tally_pipes/pipes/locale/<lang-code>/LC_MESSAGES/pipes.po"),"."),(0,i.kt)("p",null,"To create a translation, just copy ",(0,i.kt)("inlineCode",{parentName:"p"},"tally_pipes/pipes/locale/pipes.pot"),"\ninto a new file following the previously mentioned pattern\n",(0,i.kt)("inlineCode",{parentName:"p"},"tally_pipes/pipes/locale/<lang-code>/LC_MESSAGES/pipes.po"),". The language code\nfor each language is defined in\nISO 639-1 and a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"table of codes can be found in Wikipedia"),". For example, the language code for Spanish is ",(0,i.kt)("inlineCode",{parentName:"p"},"es"),"\nand for German is ",(0,i.kt)("inlineCode",{parentName:"p"},"de"),"."),(0,i.kt)("p",null,"Currently ",(0,i.kt)("inlineCode",{parentName:"p"},"tally-pipes")," contains translations for the following languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"English (en, the default)"),(0,i.kt)("li",{parentName:"ul"},"Spanish (es)")),(0,i.kt)("h3",{id:"step-2-building-the-translations-1"},"Step 2. Building the translations"),(0,i.kt)("p",null,"Each time an i18n string is changed, removed or added to the code, you should\nrun the following command to update the translation template (the\n",(0,i.kt)("inlineCode",{parentName:"p"},"tally_pipes/pipes/locale/pipes.pot")," file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# run in the `tally-pipes` directory\npython setup.py extract_messages\n")),(0,i.kt)("p",null,"After updating a translation or adding a new one, you should rebuild the\ntranslation files. Even if translations are written in plaintext (",(0,i.kt)("inlineCode",{parentName:"p"},".po")," format),\nthey are used in compiled format, as this is the way the venerable ",(0,i.kt)("inlineCode",{parentName:"p"},"gettext"),"\nlibrary (+30 years old) works. This compilation can be done with the following\ncommand in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tally-pipes")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# run in the `tally-pipes` directory\npython setup.py compile_catalog\n")),(0,i.kt)("h3",{id:"step-3-choosing-the-pdf-results-language"},"Step 3. Choosing the PDF results language"),(0,i.kt)("p",null,"By default, the election results are shown in english. Of course, this can be\nchanged. The PDF election results are generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"tally-pipes"),". The way to\napply any configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"tally-pipes")," is through the\n",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#results-config-pipes"},"Results config pipes"),"."),(0,i.kt)("p",null,"By default, the language is English and the default election results config\npipes is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="election_pipes.json fragment" {7}',title:'"election_pipes.json','fragment"':!0,"{7}":!0},'{\n  "version": "1.0",\n  "pipes": [\n    {\n      "type": "tally_pipes.pipes.pdf.configure_pdf",\n      "params": {\n        "languages": ["en"] \n      }\n    },\n    {\n      "type": "tally_pipes.pipes.results.do_tallies",\n      "params": {}\n    },\n    {\n      "type": "tally_pipes.pipes.sort.sort_non_iterative",\n      "params": {}\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You can specify the language of the PDF election results changing the\nhighlighted line. For example, if you want the election results in Spanish,\nthe line would be ",(0,i.kt)("inlineCode",{parentName:"p"},'"languages": ["es"]')," instead."),(0,i.kt)("h3",{id:"step-4-send-the-pull-request-1"},"Step 4. Send the Pull Request"),(0,i.kt)("p",null,"We welcome your contributions. This is an open source project and we'll be happy\nto accept your pull request adding support for a new language or updating an\nexisting translation. Please ensure you read and follow the step in the\n",(0,i.kt)("a",{parentName:"p",href:"../../contribute/contribute-guide"},"Contribution Guide")," to do so."))}c.isMDXComponent=!0}}]);