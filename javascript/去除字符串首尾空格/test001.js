function strFormat(str, ...args) {
    let index = 0;
    const str1 = str.replace(/%s/gi, () => {
        return args[index++]
    });
    return str1;
}

console.log(strFormat("%s, 我是%s, 我就是要%s", "hello", "lihh", "eat"))