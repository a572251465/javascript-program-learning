const arr = [2, 8, 4, 6]

const res = arr.every(item => item % 2 === 0)
console.log(res);

function every(arr, callback, _this) {
  if (!Array.isArray(arr) || typeof callback !== "function") return false

  let prevResult = true
  _this = _this || this

  for (let i = 0; i < arr.length; i++)
    prevResult = prevResult && callback.call(_this, arr[i])

  return prevResult;
}

const res1 = every(arr, item => item % 2 === 0)
console.log(res1);
