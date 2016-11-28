/**
 * Created by apple on 16/11/28.
 */
//要求将变量声明放在它们作用域的顶部
//该规则会生成警告，当变量的声明不是在函数作用域顶部或者项目顶部被连续使用时。

/*eslint vars-on-top: "error"*/

// Variable declarations in a block:
function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    var second;
}

// Variable declaration in for initializer:
function doSomething() {
    for (var i=0; i<10; i++) {}
}

/*eslint vars-on-top: "error"*/

// Variables after other statements:
f();
var a;

/*eslint vars-on-top: "error"*/

function doSomething() {
    var first;
    var second; //multiple declarations are allowed at the top
    if (true) {
        first = true;
    }
}

function doSomething() {
    var i;
    for (i=0; i<10; i++) {}
}
