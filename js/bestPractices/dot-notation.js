/**
 * Created by apple on 16/11/25.
 */
/*
 要求使用点号
 命令行中的 --fix 选项可以自动修复该规则报告的问题。
 在 JavaScript 中，你可以使用点号 (foo.bar) 或者方括号 (foo["bar"])来访问属性。
 然而，点号通常是首选，因为它更加易读，简洁，也更适于 JavaScript 压缩。
*/

//["bar"] is better written in dot notation
var x = foo.bar;

var foo = { "class": "CS 101" }
var x = foo["class"];

//例如，当把准备好的数据发送到外部接口时，
// 经常要求使用包括下划线的属性名。
// 如果启用了 camelcase 规则，这些 snake case 属性将不被允许使用。
// 通过给 dot-notation 规则提供 allowPattern 选项，这些属性就可以使用括号来访问了。
var data = {};
data.foo_bar = 42;

var data = {};
data["fooBar"] = 42;

var data = {};
data["foo_bar"] = 42; // no warning