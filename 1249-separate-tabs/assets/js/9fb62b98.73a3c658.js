"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||s;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={description:"Batch multiple JSON-RPC requests using MetaMask SDK.",sidebar_position:9,tags:["JavaScript SDK"]},i="Batch JSON-RPC requests",o={unversionedId:"how-to/use-sdk/javascript/batch-json-rpc-requests",id:"how-to/use-sdk/javascript/batch-json-rpc-requests",title:"Batch JSON-RPC requests",description:"Batch multiple JSON-RPC requests using MetaMask SDK.",source:"@site/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/batch-json-rpc-requests",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests.md",tags:[{label:"JavaScript SDK",permalink:"/1249-separate-tabs/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:9,frontMatter:{description:"Batch multiple JSON-RPC requests using MetaMask SDK.",sidebar_position:9,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Make read-only requests",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/javascript/make-read-only-requests"},next:{title:"Display custom modals",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/javascript/display-custom-modals"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the <code>metamask_batch</code> method",id:"use-the-metamask_batch-method",level:2},{value:"React / Next.js / React Native example",id:"react--nextjs--react-native-example",level:3},{value:"Vue.js example",id:"vuejs-example",level:3},{value:"Best practices",id:"best-practices",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-json-rpc-requests"},"Batch JSON-RPC requests"),(0,r.kt)("p",null,"You can batch multiple JSON-RPC requests using ",(0,r.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/concepts/sdk/"},"MetaMask SDK"),"."),(0,r.kt)("p",null,"The SDK's ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," method enables you to batch multiple JSON-RPC requests in a single call,\nproviding a streamlined approach for dapps to interact with EVM networks, and enabling complex\nsequences of actions.\nThis method enhances performance, usability, and efficiency by reducing the number of network calls\nmade to MetaMask."),(0,r.kt)("p",null,"Use cases include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batching multiple signatures")," - Send multiple signing requests in one batch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Switching networks")," - Switch the EVM network, perform an action such as sending a transaction,\nand switch back, all in one batch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mixed transactions and signatures")," - Combine transaction sending and signing requests in one batch."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," opens up additional possibilities for sophisticated transaction flows in dapps,\nenhancing the user experience and operational efficiency."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/use-sdk/javascript/"},"Set up MetaMask SDK")," in your JavaScript dapp."),(0,r.kt)("h2",{id:"use-the-metamask_batch-method"},"Use the ",(0,r.kt)("inlineCode",{parentName:"h2"},"metamask_batch")," method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," takes an array of JSON-RPC requests (",(0,r.kt)("inlineCode",{parentName:"p"},"ChainRPC[]"),") as its parameter."),(0,r.kt)("p",null,"Each request in the batch is independent.\nThe user receives a prompt for each action within the batch, allowing them to approve or reject\nindividual requests.\nIf any request is rejected, the entire batch fails and an error is returned, ensuring integrity in\ntransactional operations."),(0,r.kt)("p",null,"The method returns an array of results corresponding to each request."),(0,r.kt)("h3",{id:"react--nextjs--react-native-example"},"React / Next.js / React Native example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," to batch\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," in React, Next.js, or React Native/Expo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { metamask_batch } from "metamask-sdk";\n\nfunction MyComponent() {\n    const handleBatchRequest = async () => {\n        const batchRequests = [\n            { method: "personal_sign", params: ["message", "address"] },\n            {\n                method: "eth_sendTransaction",\n                params: [\n                    {\n                        /* transaction parameters */\n                    },\n                ],\n            },\n        ];\n    \n        try {\n            const results = await metamask_batch(batchRequests);\n            console.log(results); // Process results\n        } catch (error) {\n            console.error("Batch request failed", error);\n        }\n    };\n\n    return <button onClick={handleBatchRequest}>Send Batch Request</button>;\n}\n')),(0,r.kt)("h3",{id:"vuejs-example"},"Vue.js example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," to batch\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," in Vue.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\nimport { metamask_batch } from "metamask-sdk";\n\nexport default {\n    methods: {\n        async sendBatchRequest() {\n            const batchRequests = [\n                { method: "personal_sign", params: ["message", "address"] },\n                {\n                    method: "eth_sendTransaction",\n                    params: [\n                        {\n                            /* transaction parameters */\n                        },\n                    ],\n                },\n            ];\n      \n            try {\n                const results = await metamask_batch(batchRequests);\n                console.log(results);\n            } catch (error) {\n                console.error("Error in batch request", error);\n            }\n        }\n    }\n}\n<\/script>\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"Follow these guidelines when using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ensure each request in the batch is properly formatted")," according to the JSON-RPC specifications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handle errors gracefully"),", especially when a batch request is partially approved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Test batch operations thoroughly")," to ensure consistent behavior across different networks and accounts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be aware of the dependencies between chained requests."),"\nAvoid creating a dependency where the outcome of one request directly influences the context or\nvalidity of a subsequent request within the same batch.\nFor example, avoid chaining a ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain")),"\nrequest with ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signtypeddata_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),", because\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," relies on the current chain ID, which would be altered by ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain"),".\nThis approach ensures that each request in the batch operates independently and maintains its\nintegrity, regardless of changes introduced by preceding requests in the batch."))))}m.isMDXComponent=!0}}]);