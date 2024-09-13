"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[264],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1091:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const i={},o="Detailed Report",l={unversionedId:"examples/detailed_report",id:"examples/detailed_report",isDocsHomePage:!1,title:"Detailed Report",description:"Overview",source:"@site/docs/examples/detailed_report.md",sourceDirName:"examples",slug:"/examples/detailed_report",permalink:"/docs/examples/detailed_report",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/examples/detailed_report.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"LangGraph",permalink:"/docs/gpt-researcher/multi_agents/langgraph"},next:{title:"Simple Run",permalink:"/docs/examples/examples"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Key Features",id:"key-features",children:[],level:2},{value:"Class Structure",id:"class-structure",children:[{value:"Initialization",id:"initialization",children:[],level:3}],level:2},{value:"How It Works",id:"how-it-works",children:[],level:2},{value:"Usage Example",id:"usage-example",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"detailed-report"},"Detailed Report"),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"DetailedReport")," class inspired by the recent STORM paper, is a powerful component of GPT Researcher, designed to generate comprehensive reports on complex topics. It's particularly useful for creating long-form content that exceeds the typical limits of LLM outputs. This class orchestrates the research process, breaking down the main query into subtopics, conducting in-depth research on each, and combining the results into a cohesive, detailed report."),(0,a.yg)("p",null,"Located in ",(0,a.yg)("inlineCode",{parentName:"p"},"backend/report_types/detailed_report.py")," in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/assafelovic/gpt-researcher"},"GPT Researcher GitHub repository"),", this class leverages the capabilities of the ",(0,a.yg)("inlineCode",{parentName:"p"},"GPTResearcher")," agent to perform targeted research and generate content."),(0,a.yg)("h2",{id:"key-features"},"Key Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Breaks down complex topics into manageable subtopics"),(0,a.yg)("li",{parentName:"ul"},"Conducts in-depth research on each subtopic"),(0,a.yg)("li",{parentName:"ul"},"Generates a comprehensive report with introduction, table of contents, and body"),(0,a.yg)("li",{parentName:"ul"},"Avoids redundancy by tracking previously written content"),(0,a.yg)("li",{parentName:"ul"},"Supports asynchronous operations for improved performance")),(0,a.yg)("h2",{id:"class-structure"},"Class Structure"),(0,a.yg)("h3",{id:"initialization"},"Initialization"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"DetailedReport")," class is initialized with the following parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"query"),": The main research query"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"report_type"),": Type of the report"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"report_source"),": Source of the report"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"source_urls"),": Initial list of source URLs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"config_path"),": Path to the configuration file"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tone"),": Tone of the report (using the ",(0,a.yg)("inlineCode",{parentName:"li"},"Tone")," enum)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"websocket"),": WebSocket for real-time communication"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"subtopics"),": Optional list of predefined subtopics"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"headers"),": Optional headers for HTTP requests")),(0,a.yg)("h2",{id:"how-it-works"},"How It Works"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"DetailedReport")," class starts by conducting initial research on the main query."),(0,a.yg)("li",{parentName:"ol"},"It then breaks down the topic into subtopics."),(0,a.yg)("li",{parentName:"ol"},"For each subtopic, it:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Conducts focused research"),(0,a.yg)("li",{parentName:"ul"},"Generates draft section titles"),(0,a.yg)("li",{parentName:"ul"},"Retrieves relevant previously written content to avoid redundancy"),(0,a.yg)("li",{parentName:"ul"},"Writes a report section"))),(0,a.yg)("li",{parentName:"ol"},"Finally, it combines all subtopic reports, adds a table of contents, and includes source references to create the final detailed report.")),(0,a.yg)("h2",{id:"usage-example"},"Usage Example"),(0,a.yg)("p",null,"Here's how you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"DetailedReport")," class in your project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'import asyncio\nfrom fastapi import WebSocket\nfrom gpt_researcher.utils.enum import Tone\nfrom backend.report_type import DetailedReport\n\nasync def generate_report(websocket: WebSocket):\n    detailed_report = DetailedReport(\n        query="The impact of artificial intelligence on modern healthcare",\n        report_type="research_report",\n        report_source="web_search",\n        source_urls=[],  # You can provide initial source URLs if available\n        config_path="path/to/config.yaml",\n        tone=Tone.FORMAL,\n        websocket=websocket,\n        subtopics=[],  # You can provide predefined subtopics if desired\n        headers={}  # Add any necessary HTTP headers\n    )\n\n    final_report = await detailed_report.run()\n    return final_report\n\n# In your FastAPI app\n@app.websocket("/generate_report")\nasync def websocket_endpoint(websocket: WebSocket):\n    await websocket.accept()\n    report = await generate_report(websocket)\n    await websocket.send_text(report)\n')),(0,a.yg)("p",null,"This example demonstrates how to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"DetailedReport")," instance and run it to generate a comprehensive report on the impact of AI on healthcare."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"DetailedReport")," class is a sophisticated tool for generating in-depth, well-structured reports on complex topics. By breaking down the main query into subtopics and leveraging the power of GPT Researcher, it can produce content that goes beyond the typical limitations of LLM outputs. This makes it an invaluable asset for researchers, content creators, and anyone needing detailed, well-researched information on a given topic."))}u.isMDXComponent=!0}}]);