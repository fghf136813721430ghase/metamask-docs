"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3512],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},i="Restrict a Snap's RPC API methods",s={unversionedId:"how-to/restrict-rpc-api",id:"how-to/restrict-rpc-api",title:"Restrict a Snap's RPC API methods",description:"Restrict your Snap's RPC API methods.",source:"@site/snaps/how-to/restrict-rpc-api.md",sourceDirName:"how-to",slug:"/how-to/restrict-rpc-api",permalink:"/1249-separate-tabs/snaps/how-to/restrict-rpc-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/restrict-rpc-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Use environment variables",permalink:"/1249-separate-tabs/snaps/how-to/use-environment-variables"},next:{title:"Test a Snap",permalink:"/1249-separate-tabs/snaps/how-to/test-a-snap"}},p={},c=[{value:"Restrict the whole API",id:"restrict-the-whole-api",level:2},{value:"Restrict by method and origin",id:"restrict-by-method-and-origin",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restrict-a-snaps-rpc-api-methods"},"Restrict a Snap's RPC API methods"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"dapps")," caveat of the ",(0,o.kt)("a",{parentName:"p",href:"/1249-separate-tabs/snaps/reference/permissions#endowmentrpc"},(0,o.kt)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission\nis set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", any dapp can call the Snap's RPC API by default.\nYou can ",(0,o.kt)("a",{parentName:"p",href:"#restrict-the-whole-api"},"restrict the whole API")," to specific dapp origins or\n",(0,o.kt)("a",{parentName:"p",href:"#restrict-by-method-and-origin"},"restrict the API by method and origin"),"."),(0,o.kt)("h2",{id:"restrict-the-whole-api"},"Restrict the whole API"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission has an optional\n",(0,o.kt)("a",{parentName:"p",href:"/1249-separate-tabs/snaps/reference/permissions#allowed-origins"},(0,o.kt)("inlineCode",{parentName:"a"},"allowedOrigins"))," caveat.\nYou can use this to restrict the domains that are allowed to make calls to the Snap's RPC API."),(0,o.kt)("h2",{id:"restrict-by-method-and-origin"},"Restrict by method and origin"),(0,o.kt)("p",null,"Sometimes a more granular control is required, such as filtering by method ",(0,o.kt)("em",{parentName:"p"},"and")," caller origin."),(0,o.kt)("p",null,"You can restrict by method and origin using the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," parameter of the\n",(0,o.kt)("a",{parentName:"p",href:"/1249-separate-tabs/snaps/reference/entry-points#onrpcrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler, UnauthorizedError } from "@metamask/snaps-sdk";\n\ntype MethodPermission = "*" | string[];\n\nconst RPC_PERMISSIONS: Record<string, MethodPermission> = {\n    hello: "*",\n    secureMethod: [\n        "https://metamask.io",\n        "https://www.mydomain.com",\n    ]\n};\n\nconst isAllowed = (method: string, origin: string) => {\n    return RPC_PERMISSIONS[method] === "*" || RPC_PERMISSIONS[method].includes(origin);\n};\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n    origin,\n    request,\n}) => {\n    // Check permissions\n    if (!isAllowed(request.method, origin)) {\n        throw new UnauthorizedError(`Method ${request.method} not authorized for origin ${origin}.`);\n    }\n\n    switch (request.method) {\n        case "hello":\n            return "world!";\n    \n        case "secureMethod":\n            return "The secret is: 42";\n\n        default:\n            throw new Error("Method not found.");\n    }\n};\n')),(0,o.kt)("p",null,"You can construct more powerful filtering methods using regular expressions or any other logic of\nyour choice."))}m.isMDXComponent=!0}}]);