import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*  deployement
 1) git add . (from origin)
 2) git commit -m "..."
 3) git push origin2 master (origin2 = cartelera repository)
 4) git checkout gh-pages
 5) git pull origin2 master
 6) npm run build
 7) git add dist && git commit -m ",,,"
 8) git subtree push --prefix dist origin2 gh-pages

 */