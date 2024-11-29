class CurrentProxy {
  get name() {
    return 10;
  }

  set name(age) {
    this.age = age
  }
}


const p = new CurrentProxy();
console.log(p.name)
