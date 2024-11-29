const mergeNextHandler = (readIdx, source, res, total) => {
  if (readIdx === source.length) {
    total.push(res.join('&'))
    return
  }

  const currArr = source[readIdx]
  for (const item of currArr) {
    const newRes = [...res, item]
    mergeNextHandler(readIdx + 1, source, newRes, total)
    newRes.pop()
  }
}

const rs = []
mergeNextHandler(
  0,
  [
    ['a'],
  ],
  [],
  rs
)
console.log(rs)
