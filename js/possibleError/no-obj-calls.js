/**
 * Created by apple on 16/11/24.
 */
//禁止将全局对象当作函数进行调用

/*
* ECMAScript 提供了几个全局对象，旨在直接调用。
* 这些对象由于是大写的（比如 Math 和 JSON）看起来像是构造函数，
* 但是如果你尝试像函数一样执行它们，将会抛出错误。
* */



/*eslint no-obj-calls: "error"*/

var math = Math();
var json = JSON();

/*eslint no-obj-calls: "error"*/

function area(r) {
    return Math.PI * r * r;
}
var object = JSON.parse("{}");



