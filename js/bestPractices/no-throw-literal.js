/**
 * Created by apple on 16/11/28.
 */
//限制可以被抛出的异常

/*
 仅仅 抛出(throw) Error 对象本身或者用户自定义的以 Error 对象为基础的异常
 ，被认为是一个很好的实践。
 使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。
 此规则限制了能被抛出的异常。
 当初次被创建时，它只是阻止字面量被抛出，
 但是现在已经被扩展到只允许具有 Error 对象能力的表达式。
* */

//错误 代码示例：

/*eslint no-throw-literal: "error"*/
/*eslint-env es6*/

throw "error";

throw 0;

throw undefined;

throw null;

var err = new Error();
throw "an " + err;
// err is recast to a string literal

var err = new Error();
throw `${err}`

//正确 代码示例：

/*eslint no-throw-literal: "error"*/

throw new Error();

throw new Error("error");

var e = new Error("error");
throw e;

try {
    throw new Error("error");
} catch (e) {
    throw e;
}

