/**
 * Created by apple on 16/11/25.
 */
//需要约束 for-in

//在使用 for in 遍历对象时，会把从原型链继承来的属性也包括进来。这样会导致意想不到的项出现。

//此规则目的在于，阻止在 for in 遍历过程中，
// 由于不对结果进行筛选而导致意想不到的行为发生。
// 因此，当 for in 循环没有使用 if 语句对结果进行筛选时，该规则将会发出警告。

/*eslint guard-for-in: "error"*/

//for (key in foo) {
//    doSomething(key);
//}



for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}










