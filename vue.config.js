//vue-cli 的配置文件 其实 也是webpack的配置

//commonJS的导出方式
module.exports = {
	devServer: {
		proxy: {
			//配置代理  配置代理的主要作用是为了解决请求的跨域问题
			//这个方法只能在开发环境中使用 打包之后无法使用
			//这个方法的原理是项目向开发服务器请求代理 开发服务器再向真实服务器伪造请求
			//这里的设置有两个含义
			//1.但凡是以 /x 开头的请求 都需要进行代理 代理的地址就是这个
			//2。因为远程的服务器并不认可发送的请求来自于自己的域下 所以会拒绝 使用onProxyReq添加两个请求头信息，就会伪造成正常的请求
			"/x":{ 
				target:"https://api.bilibili.com",
				//代理用到了另外的第三方库 http-proxy-middleware 这里的onProxyReq也来自于这里
				//function onProxyReq(proxyReq, req, res) {
				// add custom header to request
				//proxyReq.setHeader('x-added', 'foobar');
				// or log the req
				//https://github.com/chimurai/http-proxy-middleware
				//这里主要是给请求加上了两行记录 这个函数应该在proxy配置的里面
				onProxyReq(proxyReq) {
					proxyReq.setHeader("origin", "https://www.bilibili.com");
					proxyReq.setHeader("referer", "https://www.bilibili.com/");
				}
			},
		
		}
	}
}

