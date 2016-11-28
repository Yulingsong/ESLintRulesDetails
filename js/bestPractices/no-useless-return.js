/**
 * Created by apple on 16/11/28.
 */
//不允许多余的返回语句

//的例子 不正确的 代码规则:

    /* eslint no-useless-return: "error" */

    function foo() { return; }

function foo() {
    doSomething();
    return;
}

function foo() {
    if (condition) {
        bar();
        return;
    } else {
        baz();
    }
}

function foo() {
    switch (bar) {
        case 1:
            doSomething();
        default:
            doSomethingElse();
            return;
    }
}

//的例子 正确的 代码规则:

    /* eslint no-useless-return: "error" */

    function foo() { return 5; }

function foo() {
    return doSomething();
}

function foo() {
    if (condition) {
        bar();
        return;
    } else {
        baz();
    }
    qux();
}

function foo() {
    switch (bar) {
        case 1:
            doSomething();
            return;
        default:
            doSomethingElse();
    }
}

function foo() {
    for (const foo of bar) {
        return;
    }
}

