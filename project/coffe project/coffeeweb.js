const openMenuBtn = document.getElementById("menu-open-button");
const closeMenuBtn = document.getElementById("menu-close-button");

openMenuBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-moble-menu");
});

closeMenuBtn.addEventListener("click", () => {
    document.body.classList.remove("show-moble-menu");
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
});


