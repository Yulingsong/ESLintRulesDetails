/**
 * Created by apple on 16/11/24.
 */
//禁用不必要的分号

/*
* 命令行中的 --fix 选项可以自动修复该规则报告的问题。
 书写错误和对哪里需要使用分号的误解，会导致出现不必要的分号。
 虽然在技术上不是个错误，但阅读代码时会引起困惑。
* */


/*eslint no-extra-semi: "error"*/

//var x = 5;;
//
//function foo() {
//    // code
//};

/*eslint no-extra-semi: "error"*/

var x = 5;

var foo = function() {
    // code
};
