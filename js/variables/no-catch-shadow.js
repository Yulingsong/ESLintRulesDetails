/**
 * Created by apple on 16/11/28.
 */
//不允许在 catch 语句中遮盖变量 \

//、、在 IE 8 及更早版本中，catch 子句的参数会泄露到外部范围，该规则的目的就是避免这种 bug 导致的意外行为。但 catch 子句中的参数与外部范围的变量同名时，该规则将发出警告。


/*eslint no-catch-shadow: "error"*/

var err = "x";

try {
    throw "problem";
} catch (err) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (err) {

}

/*eslint no-catch-shadow: "error"*/

var err = "x";

try {
    throw "problem";
} catch (e) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (e) {

}

