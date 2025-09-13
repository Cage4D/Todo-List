export { Todo, TodoStorage, createTaskElements, Project };
import TrashIcon from "../svg/Trash.svg"
import ArrowIcon from "../svg/Arrow.svg"

function createTaskElements() {
  const input = createElement("input");
  input.type = "checkbox";

  const del = createElement("img");
  del.src = TrashIcon;
  del.classList.add("deleteBtn");

  const dropDown = createElement("img");
  dropDown.src = ArrowIcon;
  dropDown.classList.add("dropDown");

  return { input, del, dropDown };
}

function createElement(input) {
  return document.createElement(input);
}

class TodoStorage {
  constructor() {
    this.tasks = [];
  }
  add(task) {
    this.tasks.push(task);
  }
  deleteByUID(UID) {
    this.tasks = this.tasks.filter((task) => task.uid !== UID);
  }
  getAll() {
    return [...this.tasks];
  }
}

class Task {
  constructor(
    taskName,
    dueDate,
    priorityLevel,
    description = null,
    makeElements
  ) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.priorityLevel = priorityLevel;
    this.description = description;
    this.elements = makeElements();
  }

  showDescription() {
    console.log(this.description);
  }

  checked() {}
}

class Todo {
  constructor(name, storage, makeElement) {
    this.name = name;
    this.storage = storage;
    this.makeElements = makeElement;
  }

  createTask(taskName, dueDate, priorityLevel, description = null) {
    const task = new Task(
      taskName,
      dueDate,
      priorityLevel,
      description,
      this.makeElements
    );
    this.storage.add(task);
    return task;
  }

  deleteTask(UID) {
    this.storage.deleteByUID(UID);
  }

  getTasks() {
    this.storage.getAll();
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.uid = crypto.randomUUID()
    this.storage = []
  }

  add(todo) {
    this.storage.push(todo)
  }

  getAll() {
    return [...this.storage]
  }
}
