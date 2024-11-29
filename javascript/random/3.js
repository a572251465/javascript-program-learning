class User {
  constructor() {
    throw new Error("我报错了")
  }

  static getInstance() {
    return new User();
  }
}

User.getInstance();
// const user = new User();
