/**
 * Created by apple on 16/11/25.
 */
//要求使用 === 和 !==
//使用类型安全的 === 和 !== 操作符代替 == 和 != 操作符是一个很好的实践。

//这样做的原因是，== 和 != 遵循 Abstract Equality Comparison Algorithm 作强制转型。例如，以下语句被认为是 true。

// [] == false
// [] == ![]
// 3 == "03"

//if (x == 42) { }
//
//if ("" == text) { }
//
//if (obj.getStuff() != undefined) { }

//选项 "always"（默认）强制在任何情况下都使用 === 和 !== （除非你选择对 null 有更具体的处理[见下文]）。

//a == b
//foo == true
//bananas != 1
//value == undefined
//typeof foo == 'undefined'
//'hello' != 'world'
//0 == 0
//true == true
//foo == null

//a === b
//foo === true
//bananas !== 1
//value === undefined
//typeof foo === 'undefined'
//'hello' !== 'world'
//0 === 0
//true === true
//foo === null

/*
 "null": 自定义如何对待 null 字面量。可能的值：
    always (默认) - 总是使用 === 或 !==.
    never - 从不和 null 一起使用 === 或 !==。
    ignore - 不要对 null  应用此规则。
 */

/*
* smart

 选项 "smart" 除了以下这些情况外，强制使用 === 和 !==：

 比较两个字面量的值
 比较 typeof 的值
 与 null 进行比较

 * */

/*eslint eqeqeq: ["error", "smart"]*/

// comparing two variables requires ===
//a == b

// only one side is a literal
//foo == true
//bananas != 1

// comparing to undefined requires ===
//value == undefined

typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

