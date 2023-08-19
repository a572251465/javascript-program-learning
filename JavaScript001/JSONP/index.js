function jsonp(keyword) {
  return new Promise((resolve, reject) => {
    // 表示唯一的方法名字
    const fnName = `jsonp${Date.now()}`
    // 设置访问的url
    const url = `https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=${keyword}&callback=${fnName}`

    // 定义一个全局的方法
    window[fnName] = function (data) {
      console.log(data)
      deleteField()
      resolve(data)
    }

    const deleteField = () => {
      Reflect.deleteProperty(window, fnName)
    }

    // 创建script标签
    const script = document.createElement('script')
    script.src = url
    script.onerror = () => {
      deleteField()
      reject()
    }

    document.querySelector('head').appendChild(script)
  })
}
