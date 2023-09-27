"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=o(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||y[f]||s;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={},i="Type alias: KeyringJsonRpcRequest",p={unversionedId:"reference/keyring-api/type-aliases/KeyringJsonRpcRequest",id:"reference/keyring-api/type-aliases/KeyringJsonRpcRequest",title:"Type alias: KeyringJsonRpcRequest",description:"JSON-RPC request type.",source:"@site/snaps/reference/keyring-api/type-aliases/KeyringJsonRpcRequest.md",sourceDirName:"reference/keyring-api/type-aliases",slug:"/reference/keyring-api/type-aliases/KeyringJsonRpcRequest",permalink:"/sdk-concepts/snaps/reference/keyring-api/type-aliases/KeyringJsonRpcRequest",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/type-aliases/KeyringJsonRpcRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Type alias: KeyringAccount",permalink:"/sdk-concepts/snaps/reference/keyring-api/type-aliases/KeyringAccount"},next:{title:"Type alias: KeyringRequest",permalink:"/sdk-concepts/snaps/reference/keyring-api/type-aliases/KeyringRequest"}},c={},o=[{value:"Source",id:"source",level:2}],l={toc:o},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-alias-keyringjsonrpcrequest"},"Type alias: KeyringJsonRpcRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type KeyringJsonRpcRequest: Infer<*typeof* KeyringJsonRpcRequestStruct>;\n")),(0,a.kt)("p",null,"JSON-RPC request type."),(0,a.kt)("p",null,"Represents a JSON-RPC request sent by a dApp. The request ID must be a\nstring and the params field cannot be undefined."),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L87"},"external/keyring-api/src/keyring-api.ts:87")))}y.isMDXComponent=!0}}]);