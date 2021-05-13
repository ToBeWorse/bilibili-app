<!-- 这是开发的一个组件 底层组件 这个最小的一个组件 之后的组件将会在这个组件上搭建 -->
<template>
	<div class="item" :class="{ active : isActive}" @click="handleClick">
		<!-- 
	class表示这个组件的样式
	:class="{ active : isActive}" 这是vuejs的写法 表示这个class绑定一个变量isActive 			而这个变量的true false 直接影响active这个样式是否显示出来
	@click=“function” 这个表示click点击时候会触发function函数，也可以使用箭头函数这里其实是抛出了组件事件
	-->
		<slot></slot>
		<!--插槽 上层组件调用item这个组件时候 使用如下格式
	 <item>
	 <p>hello wrold</p>
	 </item>
	 在这个示例中 <p>hello wrold</p> 就会传递到slot标签中
	 如果使用具名插槽 <slot name="title" /> 那么上层组件传递时候就需要指定传递的对象
	 <template v-slot:title >p>hello wrold</p></template> 这样来传递
	 -->
	</div>
</template>

<script>
	export default {
		//这里的data 表示子组件中的数据 这个是不可以被父组件改变的
		data() {
			return {
				returnParam: "子组件中的参数data"
			}
		},
		//props表示需要接受的参数 单向数据流
		props: {
			//isActive表示被定义的一个参数
			//{}里面表示这个参数的一些约束属性
			isActive: {
				type: Boolean, //约束属性的类型为布尔类型 
				required: true, //约束属性是必填
				default: false, //给一个默认的值
				//如果属性的type为object，需要返回一个空对象时，应该使用一个函数返回空对象。主要的原因是因为组件被复用，这个默认值如改变，会影响其他组件，使用函数返回就会是一个新对象
			},
		},
		methods: {
			handleClick() {
				//定义 并 抛出自定义事件
				//知道发生了点击事件 但是不知道如何处理 应该通知父组件
				//如何通知父组件 通过抛出事件方法 
				//$emit两个参数  第一个是事件的名称 可以随意定义
				//			   第二个参数是子组件向父组件传递的参数
				this.$emit("active", "子组件传递参数");
				this.$emit("func", this.$data.returnParam);
			}
		}
	};
</script>

<style scoped>
	/* scoped 表示这个样式只在这个组件里面生效 */
	.item {
		cursor: pointer;
		/* 这里表示的是组件大小 外层的尺寸由外层控制 */
		width: 100%;
		height: 100%;
		/* transition 事件函数 可以让颜色变化的事件延长到1秒*/
		transition: 0.2s;
	}

	.active {
		background: #628fc2;
	}

	.item:hover {
		/* hover 的变化效果是瞬间变化的 */
		background: #00a6ff;
	}
</style>
