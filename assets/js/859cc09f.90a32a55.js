(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69],{5396:function(e,a,i){"use strict";var t=i(7294);a.Z=function(e){var a=e.title,i=e.description,n=e.children;return t.createElement("header",{className:"hero shadow--lw"},t.createElement("div",{className:"container"},t.createElement("h1",{className:"hero__title"},a),i&&t.createElement("p",{className:"hero__subtitle"},i),t.createElement("div",null,n)))}},4499:function(e,a,i){"use strict";i.d(a,{Z:function(){return w}});var t=i(7462),n=i(3366),s=i(7294),l=i(6010),r=i(7625),u=i(1417),c=i(1436),o="memberLarge_3ndw",d="member_27to",f="website_239p",m=["name","role","imgURL","affiliation"],p=["name","imgURL","affiliation","position"];function b(e){try{return i(3653)("./"+e+".jpg").default}catch(a){return i(937).Z}}var g=function(e){var a=e.id,i=e.twitter,t=e.linkedin,n=e.website,o=e.email,d=e.has_page;return s.createElement("ul",{className:"pills"},d&&s.createElement("li",{className:(0,l.Z)("pills__item",f)},s.createElement("a",{href:"/members/"+a},s.createElement(r.G,{icon:c.Xjp})," Know More")),n&&s.createElement("li",{className:(0,l.Z)("pills__item",f)},s.createElement("a",{target:"_blank",href:n},s.createElement(r.G,{icon:c.Xjp})," Know more")),t&&s.createElement("li",{className:"pills__item"},s.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/"+t},s.createElement(r.G,{icon:u.D9H}))),i&&s.createElement("li",{className:"pills__item"},s.createElement("a",{target:"_blank",href:"https://twitter.com/"+i},s.createElement(r.G,{icon:u.mdU}))),o&&s.createElement("li",{className:"pills__item"},s.createElement("a",{target:"_blank",href:"mailto:"+o},s.createElement(r.G,{icon:c.FU$}))))},h=function(e){var a=e.name,i=e.role,t=e.imgURL,r=e.affiliation,u=(0,n.Z)(e,m);return s.createElement("div",{className:(0,l.Z)("col col--3 margin-bottom--lg",d,o)},s.createElement("div",{className:"card"},s.createElement("div",{className:"card__image"},s.createElement("img",{src:t||b(a),alt:a})),s.createElement("div",{className:"card__body"},s.createElement("h3",null,a,i&&s.createElement(s.Fragment,null," ",s.createElement("span",{className:"badge badge--primary"},i))),r),s.createElement("div",{className:"card__footer"},s.createElement(g,u))))},j=function(e){var a=e.name,i=e.imgURL,t=e.affiliation,r=e.position,u=(0,n.Z)(e,p);return s.createElement("div",{className:(0,l.Z)("col col--3 margin-bottom--xl",d)},s.createElement("div",{className:"avatar avatar--vertical"},s.createElement("img",{className:"avatar__photo avatar__photo--xl",alt:a,src:i||b(a)}),s.createElement("div",{className:"avatar__intro"},s.createElement("div",{className:"avatar__name"},a),s.createElement("div",{className:"avatar__subtitle"},r),s.createElement("small",{className:"avatar__subtitle"},t)),s.createElement(g,u)))},w=function(e){var a=e.list;return s.createElement("section",null,s.createElement("div",{className:"container"},a.map((function(e){var a;return s.createElement("div",{key:e.title,className:"row"},s.createElement("h2",{className:"col col--12 section"},e.title),null!=(a=e.members)&&a.length?e.members.map((function(a){return"large"==e.size?s.createElement(h,(0,t.Z)({key:a.name},a)):s.createElement(j,(0,t.Z)({key:a.name},a))})):s.createElement("div",{className:"col col--12 margin-bottom--xl"},e.placeholder))}))))}},8050:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return d}});var t=i(7294),n=i(3938),s=i(2263),l=i(4499),r=i(5396),u=i(2532),c=i.n(u),o=[{title:"Program Leadership",size:"large",members:[{name:"Dr. Emad Shihab",role:"Director",affiliation:"Concordia University",linkedin:"emad-shihab-8099523",twitter:"EmadShihab",email:"emad.shihab@concordia.ca",website:"http://das.encs.concordia.ca/members/emad-shihab/"},{name:"Dr. Foutse Khomh",affiliation:"Polytechnique Montr\xe9al",linkedin:"khomh",twitter:"SWATLab",website:"http://swat.polymtl.ca/~foutsekh/about/index.html"},{name:"Dr. Tanja Tajmel",affiliation:"Concordia University",website:"https://www.concordia.ca/faculty/tanja-tajmel.html"},{name:"Dr. Jinqiu Yang",affiliation:"Concordia University",linkedin:"jinqiu-yang-69767220",twitter:"JinqiuYang",website:"https://jinqiuyang.github.io"},{name:"Dr. Ying (Jenny) Zou",affiliation:"Queen\u2019s University",linkedin:"ying-zou-624501159",twitter:"YingZou8",website:"https://www.ece.queensu.ca/people/Y-Zou/"},{name:"Dr. Sarah Nadi",affiliation:"University of Alberta",linkedin:"sarah-nadi-b312b665",twitter:"sarahnadi",website:"https://sarahnadi.org/"},{name:"Dr. Ahmed E. Hassan",affiliation:"Queen\u2019s University",linkedin:"ahmed-e-hassan",twitter:"sail_lab",website:"https://research.cs.queensu.ca/home/ahmed/home/"}]},{title:"Administration",size:"large",members:[{name:"Lori Akiyama",affiliation:"Concordia University",role:"Program Coordinator",linkedin:"loriakiyama",email:"lori.akiyama@concordia.ca"}]},{title:"Postdocs",size:"large",members:[{name:"Dr. Diego Costa",affiliation:"Concordia University",position:"Postdoctoral Researcher",linkedin:"diego-elias-costa",twitter:"DiegoEliasCosta",website:"https://diegoeliascosta.github.io/"},{name:"Dr. Ahmad Abdellatif",affiliation:"Concordia University",position:"Postdoctoral Researcher",linkedin:"ahmad-abdellatif-8ab82a29",twitter:"AhmadAbdellatf",website:"https://das.encs.concordia.ca/members/ahmad-abdellatif"}]},{title:"Students",placeholder:t.createElement("h3",{style:{textAlign:"center",fontSize:"4rem",padding:"5rem 0",color:"var(--ifm-color-emphasis-400)"}},"Coming Soon ..."),size:"large",members:c()}];function d(){(0,s.Z)().siteConfig;return t.createElement(n.Z,{title:"Team",description:"The project's team."},t.createElement(r.Z,{title:"Our Team"}),t.createElement("main",null,t.createElement(l.Z,{list:o})))}},2532:function(e){e.exports=[{name:"Ernesto Lang Oreamuno",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:null,twitter:null,email:null},{name:"Yiping Jia",affiliation:"Queen's University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Fangjian Lei",affiliation:"Queen's University",position:"PhD Student",website:null,linkedin:"fangjian-lei-5b110b204",twitter:null,email:null},{name:"Junjie Li",affiliation:"Concordia University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Sharon Ho",affiliation:"Concordia University",position:"Master's Student",website:null,linkedin:"sharon-ho",twitter:null,email:null},{name:"Amanda Kolopanis",affiliation:"Concordia University",position:"Master's Student",website:null,linkedin:"amanda-kolopanis",twitter:null,email:null},{name:"Mohayeminul Islam",affiliation:"University of Alberta",position:"PhD Student",website:null,linkedin:"mohayemin",twitter:null,email:null},{name:"Akalanka Galappaththi",affiliation:"University of Alberta",position:"PhD Student",website:null,linkedin:"akalanka-galappaththi-67580719",twitter:"@boney_ag",email:"akalanka@ualberta.ca"},{name:"Aurel Lucrich Ikama Honey",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:"aurel-i-345a91ba",twitter:null,email:null},{name:"Pierre-Olivier Cote",affiliation:"Ecole Polytechnique",position:"Master's Student",website:null,linkedin:"pierre-olivier-c\xf4t\xe9",twitter:null,email:null},{name:"Vahid Majdinasab",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Patrick Loic Foalem",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:"patrick-lo\xefc-foalem-37281a100",twitter:"Patrick_Loic_F",email:null},{name:"Forough Majidi",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:"forough-majidi-8a35b8227",twitter:null,email:null},{name:"Chunli Yu",affiliation:"Queen's University",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Divya Kamath",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:"divyamkamath",twitter:null,email:null},{name:"Antonio Collante",affiliation:"Concordia University",position:"PhD Student",website:null,linkedin:"antonio-c-737aa566",twitter:null,email:null},{name:"Khaled Badran",affiliation:"Concordia University",position:"Master's Student",website:"https://das.encs.concordia.ca/members/khaled-badran",linkedin:"khaled-badran-6b0908174",twitter:"khaled_badran9",email:null},{name:"Rached Bouchoucha",affiliation:"Ecole Polytechnique",position:"Master's Student",website:null,linkedin:"rached-bouchoucha-1061997",twitter:null,email:null},{name:"Ahmed Haj Yahmed",affiliation:"Ecole Polytechnique",position:"Master's Student",website:null,linkedin:"ahmed-haj-yahmed/",twitter:null,email:null},{name:"Musfiqur Rahman",affiliation:"Concordia University",position:"PhD Student",website:"https://das.encs.concordia.ca/members/musfiqur-rahman",linkedin:"musfiqur-rahman-37596444",twitter:null,email:null},{name:"Jasmine Latendresse",affiliation:"Concordia University",position:"PhD Student",website:"https://jaslatendresse.github.io",linkedin:"jasmine-latendresse-2835561a6/",twitter:null,email:null},{name:"Jiawen Liu",affiliation:"Queen's University",position:"Master's Student",website:"https://seal-queensu.github.io/member-current.html",linkedin:"jiawen-liu-691906178",twitter:null,email:null},{name:"Pouya Fathollahzadeh",affiliation:"Queen's University",position:"Master's Student",website:"https://seal-queensu.github.io/member-current.html",linkedin:null,twitter:null,email:null},{name:"Akshat Malik",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:"akshat-malik/",twitter:null,email:null},{name:"Harsh Patel",affiliation:"Queen's University",position:"Master's Student",website:"https://harsh8398.github.io",linkedin:"harsh8398/",twitter:null,email:null},{name:"Jaskirat Singh",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:"jaskirat409",twitter:null,email:null},{name:"Shenyu Zheng",affiliation:"Queen's University",position:"Master's Student",website:null,linkedin:"shenyu-zheng-31146524b/",twitter:null,email:null},{name:"Afiya Fahmida Sarah",affiliation:"University of Alberta",position:"Master's Student",website:null,linkedin:"afiya-sarah-039007179",twitter:null,email:null},{name:"Fazle Rabbi",affiliation:"Concordia University",position:"PhD Student",website:"https://frabbisw.github.io/",linkedin:"fazle-rabbi-720139207",twitter:null,email:null},{name:"Lorena Pacheco",affiliation:"Concordia University",position:"Master's Student",website:null,linkedin:"lorenasimedo",twitter:null,email:null},{name:"Samuel Abedu",affiliation:"Concordia University",position:"PhD Student",website:null,linkedin:"samuel-abedu-42b755103",twitter:null,email:null},{name:"Khouloud Oueslati",affiliation:"Ecole Polytechnique",position:"Master's Student",website:null,linkedin:"khouloud-ouesleti/",twitter:null,email:null},{name:"Yang Liu",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:null,twitter:null,email:null},{name:"Laila Mahmoud Daw Abodinar",affiliation:"Ecole Polytechnique",position:"PhD Student",website:null,linkedin:"laila-abodinar-2541491ba",twitter:null,email:null}]},8454:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Afiya Fahmida Sarah-b5ac92548821160803fe32cf7dfcab35.jpg"},1890:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Ahmed Haj Yahmed-92a25b6c95b5c52b3fefd419c2f8c386.jpg"},1530:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Akalanka Galappaththi-666539307524ffa4aa24b6d5b7617b0e.jpg"},7235:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Akshat Malik-f2191ef4272ac09449644549133abd02.jpg"},7941:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Amanda Kolopanis-4129fd24154babf22877f97a95d2fe88.jpg"},8029:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Antonio Collante-7507a628a6f7fb3ba9655bc8aad76642.jpg"},2033:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Aurel Lucrich Ikama Honey-c79ed93e7b0d356aadd3daacbcab3fa5.jpg"},2927:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Chunli Yu-351adaf5e49e75c7b749627d8ce8184a.jpg"},898:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/David Fab-8f5e97faf0c1b9d971a72059f3bbf695.jpg"},6581:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Divya Kamath-a2909488c4817d56302757e95442a62e.jpg"},855:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Ahmad Abdellatif-489fea85907ec20ce0dc18781a19c205.jpg"},8907:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Ahmed E. Hassan-395c98359093fe93e01e86b8f73dbb76.jpg"},5334:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Diego Costa-d5b725bfd1401d127c1d479b21412393.jpg"},8194:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Emad Shihab-770446e87321af953e651fcd4ccc9b24.jpg"},9177:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Foutse Khomh-0f248ddd0345d56ffb2a298f3664c049.jpg"},4222:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Gilles Savard-4b43dcfb839a1f8ab9b8b17374d94976.jpg"},9908:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Jinqiu Yang-576a0c82ba931c57355cbc7e3453b464.jpg"},7600:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Julien Crowe-dbd2d74d2fe717a8c150571d9c717b63.jpg"},3739:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Lata Narayanan-ad4d58730fcf6d9ea662e10208d4cf50.jpg"},8448:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Liming Zhu-49e5995488b363a69e0a5ecb80ed43bc.jpg"},6212:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Lyse Langlois-bef91ead4b5745282530c366329a8fbd.jpg"},7446:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Marie-Pierre Habas Gerard-52ad160c1072f4e38ecaa84601189888.jpg"},1205:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Renji Butalid-22a50a1af77b29c2a65a1b3138ba8290.jpg"},6922:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Sarah Nadi-947dfbf22993180d3645786e785b4e36.jpg"},7204:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Tanja Tajmel-877b9dbc7e2b7f428f8ca73bfb59f5b0.jpg"},31:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Dr. Ying (Jenny) Zou-b8c819cff4b744f2e09b55d1adf90202.jpg"},683:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Ernesto Lang Oreamuno-ca07cb4114145fbeb2155cfe11e5d46f.jpg"},4192:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Fangjian Lei-fdc7e42de8127bb8037f4838b2e8084b.jpg"},9114:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Fazle Rabbi-4ef740f89af86f82f99d4302956f27b2.jpg"},7196:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Forough Majidi-1a7c2e79a77c26a589dcd01d34ae05c4.jpg"},3074:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Harsh Patel-ffa2afacc9fe23f1759408c158589464.jpg"},6231:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Haya Samaana-d0d8d68282bdb35607c34729f8d27881.jpg"},7927:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Jaskirat Singh-c9979dd92f4872459985baf350508789.jpg"},1118:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Jasmine Latendresse-a84141ba84e497ba72957348d6c4ecb0.jpg"},5199:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Jiawen Liu-e91a64ebf2e8549c005e63095bc74d52.jpg"},6770:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Junjie Li-35e6dd23afa1487b2d14b7bdd91b24ec.jpg"},1147:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Katherine Heighington-cdae15a5c55ecfb706ff783cd1f7cc72.jpg"},6594:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Khaled Badran-78394c09c708463a391ef2dc39ece103.jpg"},8826:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Khouloud Oueslati-db7f218952b2314fe1a9b1634fcffd98.jpg"},5635:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Laila Mahmoud Daw Abodinar-4b6261b7c8c87801e96e926799b2ee22.jpg"},5451:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Lorena Pacheco-1f5c6e4d3d9834ac1c1d144ad2f33d3d.jpg"},4930:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Lori Akiyama-3112ba0fcc7ab25b6df7e790f86b1206.jpg"},8840:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mayra Ruiz-35ec3a70493daa8448b6b9d65929a13f.jpg"},9813:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mohamed El-Geish-0cabc20992a2ed0ce8cb9fac8c5327ef.jpg"},2373:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mohayeminul Islam-c455875974b78990f179881eddb59d2e.jpg"},1786:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mr. Derek Truong-9e94f9a61006d1682796e81879892107.jpg"},1760:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mr. Jesse Vincent-Herscovici-25bf7cd067c4d6d9188c5580e20b5b29.jpg"},5076:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Mr. Pierre Dumouchel-060a727909ad0230b36d02c9b69a45ef.jpg"},288:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Musfiqur Rahman-7d144bd04c3e2481c2448c0f173297fc.jpg"},868:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Pape Wade-bcee43a2cf735c5a3bb30a2d6f82ff7c.jpg"},6522:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Patrick Loic Foalem-768dadb2b206a30e577b916f2e9b60f5.jpg"},6724:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Patrick Yang-e5a76ac978518584e21fbc71ac97f4d9.jpg"},4247:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Pierre-Olivier Cote-ae49a70b533fb390f5df8bd862c84c93.jpg"},5418:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Pouya Fathollahzadeh-462559764c37a55c875b5a24750c0ff4.jpg"},631:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Prasad Garigipati-bce10fb7ff888b28ce07e661d49bc052.jpg"},6368:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Rached Bouchoucha-1db661745fa4d35cb80021d19ea712e1.jpg"},2964:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Samuel Abedu-6cdcdc465c32b22afc73aed2af3533b2.jpg"},8265:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Saurabh Kumar-643b51d02fb703b10d75048c2a32887f.jpg"},2516:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Sharon Ho-def58e8d99eba6332636bfe13f73b9e4.jpg"},8324:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Shenyu Zheng-864a4b665501f8e84a233374bab4fff9.jpg"},2020:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Stephane Caron-aeddae43e67c6722a1ccdfdd185abb0e.jpg"},9428:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Vahid Majdinasab-de4af7f1a4696ef480edcf4187737dbb.jpg"},8632:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Yang Liu-a19b1a393e7121ae2d38adbcbbbdb43b.jpg"},2845:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Yiping Jia-b6b91242a23cf87aa1f91bf205e7f647.jpg"},6483:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/Zhimin Zhao-fbe197b4447bc3d8389d311287671d81.jpg"},937:function(e,a,i){"use strict";a.Z=i.p+"assets/images/default-5db0ccc12ec662ccbf7bfa46b883956d.png"},7806:function(e,a,i){"use strict";i.r(a),a.default=i.p+"assets/images/mohayeminul islam-c455875974b78990f179881eddb59d2e.jpg"},3653:function(e,a,i){var t={"./Afiya Fahmida Sarah.jpg":8454,"./Ahmed Haj Yahmed.jpg":1890,"./Akalanka Galappaththi.jpg":1530,"./Akshat Malik.jpg":7235,"./Amanda Kolopanis.jpg":7941,"./Antonio Collante.jpg":8029,"./Aurel Lucrich Ikama Honey.jpg":2033,"./Chunli Yu.jpg":2927,"./David Fab.jpg":898,"./Divya Kamath.jpg":6581,"./Dr. Ahmad Abdellatif.jpg":855,"./Dr. Ahmed E. Hassan.jpg":8907,"./Dr. Diego Costa.jpg":5334,"./Dr. Emad Shihab.jpg":8194,"./Dr. Foutse Khomh.jpg":9177,"./Dr. Gilles Savard.jpg":4222,"./Dr. Jinqiu Yang.jpg":9908,"./Dr. Julien Crowe.jpg":7600,"./Dr. Lata Narayanan.jpg":3739,"./Dr. Liming Zhu.jpg":8448,"./Dr. Lyse Langlois.jpg":6212,"./Dr. Marie-Pierre Habas Gerard.jpg":7446,"./Dr. Renji Butalid.jpg":1205,"./Dr. Sarah Nadi.jpg":6922,"./Dr. Tanja Tajmel.jpg":7204,"./Dr. Ying (Jenny) Zou.jpg":31,"./Ernesto Lang Oreamuno.jpg":683,"./Fangjian Lei.jpg":4192,"./Fazle Rabbi.jpg":9114,"./Forough Majidi.jpg":7196,"./Harsh Patel.jpg":3074,"./Haya Samaana.jpg":6231,"./Jaskirat Singh.jpg":7927,"./Jasmine Latendresse.jpg":1118,"./Jiawen Liu.jpg":5199,"./Junjie Li.jpg":6770,"./Katherine Heighington.jpg":1147,"./Khaled Badran.jpg":6594,"./Khouloud Oueslati.jpg":8826,"./Laila Mahmoud Daw Abodinar.jpg":5635,"./Lorena Pacheco.jpg":5451,"./Lori Akiyama.jpg":4930,"./Mayra Ruiz.jpg":8840,"./Mohamed El-Geish.jpg":9813,"./Mohayeminul Islam.jpg":2373,"./Mr. Derek Truong.jpg":1786,"./Mr. Jesse Vincent-Herscovici.jpg":1760,"./Mr. Pierre Dumouchel.jpg":5076,"./Musfiqur Rahman.jpg":288,"./Pape Wade.jpg":868,"./Patrick Loic Foalem.jpg":6522,"./Patrick Yang.jpg":6724,"./Pierre-Olivier Cote.jpg":4247,"./Pouya Fathollahzadeh.jpg":5418,"./Prasad Garigipati.jpg":631,"./Rached Bouchoucha.jpg":6368,"./Samuel Abedu.jpg":2964,"./Saurabh Kumar.jpg":8265,"./Sharon Ho.jpg":2516,"./Shenyu Zheng.jpg":8324,"./Stephane Caron.jpg":2020,"./Vahid Majdinasab.jpg":9428,"./Yang Liu.jpg":8632,"./Yiping Jia.jpg":2845,"./Zhimin Zhao.jpg":6483,"./mohayeminul islam.jpg":7806};function n(e){var a=s(e);return i(a)}function s(e){if(!i.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=s,e.exports=n,n.id=3653}}]);