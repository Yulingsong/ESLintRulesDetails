/**
 * Created by apple on 16/11/24.
 */
//禁止在嵌套的语句块中出现变量或 function 声明

/*
* 在 ES6 之前的 JavaScript 中，
* 函数声明只能在程序或另一个函数体的顶层，
* 尽管解析器有时会错误地接受它们。
* 这只适用于函数声明；命名的或匿名的函数表达式是可以出现在任何允许的地方。
* */

//该规则要求函数声明和变量声明（可选的）在程序或函数体的顶部。

/*eslint no-inner-declarations: "error"*/

if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}


/*eslint no-inner-declarations: "error"*/

function doSomething() { }

function doSomethingElse() {
    function doAnotherThing() { }
}

if (test) {
    asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
    fn = function fnExpression() { };
}


/*eslint no-inner-declarations: ["error", "both"]*/

if (test) {
    var foo = 42;
}

function doAnotherThing() {
    if (test) {
        var bar = 81;
    }
}

/*eslint no-inner-declarations: "error"*/
/*eslint-env es6*/

var bar = 42;

if (test) {
    let baz = 43;
}

function doAnotherThing() {
    var baz = 81;
}

