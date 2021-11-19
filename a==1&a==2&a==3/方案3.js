var a = [1, 2, 3]
a.toString = a.shift

// 其实就是利用toString调用 + shift删除的原则
if (a == 1 && a == 2 && a == 3) {
  console.log('相等了')
}
