//Setting value for a selector

const getValue = function(selector) {
    let text = document.getElementById(selector).innerText;
    return parseInt(text);
}

const calculateSum = function(selector1, selector2, selector3) {
    let result = getValue(selector1) + getValue(selector2);
    document.getElementById(selector3).innerText = `${result}`;
}

const getValue2 = (selector) => {
    let text = document.getElementById(selector).innerText;
    return parseInt(text);
}

const calculateSum2 = (selector1, selector2, selector3) => {
    let result = getValue2(selector1) + getValue2(selector2);
    document.getElementById(selector3).innerText = `${result}`;
}

const generateRandomValues = (selector1, selector2) => {
    // floor
    // Math.floor()
    // ceil
    // Math.ceil()
    // rounding
    // Math.round()
    document.getElementById(selector1).innerText = Math.floor(Math.random() * 100);
    document.getElementById(selector2).innerText = Math.floor(Math.random() * 100);
}