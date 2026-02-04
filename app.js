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
const removebtnEl = document.querySelector(".removebtn");

// Event Listeners

formIdEl.addEventListener("submit", submitForm);
ulEl.addEventListener("click", deleteItem);

//Functions

function submitForm(e) {
  // if input is empty display message to user and prevent li being created

  if (addItemFieldEl.value === "") {
    alert("Please enter a valid task");
  } else {
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

  e.preventDefault();
}

function deleteItem(e) {
  let target = e.target;
  // target equals the "I" element here and checks if it contains a class
  if (target.tagName === "I" && target.parentNode.classList.contains("removebtn")) {
    let listItem = target.parentNode.parentNode;
    ulEl.removeChild(listItem);
    //target equals the "button" here and checks if it contains a class
  } else if (target.tagName === "BUTTON" && target.classList.contains("removebtn")) {
    listItem = target.parentNode;
    ulEl.removeChild(listItem);
  }
}
