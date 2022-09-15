<template lang="pug">
  main.p-works
    .p-works__content
      h1.p-works__head works
      form.p-works__cat
        legend.p-works__catlegend filter by skills (OR condition)
        ul.p-works__cats
          li(v-for="c in cats")
            label
              input(type="checkbox" :value="c" v-model="checkedCats")
              span {{c}}

      workslist(
        :works="works"
        :checkedCats="checkedCats"
      ).p-works__workslist
    scrolldown.p-work__scrolldown
</template>

<script>
import store  from '@/store'
import workslist from '@/components/workslist'
import scrolldown from '@/components/scrolldown'

export default {
  data(){
    return {
      cats: store.state.cats,
      works: store.state.works,

      checkedCats: store.state.checkedCats,

      pages:{
        prev:'Home',
        next:'About'
      }
    }
  },
  methods: {
    catreset () {
      this.checkedCats = []
    },
    scrollmove() {
      store.actions.scrollmove(this.pages)
    }
  },
  components: {
    scrolldown,
    workslist
  },
  mounted: function (){
    window.addEventListener('scroll',this.scrollmove)
  },
  beforeDestroy: function (){
    window.removeEventListener('scroll',this.scrollmove)
  }
}
</script>