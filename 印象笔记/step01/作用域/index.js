const name = '李四'
function run() {
  const name = '张三'
  return function exec() {
    console.log(name) // 张三
    console.dir(exec)
  }
}

const fn = run()
fn()
