(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/AV_CLA_1.0-b02aa3ac4fd332e239eecbe6356189ec.pdf"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(90)),i={id:"guide",title:"Contribution Guide",sidebar_label:"Contribution Guide",slug:"/contribute/guide"},c={unversionedId:"contribute/guide",id:"contribute/guide",isDocsHomePage:!1,title:"Contribution Guide",description:"Introduction",source:"@site/docs/contribute/contribute-guide.md",slug:"/contribute/guide",permalink:"/admin-manual/docs/contribute/guide",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/contribute/contribute-guide.md",version:"current",sidebar_label:"Contribution Guide",sidebar:"docsSidebar",previous:{title:"SmartLink Authentication",permalink:"/admin-manual/docs/integrations/smart-link-auth"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Legal",id:"legal",children:[]},{value:"Branches and feature branches",id:"branches-and-feature-branches",children:[]},{value:"Releases",id:"releases",children:[]}],l={toc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"We are glad you are interested in contributing to the Agora Voting project. Our\naim is to make your contribution as easy as possible. To make them easy, we\nhave detailed here the guidelines that you need to follow to contribute."),Object(o.b)("h2",{id:"legal"},"Legal"),Object(o.b)("p",null,"We manage a lot of open source repositories, and to make community contributions\nlegal we have setup a ",Object(o.b)("strong",{parentName:"p"},"Contributor License Agreement (CLA)")," to have agreements\nwith everyone who contributes. With the CLA, you give us permission over your\ncontributions. You still own the copyright over your work \u2014 so you retain the\nright to re-license, modify your code and use your work elsewhere if you want."),Object(o.b)("p",null,"To complete the CLA and become a contributor you need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Read the ",Object(o.b)("a",{target:"_blank",href:n(150).default},"CLA"),"."),Object(o.b)("li",{parentName:"ol"},"Print the CLA."),Object(o.b)("li",{parentName:"ol"},"Fill the details requested in the CLA."),Object(o.b)("li",{parentName:"ol"},"Sign the printed CLA, marking all the pages."),Object(o.b)("li",{parentName:"ol"},"Scan the CLA."),Object(o.b)("li",{parentName:"ol"},"Send the signed and scanned CLA in PDF form to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:legal@nvotes.com"}),"legal@nvotes.com"))),Object(o.b)("p",null,"Once we have received the signed CLA, we'll review the request. You will only\nneed to do this once. Contact us at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:legal@nvotes.com"}),"legal@nvotes.com"),"\nif you have anything doubt about the procedure."),Object(o.b)("h2",{id:"branches-and-feature-branches"},"Branches and feature branches"),Object(o.b)("p",null,"In Agora Voting repositories we develop changes and new features in a new\n",Object(o.b)("strong",{parentName:"p"},"feature branches"),". The a pull request is used to merge them into the\n",Object(o.b)("strong",{parentName:"p"},"master")," branch."),Object(o.b)("p",null,"Agora Voting repositories accept bugfix pull requests (PRs) from your bug fix\nbranch or fork to the ",Object(o.b)("strong",{parentName:"p"},"master")," branch of the Agora Voting git repository.\nAgora Voting repositorites also accept new features PRs. For a feature PR to\nbe accepted, design discussions needs to happen. Design discussion can take\none of two forms:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A feature request in the github issue tracker has been marked as approved.\nFeature requests need to be accompanied by full design specification."),Object(o.b)("li",{parentName:"ol"},"the PR must be accompanied by a full design specification and this spec is\nlater approved in the open design discussion inside the PR.")),Object(o.b)("p",null,"Full Design specification means:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the feature affects an API, the API is fully defined and documented."),Object(o.b)("li",{parentName:"ul"},"If the feature affects an user interface, the user interface behavior and\nlooks is fully defined and documented.")),Object(o.b)("p",null,"Features are evaluated against their complexity, impact on other features,\nroadmap alignment, and maintainability. These are some of the requirements for\na PR to be accepted:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Include a description of what your change intends to do."),Object(o.b)("li",{parentName:"ul"},"Include a detailed step by step description of how to reproduce the current\nbehaviour (if any), and how -reproduce the new behaviour."),Object(o.b)("li",{parentName:"ul"},"Be a child commit of the latest commit in the ",Object(o.b)("strong",{parentName:"li"},"master")," branch."),Object(o.b)("li",{parentName:"ul"},"Pass all unit tests."),Object(o.b)("li",{parentName:"ul"},"Have clear, useful and descriptive commit messages."),Object(o.b)("li",{parentName:"ul"},"Include appropiate copyright headers in each file."),Object(o.b)("li",{parentName:"ul"},"The requester has signed the CLA."),Object(o.b)("li",{parentName:"ul"},"Include adequate tests:"),Object(o.b)("li",{parentName:"ul"},"At least one test should fail in the absence of your non-test code changes.\nIf your PR does not  -ch this criteria, please specify why it can't be done."),Object(o.b)("li",{parentName:"ul"},"Tests should include reasonable permutations of the target fix/change."),Object(o.b)("li",{parentName:"ul"},"The unit tests code coverage cannot decrease with the PR.")),Object(o.b)("p",null,"Submissions that have met these requirements will be assigned to a nVotes\ncompany team member for additional testing. Submissions must meet functional\nand performance expectations. This means you may be asked to fix and resubmit\nyour pull request against a new open test case if it fails one of these tests."),Object(o.b)("p",null,"The Agora Voting project is an organically grown codebase. Follow the general\ncoding conventions adhered to in the code surrounding your changes. Pull\nrequests that reformat the code will usually not be accepted."),Object(o.b)("h2",{id:"releases"},"Releases"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"master")," branch will be the latest version of the project. Specific\nreleases (for example v20.2.0) will be marked with git tags. Currently we don't\nmaintain older versions of the software because we currently lack the resources\nto do it. Please ensure you use the latest release or ",Object(o.b)("strong",{parentName:"p"},"master")," to ensure you\nare up to date."))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);