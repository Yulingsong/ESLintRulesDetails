/**
 * Created by apple on 16/11/28.
 */
// 禁用特定的全局变量

//Rule Details

//该规则允许你指定你不想在你的应用中使用的全局变量的名称。

//全局变量 "event", "fdescribe" 的 错误 代码示例：

/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

function onClick() {
    console.log(event);
}

fdescribe("foo", function() {
});



//全局变量 "event" 的 正确 代码示例：

/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import event from "event-module";

/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

var event = 1;




