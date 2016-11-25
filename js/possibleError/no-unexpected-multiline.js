/**
 * Created by apple on 16/11/24.
 */
//禁止使用令人困惑的多行表达式

//在 JavaScript 中，分号通常是可选的，因为会自动插入分号（ASI)。你可以使用 semi 规则要求或禁止分号。
//ASI 的规则是相对简单的：正如 Isaac Schlueter 曾经描述的那样，一个 \n 字符总是一个语句的结尾(像分号一样)，除非下面之一为真：

/*
 该语句有一个没有闭合的括号，数组字面量或对象字面量或其他某种方式，不是有效结束一个语句的方式。（比如，以 . 或 , 结尾）
 该行是 -- 或 ++（在这种情况下它将减量/增量的下一个标记）
 它是个 for()、while()、do、if() 或 else，并且没有 {
 下一行以 [、(、+、*、/、-、,、. 或一些其它在单个表达式中两个标记之间的二元操作符。
*/


//var foo = bar
//(1 || 2).baz();
//
//var hello = 'world'
//    [1, 2, 3].forEach(addNumber);
//
//let x = function() {}
//    `hello`
//
//let x = function() {}
//x
//    `hello`

/*eslint no-unexpected-multiline: "error"*/

var foo = bar;
(1 || 2).baz();

var foo = bar
    ;(1 || 2).baz()

var hello = 'world';
[1, 2, 3].forEach(addNumber);

var hello = 'world'
void [1, 2, 3].forEach(addNumber);

let x = function() {};
`hello`

let tag = function() {}
tag `hello`

