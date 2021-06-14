(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-booth-acb7ad482e8ac813644903b4dcde98a5.png"},148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-atypical-warning-dcbd46f85d157b11ba0826e3388a36f6.png"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-atypical-modal-warning-7fa043de468a163d033309b1695935c2.png"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-booth-input-indication-0a737d0c0ee1bb56f6c99a573131a21c.png"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-overflow-indication-9424f14a823f50902989093f82e14643.png"},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-booth-overflow-modal-55a13b47cc968973256282f62438a490.png"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-booth-review-5d293d184f8f6795c38c89e192b485fb.png"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/writeins-admin-results-c0ff0e53a261586c7e371e728c375ecc.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(91)),r={id:"write-ins",title:"Write-ins",sidebar_label:"Write-ins",slug:"/advanced-elections/write-ins"},s={unversionedId:"advanced-elections/write-ins",id:"advanced-elections/write-ins",isDocsHomePage:!1,title:"Write-ins",description:"Introduction",source:"@site/docs/advanced-elections/write-ins.md",slug:"/advanced-elections/write-ins",permalink:"/admin-manual/docs/advanced-elections/write-ins",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/advanced-elections/write-ins.md",version:"current",sidebar_label:"Write-ins",sidebar:"docsSidebar",previous:{title:"Parent and Children Elections",permalink:"/admin-manual/docs/advanced-elections/parent-and-children-elections"},next:{title:"SmartLink Authentication",permalink:"/admin-manual/docs/integrations/smart-link-auth"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"How to",id:"how-to",children:[{value:"Election creation JSON",id:"election-creation-json",children:[]},{value:"Voting booth: behaviour and considerations",id:"voting-booth-behaviour-and-considerations",children:[]},{value:"Election results: the ballot list",id:"election-results-the-ballot-list",children:[]},{value:"Election results: the election results",id:"election-results-the-election-results",children:[]}]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"nVotes Platform supports elections with write-in candidates. In this kind of\nelection the voter can not only vote to the names that appear on the ballot but\nalso any person's name that the voter writes in the ballot."),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"election-creation-json"},"Election creation JSON"),Object(o.b)("p",null,"The write-ins support is specified in the\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/election-creation-json"}),"Election creation JSON configuration"),"\nand it's configured per question. During the creation of the election, there's\nno native support in the Admin interface to mark a candidate as a write-in, so\nthe only way to do it is using the JSON configuration."),Object(o.b)("p",null,"To create an election with write-ins in a specific question, you first need\nto configure the question to support write-ins. This is done by setting the\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/election-creation-json#question-extra-allow_writeins"}),Object(o.b)("inlineCode",{parentName:"a"},"question.extra_options.allow_writeins")),"\nsetting to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="writeins-election.json fragment" {7}',title:'"writeins-election.json','fragment"':!0,"{7}":!0}),'    ... rest of the configution ....\n\n    "questions": [\n      {\n        "title": "Test question",\n        "extra_options": {\n          "allow_writeins": true,\n\n    ... rest of the configution ....\n')),Object(o.b)("p",null,"You also need to add to the question at least one answer with an empty text\n(as it will be provided by the voter, not you) that is marked to be a write-in\nby ensuring the ",Object(o.b)("inlineCode",{parentName:"p"},"answer.urls")," list contains the element\n",Object(o.b)("inlineCode",{parentName:"p"},'{"title": "isWriteIn", "url": "true"}'),"."),Object(o.b)("p",null,"For example, if you had 3 normal candidates ",Object(o.b)("inlineCode",{parentName:"p"},"Candidate A"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Candidate B")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"Candidate C")," and allow voters to provide one write-in candidate, the election\nJSON configuration would be similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="writeins-election.json fragment" {18-24}',title:'"writeins-election.json','fragment"':!0,"{18-24}":!0}),'... rest of the election configution ....\n    "answers": [\n      {\n        "category": "", "details": "", "id": 0, "sort_order": 0,\n        "text": "Candidate A",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 1, "sort_order": 1,\n        "text": "Candidate B",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 2, "sort_order": 2,\n        "text": "Candidate C",\n        "urls": []\n      },\n      {\n        "category": "", "details": "", "id": 3, "sort_order": 3,\n        "text": "",\n        "urls": [\n          {"title": "isWriteIn", "url": "true"}\n        ]\n      }\n    ]\n... rest of the election configution ....\n')),Object(o.b)("p",null,"Currently the only\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/election-creation-json#question-layout"}),"question layout"),"\nin the voting booth that supports write-ins is ",Object(o.b)("inlineCode",{parentName:"p"},"simultaneous-questions"),"."),Object(o.b)("h3",{id:"voting-booth-behaviour-and-considerations"},"Voting booth: behaviour and considerations"),Object(o.b)("p",null,"Continuing with our example, our\n",Object(o.b)("a",{target:"_blank",href:n(98).default},"writeins-election.json")," similar to the one\noutlined above would look like the following in the voting booth:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins example booth",src:n(114).default})),Object(o.b)("h4",{id:"atypical-warnings"},"Atypical warnings"),Object(o.b)("p",null,"The voting booth will show a warning to voters when:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The voter votes to a write-in candidate without providing a name."),Object(o.b)("li",{parentName:"ul"},"The voter provides the name of a write-in candidate without voting it.")),Object(o.b)("p",null,"Both conditions mentioned are not considered an invalid vote, just atypical.\nFor that reason a notification will be shown to voters. These warnings are\nshown just above the continue button like in the following image:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins atypical warning",src:n(148).default})),Object(o.b)("p",null,"When the voter clicks in the Continue button, this warning is shown as a modal\ndialog just to ensure that the voter didn't miss the notification:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins atypical modal warning",src:n(149).default})),Object(o.b)("h4",{id:"duplicated-write-ins-warnings"},"Duplicated write-ins warnings"),Object(o.b)("p",null,"The voting booth will show an invalid vote warning in a similar manner when the\nvoter writes two identical candidate names in an election where voters can\nprovide more than one write-in candidate. The reason this is considered invalid\nis that it's quite strange and it would allow to overrule the restraints set\nfor each candidate. For example even if for each candidate the voters can\nonly vote once, they would be able to vote twice in a single ballot as they\nwrote the same candidate twice."),Object(o.b)("p",null,"Please note that you can enforce that this and other kinds of invalid vote\nwarnings are either not shown or enforced to be fixed by using the\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/election-creation-json#question-extra-invalid_vote_policy"}),Object(o.b)("inlineCode",{parentName:"a"},"question.extra_options.invalid_vote_policy")),"\nconfiguration setting."),Object(o.b)("h4",{id:"write-ins-bytes-left-notification"},"Write-ins bytes-left notification"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins example booth",src:n(114).default})),Object(o.b)("p",null,"As can be seen in the screenshot, in the right bottom corner below each input\nbox for each write-in a set of two numbers appears, for example  ",Object(o.b)("inlineCode",{parentName:"p"},"23 / 254"),".\nThese numbers indicate how many bytes have been used to write the write-in\nnames (the first number, ",Object(o.b)("inlineCode",{parentName:"p"},"23")," in the example) and how many bytes can be used."),Object(o.b)("p",null,"In this example, it means that the voter can use up to ",Object(o.b)("inlineCode",{parentName:"p"},"254")," bytes for write-in\nnames in this question and it has used so far only ",Object(o.b)("inlineCode",{parentName:"p"},"23")," bytes. As the voter\nwrites the write-ins, the first number increases as the voter is using more and\nmore bytes. "),Object(o.b)("p",null,"Please note these numbers are not representing characters used/left-to-use,\nbut bytes in UTF-8 encoding. Normal characters such as ",Object(o.b)("inlineCode",{parentName:"p"},"a-z0-9")," use only one\nbyte but other characters might use more in UTF-8."),Object(o.b)("p",null,"The maximum number of bytes that can be used is related to the encoding and to\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"q")," value of the public key. Read\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/ballot-encoding#write-ins"}),"more information about the encoding of write-ins in the ballot encoding section"),"."),Object(o.b)("p",null,"As explained in the\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/ballot-encoding#write-ins"}),"ballot encoding section"),", in a\nballot the answers are encoded (and encrypted) independently for each question.\nFor that reason, the bytes that can be used for write-ins are shared among all\nthe write-ins. Thus, we show the same ",Object(o.b)("i",null,"number of bytes used / number of bytes\navailable")," indication for all the write-ins of a single question."),Object(o.b)("p",null,"When there are only ",Object(o.b)("inlineCode",{parentName:"p"},"10")," bytes left to use for the write-ins of a question,\nthe color of the write-in input box and the ",Object(o.b)("i",null,"number of bytes used / number\nof bytes available")," indication will change to the default warning color:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins booth visual indication",src:n(150).default})),Object(o.b)("h4",{id:"write-ins-overflow"},"Write-ins overflow"),Object(o.b)("p",null,"When the voter overflows the number of bytes that can be used for writing the\nnames of the write-ins, the indications are set to red and a warning text\ntelling the user that this requires fixing is shown: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins booth overflow indication",src:n(151).default})),Object(o.b)("p",null,"Even if invalid votes are\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/file-formats/election-creation-json#question-extra-invalid_vote_policy"}),"configured to be allowed"),",\nthis requires fixing by the voter (introducing shorter write-in names) because\nthe ballot simply cannot be encoded as it overflows the maximum number of bytes\nthat can be encoded."),Object(o.b)("p",null,"For this reason, when in that situation the voter clicks the ",Object(o.b)("inlineCode",{parentName:"p"},"Continue")," button,\na warning is shown that compels the voter to fix this issue:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins booth overflow modal",src:n(152).default})),Object(o.b)("h4",{id:"voting-booth-review-screen"},"Voting booth review screen"),Object(o.b)("p",null,"In the voting booth, any selected write-in will be listed with a ",Object(o.b)("inlineCode",{parentName:"p"},"(write-in)"),"\npostfix to let the user know that this specific candidate is a write-in:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins booth review screen",src:n(153).default})),Object(o.b)("h3",{id:"election-results-the-ballot-list"},"Election results: the ballot list"),Object(o.b)("p",null,"In nVotes Administrative interface, once results are calculated, you will be\nable to see write-in candidates directly marked with a ",Object(o.b)("inlineCode",{parentName:"p"},"(Write-in)")," postfix\njust like in this image:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Write-ins admin results",src:n(154).default})),Object(o.b)("p",null,"If you click in the ",Object(o.b)("inlineCode",{parentName:"p"},"Download data")," button and there inside the\n",Object(o.b)("inlineCode",{parentName:"p"},"Download Ballots (JSON format)")," you will get access to the ballots in JSON\nformat. As will be described in the ",Object(o.b)("inlineCode",{parentName:"p"},"Ballots JSON format")," document (TODO) in\nthe future, this file contains one plaintext ballot for a specific question\nper line. "),Object(o.b)("p",null,"Each ballot contains the same list of ",Object(o.b)("inlineCode",{parentName:"p"},"answers")," as the question it is voting\nfor. For write-in candidates (the ones that had the element\n",Object(o.b)("inlineCode",{parentName:"p"},'{"title": "isWriteIn", "url": "true"}')," inside ",Object(o.b)("inlineCode",{parentName:"p"},"answer.urls")," ), if the voter\nwrote a specific name for that write-in candidate, the text for the answer\nwill change. Note that it's technically posible for a ballot to contain a\nwrite-in answer without voting it and also the opposite,  voting\nan empty-named write-in."),Object(o.b)("h3",{id:"election-results-the-election-results"},"Election results: the election results"),Object(o.b)("p",null,"The election results changes when the election contains write-ins. All the\nanswers that are marked as write-ins are removed. Those answers only make sense\nto be shown in the voting booth, not in the electoral results, as they have\nno candidate name attached."),Object(o.b)("p",null,"Instead, all the write-ins names from valid ballots will appear in the election\nresults as newly added answers. These answers will have a new answer ",Object(o.b)("inlineCode",{parentName:"p"},"id")," and\nwill be marked as write-in in the ",Object(o.b)("inlineCode",{parentName:"p"},"answer.urls")," section in the JSON format\nresults with a ",Object(o.b)("inlineCode",{parentName:"p"},'{"title": "isWriteInResult", "url": "true"}')," element. In other\nresults format like PDF or plain text (",Object(o.b)("inlineCode",{parentName:"p"},"pretty"),"), these write-ins will appear\nwith a ",Object(o.b)("inlineCode",{parentName:"p"},"(Write-in)")," postfix."),Object(o.b)("p",null,"In the election results, write-ins are grouped by name and not by the answer's\n",Object(o.b)("inlineCode",{parentName:"p"},"id"),". If the voting booth shows multiple write-in answer fields, it doesn't\nmatter in which of them a write-in name the voter wrote the write-in candidate\nname: the vote will go to the write-in with that specific name."))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),h=i,p=d["".concat(r,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(p,s(s({ref:t},c),{},{components:n})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/university_example-92f06079f6292c19faba027175a276b5.yaml"}}]);