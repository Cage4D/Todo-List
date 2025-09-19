import TrashIcon from "../svg/Trash.svg";
import { projects, colorArray } from "./logic.js"

let currentProject = null;

function createElement(tag, className, textContent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;

  return el;
}

function createTodoItem(task) {
  const item = createElement("div", "todo-items");

  const info = createElement("div", "info");
  const checkbox = createElement("input");
  checkbox.type = "checkbox";

  const name = createElement("span", "todo-name", task.name);
  info.append(checkbox, name);

  const btnTextContent = btnPriority(task.priority);
  const button = createElement("button", task.priority, btnTextContent);
  const date = createElement("span", "date", task.date);

  const svg = createElement("div", "svg");

  const trashImg = createElement("img");
  trashImg.src = TrashIcon;
  trashImg.id = "delete";
  trashImg.dataset.id = task.id;
  svg.append(trashImg);

  item.append(info, button, date, svg);
  return item;
}

function btnPriority(value) {
  let btnContent;
  if (value === "high") {
    btnContent = "HIGH PRIORITY";
  } else if (value === "medium") {
    btnContent = "MEDIUM PRIORITY";
  } else {
    btnContent = "LOW PRIORITY";
  }
  return btnContent;
}