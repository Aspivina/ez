import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueMq from 'vue-mq'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch,faSearchPlus, faInfo, faMagnet, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {faStar,faTimesCircle, faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
import {faAngleDoubleDown,faAngleDoubleUp, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {faCloudDownloadAlt,faDatabase,faSortAmountDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch,faSearchPlus,faInfo,faMagnet,faAddressCard,faStar,faTimesCircle,
            faHome,faHeart,faAngleDoubleDown,faAngleDoubleUp, faAngleUp, 
            faCloudDownloadAlt,faDatabase,faSortAmountDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMq, {
  breakpoints: {
    custom_screen: 768,
    // mobile: 450,
    // tablet: 900,
    // laptop: 1250,
    desktop: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*  deployement
 1) git add . (from origin)
 2) git commit -m "..."
 3) git push origin1 master (origin1 = ez repository)
 4) git checkout gh-pages
 5) git pull origin1 master
 6) npm run build
 7) git add dist && git commit -m ",,,"
 8) git subtree push --prefix dist origin2 gh-pages

 */