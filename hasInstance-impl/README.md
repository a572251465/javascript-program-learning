## instanceof 是否能判断一个基本数据类型

```
 1. Symbol.hasInstance => 这个符号作为一个属性表示 “一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例”
```

```javascript
class PrimitiveNumber {
  // Symbol.hasInstance 用一个符号表示一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例
  static [Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}
```
