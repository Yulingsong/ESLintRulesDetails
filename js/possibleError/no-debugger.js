/**
 * Created by apple on 16/11/24.
 */

//禁用 debugger (no-debugger)
/*
* debugger 语句用于告诉 JavaScript 执行环境停止执行并在代码的当前位置启动调试器。
* 随着现代调试和开发工具的出现，使用调试器已不是最佳实践。
* 产品代码不应该包含 debugger，因为它会导致浏览器停止执行代码并打开一个适当的调试器。
* */


/*eslint no-debugger: "error"*/

function isTruthy(x) {
    debugger;
    return Boolean(x);
}

/*eslint no-debugger: "error"*/

function isTruthy2(x) {
    return Boolean(x); // set a breakpoint at this line
}

