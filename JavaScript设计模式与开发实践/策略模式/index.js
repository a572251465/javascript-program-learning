// bad example

const computedBonus = (label, salary) => {
  if (label === 'S') return salary * 5
  if (label === 'A') return salary * 4
  if (label === 'B') return salary * 2
}

// good example
const computedBonus1 = (label, salary) => {
  const obj = {
    S: (salary) => salary * 5,
    B: (salary) => salary * 4,
    A: (salary) => salary * 3
  }

  if (obj[label]) return obj[label](salary)
}
