let school = {
    name: "SVA HSS",
    address: "Koyilandy ,Calicut",
    departments: {
        science: {
            name: "Science",
            head: "Ambili",
            courses: ["Biology", "Chemistry", "Physics"]
        },
        Commerce: {
            name: "Commerce",
            head: "Shilpa",
            courses: ["Computer Application", "Business", "Ecnomics"]
        },
        Humanities: {
            name: "Humanities",
            head: "Solaman",
            courses: ["History", "Geography", "Journalism"]
        }
    }
};
console.log("Head of Science Department:", school.departments.science.head);
console.log("Head of Mathematics Department:", school.departments.Commerce.head);
console.log("Head of Literature Department:", school.departments.Humanities.head);


school.departments.science.courses.push("Computer Science");

console.log(school.departments.science.courses);
