const tabs = document.querySelector(".tab__navigation").children;
const contents = document.querySelector(".tab__contents").children;
let currentIdx = 0;

for (let idx = 0; idx < tabs.length; idx++) {
    tabs[idx].onclick = () => {
        tabs[currentIdx].classList.remove("tab_active");
        contents[currentIdx].classList.remove("tab__content_active");

        tabs[idx].classList.add("tab_active");
        contents[idx].classList.add("tab__content_active");
        
        currentIdx = idx;
    };
};
