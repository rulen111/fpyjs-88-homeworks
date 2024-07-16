const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const links = document.querySelectorAll(".dropdown__link")

dropdownValue.onclick = () => {
    if (dropdownList.classList.contains("dropdown__list_active")) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active");
    };
};

for (let idx = 0; idx < links.length; idx++) {
    links[idx].addEventListener("click", (event) => {
        event.preventDefault();
    });

    const item = links[idx].closest(".dropdown__item")
    item.onclick = () => {
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    };
};
