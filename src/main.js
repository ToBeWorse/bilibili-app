import Vue from 'vue'
import App from './App.vue'
import channel from "./services/channel.js"

Vue.config.productionTip = false
//var categories = channel.getChannels(); 、
//这里得到Promise {<pending>} 这样一个对象 原因是因为getChannels方法是异步方法 
//所以应该用 async 来封装成一个异步函数
async function asyncGetChannels() {
	//这就是封装的异步函数 需要使用await
	var categories = await channel.getChannels();
	console.log(categories)
	return categories
}
//调用封装的异步函数
// asyncGetChannels();

new Vue({
	render: h => h(App),
}).$mount('#app')
