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
  const try1 = document.createElement("div");
  try1.innerHTML = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`;
  body.append(try1);
}

App();
toggleSidebar();
toggleProjects();
