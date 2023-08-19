let str = '<div id="container" class="main"></div>';
const regx = /id=".*?"/;
const regx1 = /id="[^"]*"/

console.log(str.match(regx))
console.log(str.match(regx1))