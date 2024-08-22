function loadPoll(titleObj, answersObj, data) {
    titleObj.textContent = data.data.title;
    
    const answers = data.data.answers;
    for (let answer of answers) {
        const child = document.createElement("button");
        child.classList.add("poll__answer");
        child.textContent = answer;
        child.onclick = () => {
            alert("Спасибо, ваш голос засчитан!");
        };
        answersObj.appendChild(child);
    };
};

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        loadPoll(pollTitle, pollAnswers, xhr.response);
    };
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = 'json';
xhr.send();
