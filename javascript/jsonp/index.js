/**
 * @author lihh
 * @description 表示jsonp的实现
 * @param {*} url 传递的url
 * @param {*} keyword 关键字
 * @returns 如果做生产包 还是需要改造的
 */
function jsonp(url, keyword) {
  return new Promise((resolve, reject) => {
    // 每次jsonp的函数名字都是随机的
    const funName = `jsonp${(Math.random() * 100000) | 0}${+new Date()}`
    keyword = keyword || '伏天氏'
    // 请求的url 必须包含callback参数，参数函数必须是全局的，这个将是回调函数
    url = url || `https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=${keyword}&callback=${funName}`
    // 其实jsonp的原理就是利用了script无跨域限制的特性
    const script = document.createElement('script')
    script.src = url

    // 表示回调函数，之后删除window额外添加的数据
    window[funName] = function (event) {
      resolve(event)
      Reflect.deleteProperty(window, funName)
    }
    script.onerror = reject

    // 添加到head 进行加载
    document.querySelector('head').appendChild(script)
  })
}

jsonp()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
