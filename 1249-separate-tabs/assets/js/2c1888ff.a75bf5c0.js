"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"Develop, test, and publish a Snap.",sidebar_position:7},i="Publish a Snap",p={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/1249-separate-tabs/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/1249-separate-tabs/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Connect to a Snap",permalink:"/1249-separate-tabs/snaps/how-to/connect-to-a-snap"}},s={},l=[{value:"Distribute your Snap",id:"distribute-your-snap",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,o.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,o.kt)("li",{parentName:"ul"},"The image specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,o.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,o.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,o.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,o.kt)("a",{parentName:"p",href:"/1249-separate-tabs/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,o.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,o.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,o.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,o.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,o.kt)("p",null,"You should deploy a companion dapp where users can learn about your Snap and install it, or\nintegrate with your existing dapp."),(0,o.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,o.kt)("a",{parentName:"p",href:"/1249-separate-tabs/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."))}m.isMDXComponent=!0}}]);