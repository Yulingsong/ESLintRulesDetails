/**
 * Created by apple on 16/11/28.
 */
//禁止原始包装实例
//在 JavaScript 中有3种原始类型包装对象：字符串，数字和布尔值。
// 它们所代表的构造器分别为 String、Number 和 Boolean。
// 当读取原始类型的值或者为它们提供如方法等类似对象的功能时，原始包装类型将被使用。
// 在幕后，相关包装器类型的一个对象被创建，然后销毁，这就是为什么你可以在原始值上调用方法，例如：

//此规则目的在于消除通过 new 操作符使用 String、Number 和 Boolean 。
// 因此，每当遇到 new String、new Number 或者 new Boolean，该规则都会发出警告。


//错误 代码示例：

/*eslint no-new-wrappers: "error"*/

var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;

//正确 代码示例：

/*eslint no-new-wrappers: "error"*/

var text = String(someValue);
var num = Number(someValue);

var object = new MyString();

