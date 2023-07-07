interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Guillaume",
  lastName: "Code",
  age: 24,
  location: "Columbia",
};

const student2: Student = {
  firstName: "Serena",
  lastName: "James",
  age: 20,
  location: "San Francisco",
};

const studentArray: Array<Student> = [student1, student2];

const displayTable = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const tableRow = document.createElement("tr");
  tableRow.insertAdjacentHTML("afterbegin", "<th>firstName</th>");
  tableRow.insertAdjacentHTML("beforeend", "<th>lastName</th>");
  tableRow.insertAdjacentHTML("beforeend", "<th>Age</th>");
  tableRow.insertAdjacentHTML("beforeend", "<th>Location</th>");
  tableHead.insertAdjacentElement("afterbegin", tableRow);

  for (const item of students) {
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${item.firstName}</td`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${item.lastName}</td`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${item.age}</td`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${item.location}</td`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  }

  table.insertAdjacentElement("afterbegin", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
};

displayTable(studentArray);
