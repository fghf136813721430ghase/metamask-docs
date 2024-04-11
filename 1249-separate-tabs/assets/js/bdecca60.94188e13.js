"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1835],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(r),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(d,s(s({ref:e},p),{},{components:r})):n.createElement(d,s({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=y;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},30798:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},s="Contract proxy class",c={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",title:"Contract proxy class",description:"Learn about the contract proxy class in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",tags:[{label:"Unity SDK",permalink:"/1249-separate-tabs/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract factory",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},next:{title:"Contract provider",permalink:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"}},i={},l=[],p={toc:l},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-proxy-class"},"Contract proxy class"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"},"interacting with smart contracts in Unity"),", the contract proxy class is responsible\nfor performing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transaction serialization"),(0,a.kt)("li",{parentName:"ul"},"Transaction execution"),(0,a.kt)("li",{parentName:"ul"},"Transaction result deserialization")),(0,a.kt)("p",null,"The contract proxy class is also responsible for invoking the ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"provider")," and attempts\nto support both asynchronous and synchronous provider objects."),(0,a.kt)("p",null,"Since the proxy class is responsible for a lot, some parts of the class may be decoupled into their\nown components.\nFor example, transaction serialization and deserialization is not very customizable and will likely\nbe moved into its own component to allow more extendability."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The contract proxy class should be considered an internal and unstable API.\nYou should never need to inherit the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class, unless you're using the\n",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory"},"backed type contract factory"),".\nHowever, the ",(0,a.kt)("a",{parentName:"p",href:"/1249-separate-tabs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/#generate-contract-code"},"contract code generator")," already generates these\nclasses for you."),(0,a.kt)("p",{parentName:"admonition"},"You only  need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract.Attach<T>(string address, IProvider provider)"),".")))}m.isMDXComponent=!0}}]);