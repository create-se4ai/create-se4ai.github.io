"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{9362:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(7294),l=a(6010),s=a(3783),i=a(6742),r=a(4973);const o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(3773);const u={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g({versionLabel:e,to:t,onClick:a}){return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:t,onClick:a},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p({versionMetadata:e}){const{siteConfig:{title:t}}=(0,c.Z)(),{pluginId:a}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,m.J)(a),{latestDocSuggestion:i,latestVersionSuggestion:r}=(0,d.Jo)(a),o=i??(u=r).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:r.label,to:o.path,onClick:()=>s(r.name)})))}const h=function({versionMetadata:e}){return e.banner?n.createElement(p,{versionMetadata:e}):n.createElement(n.Fragment,null)};var E=a(1217);function b({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function f({lastUpdatedBy:e}){return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function N({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(b,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(f,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(6146),_=a(9817);const Z="lastUpdated_13-_";function L(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function U({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:a,formattedLastUpdatedAt:s}){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(k.Z,{editUrl:e})),n.createElement("div",{className:(0,l.Z)("col",Z)},(t||a)&&n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a})))}function T(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(s||i||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(L,{tags:c}),u&&n.createElement(U,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}var C=a(7588);const M="tocCollapsible_1PrD",w="tocCollapsibleButton_2O1e",y="tocCollapsibleContent_2Ydz",A="tocCollapsibleExpanded_3GYr";var H=a(5002);function x({toc:e,className:t,minHeadingLevel:a,maxHeadingLevel:s}){const{collapsed:i,toggleCollapsed:o}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(M,{[A]:!i},t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:o},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:y,collapsed:i},n.createElement(H.Z,{toc:e,minHeadingLevel:a,maxHeadingLevel:s})))}var B=a(6159);const S="docItemContainer_33ec",D="docItemCol_3FnS",F="tocMobile_3Hoh";function O(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:r}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:g,toc_max_heading_level:p}=r,{description:b,title:f}=i,N=!u&&void 0===t.contentTitle,k=(0,s.Z)(),_=!v&&t.toc&&t.toc.length>0,Z=_&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:f,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[D]:!v})},n.createElement(h,{versionMetadata:a}),n.createElement("div",{className:S},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement(x,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:p,className:(0,l.Z)(m.kM.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},N&&n.createElement(B.N,null,f),n.createElement(t,null)),n.createElement(T,e)),n.createElement(o,{metadata:i}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(C.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:p,className:m.kM.docs.docTocDesktop}))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(4973),s=a(7462),i=a(6010);const r="iconEdit_2_ui",o=({className:e,...t})=>n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(r,e),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));var c=a(3773);function d({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),i=a(4973),r=a(3773);const o="anchorWithStickyNavbar_31ik",c="anchorWithHideOnScrollNavbar_3R7-",d=function({...e}){return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},e,{id:void 0}),e.children))},m=e=>{return"h1"===e?d:(t=e,function({id:e,...a}){const{navbar:{hideOnScroll:d}}=(0,r.LU)();return e?l.createElement(t,(0,n.Z)({},a,{className:(0,s.Z)("anchor",{[c]:d,[o]:!d}),id:e}),a.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${e}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,a)});var t}},7588:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),s=a(6010),i=a(5002);const r="tableOfContents_35-E";const o=function({className:e,...t}){return l.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",e)},l.createElement(i.Z,(0,n.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294),s=a(3773);function i({toc:e,className:t,linkClassName:a,isChild:n}){return e.length?l.createElement("ul",{className:n?void 0:t},e.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function r({toc:e,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:c,...d}){const m=(0,s.LU)(),u=o??m.tableOfContents.minHeadingLevel,v=c??m.tableOfContents.maxHeadingLevel,g=(0,s.DA)({toc:e,minHeadingLevel:u,maxHeadingLevel:v}),p=(0,l.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:u,maxHeadingLevel:v}}),[a,r,u,v]);return(0,s.Si)(p),l.createElement(i,(0,n.Z)({toc:g,className:t,linkClassName:a},d))}},9817:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),l=a(6010),s=a(4973),i=a(6742);const r="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";const d=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(r,{[o]:!s,[c]:s})},a,s&&n.createElement("span",null,s))},m="tags_2ga9",u="tag_11ep";function v({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:u},n.createElement(d,{name:e,permalink:t}))))))}}}]);