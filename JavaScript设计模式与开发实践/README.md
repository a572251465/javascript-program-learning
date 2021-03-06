## 设计模式五大原则
  - 单一职责原则
    - SRP
    - 就一个类而言，应该仅有一个引起它变化的原因。简而言之，就是功能要单一
  - 开放-封闭原则
    - OCP
    - 就是说软件实体(类，方法等等)应该可以扩展，但是不能修改
  - 依赖倒转原则
    - DIP
    - 抽象不应该依赖细节，细节应该依赖于抽象。简单说就是，我们要针对接口编程，而不要针对实现编程
  - 里氏替换原则
    - LSP
    - 子类型必须能够替换掉它们的父类型。简单地说，这是因为子类型继承了父类，所以子类可以以父类的身份出现
  - 迪米特法则
    - LOD
    - 如果两个类不必彼此直接通信，那么这两个类就不应当直接的相互作用。如果其中一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用