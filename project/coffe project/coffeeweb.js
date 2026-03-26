const openMenuBtn = document.getElementById("menu-open-button");
const closeMenuBtn = document.getElementById("menu-close-button");

openMenuBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-moble-menu");
});

closeMenuBtn.addEventListener("click", () => {
    document.body.classList.remove("show-moble-menu");
});

console.log(openMenuBtn);
