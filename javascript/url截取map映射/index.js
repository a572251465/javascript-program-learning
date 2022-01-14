let url = 'http://www.zhufengpeixun.cn/?lx=1&from=wx#video'

const queryParams = (url) => {
  const selfObj = {}
  url.replace(/[^?&#]+=[^?&#]+/gi, (e) => {
    if (e && e.includes('=')) {
      const [key, value] = e.split('=')
      if (!Reflect.has(selfObj, key)) selfObj[key] = value
    }
  })

  if (url.includes('#')) {
    const localIndex = url.indexOf('#')
    selfObj['hash'] = url.slice(localIndex + 1)
  }
  return selfObj
}

console.log(queryParams(url))
