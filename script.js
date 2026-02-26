
let clicked = false;
let arr = [];

const selectOptions = document.querySelector('select');
let mines = selectOptions.value;

pickRandomBoxes();

selectOptions.addEventListener('change', (e) => {
    if (!clicked) {
        mines = e.target.value;
        arr = [];
        pickRandomBoxes();
    }
    else {
        const dialoge = document.getElementById('interrupt');
        dialoge.showModal();
        dialoge.style.display = 'block';
    }
});

function pickRandomBoxes() {
    let num;
    while (arr.length != mines) {
        num = Math.floor(Math.random() * 25 + 1);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    // console.log(arr);
}

document.querySelectorAll('div[id]').forEach((divs) => {
    // console.log(divs);
    divs.addEventListener('click', (e) => {
        clicked = true;
        // console.log(e);
        const id = e.target.id;
        const box = document.getElementById(`${id}`);
        // console.log(box);
        if (arr.indexOf(Number(id)) === -1) {
            box.style.backgroundColor = "#8f6ddbc2";
            box.style.backgroundImage = "url('./images/dimond-BH.svg')";
            box.style.backgroundRepeat = "no-repeat";
        }
        else {
            box.style.backgroundColor = "#8f6ddbc2";
            box.style.backgroundImage = "url('./images/mine.Bomb-X0T.svg')";
            setInterval(() => {
                const dialoge = document.getElementById('dlg');
                dialoge.showModal();
                dialoge.style.display = 'block';
            }, 300)
        }
    })
})


document.getElementById('refreshButton').addEventListener('click', () => {
    console.log("hello");
    location.reload();
});
document.getElementById('refreshButtonInterrupt').addEventListener('click', () => {
    console.log("hello");
    location.reload();
});

document.getElementById('continue').addEventListener("click", () => {
    const dialoge = document.getElementById('interrupt');
    dialoge.close();
    dialoge.style.display = 'none';

});
