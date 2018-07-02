const a = parseFloat(prompt('Enter a:'));
const b = parseFloat(prompt('Enter b:'));
const c = parseFloat(prompt('Enter c:'));

const d = discr(a, b, c);
if (d < 0) {
    alert('Wrong numbers: No results');
} else {
    if (d === 0) {
        alert('Discriminant equals zero. x1 = x2 = ') + discrZero(a, b, c);
    } else {
        const result = quadEq(a, b, c);
        alert (result);
    }
}

function quadEq(a, b, c) {
    const dis = discr(a, b, c);
    const x1 = (-b + (Math.sqrt(dis))) / (2 * a);
    const x2 = (-b - (Math.sqrt(dis))) / (2 * a);
    return 'Results of Quadratic equation: x1 = ' + x1 +',  x2 = ' + x2;
}

function discr (a, b, c) {
    return b * b - 4 * a * c;
}

function discrZero (a, b, c) {
    let x =  -b / 2 * a;
    return x;
} 
