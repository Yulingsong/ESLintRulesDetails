/**
 * Created by apple on 16/11/24.
 */

//禁止在 RegExp 构造函数中出现无效的正则表达式

// 在正则表达式字面量中无效的模式在代码解析时会引起 SyntaxError，
// 但是 RegExp 的构造函数中无效的字符串只在代码执行时才会抛出 SyntaxError。

/*eslint no-invalid-regexp: "error"*/

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')

/*eslint no-invalid-regexp: "error"*/

RegExp('.')

new RegExp

this.RegExp('[')



