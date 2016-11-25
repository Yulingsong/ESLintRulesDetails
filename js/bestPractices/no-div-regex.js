/**
 * Created by apple on 16/11/25.
 */
//禁止使用看起来像除法的正则表达式
//要求正则表达式字面量避开除法操作符

/*eslint no-div-regex: "error"*/

function bar() { return /=foo/; }

/*eslint no-div-regex: "error"*/

function bar() { return /\=foo/; }

