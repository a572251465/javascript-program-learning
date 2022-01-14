const url = 'http://localhost:3003/#/dutyDetails?isFullScreen=1'

const reg = /([^?#&]+)=([^?#&]+)/gi
console.log(url.match(reg))