/**
 * Created by apple on 16/11/28.
 */
// 禁用迭代器

// 此规则目的在于防止因使用 __iterator__属性而出现的错误，
// 并不是所有浏览器都实现了这个属性。
// 因此，当遇到 __iterator__属性时，该规则将会发出警告。