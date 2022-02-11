var fib = function (n) {
  const MOD = 1000000007
  if (n < 2) {
    return n
  }
  let p = 0,
    // base value
    q = 0,
    r = 1
  for (let i = 2; i <= n; ++i) {
    p = q
    q = r
    r = (p + q) % MOD
  }
  return r
}
