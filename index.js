const list = document.querySelector(".container_photos");
const wraper = document.querySelectorAll(".wrap_up-text");

list.addEventListener("click", (event) => {
    const currentElem = event.target.closest(".wrap_card");
    const prevElem = list.querySelector(".active");

    if (prevElem) {
        prevElem.classList.remove("active");
    }

    if (currentElem === prevElem) {
        currentElem.classList.remove("active");
    } else {
        const elem = event.target.closest(".wrap_card");
        elem.classList.toggle("active");
    }
});

gsap.registerPlugin(ScrollTrigger);

const numberElements = document.querySelectorAll(
    ".by_the_numbers_list_item h2"
);

const animationTime = 2;

numberElements.forEach((element) => {
    const originalText = element.textContent.trim();
    const hasPlus = originalText.includes("+");
    const targetNumber = parseInt(originalText.replace(/\D/g, ""), 10);

    ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => animateNumber(element, targetNumber, hasPlus),
        onEnterBack: () => animateNumber(element, targetNumber, hasPlus),
    });
});

function animateNumber(element, target, hasPlus) {
    const counter = { value: 0 };

    gsap.to(counter, {
        value: target,
        duration: animationTime,
        ease: "power1.out",
        onUpdate: () => {
            element.textContent =
                Math.floor(counter.value).toLocaleString() + (hasPlus ? "+" : "");
        },
    });
}

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1920: {
            slidesPerView: 3,
        },
    },
    centredSlides: true,
    spaceBetween: 30 + "px",
    loop: true,
});