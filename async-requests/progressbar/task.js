const formObj = document.getElementById("form");
const progressObj = document.getElementById("progress");

formObj.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("progress", (pe) => {
        progressObj.value = pe.loaded / pe.total;
    });

    xhr.addEventListener("loadend", (pe) => {
        progressObj.value = 1.0;
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    const formData = new FormData(formObj);
    xhr.send(formData);
});
