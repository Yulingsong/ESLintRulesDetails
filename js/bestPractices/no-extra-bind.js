/**
 * Created by apple on 16/11/28.
 */
//禁止不必要的函数绑定

var boundGetName = (function getName() {
    return this.name;
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"

// useless bind没有用的bind
var boundGetName = (function getName() {
    return "ESLint";
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"

/*
    此规则目的在于避免不必要的 bind() 使用，
    并且当立即执行的函数表达式 (IIFE) 使用 bind()，
    但是没有一个合适的 this 值时，该规则会发出警告。
    此规则不会标记有函数参数绑定的bind() 的使用情况。
*/
//箭头函数不能通过使用 bind() 设置它们的自己 this 值。此规则把所有使用bind() 的箭头函数标记为是有问题的。



