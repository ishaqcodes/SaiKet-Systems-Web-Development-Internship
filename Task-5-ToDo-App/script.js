const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    let textSpan = document.createElement("span");
    textSpan.innerHTML = inputBox.value;
    li.appendChild(textSpan);

    textSpan.addEventListener("click", function () {
      li.classList.toggle("checked");
    });

    let div = document.createElement("div");
    div.className = "btn-group";

    let editBtn = document.createElement("span");
    editBtn.innerHTML = "&#9998;";
    editBtn.className = "edit-btn";
    editBtn.title = "Edit";
    editBtn.onclick = function (e) {
      e.stopPropagation();
      let currentText = textSpan.innerHTML;
      let newText = prompt("Edit your task:", currentText);
      if (newText !== null && newText.trim() !== "") {
        textSpan.innerHTML = newText;
      }
    };

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    deleteBtn.className = "delete-btn";
    deleteBtn.title = "Delete";
    deleteBtn.onclick = function (e) {
      e.stopPropagation();
      li.remove();
    };

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
