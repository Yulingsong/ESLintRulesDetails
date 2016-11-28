/**
 * Created by apple on 16/11/28.
 */
//禁止在全局范围使用变量和函数声明
//该规则禁止在顶级作用域下使用 var 和命名的 function 声明。
// 该规则不适用于 ES 和 CommonJS 的模块，因为它们有自己的模块作用域。

/*eslint no-implicit-globals: "error"*/

var foo = 1;

function bar() {}


