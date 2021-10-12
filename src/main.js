import Vue from 'vue'
import App from './App.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { faClock, faLifeRing, faFileAlt, faUser, faCalendar, faEye } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faRulerCombined, faBook, faShoppingCart, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faClock, faTwitter, faFacebookF, faInstagram, faLinkedin, faLifeRing, faRulerCombined, faBook, faShoppingCart, faFileAlt, faUser, faCalendar, faEye, faMapMarkerAlt, faFacebookSquare, faChevronDown )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
