"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"React UI",sidebar_position:1},s="Use MetaMask SDK with React UI",i={unversionedId:"how-to/connect/set-up-sdk/javascript/react/react-ui",id:"how-to/connect/set-up-sdk/javascript/react/react-ui",title:"Use MetaMask SDK with React UI",description:"You can import MetaMask SDK into your React dapp to enable your",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui.md",sourceDirName:"how-to/connect/set-up-sdk/javascript/react",slug:"/how-to/connect/set-up-sdk/javascript/react/react-ui",permalink:"/fix-keyring/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React UI",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"React",permalink:"/fix-keyring/wallet/how-to/connect/set-up-sdk/javascript/react/"},next:{title:"Pure JavaScript",permalink:"/fix-keyring/wallet/how-to/connect/set-up-sdk/javascript/pure-js"}},p={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with MetaMaskUIProvider",id:"3-wrap-your-project-with-metamaskuiprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"5. Use the MetaMaskButton component",id:"5-use-the-metamaskbutton-component",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react-ui"},"Use MetaMask SDK with React UI"),(0,r.kt)("p",null,"You can import ",(0,r.kt)("a",{parentName:"p",href:"/fix-keyring/wallet/concepts/sdk/"},"MetaMask SDK")," into your React dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui")," package not only exports hooks from ",(0,r.kt)("a",{parentName:"p",href:"/fix-keyring/wallet/"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/sdk-react")),",\nbut also provides wrappers around ",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a basic UI button component\nfor connecting to MetaMask."),(0,r.kt)("p",null,"By combining the functions of ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui"),", you can use both\nthe core functionality and the pre-styled UI components to streamline the integration of MetaMask\ninto your React dapp."),(0,r.kt)("p",null,"The SDK for React has the ",(0,r.kt)("a",{parentName:"p",href:"/fix-keyring/wallet/how-to/connect/set-up-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("admonition",{title:"Examples",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"MetaMask JavaScript SDK examples"),"\nfor advanced use cases.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react-ui\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react-ui\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';\n")),(0,r.kt)("h3",{id:"3-wrap-your-project-with-metamaskuiprovider"},"3. Wrap your project with MetaMaskUIProvider"),(0,r.kt)("p",null,"Wrap your root component in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskUIProvider"),".\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { MetaMaskUIProvider } from '@metamask/sdk-react-ui';\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root') as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskUIProvider sdkOptions={{\n      dappMetadata: {\n        name: \"Demo UI React App\",\n      }\n    }}>\n      <App />\n    </MetaMaskUIProvider>\n  </React.StrictMode>\n);\n")),(0,r.kt)("p",null,"For the full list of options you can set for ",(0,r.kt)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-keyring/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),"."),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/fix-keyring/wallet/#4-use-the-sdk"},"instructions for ",(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/sdk-react")),"."),(0,r.kt)("h3",{id:"5-use-the-metamaskbutton-component"},"5. Use the MetaMaskButton component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui")," package provides a pre-styled button, ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskButton"),", to initiate a\nconnection to MetaMask.\nYou can use it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { MetaMaskButton } from "@metamask/sdk-react-ui";\nimport React, { useState } from "react";\n\nexport const App = () => {\n  return (\n    <div className="App">\n      <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>\n    </div>\n  );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"MetaMaskButton properties"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"theme"),": Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"light")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dark")," to adapt to your dapp's theme."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color"),": The color of the button. Accepts any valid CSS color string.")))),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"MetaMask JavaScript SDK examples"),"\nfor advanced use cases."))}m.isMDXComponent=!0}}]);