/**
 * Created by apple on 16/11/24.
 */
//禁止在 finally 语句块中出现控制流语句

/*
 JavaScript 暂停 try 和 catch 语句块中的控制流语句，直到 finally 语句块执行完毕。
 所以，当 return、throw、break 和 continue 出现在 finally 中时，
  try 和 catch 语句块中的控制流语句将被覆盖，这被认为是意外的行为。
*/

//该规则禁止在 finally 语句块中出现 return、throw、break 和 continue 语句。它允许间接使用，比如在 function 或 class 的定义中。

/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        return 3;
    }
};

/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        throw new Error;
    }
};

//正确
/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        console.log("hola!");
    }
};

/*eslint no-unsafe-finally: "error"*/
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        let a = function() {
            return "hola!";
        }
    }
};

/*eslint no-unsafe-finally: "error"*/
let foo = function(a) {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        switch(a) {
            case 1: {
                console.log("hola!")
                break;
            }
        }
    }
};

