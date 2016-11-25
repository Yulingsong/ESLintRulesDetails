/**
 * Created by apple on 16/11/25.
 */
//强制数组方法的回调函数中有 return 语句

/*
 Array有一些方法用来过滤、映射和折叠。
 如果你忘记了在它们的回调函数中写return语句，这种情况可能是个错误。

 该规则强制数组方法的回调函数中的return语句的使用。
 Array.from
 Array.prototype.every
 Array.prototype.filter
 Array.prototype.find
 Array.prototype.findIndex
 Array.prototype.map
 Array.prototype.reduce
 Array.prototype.reduceRight
 Array.prototype.some
 Array.prototype.sort
*/

//错误 代码示例
//Expected to return a value in this function
var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    //return memo;
}, {});

//Expected to return a value at the end of this function
var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    //return false;
});

//Expected a return value
var bar = foo.filter(function(x) {
    if (x) {
        return true;
    } else {
        return;
    }
});

//true
/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    return memo;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});

var bar = foo.map(node => node.getAttribute("id"));
