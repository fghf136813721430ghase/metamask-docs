"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_label:"Electron",sidebar_position:6},c="Use MetaMask SDK with Electron",s={unversionedId:"how-to/connect/set-up-sdk/javascript/electron",id:"how-to/connect/set-up-sdk/javascript/electron",title:"Use MetaMask SDK with Electron",description:"You can import MetaMask SDK into your Electron dapp to enable your users",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/electron.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/electron",permalink:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/electron",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/electron.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Electron",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Node.js",permalink:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},next:{title:"Gaming",permalink:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/gaming/"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-metamask-sdk-with-electron"},"Use MetaMask SDK with Electron"),(0,o.kt)("p",null,"You can import ",(0,o.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/concepts/sdk/"},"MetaMask SDK")," into your Electron dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,o.kt)("p",null,"On the frontend, see the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/react/"},"use the SDK with React"),".\nOn the backend, see the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"use the SDK with Node.js"),"."),(0,o.kt)("admonition",{title:"example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/electronjs"},"Electron SDK example"),"\nfor advanced use cases.")))}d.isMDXComponent=!0}}]);