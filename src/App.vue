<template>
	<div>
		<div style="width: 25%;">
			<TitleMenu :isActive="activeId === 100" @active="select=true,activeId=100">
				<!-- 给组件的具名插槽传递内容-->
				<template v-slot:title>
					库存管理组件
				</template>
				<template v-slot:icon>
					&gt;
				</template>
			</TitleMenu>
			<span></span>
			<TitleMenu :isActive="select" @active="select=false">
				<!-- 给组件的具名插槽传递内容-->
				<template v-slot:title>
					库存检查组件
				</template>
				<template v-slot:icon>
					&gt;
				</template>
			</TitleMenu>
			<!-- 新组件 -->
			<!-- 属性的传递 -->
			<channel :data="{name:'动漫',channel_count:'209'}"></channel>

		</div>
		<!-- 新组件 -->
		<ChannelList :activeId="activeId" @active="setActiveId">

		</ChannelList>
	</div>
</template>

<script>
	import TitleMenu from "./components/TitleMenu.vue";
	import channel from "./components/Channel.vue"
	import ChannelList from './components/ChannelList.vue'
	export default {
		data() {
			return {
				select: false,
				activeId: 100
			}
		},
		components: {
			TitleMenu,
			channel,
			ChannelList
		},
		methods: {
			//子组件传输过来的事件调用了这个方法 传递的参数 e 也是来自于子组件
			setActiveId(e) {
				console.log(e)
				this.activeId = e
			}
		},
	}
</script>

<style>

</style>
