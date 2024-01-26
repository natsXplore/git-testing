document.addEventListener("keydown", function (event) {
  event.preventDefault();
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  showWarning();
});

function showWarning() {
  alert("right click are disabled on this page.");
}
