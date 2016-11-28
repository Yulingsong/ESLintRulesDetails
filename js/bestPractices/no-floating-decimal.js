/**
 * Created by apple on 16/11/28.
 */
//禁止浮点小数


//错误 代码示例：

/*eslint no-floating-decimal: "error"*/

var num = .5;
var num = 2.;
var num = -.7;

//正确 代码示例：

/*eslint no-floating-decimal: "error"*/

var num = 0.5;
var num = 2.0;
var num = -0.7;

