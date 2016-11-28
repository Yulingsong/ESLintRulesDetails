/**
 * Created by apple on 16/11/28.
 */

//要求必须有基数

/*
 当使用parseInt()函数时，通常省略第二个参数，基数，并根据第一个参数确定它是什么类型的数字。 默认情况下，parseInt()将自动检测十进制和十六进制(通过0x前缀)。在ECMAScript 5 之前，parseInt()也自动检测八进制文本，这会出现问题，因为许多开发人员认为前导0会被忽略。

 由于这种混乱，所以建议在parseInt()中始终使用基数以消除意想不到的后果。因此，不要这么做:

*/

var num = parseInt("071");      // 57
console.log(num);
var num2 = parseInt("071", 10);  // 71
console.log(num2);


/*eslint radix: "error"*/

var num = parseInt("071");

var num = parseInt(someValue);

var num = parseInt("071", "abc");

var num = parseInt();

