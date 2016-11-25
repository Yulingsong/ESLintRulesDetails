/**
 * Created by apple on 16/11/25.
 */

//禁止在 case 或 default 子句中出现词法声明
//该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。
// 原因是，词法声明在整个 switch 语句块中是可见的，
// 但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。
//为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中。


//该规则旨在避免访问未经初始化的词法绑定以及跨 case 语句访问被提升的函数。

/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/
//switch (foo) {
//    case 1:
//        let x = 1;
//        break;
//    case 2:
//        const y = 2;
//        break;
//    case 3:
//    function f() {}
//        break;
//    default:
//    class C {}
//}

switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3: {
        function f() {}
        break;
    }
    default: {
        class C {}
    }
}

