//禁止在正则表达式中出现空字符集
//该规则禁止在正则表达式中出现空字符集。
/*eslint no-empty-character-class: "error"*/

///^abc[]/.test("abcdefg"); // false
//"abcdefg".match(/^abc[]/); // null

/*eslint no-empty-character-class: "error"*/

/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]

//当该规则报告了正确的代码时，漏报的示例：
/*eslint no-empty-character-class: "error"*/

var abcNeverMatches = new RegExp("^abc[]");

