// --------------- Events ---------------

// set mouse enter event handler
const items = document.querySelectorAll('#main-list>li');

function addHoverEffect(item) {
    item.onmouseenter = () => {
        item.classList.add('large');
        item.nextElementSibling.classList.add('mute');
        item.previousElementSibling.classList.add('mute');
    }
    item.onmouseleave = () => {
        item.classList.remove('large');
        item.nextElementSibling.classList.remove('mute');
        item.previousElementSibling.classList.remove('mute');
    }
}

for (const li of items) {
    addHoverEffect(li);
}

// -------------- Forms --------------
const addBtn = document.querySelector('form button[type="submit"]');
const list = document.querySelector('#main-list');
const nameInput = document.querySelector('form input');

addBtn.onclick = (event) => {
    event.preventDefault();

    // get value from input
    const name = nameInput.value;

    // data validation
    if (!name) {
        alert("Can not add empty item!");
        return;
    }

    // create new item
    const li = document.createElement("li");
    li.textContent = name;
    addHoverEffect(li);

    // add item to list
    list.appendChild(li);
}

const showAlert = () => alert("Hello!");

addBtn.addEventListener('click', function () {
    addBtn.textContent += "+";

    if (addBtn.textContent.length > 10)
        addBtn.removeEventListener('click', showAlert); // remove
});
addBtn.addEventListener('click', showAlert);

addBtn.onclick = (event) => {
    event.preventDefault();

    addBtn.textContent += "+";
}