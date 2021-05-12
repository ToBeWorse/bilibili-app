<template>
	<!-- v-if="data" 如果打他有值的时候 渲染组件 没有值得时候不再渲染组件 这样的操作可以避免定义默认值 -->
	<div class="channel" v-if="data">
		<!-- @active="$emit('active')" 这个是由下层组件传递出来的 这层处理不了 交给上层处理-->
		<item :isActive="isActive" @active="$emit('active')">
			<div class="inner">
				<span class="name">
					{{ data.name}}
				</span>
				<span class="number">
					{{ data.channel_count}}
				</span>
			</div>
		</item>
	</div>


</template>

<script>
	import item from "./item"
	export default {
		props: {
			isActive: {
				type: Boolean, //约束属性的类型为布尔类型 
				//required:true,//约束属性是必填
				default: false //给一个默认的值
			},
			//由父组件传递的对象
			data: {
				//凡是属性的默认值是一个对象的 都应该用函数配置返回
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		//为什么组件的数据必须使用函数的方法返回值
		//因为组件复用的存在 如果你使用普通的数据 就会印象到其他的复用块
		//而你使用了函数之后 每次都是调用 返回的都是全新的对象
		data() {
			return {

			}
		},
		components: {
			item,
		},
		methods: {

		}
	}
</script>

<style scoped>
	.channel {
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.inner {
		padding: 0 20px;
	}

	.name {
		font-size: 14px;
		color: #212121;
	}

	.number {
		font-size: 12px;
		color: #999;
		margin-left: 8px;
	}

	.name .number {
		float: left;
	}
</style>
