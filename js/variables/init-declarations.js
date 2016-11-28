/**
 * Created by apple on 16/11/28.
 */
//强制或禁止变量声明语句中初始化
//此规则旨在声明的过程中强制或消除变量在声明时进行初始化

/*
 一个字符串，值为 "always"（默认）强制在声明时进行初始化，
 或 "never" 禁止在声明时进行初始化。
 该规则适用于var、let 和const 变量，然而，
 const 变量会忽略 "never"，因为未赋值的常量（const）会生成一个解析错误。

 一个对象，进一步控制该规则的行为。
 目前，唯一可以的参数是 ignoreForLoopInit ，
 用来表明在设置了 "never" 之后，
 是否允许在 for 循环中变量声明时进行初始化，这是一个典型的用例。
*/

/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    let baz;
}

