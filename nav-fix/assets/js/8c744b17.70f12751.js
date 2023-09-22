"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={description:"Use the KeyringSnapRpcClient from a dapp.",sidebar_label:"Use the Keyring API",sidebar_position:5},s="Use the Keyring API from a dapp",c={unversionedId:"how-to/use-keyring-api",id:"how-to/use-keyring-api",title:"Use the Keyring API from a dapp",description:"Use the KeyringSnapRpcClient from a dapp.",source:"@site/snaps/how-to/use-keyring-api.md",sourceDirName:"how-to",slug:"/how-to/use-keyring-api",permalink:"/nav-fix/snaps/how-to/use-keyring-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Use the KeyringSnapRpcClient from a dapp.",sidebar_label:"Use the Keyring API",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Use custom UI",permalink:"/nav-fix/snaps/how-to/use-custom-ui"},next:{title:"Work with third-party snaps",permalink:"/nav-fix/snaps/how-to/work-with-existing-snaps"}},o={},l=[{value:"Create the KeyringSnapRpcClient",id:"create-the-keyringsnaprpcclient",level:2},{value:"Call Keyring API methods",id:"call-keyring-api-methods",level:2},{value:"createAccount",id:"createaccount",level:3},{value:"getAccount",id:"getaccount",level:3},{value:"listAccounts",id:"listaccounts",level:3},{value:"updateAccount",id:"updateaccount",level:3},{value:"deleteAccount",id:"deleteaccount",level:3},{value:"submitRequest",id:"submitrequest",level:3},{value:"getRequest",id:"getrequest",level:3},{value:"listRequests",id:"listrequests",level:3},{value:"approveRequest",id:"approverequest",level:3},{value:"rejectRequest",id:"rejectrequest",level:3},{value:"filterAccountChains",id:"filteraccountchains",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-keyring-api-from-a-dapp"},"Use the Keyring API from a dapp"),(0,r.kt)("p",null,"Your dapp can use the ",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/concepts/keyring-api"},"Keyring API")," to interact with custom EVM accounts.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/reference/keyring-api/Classes/class.KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),"\nof the Keyring API to invoke Keyring RPC methods on your ",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/concepts/keyring-api#terminology"},"Keyring snap"),"."),(0,r.kt)("admonition",{title:"tutorial",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can follow the end-to-end tutorial to ",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/tutorials/custom-evm-accounts"},"create a snap to connect to custom EVM accounts"),".")),(0,r.kt)("admonition",{title:"API documentation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/reference/keyring-api/"},"Keyring API reference")," for all the Keyring API methods.")),(0,r.kt)("h2",{id:"create-the-keyringsnaprpcclient"},"Create the KeyringSnapRpcClient"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using\nYarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("p",null,"Create the client by adding the following to your project script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { KeyringSnapRpcClient } from "@metamask/keyring-api";\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n')),(0,r.kt)("h2",{id:"call-keyring-api-methods"},"Call Keyring API methods"),(0,r.kt)("p",null,"You can now use the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient")," to invoke the following\n",(0,r.kt)("a",{parentName:"p",href:"/nav-fix/snaps/reference/keyring-api/"},(0,r.kt)("inlineCode",{parentName:"a"},"Keyring API"))," methods on your snap."),(0,r.kt)("h3",{id:"createaccount"},"createAccount"),(0,r.kt)("p",null,"Creates a Keyring account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let keyringAccount = await client.createAccount("KeyringAccount1");\n')),(0,r.kt)("h3",{id:"getaccount"},"getAccount"),(0,r.kt)("p",null,"Gets a Keyring account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// accountId is returned when the account is created using createAccount.\nlet keyringAccount = await client.getAccount(accountId);\n")),(0,r.kt)("h3",{id:"listaccounts"},"listAccounts"),(0,r.kt)("p",null,"Lists all Keyring accounts created by the snap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let keyringAccounts = await client.listAccounts();\n")),(0,r.kt)("h3",{id:"updateaccount"},"updateAccount"),(0,r.kt)("p",null,"Updates a Keyring account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let updatedAccount = await client.updateAccount(modifiedKeyringAccount);\n")),(0,r.kt)("h3",{id:"deleteaccount"},"deleteAccount"),(0,r.kt)("p",null,"Deletes a Keyring account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let snapResponse = await client.deleteAccount(accountId);\n")),(0,r.kt)("h3",{id:"submitrequest"},"submitRequest"),(0,r.kt)("p",null,"Submits a Keyring request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { v4 as uuid } from "uuid";\n\n// Example submitting an eth_sendTransaction request\nlet submitRequestResponse = await client.submitRequest({\n    // ID of the account to which you want to submit this request\n    account: accountId,\n    scope: "eip155:1", // Ethereum Mainnet\n    request: {\n        jsonrpc: "2.0",\n        // Unique ID to identify every request\n        id: uuid(),\n        // The method and parameter structure is subjective to the Keyring API implementation in the snap code.\n        method: "eth_sendTransaction",\n        params:\n            {\n                from: "",\n                to: "0xcEF0f7f7ee1650b4A8151f605d9258bA65D733F5",\n                data,\n                chainId: "1",\n            },\n        ,\n    },\n});\n')),(0,r.kt)("h3",{id:"getrequest"},"getRequest"),(0,r.kt)("p",null,"Gets a Keyring request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// requestId is returned during request submission.\nlet keyringRequest = await client.getRequest(requestId);\n")),(0,r.kt)("h3",{id:"listrequests"},"listRequests"),(0,r.kt)("p",null,"Lists all requests submitted to the snap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let requests = await client.listRequests();\n")),(0,r.kt)("h3",{id:"approverequest"},"approveRequest"),(0,r.kt)("p",null,"Approves a request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// requestId is returned during request submission.\nawait client.approveRequest(requestId);\n")),(0,r.kt)("h3",{id:"rejectrequest"},"rejectRequest"),(0,r.kt)("p",null,"Rejects a request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// requestId is returned during request submission.\nawait client.rejectRequest(requestId);\n")),(0,r.kt)("h3",{id:"filteraccountchains"},"filterAccountChains"),(0,r.kt)("p",null,"Returns a filtered list of CAIP-2 IDs representing the supported chains."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// accountId - ID of the account to be checked\n// chains - List of chains (CAIP-2) to be checked\nlet supportedChains = await client.filterAccountChains(accountId, chains);\n")))}d.isMDXComponent=!0}}]);