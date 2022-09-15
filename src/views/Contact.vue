<template lang="pug">
.wrap
  main.p-contact
    .p-contact__content
      h1.p-contact__head contact
      .p-contact__dec 何かございましたらご連絡いただけますと嬉しいです。
      ul.p-contact__link
        li.p-contact__links: a(href="https://github.com/toishiga").p-contact__btn.u-a
          include ../assets/icon/icon-github.svg
          | github
        li.p-contact__links: a(href="mailto:toishiga@gmail.com").p-contact__btn.u-a
          include ../assets/icon/icon-mail.svg
          | mail
  footer.l-footer
    .l-footer__inner &copy; MYPF 2022
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      pages: {
        prev:'About'
      }
    }
  },
  methods: {
    scrollmove(){
      store.actions.scrollmove(this.pages)
    }
  },
  mounted:function () {
    window.addEventListener('scroll',this.scrollmove)
  },
  beforeDestroy:function () {
    window.removeEventListener('scroll',this.scrollmove)
  }
}
</script>
