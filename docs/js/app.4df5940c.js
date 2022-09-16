(function(){"use strict";var t={5786:function(t,e,n){n.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"c-navlink"},[e("li",{staticClass:"c-navlink__item"},[e("router-link",{attrs:{to:{name:"Home"},exact:""}},[t._v("Home ")])],1),e("li",{staticClass:"c-navlink__item"},[e("router-link",{attrs:{to:{name:"Works"}}},[t._v("Works")])],1),e("li",{staticClass:"c-navlink__item"},[e("router-link",{attrs:{to:{name:"About"}}},[t._v("About")])],1),e("li",{staticClass:"c-navlink__item"},[e("router-link",{attrs:{to:{name:"Contact"}}},[t._v("Contact")])],1)])},o=[],i=n(1001),a={},r=(0,i.Z)(a,s,o,!1,null,null,null),c=r.exports},9656:function(t,e,n){n.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-scrolldown"},[e("div",{staticClass:"c-scrolldown__box"},[t._v(t._s(t.sd))]),e("div",{staticClass:"c-scrolldown__nav"})])},o=[],i={data(){return{sd:"scroll down to next page"}}},a=i,r=n(1001),c=(0,r.Z)(a,s,o,!1,null,null,null),l=c.exports},4192:function(t,e,n){var s=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("header",{staticClass:"l-header"},[e("div",{staticClass:"l-header__inner"},[e("h1",{staticClass:"l-header__logo"},[e("router-link",{attrs:{to:{name:"Home"}}},[t._v("MYPF ")])],1),e("nav",{staticClass:"l-header__nav"},[e("NavLink",{staticClass:"l-header__link"})],1),e("label",{staticClass:"l-header__navbtn",attrs:{id:"l-header__navbtn"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.navbtn,expression:"navbtn"}],staticClass:"l-header__navckb",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.navbtn)?t._i(t.navbtn,null)>-1:t.navbtn},on:{change:function(e){var n=t.navbtn,s=e.target,o=!!s.checked;if(Array.isArray(n)){var i=null,a=t._i(n,i);s.checked?a<0&&(t.navbtn=n.concat([i])):a>-1&&(t.navbtn=n.slice(0,a).concat(n.slice(a+1)))}else t.navbtn=o}}}),e("div",{staticClass:"l-header__navbtnicon"})])]),e("nav",{staticClass:"l-header__spnav",class:{is_open:t.navbtn},on:{click:t.closespnav}},[e("NavLink")],1)])},r=[],c=n(5786),l={data(){return{navbtn:!1}},conputed:{navlinkbtn(){}},methods:{closespnav(){return this.navbtn=!1}},components:{NavLink:c.Z}},u=l,d=n(1001),p=(0,d.Z)(u,a,r,!1,null,null,null),h=p.exports,m={name:"app",components:{Header:h}},f=m,v=(0,d.Z)(f,o,i,!1,null,null,null),_=v.exports,b=n(7621);s.ZP.config.productionTip=!1,new s.ZP({router:b.Z,render:t=>t(_)}).$mount("#app")},7621:function(t,e,n){n.d(e,{Z:function(){return w}});n(7658);var s=n(6369),o=n(2631),i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"p-home"},[e("div",{staticClass:"p-home__content"},[e("h1",{staticClass:"p-home__logo"},t._l(t.MYPF,(function(n,s){return e("span",{key:s,staticClass:"p-home__logoitem p-home__delay",domProps:{textContent:t._s(n)}})})),0),e("div",{staticClass:"p-home__desc"},t._l(t.desc1,(function(n,s){return e("span",{key:s,staticClass:"p-home__descitem p-home__delaydesc1",attrs:{item:s},domProps:{textContent:t._s(n)}})})),0),e("div",{staticClass:"p-home__desc"},t._l(t.desc2,(function(n,s){return e("span",{key:s,staticClass:"p-home__descitem p-home__delaydesc2",attrs:{item:s},domProps:{textContent:t._s(n)}})})),0),e("navLink",{staticClass:"p-home__navlink"})],1),e("scrolldown",{staticClass:"p-home__scrolldown"})],1)},a=[],r=n(5786),c=n(8707),l=n(9656),u={data(){return{MYPF:"MYPF",desc1:"this is WEB Developper portfolio site.",desc2:"please check my works up!",sharedState:c.Z.state,pages:{next:"Works"}}},methods:{remove(t){c.Z.actions.removeMemo(t)},scrollmove(){c.Z.actions.scrollmove(this.pages)}},components:{scrolldown:l.Z,navLink:r.Z},mounted(){document.body.classList.add("home"),window.addEventListener("scroll",this.scrollmove)},beforeDestroy(){document.body.classList.remove("home"),window.removeEventListener("scroll",this.scrollmove)}},d=u,p=n(1001),h=(0,p.Z)(d,i,a,!1,null,null,null),m=h.exports;s.ZP.use(o.ZP);const f=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,5855))},{path:"/contact",name:"Contact",component:()=>n.e(774).then(n.bind(n,9774))},{path:"/works",name:"Works",component:()=>n.e(614).then(n.bind(n,6789))}],v=new o.ZP({mode:"history",base:"/mypf/",routes:f});let _=window.dataLayer=window.dataLayer||[];function b(){_.push(arguments)}v.afterEach((t=>{b("config","G-P1ZLFB7PL2",{page_path:t.path})}));var w=v},8707:function(t,e,n){n.d(e,{Z:function(){return c}});n(7658);const s={site:[{id:9,tit:"MYPF",url:"http://toishiga.github.io/mypf",cats:["html","css","js"],img:"mypf",desc:"this page",github:"https://github.com/toishiga/mypf"},{id:8,tit:"数理女子",url:"http://www.suri-joshi.jp/",cats:["html","css","js","dir","wp","php"],img:"suri",desc:"数学者と言えば、むさ苦しい男子のイメージだが、ここでは女子数学者の可愛いイメージを発信するサイト。見た目はかわいいが内容はやっぱり硬派。"},{id:7,tit:"日本美容外科学会",url:"http://www.jsaps.com/",cats:["html","css","js","dir","wp","design","php"],img:"jsaps",desc:"美容外科学会員のためのサイト。〜〜学会のサイトでよくある名簿サイトでもある。内部的には何百人といる会員全員分の詳細ページがあり、初期は全員分公開されていたがいつの頃からか部分的な公開となった。WPといえど、大量の更新は色々な意味でコストがかかる。"},{id:6,tit:"NTT docomo 【スゴ得】コンテンツ SNKゲームセレクション forスゴ得",url:"https://www.dcm-b.jp/cs/cpsite.html?id=01cpn189001",cats:["html","css"],img:"snk",desc:"NTT docomoのコンテンツ。内部的にはPHPで主に組まれている。CSS的にはBEMとかFLOCSSとかいう意味ではなく完全にレイアウトとモジュールごとにファイルを分けて書いた。この書き方はシステムの人間と話し合って決めたが、ある意味時代の先をいっていたと今となっては思う。"},{id:5,tit:"東芝インフラシステムズ株式会社 水環境事業部英語ページ",url:"https://www.global.toshiba/ww/products-solutions/social/water-environmental.html",cats:["html","css","js"],img:"toshiba"},{id:4,tit:"テクニカル電子（現・パーキングソリューション）",url:"https://www.parking-s.co.jp/",cats:["html","css","js"],img:"parking"},{id:3,tit:"Epark からだリフレ（現・接骨・鍼灸）",url:"https://karadarefre.jp/",cats:["html","css","js","php"],img:"karadarefre"},{id:2,tit:"神田法人会",url:"http://www.kanda-hojinkai.com/",cats:["html","css","js","dir","wp","design","php"],img:"kanda"},{id:1,tit:"料亭喜祥",url:"https://www.ryoutei-kisho.com/",cats:["html","css","js"],img:"kisho"}]};var o={sites:s},i=n(7621);const a={memos:[],cats:["dir","html","css","js","wp","php"],checkedCats:[],works:o.sites.site},r={scrollmove(t){this.width=window.innerWidth,this.height=window.innerHeight,this.docheight=document.documentElement.scrollHeight,this.pageoffset=window.scrollY+window.innerHeight,this.pageoffset==this.docheight&&t.next&&(scrollTo(0,20),i.Z.push({name:t.next})),this.pageoffset==this.height&&t.prev&&(scrollTo(0,20),i.Z.push({name:t.prev}))}};var c={state:a,actions:r}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,i){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],i=t[u][2];for(var r=!0,c=0;c<s.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(r=!1,i<a&&(a=i));if(r){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+(443===t?"about":t)+"."+{443:"0bbd7d60",614:"6dddba07",774:"db4ab6e8"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mypf:";n.l=function(s,o,i,a){if(t[s])t[s].push(o);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+i){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+i),r.src=s),t[s]=[o];var p=function(e,n){r.onerror=r.onload=null,clearTimeout(h);var o=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/mypf/"}(),function(){var t={143:0};n.f.j=function(e,s){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)s.push(o[2]);else{var i=new Promise((function(n,s){o=t[e]=[n,s]}));s.push(o[2]=i);var a=n.p+n.u(e),r=new Error,c=function(s){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,o[1](r)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,a=s[0],r=s[1],c=s[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var u=c(n)}for(e&&e(s);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},s=self["webpackChunkmypf"]=self["webpackChunkmypf"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4192)}));s=n.O(s)})();
//# sourceMappingURL=app.4df5940c.js.map