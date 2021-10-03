/*
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-09-26 23:37:02
 * @LastEditors: SUI
 * @LastEditTime: 2021-10-03 18:55:49
 * @FilePath: \mall-system-gitee\babel.config.js
 */
// 这是在项目发布阶段需要用到的babel插件
const prodPlugins = []

// 判断是发布模式
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时候的插件组件
    ...prodPlugins,
    // 路由懒加载配置
    '@babel/plugin-syntax-dynamic-import'
  ]
}