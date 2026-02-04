/*

Add items form input field when add item button is clicked

delete items when X icon is clicked


Clear all items when clear all button is clicked

filter items by character in the filter input and have relevant items appear in the ul


*/

// DOM ELEMENTS

const formIdEl = document.getElementById("formid");
const addItemFieldEl = document.getElementById("clearfield");
const filterInput = document.querySelector(".inputfield");
const ulEl = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

// Event Listeners

formIdEl.addEventListener("submit", submitForm);

//Functions

function submitForm(e) {
  e.preventDefault();
  // Create element with js
  const li = document.createElement("li");
  // add input value to li
  li.textContent = addItemFieldEl.value + " ";
  li.className = "list-item";

  //Create Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.className = "removebtn jsremovebtn";

  // Create icon in button
  const icon = document.createElement("i");
  icon.className = "fa fa-minus-square";

  //append changes
  deleteBtn.appendChild(icon);
  li.appendChild(deleteBtn);
  ulEl.appendChild(li);

  // clear the input value
  addItemFieldEl.value = "";
}
