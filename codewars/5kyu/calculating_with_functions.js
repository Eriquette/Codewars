/** 
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

There must be a
function
for each number from 0("zero") to 9("nine")
There must be a
function
for each of the following mathematical operations: plus, minus, times, dividedBy(divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer
function represents the left operand, the most inner
function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three())) / eight(divided_by(three)) should
return 2, not 2.666666...
 * 
*/

function operation(a, operator, b) {
    if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return Math.floor(a / b);
    } else if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    }
}

function zero(op = null) {
    if (op !== null) {
        return operation(0, op[0], op[1]);
    } else {
        return 0;
    }
}

function one(op = null) {
    if (op !== null) {
        return operation(1, op[0], op[1]);
    } else {
        return 1;
    }
}

function two(op = null) {
    if (op !== null) {
        return operation(2, op[0], op[1]);
    } else {
        return 2;
    }
}

function three(op = null) {
    if (op !== null) {
        return operation(3, op[0], op[1]);
    } else {
        return 3;
    }
}

function four(op = null) {
    if (op !== null) {
        return operation(4, op[0], op[1]);
    } else {
        return 4;
    }
}

function five(op = null) {
    if (op !== null) {
        return operation(5, op[0], op[1]);
    } else {
        return 5;
    }
}

function six(op = null) {
    if (op !== null) {
        return operation(6, op[0], op[1]);
    } else {
        return 6;
    }
}

function seven(op = null) {
    if (op !== null) {
        return operation(7, op[0], op[1]);
    } else {
        return 7;
    }
}

function eight(op = null) {
    if (op !== null) {
        return operation(8, op[0], op[1]);
    } else {
        return 8;
    }
}

function nine(op = null) {
    if (op !== null) {
        return operation(9, op[0], op[1]);
    } else {
        return 9;
    }
}

function plus(num) {
    return ['+', num];
}

function minus(num) {
    return ['-', num];
}

function times(num) {
    return ['*', num];
}

function dividedBy(num) {
    return ['/', num];
}

console.log(eight(dividedBy(nine())));

/*
DRYER SOLUTIONS FOUND ON CODEWARS
*/
function zero(func) {
    return func ? func(0) : 0;
};

function one(func) {
    return func ? func(1) : 1;
};

function two(func) {
    return func ? func(2) : 2;
};

function three(func) {
    return func ? func(3) : 3;
};

function four(func) {
    return func ? func(4) : 4;
};

function five(func) {
    return func ? func(5) : 5;
};

function six(func) {
    return func ? func(6) : 6;
};

function seven(func) {
    return func ? func(7) : 7;
};

function eight(func) {
    return func ? func(8) : 8;
};

function nine(func) {
    return func ? func(9) : 9;
};

function plus(b) {
    return function (a) {
        return a + b;
    };
};

function minus(b) {
    return function (a) {
        return a - b;
    };
};

function times(b) {
    return function (a) {
        return a * b;
    };
};

function dividedBy(b) {
    return function (a) {
        return a / b;
    };
};

//METHOD 3
//uses an array of num names and their indices as values.
'zero one two three four five six seven eight nine'.split(' ').forEach(
    (name, i) => this[name] = (f = val => val) => f(i)
)

let plus = (r) => (l) => l + r
let minus = (r) => (l) => l - r
let times = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r