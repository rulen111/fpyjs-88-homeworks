const blocks = document.querySelectorAll(".reveal");

window.onscroll = () => {
    for (let idx = 0; idx < blocks.length; idx++) {
        const { top, bottom } = blocks[idx].getBoundingClientRect();

        if (bottom > 0 && top < window.innerHeight) {
            blocks[idx].classList.add("reveal_active");
        } else {
            blocks[idx].classList.remove("reveal_active");
        };
    };
};
