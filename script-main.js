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

let numOne = 0;
let numTwo = 0;
let calcSwitch = 0;

function stackAdd(btn) {
    let btnClass = btn.getAttribute('class');
    let btnID = btn.getAttribute('id');
    if (btnClass === "number") {
        if (calcSwitch === 0) {
            numOne = numOne.toString() + nums[btnID];
            console.log(numOne);
            numOne = parseInt(numOne);
            console.log(numOne);
        } else {
            numTwo = numTwo.toString() + nums[btnID];
            console.log(numTwo);
            numTwo = parseInt(numTwo);
            console.log(numTwo);
        }
        screen.textContent = screen.textContent + nums[btnID];
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
        if (btnID === "equals") {
            equals();
        } else if (btnID === "clear") {
            clear();
        } else if (btnID === "enter") {
            enter();
        }
    }
}

function add() {
    stack.push(numTwo);
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a + b);
    console.log(stack[0]);
    screen.textContent = stack[0] + " ";
    numTwo = 0;
}

function subtract() {
    stack.push(numTwo);
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b - a);
    console.log(stack[0]);
    screen.textContent = stack[0] + " ";
    numTwo = 0;
}

function multiply() {
    stack.push(numTwo);
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a * b);
    console.log(stack[0]);
    screen.textContent = stack[0] + " ";
    numTwo = 0;
}

function divide() {
    stack.push(numTwo);
    let a = stack.pop();
    let b = stack.pop();
    stack.push(Math.floor(b / a));
    console.log(stack[0]);
    screen.textContent = stack[0] + " ";
    numTwo = 0;
}

function clear() {
    stack = [];
    calcSwitch = 0;
    numOne = 0;
    numTwo = 0;
    screen.textContent = "";
}

function enter() {
    stack.push(numOne);
    screen.textContent = screen.textContent + " ";
    calcSwitch === 0 ? calcSwitch = 1 : calcSwitch = 0;
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        stackAdd(btn);
    });
});

const screen = document.querySelector("#screen");