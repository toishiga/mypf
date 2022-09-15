"use strict";(self["webpackChunkmytest"]=self["webpackChunkmytest"]||[]).push([[693],{4693:function(t,s,e){e.r(s),e.d(s,{default:function(){return R}});var a=function(){var t=this,s=t._self._c;return s("main",{staticClass:"p-works"},[s("div",{staticClass:"p-works__content"},[s("h1",{staticClass:"p-works__head"},[t._v("works")]),s("form",{staticClass:"p-works__cat"},[s("legend",{staticClass:"p-works__catlegend"},[t._v("filter by skills (OR condition)")]),s("ul",{staticClass:"p-works__cats"},t._l(t.cats,(function(e){return s("li",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedCats,expression:"checkedCats"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.checkedCats)?t._i(t.checkedCats,e)>-1:t.checkedCats},on:{change:function(s){var a=t.checkedCats,l=s.target,o=!!l.checked;if(Array.isArray(a)){var c=e,i=t._i(a,c);l.checked?i<0&&(t.checkedCats=a.concat([c])):i>-1&&(t.checkedCats=a.slice(0,i).concat(a.slice(i+1)))}else t.checkedCats=o}}}),s("span",[t._v(t._s(e))])])])})),0)]),s("workslist",{staticClass:"p-works__workslist",attrs:{works:t.works,checkedCats:t.checkedCats}})],1),s("scrolldown",{staticClass:"p-work__scrolldown"})],1)},l=[],o=e(8707),c=function(){var t=this,s=t._self._c;return s("div",{staticClass:"c-workslist"},[s("ul",{staticClass:"c-workslist__works"},t._l(t.filteredWorks,(function(e){return s("worksitem",{key:e.id,staticClass:"c-workslist__worksitem",attrs:{items:e,"data-index":e.id},on:{modalopen:t.modalopen}})})),1),t.modal?s("worksmodal",{staticClass:"c-modal",on:{modalclose:t.modalclose}},[s("h2",{staticClass:"c-modal__tit"},[t._v(t._s(t.fmodal.tit))]),s("div",{staticClass:"c-modal__url"},[t._v(t._s(t.fmodal.url))]),s("div",{staticClass:"c-modal__body"},[s("div",{staticClass:"c-modal__c"},[s("h3",{staticClass:"c-modal__cattit"},[t._v("used skills ")]),s("ul",{staticClass:"c-modal__cats"},t._l(t.fmodal.cats,(function(e){return s("li",{staticClass:"c-modal__cat"},[t._v(t._s(e))])})),0),t.fmodal.desc?s("div",{staticClass:"c-modal__desc"},[s("h3",{staticClass:"c-modal__desctit"},[t._v("comment")]),s("div",{staticClass:"c-modal__comment"},[t._v(t._s(t.fmodal.desc))])]):t._e(),s("div",{staticClass:"c-modal__closebtnwrap"},[s("div",{staticClass:"c-modal__closebtn",on:{click:t.modalclose}},[t._v("close")])])]),s("div",{staticClass:"c-modal__img"},[s("img",{staticClass:"c-modal__imgfull",attrs:{src:"img/full/"+t.fmodal.img+".png"}})])]),t.hasmoveto?s("div",{staticClass:"c-modal__movebtn"},[s("div",{staticClass:"c-modal__closebtn",on:{click:t.modalclose}}),s("div",{staticClass:"c-modal__prevbtn",on:{click:t.modalnext}},[t._v("prev")]),s("div",{staticClass:"c-modal__nextbtn",on:{click:t.modalnext}},[t._v("next")])]):t._e()]):t._e()],1)},i=[],r=function(){var t=this,s=t._self._c;return s("li",{staticClass:"c-worksitem",on:{click:function(s){return t.modalopen(t.items.id)}}},[s("article",{staticClass:"c-worksitem__box"},[s("h2",{staticClass:"c-worksitem__tit"},[t._v(" "+t._s(t.items.tit))]),s("div",{staticClass:"c-worksitem__body"},[s("div",{staticClass:"c-worksitem__c"},[s("div",{staticClass:"c-worksitem__catstit"},[t._v("used skills:")]),s("ul",{staticClass:"c-worksitem__cats"},t._l(t.items.cats,(function(e){return s("li",{key:e,staticClass:"c-worksitem__cat"},[t._v(" "+t._s(e))])})),0),t._m(0)]),s("div",{staticClass:"c-worksitem__img"},[s("img",{staticClass:"c-worksitem__imgthumb",attrs:{src:"img/thumb/"+t.items.img+"_thumb.png"}})])])])])},d=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"c-worksitem__more"},[s("span",{staticClass:"c-worksitem__morebtn"},[t._v("READ MORE")])])}],n={props:{items:Object},computed:{},methods:{modalopen(t){this.$emit("modalopen",t)}}},m=n,_=e(1001),u=(0,_.Z)(m,r,d,!1,null,null,null),k=u.exports,h=function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:"modal",appear:""}},[s("article",{staticClass:"c-modal c-modal__overlay",on:{click:function(s){return s.target!==s.currentTarget?null:t.$emit("modalclose")}}},[s("div",{staticClass:"c-modal__window",attrs:{id:"c-modal__window"}},[s("div",{staticClass:"c-modal__content"},[t._t("default")],2)])])])},v=[],C={},w=(0,_.Z)(C,h,v,!1,null,null,null),p=w.exports,f={data(){return{modal:!1,modalid:0}},props:{works:Array,checkedCats:Array},computed:{hasworks(){return this.works&&0!==this.works.length},filteredWorks(){let t=this.works,s=this.checkedCats;return s.length&&(t=t.filter((function(t){let e=!1;return e=t.cats.some((t=>s.some((s=>s===t)))),e}))),t},fmodal(){let t=this.works,s=this.modalid;if(0!=s){let e=t.find((t=>t.id===s));return e}return t},hasmoveto(){return this.filteredWorks.length>1}},methods:{modalopen(t){this.modal=!0,this.modalid=t;let s=document.body.style;s.height="100vh",s.overflowY="hidden",s.paddingRight="15px"},modalclose(){this.modal=!1;let t=document.body.style;t.height="",t.overflowY="",t.paddingRight=""},modalnext(t){let s,e=this.filteredWorks,a=e.find((t=>t.id===this.modalid)),l=0;for(let m=0;m<e.length;m++)e[m].id===a.id&&(s=m);"c-modal__nextbtn"===t.target.className?l=s===e.length-1?0:s+1:"c-modal__prevbtn"===t.target.className&&(l=0===s?e.length-1:s-1);let o=0,c=100,i=t=>t*(2-t),r=document.getElementById("c-modal__window"),d=r.scrollTop,n=function(){c-=10,o=d*i(c/100),r.scrollTop=o,o>1&&requestAnimationFrame(n)};requestAnimationFrame(n),this.modalopen(e[l].id)}},components:{worksitem:k,worksmodal:p}},g=f,b=(0,_.Z)(g,c,i,!1,null,null,null),y=b.exports,x=e(9656),A={data(){return{cats:o.Z.state.cats,works:o.Z.state.works,checkedCats:o.Z.state.checkedCats,pages:{prev:"Home",next:"About"}}},methods:{catreset(){this.checkedCats=[]},scrollmove(){o.Z.actions.scrollmove(this.pages)}},components:{scrolldown:x.Z,workslist:y},mounted:function(){window.addEventListener("scroll",this.scrollmove)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollmove)}},Z=A,E=(0,_.Z)(Z,a,l,!1,null,null,null),R=E.exports}}]);
//# sourceMappingURL=693.ff941b09.js.map