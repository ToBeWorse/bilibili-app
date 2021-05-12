<template>
	<div class="title-menu">
		<!-- @active="$emit('active')" 这个是由下层组件传递出来的 这层处理不了 交给上层处理-->
		<item :isActive="isActive" @active="$emit('active')">
			<div class="inner">
				<div class="left">
					<!-- slot name="title" 具名插槽 可以直接给这个插槽标签-->
					<slot name="title"></slot>
				</div>
				<div class="right">
					<!-- slot name="title" 具名插槽 可以直接给这个插槽标签-->
					<slot name="icon"></slot>
				</div>
			</div>
		</item>
	</div>


</template>

<script>
	import item from "./item"
	export default {
		props:{
			isActive:{
				type:Boolean,//约束属性的类型为布尔类型 
				//required:true,//约束属性是必填
				default:false//给一个默认的值
			},
		},
		components: {
			item,
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.title-menu {
		width: 100%;
		height: 40px;
		line-height: 25px;
	}

	.inner {
		padding: 0 20px;
	}

	.left {
		float: left;
		color: #212121;
		font-weight: 500;
	}

	.right {
		float: right;
		font-size: 12px;
		color: ##999;
	}
</style>
