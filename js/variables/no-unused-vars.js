/**
 * Created by apple on 16/11/28.
 */
// 禁止未使用过的变量
// 已声明的变量在代码里未被使用过，
// 就像是由于不完整的重构而导致的遗漏错误。
// 这样的变量增加了代码量，并且混淆读者。


//此规则旨在消除未使用过的变量，方法和方法中的参数名，当发现这些存在，发出警告。

//符合下面条件的变量被认为是可以使用的:

    //作为回调函数
//被读取 (var y = x)
//传入函数中作为argument对象(doSomething(x))
//在传入到另一个函数的函数中被读取
//
//一个变量仅仅是被赋值为 (var x = 5) 或者是被声明过，则认为它是没被考虑使用。
//
//错误 代码示例：

/*eslint no-unused-vars: "error"*/
/*global some_unused_var*/

// It checks variables you have defined as global
some_unused_var = 42;

var x;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// By default, unused arguments cause warnings.
(function(foo) {
    return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

//正确 代码示例：

/*eslint no-unused-vars: "error"*/

var x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();

var myFunc;
myFunc = setTimeout(function() {
    // myFunc is considered used
    myFunc();
}, 50);

//exported
//
//在 CommonJS 或者 ECMAScript 模块外部，可用 var创建一个被其他模块代码引用的变量。你也可以用 /* exported variableName */ 注释快表明此变量已导出，因此此变量不会被认为是未被使用过的。
//
//需要注意的是 /* exported */ 在下列情况下是无效的：
//
//node 或 commonjs 环境
//parserOptions.sourceType 是 module
//ecmaFeatures.globalReturn 为 true
//
//Options
//
//该规则接受一个字符串或者对像类型的参数。字符串设置正如同 vars 一样（如下所示）。
//
//配置项的默认值，变量选项是 all，参数的选项是 after-used 。

//{
//    "rules": {
//    "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }]
//}
//}

//vars
//
//此配置项有两个值：
//
//all 检测所有变量，包括全局环境中的变量。这是默认值。
//local 仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量。
//
//vars: local
//
//选项 { "vars": "local" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */

some_unused_var = 42;

//varsIgnorePattern
//
//这个 varsIgnorePattern 选项指定了不需要检测的异常：变量名称匹配正则模式。例如，变量的名字包含 ignored 或者 Ignored。
//
//选项 { "varsIgnorePattern": "[iI]gnored" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]*/

var firstVarIgnored = 1;
var secondVar = 2;
console.log(secondVar);

//args
//
//args 选项有三个值：
//
//after-used - 最后一个参数必须使用。如：一个函数有两个参数，你使用了第二个参数，ESLint 不会报警告。
//all - 所有命名参数必须使用。
//none - 不检查参数。
//
//args: after-used
//
//选项 { "args": "after-used" } 的 错误 代码示例：

/*eslint no-unused-vars: ["error", { "args": "after-used" }]*/

// 1 error
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();

//选项 { "args": "after-used" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", {"args": "after-used"}]*/

(function(foo, bar, baz) {
    return baz;
})();

//args: all
//
//选项 { "args": "all" } 的 错误 代码示例：

/*eslint no-unused-vars: ["error", { "args": "all" }]*/

// 2 errors
// "foo" is defined but never used
// "baz" is defined but never used
(function(foo, bar, baz) {
    return bar;
})();

//args: none
//
//选项 { "args": "none" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "args": "none" }]*/

(function(foo, bar, baz) {
    return bar;
})();

//argsIgnorePattern
//
//argsIgnorePattern 选项指定排除不需要检测：这些参数的名字符合正则匹配。例如，下划线开头的变量。
//
//选项 { "argsIgnorePattern": "^_" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

function foo(x, _y) {
    return x + 1;
}
foo();

//caughtErrors
//
//caughtErrors 选项被用来验证 catch 块的参数。
//
//它有两个设置：
//
//none - 不检查错误对象。这是默认设置。
//all - 所有参数必须被使用。
//
//caughtErrors: none
//
//没有指定该规则，相当于将它赋值为 none。
//
//选项 { "caughtErrors": "none" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "caughtErrors": "none" }]*/

try {
    //...
} catch (err) {
    console.error("errors");
}

//caughtErrors: all
//
//选项 { "caughtErrors": "all" } 的 错误 代码示例：

/*eslint no-unused-vars: ["error", { "caughtErrors": "all" }]*/

// 1 error
// "err" is defined but never used
try {
    //...
} catch (err) {
    console.error("errors");
}

//caughtErrorsIgnorePattern
//
//caughtErrorsIgnorePattern 选项指定例外情况，不会检查匹配正则表达式 catch 参数。例如，名字以 ‘ignore’ 开头的变量。
//
//选项 { "caughtErrorsIgnorePattern": "^ignore" } 的 正确 代码示例：

/*eslint no-unused-vars: ["error", { "caughtErrorsIgnorePattern": "^ignore" }]*/

try {
    //...
} catch (ignoreErr) {
    console.error("errors");
}

