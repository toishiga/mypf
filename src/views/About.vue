<template lang="pug">
  main.p-about
    .p-about__content
        h1.p-about__head about
        .p-about__body
          .p-about__c
            .p-about__tit #[span.p-about__key name:] @toishiga ,
            .p-about__dec #[span.p-about__key comment:] 広告代理店の内製でのweb制作経て、現在フリーで活動しております。主にフロントエンドと、WordPressのテーマやプラグインを作成したりとPHP周りのコードをよく書きます。HTMLはpugで、CSSはどちらかと言うとstylusで書くことが多いです。
          .p-about__portrait
            img.p-about__img(:src="portrait")
    scrolldown
</template>
<script>
import store  from '@/store'
import scrolldown from '@/components/scrolldown'

export default {
  data(){
    return {
      portrait: require('@/assets/img/about/myportrait.png'),

      pages:{
        prev:'Works',
        next:'Contact'
      }
    }
  },
  computed: {
  },
  methods: {
    scrollmove() {
      store.actions.scrollmove(this.pages)
    }
  },
  components: {
    scrolldown
  },
  mounted:function (){
    window.addEventListener('scroll',this.scrollmove)
  },
  beforeDestroy: function (){
    window.removeEventListener('scroll',this.scrollmove)
  }
}
</script>

