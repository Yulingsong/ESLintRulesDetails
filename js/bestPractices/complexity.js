/**
 * Created by apple on 16/11/25.
 */
//限制圈复杂度
//圈复杂度数量上表现为覆盖所有代码的独立现行路径条数

//此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度，
// 因此，它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)。

//function a(x) {
//    if (true) {
//        return x;
//    } else if (false) {
//        return x+1;
//    } else {
//        return 4; // 3rd path
//    }
//}

/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}

