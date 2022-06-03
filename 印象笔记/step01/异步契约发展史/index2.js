async function test() {
  console.log('111')
  const res = await '222'
  console.log(res)
  const res1 = await Promise.resolve('555')
  console.log(res1)
  console.log('333')
}

test()
console.log('444')

async function foo() {
  console.log(2)
  console.log(await Promise.resolve(8))
  console.log(9)
}

async function bar() {
  console.log(4)
  console.log(await 6)
  console.log(7)
}
console.log(1)
foo()
console.log(3)
bar()
console.log(5)

// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 运行时会像这样执行上面的例子：
// (1) 打印 1；
// (2) 调用异步函数 foo()；
// (3)（在 foo()中）打印 2；
// (4)（在 foo()中）await 关键字暂停执行，向消息队列中添加一个期约在落定之后执行的任务；
// (5) 期约立即落定，把给 await 提供值的任务添加到消息队列；
// (6) foo()退出；
// (7) 打印 3；
// (8) 调用异步函数 bar()；
// (9)（在 bar()中）打印 4；
// (10)（在 bar()中）await 关键字暂停执行，为立即可用的值 6 向消息队列中添加一个任务；
// (11) bar()退出；
// (12) 打印 5；
// (13) 顶级线程执行完毕；
// (14) JavaScript 运行时从消息队列中取出解决 await 期约的处理程序，并将解决的值 8 提供给它；
// (15) JavaScript 运行时向消息队列中添加一个恢复执行 foo()函数的任务；
// (16) JavaScript 运行时从消息队列中取出恢复执行 bar()的任务及值 6；
// (17)（在 bar()中）恢复执行，await 取得值 6；
// (18)（在 bar()中）打印 6；
// (19)（在 bar()中）打印 7；
// (20) bar()返回；
// (21) 异步任务完成，JavaScript 从消息队列中取出恢复执行 foo()的任务及值 8；
// (22)（在 foo()中）打印 8；
// (23)（在 foo()中）打印 9；
// (24) foo()返回。
