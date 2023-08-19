const str = "  12 34  ";
const str1 = "  12 34  ";
const str2 = "   125 34  ";

console.log(str.replace(/^\s+|\s+$/g, ""))
console.log(str1.match(/(\S[\s\S]*\S)/))
console.log(str2.replace(/^\s*(.*?)\s*$/, "$1"))