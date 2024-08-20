const elems = document.querySelectorAll("a.has-tooltip");

for (let idx = 0; idx < elems.length; idx++) {
    elems[idx].insertAdjacentHTML(
        "afterEnd", `<div class="tooltip">${elems[idx].getAttribute("title")}</div>`
    );
    
    elems[idx].onclick = (event) => {
        event.preventDefault();

        const tooltip = elems[idx].nextSibling;
        tooltip.style.left = `${elems[idx].offsetLeft}px`;
        tooltip.classList.toggle("tooltip_active");
    };
};
