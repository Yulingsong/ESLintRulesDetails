/**
 * Created by apple on 16/11/28.
 */
///禁用Function构造函数


//错误 代码示例：

/*eslint no-new-func: "error"*/

var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");

//正确 代码示例：

/*eslint no-new-func: "error"*/

var x = function (a, b) {
    return a + b;
};


