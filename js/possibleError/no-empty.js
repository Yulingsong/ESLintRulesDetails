/**
 * Created by apple on 16/11/24.
 */
//禁止空块语句
//空语句块，如果不是技术上的错误，通常是由于不完整的重构造成的。这会造成代码阅读上的困惑。
//该规则禁止空语句块出现。该规则忽略包含一个注释的语句块（例如，在 try 语句中，一个空的 catch 或 finally 语句块意味着程序应该继续执行，无论是否出现错误）

/*eslint no-empty: "error"*/

    if (foo) {
    }

    while (foo) {
    }

    switch(foo) {
    }

    try {
        doSomething();
    } catch(ex) {

    } finally {

    }

/*eslint no-empty: "error"*/

    if (foo) {
        // empty
    }

    while (foo) {
        /* empty */
    }

    try {
        doSomething();
    } catch (ex) {
        // continue regardless of error
    }

    try {
        doSomething();
    } finally {
        /* continue regardless of error */
    }

/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
    try {
        doSomething();
    } catch (ex) {}

    try {
        doSomething();
    }
    catch (ex) {}
    finally {
        /* continue regardless of error */
    }



