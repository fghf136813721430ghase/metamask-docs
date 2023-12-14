"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9924],{40491:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),r=a(86010),n=a(39960),s=a(88824),c=a(10833),o=a(35281),i=a(95999),u=a(89322),m=a(90197);function g(e){let{doc:t}=e;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function d(e){let{tag:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),d=(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:a(t.count),tagName:t.label});return l.createElement(c.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsTagDocListPage)},l.createElement(c.d,{title:d}),l.createElement(m.Z,{tag:"doc_tag_doc_list"}),l.createElement(u.default,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,d),l.createElement(n.Z,{href:t.allTagsPath},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>l.createElement(g,{key:e.id,doc:e})))))))))}},88824:(e,t,a)=>{a.d(t,{c:()=>u});var l=a(67294),r=a(52263),n=a(25108);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return n.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function u(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&n.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),s=a.pluralForms.indexOf(r);return l[Math.min(s,l.length-1)]}(a,t,e)}}}}]);