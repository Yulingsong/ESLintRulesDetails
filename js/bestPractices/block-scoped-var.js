/**
 * Created by apple on 16/11/25.
 */

//把 var 语句看作是在块级作用域范围之内

//当变量在其被定义的范围之外被使用时，该规则会发出警告。这种解析方式模拟了 C 语言中的块级作用域。
/*eslint block-scoped-var: "error"*/

//function doIf() {
//    if (true) {
//        var build = true;
//    }
//
//    console.log(build);
//}
//
//function doIfElse() {
//    if (true) {
//        var build = true;
//    } else {
//        var build = false;
//    }
//}
//
//function doTryCatch() {
//    try {
//        var build = 1;
//    } catch (e) {
//        var f = build;
//    }
//}


function doIf() {
    var build;

    if (true) {
        build = true;
    }

    console.log(build);
}

function doIfElse() {
    var build;

    if (true) {
        build = true;
    } else {
        build = false;
    }
}

function doTryCatch() {
    var build;
    var f;

    try {
        build = 1;
    } catch (e) {
        f = build;
    }
}