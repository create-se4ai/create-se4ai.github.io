"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4608],{8704:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(7294),o=a(3905),l=a(6291),c=a(3938),r=a(6010),i=a(3773),s=a(3783),d=a(5537),m=a(7462);const u=e=>n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var p=a(4973),b=a(6742),h=a(3919),E=a(8617);const f="menuLinkText_1J2g",v=(e,t)=>"link"===e.type?(0,i.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>v(e,t))),g=(0,n.memo)((function({items:e,...t}){return n.createElement(n.Fragment,null,e.map(((e,a)=>n.createElement(k,(0,m.Z)({key:a,item:e},t)))))}));function k({item:e,...t}){return"category"===e.type?0===e.items.length?null:n.createElement(_,(0,m.Z)({item:e},t)):n.createElement(C,(0,m.Z)({item:e},t))}function _({item:e,onItemClick:t,activePath:a,level:o,...l}){const{items:c,label:s,collapsible:d,className:u}=e,p=v(e,a),{collapsed:b,setCollapsed:h,toggleCollapsed:E}=(0,i.uR)({initialState:()=>!!d&&(!p&&e.collapsed)});return function({isActive:e,collapsed:t,setCollapsed:a}){const o=(0,i.D9)(e);(0,n.useEffect)((()=>{e&&!o&&t&&a(!1)}),[e,o,t,a])}({isActive:p,collapsed:b,setCollapsed:h}),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":b},u)},n.createElement("a",(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":d,"menu__link--active":d&&p,[f]:!d}),onClick:d?e=>{e.preventDefault(),E()}:void 0,href:d?"#":void 0},l),s),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(g,{items:c,tabIndex:b?-1:0,onItemClick:t,activePath:a,level:o+1})))}function C({item:e,onItemClick:t,activePath:a,level:o,...l}){const{href:c,label:s,className:d}=e,u=v(e,a);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:s},n.createElement(b.Z,(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},(0,h.Z)(c)&&{onClick:t},l),(0,h.Z)(c)?s:n.createElement("span",null,s,n.createElement(E.Z,null))))}const N="sidebar_15mo",S="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",T="sidebarLogo_3h0W",I="menu_Bmed",M="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R";function y({onClick:e}){return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",A),onClick:e},n.createElement(u,{className:w}))}function B({path:e,sidebar:t,onCollapse:a,isHidden:o}){const l=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}(),{navbar:{hideOnScroll:c},hideableSidebar:s}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(N,{[S]:c,[Z]:o})},c&&n.createElement(d.Z,{tabIndex:-1,className:T}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",I,{[M]:l})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(g,{items:t,activePath:e,level:1}))),s&&n.createElement(y,{onClick:a}))}const L=({toggleSidebar:e,sidebar:t,path:a})=>n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(g,{items:t,activePath:a,onItemClick:()=>e(),level:1}));function F(e){return n.createElement(i.Cv,{component:L,props:e})}const x=n.memo(B),P=n.memo(F);function R(e){const t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(x,e),o&&n.createElement(P,e))}var H=a(6845),D=a(4608);const W="backToTopButton_35hR",z="backToTopButtonShow_18ls";function Y(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const J=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=Y();return(0,i.RF)((({scrollY:e},n)=>{const o=null==n?void 0:n.scrollY;if(!o)return;if(a.current)return void(a.current=!1);const c=e<o;if(c||l(),e<300)t(!1);else if(c){const a=document.documentElement.scrollHeight;e+window.innerHeight<a&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,W,{[z]:e}),type:"button",onClick:()=>o()})};var K=a(5977);const U={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};var q=a(9105);function G({currentDocRoute:e,versionMetadata:t,children:a}){const{pluginId:l,version:s}=t,d=e.sidebar,m=d?t.docsSidebars[d]:void 0,[b,h]=(0,n.useState)(!1),[E,f]=(0,n.useState)(!1),v=(0,n.useCallback)((()=>{E&&f(!1),h((e=>!e))}),[E]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:s,tag:(0,i.os)(l,s)}},n.createElement("div",{className:U.docPage},n.createElement(J,null),m&&n.createElement("aside",{className:(0,r.Z)(U.docSidebarContainer,{[U.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(U.docSidebarContainer)&&b&&f(!0)}},n.createElement(R,{key:d,sidebar:m,path:e.path,onCollapse:v,isHidden:E}),E&&n.createElement("div",{className:U.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},n.createElement(u,{className:U.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(U.docMainContainer,{[U.docMainContainerEnhanced]:b||!m})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",U.docItemWrapper,{[U.docItemWrapperEnhanced]:b})},n.createElement(o.Zo,{components:H.Z},a)))))}const O=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,c=t.find((e=>(0,K.LX)(o.pathname,e)));return c?n.createElement(n.Fragment,null,n.createElement(q.Z,null,n.createElement("html",{className:a.className})),n.createElement(G,{currentDocRoute:c,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(D.default,e)}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),o=a(3938),l=a(4973);const c=function(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);