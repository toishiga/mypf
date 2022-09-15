<template lang="pug">
  .workslist
    ul.works(v-if="hasworks")
      li(v-for="s in filteredWorks" :key="s.id") 
        .id id : {{s.id}}
        .tit name : {{s.title}}
        .cat: span.cat(v-for="c in s.cats" :key="c") {{c}}
    .else(v-else) aaa
</template>

<script>
export default {
	props:{
		works: Array,
		checkedCats: Array
	},
	computed: {
		hasworks() {
			return this.works && this.works.length !== 0
		},
		filteredWorks() {
			// let works = this.works.concat()
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
		}
	}
}
</script>