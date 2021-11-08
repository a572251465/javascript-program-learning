## 实现迭代器 以及 for...of

### for...of 的注意事项

```
1. 判断Symbol.iterator 是否是函数
2. 执行Symbol.iterator函数，返回对象，对象中包含next方法
3. 循环递归调用next函数，依次判断next 以及done
```

### 迭代器实现原理

```
1. 返回一个对象，对象中函数着next函数
2. 执行next函数，返回一个对象，对象中函数两个属性<value> 以及<done>
```
