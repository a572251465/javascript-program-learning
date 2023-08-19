class Parent {
  public house() {
    return 'house'
  }
}

class Child extends Parent {
  public cat() {
    return 'cat'
  }
}

class GrandSon extends Child {
  public sleep() {
    return 'sleep'
  }
}

const fn = (callback: (item: Child) => void): Child => {
  callback(new GrandSon())
  return new GrandSon()
}

fn(function (item: Parent) {
  item.house()
})

type AType<T> = (...args: T[]) => any
type BType<T> = (...args: any[]) => T
type isA = AType<Parent> extends AType<Child> ? true : false
type isB = BType<GrandSon> extends BType<Parent> ? true : false


// 逆变：父传子
// 协变：子返回父

export default {}
