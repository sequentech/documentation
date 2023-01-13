"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,p=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(p,s(s({ref:t},d),{},{components:n})):a.createElement(p,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:5,title:"Messaging Voters Guide"},s="Messaging Voters Guide",r={unversionedId:"general/guides/messaging-voters/messaging-voters",id:"general/guides/messaging-voters/messaging-voters",title:"Messaging Voters Guide",description:"You can send custom messages to voters at any time during the electoral process.  These",source:"@site/docs/general/guides/messaging-voters/messaging-voters.md",sourceDirName:"general/guides/messaging-voters",slug:"/general/guides/messaging-voters/",permalink:"/documentation/docs/general/guides/messaging-voters/",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/guides/messaging-voters/messaging-voters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Messaging Voters Guide"},sidebar:"generalSidebar",previous:{title:"Write-ins Guide",permalink:"/documentation/docs/general/guides/write-ins/"},next:{title:"SmartLink Auth Guide",permalink:"/documentation/docs/general/guides/smart-link-auth/"}},l={},c=[{value:"Template variables",id:"template-variables",level:2},{value:"Sending bulk messages",id:"sending-bulk-messages",level:2},{value:"Sending SMS",id:"sending-sms",level:3},{value:"Sending Emails",id:"sending-emails",level:3},{value:"Sending messages to specific users",id:"sending-messages-to-specific-users",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messaging-voters-guide"},"Messaging Voters Guide"),(0,i.kt)("p",null,"You can send custom messages to voters at any time during the electoral process.  These\nmessages can be sent in bulk from the Election Dashboard and to specific voters from the\nElection's Census Data section. You can use these messages to send authentication codes\nfor elections that require it, or to send communications announcing the different stages\nof the election."),(0,i.kt)("p",null,"Those messages will be sent through sms or email depending on the authentication\nmethod. Each voter will receive a tailored message with the template variables replaced\nwith their values. You can choose the message sending method (sms or email) if both are\navailable for that election."),(0,i.kt)("h2",{id:"template-variables"},"Template variables"),(0,i.kt)("p",null,"Templates are text messages that include template variables. Each voter will receive a\ntailored message with the template variables replaced with their values. Depending on\nthe authentication method, the message will be delivered as an email or as an SMS."),(0,i.kt)("p",null,"For authentication methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"email-otp"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"email-and-password")," the\nmessage will be an email. In those cases, the email title and email text body are\ntemplates. If ",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-config-html_message"},"html messages"),"\nare enabled in the deployment, the HTML message is also a template. For authentication\nmethods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"sms")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sms-otp"),", the SMS text body is a template. Furthermore, you can also use an\n",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-extra_fields"},"extra field")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"otp-code"),"\nto send authentication messages for any authentication method."),(0,i.kt)("p",null,"In templates, variables are identified surrounded by two ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," characters and always\nin upper case. For example the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," would appear as ",(0,i.kt)("inlineCode",{parentName:"p"},"__URL__"),"."),(0,i.kt)("p",null,"The allowed template variables are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__URL__"),": This is the voter authentication URL specific for the voter but\nnot containing the voter authentication code, which the voter will have to fill\nout manually."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__URL2__"),": This is the voter authentication URL containing the\nboth the email/sms of the voter and the voter authentication code. If no other\n",(0,i.kt)("a",{parentName:"li",href:"../../reference/election-creation-json#census-extra_fields"},"extra_field")," is required during authentication, entering",(0,i.kt)("br",{parentName:"li"}),"in the ",(0,i.kt)("inlineCode",{parentName:"li"},"__URL2__")," URLs allows voters to authenticate without having to fill out\nany web form. It's easier, but also more risky because anyone with this link\ncould use it to authenticate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__CODE__"),": This is the authentication code. By default each time the\nauthentication codes are sent to a voter, a new code is generated and any old\ncodes are disabled. Alternatively, the code might be fixed / static if the\n",(0,i.kt)("a",{parentName:"li",href:"../../reference/election-creation-json#census-config-fixed-code"},(0,i.kt)("inlineCode",{parentName:"a"},"fixed-code")," is set to ",(0,i.kt)("inlineCode",{parentName:"a"},"true")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__OTL__"),": Includes a One Time Link (OTL). This OTL accesses to an\nauthentication process that, once authenticated, shows the authentication code\nto voters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__<extra_field>__"),": Each voter has some voter related information\nassociated to it. You can use those extra fields by the\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/3.1/ref/utils/#django.utils.text.slugify"},"sluggified"),"\nand uppercased ",(0,i.kt)("a",{parentName:"li",href:"../../reference/election-creation-json#extra-field-name"},"name")," property.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Even if the template message does not contain ",(0,i.kt)("strong",{parentName:"p"},"URL2")," nor ",(0,i.kt)("strong",{parentName:"p"},"CODE"),", a new code\nwill be generated.")),(0,i.kt)("p",null,"The maximum length of the message text depends on the authentication method. By\ndefault the email text body can have up to ",(0,i.kt)("inlineCode",{parentName:"p"},"5,000")," characters, and SMS text\nbody can only have ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),". To change this, you would need to change the code\nin the respective authentication method code.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sequentech/iam/blob/e9e980f8afd07e32098c487b7a8c3a9b4c5d575a/iam/authmethods/m_email.py#L140"},"This is the relevant code"),"\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," authentication method."),(0,i.kt)("h2",{id:"sending-bulk-messages"},"Sending bulk messages"),(0,i.kt)("h3",{id:"sending-sms"},"Sending SMS"),(0,i.kt)("p",null,"You can send bulk messages to voters from the election dashboard. In the election\nDashboard, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Send auth codes")," button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sms Dashboard",src:n(4170).Z,width:"2870",height:"1390"})),(0,i.kt)("p",null,"This will open a modal. In this case the election authentication mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"sms"),", thus\nthe template is the SMS message, where you can use template variables in the form of\n",(0,i.kt)("inlineCode",{parentName:"p"},"__<variable>__"),". You can also filter the census to send the message only to those that\nhave already voted, or to those that haven't voted yet. When you're ready, click on the\nbutton at the bottom to review the configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sms Modal 0",src:n(4115).Z,width:"2864",height:"1414"})),(0,i.kt)("p",null,"The next screen shows a preview of the configuration you have selected, by replacing the\ntemplate variables, and showing the chosen filter configuration. This allows you to\nreview the configuration before sending the messages. This modal also informs you of the\nnumber of recipients of the message you will be sending. If you want to modify the message,\nclick on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," button at the right to go back to the previous screen. If everything\nis OK, click on the button at the bottom ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm and send the messages"),". The modal will\nclose and a green box will confirm the messages were successfully sent."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sms Modal 0",src:n(6507).Z,width:"2868",height:"1412"})),(0,i.kt)("h3",{id:"sending-emails"},"Sending Emails"),(0,i.kt)("p",null,"You can send bulk emails to voters on elections where the authentication method uses the email.\nGo to the election Dashboard and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Send auth codes"),"."),(0,i.kt)("p",null,"This modal is similar to the one for SMS messages. In this case the required template fields\nare the email title and the email text body. If it's enabled, you can also configure the ",(0,i.kt)("a",{parentName:"p",href:"../../reference/election-creation-json#census-config-html_message"},"HTML\nemail body"),". You can also\nchoose to send the emails only to voters that have already voted, or to those that haven't voted\nyet. Once you click on the button at the bottom you'll see a preview of the message."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email Modal 0",src:n(9275).Z,width:"2852",height:"1412"}),"\n",(0,i.kt)("img",{alt:"Email Modal 1",src:n(4874).Z,width:"2856",height:"1408"})),(0,i.kt)("p",null,"The second modal step shows a preview of the configuration you have selected, by replacing the\ntemplate variables, showing the chosen filter configuration, and a rendered version of the HTML\nmessage. Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," button to modify the configuration or click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Send auth codes"),"\nto send the emails."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email Modal 2",src:n(6978).Z,width:"2864",height:"1414"})),(0,i.kt)("h2",{id:"sending-messages-to-specific-users"},"Sending messages to specific users"),(0,i.kt)("p",null,"Instead of sending messages in bulk, you can send them to specific voters. Go to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Census Data")," section. Click on the checkboxes on the left side and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"),"\nbutton on the top right, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"Send auth codes to <n> selected.."),". A modal will appear.\nThe modal is very similar to the one previously shown."),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Send multiple voters",src:n(3899).Z,width:"2862",height:"1287"})))}m.isMDXComponent=!0},9275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/email-modal0-25ce62f8cccb6b30ba54b4987b44cda3.png"},4874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/email-modal1-05c12becedffe7746f8182ebf74d8828.png"},6978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/email-modal2-51429421a01f631b33f3bd340588ae11.png"},3899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/send-multiple-voters-647a342e7981491628083e35e50c34a8.png"},4170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sms-dashboard-5a169ac31975108d846830eee6b01ad3.png"},4115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sms-modal0-88b3f6a85506a89a8fb26ca2e9af34a1.png"},6507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sms-modal1-93bbbacaca328c0ae1a774339a6c5e30.png"}}]);