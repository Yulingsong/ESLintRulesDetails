/**
 * Created by apple on 16/11/24.
 */
//禁止不规则的空白
/*
* 无效的或不规则的空白会导致 ECMAScript 5 解析问题，也会使代码难以调试（类似于混合 tab 和空格的情况）。
 各种空白字符可能是由程序员误输入的，比如拷贝或键盘快捷键。例如，在 OS X 系统按下 Alt + Space，增加了一个不间断空格。
 这些空格引起的已知的问题:

 零宽空格
    不被认为是分隔符，经常被解析为 Unexpected token ILLEGAL
    不在现代浏览器中显示，期待使用代码存储软件解决其可视化问题

 行分隔符
    在 JSON 中不是一个有效的字符，会引起解析错误
 * */

/*
 该规则禁止出现以下字符，除非该规则选项允许：

 \u000B - Line Tabulation (\v) - <VT>
 \u000C - Form Feed (\f) - <FF>
 \u00A0 - No-Break Space - <NBSP>
 \u0085 - Next Line
 \u1680 - Ogham Space Mark
 \u180E - Mongolian Vowel Separator - <MVS>
 \ufeff - Zero Width No-Break Space - <BOM>
 \u2000 - En Quad
 \u2001 - Em Quad
 \u2002 - En Space - <ENSP>
 \u2003 - Em Space - <EMSP>
 \u2004 - Tree-Per-Em
 \u2005 - Four-Per-Em
 \u2006 - Six-Per-Em
 \u2007 - Figure Space
 \u2008 - Punctuation Space - <PUNCSP>
 \u2009 - Thin Space
 \u200A - Hair Space
 \u200B - Zero Width Space - <ZWSP>
 \u2028 - Line Separator
 \u2029 - Paragraph Separator
 \u202F - Narrow No-Break Space
 \u205f - Medium Mathematical Space
 \u3000 - Ideographic Space

* */


/*eslint no-irregular-whitespace: "error"*/

function thing() /*<NBSP>*/{
    return 'test';
}

function thing( /*<NBSP>*/){
    return 'test';
}

function thing /*<NBSP>*/(){
    return 'test';
}

function thing᠎/*<MVS>*/(){
    return 'test';
}

function thing() {
    return 'test'; /*<ENSP>*/
}

function thing() {
    return 'test'; /*<NBSP>*/
}

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
 Description <NBSP>: some descriptive text
 */

function thing() {
    return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
    return `template <NBSP>string`;
}

/*eslint no-irregular-whitespace: "error"*/

function thing() {
    return ' <NBSP>thing';
}

function thing() {
    return '​<ZWSP>thing';
}

function thing() {
    return 'th <NBSP>ing';
}


/*eslint no-irregular-whitespace: ["error", { "skipComments": true }]*/

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
 Description <NBSP>: some descriptive text
 */

/*eslint no-irregular-whitespace: ["error", { "skipRegExps": true }]*/

function thing() {
    return / <NBSP>regexp/;
}

/*eslint no-irregular-whitespace: ["error", { "skipTemplates": true }]*/
/*eslint-env es6*/

function thing() {
    return `template <NBSP>string`;
}



