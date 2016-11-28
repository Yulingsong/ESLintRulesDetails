/**
 * Created by apple on 16/11/28.
 */
//禁止使用魔术数字

//魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。
//该规则旨在确保将具体的数字声明为意义明确的常量，从而使代码更加可读并且易于重构。
//错误 代码示例：

/*eslint no-magic-numbers: "error"*/

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);

/*eslint no-magic-numbers: "error"*/

var data = ['foo', 'bar', 'baz'];

var dataLast = data[2];

/*eslint no-magic-numbers: "error"*/

var SECONDS;

SECONDS = 60;

//正确 代码示例：

/*eslint no-magic-numbers: "error"*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);

//一个数字数组，指定检测中可以忽略的数字。默认为 []。如果设置该选项，它必须是 Array。
//一个布尔值，指定数字用作数组的索引是否是可以的。默认为 false。
///一个布尔值，指定是否应该在数字变量的声明中检测 const 关键字。默认为false
//一个布尔值，指定是否应该在设置对象属性时检测数字。默认为 false。