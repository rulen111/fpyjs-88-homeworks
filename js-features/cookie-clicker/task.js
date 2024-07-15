const img = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let enlarge = 1;

img.onclick = () => {
    let count = Number(counter.textContent);
    count++;
    counter.textContent = String(count);

    img.width += enlarge * img.width * 0.1;
    img.height += enlarge * img.height * 0.1;

    enlarge *= -1;
};
