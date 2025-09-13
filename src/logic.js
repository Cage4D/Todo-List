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

