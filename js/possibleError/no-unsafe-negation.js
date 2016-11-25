/**
 * Created by apple on 16/11/24.
 */


//Examples of incorrect code for this rule:

    /*eslint no-unsafe-negation: "error"*/

    if (!key in object) {
        // operator precedence makes it equivalent to (!key) in object
        // and type conversion makes it equivalent to (key ? "false" : "true") in object
    }

if (!obj instanceof Ctor) {
    // operator precedence makes it equivalent to (!obj) instanceof Ctor
    // and it equivalent to always false since boolean values are not objects.
}

//Examples of correct code for this rule:

    /*eslint no-unsafe-negation: "error"*/

    if (!(key in object)) {
        // key is not in object
    }

if (!(obj instanceof Ctor)) {
    // obj is not an instance of Ctor
}

if(("" + !key) in object) {
    // make operator precedence and type conversion explicit
    // in a rare situation when that is the intended meaning
}

