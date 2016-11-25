/**
 * Created by apple on 16/11/24.
 */
//禁止在对象字面量中出现重复的键
/*
* 如果对象字面量中出现多个属性有同样的键可能会到导致意想不到的情况出现。
* */

/*eslint no-dupe-keys: "error"*/

var foo = {
    bar: "baz",
    bar: "qux"
};

var foo = {
    "bar": "baz",
    bar: "qux"
};

var foo = {
    0x1: "baz",
    1: "qux"
};


/*eslint no-dupe-keys: "error"*/

var foo = {
    bar: "baz",
    quxx: "qux"
};

