"use strict";

let students = [];

window.onload = function () {
  const stored = localStorage.getItem("students");

  if (stored) {
    students = JSON.parse(stored);
    displayStudents();
    updateAverage();
  }
};

function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "" || name === isNaN) {
    alert("Debes capturar un nombre válido");

    return;
  }

  const grade = parseFloat(document.getElementById("gradeInput").value);

  if (grade > 100 || grade < 0) {
    alert("Debes capturar una calificación valida");

    return;
  }

  const student = { // operador terniario, necesitas una condicional y dos valores

    name,
    grade,
    status: grade >= 70 ? "Passed" : "Failed", // Esto es como un IF, resultados del if es el signo de interrogación y del else los dos puntos
  };

  students.push(student); // Para que guarde la información en la variable
  displayStudents(); // para que haga la función de abajo seguida de agregar valor a la variable
  updateAverage(); // para que se actualice el promedio al momento de agregar el valor
  saveToLocalStorage(); // Para que guarde la información en el cache, o mas bien apra que genere cache
  document.getElementById("nameInput").value = ""; // para borrar los valores que estan en los inputs
  document.getElementById("gradeInput").value = ""; // para borrar los valores que estan en los inputs
}

function displayStudents() {
  const list = document.getElementById("studentList");

  list.innerHTML = ""; // es como para editar el html y vayas agregando desde esta linea de código

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<p>${students[i].name} - ${students[i].grade} - ${students[i].status}</p>`;
    li.classList.add(students[i].grade >=70 ? "passed" : "failed"); // agregamos una clase para dar estilos con un operador terniario

    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.lenght === 0) {
    return;
  }

  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }

  let average = total / students.length;

  document.getElementById(
    "averageDisplay"
  ).textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}
