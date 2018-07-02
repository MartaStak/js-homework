const a = parseFloat(prompt('Enter a:'));
const b = parseFloat(prompt('Enter b:'));
const c = parseFloat(prompt('Enter c:'));
let x1;
let x2;

const d = discr(a, b, c);
if (d < 0) {
    alert('Wrong numbers: No results');
} else {
    if (d === 0) {
        alert('Discriminant equals zero. x1 = x2 = ') + discrZero(a, b, c);
    } else {
        quadEq(a, b, c);
        alert('Results of Quadratic equation: x1 = ' + x1 +',  x2 = ' + x2);
    }
}


function quadEq(a, b, c) {
        let x1 = (-b + (Math.sqrt(discr))) / (2 * a);
        let x2 = (-b - (Math.sqrt(discr))) / (2 * a);
    return x1, x2;
}

function discr (a, b, c) {
    return b * b - 4 * a * c;
}

function discrZero (a, b, c) {
    let x1 =  -b / 2 * a;
    return x1;
} 
