// 驼峰命名转横杠命名

type KebabCase<T, S extends string = ''> = T extends `${infer L}${infer R}` ? (
  Uppercase<L> extends L ? KebabCase<R, `${S extends '' ? S : `${S}-`}${Lowercase<L>}`> : KebabCase<R, `${S}${L}`>
) : S

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag

export default {}
