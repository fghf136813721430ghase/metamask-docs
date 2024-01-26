"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:2},i="Detect MetaMask",s={unversionedId:"how-to/connect/detect-metamask",id:"how-to/connect/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/connect/detect-metamask.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/detect-metamask",permalink:"/update-wallet-interop/wallet/how-to/connect/detect-metamask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/detect-metamask.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Android",permalink:"/update-wallet-interop/wallet/how-to/connect/set-up-sdk/mobile/android"},next:{title:"Detect a user's network",permalink:"/update-wallet-interop/wallet/how-to/connect/detect-network"}},p={},l=[{value:"Use @metamask/detect-provider",id:"use-metamaskdetect-provider",level:2},{value:"Compile the module",id:"compile-the-module",level:3},{value:"What you need to know to implement",id:"what-you-need-to-know-to-implement",level:2},{value:"The MetaMask SDK",id:"the-metamask-sdk",level:3},{value:"MetaMask SDK Automatic Detection",id:"metamask-sdk-automatic-detection",level:4}],d={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,r.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,r.kt)("p",null,"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (typeof window.ethereum !== 'undefined') {\n  console.log('MetaMask is installed!');\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using the\n",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/reference/provider-api#windowethereumismetamask"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.isMetaMask"))," property.")),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative discovery mechanism to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/concepts/wallet-interoperabilty"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up SDK"),", which supports EIP-6963 by default.")),(0,r.kt)("h2",{id:"use-metamaskdetect-provider"},"Use @metamask/detect-provider"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module to\ndetect the MetaMask Ethereum provider on any platform or browser."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,r.kt)("p",null,"For example, the following code detects the provider using ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from '@metamask/detect-provider';\n\n// This returns the provider, or null if it wasn't detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  // From now on, this should always be true:\n  // provider === window.ethereum\n  startApp(provider); // initialize your app\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  // If the provider returned by detectEthereumProvider isn't the same as\n  // window.ethereum, something is overwriting it \u2013 perhaps another wallet.\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n  // Access the decentralized web!\n}\n")),(0,r.kt)("h3",{id:"compile-the-module"},"Compile the module"),(0,r.kt)("p",null,"Use a bundler such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," to compile the module and create\nan output script.\nInstall Webpack in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack\n")),(0,r.kt)("p",null,"Install the Webpack CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack-cli\n")),(0,r.kt)("p",null,"Compile the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx webpack\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When compiling the module, you might need to pass CLI options such as\n",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/experiments/"},(0,r.kt)("inlineCode",{parentName:"a"},"--experiments-top-level-await")),".\nYou can alternatively specify options in a configuration file as follows:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.config.cjs"',title:'"webpack.config.cjs"'},"module.exports = {\n    experiments: {\n        topLevelAwait: true,\n    },\n};\n"))),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx webpack")," again upon any changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/"},"Webpack's Getting Started guide")," for more information."),(0,r.kt)("h1",{id:"discover-multiple-wallets-with-eip-6963"},"Discover multiple wallets with EIP-6963"),(0,r.kt)("p",null,"EIP-6963 is an alternative discovery mechanism for multiple wallets and is the shift from relying solely on ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for wallet detection."),(0,r.kt)("p",null,"If a user has multiple wallet browser extensions installed, your web dapp can support\n",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/concepts/wallet-interoperabilty"},"wallet interoperability")," by adding support for\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which enables your dapp to discover and connect to multiple installed wallets."),(0,r.kt)("p",null,"To implement EIP-6963 in a React dapp, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/blob/main/src/vite-env.d.ts"},"EIP-6963 ViteJS React + TypeScript Demo")),(0,r.kt)("h2",{id:"what-you-need-to-know-to-implement"},"What you need to know to implement"),(0,r.kt)("p",null,"As a developer implementing ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", one simply needs to understand the initial motive, the value that this new approach brings users, and more importantly the types and interfaces needed in your application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-info"},"Provider Info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-detail"},"Provider Detail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events"},"Announce and Request Events"))),(0,r.kt)("p",null,"You will also need an interface to represent the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193 Provider")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface serves as the foundational structure for Ethereum wallet providers, outlining essential properties and methods for interaction with dapps. It includes attributes such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isStatus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", providing details about the provider's status and connection information. "),(0,r.kt)("p",null,"It also defines functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"sendAsync"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"send"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," for handling asynchronous communication and making requests to the Ethereum blockchain. This interface, defined by the previous ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", lays the groundwork for wallet interoperability and seamless integration with the Ethereum ecosystem. Developers can leverage this interface to implement and interact with Ethereum wallet providers in a standardized manner."),(0,r.kt)("h3",{id:"the-metamask-sdk"},"The MetaMask SDK"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support.")),(0,r.kt)("p",null,"The MetaMask SDK not only supports EIP-6963 on its own for detecting MetaMask, but is also being integrated into ",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"WAGMI 2.0+")," which supports EIP-6963. If you only want to connect to MetaMask extension and MetaMask mobile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/wallet/how-to/connect/set-up-sdk/javascript/"},"Set up MetaMask SDK")," in your dapp.")),(0,r.kt)("p",null,"The SDKs integration of EIP-6963 is for the efficient discovery and connection with the MetaMask Extension only. This enhancement is pivotal in streamlining the user experience and promoting seamless interactions with the Ethereum blockchain. "),(0,r.kt)("h4",{id:"metamask-sdk-automatic-detection"},"MetaMask SDK Automatic Detection"),(0,r.kt)("p",null,"The MetaMask JS SDK now automatically checks for the presence of the MetaMask Extension that supports EIP-6963. This eliminates the need for manual configuration or detection methods, thereby simplifying the initial setup process for developers and users alike.  "),(0,r.kt)("p",null,"Conflict Resolution: By adhering to the standards set by EIP-6963, the SDK unambiguously identifies and connects to the MetaMask Extension. This approach effectively resolves potential conflicts that might arise with other wallet extensions, ensuring a more stable and reliable interaction for users."))}m.isMDXComponent=!0}}]);