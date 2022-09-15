<template lang="pug">
  header.l-header
    .l-header__inner
      h1.l-header__logo 
        router-link(:to="{name: 'Home'}") MYPF 
      nav.l-header__nav
        NavLink.l-header__link
      label#l-header__navbtn.l-header__navbtn
        input.l-header__navckb(type="checkbox" v-model="navbtn")
        .l-header__navbtnicon
    nav.l-header__spnav(:class="{'is_open':navbtn}" @click="closespnav")
      NavLink

</template>

<script>
  import NavLink from './NavLink'
  export default{
    data(){
      return {
        navbtn:false
      }
    },
    conputed:{
      navlinkbtn(){
      }
    },
    methods:{
      closespnav(){
        return this.navbtn = false
      }
    },
    components: {
      "NavLink": NavLink
    }
  }
</script>