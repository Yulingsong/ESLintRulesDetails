/**
 * Created by apple on 16/11/28.
 */
//禁止扩展原生对象
// 在 JavaScript 中，你可以扩展任何对象，
// 包括内置或者”原生”对象。有时人们改变这些原生对象的行为，
// 会影响到代码中的其它部分。
// 例如我们重写了一个内建的方法，将会影响到所有对象，甚至是其它内建对象。

// seems harmless
Object.prototype.extra = 55;

// loop through some userIds
var users = {
    "123": "Stan",
    "456": "David"
};

// not what you'd expect
for (var id in users) {
    console.log(id); // "123", "456", "extra"
}
//建议在 for 循环里使用 users.hasOwnProperty(id)来避免此问题出现


Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });


/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

Object.prototype.a = "a";


