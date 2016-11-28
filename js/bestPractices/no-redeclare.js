/**
 * Created by apple on 16/11/28.
 */
//禁止重新声明变量

//此规则目旨在消除同一作用域中多次声明同一变量。

//错误 代码示例：

/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;

//正确 代码示例：

/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;

//选项 { "builtinGlobals": true } 的 错误 代码示例：

/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;

//在 browser 环境下，选项 {"builtinGlobals": true} 的 错误 代码示例：

/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;

