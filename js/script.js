// { } =  []
"use strict";

var row = null;

function onFormSubmit() {
  console.log(document.links);
  let data = formData();
  if (validateForm()) {
    if (row == null) {
      insertData(data);
    } else {
      updateForm(data);
    }
  }
}

function formData() {
  let form = {};

  form.fName = document.getElementById("name").value;
  form.email = document.getElementById("email").value;
  form.num = document.getElementById("number").value;
  form.package = document.getElementById("package").value;

  return form;
}

function insertData(data) {
  let table = document
    .getElementById("bookingList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fName;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.num;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.package;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick="onEdit(this)"> <button class="modification" > Edit </button> </a> <a onClick="onDelete(this)"> <button  class="modification1" > delete </button> </a>  `;
  resetForm();
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("package").value = "";
  row = null;
}

function onEdit(th) {
  row = th.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("email").value = row.cells[1].innerHTML;
  document.getElementById("number").value = row.cells[2].innerHTML;
  document.getElementById("package").value = row.cells[3].innerHTML;
  console.log(row);
}

function updateForm(data) {
  row.cells[0].innerHTML = data.fName;
  row.cells[1].innerHTML = data.email;
  row.cells[2].innerHTML = data.num;
  row.cells[3].innerHTML = data.package;
  resetForm();
}

function onDelete(th) {
  if (confirm("Are you Sure?")) {
    row = th.parentElement.parentElement.rowIndex;
    document.getElementById("bookingList").deleteRow(row);
    resetForm();
  }
}

function validateForm() {
  let uName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phono = document.getElementById("number").value;
  let pack = Number(document.getElementById("package").value);

  if (uName == "" || email == "" || phono == "" || pack < 0 || pack > 4) {
    alert("Invalid Input");
    return false;
  }
  return true;
}
