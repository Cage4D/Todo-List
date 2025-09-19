import TrashIcon from "../svg/Trash.svg";
import { projects, colorArray } from "./logic.js"

let currentProject = null;

function createElement(tag, className, textContent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;

  return el;
}