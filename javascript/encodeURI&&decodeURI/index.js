const url = 'http://username:password@www.example.com:80/path/to/file.php哈哈?foo=316&bar=this+has+spaces#anchor'

// 加密
const urlEnCode = encodeURI(url)
console.log(urlEnCode)
// 解密
console.log(decodeURI(urlEnCode))

// 加密
const urlEnCodeComponent = encodeURIComponent(url)
console.log(urlEnCodeComponent)
// 解密
console.log(decodeURIComponent(urlEnCodeComponent))
