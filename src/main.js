import Vue from 'vue'
import App from './App.vue'
import channel from "./services/channel.js"

Vue.config.productionTip = false
channel.getChannels();
new Vue({
  render: h => h(App),
}).$mount('#app')
