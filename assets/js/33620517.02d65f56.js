"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(3117),i=(n(7294),n(3905));const a={sidebar_position:6,title:"OpenId Connect Auth Guide"},r=void 0,s={unversionedId:"general/guides/openid-auth/openid-auth",id:"general/guides/openid-auth/openid-auth",title:"OpenId Connect Auth Guide",description:"Introduction",source:"@site/docs/general/guides/openid-auth/openid-auth.md",sourceDirName:"general/guides/openid-auth",slug:"/general/guides/openid-auth/",permalink:"/documentation/docs/general/guides/openid-auth/",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/guides/openid-auth/openid-auth.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"OpenId Connect Auth Guide"},sidebar:"generalSidebar",previous:{title:"Messaging Voters Guide",permalink:"/documentation/docs/general/guides/messaging-voters/"},next:{title:"SmartLink Auth Guide",permalink:"/documentation/docs/general/guides/smart-link-auth/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What it is",id:"what-it-is",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"How to use OIDC",id:"how-to-use-oidc",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this document we will explain everything you need to know about the OpenID\nConnect authentication mechanism: what it is, what it provides, how it works\nand how to use it."),(0,i.kt)("h2",{id:"what-it-is"},"What it is"),(0,i.kt)("p",null,"OpenID Connect (OIDC) is an authentication method supported by the Sequent\nPlatform that works on top of the OAuth 2.0 framework. OIDC allows voters to use\nsingle sign-on (SSO) to authenticate using 3rd-party OpenID Providers (OPs),\nsuch as an email provider or social network, to authenticate their identities."),(0,i.kt)("admonition",{title:"Other Single sign-one methods",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Sequent Platform also supports the\n",(0,i.kt)("a",{parentName:"p",href:"../smart-link-auth/"},"SmartLink authentication method"),"  to implement Single\nSign-On.")),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"SmartLink is a native authentication method in Sequent platform. Voters will be\nsent from the Login page to a third-party OpenID Provider (OP), and\nauthenticated there. Please note that still, ",(0,i.kt)("strong",{parentName:"p"},"authorization is done by"),"\n",(0,i.kt)("strong",{parentName:"p"},"Sequent platform"),". This means that the administrator need to upload the\ncensus in Sequent platform, unless using an ",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-census"},"Open Census")," setting."),(0,i.kt)("p",null,"The authentication flow compromises the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Voters access the Login page."),(0,i.kt)("li",{parentName:"ol"},"In the login page, the voter click in one of the OPs configured for the\nelection and listed in the login page."),(0,i.kt)("li",{parentName:"ol"},"After clicking on the OP link, the voter is redirected to an external website\nprovided by the OP, where the voter can authenticate."),(0,i.kt)("li",{parentName:"ol"},"Once authenticated in the external website of the OP, the voter is redirected\nback to a callback Sequent Platform URL."),(0,i.kt)("li",{parentName:"ol"},"Sequent Platform receives some authentication token from the OP, which it\nuses to verify the voter identity. If the voter's identity claim from this\ntoken is part of the election census, the voter authorization verification is\nsuccessful and the voter is redirected to the Voting Booth.")),(0,i.kt)("p",null,"This is more detailed in the Sequent OIDC Sequence diagram:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\n    autonumber\n    Voter           ->>+ WebBrowser: Request Sequent Login Page\n    WebBrowser      ->>+ SequentBackend: Request Sequent Login Page\n    SequentBackend --\x3e>- WebBrowser: Returns Sequent Login Page\n    WebBrowser     --\x3e>- Voter: Renders Sequent Login Page\n    Voter           ->>+ WebBrowser: Click on OIDC Provider Login Page\n    WebBrowser      ->>+ OIDCProvider: Request OIDC Provider Login Page\n    OIDCProvider   --\x3e>- WebBrowser: Returns OIDC Provider Login Page\n    WebBrowser     --\x3e>- Voter: Renders OIDC Provider\n    Voter           ->>+ WebBrowser: Provides Authenticaton Credentials\n    WebBrowser      ->>+ OIDCProvider: Send Authenticaton Credentials to OIDC Provider\n    OIDCProvider   --\x3e>- WebBrowser: [If successful]<br>Authenticates and redirect back to<br>Sequent Login Page + ODIC Auth Token\n    WebBrowser      ->>+ SequentBackend: Request Sequent Login Page\n    SequentBackend --\x3e>- WebBrowser: Returns Sequent Login Page\n    WebBrowser     --\x3e>- Voter: Renders Sequent Login Page\n    WebBrowser      ->>+ SequentBackend: [Login Page] Authenticates using OIDC Auth Token\n    SequentBackend --\x3e>- WebBrowser: [If successful] Sends back Sequent Auth Token\n    WebBrowser      ->>+ SequentBackend: Redirects to Voting Booth\n    SequentBackend --\x3e>- WebBrowser: Returns Voting Booth\n    WebBrowser     ->> Voter: Renders Voting Booth\n")),(0,i.kt)("p",null,"With respect to OIDC, we use the ",(0,i.kt)("strong",{parentName:"p"},"Server Flow"),", that is detailed by Google's\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect#server-flow"},"OIDC documentation"),".\nThis includes the creation and later the verification of a anti-forgery state\ntoken (Cross-Site Request Forgery token or CSRF token)."),(0,i.kt)("h2",{id:"how-to-use-oidc"},"How to use OIDC"),(0,i.kt)("p",null,"###\xa01. Create an election with OIDC authentication"),(0,i.kt)("p",null,"You can download an\n",(0,i.kt)("a",{target:"_blank",href:n(6041).Z},"example OIDC election configuration")," and\nimport it in the Admin Portal. You'll have to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"oidc_providers")," and\nthe trustees to make it work with your deployment, though."),(0,i.kt)("p",null,"To create an election OIDC authentication, we need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_method")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"openid-connect"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Have an an ",(0,i.kt)("a",{parentName:"p",href:"/documentation/docs/general/reference/election-creation-json#census-extra_fields"},"extra_field"),"\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," field is the user identifier that\nwill be authenticated by the OIDC Provider. Typically, it's the user's email\naddress, but it could be any other identifier. It needs to be unique and it is\na required field. Note that the extra field can be of any appropriate type,\nin this example it would of of type ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"source_claim")," attribute for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," extra_field - or any other - to\npopulate authentication data from signed & verified id_token claims. For\nexample, in google's case the id_token contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," claim.\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload"},"More info about Google available claims here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure available OIDC Providers (OP) in the ",(0,i.kt)("inlineCode",{parentName:"p"},"census.oidc_providers"),"\nparameter of the election. You can configure multiple OPs, and then use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"census.config.provider_ids")," setting to show them in order."),(0,i.kt)("p",{parentName:"li"},"The OP should be configured to request a specific scope using the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope"),"\nparameter. For example, in Google's case if you want to obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),"\nclaim as mentioned earlier, you need to request ",(0,i.kt)("inlineCode",{parentName:"p"},"openid email")," scope as\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect#sendauthrequest"},"explained in Google OIDC documentation"),"."),(0,i.kt)("p",{parentName:"li"},"Also, this makes the parameters compatible with\n",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-alternative_auth_methods"},"alternative auth methods"),",\nsince you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"census.oidc_providers")," at the auth event level, and\nconfigure the ",(0,i.kt)("inlineCode",{parentName:"p"},"openid-connect")," auth method as an alternative authentication\nmethod whose configuration refers to these providers."))),(0,i.kt)("p",null,"Each OP has different ways to configure their deployment and how to do that is\nout of the scope of this guide. We'll use Google as our example OIDC provider.\nYou can read ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect?hl=en"},"here about how to setup OIDC support in Google"),"."),(0,i.kt)("p",null,"The configuration of an election with Google as a provider will be similar to\nthe one below, but with a different value for the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),", and of course you can also change at will the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," parameters."),(0,i.kt)("p",null,"Something like what you can see below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="oidc-election.json fragment"',title:'"oidc-election.json','fragment"':!0},'{\n   "id": -1,\n   "title": "OIDC Test Election",\n   "census": {\n      "auth_method": "email",\n      "extra_fields": [\n         {\n            "name": "sub",\n            "type": "email",\n            "required": true,\n            "source_claim": "email",\n            "min": 1,\n            "max": 255,\n            "unique": true,\n            "required_on_authentication": true\n         }\n      ],\n      "oidc_providers": [\n         {\n            "public_info": {\n               "id": "google",\n               "title": "Authenticate with Google",\n               "description": "Authenticate with Google",\n               "icon": "https://www.google.com/favicon.ico",\n               "authorization_endpoint": "https://accounts.google.com/o/oauth2/v2/auth",\n               "client_id": "<CLIENT_ID>.apps.googleusercontent.com",\n               "issuer": "https://accounts.google.com",\n               "scope": "openid email",\n               "token_endpoint": "https://oauth2.googleapis.com/token",\n               "jwks_uri": "https://www.googleapis.com/oauth2/v3/certs",\n               "logout_uri": "https://accounts.google.com/o/oauth2/v2/auth_logout"\n            },\n            "private_info": {\n               "client_secret": "<CLIENT_SECRET>"\n            }\n         }\n      ],\n      "config": {\n         "provider_ids": ["google"],\n         "authentication-action": {\n            "mode": "vote",\n            "mode-config": {\n               "url": ""\n            }\n         },\n         "registration-action": {\n            "mode": "vote",\n            "mode-config": null\n         }\n      }\n   },\n//\xa0... rest of the configution ....\n}\n')),(0,i.kt)("p",null,"###\xa02. Authenticate as a voter"),(0,i.kt)("p",null,"To authenticate, you first need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure the user is part of the census"),(0,i.kt)("li",{parentName:"ul"},"Start the voting period")),(0,i.kt)("p",null,"Once done that, you can enter the Election Public Site clicking on it on the\nelection's dashboard:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Election Public Site Link in Dashboard",src:n(2407).Z,width:"2880",height:"1576"})),(0,i.kt)("p",null,"Click in the Vote button in order to show the login page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vote Button in Election Public Site",src:n(6620).Z,width:"2880",height:"1576"})),(0,i.kt)("p",null,"Which would show the Voter's Login page (in the example shown in the image\nbelow, we also habilitated an ",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-alternative_auth_methods"},"alternative authentication method"),"\nusing SMS authentication):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Voter Login screen",src:n(5185).Z,width:"2880",height:"1576"})),(0,i.kt)("p",null,"If you click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authenticate with Google")," button, you would be redirected\nto Google OIDC authentication page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OIDC Provider Authentication screen",src:n(54).Z,width:"2880",height:"1576"})),(0,i.kt)("p",null,"Finally, you will be redirect back from the OIDC Provider to Sequent's platform.\nSequent Platform will transparently verify the identity data from the OIDC\nProvider, verify the authorization of the authenticated voter, and if everything\nchecks out, the voter will be shown the Voting Booth as an authenticated voter."),(0,i.kt)("p",null,"Below you can see the Voting Booth of an authenticated voter. In this case, it's\na Parent-children election so the voter is being shown the children election in\nwhich the voter has authorization to vote:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authenticated voter in the voting booth",src:n(1479).Z,width:"2880",height:"1576"})),(0,i.kt)("p",null,"If for some reason the authentication fails, the voter would be redirected to\nthe login screen, and shown an error message:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authentication Error in Login Page",src:n(2768).Z,width:"2838",height:"1668"})))}d.isMDXComponent=!0},6041:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/oidc-election.json-19d935844a4bedb08ab16df910c5e047.yaml"},2768:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/auth-error-0760a220612e6bcf8ddd8f455ff1b408.png"},2407:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-c50ec11492a2b57265bec3a5103155dd.png"},5185:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-c8c423d6b825dcd10fe2f18c8c309dbf.png"},54:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/provider-auth-096ba07d4ec45518bc5db3d4fc96e5e3.png"},6620:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/public-site-d39c4092434c7bfa8c957692e749ab4e.png"},1479:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/voting-booth-21f47c239f52ecde55ab5591b1c0c6c6.png"}}]);