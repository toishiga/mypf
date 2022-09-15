<template lang="pug">
  li(@click="modalopen(items.id)").c-worksitem
    article.c-worksitem__box
      h2.c-worksitem__tit  {{items.tit}}
      .c-worksitem__body
        .c-worksitem__c 
          .c-worksitem__catstit used skills:
          ul.c-worksitem__cats
            li.c-worksitem__cat(v-for="c in items.cats" :key="c")  {{c}}
          .c-worksitem__more
            span.c-worksitem__morebtn READ MORE
        .c-worksitem__img
          img.c-worksitem__imgthumb(:src="'img/thumb/'+items.img+'_thumb.png'")
</template>

<script>
export default {
  props:{
    items: Object
  },
  computed: {
  },
  methods:{
    modalopen(id){
      this.$emit('modalopen',id)
    }
  }
}
</script>