(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69],{5396:function(e,a,t){"use strict";var i=t(7294);a.Z=function(e){var a=e.title,t=e.description,n=e.children;return i.createElement("header",{className:"hero shadow--lw"},i.createElement("div",{className:"container"},i.createElement("h1",{className:"hero__title"},a),t&&i.createElement("p",{className:"hero__subtitle"},t),i.createElement("div",null,n)))}},293:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var i=t(7294),n=t(3938),l=t(2263),s=t(7462),r=t(3366),o=t(6010),c=t(7625),u=t(1417),m=t(1436),d="memberLarge_3ndw",f="member_27to",p="website_239p",b=["name","role","imgURL","affiliation"],g=["name","imgURL","affiliation","position"];function h(e){try{return t(3653)("./"+e+".jpg").default}catch(a){return t(937).Z}}var j=function(e){var a=e.twitter,t=e.linkedin,n=e.website,l=e.email;return i.createElement("ul",{className:"pills"},n&&i.createElement("li",{className:(0,o.Z)("pills__item",p)},i.createElement("a",{target:"_blank",href:n},i.createElement(c.G,{icon:m.Xjp})," Know more")),t&&i.createElement("li",{className:"pills__item"},i.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/"+t},i.createElement(c.G,{icon:u.D9H}))),a&&i.createElement("li",{className:"pills__item"},i.createElement("a",{target:"_blank",href:"https://twitter.com/"+a},i.createElement(c.G,{icon:u.mdU}))),l&&i.createElement("li",{className:"pills__item"},i.createElement("a",{target:"_blank",href:"mailto:"+l},i.createElement(c.G,{icon:m.FU$}))))},w=function(e){var a=e.name,t=e.role,n=e.imgURL,l=e.affiliation,s=(0,r.Z)(e,b);return i.createElement("div",{className:(0,o.Z)("col col--3 margin-bottom--lg",f,d)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__image"},i.createElement("img",{src:n||h(a),alt:a})),i.createElement("div",{className:"card__body"},i.createElement("h3",null,a,t&&i.createElement(i.Fragment,null," ",i.createElement("span",{className:"badge badge--primary"},t))),l),i.createElement("div",{className:"card__footer"},i.createElement(j,s))))},v=function(e){var a=e.name,t=e.imgURL,n=e.affiliation,l=e.position,s=(0,r.Z)(e,g);return i.createElement("div",{className:(0,o.Z)("col col--3 margin-bottom--xl",f)},i.createElement("div",{className:"avatar avatar--vertical"},i.createElement("img",{className:"avatar__photo avatar__photo--xl",alt:a,src:t||h(a)}),i.createElement("div",{className:"avatar__intro"},i.createElement("div",{className:"avatar__name"},a),i.createElement("div",{className:"avatar__subtitle"},l),i.createElement("small",{className:"avatar__subtitle"},n)),i.createElement(j,s)))},y=function(e){var a=e.list;return i.createElement("section",null,i.createElement("div",{className:"container"},a.map((function(e){var a;return i.createElement("div",{key:e.title,className:"row"},i.createElement("h2",{className:"col col--12 section"},e.title),null!=(a=e.members)&&a.length?e.members.map((function(a){return"large"==e.size?i.createElement(w,(0,s.Z)({key:a.name},a)):i.createElement(v,(0,s.Z)({key:a.name},a))})):i.createElement("div",{className:"col col--12 margin-bottom--xl"},e.placeholder))}))))},E=t(5396),k=t(2532),D=t.n(k),S=[{title:"Program Leadership",size:"large",members:[{name:"Dr. Emad Shihab",role:"Director",affiliation:"Concordia University",linkedin:"emad-shihab-8099523",twitter:"EmadShihab",email:"emad.shihab@concordia.ca",website:"http://das.encs.concordia.ca/members/emad-shihab/"},{name:"Dr. Foutse Khomh",affiliation:"Polytechnique Montr\xe9al",linkedin:"khomh",twitter:"SWATLab",website:"http://swat.polymtl.ca/~foutsekh/about/index.html"},{name:"Dr. Tanja Tajmel",affiliation:"Concordia University",website:"https://www.concordia.ca/faculty/tanja-tajmel.html"},{name:"Dr. Jinqiu Yang",affiliation:"Concordia University",linkedin:"jinqiu-yang-69767220",twitter:"JinqiuYang",website:"https://jinqiuyang.github.io"},{name:"Dr. Ying (Jenny) Zou",affiliation:"Queen\u2019s University",linkedin:"ying-zou-624501159",twitter:"YingZou8",website:"https://www.ece.queensu.ca/people/Y-Zou/"},{name:"Dr. Sarah Nadi",affiliation:"University of Alberta",linkedin:"sarah-nadi-b312b665",twitter:"sarahnadi",website:"https://sarahnadi.org/"},{name:"Dr. Ahmed E. Hassan",affiliation:"Queen\u2019s University",linkedin:"ahmed-e-hassan",twitter:"sail_lab",website:"https://research.cs.queensu.ca/home/ahmed/home/"}]},{title:"Administration",size:"large",members:[{name:"Lori Akiyama",affiliation:"Concordia University",role:"Program Coordinator",linkedin:"loriakiyama",email:"lori.akiyama@concordia.ca"}]},{title:"Postdocs",size:"large",members:[{name:"Dr. Diego Costa",affiliation:"Concordia University",position:"Postdoctoral Researcher",linkedin:"diego-elias-costa",twitter:"DiegoEliasCosta",website:"https://diegoeliascosta.github.io/"}]},{title:"Students",placeholder:i.createElement("h3",{style:{textAlign:"center",fontSize:"4rem",padding:"5rem 0",color:"var(--ifm-color-emphasis-400)"}},"Coming Soon ..."),members:D()}];function _(){(0,l.Z)().siteConfig;return i.createElement(n.Z,{title:"Team",description:"The project's team."},i.createElement(E.Z,{title:"Our Team"}),i.createElement("main",null,i.createElement(y,{list:S})))}},2532:function(e){e.exports=[{name:"Ernesto Lang Oreamuno",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Yiping Jia",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Fangjian Lei",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Junjie Li",affiliation:"Concordia University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Sharon Ho",affiliation:"Concordia University",position:"Master's Student",website:null,linkedin:"sharon-ho",twitter:null,email:null},{name:"Amanda Kolopanis",affiliation:"Concordia University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Mohayeminul Islam",affiliation:"University of Alberta",position:"PhD Student",website:null,linkedin:"mohayemin",twitter:null,email:null},{name:"Akalanka Galappaththi",affiliation:"University of Alberta",position:"PhD Student",website:null,linkedin:"akalanka-galappaththi-67580719",twitter:"@boney_ag",email:"akalanka@ualberta.ca"},{name:"Aurel Lucrich Ikama Honey",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Pierre-Olivier Cote",affiliation:"Ecole Polytechnique",position:"Master's Student",website:null,linkedin:"pierre-olivier-c\xf4t\xe9",twitter:null,email:null},{name:"Vahid Majdinasab",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Patrick Loic Foalem",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Forough Majidi",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Haya Samaana",affiliation:"Concordia University",position:"PhD Student",website:null,linkedin:"haya-samaana-10849525",twitter:null,email:null},{name:"Chunli Yu",affiliation:"Queen's University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Divya Kamath",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:"divyamkamath",twitter:null,email:null},{name:"Rahul Bajaj",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Saurabh Kumar",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Zhimin Zhao",affiliation:"Queen's University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null}]},1530:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Akalanka Galappaththi-666539307524ffa4aa24b6d5b7617b0e.jpg"},898:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/David Fab-8f5e97faf0c1b9d971a72059f3bbf695.jpg"},6140:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Derek Truong-8f01ffc86464a12f088fd22e8edba611.jpg"},6581:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Divya Kamath-a2909488c4817d56302757e95442a62e.jpg"},8907:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Ahmed E. Hassan-395c98359093fe93e01e86b8f73dbb76.jpg"},5334:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Diego Costa-d5b725bfd1401d127c1d479b21412393.jpg"},8194:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Emad Shihab-770446e87321af953e651fcd4ccc9b24.jpg"},9177:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Foutse Khomh-0f248ddd0345d56ffb2a298f3664c049.jpg"},4222:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Gilles Savard-4b43dcfb839a1f8ab9b8b17374d94976.jpg"},9908:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Jinqiu Yang-576a0c82ba931c57355cbc7e3453b464.jpg"},7600:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Julien Crowe-159b9545e1bcb05f5eecc7393dee372b.jpg"},6212:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Lyse Langlois-bef91ead4b5745282530c366329a8fbd.jpg"},1205:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Renji Butalid-22a50a1af77b29c2a65a1b3138ba8290.jpg"},6922:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Sarah Nadi-947dfbf22993180d3645786e785b4e36.jpg"},7204:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Tanja Tajmel-877b9dbc7e2b7f428f8ca73bfb59f5b0.jpg"},31:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Dr. Ying (Jenny) Zou-b8c819cff4b744f2e09b55d1adf90202.jpg"},683:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Ernesto Lang Oreamuno-ca07cb4114145fbeb2155cfe11e5d46f.jpg"},6231:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Haya Samaana-d0d8d68282bdb35607c34729f8d27881.jpg"},6770:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Junjie Li-35e6dd23afa1487b2d14b7bdd91b24ec.jpg"},1147:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Katherine Heighington-cdae15a5c55ecfb706ff783cd1f7cc72.jpg"},4930:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Lori Akiyama-9325d3ab4a2d0f4c622e3818ace2e3b6.jpg"},9813:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Mohamed El-Geish-0cabc20992a2ed0ce8cb9fac8c5327ef.jpg"},2373:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Mohayeminul Islam-c455875974b78990f179881eddb59d2e.jpg"},868:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Pape Wade-bcee43a2cf735c5a3bb30a2d6f82ff7c.jpg"},4247:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Pierre-Olivier Cote-ae49a70b533fb390f5df8bd862c84c93.jpg"},631:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Prasad Garigipati-bce10fb7ff888b28ce07e661d49bc052.jpg"},8265:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Saurabh Kumar-643b51d02fb703b10d75048c2a32887f.jpg"},2516:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Sharon Ho-def58e8d99eba6332636bfe13f73b9e4.jpg"},2020:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Stephane Caron-aeddae43e67c6722a1ccdfdd185abb0e.jpg"},9428:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Vahid Majdinasab-de4af7f1a4696ef480edcf4187737dbb.jpg"},937:function(e,a,t){"use strict";a.Z=t.p+"assets/images/default-5db0ccc12ec662ccbf7bfa46b883956d.png"},7806:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/mohayeminul islam-c455875974b78990f179881eddb59d2e.jpg"},3653:function(e,a,t){var i={"./Akalanka Galappaththi.jpg":1530,"./David Fab.jpg":898,"./Derek Truong.jpg":6140,"./Divya Kamath.jpg":6581,"./Dr. Ahmed E. Hassan.jpg":8907,"./Dr. Diego Costa.jpg":5334,"./Dr. Emad Shihab.jpg":8194,"./Dr. Foutse Khomh.jpg":9177,"./Dr. Gilles Savard.jpg":4222,"./Dr. Jinqiu Yang.jpg":9908,"./Dr. Julien Crowe.jpg":7600,"./Dr. Lyse Langlois.jpg":6212,"./Dr. Renji Butalid.jpg":1205,"./Dr. Sarah Nadi.jpg":6922,"./Dr. Tanja Tajmel.jpg":7204,"./Dr. Ying (Jenny) Zou.jpg":31,"./Ernesto Lang Oreamuno.jpg":683,"./Haya Samaana.jpg":6231,"./Junjie Li.jpg":6770,"./Katherine Heighington.jpg":1147,"./Lori Akiyama.jpg":4930,"./Mohamed El-Geish.jpg":9813,"./Mohayeminul Islam.jpg":2373,"./Pape Wade.jpg":868,"./Pierre-Olivier Cote.jpg":4247,"./Prasad Garigipati.jpg":631,"./Saurabh Kumar.jpg":8265,"./Sharon Ho.jpg":2516,"./Stephane Caron.jpg":2020,"./Vahid Majdinasab.jpg":9428,"./mohayeminul islam.jpg":7806};function n(e){var a=l(e);return t(a)}function l(e){if(!t.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=l,e.exports=n,n.id=3653}}]);