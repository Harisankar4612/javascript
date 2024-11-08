let number = 5;
let a1=0, a2=1, next;
console.log("fibonocci");
for (let i = 1; i <= number; i++) {
    console.log(a1);
    next = a1 + a2;
    a1 = a2;
    a2 = next;   
}


