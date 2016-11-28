/**
 * Created by apple on 16/11/28.
 */

//禁止 case 语句落空

//在 JavaScript 中，switch 语句是一种比较容易出错的结构，在某种程度上这要归功于 case 的落空能力。比如：

switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}

    //在这个例子中，如果 foo 值为 1，两个 case 语句都会执行。你可以使用 break 阻止这种情况，例如以下例子：

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomethingElse();
}

   // 当你不想要落空时是没有问题的，但是，如果落空是有意为之呢，
// 没有办法来表明这一点。使用匹配 /falls?\s?through/i 的正则表达式的注释来表明落空是有意为之的，，被认为是一个最佳实际。
switch(foo) {
    case 1:
        doSomething();
    // falls through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
    // fall through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
    // fallsthrough

    case 2:
        doSomethingElse();
}

/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
    // falls through

    case 2:
        doSomething();
}

/*eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/

switch(foo) {
    case 1:
        doSomething();
    // break omitted

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
    // caution: break is omitted intentionally

    default:
        doSomething();
}

