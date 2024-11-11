let start = 1;
let end = 30;
let evenCount = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}
console.log("The number of even numbers in the range is: " + evenCount);
