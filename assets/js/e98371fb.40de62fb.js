"use strict";(self.webpackChunkadmin_manual=self.webpackChunkadmin_manual||[]).push([[714],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=i.createContext({}),c=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(r,".").concat(h)]||u[h]||p[h]||a;return t?i.createElement(m,s(s({ref:n},d),{},{components:t})):i.createElement(m,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2156:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],l={id:"parent-and-children-elections",title:"Parent and Children Elections",sidebar_label:"Parent & Children Elections",slug:"/advanced-elections/parent-and-children-elections"},r=void 0,c={unversionedId:"advanced-elections/parent-and-children-elections",id:"advanced-elections/parent-and-children-elections",isDocsHomePage:!1,title:"Parent and Children Elections",description:"In this document we will review how to create parent and children elections",source:"@site/docs/advanced-elections/parent-children-elections.md",sourceDirName:"advanced-elections",slug:"/advanced-elections/parent-and-children-elections",permalink:"/admin-manual/docs/advanced-elections/parent-and-children-elections",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/advanced-elections/parent-children-elections.md",tags:[],version:"current",frontMatter:{id:"parent-and-children-elections",title:"Parent and Children Elections",sidebar_label:"Parent & Children Elections",slug:"/advanced-elections/parent-and-children-elections"},sidebar:"docsSidebar",previous:{title:"Election Creation",permalink:"/admin-manual/docs/advanced-elections/election-creation"},next:{title:"Write-ins",permalink:"/admin-manual/docs/advanced-elections/write-ins"}},d=[{value:"Virtual vs Parent elections",id:"virtual-vs-parent-elections",children:[]},{value:"Parent and children elections",id:"parent-and-children-elections",children:[]},{value:"University elections example",id:"university-elections-example",children:[{value:"Adding census on election creation",id:"adding-census-on-election-creation",children:[]}]},{value:"Create and manage the elections",id:"create-and-manage-the-elections",children:[]}],p={toc:d};function u(e){var n=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this document we will review how to create parent and children elections\nand what are their characteristics."),(0,a.kt)("p",null,"Sometimes it's required in advanced elections to have some common questions\navailable for all the electorate, and some other questions available to only\nsome of them. For the common questions you might want to have a tally from\neach of these districts, and also a consolidated tally with all of them."),(0,a.kt)("h2",{id:"virtual-vs-parent-elections"},"Virtual vs Parent elections"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Enabling Virtual Elections")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Virtual elections are not enabled by default because for security reasons\nvirtual elections should not be enabled in multi-tenant deployments, as\n",(0,a.kt)("inlineCode",{parentName:"p"},"agora-elections")," do not verify that the election creator has permissions for\naccessing the sub-elections."))),(0,a.kt)("p",null,"There are two different possible types of relations between\nelections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"/admin-manual/docs/advanced-elections/election-creation#election-virtual"},"virtual election")," and its respective\n",(0,a.kt)("a",{parentName:"li",href:"/admin-manual/docs/advanced-elections/election-creation#election-virtualSubelections"},"virtual subelections"),"."),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"/admin-manual/docs/advanced-elections/election-creation#election-parent_id"},"parent election")," and its respective\n",(0,a.kt)("a",{parentName:"li",href:"/admin-manual/docs/advanced-elections/election-creation#election-children_election_info"},"children elections"),".")),(0,a.kt)("p",null,"The first kind of relation (virtual elections and virtual subelections) is\nestablished in ",(0,a.kt)("inlineCode",{parentName:"p"},"agora-elections"),", and its use is allows for electoral results\nconsolidation."),(0,a.kt)("p",null,"The second kind of relation is established in ",(0,a.kt)("inlineCode",{parentName:"p"},"authapi")," and its use is more\nrelated to the authentication, authorization and presentation behaviour in the\nearlier stages of an election, for example during login."),(0,a.kt)("p",null,"Both are closely related/coupled, because usually you want to do both or none.\nThe separation exists simply because ",(0,a.kt)("inlineCode",{parentName:"p"},"authapi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"agora-elections")," are\ndifferent modules that have separated databases."),(0,a.kt)("h2",{id:"parent-and-children-elections"},"Parent and children elections"),(0,a.kt)("p",null,"When a set of election have a parent-children relationship, they have the\nfollowing behaviour:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Admin election list, the children elections are hidden by default and\nonly shown as a dropdown of the parent election."),(0,a.kt)("li",{parentName:"ol"},"In the Admin election dashboard, the parent election can manage the children\nelections. For example starting or stopping the parent election starts/stops\nthe children elections automatically. The parent election dashboard also allows\nto trigger the tally of specific subelections with a chooser widget, and also\nallows to switch to see the election results of specific children elections."),(0,a.kt)("li",{parentName:"ol"},"In the Admin election Census Data, you can assign to each voter a subset of\nthe children elections, to allow a specific subset of children elections. The\nCensus Data section also allows you to view in which children elections has any\nvoter voted."),(0,a.kt)("li",{parentName:"ol"},"In the parent election results public website, there's a chooser widget to\nchoose which children election results to visualize."),(0,a.kt)("li",{parentName:"ol"},"In the voting booth, after authentication the voter will vote without having\nto authenticate again in  the assigned children election in their\n",(0,a.kt)("a",{parentName:"li",href:"/admin-manual/docs/advanced-elections/election-creation#child-election-natural_order"},"natural order")," sequentially.\nIf a voter does  not vote to all the children elections assigned to this voter,\nthen he will be able to authenticate again and vote in the next unvoted\nchildren election.")),(0,a.kt)("h2",{id:"university-elections-example"},"University elections example"),(0,a.kt)("p",null,"The full configuration file for this example can be accesed in\n",(0,a.kt)("a",{target:"_blank",href:t(7149).Z},"university_example.json"),"."),(0,a.kt)("p",null,"Apart from the brief description above, we recommend you delve in to the details\nof election creation reading the\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation"},"election creation documentation")," for reference\ndocumentation. "),(0,a.kt)("p",null,"In this tutorial we are going to create an university electoral process\ncompromised of 3 different elections. The electoral process contains 3 Yes/No\nquestions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"For Everyone"),": Q1: Do you want John to be the University Dean?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"For Students"),": Q2: Do you want Mary to be the Students' Representative?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"For Professors"),": Q3: Do you want Robert to be the Faculty representative?")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Questions and voter groups",src:t(7327).Z})),(0,a.kt)("p",null,"To replicate this, we can use parent and children elections. We would have\nsomething like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Elections and Questions",src:t(2691).Z})),(0,a.kt)("p",null,"In the graphic above the question indexes within each election is indicated\nbetween brackets like ",(0,a.kt)("inlineCode",{parentName:"p"},"[0]"),"."),(0,a.kt)("p",null,"To do so, we will create the elections as described in\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation"},"Election Creation Guide"),". The\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#election-json-settings"},"Election JSON settings")," will be\nsimilar to the following sketch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 100, // election id\n    "title": "Electoral Process",\n    "children_election_info": {\n      "natural_order": [101, 102],\n      "presentation": {\n        "categories": [\n          {\n            "events": [\n              {"event_id": 101, "title": "Students"},\n              {"event_id": 102, "title": "Professors"}\n            ],\n            "id": 1,\n            "title": "Sectors"\n          }\n        ]\n      }\n    },\n    "questions": [\n      {\n        "title": "Q1: Do you want John to be the University Dean?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      },\n      {\n        "title": "Q2: Do you want Mary to be the Students\' Representative?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      },\n      {\n        "title": "Q3: Do you want Robert to be the Faculty representative?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      },\n    ],\n    // ..other election properties for election with id=100 missing here..\n  },\n  {\n    "id": 101, // election id\n    "title": "Students election",\n    "parent_id": 100,\n    "questions": [\n      {\n        "title": "Q1: Do you want John to be the University Dean?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      },\n      {\n        "title": "Q2: Do you want Mary to be the Students\' Representative?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      }\n    ],\n    // ..other election properties for election with id=101 missing here..\n  },\n  {\n    "id": 102, // election id\n    "title": "Professors election",\n    "parent_id": 100,\n    "questions": [\n      {\n        "title": "Q1: Do you want John to be the University Dean?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      },\n      {\n        "title": "Q3: Do you want Robert to be the Faculty representative?",\n        "answers": [\n          {"id": 0, "text": "Yes"},\n          {"id": 1, "text": "No"}\n        ]\n      }\n    ],\n    // ..other election properties for election with id=102 missing here..\n  }\n]\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"There are many missing properties in the configuration above. The sketched",(0,a.kt)("br",{parentName:"p"}),"\n","document is just part of the complete JSON document and if you try to create the\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#creating-elections"},"Election Creation Guide")," it will fail.\nIn the document above we are just showing the parts of the JSON document that\nwe want to explain at this moment. You can access the\n",(0,a.kt)("a",{target:"_blank",href:t(7149).Z},"final document, complete and with some modifications here"),".\nThe modifications will be improvements / evolutions that we will be explaining\nin this document. It is that final document that we will use later to create\nthe elections."))),(0,a.kt)("p",null,"The sketched JSON document above is the configuration regarding the questions\nand the  parent-children relations. See\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#election-children_election_info"},"children_election_info"),"\nfor details."),(0,a.kt)("p",null,"The questions set in the parent election (with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),") are not used for much\nbecause voters will only vote in the children elections. For results\nconsolidation in the parent election we could just use the appropiate\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#results-config-pipes"},"Results Config Pipes")," to clone the\nelection from the subelections. We will do something similar later on. However,\nnote that it's required for all elections to be created with at least one\nquestion - parent election included."),(0,a.kt)("p",null,"What follows is the same JSON configuration as before, but this time we only\nsketched the information regarding the virtual elections and\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#results-config-pipes"},"results config pipes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 100, // election id\n    "virtual": true,\n    "virtualSubelections": [101, 102],\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {\n          // We source votes from source subelection questions to the \n          // appropiate virtual election questions.\n          "type": "agora_results.pipes.multipart.multipart_tally_plaintexts_append_joiner",\n          "params": {\n            "mappings": [\n              {\n                // From: Students Election #101 | Q1\n                "source_election_id": 1,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1\n                "dst_election_id": 0,\n                "dst_question_num": 0\n              },\n              {\n                // From: Professors Election #102 | Q1\n                "source_election_id": 2,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1\n                "dst_election_id": 0,\n                "dst_question_num": 0\n              },\n              {\n                // From: Students Election #101 | Q2\n                "source_election_id": 1,\n                "source_question_num": 1,\n                // To: Electoral Process #100 | Q2\n                "dst_election_id": 0,\n                "dst_question_num": 1\n              },\n              {\n                // From: Professors Election #102 | Q3\n                "source_election_id": 2,\n                "source_question_num": 1,\n                // To: Electoral Process #100 | Q3\n                "dst_election_id": 0,\n                "dst_question_num": 2\n              }\n            ]\n          }\n        },\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    }\n    // ..other election properties for election with id=100 missing here..\n  },\n  {\n    "id": 101,\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    }\n    // ..other election properties for election with id=101 missing here..\n  },\n  {\n    "id": 102,\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    }\n    // ..other election properties for election with id=102 missing here..\n  },\n]\n')),(0,a.kt)("p",null,"The juice of this part is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resultsConfig")," for the virtual election\n(",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),"). As ",(0,a.kt)("inlineCode",{parentName:"p"},"agora-results")," doesn't know the id of the subelections, it\nreferences to the subelections by array index. The virtual election (with\n",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),") has always array index ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Then the sub-elections are indexed in the",(0,a.kt)("br",{parentName:"p"}),"\n","order of appeareance in the ",(0,a.kt)("inlineCode",{parentName:"p"},"virtualSubelections")," property. Thus, within\n",(0,a.kt)("inlineCode",{parentName:"p"},"agora-results")," the indexes of elections transform this way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Electoral Process #100 => Election Index 0"),(0,a.kt)("li",{parentName:"ul"},"Students Election #101 => Election Index 1"),(0,a.kt)("li",{parentName:"ul"},"Professors Election #102 => Election Index 2")),(0,a.kt)("p",null,"We are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart_tally_plaintexts_append_joiner")," pipe to source\nballots from the subelections to the virtual election for results consolidation."),(0,a.kt)("p",null,"We would want three different versions of the results for Q1:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Q1 Consolidated results of both students and professors."),(0,a.kt)("li",{parentName:"ol"},"Q1 Results from students."),(0,a.kt)("li",{parentName:"ol"},"Q1 Results from professors.")),(0,a.kt)("p",null,"The consolidated results for Q1 will appear in the election with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),". That\nelection will also show the results for Q2 and Q3 because we ensured to source\nballots for those questions from the sub-elections in which the students and\nprofessors voted."),(0,a.kt)("p",null,"We could further improve the election with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100")," election results to contain\nthere all the electoral information and not just consolidated elections. We could\nclone twice Q1 and adjust the title of the cloned questions to do something\nlike:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Elections and Questions Improved",src:t(7106).Z})," "),(0,a.kt)("p",null,"The configuration file sketch would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 100,\n    "virtual": true,\n    "virtualSubelections": [101, 102],\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {\n          // We duplicate Q1 in election with array index 0 (Electoral Process \n          // #100) into question indexes 1 and 2 for students and professors, \n          // with empty ballots as votes will be sourced later with the \n          // multipart_tally_plaintexts_append_joiner pipe.\n          "type": "agora_results.pipes.duplicate_questions.duplicate_questions",\n          "params": {\n            "duplications": [\n              {\n                "source_election_index": 0,\n                "base_question_index": 0,\n                "duplicated_question_indexes": [1, 2],\n                "zero_plaintexts": true\n              }\n            ]\n          }\n        },\n\n        {\n          "type": "agora_results.pipes.modifications.apply_modifications",\n          "params": {\n            "modifications": [\n              {\n                "action": "set-title",\n                "question_index": 0,\n                "title": "Q1 all: Do you want John to be the University Dean?"\n              },\n              {\n                "action": "set-title",\n                "question_index": 1,\n                "title": "Q1 students: Do you want John to be the University Dean?"\n              },\n              {\n                "action": "set-title",\n                "question_index": 2,\n                "title": "Q1 professors: Do you want John to be the University Dean?"\n              }\n            ]\n          }\n        },\n        {\n          // We source votes from source subelection questions to the\n          // appropiate virtual election questions.\n          "type": "agora_results.pipes.multipart.multipart_tally_plaintexts_append_joiner",\n          "params": {\n            "mappings": [\n              {\n                // From: Students Election #101 | Q1\n                "source_election_id": 1,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1 all\n                "dst_election_id": 0,\n                "dst_question_num": 0\n              },\n              {\n                // From: Students Election #101 | Q1\n                "source_election_id": 1,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1 students\n                "dst_election_id": 0,\n                "dst_question_num": 1\n              },\n              {\n                // From: Professors Election #102 | Q1\n                "source_election_id": 2,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1 all\n                "dst_election_id": 0,\n                "dst_question_num": 0\n              },\n              {\n                // From: Professors Election #102 | Q1\n                "source_election_id": 2,\n                "source_question_num": 0,\n                // To: Electoral Process #100 | Q1 professors\n                "dst_election_id": 0,\n                "dst_question_num": 2\n              },\n              {\n                // From: Students Election #101 | Q2\n                "source_election_id": 1,\n                "source_question_num": 1,\n                // To: Electoral Process #100 | Q2\n                "dst_election_id": 0,\n                "dst_question_num": 3\n              },\n              {\n                // From: Professors Election #102 | Q3\n                "source_election_id": 2,\n                "source_question_num": 1,\n                // To: Electoral Process #100 | Q3\n                "dst_election_id": 0,\n                "dst_question_num": 4\n              }\n            ]\n          }\n        },\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    // ..other election properties for election with id=100 missing here..\n    }\n  },\n  {\n    "id": 101,\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    }\n    // ..other election properties for election with id=101 missing here..\n  },\n  {\n    "id": 102,\n    "resultsConfig": {\n      "version": "1.0",\n      "pipes": [\n        {"type": "agora_results.pipes.results.do_tallies", "params": {}},\n        {"type": "agora_results.pipes.sort.sort_non_iterative", "params": {}}\n      ]\n    }\n    // ..other election properties for election with id=102 missing here..\n  },\n]\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In a powerful system such as the Agora Voting project, sometimes there are\nmultiple ways to do the same thing. That is the case with this last results\npipes configuration for election with id=1 in this last example. It is more\ncomplicated than needed in this case. This is done just for demonstration\npurposes, to demonstrate you what kind of things you can do with the agora\nresults pipe system and to demonstrate that the questions shown in the\nelection results don't need to be the same as the original election question\nlist."),(0,a.kt)("p",{parentName:"div"},"Instead of duplicating ",(0,a.kt)("inlineCode",{parentName:"p"},"Q1")," twice for election with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100")," and then changing\nthose three question titles adding the prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"Q1 all"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Q1 students")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"Q1 professors"),", we could have just applied those changes directly in the list\nof original questions for the election with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),". Of course, to obtain the\nsame election results you would still have to apply the same\n",(0,a.kt)("inlineCode",{parentName:"p"},"multipart_tally_plaintexts_append_joiner")," pipe that sources the ballots from\nthe right children election questions into the pertinent parent election\nquestions."),(0,a.kt)("p",{parentName:"div"},"We leave to the reader the task of modifying the JSON document of the elections\nto apply those changes as an exercise."))),(0,a.kt)("h3",{id:"adding-census-on-election-creation"},"Adding census on election creation"),(0,a.kt)("p",null,"As described in\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#assigning-children-elections-in-parent-election-census"},"the census API"),"\nyou can set the census for the parent election to specify in which children\nelections can a voter vote. "),(0,a.kt)("p",null,"Let's add a couple students and one professor in our example json config sketch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 100,\n    // ..other election properties for election with id=100 missing here..\n    "census": {\n      "voters": [\n        {\n          "metadata": {\n            "email": "student1@example.com",\n            "children_event_id_list": [101]\n          }\n        },\n        {\n          "metadata": {\n            "email": "student2@example.com",\n            "children_event_id_list": [101]\n          }\n        },\n        {\n          "metadata": {\n            "email": "professor1@example.com",\n            "children_event_id_list": [102]\n          }\n        },\n      ],\n      "extra_fields": [],\n      "admin_fields": [],\n      "has_ballot_boxes": false,\n      "auth_method": "email",\n      "census": "close"\n    }\n  },\n  {\n    "id": 101\n    // ..other election properties for election with id=101 missing here..\n  },\n  {\n    "id": 102\n    // ..other election properties for election with id=102 missing here..\n  }\n]\n')),(0,a.kt)("h2",{id:"create-and-manage-the-elections"},"Create and manage the elections"),(0,a.kt)("p",null,"The complete elections JSON configuration of our university elections example\ncan be found in the\n",(0,a.kt)("a",{target:"_blank",href:t(7149).Z},"university_example.json")," file."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"election cannot be created?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you have already not only registered but created any election with ids ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"101")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"102"),", you will have to modify the ids (and all its references) to use\nother election ids. ",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#modifying-elections"},"More details here"),"."),(0,a.kt)("p",{parentName:"div"},"Also, please note that you will need to modify the example to correctly name\nthe election authorities in your deployment. We are using ",(0,a.kt)("inlineCode",{parentName:"p"},"test-a1")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"test-a2")," in the ",(0,a.kt)("a",{target:"_blank",href:t(7149).Z},"university_example.json"),",\nbut you might need to change that."))),(0,a.kt)("p",null,"Please read and follow the\n",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation"},"guide on how to create the elections")," to do so. When you\nreach to the step of editing the elections JSON, after applying the content of\nthe ",(0,a.kt)("a",{target:"_blank",href:t(7149).Z},"university_example.json"),", you will see\nthe following screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create University Elections",src:t(8121).Z})),(0,a.kt)("p",null,"If you scroll down and click in ",(0,a.kt)("inlineCode",{parentName:"p"},"Create the elections"),", they will be created.\nAfterwards, the interface will redirect you to the dashboard of the first\nelection created, the parent election with ",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Parent Election Dashboard",src:t(3960).Z})),(0,a.kt)("p",null,"If you go back to the election list (clicking in the sidebar menu item\n",(0,a.kt)("inlineCode",{parentName:"p"},"Elections"),"), you will notice that only the parent election is listed:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Election List shows only parent",src:t(4293).Z})),(0,a.kt)("p",null,"However, you will see that this election has a left notch ",(0,a.kt)("inlineCode",{parentName:"p"},">"),". If you click\nthere, you will see the expanded list of children elections related to this\nparent election:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Election List with Parent expanded",src:t(2303).Z})),(0,a.kt)("p",null,"If you click in the Parent Election (",(0,a.kt)("inlineCode",{parentName:"p"},"id=100"),"), then go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Census Data"),"\nsection and then click in ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," button and in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add person..")," menu item,\nyou will see the following dialog:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add person to census",src:t(1600).Z})),(0,a.kt)("p",null,"Voters can only authenticate in parent elections - they won't be able to\ndirectly authenticate in the children election. And you should work the census\nin the parent elections only too. "),(0,a.kt)("p",null,"When you add the census to the parent election, something you can do either\ndirectly ",(0,a.kt)("a",{parentName:"p",href:"/admin-manual/docs/advanced-elections/election-creation#census-config-object"},"during election creation"),"\nor afterwards using the actions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Census Data")," section, you will be able\nto assign voters to children elections in which they will be able to vote. "),(0,a.kt)("p",null,"We'll register our census using the actions in ",(0,a.kt)("inlineCode",{parentName:"p"},"Census Data"),". Lets register a\nstudent, so we will only to let this voter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Students Election"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add person to census example",src:t(4716).Z})),(0,a.kt)("p",null,"Once confirmed and added to the census, you will be able to see the column that\nmarks in which children elections can this voter participate:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add person to census example",src:t(2541).Z})))}u.isMDXComponent=!0},7149:function(e,n,t){n.Z=t.p+"assets/files/university_example-655764f0582a9b34fad6a92bc5a2f09e.yaml"},2691:function(e,n,t){n.Z=t.p+"assets/images/elections_and_questions-3a1a90f3c361d6c884815c0531ab6762.svg"},7106:function(e,n,t){n.Z=t.p+"assets/images/elections_and_questions_2-9a17842a8f7b9069f2e2bb802a6c95e6.svg"},7327:function(e,n,t){n.Z=t.p+"assets/images/questions_and_voter_groups-e337be00614bfc4c9b73feca6a2a59dc.svg"},1600:function(e,n,t){n.Z=t.p+"assets/images/university_example_add_person-351cadba693ec92980244e325f9254a3.png"},4716:function(e,n,t){n.Z=t.p+"assets/images/university_example_add_person_edulix-49ed7ada058e786053c73da0bc664f12.png"},8121:function(e,n,t){n.Z=t.p+"assets/images/university_example_create_elections-2d2ca5188b94bbdefee2d1b830b0f357.png"},4293:function(e,n,t){n.Z=t.p+"assets/images/university_example_election_list-258c381e5fc179e73424dc9fb28c34c4.png"},2303:function(e,n,t){n.Z=t.p+"assets/images/university_example_election_list_expanded-6d5a9dadc6c25cdfff16b66ee1f6a9cd.png"},2541:function(e,n,t){n.Z=t.p+"assets/images/university_example_filled_census-baca353cc1de3f50ab3816a66347570e.png"},3960:function(e,n,t){n.Z=t.p+"assets/images/university_example_parent_dashboard-ccda5e94e03ea2c7f096042877277724.png"}}]);