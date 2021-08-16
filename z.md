<!--
 * @Descripttion:
 * @Author: SUI
 * @Date: 2021-08-16 19:01:41
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-16 19:26:21
 * @FilePath: \mall-gitee\z.md
-->

# Project Configuration

## Project install

### `element-ui`

#### `Vue 2`

```
npm i element-ui -S
// 按需引入
npm install babel-plugin-component -D
```

`main.js`

```javascript
// 按需引入 element
import './plugins/element'
```

`babel.config.js`

```javascript
module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
```

#### `Vue 3`

```
npm install element-plus --save
```

### `axios`

```
npm i axios -S

// 导航进度条
npm install --save nprogress
```

## 效果

http://gl.timemeetyou.com/#/login
