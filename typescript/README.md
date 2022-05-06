## 学习点
- string/ String学习点
  - string是基本类型。 String是包装对象类型
  - `string`是`String`的实例，所以可以赋值 `let b:String = '2'`. 但是返过来不能赋值
```ts
let a: string = '1' // √
let b: String = '2' // √

let c: string = new String('4') // √
let d: string = new String('4') // ×
```

- never学习点
  - never是任何类型的子类
```ts
  function fn(): never {
    while(true) {}
  }

  let test1: never = fn()
  let a: number = test1
```

- 练习地址
`https://gitee.com/martsforever-study/typescript-practice/tree/master/exercises`

`https://github.com/semlinker/awesome-typescript/issues`
