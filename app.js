// DOM elements
const studentForm = document.getElementById("studentForm");
const StudentsContainer = document.querySelector(".students");
// getting Dom elements using name attribute..studentForm is the parent inside parent the class which has the name attribute as name we get
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollNoInput = studentForm["roll"];
// students object looks like
// {
//     name:'',
//     age:Number,
//     roll:Number
// }

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name: name,
    age: age,
    roll: roll,
  });
  localStorage.setItem("students", JSON.stringify(students));
  return { name, age, roll };
};
const createStudentElement = ({ name, age, roll }) => {
  // 'we created the element'
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  // fill the content

  studentName.innerText = "Student Name: " + name;
  studentAge.innerText = "Student Age: " + age;
  studentRoll.innerText = "Student roll: " + roll;

  //append the elements to dom
  //for many elements we can use append()
  studentDiv.append(studentName, studentAge, studentRoll);
  //for single elements we can use appendChild()
  StudentsContainer.appendChild(studentDiv);
};

StudentsContainer.style.display = students.length === 0 ? "none" : "flex";
//here we dont call the function we just referencing the function by name when foreach loop goes inside that function we just get the name age and roll from function and assign it
students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();
  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollNoInput.value
  );
  createStudentElement(newStudent);
  nameInput.value = "";
  ageInput.value = "";
  rollNoInput.value = "";
};
