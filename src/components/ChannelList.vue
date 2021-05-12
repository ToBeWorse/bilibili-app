<template>
	<div class="channel-list">
		<div v-for="item in channelList" class="item" :key="item.id">
			<Channel :data="item" :isActive="item.id === activeId " @active="$emit('active',item.id)"></Channel>
		</div>
		<Channel></Channel>
	</div>
</template>

<script>
	import Channel from './Channel.vue'
	import getChannels from "../services/channel.js"
	export default {
		components: {
			Channel,
			getChannels
		},
		data() {
			return {
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
		//异步函数 渲染两次
		async created() {
			//组件被创建了
			var list = await getChannels.getChannels()
			//filter函数表示筛选数组
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
