/**
 * Created by apple on 16/11/25.
 */
//禁止使用空解构模式
//当使用解构赋值时，可能创建了一个不起作用的模式。把空的花括号放在嵌入的对象的解构模式右边时
//此规则目的在于标记出在解构对象和数组中的任何的空模式，每当遇到一个这样的空模式，该规则就会报告一个问题。

/*eslint no-empty-pattern: "error"*/

//var {} = foo;
//var [] = foo;
//var {a: {}} = foo;
//var {a: []} = foo;
//function foo({}) {}
//function foo([]) {}
//function foo({a: {}}) {}
//function foo({a: []}) {}

/*eslint no-empty-pattern: "error"*/

var {a = {}} = foo;
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}

