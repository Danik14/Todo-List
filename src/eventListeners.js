function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleSidebar() {
  const button = document.getElementById("sidebarButton");
  button.addEventListener("click", () => {
    const sideBar = document.getElementById("sideBar");
    const main = document.getElementById("main");
    if (sideBar.classList.contains("toggledSideBar")) {
      sideBar.classList.remove("toggledSideBar");
      main.classList.remove("toggledMain");
    } else {
      sideBar.classList.add("toggledSideBar");
      main.classList.add("toggledMain");
    }
  });
}

export { toggleSidebar };
