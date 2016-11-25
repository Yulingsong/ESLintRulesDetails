/**
 * Created by apple on 16/11/24.
 */
//禁止冗余的括号

//命令行中的 --fix 选项可以自动修复该规则报告的问题。

//该规则对圆括号的使用做了限制，只有在必要的地方才能使用。


/* eslint no-extra-parens: "error" */

a = (b * c);

(a * b) + c;

typeof (a);

(function(){} ? a() : b());


/* eslint no-extra-parens: "error" */

(0).toString();

({}.toString.call());

(function(){}) ? a() : b();

(/^a$/).test(x);



/* eslint no-extra-parens: ["error", "all", { "conditionalAssign": false }] */

while ((foo = bar())) {}

if ((foo = bar())) {}

do; while ((foo = bar()))

for (;(a = b););

/* eslint no-extra-parens: ["error", "all", { "returnAssign": false }] */

function a(b) {
    return (b = 1);
}

function a(b) {
    return b ? (c = d) : (c = e);
}

b => (b = 1);

b => b ? (c = d) : (c = e);


/* eslint no-extra-parens: ["error", "all", { "nestedBinaryExpressions": false }] */

x = a || (b && c);
x = a + (b * c);
x = (a * b) / c;



/* eslint no-extra-parens: ["error", "functions"] */

((function foo() {}))();

var y = (function () {return 1;});


/* eslint no-extra-parens: ["error", "functions"] */

(0).toString();

({}.toString.call());

(function(){} ? a() : b());

(/^a$/).test(x);

a = (b * c);

(a * b) + c;

typeof (a);





