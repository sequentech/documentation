"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={sidebar_position:2,title:"Release How-to"},l=void 0,i={unversionedId:"general/contribute/release-howto",id:"general/contribute/release-howto",title:"Release How-to",description:"In this how-to we will explain how can a new release be published step by step.",source:"@site/docs/general/contribute/release-howto.md",sourceDirName:"general/contribute",slug:"/general/contribute/release-howto",permalink:"/documentation/docs/general/contribute/release-howto",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/contribute/release-howto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Release How-to"},sidebar:"generalSidebar",previous:{title:"Release lifecycle and cadence",permalink:"/documentation/docs/general/contribute/release-lifecycle"},next:{title:"Translation Guide",permalink:"/documentation/docs/general/contribute/translation/"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Preflight checklist: Before creating a release",id:"preflight-checklist-before-creating-a-release",level:2},{value:"Release procedure overview",id:"release-procedure-overview",level:2},{value:"Release commands",id:"release-commands",level:2},{value:"1. Create the release",id:"1-create-the-release",level:3},{value:"2. Generating the comprehensive release notes",id:"2-generating-the-comprehensive-release-notes",level:3}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this how-to we will explain how can a new release be published step by step.\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/general/contribute/release-lifecycle"},"Release Lifecycle")," document to know more about when to do\nwhat type of release."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Releases are managed using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequentech/release-tool"},"release-tool project"),". Each repository can be\nreleased independently."),(0,r.kt)("p",null,"Please install and setup release-tool as described in the repository's\nREADME file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We typically release using the latest version of the release-tool\nwhich is in ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch."),(0,r.kt)("li",{parentName:"ul"},"The installation is also very simple, just download the repository and install\nwith pip the requirements in a virtualenv."),(0,r.kt)("li",{parentName:"ul"},"The setup requires creating a github token that has permissions to perform\nthe actions related to the release process.")),(0,r.kt)("h2",{id:"preflight-checklist-before-creating-a-release"},"Preflight checklist: Before creating a release"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Please review the ",(0,r.kt)("a",{parentName:"li",href:"/documentation/docs/general/contribute/production-readiness"},"Production Readiness Checklist")," and ensure everything is\nready to create a release. "),(0,r.kt)("li",{parentName:"ol"},"Also, review the ",(0,r.kt)("a",{parentName:"li",href:"/documentation/docs/general/contribute/release-lifecycle"},"Release Lifecycle")," to know when to create what kind of\nrelease."),(0,r.kt)("li",{parentName:"ol"},"The release scripts rely on Pull Requests referring to any parent issue with\na line ",(0,r.kt)("inlineCode",{parentName:"li"},"Parent issue: https://path/to/parent/issue/1"),". If you are not sure this\nhas been done for all PRs, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"update_parent_issue.py")," script to solve it.\nIt will look for closed issues in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sequentech/meta"},"meta repository")," (where usually parent\nissues land) and add the ",(0,r.kt)("inlineCode",{parentName:"li"},"Parent issue: http:/...")," line to all linked PRs.")),(0,r.kt)("h2",{id:"release-procedure-overview"},"Release procedure overview"),(0,r.kt)("p",null,"Publishing a release is compromised of multiple  steps, done for each of the\nplatform repositories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Changing the version in the code")),(0,r.kt)("p",null,"The code of the software platform itself usually has some reference to the\nrelease. As we are creating a new release, this code needs to be updated."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Creating a release branch")),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},"5.0.x")," branch, so that other patch releases fork from there.\nThis branch needs to be created locally and pushed to the public repository. We\nuse ",(0,r.kt)("a",{parentName:"p",href:"http://releaseflow.org/"},"Release Flow")," branching methodology."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Creating a release git tag")),(0,r.kt)("p",null,"Creating the git tag and pushing it to the repository."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publishing a github release.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating the comprehensive release notes."))),(0,r.kt)("p",null,"Each platform repository has now a release, but we want to also generate a\ncomprehensive release notes that merge all the release notes from each platform\nrepository without duplication."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Removing old and stale release branches. See the ",(0,r.kt)("a",{parentName:"li",href:"/documentation/docs/general/contribute/release-lifecycle"},"Release Lifecycle")," to\nknow more about release support lifecycle.")),(0,r.kt)("h2",{id:"release-commands"},"Release commands"),(0,r.kt)("h3",{id:"1-create-the-release"},"1. Create the release"),(0,r.kt)("p",null,"You can launch the release of the Sequent platform repositories with the\nfollowing script, executing steps 1 to 4 detailed previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export REPOS=(common-ui admin-console election-portal voting-booth ballot-box deployment-tool tally-methods tally-pipes election-verifier frestq election-orchestra iam misc-tools mixnet documentation ballot-verifier release-tool)\n\nfor i in $REPOS\ndo\n    ./release.py \\\n        --version 7.4.0 \\\n        --change-version \\\n        --base-branch '7.4.x' '7.3.x' \\\n        --push-current-branch \\\n        --create-tag \\\n        --release-title \"7.4.0 release\" \\\n        --previous-tag-name '7.3.0' \\\n        --generate-release-notes \\\n        --create-release \\\n        --path ../$i\ndone\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We specified multiple branch names with ",(0,r.kt)("inlineCode",{parentName:"li"},"--base-branch"),". This is\nbecause in some of the repositories, there might not be any new commits or they\nmight be in the previous ",(0,r.kt)("inlineCode",{parentName:"li"},"7.3.x")," branch. The first name of the base-branch will\nalways indicate the final branch to push, and it will use that branch as a base\nif it does exist. If it's not yet created, the release script will try to use\nthe other given branch names as a base, in order."),(0,r.kt)("li",{parentName:"ol"},"We are doing a full release of the full Sequent platform. This requires\nhaving cloned all the related repositories locally in the appropriate path (see\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"../$i")," in the script)."),(0,r.kt)("li",{parentName:"ol"},"It's wise to try first only with one of the repositories to see that\neverything goes as expected. You can change the first line to\n",(0,r.kt)("inlineCode",{parentName:"li"},"export REPOS=(common-ui)")," for example to give it a try."),(0,r.kt)("li",{parentName:"ol"},"Note that the order of the platform repositories listed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"export REPOS"),"\nline is important for automatic unit tests. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"election-verifier"),"\nuses ",(0,r.kt)("inlineCode",{parentName:"li"},"tally-pipes"),", which in turn depends on ",(0,r.kt)("inlineCode",{parentName:"li"},"tally-methods"),". Please do the\nreleasing in order. If you don't, you'll get some github actions failed. If this\nhappens, just rerun the github actions after all the releases have been done and\nthat should fix the problem."),(0,r.kt)("li",{parentName:"ol"},"You can add the ",(0,r.kt)("inlineCode",{parentName:"li"},"--prerelease")," to tag a release as a prerelease such as a\nbeta. This command also support more options, use ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," to view them all.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"release.py")," script in this configuration will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stash your current changes in the ",(0,r.kt)("inlineCode",{parentName:"li"},"election-portal")," repository"),(0,r.kt)("li",{parentName:"ul"},"Remove all untracked files and directories (except those ignored by ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore"),")"),(0,r.kt)("li",{parentName:"ul"},"Create a branch from origin/master, commit the changes and force push it to\nthe origin"),(0,r.kt)("li",{parentName:"ul"},"Create tag from the just created commit and force push it to the origin"),(0,r.kt)("li",{parentName:"ul"},"Create a release from the just created tag")),(0,r.kt)("h3",{id:"2-generating-the-comprehensive-release-notes"},"2. Generating the comprehensive release notes"),(0,r.kt)("p",null,"Comprehensive release notes are published in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequentech/meta"},"meta repository"),". This action\ncan be performed executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python comprehensive_release_notes.py 7.3.0 7.4.0 --dry-run\n")),(0,r.kt)("p",null,"The first release version is the previous release (",(0,r.kt)("inlineCode",{parentName:"p"},"7.3.0")," in the example) and\nthe second is the new release which we want to create. Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run")," to\nactually create it. This command also support more options, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to view\nthem all."),(0,r.kt)("p",null,"###\xa03. Removing old and stale release branches"),(0,r.kt)("p",null,"Old releases will go out of support, meaning no new bugfix patch releases are\nexpected to happen. You should go to each of the platform repositories and\nremove release branches related to them for housekeeping. Right now this is not\nautomated, so you will have to do this manually."),(0,r.kt)("h1",{id:"future"},"Future"),(0,r.kt)("p",null,"In the future, we should automate the release management command and include\nthem within each different project instead of having a separate repository to\nhandle this."),(0,r.kt)("p",null,"Some tools we might take a look at to do so:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/automatic-releases"},"https://github.com/marketplace/actions/automatic-releases"))),(0,r.kt)("p",null,"Also we should automate the releases for the documentation itself, allowing\nhaving multiple version of the documentation, to match with the releases."))}h.isMDXComponent=!0}}]);