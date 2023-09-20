"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[718],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>u});var s=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,s,n=function(e,i){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),d=function(e){var i=s.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},p=function(e){var i=d(e.components);return s.createElement(l.Provider,{value:i},e.children)},h={inlineCode:"code",wrapper:function(e){var i=e.children;return s.createElement(s.Fragment,{},i)}},m=s.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(t),u=n,c=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return t?s.createElement(c,r(r({ref:i},p),{},{components:t})):s.createElement(c,r({ref:i},p))}));function u(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=m;var a={};for(var l in i)hasOwnProperty.call(i,l)&&(a[l]=i[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var d=2;d<o;d++)r[d]=t[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6765:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(3117),n=(t(7294),t(3905));const o={sidebar_position:6,title:"User Permissions"},r=void 0,a={unversionedId:"general/reference/user-permissions",id:"general/reference/user-permissions",title:"User Permissions",description:"Users of the admin portal can have fine grained-permissions. Different actions and",source:"@site/docs/general/reference/user-permissions.md",sourceDirName:"general/reference",slug:"/general/reference/user-permissions",permalink:"/documentation/docs/general/reference/user-permissions",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/reference/user-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"User Permissions"},sidebar:"generalSidebar",previous:{title:"Live Preview",permalink:"/documentation/docs/general/reference/live-preview"},next:{title:"Contribute",permalink:"/documentation/docs/general/contribute/"}},l={},d=[{value:"Permission: <code>view</code>",id:"permission-view",level:2},{value:"Permission: <code>edit</code>",id:"permission-edit",level:2},{value:"Permission: <code>create</code>",id:"permission-create",level:2},{value:"Permission: <code>register</code>",id:"permission-register",level:2},{value:"Permission: <code>update</code>",id:"permission-update",level:2},{value:"Permission: <code>update-share</code>",id:"permission-update-share",level:2},{value:"Permission: <code>delete</code>",id:"permission-delete",level:2},{value:"Permission: <code>send-auth</code>",id:"permission-send-auth",level:2},{value:"Permission: <code>send-auth-all</code>",id:"permission-send-auth-all",level:2},{value:"Permission: <code>view-archived</code>",id:"permission-view-archived",level:2},{value:"Permission: <code>view-results</code>",id:"permission-view-results",level:2},{value:"Permission: <code>view-stats</code>",id:"permission-view-stats",level:2},{value:"Permission: <code>view-voters</code>",id:"permission-view-voters",level:2},{value:"Permission: <code>view-census</code>",id:"permission-view-census",level:2},{value:"Permission: <code>start</code>",id:"permission-start",level:2},{value:"Permission: <code>stop</code>",id:"permission-stop",level:2},{value:"Permission: <code>allow-tally</code>",id:"permission-allow-tally",level:2},{value:"Permission: <code>tally</code>",id:"permission-tally",level:2},{value:"Permission: <code>calculate-results</code>",id:"permission-calculate-results",level:2},{value:"Permission: <code>publish-results</code>",id:"permission-publish-results",level:2},{value:"Permission: <code>census-add</code>",id:"permission-census-add",level:2},{value:"Permission: <code>census-delete</code>",id:"permission-census-delete",level:2},{value:"Permission: <code>census-delete-voted</code>",id:"permission-census-delete-voted",level:2},{value:"Permission: <code>census-activation</code>",id:"permission-census-activation",level:2},{value:"Permission: <code>add-ballot-boxes</code>",id:"permission-add-ballot-boxes",level:2},{value:"Permission: <code>list-ballot-boxes</code>",id:"permission-list-ballot-boxes",level:2},{value:"Permission: <code>delete-ballot-boxes</code>",id:"permission-delete-ballot-boxes",level:2},{value:"Permission: <code>add-tally-sheets</code>",id:"permission-add-tally-sheets",level:2},{value:"Permission: <code>override-tally-sheets</code>",id:"permission-override-tally-sheets",level:2},{value:"Permission: <code>list-tally-sheets</code>",id:"permission-list-tally-sheets",level:2},{value:"Permission: <code>delete-tally-sheets</code>",id:"permission-delete-tally-sheets",level:2},{value:"Permission: <code>archive</code>",id:"permission-archive",level:2},{value:"Permission: <code>unarchive</code>",id:"permission-unarchive",level:2},{value:"Permission: <code>event-view-activity</code>",id:"permission-event-view-activity",level:2},{value:"Permission: <code>event-receiver-view-activity</code>",id:"permission-event-receiver-view-activity",level:2},{value:"Permission: <code>generate-auth-code</code>",id:"permission-generate-auth-code",level:2},{value:"Permission: <code>reset-voter</code>",id:"permission-reset-voter",level:2},{value:"Permission: <code>suspend</code>",id:"permission-suspend",level:2},{value:"Permission: <code>resume</code>",id:"permission-resume",level:2},{value:"Permission: <code>set-public-candidates</code>",id:"permission-set-public-candidates",level:2},{value:"Permission: <code>set-authenticate-otl-period</code>",id:"permission-set-authenticate-otl-period",level:2},{value:"Permission: <code>update-ballot-boxes-results-config</code>",id:"permission-update-ballot-boxes-results-config",level:2}],p={toc:d};function h(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Users of the admin portal can have fine grained-permissions. Different actions and\nadmin sections require certain permissions. A user can have any aggregate of the\ndescribed permissions."),(0,n.kt)("h1",{id:"setting-users-permissions"},"Setting users permissions"),(0,n.kt)("p",null,"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"deployment-tool"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," file, you can configure the\n",(0,n.kt)("inlineCode",{parentName:"p"},"config.iam.upsert_file")," parameter with the path to a json file that contains a\nlist of users and permissions. This an example of such file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "username": "john",\n    "email": "john@sequentech.io",\n    "password": "password",\n    "is_active": true,\n    "is_admin": false,\n    "election_permissions": [\n      {\n        "election_id": 1,\n        "permissions": [\n          "view"\n        ]\n      },\n      {\n        "election_id": 34570026,\n        "permissions": [\n          "view",\n          "allow-tally"\n        ]\n      }\n    ]\n   }\n ]\n')),(0,n.kt)("p",null,"For a given user, you must configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),", and\nwhether it's active or not with ",(0,n.kt)("inlineCode",{parentName:"p"},"is_active")," among other parameters. If\n",(0,n.kt)("inlineCode",{parentName:"p"},"is_admin")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the user becomes a superuser that can access all\nelections."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"election_permissions")," key is used to configure the permissions for\nall the elections the user has access to, which is required for non-superusers."),(0,n.kt)("p",null,"The election id ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," is a special case. If the user has at least ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," access\nto that election id, they will be able to login into the admin console. And\nwhen they log in they'll find the list of elections where they at least have\n",(0,n.kt)("inlineCode",{parentName:"p"},"view")," access to."),(0,n.kt)("h1",{id:"permissions-list"},"Permissions list"),(0,n.kt)("h2",{id:"permission-view"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view")),(0,n.kt)("p",null,"This is the most basic permission. With it, the user will see the election in the\nelection list and they will be able to see the election dashboard as well as the\nelection configuration screens. For example they will be able to see the\n",(0,n.kt)("inlineCode",{parentName:"p"},"Basic Details"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Questions"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Authentication")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Census Configuration")," screens\nbut not the ",(0,n.kt)("inlineCode",{parentName:"p"},"Census Data")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Activity Log"),", or the unpublish election results.\nThey will not be able to do almost any action either."),(0,n.kt)("h2",{id:"permission-edit"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"edit")),(0,n.kt)("p",null,"This is one of the most powerful permissions. The user will be able to perform\nalmost any action, except for example ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,n.kt)("h2",{id:"permission-create"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"create")),(0,n.kt)("p",null,"This permission allows the user to create elections. It's also required to edit\nthe user own metadata."),(0,n.kt)("h2",{id:"permission-register"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"register")),(0,n.kt)("p",null,"This permission allows the user to register elections. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-update"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"update")),(0,n.kt)("p",null,"This permission allows the user to update the election configuration. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-update-share"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"update-share")),(0,n.kt)("p",null,"This permission allows the user to update the election social links configuration.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-delete"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"delete")),(0,n.kt)("p",null,"This permission allows the user to delete an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-send-auth"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"send-auth")),(0,n.kt)("p",null,"This permission allows the user to send authentication messages to selected voters\nfrom the election census. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-send-auth-all"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"send-auth-all")),(0,n.kt)("p",null,"This permission allows the user to send authentication messages to all voters\nfrom the election census. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-view-archived"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view-archived")),(0,n.kt)("p",null,"This permission allows the user to view archived elections. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-view-results"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view-results")),(0,n.kt)("p",null,"This permission allows the user to view the unpublished election results. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-view-stats"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view-stats")),(0,n.kt)("p",null,"This permission allows the user to view the tally status of an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-view-voters"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view-voters")),(0,n.kt)("p",null,"This permission allows the user to view the part of the census that have already cast their\nballot in an election. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-view-census"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"view-census")),(0,n.kt)("p",null,"This permission allows the user to view the part of the census of an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-start"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"start")),(0,n.kt)("p",null,"This permission allows the user to set the election status as started, and to set the start\ndate for an election. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-stop"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"stop")),(0,n.kt)("p",null,"This permission allows the user to set the election status as stopped, to set the stop\ndate for an election, as well as its tally date. Not required if the user already has\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-allow-tally"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"allow-tally")),(0,n.kt)("p",null,"This permission allows the user to allow the election to be tallied. Not required if the\nuser already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-tally"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"tally")),(0,n.kt)("p",null,"This permission allows the user to start the tally process for an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-calculate-results"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"calculate-results")),(0,n.kt)("p",null,"This permission allows the user to start the results calculation for an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-publish-results"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"publish-results")),(0,n.kt)("p",null,"This permission allows the user to publish/unpublish the results of an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-census-add"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"census-add")),(0,n.kt)("p",null,"This permission allows the user to add users to the census of an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-census-delete"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"census-delete")),(0,n.kt)("p",null,"This permission allows the user to remove users from the census of an election, but only if those\nusers haven't voted yet. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-census-delete-voted"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"census-delete-voted")),(0,n.kt)("p",null,"This permission allows the user to remove users from the census of an election, even if those\nusers have voted already. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-census-activation"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"census-activation")),(0,n.kt)("p",null,"This permission allows the user to activate/deactive users from the census of an election. Not\nrequired if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-add-ballot-boxes"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"add-ballot-boxes")),(0,n.kt)("p",null,"This permission allows the user to add ballot boxes to an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-list-ballot-boxes"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"list-ballot-boxes")),(0,n.kt)("p",null,"This permission allows the user to list the ballot boxes from an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-delete-ballot-boxes"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"delete-ballot-boxes")),(0,n.kt)("p",null,"This permission allows the user to delete ballot boxes from an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-add-tally-sheets"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"add-tally-sheets")),(0,n.kt)("p",null,"This permission allows the user to add tally sheets to an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-override-tally-sheets"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"override-tally-sheets")),(0,n.kt)("p",null,"This permission allows the user to override existing tally sheets in an election. Not required\nif the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-list-tally-sheets"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"list-tally-sheets")),(0,n.kt)("p",null,"This permission allows the user to list the tally sheets of an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-delete-tally-sheets"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"delete-tally-sheets")),(0,n.kt)("p",null,"This permission allows the user to delete tally sheets from an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-archive"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"archive")),(0,n.kt)("p",null,"This permission allows the user to archive an election. Not required if the user already has\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-unarchive"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"unarchive")),(0,n.kt)("p",null,"This permission allows the user to unarchive an election. The ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission is NOT sufficient\nfor this action."),(0,n.kt)("h2",{id:"permission-event-view-activity"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"event-view-activity")),(0,n.kt)("p",null,"This permission allows the user to see the list of actions in an election. Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-event-receiver-view-activity"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"event-receiver-view-activity")),(0,n.kt)("p",null,"This permission allows the user to see the list of actions in an election, filtered by the receiver id.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"event-view-activity")," permission."),(0,n.kt)("h2",{id:"permission-generate-auth-code"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"generate-auth-code")),(0,n.kt)("p",null,"This permission allows the user to generate authentication codes for users from the census of an election.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-reset-voter"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"reset-voter")),(0,n.kt)("p",null,"This permission allows the user to reset a voter's registration fields to a pre-registration state.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-suspend"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"suspend")),(0,n.kt)("p",null,"This permission allows the user to set the election status to ",(0,n.kt)("inlineCode",{parentName:"p"},"suspended"),". Not required if the user\nalready has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-resume"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"resume")),(0,n.kt)("p",null,"This permission allows the user to resume the voting period in an stopped election. Not required if\nthe user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-set-public-candidates"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"set-public-candidates")),(0,n.kt)("p",null,"This permission allows the user to configure whether the candidates in an election are public or not.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-set-authenticate-otl-period"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"set-authenticate-otl-period")),(0,n.kt)("p",null,"This permission allows the user to configure the authentication OTL period for users in an election.\nNot required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."),(0,n.kt)("h2",{id:"permission-update-ballot-boxes-results-config"},"Permission: ",(0,n.kt)("inlineCode",{parentName:"h2"},"update-ballot-boxes-results-config")),(0,n.kt)("p",null,"This permission allows the user toupdate the ballot box results configuration and update the results\nin an election. Not required if the user already has the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit")," permission."))}h.isMDXComponent=!0}}]);