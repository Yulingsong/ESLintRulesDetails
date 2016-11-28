/**
 * Created by apple on 16/11/28.
 */
//禁用未声明的变量
// 此规则可帮助你定位由变量漏写、
// 参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误
// （比如，在 for 循环语句中初始化变量忘写 var 关键字）
//对任何未声明的变量的引用都会引起一个警告，除非显式地在 /*global ...*/ 注释中指定。

/*eslint no-undef: "error"*/

//var a = someFunction();
//b = 10;

/*global someFunction b:true*/
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;



