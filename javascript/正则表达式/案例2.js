const regx = /^(0[1-9]|1[1-9]|2[0-4]):([0-5][0-9])$/
console.log( regx.test("23:59") );
console.log( regx.test("02:07") );
