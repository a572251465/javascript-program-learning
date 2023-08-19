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

const callback = (fn: (item: Child) => Child) => {
  const instance = fn(new GrandSon())
}

callback((item: Parent) => {
  return new GrandSon()
})

type A = (item: Child) => Child
type B = (item: Parent) => GrandSon

let fn!: A
let fn1!: B

fn = fn1


type Test1 = Parent extends Child ? true : false


type TestFn<T> = (args: T) => any
type Test2 = TestFn<Parent> extends TestFn<Child> ? true : false





















export default {}