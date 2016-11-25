/**
 * Created by apple on 16/11/25.
 */
//要求遵循大括号约定
//命令行中的 --fix 选项可以自动修复该规则报告的问题。
//当代码块只有一条语句时，JavaScript 允许省略大括号。
// 然而，很多人认为，在块区域前后时刻保留大括号是一种最佳实践，
// 即使他们是可有可无的，因为省略大括号会导致错误，并且降低代码的清晰度。
/*
if (foo) foo++;
||
--fix
if (foo) {foo++;}
*/

//if (foo) foo++;
//
//while (bar)
//    baz();
//
//if (foo) {
//    baz();
//} else qux();

//if (foo) {foo++;}
//
//while (bar)
//    {baz();}
//
//if (foo) {
//    baz();
//} else {qux();}

//multi

//默认情况下当 if、else、for、while 或 do 不使用大括号包裹代码时，
// 会给出警告
// 。然而，你可以指定当块中有多条语句时才使用大括号，
// 而当代码块中只有一条语句时只会给出警告。
//if (foo)
//    foo++;
//
//
//if (foo) bar();
//else
//    foo++;
//
//
//while (true)
//    doSomething();
//
//
//for (var i=0; i < items.length; i++)
//    doSomething();

//
//if (foo) {
//    foo++;
//}
//
//if (foo) bar();
//else {
//    foo++;
//}
//
//while (true) {
//    doSomething();
//}
//
//for (var i=0; i < items.length; i++) {
//    doSomething();
//}


/*multi-line

另外，你可以放宽规则，
允许在单行中省略大括号，
而if、else if、else、for、while 和 do，
在其他使用中依然会强制使用大括号。实现如上定制，配置规则如下：*/

/*eslint curly: ["error", "multi-line"]*/

//if (foo) doSomething();
//
//else
//    {doSomethingElse();}
//
//if (foo) {foo(
//    bar,
//    baz);}

/*
 multi-or-nest
 如果 if、else if、else、for、while 和 do 的代码主体中只包含一条语句，
 你可以使用另外一个配置来强制省略大括号。
 同时在其他的情况下，强制使用大括号。
*/

//if (!foo)
//    foo = {
//        bar: baz,
//        qux: foo
//    };
//
//while (true)
//    if(foo)
//        doSomething();
//    else
//        doSomethingElse();
//
//if (foo) {
//    foo++;
//}
//
//while (true) {
//    doSomething();
//}
//
//for (var i = 0; foo; i++) {
//    doSomething();
//}

//if (!foo) {
//    foo = {
//        bar: baz,
//        qux: foo
//    };
//}
//
//while (true) {
//    if(foo)
//        {doSomething();}
//    else
//        {doSomethingElse();}
//}
//
//if (foo)
//    {foo++;}
//
//while (true)
//    {doSomething();}
//
//for (var i = 0; foo; i++)
//    {doSomething();}

// 当在使用任何 multi* 选项时
// 你可以添加一个参数来强制 if、else if 和 else 中所有的代码块使用或者不使用大括号。

if (foo) {
    bar();
    baz();
} else
    {buz();}

if (foo)
    {bar();}
else if (faa)
    {bor();}
else {
    other();
    things();
}

if (true)
    {foo();}
else {
    baz();
}

if (foo) {
    foo++;
}

//如果你没有严格约定何时是否使用块语句，你可以放心的禁用此规则。




















