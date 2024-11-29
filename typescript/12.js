function join(...args) {
    return args.reduce((memo, curr) => {
        const str = typeof curr === "string" ? (curr) : JSON.stringify(curr);
        return (memo + str);
    }, "");
}

console.log(join(null, 11, 22, {}))
