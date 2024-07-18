const rotItems = document.querySelector(".rotator").children;
let currentIdx;

for (let idx = 0; idx < rotItems.length; idx++) {
    if (rotItems[idx].classList.contains("rotator__case_active")) {
        currentIdx = idx;
        break;
    };
};

setInterval(() => {
    rotItems[currentIdx].classList.remove("rotator__case_active");

    if (currentIdx < rotItems.length - 1) {
        currentIdx++;
        rotItems[currentIdx].classList.add("rotator__case_active");
    } else {
        currentIdx = 0;
        rotItems[currentIdx].classList.add("rotator__case_active");
    };
    
}, 1000);
