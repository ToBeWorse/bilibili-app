<template>
	<!-- 外层不能直接控制组件内部的东西 但是我们可以通过限制外层大小去限制内层组件-->
<div>
	<div style="width: 100px;height: 30px;border: 1px solid;">
		<!-- @active="formItemEve" 表示注册事件  这个事件的来源是子组件  调用的这个函数接收的参数 e 就是从子组件传输过来的数据-->
		<Item :isActive="curActive === 'stockpan'" @active = "curActive='stockpan'" @func="formItemEve">
			<!-- 对应Item组件的插槽 这中间的内容会直接传递到slot标签中-->
			<span>库存盘点</span><span>&gt;</span>
		</Item>
	</div>
	<div style="width: 100px;height: 30px;border: 1px solid;">
		<Item :isActive="curActive === 'stockchange'" @active=  "curActive='stockchange'">
			<!-- 对应Item组件的插槽 这中间的内容会直接传递到slot标签中-->
			<span>库存检查</span><span>&gt;</span>
			</Item>
	</div>
</div>
</template>

<script>
import Item from "./components/item";
export default{
	data() {
		return{
			curActive:null,
		}
	},
	components:{
		Item,
	},
	methods:{
		//子组件传输过来的事件调用了这个方法 传递的参数 e 也是来自于子组件
		formItemEve(e){
			console.log(e)
		}
	}
}
</script>
s
<style>

</style>
