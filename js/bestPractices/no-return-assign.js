/**
 * Created by apple on 16/11/28.
 */
//禁止在返回语句中赋值

/*
* 此规则带有一个字符串选项，它必须包含下列值之一：
 except-parens（默认）：禁止出现赋值语句，除非使用括号把它们括起来。
 always：禁止所有赋值

 * */
//默认选项 "except-parens" 的 错误 代码示例：

/*eslint no-return-assign: "error"*/

function doSomething() {
    return foo = bar + 2;
}

function doSomething() {
    return foo += 2;
}

//默认选项 "except-parens" 的 正确 代码示例：

/*eslint no-return-assign: "error"*/

function doSomething() {
    return foo == bar + 2;
}

function doSomething() {
    return foo === bar + 2;
}

function doSomething() {
    return (foo = bar + 2);
}

always

//此选项禁止 return 中所有的赋值。所有的赋值均被认为是有问题的。

//选项 "always" 的 错误 代码示例：

/*eslint no-return-assign: ["error", "always"]*/

function doSomething() {
    return foo = bar + 2;
}

function doSomething() {
    return foo += 2;
}

function doSomething() {
    return (foo = bar + 2);
}

//选项 "always" 的 正确 代码示例：
//
/*eslint no-return-assign: ["error", "always"]*/

function doSomething() {
    return foo == bar + 2;
}

function doSomething() {
    return foo === bar + 2;
}

