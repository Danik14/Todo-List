import { header, main } from "./view";
import { toggleProjects, toggleSidebar } from "./eventListeners";
import style from "./style.css";
import { Task } from "./Task";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(header());
  body.appendChild(main());
}

App();
toggleSidebar();
toggleProjects();
