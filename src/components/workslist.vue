<template lang="pug">
  .c-workslist
    ul.c-workslist__works
      worksitem(
        v-for="items in filteredWorks"
        :items="items"
        @modalopen="modalopen"
        :key="items.id"
        :data-index="items.id"
        ).c-workslist__worksitem

    worksmodal(v-if="modal" @modalclose="modalclose").c-modal
      h2.c-modal__tit {{fmodal.tit}}
      .c-modal__url {{fmodal.url}}
      .c-modal__body
        .c-modal__c
          h3.c-modal__cattit used skills 
          ul.c-modal__cats
            li.c-modal__cat(v-for="c in fmodal.cats") {{c}}
          .c-modal__desc(v-if="fmodal.desc") 
            h3.c-modal__desctit comment
            .c-modal__comment {{fmodal.desc}}
          .c-modal__github(v-if="fmodal.github")
            a(:href="fmodal.github").c-modal__abtn.u-a
              include ../assets/icon/icon-github.svg
              | github
          .c-modal__closebtnwrap
            .c-modal__closebtn(@click='modalclose') close
        .c-modal__img
          img.c-modal__imgfull(:src="'img/full/'+fmodal.img+'.png'")

      .c-modal__movebtn(v-if="hasmoveto")
        .c-modal__closebtn(@click='modalclose')
        .c-modal__prevbtn(@click='modalnext') prev
        .c-modal__nextbtn(@click='modalnext') next

</template>

<script>
import worksitem from '../components/worksitem'
import worksmodal from './worksmodal'
export default {
  data(){
    return {
      modal: false,
      modalid : 0,
    }
  },
  props:{
    works: Array,
    checkedCats: Array
  },
  computed: {
    hasworks() {
      return this.works && this.works.length !== 0
    },
    filteredWorks() {
      let works = this.works
      let cats = this.checkedCats
      if (cats.length) {
        works = works.filter(
          function (w) {
            let flg = false
            flg = w.cats.some(c => cats.some(o=>o===c))
            return flg
          }
        )
      }
      return works
    },
    fmodal(){
      let works = this.works
      let id = this.modalid
      if(id!=0){
        let w = works.find((w)=>w.id === id)
        return w
      }
      return works
    },
    hasmoveto(){
      return this.filteredWorks.length > 1
    }
  },
  methods:{
    modalopen(id){
      this.modal = true
      this.modalid = id
      let doc = document.body.style
      doc.height = "100vh";
      doc.overflowY = "hidden";
      doc.paddingRight = "15px";
    },
    modalclose(){
      this.modal = false

      let doc = document.body.style
      doc.height = "";
      doc.overflowY = "";
      doc.paddingRight = "";
    },
    modalnext(e){
      let works = this.filteredWorks

      let nowworks = works.find((w)=>w.id === this.modalid)

      let nowindex
      let moveindex = 0
      for (let i = 0; i < works.length; i++) {
        if (works[i].id === nowworks.id) nowindex = i 
      }

      if(e.target.className === "c-modal__nextbtn") {
        if (nowindex === works.length -1) moveindex = 0
        else moveindex = nowindex + 1
      } else if(e.target.className === "c-modal__prevbtn") { 
        if(nowindex === 0) moveindex = works.length -1
        else moveindex = nowindex - 1
      }

      let pos = 0;
      let prog = 100;
      let easeOut = (p) => p *(2-p)
      let mw = document.getElementById("c-modal__window")
      let st = mw.scrollTop
      let move = function () {
        prog = prog - 10;
        pos = st * easeOut(prog/100)
        mw.scrollTop = pos
        if(pos > 1) {
          requestAnimationFrame(move)
        }
      }
      requestAnimationFrame(move)
      
      this.modalopen(works[moveindex].id)
    }
  },
  components: {
    worksitem,
    worksmodal
  }
}
</script>