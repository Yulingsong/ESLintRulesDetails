/**
 * Created by apple on 16/11/28.
 */
//禁止与 null 进行比较
// 与 null 进行比较时不使用类型检测操作符（== 或 !=），\
// 可能得意想不到的的结果，因为 null 其本身以及 null 与 undefined 比较结果都为 true。

// 该规则旨在通过确保与 null 比较时只等于 null，
// 而不同时等于 undefined，
// 来减少潜在的 bug 和 意外行为。
// 因此，它也将标记使用 == 和 != 与 null比较的情况。

/*eslint no-eq-null:"error"*/

//Use ‘===’ to compare with ‘null’
if(foo == null){
    bar()
}
while (qux != null){
    baz();
}

/*eslint no-eq-null: "error"*/

if (foo === null) {
    bar();
}

while (qux !== null) {
    baz();
}

