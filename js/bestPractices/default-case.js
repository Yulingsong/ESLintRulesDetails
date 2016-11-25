/**
 * Created by apple on 16/11/25.
 */
//要求 Switch 语句中有 Default 分支

/*eslint default-case: "error"*/

//switch (a) {
//    case 1:
//        /* code */
//        break;
//}

//设置 commentPattern 为一个正则表达式字符串，
// 来改变默认的 ^no default$ 注释匹配模式

switch(a) {
    case 1:
        /* code */
        break;

    // skip default
}

switch(a) {
    case 1:
        /* code */
        break;

    // skip default case
}
