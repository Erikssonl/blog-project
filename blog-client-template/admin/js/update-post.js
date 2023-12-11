
const select = document.getElementById('tags');

select.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const option = e.target;
    const alreadySelected = option.selected;

    if (alreadySelected) {
        option.selected = false;
    } else {
        option.selected = true;
    }
});
