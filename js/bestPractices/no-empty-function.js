/**
 * Created by apple on 16/11/25.
 */
//禁止出现空函数
//空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。

/*eslint no-empty-function: "error"*/
/*eslint-env es6*/
//
//function foo() {}
//
//var foo = function() {};
//
//var foo = () => {};
//
//function* foo() {}
//
//var foo = function*() {};
//
//var obj = {
//    foo: function() {},
//
//    foo: function*() {},
//
//    foo() {},
//
//    *foo() {},
//
//    get foo() {},
//
//    set foo(value) {}
//};
//
//class A {
//    constructor() {}
//
//    foo() {}
//
//    *foo() {}
//
//    get foo() {}
//
//    set foo(value) {}
//
//    static foo() {}
//
//    static *foo() {}
//
//    static get foo() {}
//
//    static set foo(value) {}
//}

/*eslint no-empty-function: "error"*/
/*eslint-env es6*/

function foo() {
    // do nothing.
}

var foo = function() {
    // any clear comments.
};

var foo = () => {
    bar();
};

function* foo() {
    // do nothing.
}

var foo = function*() {
    // do nothing.
};

var obj = {
    foo: function() {
        // do nothing.
    },

    foo: function*() {
        // do nothing.
    },

    foo() {
        // do nothing.
    },

    *foo() {
        // do nothing.
    },

    get foo() {
        // do nothing.
    },

    set foo(value) {
        // do nothing.
    }
};

class A {
    constructor() {
        // do nothing.
    }

    foo() {
        // do nothing.
    }

    *foo() {
        // do nothing.
    }

    get foo() {
        // do nothing.
    }

    set foo(value) {
        // do nothing.
    }

    static foo() {
        // do nothing.
    }

    static *foo() {
        // do nothing.
    }

    static get foo() {
        // do nothing.
    }

    static set foo(value) {
        // do nothing.
    }
}
//Options

//该规则一个选项，允许特定类型的函数为空。

//allow (string[]) - 所允许的空函数列表。列表元素为以下字符。默认为空数组 ([])。
//"functions" - 常规函数。
//"arrowFunctions" - 箭头函数。
//"generatorFunctions" - Generator 函数。
//"methods" - 类方法和对象的方法简写
//"generatorMethods" - 类方法和带有 generator 的对象的方法简写。
//"getters" - Getters。
//"setters" - Setters。
//"constructors" - 类的构造函数。

//allow: functions
//
//选项 { "allow": ["functions"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["functions"] }]*/

function foo() {}

var foo = function() {};

var obj = {
    foo: function() {}
};

//allow: arrowFunctions

//选项 { "allow": ["arrowFunctions"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["arrowFunctions"] }]*/
/*eslint-env es6*/

var foo = () => {};

//allow: generatorFunctions

//选项 { "allow": ["generatorFunctions"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["generatorFunctions"] }]*/
/*eslint-env es6*/

function* foo() {}

var foo = function*() {};

var obj = {
    foo: function*() {}
};

//allow: methods

//选项 { "allow": ["methods"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["methods"] }]*/
/*eslint-env es6*/

var obj = {
    foo() {}
};

class A {
    foo() {}
    static foo() {}
}

//allow: generatorMethods

//选项 { "allow": ["generatorMethods"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["generatorMethods"] }]*/
/*eslint-env es6*/

var obj = {
    *foo() {}
};

class A {
    *foo() {}
    static *foo() {}
}

//allow: getters

//选项 { "allow": ["getters"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["getters"] }]*/
/*eslint-env es6*/

var obj = {
    get foo() {}
};

class A {
    get foo() {}
    static get foo() {}
}

//allow: setters

//选项 { "allow": ["setters"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["setters"] }]*/
/*eslint-env es6*/

var obj = {
    set foo(value) {}
};

class A {
    set foo(value) {}
    static set foo(value) {}
}

//allow: constructors

//选项 { "allow": ["constructors"] } 的 正确 代码示例：

/*eslint no-empty-function: ["error", { "allow": ["constructors"] }]*/
/*eslint-env es6*/

class A {
    constructor() {}
}


