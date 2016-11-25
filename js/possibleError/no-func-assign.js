/**
 * Created by apple on 16/11/24.
 */
//禁止对 function 声明重新赋值

/*
*
* JavaScript 函数有两种形式：函数声明 function foo() { ... }
* 或者函数表达式 var foo = function() { ... } 。
* 虽然 JavaScript 解释器可以容忍对函数声明进行覆盖或重新赋值，
* 但通常这是个错误或会导致问题出现。
* */

/*eslint no-func-assign: "error"*/

//function foo() {}
//foo = bar;
//
//function foo() {
//    foo = bar;
//}


/*eslint no-func-assign: "error"*/

//foo = bar;
//function foo() {}

/*eslint no-func-assign: "error"*/

var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
    foo = bar;
}

function foo() {
    var foo = bar;  // `foo` is shadowed.
}





