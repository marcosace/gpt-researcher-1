"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6918],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},920:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const o={},i="Frontend Application",l={unversionedId:"gpt-researcher/frontend/frontend",id:"gpt-researcher/frontend/frontend",isDocsHomePage:!1,title:"Frontend Application",description:"This frontend project aims to enhance the user experience of GPT Researcher, providing an intuitive and efficient interface for automated research. It offers two deployment options to suit different needs and environments.",source:"@site/docs/gpt-researcher/frontend/frontend.md",sourceDirName:"gpt-researcher/frontend",slug:"/gpt-researcher/frontend/frontend",permalink:"/docs/gpt-researcher/frontend/frontend",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/frontend/frontend.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/gpt-researcher/gptr/troubleshooting"},next:{title:"Playing with Webhooks",permalink:"/docs/gpt-researcher/frontend/playing-with-webhooks"}},p=[{value:"NextJS Frontend App",id:"nextjs-frontend-app",children:[{value:"Run the NextJS React App with Docker",id:"run-the-nextjs-react-app-with-docker",children:[],level:3}],level:2},{value:"Other Options: 1: Static Frontend (FastAPI)",id:"other-options-1-static-frontend-fastapi",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Setup and Running",id:"setup-and-running",children:[],level:4},{value:"Demo",id:"demo",children:[],level:4}],level:2},{value:"Yet Another Option: Running NextJS Frontend via CLI",id:"yet-another-option-running-nextjs-frontend-via-cli",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:4},{value:"Setup and Running",id:"setup-and-running-1",children:[],level:4},{value:"Demo",id:"demo-1",children:[],level:4}],level:2},{value:"Choosing an Option",id:"choosing-an-option",children:[],level:2},{value:"Frontend Features",id:"frontend-features",children:[],level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"frontend-application"},"Frontend Application"),(0,a.yg)("p",null,"This frontend project aims to enhance the user experience of GPT Researcher, providing an intuitive and efficient interface for automated research. It offers two deployment options to suit different needs and environments."),(0,a.yg)("p",null,"View a Product Tutorial here: ",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hIZqA6lPusk"},"GPT-Researcher Frontend Tutorial")),(0,a.yg)("h2",{id:"nextjs-frontend-app"},"NextJS Frontend App"),(0,a.yg)("p",null,"The React app (located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"frontend")," directory) is our Frontend 2.0 which we hope will enable us to display the robustness of the backend on the frontend, as well."),(0,a.yg)("p",null,"It comes with loads of added features, such as: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a drag-n-drop user interface for uploading and deleting files to be used as local documents by GPTResearcher."),(0,a.yg)("li",{parentName:"ul"},"a GUI for setting your GPTR environment variables."),(0,a.yg)("li",{parentName:"ul"},"the ability to trigger the multi_agents flow via the Backend Module or Langgraph Cloud Host (currently in closed beta)."),(0,a.yg)("li",{parentName:"ul"},"stability fixes"),(0,a.yg)("li",{parentName:"ul"},"and more coming soon!")),(0,a.yg)("h3",{id:"run-the-nextjs-react-app-with-docker"},"Run the NextJS React App with Docker"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Step 1")," - ",(0,a.yg)("a",{parentName:"p",href:"https://docs.gptr.dev/docs/gpt-researcher/getting-started/getting-started-with-docker"},"Install Docker"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Step 2")," - Clone the '.env.example' file, add your API Keys to the cloned file and save the file as '.env'")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Step 3")," - Within the docker-compose file comment out services that you don't want to run with Docker.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up --build\n")),(0,a.yg)("p",null,"If that doesn't work, try running it without the dash:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up --build\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Step 4")," - By default, if you haven't uncommented anything in your docker-compose file, this flow will start 2 processes:"),(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},"the Python server running on localhost:8000"),(0,a.yg)("li",{parentName:"ul"},"the React app running on localhost:3000"))),(0,a.yg)("p",null,"Visit localhost:3000 on any browser and enjoy researching!"),(0,a.yg)("h2",{id:"other-options-1-static-frontend-fastapi"},"Other Options: 1: Static Frontend (FastAPI)"),(0,a.yg)("p",null,"A lightweight solution using FastAPI to serve static files."),(0,a.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Python 3.11+"),(0,a.yg)("li",{parentName:"ul"},"pip")),(0,a.yg)("h4",{id:"setup-and-running"},"Setup and Running"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install required packages:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"pip install -r requirements.txt\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Start the server:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"python -m uvicorn main:app\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Access at ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:8000")))),(0,a.yg)("h4",{id:"demo"},"Demo"),(0,a.yg)("iframe",{height:"400",width:"700",src:"https://github.com/assafelovic/gpt-researcher/assets/13554167/dd6cf08f-b31e-40c6-9907-1915f52a7110",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.yg)("h2",{id:"yet-another-option-running-nextjs-frontend-via-cli"},"Yet Another Option: Running NextJS Frontend via CLI"),(0,a.yg)("p",null,"A more robust solution with enhanced features and performance."),(0,a.yg)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Node.js (v18.17.0 recommended)"),(0,a.yg)("li",{parentName:"ul"},"npm")),(0,a.yg)("h4",{id:"setup-and-running-1"},"Setup and Running"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Navigate to NextJS directory:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd nextjs\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set up Node.js:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"nvm install 18.17.0\nnvm use v18.17.0\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install dependencies:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"npm install --legacy-peer-deps\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Start development server:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"npm run dev\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Access at ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:3000")))),(0,a.yg)("p",null,"Note: Requires backend server on ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:8000")," as detailed in option 1."),(0,a.yg)("h4",{id:"demo-1"},"Demo"),(0,a.yg)("iframe",{height:"400",width:"700",src:"https://github.com/user-attachments/assets/092e9e71-7e27-475d-8c4f-9dddd28934a3",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.yg)("h2",{id:"choosing-an-option"},"Choosing an Option"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Static Frontend: Quick setup, lightweight deployment."),(0,a.yg)("li",{parentName:"ul"},"NextJS Frontend: Feature-rich, scalable, better performance and SEO.")),(0,a.yg)("p",null,"For production, NextJS is recommended."),(0,a.yg)("h2",{id:"frontend-features"},"Frontend Features"),(0,a.yg)("p",null,"Our frontend enhances GPT-Researcher by providing:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Intuitive Research Interface: Streamlined input for research queries."),(0,a.yg)("li",{parentName:"ol"},"Real-time Progress Tracking: Visual feedback on ongoing research tasks."),(0,a.yg)("li",{parentName:"ol"},"Interactive Results Display: Easy-to-navigate presentation of findings."),(0,a.yg)("li",{parentName:"ol"},"Customizable Settings: Adjust research parameters to suit specific needs."),(0,a.yg)("li",{parentName:"ol"},"Responsive Design: Optimal experience across various devices.")),(0,a.yg)("p",null,"These features aim to make the research process more efficient and user-friendly, complementing GPT-Researcher's powerful agent capabilities."))}d.isMDXComponent=!0}}]);