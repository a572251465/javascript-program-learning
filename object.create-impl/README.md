## Object.create 实现原理

### 1. Object.create是干什么的？？
    1. 为了克隆一个继承与proto(参数)的对象
    2. 如果参数是null，将会克隆出一个全新的，没有任何链指向的对象
### 2. 实现步骤
    1. const Fn = function () {} -- 创建一个函数
    2. Fn.prototype = proto -- 函数的prototype指向参数proto
    3. return new Fn -- 返回实例
### 3. 应用场景
    1. js实现经典继承的时候，prototype实现继承是通过Object.create来实现的
