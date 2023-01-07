let stack = [];

let nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
};

function stackAdd(btn) {
    let btnClass = btn.getAttribute('class');
    let btnID = btn.getAttribute('id');
    if (btnClass === "number") {
        stack.push(nums[btnID]);
    } else if (btnClass === "operator") {
        if (btnID === "add") {
            add();
        } else if (btnID === "subtract") {
            subtract();
        } else if (btnID === "multiply") {
            multiply();
        } else {
            divide();
        }
    } else {

    }
}

function add() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a + b);
    console.log(stack[0]);
}

function subtract() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b - a);
    console.log(stack[0]);
}

function multiply() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a * b);
    console.log(stack[0]);
}

function divide() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(Math.floor(a / b));
    console.log(stack[0]);
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        stackAdd(btn);
    });
});