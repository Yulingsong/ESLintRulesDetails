/**
 * Created by apple on 16/11/25.
 */
//要求使用一致的 return 语句
//不像静态类型语言强制要求函数返回一个指定类型的值，
// JavaScript 允许在一个函数中不同的代码路径返回不同类的值。
//JavaScript 中令人感到困惑的一面是：在以下情况下函数返回 undefined ：

//在退出之前没有执行 return 语句
//执行 return 语句，但没有显式地指定一个值
//执行 return undefined
//执行 return void，其后跟着一个表达式 (例如，一个函数调用)
//执行 return，其后跟着其它等于 undefined 的表达式

//在一个函数中，如果任何代码路径显式的返回一个值，
// 但一些代码路径不显式返回一个值，那么这种情况可能是个书写错误，
// 尤其是在一个较大的函数里。

// 该规则要求 return 语句要么总是要么从不指定值。
// 该规则忽略名称首字母大写的函数定义，
// 因为构造函数（当使用 new 操作符调用时）
// 如果不显式地返回另一对象，则会隐式地返回实例化的对象。

//错误代码
//function doSomething(condition) {
//    if (condition) {
//        return true;
//    } else {
//        return;
//    }
//}
//
//function doSomething(condition) {
//    if (condition) {
//        return true;
//    }
//}

/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": false }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    // no return statement
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    // no return statement
}

/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    return true;
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    return true;
}

//如果你想要允许函数根据代码分支有不同的return行为，可以禁用此规则。


//正确
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
}
