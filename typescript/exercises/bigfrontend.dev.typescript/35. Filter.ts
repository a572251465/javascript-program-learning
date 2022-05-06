type Filter<T, K, R extends any[] = []> = T extends [infer A, ...infer B]
  ? unknown extends A
    ? Filter<B, K, [...R, A]>
    : A extends K
    ? Filter<B, K, [...R, A]>
    : Filter<B, K, R>
  : R

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']

export default {}
