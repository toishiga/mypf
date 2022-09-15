<template lang="pug">  
  main.p-home
    .p-home__content
      h1.p-home__logo
        span( v-for="(t,i) in MYPF"
         :key="i" v-text="t").p-home__logoitem.p-home__delay
      .p-home__desc
        span( v-for="(t,i) in desc1"
          :key="i" v-text="t" :item="i").p-home__descitem.p-home__delaydesc1
      .p-home__desc 
        span( v-for="(t,i) in desc2"
          :key="i" v-text="t" :item="i").p-home__descitem.p-home__delaydesc2
      navLink.p-home__navlink
    scrolldown.p-home__scrolldown

</template>

<script>
import navLink from '@/components/NavLink'
import store from '@/store'
import scrolldown from '@/components/scrolldown'
export default{
  data() {    
    return {
      MYPF: 'MYPF',
      desc1: 'this is WEB Developper portfolio site.',
      desc2: 'please check my works up!',
      sharedState: store.state,
      pages:{
        next:"Works"
      }
    }
  },
  methods: {
    remove(id) {
      store.actions.removeMemo(id)
    },
    scrollmove() {
      store.actions.scrollmove(this.pages)
    }
  },
  components: {
  scrolldown,
  navLink
  },
  mounted() {
    document.body.classList.add('home');
    window.addEventListener('scroll',this.scrollmove)
  },
  beforeDestroy() {
    document.body.classList.remove('home')
    window.removeEventListener('scroll',this.scrollmove)
  }
}
</script>
