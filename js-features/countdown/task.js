const timer = document.getElementById("timer");
const startValue = Number(timer.textContent);

function countdown(startValue) {
    let current = startValue;

    let timerId = setInterval(() => {
        current--;
        timer.textContent = String(current);

        if (current == 0) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        };
    }, 1000);
};

countdown(startValue);
