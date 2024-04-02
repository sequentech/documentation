"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(3117),i=(n(7294),n(3905));const a={sidebar_position:7,title:"Electoral Board Ceremonies"},r=void 0,s={unversionedId:"general/guides/electoral-board-ceremonies/electoral-board-ceremonies",id:"general/guides/electoral-board-ceremonies/electoral-board-ceremonies",title:"Electoral Board Ceremonies",description:"The objective of the Electoral Board Ceremonies is to ensure that the private keys of an electoral process are exclusively on the hands of their custodians while the voting is open. This is implemented in the following ceremonies:",source:"@site/docs/general/guides/electoral-board-ceremonies/electoral-board-ceremonies.md",sourceDirName:"general/guides/electoral-board-ceremonies",slug:"/general/guides/electoral-board-ceremonies/",permalink:"/documentation/docs/general/guides/electoral-board-ceremonies/",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/guides/electoral-board-ceremonies/electoral-board-ceremonies.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Electoral Board Ceremonies"},sidebar:"generalSidebar",previous:{title:"SmartLink Auth Guide",permalink:"/documentation/docs/general/guides/smart-link-auth/"},next:{title:"Cron Tasks Guide",permalink:"/documentation/docs/general/guides/cron-tasks/"}},l={},c=[{value:"Election Authority Credentials",id:"election-authority-credentials",level:2},{value:"Election Creation Configuration",id:"election-creation-configuration",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Keys Distribution Ceremony",id:"keys-distribution-ceremony",level:2},{value:"Opening Ceremony",id:"opening-ceremony",level:2}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The objective of the Electoral Board Ceremonies is to ensure that the private keys of an electoral process are exclusively on the hands of their custodians while the voting is open. This is implemented in the following ceremonies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keys Distribution Ceremony. In this ceremony the private keys for the election are retrieved and deleted from the trustees' servers and handed over to the custodians. This ceremony takes place before the voting period has started. This ensures no one can decrypt the ballots during the voting period."),(0,i.kt)("li",{parentName:"ul"},"Opening Ceremony. In this ceremony the private keys for the election are handed over from the custodians and restored to the trustees' servers. This ceremony takes place after the voting period has ended. Restoring the private keys in the trustees' servers is a necessary step before the tally process can be started.")),(0,i.kt)("p",null,"This is an advanced feature and it has to be manually enabled while creating the election. Also, this feature does not currently support ",(0,i.kt)("a",{parentName:"p",href:"../parent-and-children-elections/"},"parent/children elections"),"."),(0,i.kt)("p",null,"Any given election is comprised of multiple questions, and is configured to use multiple electoral authorities. Each electoral authority has their own share of the private key for each question. These private keys are files that are created and stored inside the servers of each electoral authority. These files, that hold the share of the private key for a given question in an election, are required to tally the election."),(0,i.kt)("p",null,"A custodian is a person whose job is to custody the private keys for an election for a given authority. During the Keys Distribution Ceremony the custodians will download a file that contains the share of the private keys for their electoral authority. That file is a compressed archive (with a ",(0,i.kt)("inlineCode",{parentName:"p"},".tar.gz")," extension), and inside the compressed file there is a number of files, each one containing a private key for each of the questions of the election. Each custodian will download a different compressed file, as the private keys for each authority for the election are different."),(0,i.kt)("p",null,"The next sections are a step by step guide to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Election authority credentials"),(0,i.kt)("li",{parentName:"ul"},"Creating an election with the Electoral Board Ceremonies feature enabled."),(0,i.kt)("li",{parentName:"ul"},"Keys Distribution Ceremony."),(0,i.kt)("li",{parentName:"ul"},"Opening Ceremony.")),(0,i.kt)("h2",{id:"election-authority-credentials"},"Election Authority Credentials"),(0,i.kt)("p",null,"Note: this configuration needs to be done on the Sequent web servers. This is a one-off configuration, and it only needs to be done the first time Electoral Board Ceremonies are to be used in any election."),(0,i.kt)("p",null,"Before we can use the Electoral Board Ceremonies feature, we need to configure the web servers to create credentials for the election authorities. Specifically, we need to configure a user/password for each of the authorities."),(0,i.kt)("p",null,"In order to see which authorities are connected to the web server, login into the web server and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    eopeers --list\n")),(0,i.kt)("p",null,"This will show the list of all authorities connected to the web server, as well as possible slave servers. Each election uses a specific list of authorities, which can be a subset of that list, so we'll need to configure the user/password for at least the authorities the election is going to use."),(0,i.kt)("p",null,"To configure the user/password, login into the web server and change the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file, which you'll find in a path similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/prod-s1/config.yml"),". Find the YAML key ",(0,i.kt)("inlineCode",{parentName:"p"},"ballot_box.trustee_users")," and fill it in with the user/password for all authorities you're going to use in the election:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    trustee_users:\n      - authority_id: auth1\n        username: usera1\n        password: pass1234\n      - authority_id: auth2\n        username: usera2\n        password: pass1234\n")),(0,i.kt)("p",null,"Now we need to provision the machine to apply the updated configuration. In this case we're only updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"ballot-box")," service so you can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"playbook.yml")," file (located in a path similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/prod-s1/playbook.yml"),") and comment out all playbooks except for the ballot-box. This will make the deployment faster. The playbook will look similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- hosts: all\n\ntasks:\n    - include_vars: config.yml\n    - include_vars: repos.yml\n\n#    - import_tasks: packages.yml\n#    - import_tasks: system.yml\n#    - import_tasks: hardening/main.yml\n#    - import_tasks: sudoers/main.yml\n#    - import_tasks: misc-tools/main.yml\n#    #- import_tasks: eorchestra/main.yml\n    - import_tasks: ballot-box/main.yml\n#    - import_tasks: iam/main.yml\n#    # - import_tasks: sentry/main.yml\n#    - import_tasks: sequent-ui/main.yml\n#    - import_tasks: oneserver/main.yml\n#    - import_tasks: election-verifier/main.yml\n#    #- import_tasks: halb/main.yml\n#    - import_tasks: postgres_backups.yml\n#    - import_tasks: crontab.yml\n")),(0,i.kt)("p",null,"Then provision the machine as explained ",(0,i.kt)("a",{parentName:"p",href:"../deployment"},"here"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    date; time ansible-playbook -i inventory playbook.yml; date\n")),(0,i.kt)("h2",{id:"election-creation-configuration"},"Election Creation Configuration"),(0,i.kt)("p",null,'During the election creation process, in the last step, called "Create Election", click on the pencil as shown in this image:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Election",src:n(1268).Z,width:"1788",height:"1124"})),(0,i.kt)("p",null,"This will open a modal with a text field and the JSON configuration of the election. We need to change the configuration to enable the Electoral Board Ceremonies. Add a key ",(0,i.kt)("inlineCode",{parentName:"p"},"election_board_ceremony")," with value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"presentation")," section, as shown below, and then click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Finish edit"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit JSON",src:n(8062).Z,width:"1694",height:"1476"})),(0,i.kt)("p",null,"Finally click on the green button at the bottom ",(0,i.kt)("inlineCode",{parentName:"p"},"Create the elections")," and wait for the election to be created."),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"Once the election is created, the ceremonies will be available in the Dashboard under the Actions dropdown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Elections and Questions",src:n(1780).Z,width:"2246",height:"1246"})),(0,i.kt)("p",null,"The Keys Distribution Ceremony will be available after the election is created and before the voting period has started. The Opening Ceremony will be available after the voting period has ended and before the tally process has started. After completing a ceremony, it can't be repeated. If the ceremonies aren't available when they should this means the feature was not correctly enabled for the election (please review the previous step on Election Creation Configuration)."),(0,i.kt)("h2",{id:"keys-distribution-ceremony"},"Keys Distribution Ceremony"),(0,i.kt)("p",null,"In this ceremony, each election authority will download the share of the private keys for the election and the keys will be removed from the election authority servers. Note that this action can only be launched if the election is configured with the Electoral Board Ceremonies feature enabled, and that the election cannot be started before this ceremony is successfully completed. "),(0,i.kt)("p",null,"The ceremony will take place inside a modal, in a series of steps. If the modal is closed at any time, you can reopen it again and resume the ceremony. However,the ceremony can't be completed twice."),(0,i.kt)("p",null,"In order to start the ceremony, go to the election Dashboard and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Launch key distribution ceremony")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," button. This will launch a modal:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Intro modal",src:n(4160).Z,width:"1552",height:"1008"})),(0,i.kt)("p",null,"You can see at the top the number of steps required to complete the ceremony. In this ceremony each election authority will need to complete the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login into the election authority account. The administrator of the Sequent servers must provide the user/password for the election authority.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Login",src:n(1874).Z,width:"1550",height:"1038"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the share of the private keys. In this screen you can download the keys as many times as you need.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Download",src:n(6738).Z,width:"1552",height:"924"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secure at least two copies of the private keys. Once you've copied the keys into two different USB memory sticks, check the two checkboxes and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Next step"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Secure",src:n(3916).Z,width:"1552",height:"1042"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the contents of the keys. Drag and drop the previously downloaded file to check its content.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Check",src:n(5862).Z,width:"1548",height:"1092"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete the share of the private keys from the election authority's server.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Delete",src:n(7726).Z,width:"1548",height:"970"})),(0,i.kt)("p",null,"After these steps are completed by all authorities, you'll see a final screen showing the success of the ceremony:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keys Distribution Ceremony Completed",src:n(6422).Z,width:"1626",height:"852"})),(0,i.kt)("p",null,"Note that if the modal is closed too early, it can be launched again. If the share of the private keys for some of the election authorities have already been deleted, the modal will continue from that point with the next election authority."),(0,i.kt)("h2",{id:"opening-ceremony"},"Opening Ceremony"),(0,i.kt)("p",null,"In this ceremony, each election authority will upload their share of the private keys for the election and the keys will be restored to the election authority servers. Note that this action can only be launched if the election is configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"election_board_ceremony")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", after the voting period is stopped, and that the tally cannot be started before this ceremony is successfully completed."),(0,i.kt)("p",null,"In order to start the ceremony, go to the election Dashboard and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Launch opening ceremony")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," button. This will launch a modal:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Ceremony Intro modal",src:n(8086).Z,width:"1614",height:"908"})),(0,i.kt)("p",null,"At the top you can see the number of steps required to complete the ceremony. Each election authority will need to complete the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login into the election authority account. The administrator of the Sequent servers must provide the user/password for the election authority.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Ceremony Login",src:n(2597).Z,width:"1624",height:"994"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the contents of the keys. Drag and drop the previously downloaded file to check its content. You must use the file previously downloaded in the Keys Distribution Ceremony.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Ceremony Upload",src:n(1819).Z,width:"1616",height:"1090"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restore the share of the private keys to the election authority's server.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Ceremony Restore",src:n(3659).Z,width:"1618",height:"892"})),(0,i.kt)("p",null,"After these steps are completed by all authorities, you'll see a final screen showing the success of the ceremony:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Ceremony Completed",src:n(8937).Z,width:"1620",height:"800"})),(0,i.kt)("p",null,"Note that if the modal is closed too early, it can be launched again. If the share of the private keys for some of the election authorities have already been deleted, the modal will continue from that point with the next election authority."))}d.isMDXComponent=!0},1780:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ceremonies_dashboard-09a10780403d7621bee330c1e6d98594.png"},1268:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create_election-a24687c5bab1b74291620bcef84f57db.png"},8062:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edit_json-15d11388d7db1df00055df43d53433cf.png"},4160:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-1-intro-ed26c6021805d48fb05a8cebb2aef833.png"},1874:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-2-login-1d07b37e3d92e0c2021c1a9f3b057e92.png"},6738:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-3-download-5c75847de6714e4f7898cc70e008e8a9.png"},3916:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-4-secure-b6678ff2b9e5088659f50acfd969e373.png"},5862:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-5-check-faec0a306c141163c6246d284011f4aa.png"},7726:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-6-delete-74ab1689da43650c5d68057e84eb4fcf.png"},6422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kdc-7-completed-33ea1673d35c6e8b54c39be74e8a5540.png"},8086:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oc-1-intro-d7ad068202e1c760a67c5cb0a096c391.png"},2597:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oc-2-login-2fd1f0bb1222865877d503ff9cb660e1.png"},1819:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oc-3-upload-00fe0e9cd34639ba7aa467425de955e2.png"},3659:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oc-4-restore-d81fb3351ebf6d206137d7fe5a440b8a.png"},8937:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oc-5-completed-b1dee6dbad7bc5390b0b9d07c53284d0.png"}}]);