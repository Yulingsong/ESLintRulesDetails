/**
 * Created by apple on 16/11/28.
 */
//禁用__proto__,当一个对象被创建，__proto__ 被设置为对象构造方法的原始原型属性。getPrototypeOf是获取原型的首选方法。

//错误 代码示例：

/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];

//正确 代码示例：

/*eslint no-proto: "error"*/

var a = Object.getPrototypeOf(obj);

