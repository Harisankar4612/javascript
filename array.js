let colors = ["red", "blue", "green", "yellow", "purple"];
console.log("Length of the array:", colors.length);

let singleString = colors.join("");
console.log("Array as a single string:", singleString);

let thirdElement = colors[2];
console.log("Third element:", thirdElement);

let dashedString = colors.join("-");
console.log("Array combined with dashes:", dashedString);

colors.pop();
console.log("Array after removing the last element:", colors);

colors.push("orange");
console.log("Array after adding 'orange':", colors);