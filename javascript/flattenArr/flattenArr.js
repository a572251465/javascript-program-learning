const flattenArr = (values) => {
  return values.reduce(
    (memo, curr) => memo.concat(Array.isArray(curr) ? flattenArr(curr) : curr),
    []
  )
}

console.log(flattenArr([1, 2, 3, [3, 4, 5, [5, 6]]]))
