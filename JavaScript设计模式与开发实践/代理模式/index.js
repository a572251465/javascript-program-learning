const myImage = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function () {
  const img = new Image()
  img.onload = function () {
    // 真实的图片 load成功后 再渲染
    myImage.setSrc(this.src)
  }

  return {
    setSrc(src) {
      // 先加载 loading图片
      myImage.setSrc('xxxx')
      img.src = src
    }
  }
})()

proxyImage.setSrc('yyy')
