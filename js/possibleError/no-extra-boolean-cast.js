/**
 * Created by apple on 16/11/24.
 */
//禁止不必要的布尔类型转换

/*
* 在上下文中比如 if 语句的测试表达式的结果已经被强制转化成了一个布尔值，
* 再通过双重否定（!!）或 Boolean 转化是不必要的。
* */


/*eslint no-extra-boolean-cast: "error"*/

var foo = !!!bar;

var foo = !!bar ? baz : bat;

var foo = Boolean(!!bar);

var foo = new Boolean(!!bar);

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

while (!!foo) {
    // ...
}

do {
    // ...
} while (Boolean(foo));

for (; !!foo; ) {
    // ...
}


/*eslint no-extra-boolean-cast: "error"*/

var foo = !!bar;
var foo = Boolean(bar);

function foo() {
    return !!bar;
}

var foo = bar ? !!baz : !!bat;


