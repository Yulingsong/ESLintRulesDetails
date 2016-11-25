/**
 * Created by apple on 16/11/24.
 */
//要求调用 isNaN()检查 NaN

/*
 在 JavaScript 中，NaN 是 Number 类型的一个特殊值。
 它被用来表示非数值，
 这里的数值是指在 IEEE 浮点数算术标准中定义的双精度64位格式的值。
 因为在 JavaScript 中 NaN 独特之处在于它不等于任何值，包括它本身，与 NaN 进行比较的结果是令人困惑：
 NaN !== NaN or NaN != NaN evaluate to true
 因此，使用 Number.isNaN() 或 全局的 isNaN() 函数来测试一个值是否是 NaN。
*/
//错误 代码示例：

/*eslint use-isnan: "error"*/

if (foo == NaN) {
    // ...
}

if (foo != NaN) {
    // ...
}

//正确 代码示例：

/*eslint use-isnan: "error"*/

if (isNaN(foo)) {
    // ...
}

if (!isNaN(foo)) {
    // ...
}

