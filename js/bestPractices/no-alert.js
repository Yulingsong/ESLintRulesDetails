/**
 * Created by apple on 16/11/25.
 */

/*
 禁用 Alert (no-alert)

 JavaScript 的 alert、confirm 和 prompt 被广泛认为是突兀的 UI 元素，
 应该被一个更合适的自定义的 UI 界面代替。
 此外, alert 经常被用于调试代码，部署到生产环境之前应该删除。
 */

/*eslint no-alert: "error"*/

//alert("here!");
//
//confirm("Are you sure?");
//
//prompt("What's your name?", "John Doe");


customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
    var alert = myCustomLib.customAlert;
    alert();
}




