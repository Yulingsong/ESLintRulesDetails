/**
 * Created by apple on 16/11/28.
 */
// 禁用 with 语句 (no-with)

// with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

// 此规则目的在于排除 with 语句。



/*eslint no-with: "error"*/

with (point) {
    //r = Math.sqrt(x * x + y * y); // is r a member of point?
}

/*eslint no-with: "error"*/
/*eslint-env es6*/

const r = ({x, y}) => Math.sqrt(x * x + y * y);

