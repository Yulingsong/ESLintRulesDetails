/**
 * Created by apple on 16/11/24.
 */
//禁止直接使用 Object.prototypes 的内置属性

/*

 ECMAScript 5.1 新增了 Object.create，
 可以通过它创建带有指定的 [[Prototype]] 的对象。
 Object.create(null) 是的一种常见模式，用来创建键值对对象。
 当创建的对象有从 Object.prototype 继承来的属性时，可能会导致错误出现。
 该规则防止在一个对象中直接调用 Object.prototype 的方法。

* */

/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");

/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");

var isPrototypeOfBar = {}.isPrototypeOf.call(foo, bar);

var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
