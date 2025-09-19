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

function createProject(project) {
  const projectDiv = createElement("div", "project-todo");

  const title = createElement("div", "title", project.title);
  projectDiv.append(title);

  project.tasks.forEach((task) => {
    const baseline = createElement("div", "baseline");
    const todoItem = createTodoItem(task);

    projectDiv.append(baseline, todoItem);
  });

  const addTask = createElement("div", "add-task", "+ Add task");
  const taskModal = document.querySelector("#taskModal");

  addTask.addEventListener("click", () => {
    taskModal.className = "";
    taskModal.classList.add(".fade-in");
    taskModal.showModal();
  });
  projectDiv.append(addTask);

  return projectDiv;
}

function randomColorGenerator(array) {
  const num = Math.floor(Math.random() * array.length)
  return array[num]
}

function sidebarContents(projects) {
  const pro = document.querySelector("#projects");
  pro.innerHTML = "";

  projects.forEach((project) => {
    const projectContainer = createElement("div", "project");

    const box = createElement("div", "box");
    box.style.backgroundColor = randomColorGenerator(colorArray)

    const label = createElement("div", "label");
    label.textContent = project.title;

    const task = createElement("div", "todo");
    project.tasks.forEach((tk) => {
      const pound = createElement("div", "pound", "#");
      pound.style.color = randomColorGenerator(colorArray)
      const taskLabel = createElement("div", "todolabel", tk.name);
      task.append(pound, taskLabel);
    });
    projectContainer.append(box, label, task);
    pro.append(projectContainer);
  });
  return pro;
}

function body(project) {
  const body = document.querySelector(".body");
  body.innerHTML = "";
  const projectEl = createProject(project);
  body.appendChild(projectEl);
}

const mainDialog = (function () {
  //DIALOG
  const dialog = document.querySelector("#modal");
  const addProject = document.querySelector(".addProject");

  addProject.addEventListener("click", () => {
    dialog.className = "";
    dialog.classList.add("fade-in");
    dialog.showModal();
  });

  //FORM
  const proName = document.querySelector("#proName");
  const taskName = document.querySelector("#taskName");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelectorAll("input[id^='priority']");
  const form = document.querySelector("#form");

  //MODAL BUTTONS
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.addEventListener("click", pullInfo);

  const closeBtn = document.querySelector("#closeBtn");
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetModalClass(dialog, "");
  });

  return { dialog, addProject, proName, taskName, dueDate, priority, form, submitBtn, closeBtn }
})();

function closeModal(modal) {
  modal.close();
}

function resetModalClass(modal, btn) {
  modal.className = "";
  modal.classList.add("fade-out");
  if (btn === "submit") {
    setTimeout(() => {
      closeModal(modal);
    }, 800);
  } else {
    setTimeout(() => {
      closeModal(modal);
    }, 300);
  }
}

function createNewObject(
  proNameContent,
  taskNameContent,
  priorityLvl,
  dueDateContent
) {
  const newObj = {
    title: proNameContent,
    tasks: [
      {
        name: taskNameContent,
        priority: priorityLvl,
        date: dueDateContent,
        id: crypto.randomUUID(),
      },
    ],
  };
  return newObj;
}