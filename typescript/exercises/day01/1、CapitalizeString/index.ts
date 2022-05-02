type Index<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : never
// 首字母大写

type a1 = Index<'handler'>       // Handler
type a2 = Index<'parent'>        // Parent
type a3 = Index<233>             // 233

export {}
