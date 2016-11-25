/**
 * Created by apple on 16/11/24.
 */
//禁用稀疏数组

//稀疏数组包括很多空位置，经常是由于在数组字面量中使用多个逗号造成的

//也就是逗号之前没有任何元素的数组

/*eslint no-sparse-arrays: "error"*/

var items = [,];
var colors = [ "red",, "blue" ];



/*eslint no-sparse-arrays: "error"*/

var items = [];
var items = new Array(23);

// trailing comma (after the last element) is not a problem
var colors = [ "red", "blue", ];

