function createTaskElements() {
  const input = createElement("input");
  input.type = "checkbox";

  const del = createElement("img");
  del.src = "./svg/Trash.svg"
  del.classList.add("deleteBtn");

  const dropDown = createElement("img");
  dropDown.src = "./svg/Arrow.svg"
  dropDown.classList.add("dropDown");

  return { input, del, dropDown };
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
    createElement
  ) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.priorityLevel = priorityLevel;
    this.description = description;
    this.elements = createElement();
  }

  showDescription() {
    console.log(this.description);
  }

  checked() {}
}