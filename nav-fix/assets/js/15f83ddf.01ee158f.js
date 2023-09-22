"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||b[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"SubmitRequestResponseStruct"},s="Variable: SubmitRequestResponseStruct",o={unversionedId:"reference/keyring-api/Variables/variable.SubmitRequestResponseStruct",id:"reference/keyring-api/Variables/variable.SubmitRequestResponseStruct",title:"Variable: SubmitRequestResponseStruct",description:"Source",source:"@site/snaps/reference/keyring-api/04-Variables/05-variable.SubmitRequestResponseStruct.md",sourceDirName:"reference/keyring-api/04-Variables",slug:"/reference/keyring-api/Variables/variable.SubmitRequestResponseStruct",permalink:"/nav-fix/snaps/reference/keyring-api/Variables/variable.SubmitRequestResponseStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/04-Variables/05-variable.SubmitRequestResponseStruct.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"SubmitRequestResponseStruct"},sidebar:"snapsSidebar",previous:{title:"KeyringRequestStruct",permalink:"/nav-fix/snaps/reference/keyring-api/Variables/variable.KeyringRequestStruct"},next:{title:"buildHandlersChain",permalink:"/nav-fix/snaps/reference/keyring-api/Functions/function.buildHandlersChain"}},u={},c=[{value:"Source",id:"source",level:2}],l={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-submitrequestresponsestruct"},"Variable: SubmitRequestResponseStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const SubmitRequestResponseStruct: Struct< {\n  pending: true;\n } | {\n  pending: false;\n  result: Json;\n }, null >\n")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L115"},"external/keyring-api/src/keyring-api.ts:115")))}b.isMDXComponent=!0}}]);