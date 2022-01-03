import { header, main } from "./view";
import { toggleSidebar } from "./eventListeners";
import style from "./style.css";

function App() {
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(header());
  body.appendChild(main());
}

App();
toggleSidebar();
