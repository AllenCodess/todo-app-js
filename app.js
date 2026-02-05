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
clearBtn.addEventListener("click", clearAll);
filterInput.addEventListener("input", filterItems);

//Functions

function submitForm(e) {
  e.preventDefault();

  const inputValue = addItemFieldEl.value.trim();

  // if input is empty display message to user and prevent li being created

  if (inputValue === "") {
    alert("Please enter a valid task");
  } else {
    // Create element with js
    const li = document.createElement("li");
    // add input value to li
    li.textContent = inputValue + " ";
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

function clearAll() {
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  }
  addItemFieldEl.value = "";
}

function filterItems() {
  const filterText = filterInput.value.toLowerCase();
  const items = ulEl.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    let itemText = items[i].firstChild.textContent.toLowerCase();

    if (itemText.includes(filterText)) {
      items[i].style.display = "flex";
    } else {
      items[i].style.display = "none";
    }
  }
}
