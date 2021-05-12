//vue-cli 的配置文件 其实 也是webpack的配置

//commonJS的导出方式
module.exports = {
	devServer: {
		proxy: {
			//配置代理
			"/x":{ //但凡是以 /x 开头的请求 都需要进行代理
				target:"https://api.bilibili.com",
				//代理用到了另外的第三方库 http-proxy-middleware 这里的onProxyReq也来自于这里
				//function onProxyReq(proxyReq, req, res) {
				// add custom header to request
				//proxyReq.setHeader('x-added', 'foobar');
				// or log the req
				//https://github.com/chimurai/http-proxy-middleware
				//这里主要是给请求加上了两行记录 这个函数应该在prox的里面
				onProxyReq(proxyReq) {
					proxyReq.setHeader("origin", "https://www.bilibili.com");
					proxyReq.setHeader("referer", "https://www.bilibili.com/");
				}
			},
		
		}
	}
}

