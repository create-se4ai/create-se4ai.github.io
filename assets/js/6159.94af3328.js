/*! For license information please see 6159.94af3328.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6159],{6742:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),o=n(3727),a=n(2263),i=n(3919),s=n(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(4996),u=n(8780);const f=function({isNavLink:e,to:t,href:n,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":p,autoAddBaseUrl:m=!0,...g}){var v;const{siteConfig:{trailingSlash:h,baseUrl:y}}=(0,a.Z)(),{withBaseUrl:b}=(0,l.C)(),w=(0,r.useContext)(c),E=t||n,_=(0,i.Z)(E),P=null==E?void 0:E.replace("pathname://","");let S=void 0!==P?(L=P,m&&(e=>e.startsWith("/"))(L)?b(L):L):void 0;var L;S&&_&&(S=(0,u.applyTrailingSlash)(S,{trailingSlash:h,baseUrl:y}));const O=(0,r.useRef)(!1),x=e?o.OL:o.rU,C=s.Z.canUseIntersectionObserver,k=(0,r.useRef)();(0,r.useEffect)((()=>(!C&&_&&null!=S&&window.docusaurus.prefetch(S),()=>{C&&k.current&&k.current.disconnect()})),[k,S,C,_]);const R=null!==(v=null==S?void 0:S.startsWith("#"))&&void 0!==v&&v,A=!S||!_||R;return S&&_&&!R&&!p&&w.collectLink(S),A?r.createElement("a",{href:S,...E&&!_&&{target:"_blank",rel:"noopener noreferrer"},...g}):r.createElement(x,{...g,onMouseEnter:()=>{O.current||null==S||(window.docusaurus.preload(S),O.current=!0)},innerRef:e=>{var t,n;C&&e&&_&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},k.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.current.unobserve(t),k.current.disconnect(),n())}))})),k.current.observe(t))},to:S||"",...e&&{isActive:d,activeClassName:f}})}},4973:(e,t,n)=>{n.d(t,{Z:()=>u,I:()=>l});var r=n(7294);const o=/{\w+}/g,a="{}";function i(e,t){const n=[],i=e.replace(o,(e=>{const o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){const e=r.isValidElement(i)?i:String(i);return n.push(e),a}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?i.split(a).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}var s=n(7529);function c({id:e,message:t}){var n,r;if(void 0===e&&void 0===t)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(r=null!==(n=s[null!=e?e:t])&&void 0!==n?n:t)&&void 0!==r?r:e}function l({message:e,id:t},n){return i(c({message:e,id:t}),n)}function u({children:e,id:t,values:n}){if(e&&"string"!=typeof e)throw console.warn("Illegal <Translate> children",e),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:e,id:t}),n)}},9935:(e,t,n)=>{n.d(t,{m:()=>r});const r="default"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},8143:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,useAllPluginInstancesData:()=>i,usePluginData:()=>s});var r=n(2263),o=n(9935);function a(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function s(e,t=o.m){const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},2389:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(9913);function a(){return(0,r.useContext)(o._)}},8408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(8143);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1}))),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=(0,t.getLatestVersion)(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=(0,t.getActiveVersion)(e,n),a=null==o?void 0:o.docs.find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{t.Jo=t.Iw=t.zu=t.yW=t.gB=t.gA=t.zh=t._r=void 0;const r=n(655),o=n(8143),a=(0,r.__importStar)(n(8084)),i=n(8408),s={};t._r=()=>{var e;return null!==(e=(0,a.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:s};t.zh=e=>(0,a.usePluginData)("docusaurus-plugin-content-docs",e);t.gA=(e={})=>{const n=(0,t._r)(),{pathname:r}=(0,o.useLocation)();return(0,i.getActivePlugin)(n,r,e)};t.gB=e=>(0,t.zh)(e).versions;t.yW=e=>{const n=(0,t.zh)(e);return(0,i.getLatestVersion)(n)};t.zu=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveVersion)(n,r)};t.Iw=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveDocContext)(n,r)};t.Jo=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getDocVersionSuggestions)(n,r)}},1217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(9105),a=n(3773),i=n(4996);function s({title:e,description:t,keywords:n,image:s,children:c}){const l=(0,a.pe)(e),{withBaseUrl:u}=(0,i.C)(),f=s?u(s,{absolute:!0}):void 0;return r.createElement(o.Z,null,e&&r.createElement("title",null,l),e&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),n&&r.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}),c)}},907:(e,t,n)=>{n.d(t,{Iw:()=>r.Iw,gA:()=>r.gA,zu:()=>r.zu,_r:()=>r._r,Jo:()=>r.Jo,zh:()=>r.zh,yW:()=>r.yW,gB:()=>r.gB});var r=n(6730)},3783:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(412);const a="desktop",i="mobile",s="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?a:i:s}const l=function(){const[e,t]=(0,r.useState)((()=>c()));return(0,r.useEffect)((()=>{function e(){t(c())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},3773:(e,t,n)=>{n.d(t,{pl:()=>me,zF:()=>Z,HX:()=>m,PO:()=>q,L5:()=>oe,Cv:()=>K,Cn:()=>G,OC:()=>Oe,kM:()=>ce,WA:()=>c,os:()=>g,Mg:()=>y,_f:()=>l,bc:()=>p,l5:()=>f,nT:()=>ge,uR:()=>A,J:()=>se,Rb:()=>he,be:()=>ve,SL:()=>k,g8:()=>Y,c2:()=>L,D9:()=>C,RF:()=>ke,DA:()=>Pe,Si:()=>Ee,LU:()=>o,pe:()=>b});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}function a(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,i||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),i=!0),null}var t}let i=!1;const s={get:()=>null,set:()=>{},del:()=>{}};const c=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=a(null==t?void 0:t.persistence);return null===n?s:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function l(e="localStorage"){const t=a(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var u=n(5977);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:a}=(0,u.TH)(),i=o===n?e:e.replace(`/${o}/`,"/"),s=a.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(e)}${s}`}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const m="default";function g(e,t){return`docs-${e}-${t}`}var v=n(907);const h=!!v._r,y=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},b=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var w=n(7294);const E=["zero","one","two","few","many","other"];function _(e){return E.filter((t=>e.includes(t)))}const P={locale:"en",pluralForms:_(["one","other"]),select:e=>1===e?"one":"other"};function S(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,w.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),P;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:_(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),P}}),[e])}function L(){const e=S();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}}(n,t,e)}}const O="undefined"!=typeof window?w.useLayoutEffect:w.useEffect;function x(e){const t=(0,w.useRef)(e);return O((()=>{t.current=e}),[e]),(0,w.useCallback)(((...e)=>t.current(...e)),[])}function C(e){const t=(0,w.useRef)();return O((()=>{t.current=e})),t.current}function k(e){const t=(0,u.TH)(),n=C(t),r=x(e);(0,w.useEffect)((()=>{r({location:t,previousLocation:n})}),[r,t,n])}var R=n(412);function A({initialState:e}){const[t,n]=(0,w.useState)(null!=e&&e),r=(0,w.useCallback)((()=>{n((e=>!e))}),[]);return{collapsed:t,setCollapsed:n,toggleCollapsed:r}}const D={display:"none",overflow:"hidden",height:"0px"},j={display:"block",overflow:"visible",height:"auto"};function I(e,t){const n=t?D:j;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function T({collapsibleRef:e,collapsed:t,animation:n}){const r=(0,w.useRef)(!1);(0,w.useEffect)((()=>{const o=e.current;function a(){var e,t;const r=o.scrollHeight,a=null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(r);return{transition:`height ${a}ms ${null!==(t=null==n?void 0:n.easing)&&void 0!==t?t:"ease-in-out"}`,height:`${r}px`}}function i(){const e=a();o.style.transition=e.transition,o.style.height=e.height}if(!r.current)return I(o,t),void(r.current=!0);return o.style.willChange="height",function(){const e=requestAnimationFrame((()=>{t?(i(),requestAnimationFrame((()=>{o.style.height=D.height,o.style.overflow=D.overflow}))):(o.style.display="block",requestAnimationFrame((()=>{i()})))}));return()=>cancelAnimationFrame(e)}()}),[e,t,n])}function M(e){if(!R.Z.canUseDOM)return e?D:j}function $({as:e="div",collapsed:t,children:n,animation:r,onCollapseTransitionEnd:o,className:a,disableSSRStyle:i}){const s=(0,w.useRef)(null);return T({collapsibleRef:s,collapsed:t,animation:r}),w.createElement(e,{ref:s,style:i?void 0:M(t),onTransitionEnd:e=>{"height"===e.propertyName&&(I(s.current,t),null==o||o(t))},className:a},n)}function V({collapsed:e,...t}){const[n,r]=(0,w.useState)(!e);(0,w.useLayoutEffect)((()=>{e||r(!0)}),[e]);const[o,a]=(0,w.useState)(e);return(0,w.useLayoutEffect)((()=>{n&&a(e)}),[n,e]),n?w.createElement($,{...t,collapsed:o}):null}function Z({lazy:e,...t}){const n=e?V:$;return w.createElement(n,{...t})}var B=n(2389),H=n(6010);const U="details_2Ziz",N="isBrowser_2j9b",z="collapsibleContent_3OHp";function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function W(e,t){return!!e&&(e===t||W(e.parentElement,t))}const q=({summary:e,children:t,...n})=>{const r=(0,B.Z)(),o=(0,w.useRef)(null),{collapsed:a,setCollapsed:i}=A({initialState:!n.open}),[s,c]=(0,w.useState)(n.open);return w.createElement("details",{...n,ref:o,open:s,"data-collapsed":a,className:(0,H.Z)(U,{[N]:r},n.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&W(t,o.current)&&(e.preventDefault(),a?(i(!1),c(!0)):i(!0))}},e,w.createElement(Z,{lazy:!1,collapsed:a,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{i(e),c(!e)}},w.createElement("div",{className:z},t)))};const J=(0,w.createContext)(null);function G({children:e}){return w.createElement(J.Provider,{value:(0,w.useState)(null)},e)}function X(){const e=(0,w.useContext)(J);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function Y(){const[e]=X();if(e){const t=e.component;return function(n){return w.createElement(t,{...e.props,...n})}}return()=>{}}function K({component:e,props:t}){const[,n]=X(),r=(o=t,(0,w.useMemo)((()=>o),[...Object.keys(o),...Object.values(o)]));var o;return(0,w.useEffect)((()=>{n({component:e,props:r})}),[n,e,r]),(0,w.useEffect)((()=>()=>n(null)),[n]),null}const Q=e=>`docs-preferred-version-${e}`,ee={save:(e,t,n)=>{c(Q(e),{persistence:t}).set(n)},read:(e,t)=>c(Q(e),{persistence:t}).get(),clear:(e,t)=>{c(Q(e),{persistence:t}).del()}};function te({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=ee.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(ee.clear(e,t),{preferredVersionName:null})}(e)})),r}function ne(){const e=(0,v._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,a]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{a(te({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){ee.save(e,t,n),a((t=>({...t,[e]:{preferredVersionName:n}})))}})),[t])]}const re=(0,w.createContext)(null);function oe({children:e}){return h?w.createElement(ae,null,e):w.createElement(w.Fragment,null,e)}function ae({children:e}){const t=ne();return w.createElement(re.Provider,{value:t},e)}var ie=n(9935);function se(e=ie.m){const t=(0,v.zh)(e),[n,r]=function(){const e=(0,w.useContext)(re);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r,e])}}const ce={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}},le=c("docusaurus.announcement.dismiss"),ue=c("docusaurus.announcement.id"),fe=()=>"true"===le.get(),de=e=>le.set(String(e)),pe=(0,w.createContext)(null),me=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),t=(0,B.Z)(),[n,r]=(0,w.useState)((()=>!!t&&fe()));(0,w.useEffect)((()=>{r(fe())}),[]);const a=(0,w.useCallback)((()=>{de(!0),r(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=ue.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;ue.set(t),o&&de(!1),!o&&fe()||r(!1)}),[e]),(0,w.useMemo)((()=>({isActive:!!e&&!n,close:a})),[e,n,a])})();return w.createElement(pe.Provider,{value:t},e)},ge=()=>{const e=(0,w.useContext)(pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ve(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,u.TH)();return t.replace(e,"/")}n(4973);function he(e){!function(e){const{block:t}=(0,u.k6)(),n=(0,w.useRef)(e);(0,w.useEffect)((()=>{n.current=e}),[e]),(0,w.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}function ye(e){const t=e.getBoundingClientRect();return t.top===t.bottom?ye(e.parentNode):t}function be(e,{anchorTopOffset:t}){var n;const r=e.find((e=>ye(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(ye(r))?r:null!==(n=e[e.indexOf(r)-1])&&void 0!==n?n:null}return e[e.length-1]}function we(){const e=(0,w.useRef)(0),{navbar:{hideOnScroll:t}}=o();return(0,w.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const Ee=function(e){const t=(0,w.useRef)(void 0),n=we();(0,w.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),s=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=be(s,{anchorTopOffset:n.current}),l=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])};function _e({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=_e({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[{...e,children:r}]:r}))}function Pe({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,w.useMemo)((()=>_e({toc:e,minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}function Se(){const e=(0,w.useRef)(!0);return(0,w.useMemo)((()=>({scrollEventsEnabledRef:e,enableScrollEvents:()=>{e.current=!0},disableScrollEvents:()=>{e.current=!1}})),[])}const Le=(0,w.createContext)(void 0);function Oe({children:e}){return w.createElement(Le.Provider,{value:Se()},e)}function xe(){const e=(0,w.useContext)(Le);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}const Ce=()=>R.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;function ke(e,t=[]){const{scrollEventsEnabledRef:n}=xe(),r=(0,w.useRef)(Ce()),o=x(e);(0,w.useEffect)((()=>{const e=()=>{if(!n.current)return;const e=Ce();o&&o(e,r.current),r.current=e},t={passive:!0};return e(),window.addEventListener("scroll",e,t),()=>window.removeEventListener("scroll",e,t)}),[o,n,...t])}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,a)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},655:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>s,__param:()=>c,__metadata:()=>l,__awaiter:()=>u,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>p,__values:()=>m,__read:()=>g,__spread:()=>v,__spreadArrays:()=>h,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>E,__asyncValues:()=>_,__makeTemplateObject:()=>P,__importStar:()=>L,__importDefault:()=>O,__classPrivateFieldGet:()=>x,__classPrivateFieldSet:()=>C});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(r){u(a[0][3],r)}var n}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function L(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return S(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function C(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);