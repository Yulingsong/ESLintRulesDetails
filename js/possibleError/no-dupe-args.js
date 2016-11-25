/**
 * Created by apple on 16/11/24.
 */
//禁止在 function 定义中出现重复的参数

/*
* 如果在一个函数定义中出现多个同名的参数，
* 后面出现的会覆盖前面出现的参数。重复的名称可能是一个打字错误。
*
*
* */

/*eslint no-dupe-args: "error"*/

function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};

/*eslint no-dupe-args: "error"*/

function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};

