function findlargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let num1 = 140;
let num2 = 85;
let num3 = 45;

console.log("The largest number is: " + findlargest(num1, num2, num3)); 