<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'app',
    components :{
      Header
    }
  }
</script>

<style lang="stylus">
  @import './static/style/style.styl';
</style>
