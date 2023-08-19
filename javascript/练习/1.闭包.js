function test01() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

// test01() // 5 5 5 5 5
function test02() {
  for (var i = 0; i < 5; i++) {
    {
      let j = i
      setTimeout(() => {
        console.log(j)
      }, 1000)
    }
  }
}

// test02()

function test03() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

test03()