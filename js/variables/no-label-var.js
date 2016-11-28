/**
 * Created by apple on 16/11/28.
 */
//禁用与变量同名的标签

//该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

/*eslint no-label-var: "error"*/

var x = foo;
function bar() {
    x:
        for (;;) {
            break x;
        }
}


/*eslint no-label-var: "error"*/

// The variable that has the same name as the label is not in scope.

function foo() {
    var q = t;
}

function bar() {
    q:
        for(;;) {
            break q;
        }
}
