/**
 * Created by apple on 16/11/25.
 */
//禁止在 else 前有 return
//如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。

//该规则旨在突出含有 return 语句的 if 语句后的不必要的代码。
// 因此，当else 语句出现在含有 return 语句的 if 语句之后，该规则将发出警告。



function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}

function foo() {
    if (x) {
        return y;
    } else if (z) {
        return w;
    } else {
        return t;
    }
}

function foo() {
    if (x) {
        return y;
    } else {
        var t = "foo";
    }

    return t;
}

// Two warnings for nested occurrences
function foo() {
    if (x) {
        if (y) {
            return y;
        } else {
            return x;
        }
    } else {
        return z;
    }
}



//
//function foo() {
//    if (x) {
//        return y;
//    }
//
//    return z;
//}
//
//function foo() {
//    if (x) {
//        return y;
//    } else if (z) {
//        var t = "foo";
//    } else {
//        return w;
//    }
//}
//
//function foo() {
//    if (x) {
//        if (z) {
//            return y;
//        }
//    } else {
//        return z;
//    }
//}


