export default {
	//sasync 表示这个是异步方法 异步方式取数据
	async getChannels() {
		//得到响应体 await表示等待
		var resp = await fetch("/x/web-interface/web/channel/category/list");
		var data = await resp.json();
		return data.data.categories;
	},
}
