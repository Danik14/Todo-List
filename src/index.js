import { header, main, popUpNewTask, newProject } from "./view";
import { Events } from "./eventListeners";
import style from "./style.css";
import { Task } from "./Task";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DomHelperFunctions } from "./domHelperFunctions";
import flatpickr from "flatpickr";

function App() {
  const body = document.getElementsByTagName("body")[0];
  const flatpickrLink = document.createElement("link");
  flatpickrLink.setAttribute("rel", "stylesheet");
  flatpickrLink.setAttribute(
    "href",
    "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
  );
  document.getElementsByTagName("head")[0].append(flatpickrLink);
  const wrapper = DomHelperFunctions.createElementWithClass(
    "div",
    "container-fluid"
  );
  wrapper.classList.add("px-0");
  wrapper.appendChild(header());
  wrapper.appendChild(main());
  wrapper.appendChild(popUpNewTask());
  wrapper.appendChild(newProject());
  body.appendChild(wrapper);

  flatpickr(document.getElementById("inputDueDate"), {});

  Events();
}

App();
