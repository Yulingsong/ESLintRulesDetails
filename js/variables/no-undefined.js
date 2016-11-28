/**
 * Created by apple on 16/11/28.
 */
//不允许使用undefined变量
//undefined 变量在 JavaScript 中是独一无二的，
// 因为它实际上是一个全局对象属性
// 。在 ECMAScript 3 中，可重写 undefined 的值，
// 然而 ECMAScript 5 不允许重写 undefined
// ，但仍然可能遮盖原来的 undefined，例如：
//这表明 undefined 存在一个问题，这个问题在 null 中不存在，
// null 是一个关键字，也是一个原始属性值，既不能被重写也不可被覆盖。
//所有未初始化的变量自动获得 undefined 为值。