/**
 * Created by apple on 16/11/28.
 */
//禁止未使用过的表达式

//此规则的目的在于消除未使用过的表达式，它们在程序中不起任何作用。

var i = 0;
function increment() { i += 1; }
increment(); // return value is unused, but i changed as a side effect

var nThings = 0;
function Thing() { nThings += 1; }
new Thing(); // constructed object is unused, but nThings changed as a side effect

