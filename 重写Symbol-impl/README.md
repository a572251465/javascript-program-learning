## 重写 Symbol 对 Symbol 部分功能进行实现

1. 重写的重点是：

```
  1. Symbol函数不能通过new来调用
  2. 如果Symbol参数是一个对象，就会调用对象的toString方法，将其转为字符串，才会生成Symbol值
```
