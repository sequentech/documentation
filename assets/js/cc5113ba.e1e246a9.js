"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={id:"guide",title:"Contribution Guide",sidebar_label:"Contribution Guide",slug:"/contribute/guide"},s=void 0,l={unversionedId:"contribute/guide",id:"contribute/guide",isDocsHomePage:!1,title:"Contribution Guide",description:"Introduction",source:"@site/docs/contribute/contribute-guide.md",sourceDirName:"contribute",slug:"/contribute/guide",permalink:"/documentation/docs/contribute/guide",editUrl:"https://github.com/sequentech/documentation/edit/master/docs/contribute/contribute-guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"Contribution Guide",sidebar_label:"Contribution Guide",slug:"/contribute/guide"},sidebar:"sidebar",previous:{title:"E2E Election Testing",permalink:"/documentation/docs/testing/e2e"},next:{title:"Release lifecycle and cadence",permalink:"/documentation/docs/contribute/release-lifecycle"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Legal",id:"legal",children:[]},{value:"Branches and feature branches",id:"branches-and-feature-branches",children:[]},{value:"Releases",id:"releases",children:[]}],d={toc:c};function p(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We are glad you are interested in contributing to the Sequent Tech project. Our\naim is to make your contribution as easy as possible. To make them easy, we\nhave detailed here the guidelines that you need to follow to contribute."),(0,o.kt)("h2",{id:"legal"},"Legal"),(0,o.kt)("p",null,"We manage a lot of open source repositories, and to make community contributions\nlegal we have setup a ",(0,o.kt)("strong",{parentName:"p"},"Contributor License Agreement (CLA)")," to have agreements\nwith everyone who contributes. With the CLA, you give us permission over your\ncontributions. You still own the copyright over your work \u2014 so you retain the\nright to re-license, modify your code and use your work elsewhere if you want."),(0,o.kt)("p",null,"To complete the CLA and become a contributor you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read the ",(0,o.kt)("a",{target:"_blank",href:n(9017).Z},"CLA"),"."),(0,o.kt)("li",{parentName:"ol"},"Print the CLA."),(0,o.kt)("li",{parentName:"ol"},"Fill the details requested in the CLA."),(0,o.kt)("li",{parentName:"ol"},"Sign the printed CLA, marking all the pages."),(0,o.kt)("li",{parentName:"ol"},"Scan the CLA."),(0,o.kt)("li",{parentName:"ol"},"Send the signed and scanned CLA in PDF form to ",(0,o.kt)("a",{parentName:"li",href:"mailto:legal@sequentech.io"},"legal@sequentech.io"))),(0,o.kt)("p",null,"Once we have received the signed CLA, we'll review the request. You will only\nneed to do this once. Contact us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:legal@sequentech.io"},"legal@sequentech.io"),"\nif you have anything doubt about the procedure."),(0,o.kt)("h2",{id:"branches-and-feature-branches"},"Branches and feature branches"),(0,o.kt)("p",null,"In Sequent Tech repositories we develop changes and new features in a new\n",(0,o.kt)("strong",{parentName:"p"},"feature branches"),". The a pull request is used to merge them into the\n",(0,o.kt)("strong",{parentName:"p"},"master")," branch."),(0,o.kt)("p",null,"Sequent Tech repositories accept bugfix pull requests (PRs) from your bug fix\nbranch or fork to the ",(0,o.kt)("strong",{parentName:"p"},"master")," branch of the Sequent Tech git repository.\nSequent Tech repositorites also accept new features PRs. For a feature PR to\nbe accepted, design discussions needs to happen. Design discussion can take\none of two forms:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A feature request in the github issue tracker has been marked as approved.\nFeature requests need to be accompanied by full design specification."),(0,o.kt)("li",{parentName:"ol"},"the PR must be accompanied by a full design specification and this spec is\nlater approved in the open design discussion inside the PR.")),(0,o.kt)("p",null,"Full Design specification means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the feature affects an API, the API is fully defined and documented."),(0,o.kt)("li",{parentName:"ul"},"If the feature affects an user interface, the user interface behavior and\nlooks is fully defined and documented.")),(0,o.kt)("p",null,"Features are evaluated against their complexity, impact on other features,\nroadmap alignment, and maintainability. These are some of the requirements for\na PR to be accepted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include a description of what your change intends to do."),(0,o.kt)("li",{parentName:"ul"},"Include a detailed step by step description of how to reproduce the current\nbehaviour (if any), and how -reproduce the new behaviour."),(0,o.kt)("li",{parentName:"ul"},"Be a child commit of the latest commit in the ",(0,o.kt)("strong",{parentName:"li"},"master")," branch."),(0,o.kt)("li",{parentName:"ul"},"Pass all unit tests."),(0,o.kt)("li",{parentName:"ul"},"Have clear, useful and descriptive commit messages."),(0,o.kt)("li",{parentName:"ul"},"Include appropiate copyright headers in each file."),(0,o.kt)("li",{parentName:"ul"},"The requester has signed the CLA."),(0,o.kt)("li",{parentName:"ul"},"Include adequate tests:"),(0,o.kt)("li",{parentName:"ul"},"At least one test should fail in the absence of your non-test code changes.\nIf your PR does not  -ch this criteria, please specify why it can't be done."),(0,o.kt)("li",{parentName:"ul"},"Tests should include reasonable permutations of the target fix/change."),(0,o.kt)("li",{parentName:"ul"},"The unit tests code coverage cannot decrease with the PR.")),(0,o.kt)("p",null,"Submissions that have met these requirements will be assigned to a Sequent\ncompany team member for additional testing. Submissions must meet functional\nand performance expectations. This means you may be asked to fix and resubmit\nyour pull request against a new open test case if it fails one of these tests."),(0,o.kt)("p",null,"The Sequent Tech project is an organically grown codebase. Follow the general\ncoding conventions adhered to in the code surrounding your changes. Pull\nrequests that reformat the code will usually not be accepted."),(0,o.kt)("h2",{id:"releases"},"Releases"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"master")," branch will be the latest version of the project. Specific\nreleases (for example 4.0.0) will be marked with git tags. Currently we don't\nmaintain older versions of the software because we currently lack the resources\nto do it. Please ensure you use the latest release or ",(0,o.kt)("strong",{parentName:"p"},"master")," to ensure you\nare up to date."))}p.isMDXComponent=!0},9017:function(e,t,n){t.Z=n.p+"assets/files/AV_CLA_1.0-b02aa3ac4fd332e239eecbe6356189ec.pdf"}}]);