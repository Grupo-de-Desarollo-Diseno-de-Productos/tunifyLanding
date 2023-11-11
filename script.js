function activePopup(){
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    document.getElementById('nomBox').value = "";
    document.getElementById('emaBox').value = "";
}

function deactivatePopup(){
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
  const doc = document;
  const menuOpen = doc.querySelector(".menu");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
});