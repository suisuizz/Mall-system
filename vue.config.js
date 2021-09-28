/*
 * @Descripttion: webpack 配置
 * @Author: SUI
 * @Date: 2021-08-15 09:02:21
 * @LastEditors: SUI
 * @LastEditTime: 2021-09-28 23:06:10
 * @FilePath: \mall-system-gitee\vue.config.js
 */
module.exports = {
	lintOnSave: false,
	productionSourceMap: false,

	chainWebpack: config => {
		// 发布模式
		config.when(process.env.NODE_ENV === 'production', config => {
			config.entry('app').clear().add('./src/main-prod.js')

			config.set('externals', {
				vue: 'Vue',
				'vue-router': 'VueRouter',
				axios: 'axios',
				lodash: '_',
				echarts: 'echarts',
				nprogress: 'NProgress',
				'vue-quill-editor': 'VueQuillEditor'
			})

			// config.plugin('html').tap(args => {
			// 	args[0].isProd = true
			// 	return args
			// })
		})

		// 开发模式 
		config.when(process.env.NODE_ENV === 'development', config => {
			config.entry('app').clear().add('./src/main-dev.js')
			// config.plugin('html').tap(args => {
			// 	args[0].isProd = false
			// 	return args
			// })
		})
	}


	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			//代理api
	// 			target: 'http://www.ysqorz.top:8888/api/private/v1/', // 代理接口(注意只要域名就够了)
	// 			changeOrigin: true, //是否跨域
	// 			ws: true, // proxy websockets
	// 			pathRewrite: {
	// 				//重写路径
	// 				'^': '/api' //代理路径
	// 			}
	// 		}
	// 	}
	// }
};