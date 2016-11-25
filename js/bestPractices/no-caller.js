/**
 * Created by apple on 16/11/25.
 */
//禁用 caller 或 callee

//arguments.caller 和 arguments.callee 的使用使一些代码优化变得不可能。
// 在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的
//此规则目的在于阻止使用已弃用的代码和次优的代码，
// 而且禁止使用 arguments.caller 和 arguments.callee。
// 因此，当 arguments.caller 和 arguments.callee 被使用时，该规则将会发出警告。