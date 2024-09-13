"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[487],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||g[h]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9457:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={},i="Automated Tests",s={unversionedId:"gpt-researcher/gptr/automated-tests",id:"gpt-researcher/gptr/automated-tests",isDocsHomePage:!1,title:"Automated Tests",description:"Automated Testing with Github Actions",source:"@site/docs/gpt-researcher/gptr/automated-tests.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/automated-tests",permalink:"/docs/gpt-researcher/gptr/automated-tests",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/automated-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/gpt-researcher/gptr/config"},next:{title:"Troubleshooting",permalink:"/docs/gpt-researcher/gptr/troubleshooting"}},c=[{value:"Automated Testing with Github Actions",id:"automated-testing-with-github-actions",children:[],level:2},{value:"Running the Tests",id:"running-the-tests",children:[{value:"Via a docker command",id:"via-a-docker-command",children:[],level:3},{value:"Via a Github Action",id:"via-a-github-action",children:[],level:3}],level:2}],p={toc:c},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(l,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"automated-tests"},"Automated Tests"),(0,a.yg)("h2",{id:"automated-testing-with-github-actions"},"Automated Testing with Github Actions"),(0,a.yg)("p",null,"This repository contains the code for the automated testing of the GPT-Researcher Repo using Github Actions. "),(0,a.yg)("p",null,"The tests are triggered in a docker container which runs the tests via the ",(0,a.yg)("inlineCode",{parentName:"p"},"pytest")," module."),(0,a.yg)("h2",{id:"running-the-tests"},"Running the Tests"),(0,a.yg)("p",null,"You can run the tests:"),(0,a.yg)("h3",{id:"via-a-docker-command"},"Via a docker command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose --profile test run --rm gpt-researcher-tests\n")),(0,a.yg)("h3",{id:"via-a-github-action"},"Via a Github Action"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/721fca20-01bb-4c10-9cf9-19d823bebbb0",alt:"image"})),(0,a.yg)("p",null,"Attaching here the required settings & screenshots on the github repo level:"),(0,a.yg)("p",null,'Step 1: Within the repo, press the "Settings" tab'),(0,a.yg)("p",null,'Step 2: Create a new environment named "tests" (all lowercase)'),(0,a.yg)("p",null,'Step 3: Click into the "tests" environment & add environment secrets of ',(0,a.yg)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," & ",(0,a.yg)("inlineCode",{parentName:"p"},"TAVILY_API_KEY")),(0,a.yg)("p",null,"Get the keys from here:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://app.tavily.com/sign-in"},"https://app.tavily.com/sign-in")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://platform.openai.com/api-keys"},"https://platform.openai.com/api-keys")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/7cd341c6-d8d4-461f-ab5e-325abc9fe509",alt:"Screen Shot 2024-07-28 at 9 00 19"}),"\n",(0,a.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/a3744f01-06a6-4c9d-8aa0-1fc742d3e866",alt:"Screen Shot 2024-07-28 at 9 02 55"})),(0,a.yg)("p",null,"If configured correctly, here's what the Github action should look like when opening a new PR or committing to an open PR:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/30dbc668-4e6a-4b3b-a02e-dc859fc9bd3d",alt:"Screen Shot 2024-07-28 at 8 57 02"})))}u.isMDXComponent=!0}}]);