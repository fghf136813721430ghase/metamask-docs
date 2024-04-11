"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,u=c["".concat(p,".").concat(m)]||c[m]||h[m]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},i="Ethereum provider API",s={unversionedId:"reference/provider-api",id:"reference/provider-api",title:"Ethereum provider API",description:"See the MetaMask Ethereum provider API reference.",source:"@site/wallet/reference/provider-api.md",sourceDirName:"reference",slug:"/reference/provider-api",permalink:"/1249-separate-tabs/wallet/reference/provider-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/provider-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Unity SDK API",permalink:"/1249-separate-tabs/wallet/reference/sdk-unity-api"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>isMetaMask</code>",id:"ismetamask",level:3},{value:"Example",id:"example",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>isConnected()</code>",id:"isconnected",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>request()</code>",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>_metamask.isUnlocked()</code>",id:"_metamaskisunlocked",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-3",level:4},{value:"Events",id:"events",level:2},{value:"<code>accountsChanged</code>",id:"accountschanged",level:3},{value:"<code>chainChanged</code>",id:"chainchanged",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"Errors",id:"errors",level:2}],l={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,a.kt)("p",null,"This page is a reference for the Ethereum provider API of MetaMask's ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/concepts/wallet-api"},"Wallet API"),".\nMetaMask injects the provider API into websites visited by its users using the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nYou can use the provider ",(0,a.kt)("a",{parentName:"p",href:"#properties"},"properties"),", ",(0,a.kt)("a",{parentName:"p",href:"#methods"},"methods"),", and ",(0,a.kt)("a",{parentName:"p",href:"#events"},"events")," in your dapp."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative wallet detection mechanism to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/concepts/wallet-interoperability"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/connect/"},"using this mechanism to connect to MetaMask"),"."),(0,a.kt)("p",{parentName:"admonition"},"You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,a.kt)("inlineCode",{parentName:"p"},"provider"),".")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"ismetamask"},(0,a.kt)("inlineCode",{parentName:"h3"},"isMetaMask")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the user has MetaMask installed, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This property is non-standard.\nNon-MetaMask providers may also set this property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"provider.isMetaMask; // Or window.ethereum.isMetaMask if you don't support EIP-6963.\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"isconnected"},(0,a.kt)("inlineCode",{parentName:"h3"},"isConnected()")),(0,a.kt)("p",null,"Indicates whether the provider is connected to the current chain.\nIf the provider isn't connected, the page must be reloaded to re-establish the connection.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"#connect"},(0,a.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,a.kt)("a",{parentName:"p",href:"#disconnect"},(0,a.kt)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method is unrelated to ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/connect/access-accounts"},"accessing a user's accounts"),'.\nIn the provider interface, "connected" and "disconnected" refer to whether the provider can make RPC\nrequests to the current chain.')),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"provider.isConnected(); // Or window.ethereum.isConnected() if you don't support EIP-6963.\n")),(0,a.kt)("h3",{id:"request"},(0,a.kt)("inlineCode",{parentName:"h3"},"request()")),(0,a.kt)("p",null,"This method is used to submit ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API requests")," to Ethereum using MetaMask."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"An object containing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - The JSON-RPC API method name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," - (Optional) Parameters of the RPC method.\nIn practice, if a method has parameters, they're almost always of type ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),".")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"A promise that resolves to the result of the RPC method call.\nIf the request fails, the promise rejects with an ",(0,a.kt)("a",{parentName:"p",href:"#errors"},"error"),"."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("p",null,"The following is an example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"request()")," to call\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'params: [\n    {\n        from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n        to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n        // 30400\n        gas: "0x76c0",\n        // 10000000000000\n        gasPrice: "0x9184e72a000",\n        // 2441406250\n        value: "0x9184e72a",\n        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",\n    },\n];\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n        method: "eth_sendTransaction",\n        params,\n    })\n    .then((result) => {\n        // The result varies by RPC method.\n        // For example, this method returns a transaction hash hexadecimal string upon success.\n    })\n    .catch((error) => {\n        // If the request fails, the Promise rejects with an error.\n    });\n')),(0,a.kt)("h3",{id:"_metamaskisunlocked"},(0,a.kt)("inlineCode",{parentName:"h3"},"_metamask.isUnlocked()")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This method is experimental.\nUse it at your own risk.")),(0,a.kt)("p",null,"Indicates if MetaMask is unlocked by the user.\nMetaMask must be unlocked to perform any operation involving user accounts.\nNote that this method doesn't indicate if the user has exposed any accounts to the caller."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,"None."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"A promise that resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if MetaMask is unlocked by the user, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"provider._metamask.isUnlocked(); // Or window.ethereum._metamask.isUnlocked() if you don't support EIP-6963.\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"The MetaMask provider emits events using the Node.js\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},(0,a.kt)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThe following is an example of listening to the ",(0,a.kt)("a",{parentName:"p",href:"#accountschanged"},(0,a.kt)("inlineCode",{parentName:"a"},"accountsChanged"))," event.\nYou should remove listeners once you're done listening to an event (for example, on component\nunmount in React)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleAccountsChanged(accounts) {\n    // Handle new accounts, or lack thereof.\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("accountsChanged", handleAccountsChanged);\n\n// Later\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n    .removeListener("accountsChanged", handleAccountsChanged);\n')),(0,a.kt)("p",null,"The first argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"removeListener")," is the event name, and the second argument is\na reference to the function passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," for the event."),(0,a.kt)("h3",{id:"accountschanged"},(0,a.kt)("inlineCode",{parentName:"h3"},"accountsChanged")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("accountsChanged", handler: (accounts: Array<string>) => void);\n')),(0,a.kt)("p",null,"The provider emits this event when the return value of the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," RPC\nmethod changes.\n",(0,a.kt)("inlineCode",{parentName:"p"},"eth_accounts")," returns either an empty array, or an array that contains the addresses of the accounts\nthe caller is permitted to access with the most recently used account first.\nCallers are identified by their URL origin, which means that all sites with the same origin share\nthe same permissions."),(0,a.kt)("p",null,"This means that the provider emits ",(0,a.kt)("inlineCode",{parentName:"p"},"accountsChanged")," when the user's exposed account address changes.\nListen to this event to ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/connect/access-accounts#handle-accounts"},"handle accounts"),"."),(0,a.kt)("h3",{id:"chainchanged"},(0,a.kt)("inlineCode",{parentName:"h3"},"chainChanged")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("chainChanged", handler: (chainId: string) => void);\n')),(0,a.kt)("p",null,"The provider emits this event when the currently connected chain changes.\nListen to this event to ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/manage-networks/detect-network"},"detect a user's network"),"."),(0,a.kt)("admonition",{title:"Important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We strongly recommend reloading the page upon chain changes, unless you have a good reason not to:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("chainChanged", (chainId) => window.location.reload());\n'))),(0,a.kt)("h3",{id:"connect"},(0,a.kt)("inlineCode",{parentName:"h3"},"connect")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ConnectInfo {\n    chainId: string;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("connect", handler: (connectInfo: ConnectInfo) => void);\n')),(0,a.kt)("p",null,"The provider emits this event when it's first able to submit RPC requests to a chain.\nWe recommend listening to this event and using the\n",(0,a.kt)("a",{parentName:"p",href:"#isconnected"},(0,a.kt)("inlineCode",{parentName:"a"},"isConnected()"))," provider method to determine when\nthe provider is connected."),(0,a.kt)("h3",{id:"disconnect"},(0,a.kt)("inlineCode",{parentName:"h3"},"disconnect")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("disconnect", handler: (error: ProviderRpcError) => void);\n')),(0,a.kt)("p",null,"The provider emits this event if it becomes unable to submit RPC requests to a chain.\nIn general, this only happens due to network connectivity issues or some unforeseen error."),(0,a.kt)("p",null,"When the provider emits this event, it doesn't accept new requests until the connection to the chain\nis re-established, which requires reloading the page.\nYou can also use the ",(0,a.kt)("a",{parentName:"p",href:"#isconnected"},(0,a.kt)("inlineCode",{parentName:"a"},"isConnected()"))," provider method\nto determine if the provider is disconnected."),(0,a.kt)("h3",{id:"message"},(0,a.kt)("inlineCode",{parentName:"h3"},"message")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ProviderMessage {\n    type: string;\n    data: unknown;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n    .on("message", handler: (message: ProviderMessage) => void);\n')),(0,a.kt)("p",null,"The provider emits this event when it receives a message that the user should be notified of.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property identifies the kind of message."),(0,a.kt)("p",null,"RPC subscription updates are a common use case for this event.\nFor example, if you create a subscription using\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_subscribe")),", each\nsubscription update is emitted as a ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," event with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_subscription"),"."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"All errors returned by the MetaMask provider follow this interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n    message: string;\n    code: number;\n    data?: unknown;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"#request"},(0,a.kt)("inlineCode",{parentName:"a"},"request()"))," provider method throws errors eagerly.\nYou can use the error ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed.\nCommon codes and their meaning include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4001")," - The request is rejected by the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-32602")," - The parameters are invalid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-32603")," - Internal error.")),(0,a.kt)("p",null,"For the complete list of errors, see ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors"},"EIP-1193"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474#error-codes"},"EIP-1474"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/package/eth-rpc-errors"},(0,a.kt)("inlineCode",{parentName:"a"},"eth-rpc-errors"))," package implements all RPC errors\nreturned by the MetaMask provider, and can help you identify their meaning.")))}h.isMDXComponent=!0}}]);