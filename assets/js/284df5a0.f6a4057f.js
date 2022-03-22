"use strict";(self.webpackChunkadmin_manual=self.webpackChunkadmin_manual||[]).push([[274],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2098:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={id:"authentication-timeouts",title:"Authentication Timeouts",sidebar_label:"Authentication Timeouts",slug:"/advanced-elections/authentication-timeouts"},c=void 0,l={unversionedId:"advanced-elections/authentication-timeouts",id:"advanced-elections/authentication-timeouts",isDocsHomePage:!1,title:"Authentication Timeouts",description:"Introduction",source:"@site/docs/advanced-elections/authentication-timeouts.md",sourceDirName:"advanced-elections",slug:"/advanced-elections/authentication-timeouts",permalink:"/documentation/docs/advanced-elections/authentication-timeouts",editUrl:"https://github.com/agoravoting/admin-manual/edit/master/docs/advanced-elections/authentication-timeouts.md",tags:[],version:"current",frontMatter:{id:"authentication-timeouts",title:"Authentication Timeouts",sidebar_label:"Authentication Timeouts",slug:"/advanced-elections/authentication-timeouts"},sidebar:"docsSidebar",previous:{title:"Write-ins",permalink:"/documentation/docs/advanced-elections/write-ins"},next:{title:"SmartLink Authentication",permalink:"/documentation/docs/integrations/smart-link-auth"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Voter session lifetime",id:"voter-session-lifetime",children:[{value:"config.authapi.auth_token_expiration_seconds",id:"configauthapiauth_token_expiration_seconds",children:[]},{value:"config.agora_gui.cookies_expires",id:"configagora_guicookies_expires",children:[]}]},{value:"\xa0Admin users session lifetime",id:"admin-users-session-lifetime",children:[]},{value:"OTP token expiration",id:"otp-token-expiration",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this document you can learn about how does the authentication session\nlifetime works in nVotes voting platform and how to configure it."),(0,a.kt)("h2",{id:"voter-session-lifetime"},"Voter session lifetime"),(0,a.kt)("p",null,"When a voter logs in, a series of cookies are created to maintain the\nauthentication credentials for a period of time. The authentication token is\nsaved in one of these cookies."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yml")," YAML configuration file contain to which we refer multiple\ntimes in the ",(0,a.kt)("a",{parentName:"p",href:"../deployment/guide"},"deployment guide")," contains two variables\nto configure the voter autentication session:"),(0,a.kt)("h3",{id:"configauthapiauth_token_expiration_seconds"},"config.authapi.auth_token_expiration_seconds"),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"600")," (seconds)."),(0,a.kt)("p",null,"Number of seconds after which an authentication token expires. This\nconfiguration is used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"agora-elections")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"authapi")," backends in\nvoter-related authenticated actions. The backend verifies the creation time of\nthe voter-authentication token, and if it's larger than the value set in this\nsetting, then it's an expired token."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If ",(0,a.kt)("a",{parentName:"p",href:"../file-formats/election-creation-json#election-presentation-options-allow_voting_end_graceful_period"},(0,a.kt)("inlineCode",{parentName:"a"},"allow_voting_end_graceful_period")),"\nis enabled, then voters whose authentication token has not expired will be able\nto cast a vote even if the voting period has ended. Of course, this graceful\nperiod is limited by the authentication token expiration. Usually, when the\nauthentication token expires the voter is redirected to login."))),(0,a.kt)("h3",{id:"configagora_guicookies_expires"},"config.agora_gui.cookies_expires"),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," (minutes)."),(0,a.kt)("p",null,"Login session cookies expiration in minutes. During login, the voter session\ncookies are set with this expiration time. After the cookies expires, the\nbrowser automatically erases these cookies from memory. Also, the voter is\nredirected to the login page or to the\n",(0,a.kt)("a",{parentName:"p",href:"../file-formats/election-creation-json#election-presentation-options-success_screen__redirect__url"},(0,a.kt)("inlineCode",{parentName:"a"},"success_screen__redirect__url"))," if set."),(0,a.kt)("p",null,"If this setting is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to be unlimited. This setting does not apply\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"agora-gui-admin")," cookies (which use the value from\n",(0,a.kt)("inlineCode",{parentName:"p"},"config.authapi.auth_token_expiration_seconds"),"), except if this setting is\nset to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," then the expiration of cookies will be set the same value as for\nother agora-gui modules (unlimited)."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These two variables should in general be synced. ",(0,a.kt)("inlineCode",{parentName:"p"},"auth_token_expiration_seconds"),"\nconfigures the backend and ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies_expires")," configures the frontend, but if\nthey are not in sync it doesn't make much sense. That's why the default is\n",(0,a.kt)("inlineCode",{parentName:"p"},"600")," seconds (10 minutes) for ",(0,a.kt)("inlineCode",{parentName:"p"},"auth_token_expiration_seconds")," and 10 minutes\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies_expires"),"."))),(0,a.kt)("h2",{id:"admin-users-session-lifetime"},"\xa0Admin users session lifetime"),(0,a.kt)("p",null,"The administrative interface (typically accessed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/admin/login")," path)\nhas its own configuration for timeouts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yml")," separated from the\nvoter timeouts."),(0,a.kt)("p",null,"The timeout of the backends and for the frontend is configured in a single\nvariable: ",(0,a.kt)("inlineCode",{parentName:"p"},"config.authapi.admin_auth_token_expiration_seconds"),", which is very\nsimilar to ",(0,a.kt)("inlineCode",{parentName:"p"},"config.authapi.auth_token_expiration_seconds")," but applies to the\nadministrative interface and also applies to the cookies of the admin interface,\nexcept for when ",(0,a.kt)("inlineCode",{parentName:"p"},"config.agora_gui.cookies_expires")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", in which\ncase the cookie does not expire, but the backend will still deem old\nauthentication tokens expired anyway."),(0,a.kt)("p",null,"The administrative interface has some other differences with regards to the\nvoter interface:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It renovates its authentication token twice for each period of\n",(0,a.kt)("inlineCode",{parentName:"li"},"config.authapi.admin_auth_token_expiration_seconds")," when the browser tab is\nnot\n",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden"},"hidden"),".\nThis means that even if the expiration is set to i.e. 600 seconds (or 10\nminutes), if the admin browser is visible and active, the session will not\nclose."),(0,a.kt)("li",{parentName:"ul"},"It automatically detects when an HTTP request has been rejected by the backend\nbecause the admin authentication token has expired, and automatically logs out\nin that scenario."),(0,a.kt)("li",{parentName:"ul"},"It does contain a button through which the admin user can explicitly log out\nof the admin interface, erasing the admin authentication cookies from the\nbrowser.")),(0,a.kt)("h2",{id:"otp-token-expiration"},"OTP token expiration"),(0,a.kt)("p",null,"Independently if it's used for authentication of voters or administrators,\nthere's another ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yml")," that can apply to both. When\n",(0,a.kt)("a",{parentName:"p",href:"../file-formats/election-creation-json#census-auth_method"},"authentication-method"),"\nis either ",(0,a.kt)("inlineCode",{parentName:"p"},"email-otp")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sms-otp"),", the One Time Tokens (OTPs) received by the\nperson being authenticated have an timeout after a given period of time, which\ncan be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.authapi.sms_otp.expire_seconds")," setting in\n",(0,a.kt)("inlineCode",{parentName:"p"},"config.yml")," deployment configuration file."))}p.isMDXComponent=!0}}]);