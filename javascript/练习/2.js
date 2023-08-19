class Person {
  add = () => {
    console.log(this)
  }

  add1 = function () {
    console.log(this)
  }
}

const p = new Person();
p.add();
p.add1();

const test =  {
  name: "lihh",
  obj: () => {
    return  {
      a: function () {
        console.log(this, "a")
      },
      b: () => {
        console.log(this, "b")
      }
    }
  }
}

test.obj().b();
