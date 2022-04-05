"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[932],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={id:"write-ins",title:"Write-ins",sidebar_label:"Write-ins",slug:"/advanced-elections/write-ins"},l=void 0,c={unversionedId:"advanced-elections/write-ins",id:"advanced-elections/write-ins",isDocsHomePage:!1,title:"Write-ins",description:"Introduction",source:"@site/docs/advanced-elections/write-ins.md",sourceDirName:"advanced-elections",slug:"/advanced-elections/write-ins",permalink:"/documentation/docs/advanced-elections/write-ins",editUrl:"https://github.com/sequentech/documentation/edit/master/docs/advanced-elections/write-ins.md",tags:[],version:"current",frontMatter:{id:"write-ins",title:"Write-ins",sidebar_label:"Write-ins",slug:"/advanced-elections/write-ins"},sidebar:"docsSidebar",previous:{title:"Parent & Children Elections",permalink:"/documentation/docs/advanced-elections/parent-and-children-elections"},next:{title:"Authentication Timeouts",permalink:"/documentation/docs/advanced-elections/authentication-timeouts"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"How to",id:"how-to",children:[{value:"Election creation JSON",id:"election-creation-json",children:[]},{value:"Voting booth: behaviour and considerations",id:"voting-booth-behaviour-and-considerations",children:[]},{value:"Election results: the ballot list",id:"election-results-the-ballot-list",children:[]},{value:"Election results: the election results",id:"election-results-the-election-results",children:[]}]}],u={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Sequent Platform supports elections with write-in candidates. In this kind of\nelection the voter can not only vote to the names that appear on the ballot but\nalso any person's name that the voter writes in the ballot."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"election-creation-json"},"Election creation JSON"),(0,a.kt)("p",null,"The write-ins support is specified in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/election-creation-json"},"Election creation JSON configuration"),"\nand it's configured per question. During the creation of the election, there's\nno native support in the Admin interface to mark a candidate as a write-in, so\nthe only way to do it is using the JSON configuration."),(0,a.kt)("p",null,"To create an election with write-ins in a specific question, you first need\nto configure the question to support write-ins. This is done by setting the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/election-creation-json#question-extra-allow_writeins"},(0,a.kt)("inlineCode",{parentName:"a"},"question.extra_options.allow_writeins")),"\nsetting to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="writeins-election.json fragment" {7}',title:'"writeins-election.json','fragment"':!0,"{7}":!0},'    ... rest of the configution ....\n\n    "questions": [\n      {\n        "title": "Test question",\n        "extra_options": {\n          "allow_writeins": true,\n\n    ... rest of the configution ....\n')),(0,a.kt)("p",null,"You also need to add to the question at least one answer with an empty text\n(as it will be provided by the voter, not you) that is marked to be a write-in\nby ensuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"answer.urls")," list contains the element\n",(0,a.kt)("inlineCode",{parentName:"p"},'{"title": "isWriteIn", "url": "true"}'),"."),(0,a.kt)("p",null,"For example, if you had 3 normal candidates ",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate A"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate B")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate C")," and allow voters to provide one write-in candidate, the election\nJSON configuration would be similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="writeins-election.json fragment" {18-24}',title:'"writeins-election.json','fragment"':!0,"{18-24}":!0},'... rest of the election configution ....\n    "answers": [\n      {\n        "category": "", "details": "", "id": 0, "sort_order": 0,\n        "text": "Candidate A",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 1, "sort_order": 1,\n        "text": "Candidate B",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 2, "sort_order": 2,\n        "text": "Candidate C",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 3, "sort_order": 3,\n        "text": "",\n        "urls": [\n          {"title": "isWriteIn", "url": "true"}\n        ]\n      }\n    ]\n... rest of the election configution ....\n')),(0,a.kt)("p",null,"Currently the only\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/election-creation-json#question-layout"},"question layout"),"\nin the voting booth that supports write-ins is ",(0,a.kt)("inlineCode",{parentName:"p"},"simultaneous-questions"),"."),(0,a.kt)("h3",{id:"voting-booth-behaviour-and-considerations"},"Voting booth: behaviour and considerations"),(0,a.kt)("p",null,"Continuing with our example, our\n",(0,a.kt)("a",{target:"_blank",href:n(7149).Z},"writeins-election.json")," similar to the one\noutlined above would look like the following in the voting booth:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins example booth",src:n(9103).Z})),(0,a.kt)("h4",{id:"atypical-warnings"},"Atypical warnings"),(0,a.kt)("p",null,"The voting booth will show a warning to voters when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The voter votes to a write-in candidate without providing a name."),(0,a.kt)("li",{parentName:"ul"},"The voter provides the name of a write-in candidate without voting it.")),(0,a.kt)("p",null,"Both conditions mentioned are not considered an invalid vote, just atypical.\nFor that reason a notification will be shown to voters. These warnings are\nshown just above the continue button like in the following image:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins atypical warning",src:n(7846).Z})),(0,a.kt)("p",null,"When the voter clicks in the Continue button, this warning is shown as a modal\ndialog just to ensure that the voter didn't miss the notification:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins atypical modal warning",src:n(8282).Z})),(0,a.kt)("h4",{id:"duplicated-write-ins-warnings"},"Duplicated write-ins warnings"),(0,a.kt)("p",null,"The voting booth will show an invalid vote warning in a similar manner when the\nvoter writes two identical candidate names in an election where voters can\nprovide more than one write-in candidate. The reason this is considered invalid\nis that it's quite strange and it would allow to overrule the restraints set\nfor each candidate. For example even if for each candidate the voters can\nonly vote once, they would be able to vote twice in a single ballot as they\nwrote the same candidate twice."),(0,a.kt)("p",null,"Please note that you can enforce that this and other kinds of invalid vote\nwarnings are either not shown or enforced to be fixed by using the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/election-creation-json#question-extra-invalid_vote_policy"},(0,a.kt)("inlineCode",{parentName:"a"},"question.extra_options.invalid_vote_policy")),"\nconfiguration setting."),(0,a.kt)("h4",{id:"write-ins-bytes-left-notification"},"Write-ins bytes-left notification"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins example booth",src:n(9103).Z})),(0,a.kt)("p",null,"As can be seen in the screenshot, in the right bottom corner below each input\nbox for each write-in a set of two numbers appears, for example  ",(0,a.kt)("inlineCode",{parentName:"p"},"23 / 254"),".\nThese numbers indicate how many bytes have been used to write the write-in\nnames (the first number, ",(0,a.kt)("inlineCode",{parentName:"p"},"23")," in the example) and how many bytes can be used."),(0,a.kt)("p",null,"In this example, it means that the voter can use up to ",(0,a.kt)("inlineCode",{parentName:"p"},"254")," bytes for write-in\nnames in this question and it has used so far only ",(0,a.kt)("inlineCode",{parentName:"p"},"23")," bytes. As the voter\nwrites the write-ins, the first number increases as the voter is using more and\nmore bytes. "),(0,a.kt)("p",null,"Please note these numbers are not representing characters used/left-to-use,\nbut bytes in UTF-8 encoding. Normal characters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"a-z0-9")," use only one\nbyte but other characters might use more in UTF-8."),(0,a.kt)("p",null,"The maximum number of bytes that can be used is related to the encoding and to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"q")," value of the public key. Read\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/ballot-encoding#write-ins"},"more information about the encoding of write-ins in the ballot encoding section"),"."),(0,a.kt)("p",null,"As explained in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/ballot-encoding#write-ins"},"ballot encoding section"),", in a\nballot the answers are encoded (and encrypted) independently for each question.\nFor that reason, the bytes that can be used for write-ins are shared among all\nthe write-ins. Thus, we show the same ",(0,a.kt)("i",null,"number of bytes used / number of bytes\navailable")," indication for all the write-ins of a single question."),(0,a.kt)("p",null,"When there are only ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," bytes left to use for the write-ins of a question,\nthe color of the write-in input box and the ",(0,a.kt)("i",null,"number of bytes used / number\nof bytes available")," indication will change to the default warning color:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins booth visual indication",src:n(5467).Z})),(0,a.kt)("h4",{id:"write-ins-overflow"},"Write-ins overflow"),(0,a.kt)("p",null,"When the voter overflows the number of bytes that can be used for writing the\nnames of the write-ins, the indications are set to red and a warning text\ntelling the user that this requires fixing is shown: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins booth overflow indication",src:n(7543).Z})),(0,a.kt)("p",null,"Even if invalid votes are\n",(0,a.kt)("a",{parentName:"p",href:"/docs/file-formats/election-creation-json#question-extra-invalid_vote_policy"},"configured to be allowed"),",\nthis requires fixing by the voter (introducing shorter write-in names) because\nthe ballot simply cannot be encoded as it overflows the maximum number of bytes\nthat can be encoded."),(0,a.kt)("p",null,"For this reason, when in that situation the voter clicks the ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue")," button,\na warning is shown that compels the voter to fix this issue:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins booth overflow modal",src:n(3327).Z})),(0,a.kt)("h4",{id:"voting-booth-review-screen"},"Voting booth review screen"),(0,a.kt)("p",null,"In the voting booth, any selected write-in will be listed with a ",(0,a.kt)("inlineCode",{parentName:"p"},"(write-in)"),"\npostfix to let the user know that this specific candidate is a write-in:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins booth review screen",src:n(912).Z})),(0,a.kt)("h3",{id:"election-results-the-ballot-list"},"Election results: the ballot list"),(0,a.kt)("p",null,"In Sequent Administrative interface, once results are calculated, you will be\nable to see write-in candidates directly marked with a ",(0,a.kt)("inlineCode",{parentName:"p"},"(Write-in)")," postfix\njust like in this image:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write-ins admin results",src:n(9191).Z})),(0,a.kt)("p",null,"If you click in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Download data")," button and there inside the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Download Ballots (JSON format)")," you will get access to the ballots in JSON\nformat. As will be described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ballots JSON format")," document (TODO) in\nthe future, this file contains one plaintext ballot for a specific question\nper line. "),(0,a.kt)("p",null,"Each ballot contains the same list of ",(0,a.kt)("inlineCode",{parentName:"p"},"answers")," as the question it is voting\nfor. For write-in candidates (the ones that had the element\n",(0,a.kt)("inlineCode",{parentName:"p"},'{"title": "isWriteIn", "url": "true"}')," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"answer.urls")," ), if the voter\nwrote a specific name for that write-in candidate, the text for the answer\nwill change. Note that it's technically posible for a ballot to contain a\nwrite-in answer without voting it and also the opposite,  voting\nan empty-named write-in."),(0,a.kt)("h3",{id:"election-results-the-election-results"},"Election results: the election results"),(0,a.kt)("p",null,"The election results changes when the election contains write-ins. All the\nanswers that are marked as write-ins are removed. Those answers only make sense\nto be shown in the voting booth, not in the electoral results, as they have\nno candidate name attached."),(0,a.kt)("p",null,"Instead, all the write-ins names from valid ballots will appear in the election\nresults as newly added answers. These answers will have a new answer ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and\nwill be marked as write-in in the ",(0,a.kt)("inlineCode",{parentName:"p"},"answer.urls")," section in the JSON format\nresults with a ",(0,a.kt)("inlineCode",{parentName:"p"},'{"title": "isWriteInResult", "url": "true"}')," element. In other\nresults format like PDF or plain text (",(0,a.kt)("inlineCode",{parentName:"p"},"pretty"),"), these write-ins will appear\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},"(Write-in)")," postfix."),(0,a.kt)("p",null,"In the election results, write-ins are grouped by name and not by the answer's\n",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". If the voting booth shows multiple write-in answer fields, it doesn't\nmatter in which of them a write-in name the voter wrote the write-in candidate\nname: the vote will go to the write-in with that specific name."))}h.isMDXComponent=!0},7149:function(e,t,n){t.Z=n.p+"assets/files/university_example-fcfeac2a7f1f111f04c451aaf04be456.yaml"},9191:function(e,t,n){t.Z=n.p+"assets/images/writeins-admin-results-c0ff0e53a261586c7e371e728c375ecc.png"},8282:function(e,t,n){t.Z=n.p+"assets/images/writeins-atypical-modal-warning-7fa043de468a163d033309b1695935c2.png"},7846:function(e,t,n){t.Z=n.p+"assets/images/writeins-atypical-warning-dcbd46f85d157b11ba0826e3388a36f6.png"},5467:function(e,t,n){t.Z=n.p+"assets/images/writeins-booth-input-indication-0a737d0c0ee1bb56f6c99a573131a21c.png"},3327:function(e,t,n){t.Z=n.p+"assets/images/writeins-booth-overflow-modal-55a13b47cc968973256282f62438a490.png"},912:function(e,t,n){t.Z=n.p+"assets/images/writeins-booth-review-5d293d184f8f6795c38c89e192b485fb.png"},9103:function(e,t,n){t.Z=n.p+"assets/images/writeins-booth-acb7ad482e8ac813644903b4dcde98a5.png"},7543:function(e,t,n){t.Z=n.p+"assets/images/writeins-overflow-indication-9424f14a823f50902989093f82e14643.png"}}]);