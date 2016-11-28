/**
 * Created by apple on 16/11/28.
 */
//、、禁用未使用过的标签
//该规则旨在消除未使用过的标签。

//错误 代码示例：

/*eslint no-unused-labels: "error"*/

A: var foo = 0;

B: {
    foo();
}

C:
    for (let i = 0; i < 10; ++i) {
        foo();
    }

//正确 代码示例：

/*eslint no-unused-labels: "error"*/

A: {
    if (foo()) {
        break A;
    }
    bar();
}

B:
    for (let i = 0; i < 10; ++i) {
        if (foo()) {
            break B;
        }
        bar();
    }

