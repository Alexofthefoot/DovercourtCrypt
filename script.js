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