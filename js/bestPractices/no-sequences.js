/**
 * Created by apple on 16/11/28.
 */
//不允许使用逗号操作符
// 逗号操作符包含多个表达式，其中只有一个是可使用的。
// 它从左到右计算每一个操作数并且返回最后一个操作数的值。然而，这往往掩盖了它的副作用，它的使用经常会发生事故。


/*
 此规则禁止逗号操作符的使用，以下情况除外：

 在初始化或者更新部分 for 语句时。
 如果表达式序列被明确包裹在括号中。

 */


//错误 代码示例：

/*eslint no-sequences: "error"*/

foo = doSomething(), val;

0, eval("doSomething();");

do {} while (doSomething(), !!test);

for (; doSomething(), !!test; );

if (doSomething(), !!test);

switch (val = foo(), val) {}

while (val = foo(), val < 42);

with (doSomething(), val) {}

//正确 代码示例：

/*eslint no-sequences: "error"*/

foo = (doSomething(), val);

(0, eval)("doSomething();");

do {} while ((doSomething(), !!test));

for (i = 0, j = 10; i < j; i++, j--);

if ((doSomething(), !!test));

switch ((val = foo(), val)) {}

while ((val = foo(), val < 42));

// with ((doSomething(), val)) {}

