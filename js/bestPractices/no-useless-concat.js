/**
 * Created by apple on 16/11/28.
 */
//禁止没有必要的字符拼接

//错误 代码示例：

/*eslint no-useless-concat: "error"*/
/*eslint-env es6*/

// these are the same as "10"
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;

//正确 代码示例：

/*eslint no-useless-concat: "error"*/

// when a non string is included
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
// when the string concatenation is multiline
var c = "foo" +
    "bar";



