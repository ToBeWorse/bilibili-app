<template>
	<div>
	<div style="width: 240px;">
		<TitleMenu :isActive="select" @active="select=true">
			<!-- 给组件的具名插槽传递内容-->
			<template v-slot:title >
				库存管理组件
			</template>
			<template v-slot:icon >
				&gt;
			</template>
			
		</TitleMenu>
	</div>
	</div>
</template>

<script>
	import TitleMenu from "./components/TitleMenu.vue";
	export default {
		data() {
			return {
				select: false
			}
		},
		components: {
			TitleMenu
		},
		methods: {
			//子组件传输过来的事件调用了这个方法 传递的参数 e 也是来自于子组件
		}
	}
</script>

<style>

</style>
