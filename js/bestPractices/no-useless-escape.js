/**
 * Created by apple on 16/11/28.
 */
//禁用不必要的转义

//该规则标记在不改变代码行为的情况下可以安全移除的转义。

//错误 代码示例：

/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;

//正确 代码示例：

/*eslint no-useless-escape: "error"*/

"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}\}`;
`$\{${foo}\}`;
/\\/g;
/\t/g;
/\\w\\$\\*\\^\\./;

