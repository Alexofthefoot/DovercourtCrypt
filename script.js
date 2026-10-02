const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const fadeDistance = window.innerHeight;

    const opacity = Math.max(
        0,
        1 - scroll / fadeDistance
    );

    hero.style.opacity = opacity;

    if (opacity === 0) {
        hero.style.visibility = "hidden";
    } else {
        hero.style.visibility = "visible";
    }
});

function openModal(modalId, imgSrc) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let img = document.getElementById("modal-img");
  img.src = imgSrc;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}


const modal = document.getElementById('modal1');
window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });