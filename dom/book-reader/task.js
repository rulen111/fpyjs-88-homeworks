const fontSwitches = document.querySelector(".book__control_font-size").children;
const book = document.querySelector(".book");

for (let idx = 0; idx < fontSwitches.length; idx++) {
    fontSwitches[idx].addEventListener("click", (event) => {
        event.preventDefault();
        for (let idx2 = 0; idx2 < fontSwitches.length; idx2++) {
            if (fontSwitches[idx2].classList.contains("font-size_active")) {
                fontSwitches[idx2].classList.remove("font-size_active");
            };
        };

        fontSwitches[idx].classList.add("font-size_active");

        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        const size = fontSwitches[idx].getAttribute("data-size");
        if (size) {
            book.classList.add(`book_fs-${size}`);
        };
    });
};
