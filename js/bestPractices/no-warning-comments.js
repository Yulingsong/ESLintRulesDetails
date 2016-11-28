/**
 * Created by apple on 16/11/28.
 */
//禁用警告注释
//该规则报告含有配置中预定义的项的注释。
/*eslint no-warning-comments: "error"*/

function callback(err, results) {
    if (err) {
        console.error(err);
        return;
    }
    // NOT READY FOR PRIME TIME
    // but too bad, it is not a predefined warning term
}


/*eslint no-warning-comments: ["error", { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// TODO: this
// todo: this too
// Even this: TODO
/* /*
 * The same goes for this TODO comment
 * Or a fixme
 * as well as any other term
 */

// This is to do
// even not any other    term
// any other terminal
/*
 * The same goes for block comments
 * with any other interesting term
 * or fix me this
 */