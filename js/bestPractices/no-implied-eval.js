/**
 * Created by apple on 16/11/28.
 */
//禁用隐式的eval()
//此规则目的在于消除使用 setTimeout()、setInterval() 或 execScript() 时隐式的 eval()。
// 因此，当它们中的任何一个使用字符串作为第一个参数时，该规则将发出警告。

//错误 代码示例：

/*eslint no-implied-eval: "error"*/

setTimeout("alert('Hi!');", 100);

setInterval("alert('Hi!');", 100);

execScript("alert('Hi!')");

window.setTimeout("count = 5", 10);

window.setInterval("foo = bar", 10);

//正确 代码示例：

/*eslint no-implied-eval: "error"*/

setTimeout(function() {
    alert("Hi!");
}, 100);

setInterval(function() {
    alert("Hi!");
}, 100);

