"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8907],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||h[g]||s;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4609:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(8168),a=(n(6540),n(5680));const s={},i="Deep Research with GPT Researcher \ud83d\ude80",o={unversionedId:"gpt-researcher/gptr/deep_research",id:"gpt-researcher/gptr/deep_research",isDocsHomePage:!1,title:"Deep Research with GPT Researcher \ud83d\ude80",description:"With the latest \"Deep Research\" trend in the AI community, we're excited to implement our own Open source deep research capability! Introducing GPT Researcher's Deep Research - an advanced recursive research system that explores topics with unprecedented depth and breadth.",source:"@site/docs/gpt-researcher/gptr/deep_research.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/deep_research",permalink:"/docs/gpt-researcher/gptr/deep_research",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/deep_research.md",tags:[],version:"current",frontMatter:{}},l=[{value:"How It Works",id:"how-it-works",children:[],level:2},{value:"Process Flow",id:"process-flow",children:[],level:2},{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Progress Tracking",id:"progress-tracking",children:[],level:2},{value:"Advanced Usage",id:"advanced-usage",children:[{value:"Custom Research Flow",id:"custom-research-flow",children:[],level:3},{value:"Error Handling",id:"error-handling",children:[],level:3}],level:2},{value:"Best Practices",id:"best-practices",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],c={toc:l},p="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deep-research-with-gpt-researcher-"},"Deep Research with GPT Researcher \ud83d\ude80"),(0,a.yg)("p",null,"With the latest \"Deep Research\" trend in the AI community, we're excited to implement our own Open source deep research capability! Introducing GPT Researcher's Deep Research - an advanced recursive research system that explores topics with unprecedented depth and breadth."),(0,a.yg)("h2",{id:"how-it-works"},"How It Works"),(0,a.yg)("p",null,"Deep Research employs a fascinating tree-like exploration pattern:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Breadth"),": At each level, it generates multiple search queries to explore different aspects of your topic"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Depth"),": For each branch, it recursively dives deeper, following leads and uncovering connections"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Concurrent Processing"),": Utilizes async/await patterns to run multiple research paths simultaneously"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Smart Context Management"),": Automatically aggregates and synthesizes findings across all branches"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Progress Tracking"),": Real-time updates on research progress across both breadth and depth dimensions")),(0,a.yg)("p",null,"Think of it as deploying a team of AI researchers, each following their own research path while collaborating to build a comprehensive understanding of your topic."),(0,a.yg)("h2",{id:"process-flow"},"Process Flow"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\n    A[User Query] --\x3e B[Initialize Deep Research]\n    B --\x3e C[Generate Initial Search Queries]\n    C --\x3e D[Concurrent Research Execution]\n    \n    %% Depth Level 1\n    D --\x3e E1[Research Path 1]\n    D --\x3e E2[Research Path 2]\n    D --\x3e E3[Research Path 3]\n    D --\x3e E4[Research Path 4]\n    \n    %% Processing Results\n    E1 --\x3e F1[Extract Learnings]\n    E2 --\x3e F2[Extract Learnings]\n    E3 --\x3e F3[Extract Learnings]\n    E4 --\x3e F4[Extract Learnings]\n    \n    %% Recursive Depth\n    F1 --\x3e G1[Generate Follow-up Queries]\n    F2 --\x3e G2[Generate Follow-up Queries]\n    F3 --\x3e G3[Generate Follow-up Queries]\n    F4 --\x3e G4[Generate Follow-up Queries]\n    \n    %% Depth Level 2\n    G1 --\x3e H1[Deeper Research]\n    G2 --\x3e H2[Deeper Research]\n    G3 --\x3e H3[Deeper Research]\n    G4 --\x3e H4[Deeper Research]\n    \n    %% Aggregation\n    H1 --\x3e I[Aggregate Results]\n    H2 --\x3e I\n    H3 --\x3e I\n    H4 --\x3e I\n    \n    %% Final Steps\n    I --\x3e J[Synthesize Context]\n    J --\x3e K[Generate Report]\n    \n    %% Progress Tracking\n    B --\x3e L[Progress Tracking]\n    L --\x3e M[Depth Progress]\n    L --\x3e N[Breadth Progress]\n    L --\x3e O[Query Progress]\n    \n    %% Styling\n    classDef process fill:#f9f,stroke:#333,stroke-width:2px\n    classDef tracking fill:#bbf,stroke:#333,stroke-width:2px\n    class A,B,C,D,I,J,K process\n    class L,M,N,O tracking\n")),(0,a.yg)("h2",{id:"quick-start"},"Quick Start"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nfrom gpt_researcher.utils.enum import ReportType, Tone\nimport asyncio\n\nasync def main():\n    # Initialize researcher with deep research type\n    researcher = GPTResearcher(\n        query="What are the latest developments in quantum computing?",\n        report_type="deep",  # This triggers deep research modd\n    )\n    \n    # Run research\n    research_data = await researcher.conduct_research()\n    \n    # Generate report\n    report = await researcher.write_report()\n    print(report)\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"Deep Research behavior can be customized through several parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"deep_research_breadth"),": Number of parallel research paths at each level (default: 4)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"deep_research_depth"),": How many levels deep to explore (default: 2)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"deep_research_concurrency"),": Maximum number of concurrent research operations (default: 2)")),(0,a.yg)("p",null,"You can configure these in your config file, pass as environment variables or pass them directly:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'researcher = GPTResearcher(\n    query="your query",\n    report_type="deep",\n    config_path="path/to/config.yaml"  # Configure deep research parameters here\n)\n')),(0,a.yg)("h2",{id:"progress-tracking"},"Progress Tracking"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"on_progress")," callback provides real-time insights into the research process:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class ResearchProgress:\n    current_depth: int       # Current depth level\n    total_depth: int         # Maximum depth to explore\n    current_breadth: int     # Current number of parallel paths\n    total_breadth: int       # Maximum breadth at each level\n    current_query: str       # Currently processing query\n    completed_queries: int   # Number of completed queries\n    total_queries: int       # Total queries to process\n")),(0,a.yg)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,a.yg)("h3",{id:"custom-research-flow"},"Custom Research Flow"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'researcher = GPTResearcher(\n    query="your query",\n    report_type="deep",\n    tone=Tone.Objective,\n    headers={"User-Agent": "your-agent"},  # Custom headers for web requests\n    verbose=True  # Enable detailed logging\n)\n\n# Get raw research context\ncontext = await researcher.conduct_research()\n\n# Access research sources\nsources = researcher.get_research_sources()\n\n# Get visited URLs\nurls = researcher.get_source_urls()\n\n# Generate formatted report\nreport = await researcher.write_report()\n')),(0,a.yg)("h3",{id:"error-handling"},"Error Handling"),(0,a.yg)("p",null,"The deep research system is designed to be resilient:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Failed queries are automatically skipped"),(0,a.yg)("li",{parentName:"ul"},"Research continues even if some branches fail"),(0,a.yg)("li",{parentName:"ul"},"Progress tracking helps identify any issues")),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Start Broad"),": Begin with a general query and let the system explore specifics"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Monitor Progress"),": Use the progress callback to understand the research flow"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Adjust Parameters"),": Tune breadth and depth based on your needs:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"More breadth = wider coverage"),(0,a.yg)("li",{parentName:"ul"},"More depth = deeper insights"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Resource Management"),": Consider concurrency limits based on your system capabilities")),(0,a.yg)("h2",{id:"limitations"},"Limitations"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Usage of reasoning LLM models such as ",(0,a.yg)("inlineCode",{parentName:"li"},"o3-mini"),". This means that permissions for reasoning are required and the overall run will be significantly slower."),(0,a.yg)("li",{parentName:"ul"},"Deep research may take longer than standard research"),(0,a.yg)("li",{parentName:"ul"},"Higher API usage and costs due to multiple concurrent queries"),(0,a.yg)("li",{parentName:"ul"},"May require more system resources for parallel processing")),(0,a.yg)("p",null,"Happy researching! \ud83c\udf89"))}u.isMDXComponent=!0}}]);