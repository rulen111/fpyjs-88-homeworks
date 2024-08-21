function loadItems(parent, items) {
    for (curr in items) {
        const child = document.createElement("div");
        child.classList.add("item");
        child.innerHTML = `<div class="item__code">
                                ${items[curr]["CharCode"]}
                            </div>
                            <div class="item__value">
                                ${items[curr]["Value"]}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>`;
        parent.appendChild(child);
    };
};

const loader = document.getElementById("loader");
const itemsList = document.getElementById("items");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        loadItems(itemsList, xhr.response.response.Valute);
    };
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = 'json';
loader.classList.add("loader_active");
xhr.send();
