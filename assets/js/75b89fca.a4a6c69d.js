"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[300],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(t),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(3117),i=(t(7294),t(3905));const o={sidebar_position:1,title:"Ballot Encoding"},s=void 0,r={unversionedId:"general/reference/ballot-encoding",id:"general/reference/ballot-encoding",title:"Ballot Encoding",description:"Introduction",source:"@site/docs/general/reference/ballot-encoding.md",sourceDirName:"general/reference",slug:"/general/reference/ballot-encoding",permalink:"/documentation/docs/general/reference/ballot-encoding",draft:!1,editUrl:"https://github.com/sequentech/documentation/edit/master/docs/general/reference/ballot-encoding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Ballot Encoding"},sidebar:"generalSidebar",previous:{title:"Election Creation JSON",permalink:"/documentation/docs/general/reference/election-creation-json"},next:{title:"E2E Election Testing",permalink:"/documentation/docs/general/reference/testing/"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Preferential systems",id:"preferential-systems",level:2},{value:"Invalid Ballot Flag",id:"invalid-ballot-flag",level:2},{value:"Cumulative voting system",id:"cumulative-voting-system",level:2},{value:"Write-ins",id:"write-ins",level:2},{value:"Write-in names",id:"write-in-names",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"When encrypting ballots using ElGamal over multiplicative groups, ballot information must converted to an integer. This integer ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", needs to fall\nin the range ",(0,i.kt)("inlineCode",{parentName:"p"},"1 <= m <= q")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," is the order of the subgroup used in the election parameters. Otherwise the ballot would require\nmultiple ciphertexts and that would make things more complex and slow."),(0,i.kt)("p",null,"Thus we have devised a specific procedure that is reasonably efficient to encode\nthe ballots. It is a two steps process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First a json ballot needs to be encoded into a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mixed_radix"},"mixed-radix")," representation, which is equivalent to a list of bases and  an equally sized list of digits."),(0,i.kt)("li",{parentName:"ol"},"Then we obtain the integer corresponding to the mixed-radix representation, following a generalization of ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Horner%27s_method"},"horner's method")," as applied to positional number systems.")),(0,i.kt)("p",null,"So the first step we apply is to encode the ballot as a list of bases and a\nlist of digits, which consitutute the mixed-radix representation of the ballot. Then we convert this mixed-radix representation to its equivalent integer, to be encrypted with ElGamal."),(0,i.kt)("p",null,"Note that the required bases present in a mixed-radix representation are determined on a per-contest basis, according to the range of ballot values that contest needs to encode. These bases are therefore common to all ballots for the contest. Conversely, the list of values that a particular ballot encodes is naturally specific to that ballot."),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"If in a ",(0,i.kt)("inlineCode",{parentName:"p"},"plurality-at-large")," there are three candidates ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," with answer ids ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", and the voter wants to\nvote to candidates ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", then his ballot choices (obtained\nusing encodeRawBallot) will be  ",(0,i.kt)("inlineCode",{parentName:"p"},"choices = [1, 0, 1]")," and the encoded\nchoices will be encoded this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /-------- candidate A\n           |  /----- candidate B\n           |  |  /-- candidate C\n           |  |  |\nbases   = [2, 2, 2]\nchoices = [1, 0, 1]\n\nencodedChoices = choices[0] + choices[1]*bases[0] + choices[2]*bases[0]*bases[1]\nencodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*choices[2])\nencodedChoices = 1 + 2*(0 + 2*1) = 1 + 4*1 = 5\n")),(0,i.kt)("p",null,"And the bases are ",(0,i.kt)("inlineCode",{parentName:"p"},"bases = [2, 2, 2]"),". The reason the bases are 2 here\nis because plurality-at-large is a non-preferential voting system\nand each base is representing if the voter chose (then we use\n",(0,i.kt)("inlineCode",{parentName:"p"},"choices[x] = 1"),") or not (then we use ",(0,i.kt)("inlineCode",{parentName:"p"},"choices[x] = 0"),"), and the base is in\nthis case max(v","[x]",")+1`."),(0,i.kt)("h2",{id:"preferential-systems"},"Preferential systems"),(0,i.kt)("p",null,"In a preferential system, the voter can choose a specific ordering.\nIf we reuse the previous example, the voter might have chosen for\nthe first choice in his ballot candidate ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", and for his second\nchoice candidate ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". Not choosing a candidate would be encoded as\nvalue ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", so choosing it as first position would be value ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and\nso on. If the voter can choose up to 3 candidates, then the base\nwould be ",(0,i.kt)("inlineCode",{parentName:"p"},"maxChoices+1 = 3+1 = 4"),", and thus bases will be\n",(0,i.kt)("inlineCode",{parentName:"p"},"bases = [4, 4, 4]")," and choices would be ",(0,i.kt)("inlineCode",{parentName:"p"},"choices = [1, 0, 2]")," and the\nencoded choices would be calculated as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /-------- candidate A\n           |  /----- candidate B\n           |  |  /-- candidate C\n           |  |  |\nbases   = [4, 4, 4]\nchoices = [1, 0, 2]\n\nencodedChoices = choices[0] + choices[1]*bases[1] + choices[2]*bases[1]*bases[2]\nencodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*choices[2])\nencodedChoices = 1 + 4*(0 + 4*2) = 1 + 16*2 = 33\n")),(0,i.kt)("h2",{id:"invalid-ballot-flag"},"Invalid Ballot Flag"),(0,i.kt)("p",null,"What was outlined before is the basics, but actually it does not\nwork exactly like that. The first value (",(0,i.kt)("inlineCode",{parentName:"p"},"choices[0]"),") in the raw\nballot does not really represent the vote for the first candidate\nanswer, but it's always a flag saying if the ballot was marked as\ninvalid or not by the voter. Note that this is not the only way to\ncreate an invalid ballot. For example the voter could vote to more\noptions than allowed, and that would also be an invalid ballot."),(0,i.kt)("p",null,"We asume the invalid ballot flag is represented in the question\nas a answer inside ",(0,i.kt)("inlineCode",{parentName:"p"},"question.answers")," and it is flagged by having\nan element in ",(0,i.kt)("inlineCode",{parentName:"p"},"answer.urls")," as\n",(0,i.kt)("inlineCode",{parentName:"p"},"{title: 'invalidVoteFlag', url: 'true'}"),". If this invalid vote\nflag candidate is not present, the voter interface will simply not\nallow to cast an invalid vote."),(0,i.kt)("p",null,"Using the last example of a preferential vote, the bases would not\nbe ",(0,i.kt)("inlineCode",{parentName:"p"},"bases = [4, 4, 4]")," but ",(0,i.kt)("inlineCode",{parentName:"p"},"bases = [2, 4, 4, 4]"),". The first base\nencodes always the invalid flag, whose max value is ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," so the base\nis always ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"The choices would not be ",(0,i.kt)("inlineCode",{parentName:"p"},"choices = [1, 0, 2]")," but, if the vote was\nnot marked as invalid, ",(0,i.kt)("inlineCode",{parentName:"p"},"choices = [0, 1, 0, 2]")," and thus the encoded\nchoices would be calculated as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /----------- invalid vote flag\n           |  /-------- candidate A\n           |  |  /----- candidate B\n           |  |  |  /-- candidate C\n           |  |  |  |\nbases   = [2, 4, 4, 4]\nchoices = [0, 1, 0, 2]\n\nencodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*(choices[2] + bases[2]*choices[3])\nencodedChoices = 0 + 2*(1 + 4*(0 + 4*2)) = 2*1 + 2*4*4*2\nencodedChoices = 2*1 + 32*2 = 66\n")),(0,i.kt)("h2",{id:"cumulative-voting-system"},"Cumulative voting system"),(0,i.kt)("p",null,"In a cumulative voting system, the voter would have a total number\nof integer points to assign to candidates, and the voter can assign\nthem to the available candidates with a maximum number of options\nthat can be assigned to each candidate."),(0,i.kt)("p",null,"For example, the voter might be able to assign up to 2 points to\neach candidate and assign a total of 3 points. In practice, the\nencoding is done in a very similar format as with preferential\nvoting system. For each candidate, the value we assign is a number\nthat represents the points assigned to the candidate, and the base\nused is the maximum number of assignable points plus one."),(0,i.kt)("p",null,"Retaking the previous example used for plurality-at-large and used\nfor a preferential voting system, if the voter can assign a\nmaximum of 4 points, and he wants to assign 2 points to candidate\n",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and 2 points to candidate ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and he didn't mark his ballot\nas invalid, then his choices would be ",(0,i.kt)("inlineCode",{parentName:"p"},"choices = [0, 2, 0, 1]"),",\nthe bases would be ",(0,i.kt)("inlineCode",{parentName:"p"},"bases = [2, 5, 5, 5]")," and the encoded choices\nwould be calculated as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /----------- invalid vote flag\n           |  /-------- candidate A\n           |  |  /----- candidate B\n           |  |  |  /-- candidate C\n           |  |  |  |\nchoices = [0, 2, 0, 1]\nbases   = [2, 5, 5, 5]\n\nencodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*(choices[2] + bases[2]*choices[3])\nencodedChoices = 0 + 2*(2 + 5*(0 + 5*1)) = 2*2 + 2*5*5*1\nencodedChoices = 2*2 + 50*1 = 54\n")),(0,i.kt)("h2",{id:"write-ins"},"Write-ins"),(0,i.kt)("p",null,"This encoder supports write-ins. The idea of write-ins is that the\nvoter can choose candidates that are not in the preconfigured list\nof candidates. The maximum number of write-ins allowed is\ncalculated automatically by suppossing the voter tries to\ndistribute his vote entirely just for write-in candidates, which\nis usually ",(0,i.kt)("inlineCode",{parentName:"p"},"question.max"),"."),(0,i.kt)("p",null,"The vote for each write-in is encoded using the same procedure as\nfor normal candidates, in order and as if the write-ins were in\nthe list of candidates. It asumes all write-ins (even if not\nselected) are in the list of candidates and they are flagged as\nsuch simply by an element in ",(0,i.kt)("inlineCode",{parentName:"p"},"answer.urls")," as\n",(0,i.kt)("inlineCode",{parentName:"p"},'{"title": "isWriteIn", "url": "true"}'),"."),(0,i.kt)("p",null,"For example in a plurality-at-large question example with three\nnormal candidates ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and two write-ins, where the\nvoter can choose up to 2 candidates, if the voter wants to cast\na valid ballot to his 2 write-ins, then the bases, the choices\nand the encoded choices would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /----------------- invalid-flag\n           |  /-------------- A\n           |  |  /----------- B\n           |  |  |  /-------- C\n           |  |  |  |  /----- 1st write-in\n           |  |  |  |  |  /-- 2nd write-in\n           |  |  |  |  |  |\nbases   = [2, 2, 2, 2, 2, 2]\nchoices = [0, 0, 0, 0, 1, 1]\n\nencodedChoices = 1*2^4 + 1*2^5 = 48\n")),(0,i.kt)("h3",{id:"write-in-names"},"Write-in names"),(0,i.kt)("p",null,"Of course that's not a complete ballot with write-ins. If the voter\nvoted to the write-ins, we would also have to encode the free text\nstring of the name of the write-ins. This is done by converting the\ntext from UTF-8 to numeric bytes, and encoding each byte using\n2^8 = 256 as a base. The separation between the different write-in\nnames is done using an empty byte (so ",(0,i.kt)("inlineCode",{parentName:"p"},"choices[x] = 0"),")."),(0,i.kt)("p",null,"So if in our case the name of the voter's two write-ins is ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ed"),", and knowing that character ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," is encoded as number ",(0,i.kt)("inlineCode",{parentName:"p"},"68"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),"\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"69")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),", then the bases, the choices and the\nencoded choices would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'           /----------------- invalid-flag\n           |  /-------------- A vote\n           |  |  /----------- B vote\n           |  |  |  /-------- C vote\n           |  |  |  |  /----- 1st write-in vote\n           |  |  |  |  |  /-- 2nd write-in vote\n           |  |  |  |  |  |\n           |  |  |  |  |  |     /---- 1st write-in name ("D")\n           |  |  |  |  |  |     |\n           |  |  |  |  |  |     |            /---- 2nd write-in name ("Ed")\n           |  |  |  |  |  |     |            |\n           |  |  |  |  |  |   /----\\    /---------\\\n           |  |  |  |  |  |   |    |    |         |\nbases   = [2, 2, 2, 2, 2, 2, 256, 256, 256, 256, 256]\nchoices = [0, 0, 0, 0, 1, 1, 68,  0,   69,  100, 0  ]\n\nencodedChoices = 1*(2^4) + 1*(2^5) + 68*(2^6) + 69*(2^6)*(256^2) + 100*(2^6)*(256^3) = 107663593776\n')),(0,i.kt)("p",null,"Even if the voter voted to no write-in, we still encode each of the write-ins\nwith a 0 choice. So for example if the voter voted to the first candidate (",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"\nin our example), the full encoding would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"           /----------------- invalid-flag\n           |  /-------------- A vote\n           |  |  /----------- B vote\n           |  |  |  /-------- C vote\n           |  |  |  |  /----- 1st write-in vote\n           |  |  |  |  |  /-- 2nd write-in vote\n           |  |  |  |  |  |\n           |  |  |  |  |  |   /---- 1st write-in name (empty string)\n           |  |  |  |  |  |   |\n           |  |  |  |  |  |   |    /---- 2nd write-in name (empty string)\n           |  |  |  |  |  |   |    |\n           |  |  |  |  |  |   |    |\nbases   = [2, 2, 2, 2, 2, 2, 256, 256]\nchoices = [0, 1, 0, 0, 0  0, 0,   0  ]\n\nencodedChoices = 1*(2**1) = 2\n")))}p.isMDXComponent=!0}}]);