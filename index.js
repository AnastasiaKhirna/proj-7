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
