/**
 * Created by apple on 16/11/28.
 */

//在链接地址中使用 javascript: 被有些人认为是 eval 的一种形式。
// 在 javascript: 链接中的代码必须由浏览器解析和赋值，
// 其处理方式与 eval 一样。

//错误 代码示例：

/*eslint no-script-url: "error"*/

location.href = "javascript:void(0)";

