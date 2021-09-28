/*
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-15 10:58:17
 * @LastEditors: SUI
 * @LastEditTime: 2021-09-28 23:12:59
 * @FilePath: \mall-system-gitee\src\api\index.js
 */
// 配置API接口地址
let root = "http://www.ysqorz.top:8888/api/private/v1/";
// let root = "http://timemeetyou.com:8889/api/private/v1/";
// 引用 axios
let axios = require("axios");

// 自定义判断元素类型JS
function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === "string") {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === "object") {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === "array") {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}

function apiAxios(method, url, params, success) {
  if (params) {
    params = filterNull(params);
  }
  axios({
      method: method,
      url: url,
      data: method === "POST" || method === "PUT" ? params : null,
      params: method === "GET" || method === "DELETE" ? params : null,
      baseURL: root,
      withCredentials: false,
    })
    .then(function (res) {
      // console.log("DATA", JSON.stringify(res.data));
      if (res.status == 200) {
        success(res.data);
      }
    })
    .catch(function (res) {
      console.log("catch", res);
      success(res);
    });
}

// 返回在vue模板中的调用接口
export default {
  root: root,
  get: function (url, params, response) {
    return apiAxios("GET", url, params, response);
  },
  post: function (url, params, response) {
    return apiAxios("POST", url, params, response);
  },
  put: function (url, params, response) {
    return apiAxios("PUT", url, params, response);
  },
  delete: function (url, params, response) {
    return apiAxios("DELETE", url, params, response);
  },
};