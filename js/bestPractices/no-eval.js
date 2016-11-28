/**
 * Created by apple on 16/11/28.
 */

//禁用eval()
// JavaScript 中的 eval() 函数是有潜在危险的，
// 而且经常被误用。在不可信的代码里使用 eval() 有可能使程序受到不同的注入攻击。
// eval() 在大多数情况下可以被更好的解决问题的方法代替
    /*
    var obj = { x: "foo" },
        key = "x",
        value = eval("obj." + key);
    console.log(value);
    */

// 此规则目的在于通过禁止使用 eval() 函数来避免潜在地危险、
// 不必要的和运行效率低下的代码。
// 因此，当时使用 eval() 函数时，该规则将发出警告。

/*eslint no-eval: "error"*/
//eval can be harmful
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
window.eval("var a = 0");

/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");

