<!-- 这是开发的一个组件 -->
<template>
	<div class="item" :class="{ active : isActive}" @click="handleClick"> 
	<slot></slot><!--插槽 类似于组件传递 -->
	</div>
</template>

<script>
	export default{
		//props表示需要接受的参数 单向数据流
		data() {
			return {
				returnParam:"子组件中的参数data"
			}
		},
		props:{
			//isActive表示被定义的一个参数 {}里面表示这个参数的一些约束属性
			isActive:{
				type:Boolean,//约束属性的类型为布尔类型 
				//required:true,//约束属性是必填
				default:false//给一个默认的值
			},
		},
		methods:{
			handleClick(){
				//抛出自定义事件
				//知道发生了点击事件 但是不知道如何处理 应该通知父组件给我传递数据
				//如何通知父组件 通过抛出事件方法 
				//emit两个参数  第一个是事件的名称 可以随意定义
				//		第二个参数是子组件向父组件传递的参数
				this.$emit("active","子组件传递参数");
				this.$emit("func",this.$data.returnParam);
			}
		}
	};
</script>

<style scoped> 
/* scoped 表示这个样式只在这个组件里面生效 */
	.item{
		cursor: pointer;
		/* 这里表示的是组件大小 外层的尺寸由外层控制 */
		width: 100%;
		height: 100%;
		/* transition 事件函数 可以让颜色变化的事件延长到1秒*/
		transition: 0.2s;
	}
	.active{
		background: #628fc2;
	}
	.item:hover{ /* hover 的变化效果是瞬间变化的 */
		background: #00a6ff;
	}
</style>
