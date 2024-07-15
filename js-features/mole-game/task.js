function getHole(idx) {
    return document.getElementById(`hole${idx}`);
};

const frags = document.getElementById("dead");
const loses = document.getElementById("lost");

for (let idx = 1; idx < 10; idx++) {
    const hole = getHole(idx);

    hole.onclick = () => {
        if (hole.classList.contains( 'hole_has-mole' )) {
            let fragCounter = Number(frags.textContent);
            fragCounter++;
            frags.textContent = String(fragCounter);

            if (fragCounter >= 10) {
                alert("Победа!");
            };
        } else {
            let losesCounter = Number(loses.textContent);
            losesCounter++;
            loses.textContent = String(losesCounter);

            if (losesCounter >= 5) {
                alert("Вы проиграли!");
            };
        };
    };
};
