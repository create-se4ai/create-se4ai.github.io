"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[938],{1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_3J9K",l=({width:e=13.5,height:t=13.5})=>a.createElement("svg",{width:e,height:t,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))},3938:(e,t,n)=>{n.d(t,{Z:()=>ve});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(3773);const s="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((({location:n})=>{e.current&&!n.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var d=n(7462);function u({width:e=21,height:t=21,color:n="currentColor",strokeWidth:r=1.2,className:l,...o}){return a.createElement("svg",(0,d.Z)({viewBox:"0 0 15 15",width:e,height:t},o),a.createElement("g",{stroke:n,strokeWidth:r},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_3WsW",g="announcementBarPlaceholder_2m9F",b="announcementBarClose_38nx",v="announcementBarContent_3EUC";const f=function(){const{isActive:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!e)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(u,{width:14,height:14,strokeWidth:3.1})):null)};var E=n(1875),k=n(2389);const p={toggle:"toggle_71bT",toggleScreenReader:"toggleScreenReader_28Tw",toggleDisabled:"toggleDisabled_3cF-",toggleTrack:"toggleTrack_32Fl",toggleTrackCheck:"toggleTrackCheck_3lV7",toggleChecked:"toggleChecked_2FvV",toggleTrackX:"toggleTrackX_S2yS",toggleTrackThumb:"toggleTrackThumb_xI_Z",toggleFocused:"toggleFocused_my6j",toggleIcon:"toggleIcon_O4iE"},_=({icon:e,style:t})=>a.createElement("span",{className:(0,r.Z)(p.toggleIcon,p.dark),style:t},e),Z=({icon:e,style:t})=>a.createElement("span",{className:(0,r.Z)(p.toggleIcon,p.light),style:t},e),w=(0,a.memo)((({className:e,icons:t,checked:n,disabled:l,onChange:o})=>{const[c,s]=(0,a.useState)(n),[i,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(p.toggle,e,{[p.toggleChecked]:c,[p.toggleFocused]:i,[p.toggleDisabled]:l})},a.createElement("div",{className:p.toggleTrack,role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:p.toggleTrackCheck},t.checked),a.createElement("div",{className:p.toggleTrackX},t.unchecked),a.createElement("div",{className:p.toggleTrackThumb})),a.createElement("input",{ref:d,checked:c,type:"checkbox",className:p.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:o,onClick:()=>s(!c),onFocus:()=>m(!0),onBlur:()=>m(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=d.current)||t.click())}}))}));function N(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,k.Z)();return a.createElement(w,(0,d.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var y=n(5350);const C=e=>{const[t,n]=(0,a.useState)(e),r=(0,a.useRef)(!1),l=(0,a.useRef)(0),o=(0,a.useCallback)((e=>{null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)(((t,a)=>{if(!e)return;const o=t.scrollY;if(o<l.current)return void n(!0);if(r.current)return void(r.current=!1);const c=null==a?void 0:a.scrollY,s=document.documentElement.scrollHeight-l.current,i=window.innerHeight;c&&o>=c?n(!1):o+i<s&&n(!0)})),(0,c.SL)((t=>{if(e)return t.location.hash?(r.current=!0,void n(!1)):void n(!0)})),{navbarRef:o,isNavbarVisible:t}};const T=function(e=!0){(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(3783),I=n(907),S=n(7819),D=n(5537);const B=({width:e=30,height:t=30,className:n,...r})=>a.createElement("svg",(0,d.Z)({className:n,width:e,height:t,viewBox:"0 0 30 30","aria-hidden":"true"},r),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})),x={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY"},A="right";function M(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function U({sidebarShown:e,toggleSidebar:t}){T(e);const n=M(),l=R(),s=function({sidebarShown:e,toggleSidebar:t}){var n;const r=null==(n=(0,c.g8)())?void 0:n({toggleSidebar:t}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?e||s(!0):s(!1)}),[e,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:e,toggleSidebar:t});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&a.createElement(N,{className:x.navbarSidebarToggle,checked:l.isDarkTheme,onChange:l.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:t},a.createElement(u,{color:"var(--ifm-color-emphasis-600)",className:x.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},n.map(((e,n)=>a.createElement(S.Z,(0,d.Z)({mobile:!0},e,{onClick:t,key:n})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},n.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const H=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{if(n)return r(!1),!1}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),o=(0,I.gA)(),{navbarRef:s,isNavbarVisible:i}=C(e),m=M(),u=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:g}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??A))),rightItems:e.filter((e=>"right"===(e.position??A)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[x.navbarHideable]:e,[x.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==m?void 0:m.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(S.Z,(0,d.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},g.map(((e,t)=>a.createElement(S.Z,(0,d.Z)({},e,{key:t})))),!l.disabled&&a.createElement(N,{className:x.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!u&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(U,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(6742),W=n(4996),P=n(3919);const F="footerLogoLink_MyFc";var z=n(8465),$=n(8617);function O({to:e,href:t,label:n,prependBaseUrlToHref:r,...l}){const o=(0,W.Z)(e),c=(0,W.Z)(t,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,d.Z)({className:"footer__link-item"},t?{href:r?c:t}:{to:o},l),t&&!(0,P.Z)(t)?a.createElement("span",null,n,a.createElement($.Z,null)):n)}const G=({sources:e,alt:t})=>a.createElement(z.Z,{className:"footer__logo",alt:t,sources:e});const q=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,W.Z)(l.src),dark:(0,W.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(O,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:F},a.createElement(G,{alt:l.alt,sources:o})):a.createElement(G,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var K=n(412);const J=(0,c.WA)("theme"),Q="light",X="dark",j=e=>e===X?X:Q,Y=e=>{(0,c.WA)("theme").set(j(e))},ee=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>K.Z.canUseDOM?j(document.documentElement.getAttribute("data-theme")):j(e))(e)),o=(0,a.useCallback)((()=>{l(Q),Y(Q)}),[]),s=(0,a.useCallback)((()=>{l(X),Y(X)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",j(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=J.get();null!==e&&l(j(e))}catch(e){console.error(e)}}),[t,l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{l(e?X:Q)}))}),[t,n]),{isDarkTheme:r===X,setLightTheme:o,setDarkTheme:s}};var te=n(2924);const ne=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ee();return a.createElement(te.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ae="docusaurus.tab.",re=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ae)){const n=t.substring(ae.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},le=(0,a.createContext)(void 0);const oe=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=re();return a.createElement(le.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ce({children:e}){return a.createElement(ne,null,a.createElement(c.pl,null,a.createElement(oe,null,a.createElement(c.OC,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,e))))))}var se=n(9105),ie=n(2263);function me({locale:e,version:t,tag:n}){return a.createElement(se.Z,null,e&&a.createElement("meta",{name:"docusaurus_locale",content:e}),t&&a.createElement("meta",{name:"docusaurus_version",content:t}),n&&a.createElement("meta",{name:"docusaurus_tag",content:n}))}var de=n(1217);function ue(){const{i18n:{defaultLocale:e,locales:t}}=(0,ie.Z)(),n=(0,c.l5)();return a.createElement(se.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he({permalink:e}){const{siteConfig:{url:t}}=(0,ie.Z)(),n=function(){const{siteConfig:{url:e}}=(0,ie.Z)(),{pathname:t}=(0,l.TH)();return e+(0,W.Z)(t)}(),r=e?`${t}${e}`:n;return a.createElement(se.Z,null,a.createElement("meta",{property:"og:url",content:r}),a.createElement("link",{rel:"canonical",href:r}))}function ge(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ie.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:u,searchMetadatas:h}=e,g=(0,W.Z)(t),b=(0,c.pe)(s),v=n,f=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(se.Z,null,a.createElement("html",{lang:v,dir:f}),t&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(de.Z,{image:o}),m&&a.createElement(de.Z,{image:m}),a.createElement(de.Z,{description:i,keywords:u}),a.createElement(he,null),a.createElement(ue,null),a.createElement(me,(0,d.Z)({tag:c.HX,locale:n},h)),a.createElement(se.Z,null,l.map(((e,t)=>a.createElement("meta",(0,d.Z)({key:`metadata_${t}`},e))))))}const be=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ve=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return be(),a.createElement(ce,null,a.createElement(ge,e),a.createElement(m,null),a.createElement(f,null),a.createElement(H,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(q,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(3773);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:d,titleClassName:u,...h}=e,g=(0,c.Z)(m.href||"/"),b={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)},v=r.createElement(o.Z,{sources:b,alt:m.alt||n||t});return r.createElement(l.Z,(0,a.Z)({to:g},h,m.target&&{target:m.target}),m.src&&(d?r.createElement("div",{className:d},v):r.createElement(r.Fragment,null,v)),null!=n&&r.createElement("b",{className:u},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>d,Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);function d({activeBasePath:e,activeBaseRegex:t,to:n,href:l,label:m,activeClassName:d="",prependBaseUrlToHref:u,...h}){var g;const b=(0,c.Z)(n),v=(0,c.Z)(e),f=(0,c.Z)(l,{forcePrependBaseUrl:!0}),E=m&&l&&!(0,i.Z)(l),k="dropdown__link--active"===d;return r.createElement(o.Z,(0,a.Z)({},l?{href:u?f:l}:{isNavLink:!0,activeClassName:null!=(g=h.className)&&g.includes(d)?"":d,to:b,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(v)}:null},h),E?r.createElement("span",null,m,r.createElement(s.Z,k&&{width:12,height:12})):m)}function u({className:e,isDropdownItem:t=!1,...n}){const o=r.createElement(d,(0,a.Z)({className:(0,l.Z)(t?"dropdown__link":"navbar__item navbar__link",e)},n));return t?r.createElement("li",null,o):o}function h({className:e,isDropdownItem:t,...n}){return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",e)},n)))}const g=function({mobile:e=!1,position:t,...n}){const l=e?h:u;return r.createElement(l,(0,a.Z)({},n,{activeClassName:n.activeClassName??(0,m.E)(e)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(3773),m=n(8780);function d({docId:e,label:t,docsPluginId:n,...d}){const{activeVersion:u,activeDoc:h}=(0,o.Iw)(n),{preferredVersion:g}=(0,i.J)(n),b=(0,o.yW)(n),v=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([u,g,b].filter(Boolean)),e),f=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[f]:(null==h?void 0:h.sidebar)&&h.sidebar===v.sidebar}),activeClassName:f,label:t??v.id,to:v.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(3773),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:n,dropdownItemsBefore:d,dropdownItemsAfter:u,...h}){const g=(0,c.Iw)(t),b=(0,c.gB)(t),v=(0,c.yW)(t),{preferredVersion:f,savePreferredVersionName:E}=(0,s.J)(t);const k=function(){const e=b.map((e=>{const t=(null==g?void 0:g.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==g?void 0:g.activeVersion),onClick:()=>{E(e.name)}}}));return[...d,...e,...u]}(),p=g.activeVersion??f??v,_=e&&k?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):p.label,Z=e&&k?void 0:m(p).path;return k.length<=1?r.createElement(l.Z,(0,a.Z)({},h,{mobile:e,label:_,to:Z,isActive:n?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},h,{mobile:e,label:_,to:Z,items:k,isActive:n?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(3773);function s({label:e,to:t,docsPluginId:n,...s}){const i=(0,o.zu)(n),{preferredVersion:m}=(0,c.J)(n),d=(0,o.yW)(n),u=i??m??d,h=e??u.label,g=t??(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return r.createElement(l.Z,(0,a.Z)({},s,{label:h,to:g}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(6010),o=n(3773),c=n(5525),s=n(7819);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m({items:e,position:t,className:n,...o}){const i=(0,r.useRef)(null),m=(0,r.useRef)(null),[d,u]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]),r.createElement("div",{ref:i,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===t,"dropdown--show":d})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",n)},o,{onClick:o.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u(!d))}}),o.children??o.label),r.createElement("ul",{ref:m,className:"dropdown__menu"},e.map(((t,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:t=>{if(n===e.length-1&&"Tab"===t.key){t.preventDefault(),u(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active"},t,{key:n}))))))}function d({items:e,className:t,position:n,...m}){const d=(0,o.be)(),u=i(e,d),{collapsed:h,toggleCollapsed:g,setCollapsed:b}=(0,o.uR)({initialState:()=>!u});return(0,r.useEffect)((()=>{u&&b(!u)}),[d,u,b]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":h})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",t)},m,{onClick:e=>{e.preventDefault(),g()}}),m.children??m.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},e.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const u=function({mobile:e=!1,...t}){const n=e?d:m;return r.createElement(n,t)}},7819:(e,t,n)=>{n.d(t,{Z:()=>v,E:()=>b});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=({width:e=20,height:t=20,...n})=>a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:e,height:t,"aria-hidden":"true"},n),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));var s=n(2263),i=n(3773);const m="iconLanguage_3vod";function d({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:n,...r}){const{i18n:{currentLocale:d,locales:u,localeConfigs:h}}=(0,s.Z)(),g=(0,i.l5)();function b(e){return h[e].label}const v=[...t,...u.map((e=>{const t=`pathname://${g.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...n],f=e?"Languages":b(d);return a.createElement(l.Z,(0,o.Z)({},r,{href:"#",mobile:e,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,f)),items:v}))}var u=n(1875);function h({mobile:e}){return e?null:a.createElement(u.Z,null)}const g={default:()=>r.Z,localeDropdown:()=>d,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};const b=e=>e?"menu__link--active":"navbar__link--active";function v({type:e,...t}){const n=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(e,void 0!==t.items),r=(e=>{const t=g[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(n);return a.createElement(r,t)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:d="",...u}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:d,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},u)))))}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);