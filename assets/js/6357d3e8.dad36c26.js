"use strict";(self.webpackChunkadmin_manual=self.webpackChunkadmin_manual||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1385:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/advanced-elections/introduction"},l=void 0,u={unversionedId:"advanced-elections/introduction",id:"advanced-elections/introduction",isDocsHomePage:!1,title:"Introduction",description:"This document describes how to create and manage elections with more advanced",source:"@site/docs/advanced-elections/introduction.md",sourceDirName:"advanced-elections",slug:"/advanced-elections/introduction",permalink:"/admin-manual/docs/advanced-elections/introduction",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/advanced-elections/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/advanced-elections/introduction"},sidebar:"docsSidebar",previous:{title:"Bulk Election Testing",permalink:"/admin-manual/docs/testing/bulk"},next:{title:"Election Creation",permalink:"/admin-manual/docs/advanced-elections/election-creation"}},s=[],d={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to create and manage elections with more advanced\ncharacteristics."),(0,i.kt)("p",null,"Simple electoral processes can be configured and created using the intuitive\ngraphical interface of the administration backoffice of the Agora Voting\nproject. More advanced elections can also be created with Agora Voting, by at\nthis moment there's no user interface that allows to configure some of the more\nadvanced characteristics of an electoral process."),(0,i.kt)("p",null,"In this document we will review how to configre and use these more advanced\nconfiguration options of an electoral process."),(0,i.kt)("p",null,"Advanced elections might involve:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Having a tree of children elections with parent virtual elections."),(0,i.kt)("li",{parentName:"ul"},"Allowing voters to authenticate directly in parent elections."),(0,i.kt)("li",{parentName:"ul"},"Allowing to specify voter census in parent elections and set which voter can participate in which children election."),(0,i.kt)("li",{parentName:"ul"},"Allowing voters to authenticate once and then vote in multiple elections."),(0,i.kt)("li",{parentName:"ul"},"Produce consolidated election results from multiple elections."),(0,i.kt)("li",{parentName:"ul"},"Allowing the configuration, creation and usage of ballot boxes and their corresponding tally sheets in hybrid elections so that election results for both online and paper ballots can be producted."),(0,i.kt)("li",{parentName:"ul"},"Allowing to set up advanced results configuration during election creation."),(0,i.kt)("li",{parentName:"ul"},"Allowing to insert/update elections using a specific election ids."),(0,i.kt)("li",{parentName:"ul"},"Automate the mailing of daily PDF reports with the number of votes in multiple elections."),(0,i.kt)("li",{parentName:"ul"},"Automate the start and end of elections."),(0,i.kt)("li",{parentName:"ul"},"Allowing to configure granual permissions over specific election for multiple admin users."),(0,i.kt)("li",{parentName:"ul"},"Advanced authentication mechanisms, with two or alternative factor authentication.")))}p.isMDXComponent=!0}}]);