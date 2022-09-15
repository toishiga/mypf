import sites from '@/store/sites'
import router from '@/router'

const state = {
  memos: [],
  cats: ["dir","html","css","js","wp","php"],
  checkedCats: [],
  works: sites.sites.site
}
// const debug = process.env.NODE_ENV !== 'production'
const actions = {
  scrollmove (pages) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.docheight = document.documentElement.scrollHeight;
    this.pageoffset = window.scrollY+window.innerHeight;
    if(this.pageoffset == this.docheight){
      if(pages.next) {
        scrollTo(0,20)
        router.push({name:pages.next})
      }
    }
    if(this.pageoffset == this.height){
      if(pages.prev) {
        scrollTo(0,20)
        router.push({name:pages.prev})
      }
    }
  }
}
export default {
    state,
    actions
}
