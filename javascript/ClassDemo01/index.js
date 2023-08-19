class Base {
  start() {
    console.log('开始起床')
  }

  preparation() {
    console.log('准备工作')
  }

  end() {
    console.log('准备出门')
  }

  callHook() {
    this.start()
    this.preparation()
    this.end()
  }
}

class Sub01 extends Base {
  preparation() {
    console.log('只有洗漱')
  }
}

class Sub02 extends Base {
  preparation() {
    console.log('洗漱 以及化妆')
  }
}

const sub01 = new Sub01()
const sub02 = new Sub02()
sub01.callHook() // 1. 开始起床 2. 只有洗漱 3. 准备出门
sub02.callHook() // 1. 开始起床 2. 洗漱  以及化妆 3. 准备出门
