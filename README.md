# default

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
dist文件夹 的作用是 运行rpm run bulider之后生成的 这个文件夹就是最后的放到生产环境的
node_modules文件夹 放置了这个请求所有的依赖 模块
public 公用文件夹 放置了icon
src文件夹 为源码文件夹 主要代码写在这里面
	assets 静态文件的文件夹 图片等
	components 组件文件夹 把所有的组件都创建在这里面
	services 请求文件夹 主要是js 把向对外的请求都封装起来放在这里
	App.vue  项目对的主页面 单页面模式 这个也是进入项目的唯一入口
	main.js 主页面对应的js文件 会先调用这个js来渲染主页面
package-lock.js 配置文件夹 如果出现了node_modules文件夹的丢失 可以使用npm install 方法按照这个js文件恢复
vue.config.js 是vue-cli的配置文件 主要就是webpack的配置文件 目前只在其中配置了开发服务器的代理部分的配置
```
