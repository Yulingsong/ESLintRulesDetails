/**
 * Created by apple on 16/11/24.
 */
//不允许模板文本占位符语法在常规字符串

//ECMAScript 6允许程序员创建字符串包含变量或表达式使用模板文字,
// 而不是字符串连接,通过编写表达式 变量$ { } 两撇号引号(')。
// 很容易想要使用模板时使用错误的引用文字,通过编写 变量“$ { }” 最终,与文字值 变量“$ { }”
// 而不是一个字符串包含的值注入表达式。


//的例子 不正确的 代码规则:

    /*eslint no-template-curly-in-string: "error"*/
    "Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";

//的例子 正确的 代码规则:

    /*eslint no-template-curly-in-string: "error"*/
    `Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;

//这条规则在ES3/5环境中不应使用。