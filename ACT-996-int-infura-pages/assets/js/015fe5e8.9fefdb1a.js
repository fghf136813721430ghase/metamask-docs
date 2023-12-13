"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:2},i="Detect MetaMask",p={unversionedId:"how-to/connect/detect-metamask",id:"how-to/connect/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/connect/detect-metamask.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/detect-metamask",permalink:"/ACT-996-int-infura-pages/wallet/how-to/connect/detect-metamask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/detect-metamask.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Android",permalink:"/ACT-996-int-infura-pages/wallet/how-to/connect/set-up-sdk/mobile/android"},next:{title:"Detect a user's network",permalink:"/ACT-996-int-infura-pages/wallet/how-to/connect/detect-network"}},s={},l=[{value:"Use @metamask/detect-provider",id:"use-metamaskdetect-provider",level:2},{value:"Compile the module",id:"compile-the-module",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,r.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,r.kt)("p",null,"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (typeof window.ethereum !== 'undefined') {\n  console.log('MetaMask is installed!');\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using the\n",(0,r.kt)("a",{parentName:"p",href:"/ACT-996-int-infura-pages/wallet/reference/provider-api#windowethereumismetamask"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.isMetaMask"))," property.")),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative discovery mechanism to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,r.kt)("a",{parentName:"p",href:"/ACT-996-int-infura-pages/wallet/concepts/wallet-interoperabilty"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"/ACT-996-int-infura-pages/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up SDK"),", which supports EIP-6963 by default.")),(0,r.kt)("h2",{id:"use-metamaskdetect-provider"},"Use @metamask/detect-provider"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module to\ndetect the MetaMask Ethereum provider on any platform or browser."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,r.kt)("p",null,"For example, the following code detects the provider using ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from '@metamask/detect-provider';\n\n// This returns the provider, or null if it wasn't detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  // From now on, this should always be true:\n  // provider === window.ethereum\n  startApp(provider); // initialize your app\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  // If the provider returned by detectEthereumProvider isn't the same as\n  // window.ethereum, something is overwriting it \u2013 perhaps another wallet.\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n  // Access the decentralized web!\n}\n")),(0,r.kt)("h3",{id:"compile-the-module"},"Compile the module"),(0,r.kt)("p",null,"Use a bundler such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," to compile the module and create\nan output script.\nInstall Webpack in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack\n")),(0,r.kt)("p",null,"Install the Webpack CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack-cli\n")),(0,r.kt)("p",null,"Compile the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx webpack\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When compiling the module, you might need to pass CLI options such as\n",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/experiments/"},(0,r.kt)("inlineCode",{parentName:"a"},"--experiments-top-level-await")),".\nYou can alternatively specify options in a configuration file as follows:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.config.cjs"',title:'"webpack.config.cjs"'},"module.exports = {\n    experiments: {\n        topLevelAwait: true,\n    },\n};\n"))),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx webpack")," again upon any changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/"},"Webpack's Getting Started guide")," for more information."))}d.isMDXComponent=!0}}]);