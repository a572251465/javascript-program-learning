class baseClass {
  constructor() {
    if (new.target === baseClass) {
      throw new Error('不能实例化')
    }
  }
}

