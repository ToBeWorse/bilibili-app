<template>
	<div class="channel-list">
		<!-- v-for指令 创建了一个循环 循环的列表来自于自身数据对的channelList 
		循环的单个对象给到了item 
		:key="item.id" 在循环中必须指定key值 这个值会影响diff算法 diff算法会比对DOM的key 通常key是组件的id
		-->
		<div v-for="item in channelList" class="item" :key="item.id">
			<!-- channel 标签中的data是channel组件的props 需要传递
			isActive也是 props  activeId 是当前组件的props
			@active="$emit('active',item.id)" 分成两个部分
			第一部分为@active= 表示接收到来自于channel组件的组件事件 并完成注册
			第二部分为"$emit('active',item.id)" 表示抛出事件 这个事件的名称为active 所带的数值为item.id item是循环带出的单独对象
			-->
			<Channel :data="item" :isActive="item.id === activeId " @active="$emit('active',item.id)"></Channel>
		</div>
		<Channel></Channel>
	</div>
</template>

<script>
	import Channel from './Channel.vue'
	import getChannels from "../services/channel.js"
	export default {
		//注册组件 js也需要注册
		components: {
			Channel,
			getChannels
		},
		data() {
			return {
				//channelList 为新定义的一个数组 最开始时候为空 在通过async调取数据之后，这个数组就会被赋值，数据改变了。，就会渲染页面
				channelList: [{
						id: 0,
						name: "quanbu",
						channel_count: 100
					},
					{
						id: 1,
						name: "dongma",
						channel_count: 100
					},
				]
			}
		},
		//异步函数 渲染两次 async 表示异步方法 所有封装异步方法的方法都应该使用async 和 await
		async created() { 
			//组件被创建了
			var list = await getChannels.getChannels()
			//filter函数表示筛选数组 会用就好
			this.channelList = list.filter(function(item) {
				if (item.name !== "热门") {
					return true
				}
				return false
			})

		},
		props: {
			activeId: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style scoped>
	.channel-list {
		overflow: hidden;
	}

	.item {
		float: left;
		width: 50%;
	}
</style>
