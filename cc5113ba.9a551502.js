(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{128:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/AV_CLA_1.0-b02aa3ac4fd332e239eecbe6356189ec.pdf"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(88)),r={id:"guide",title:"Contribution Guide",sidebar_label:"Contribution Guide",slug:"/contribute/guide"},s={unversionedId:"contribute/guide",id:"contribute/guide",isDocsHomePage:!1,title:"Contribution Guide",description:"Introduction",source:"@site/docs/contribute/contribute-guide.md",slug:"/contribute/guide",permalink:"/admin-manual/docs/contribute/guide",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/contribute/contribute-guide.md",version:"current",sidebar_label:"Contribution Guide",sidebar:"mainSidebar",previous:{title:"Advanced Election Management Guide",permalink:"/admin-manual/docs/advanced-elections/management-guide"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Legal",id:"legal",children:[]},{value:"Branches and feature branches",id:"branches-and-feature-branches",children:[]},{value:"Releases",id:"releases",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"We are glad you are interested in contributing to the Agora Voting project. Our\naim is to make your contribution as easy as possible. To make them easy, we\nhave detailed here the guidelines that you need to follow to contribute."),Object(i.b)("h2",{id:"legal"},"Legal"),Object(i.b)("p",null,"We manage a lot of open source repositories, and to make community contributions\nlegal we have setup a ",Object(i.b)("strong",{parentName:"p"},"Contributor License Agreement (CLA)")," to have agreements\nwith everyone who contributes. With the CLA, you give us permission over your\ncontributions. You still own the copyright over your work \u2014 so you retain the\nright to re-license, modify your code and use your work elsewhere if you want."),Object(i.b)("p",null,"To complete the CLA and become a contributor you need to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Read the ",Object(i.b)("a",{target:"_blank",href:n(128).default},"CLA"),"."),Object(i.b)("li",{parentName:"ol"},"Print the CLA."),Object(i.b)("li",{parentName:"ol"},"Fill the details requested in the CLA."),Object(i.b)("li",{parentName:"ol"},"Sign the printed CLA, marking all the pages."),Object(i.b)("li",{parentName:"ol"},"Scan the CLA."),Object(i.b)("li",{parentName:"ol"},"Send the signed and scanned CLA in PDF form to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:legal@nvotes.com"}),"legal@nvotes.com"))),Object(i.b)("p",null,"Once we have received the signed CLA, we'll review the request. You will only\nneed to do this once. Contact us at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:legal@nvotes.com"}),"legal@nvotes.com"),"\nif you have anything doubt about the procedure."),Object(i.b)("h2",{id:"branches-and-feature-branches"},"Branches and feature branches"),Object(i.b)("p",null,"In Agora Voting repositories we develop changes and new features in a new\n",Object(i.b)("strong",{parentName:"p"},"feature branches"),". The a pull request is used to merge them into the\n",Object(i.b)("strong",{parentName:"p"},"master")," branch."),Object(i.b)("p",null,"Agora Voting repositories accept bugfix pull requests (PRs) from your bug fix\nbranch or fork to the ",Object(i.b)("strong",{parentName:"p"},"master")," branch of the Agora Voting git repository.\nAgora Voting repositorites also accept new features PRs. For a feature PR to\nbe accepted, design discussions needs to happen. Design discussion can take\none of two forms:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A feature request in the github issue tracker has been marked as approved.\nFeature requests need to be accompanied by full design specification."),Object(i.b)("li",{parentName:"ol"},"the PR must be accompanied by a full design specification and this spec is\nlater approved in the open design discussion inside the PR.")),Object(i.b)("p",null,"Full Design specification means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the feature affects an API, the API is fully defined and documented."),Object(i.b)("li",{parentName:"ul"},"If the feature affects an user interface, the user interface behavior and\nlooks is fully defined and documented.")),Object(i.b)("p",null,"Features are evaluated against their complexity, impact on other features,\nroadmap alignment, and maintainability. These are some of the requirements for\na PR to be accepted:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Include a description of what your change intends to do."),Object(i.b)("li",{parentName:"ul"},"Include a detailed step by step description of how to reproduce the current\nbehaviour (if any), and how -reproduce the new behaviour."),Object(i.b)("li",{parentName:"ul"},"Be a child commit of the latest commit in the ",Object(i.b)("strong",{parentName:"li"},"master")," branch."),Object(i.b)("li",{parentName:"ul"},"Pass all unit tests."),Object(i.b)("li",{parentName:"ul"},"Have clear, useful and descriptive commit messages."),Object(i.b)("li",{parentName:"ul"},"Include appropiate copyright headers in each file."),Object(i.b)("li",{parentName:"ul"},"The requester has signed the CLA."),Object(i.b)("li",{parentName:"ul"},"Include adequate tests:"),Object(i.b)("li",{parentName:"ul"},"At least one test should fail in the absence of your non-test code changes.\nIf your PR does not  -ch this criteria, please specify why it can't be done."),Object(i.b)("li",{parentName:"ul"},"Tests should include reasonable permutations of the target fix/change."),Object(i.b)("li",{parentName:"ul"},"The unit tests code coverage cannot decrease with the PR.")),Object(i.b)("p",null,"Submissions that have met these requirements will be assigned to a nVotes\ncompany team member for additional testing. Submissions must meet functional\nand performance expectations. This means you may be asked to fix and resubmit\nyour pull request against a new open test case if it fails one of these tests."),Object(i.b)("p",null,"The Agora Voting project is an organically grown codebase. Follow the general\ncoding conventions adhered to in the code surrounding your changes. Pull\nrequests that reformat the code will usually not be accepted."),Object(i.b)("h2",{id:"releases"},"Releases"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"master")," branch will be the latest version of the project. Specific\nreleases (for example v20.2.0) will be marked with git tags. Currently we don't\nmaintain older versions of the software because we currently lack the resources\nto do it. Please ensure you use the latest release or ",Object(i.b)("strong",{parentName:"p"},"master")," to ensure you\nare up to date."))}u.isMDXComponent=!0}}]);