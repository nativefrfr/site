const select = document.querySelector('select');

for (let i = 1; i <= 25; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    if (i == 3) {
        option.selected = true;
    }
    select.appendChild(option);
}


