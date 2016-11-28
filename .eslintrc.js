module.exports = {
    env: {
        node: true,
        es6:true
    },
    //"extends": "eslint:recommended",
    /*
    * 中括号中第一个是错误级别
    * "off" or 0 - 关闭(禁用)规则
    * "warn" or 1 - 将规则视为一个警告（并不会导致检查不通过）
    * "error" or 2 - 将规则视为一个错误 (退出码为1，检查不通过)
    *
    * */
//    rules:{
       /*  Possible Errors: JavaScript 代码中可能的错误或逻辑错误有关  */
        //中括号中第一个是错误级别,off关闭(禁用)规则

        //'no-cond-assign': "error",
        //'no-cond-assign': ["error", "always"],

        //'no-console':"error",
        //'no-console':["error", { allow: ["warn", "error"] }]
        //'no-comsole':"warn",

        //'no-constant-condition': "error",
        //'no-constant-condition':  ["error", { "checkLoops": false }],

        //'no-control-regex':"off",
        //'no-control-regex':"error"

        //'no-debugger':"error"

        //'no-dupe-args':"error"

        //'no-dupe-keys':"error"

        //'no-duplicate-case':"error"

        //'no-empty-character-class':"error"

        //'no-empty':"error"
        //'no-empty':["error" ,{"allowEmptyCatch": true }]

        //'no-ex-assign':"error"

        //'no-extra-boolean-cast':"error"

        //'no-extra-parens':["error","all"]
        //'no-extra-parens':["error","functions"]
        //'no-extra-parens':["error", "all", { "conditionalAssign": false }]//允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
        //'no-extra-parens':["error", "all", { "returnAssign": false }]// 允许在 return 语句中的赋值语句周围出现额外的圆括号
        //'no-extra-parens':["error", "all", { "nestedBinaryExpressions": false }]//允许额外的括号嵌套的二进制表达式

        //'no-extra-semi':"error"

        //'no-func-assign':"error"

        //'no-inner-declarations':"error"
        //'no-inner-declarations':["error", "both"]


        //'no-invalid-regexp':"error"
        //'no-invalid-regexp':["error", { "allowConstructorFlags": ["u", "y"] }]

        //'no-irregular-whitespace':"error"
        //'no-irregular-whitespace':["error", { "skipStrings": true }]// (默认) 允许在字符串字面量中出现任何空白字符
        //'no-irregular-whitespace':["error", { "skipComments": true }]//允许在注释中出现任何空白字符
        //'no-irregular-whitespace':["error", { "skipRegExps": true }]//允许在正则表达式中出现任何空白字符
        //'no-irregular-whitespace':["error", { "skipTemplates": true }]// 允许在模板字面量中出现任何空白字符

        //'no-obj-calls':"error"

        //'no-prototype-builtins':"error"

        //'no-regex-spaces':"off"

        //'no-sparse-arrays':"error"

        //'no-template-curly-in-string':"error"

        //'no-unexpected-multiline':"error"

        //'no-unreachable':"error"

        //'no-unsafe-finally':"error"

        //'no-unsafe-negation':"error"
        //'use-isnan':"error"

        //'valid-jsdoc':"error",

        //'use-isnan':"error"
  //  },

    rules:{
        /* Best Practices: 这些规则是关于最佳实践的，帮助你避免一些问题 */

        //"accessor-pairs": "error"

        //"array-callback-return":"error"

        //"block-scoped-var":"error"

        //"complexity":["error", 2]

        //"consistent-return":"off"
        //"consistent-return":"error"
        //"consistent-return":["error",{ "treatUndefinedAsUnspecified":false}]
        //"consistent-return":["error",{ "treatUndefinedAsUnspecified":true}]

        //"curly":"error"
        //"curly": ["error", "multi"]
        //"curly": ["error", "multi-line"]
        //"curly": ["error", "multi-or-nest"]
        //"curly": ["error", "multi", "consistent"]

        //"default-case":"error"
        //"default-case":["error", { "commentPattern": "^skip\\sdefault" }]

        //"dot-location": "off"
        //"dot-location": ["error", "object"]//点操作符和对象部分放在同一行。
        //"dot-location": ["error", "property"]//点操作符和属性放在同一行。

        //"dot-notation":"error"
        //"dot-notation":["error", { "allowKeywords": false }]
        //"dot-notation":["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }]

        //"eqeqeq":"error"
        //"eqeqeq":["error", "always"]
        //"eqeqeq":["error", "smart"]

        //"guard-for-in":"error"

        //"no-alert":"error"

        //"no-caller":"error"

        //"no-case-declarations":"error"

        //"no-div-regex":"error"

        //"no-else-return":"error"

        //"no-empty-function":"error"
        //"no-empty-function":["error", { "allow": ["arrowFunctions"] }]

        //到no-eq-null为止,开始在js中直接使用规则来测试。方便
    }


};