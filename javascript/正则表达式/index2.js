var regex = /(?:ab)+/g;
var regex1 = /(ab)+/g;
var string = "ababa abbb ababab";
var string1 = "ababa abbb ababab";
console.log( string.match(regex) );
console.log( string1.match(regex1) );

