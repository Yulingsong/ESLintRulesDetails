/**
 * Created by apple on 16/11/24.
 */
//将一个常量表达式
// （比如，一个字面值）
// 作为一个测试条件可能是个书写错误或者为了触发某个特定的行为。

//该规则禁止在以下语句的条件中出现常量表达式
/*
* if、for、while 或 do...while 语句
 ?: 三元表达式
* */

/*eslint no-constant-condition: "error"*/

if (false) {
    doSomethingUnfinished();
}

if (void x) {
    doSomethingUnfinished();
}

for (;-2;) {
    doSomethingForever();
}

while (typeof x) {
    doSomethingForever();
}

do{
    doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;



/*eslint no-constant-condition: "error"*/

if (x === 0) {
    doSomething();
}

for (;;) {
    doSomethingForever();
}

while (typeof x === "undefined") {
    doSomething();
}

do{
    doSomething();
} while (x);

var result = x !== 0 ? a : b;

/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

while (true) {
    doSomething();
    if (condition()) {
        break;
    }
};

for (;true;) {
    doSomething();
    if (condition()) {
        break;
    }
};

do {
    doSomething();
    if (condition()) {
        break;
    }
} while (true)



