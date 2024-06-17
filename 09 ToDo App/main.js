window.onload = () => {
    load();
}

// -------- get form elements
const list = document.querySelector('#todo-list');
const form = document.forms.taskForm;

const titleIn = form.elements.title;
const deadlineIn = form.elements.deadline;
const flaggedCb = form.elements.flagged;

let todoItems = [];

form.onsubmit = (e) => {
    e.preventDefault();

    let task = {
        title: titleIn.value,
        deadline: deadlineIn.value,
        flagged: flaggedCb.checked
    }
    todoItems.push(task);

    addItemToList(task);

    save();
}

function addItemToList(item) {
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${item.title}</div>
                                ${item.deadline}
                            </div>
                            ${item.flagged
            ? '<span class="text-danger"> <i class="bi bi-flag-fill"></i></span>'
            : ""}
                        </li>`;
}

function save() {
    // JSON.stringify() - convert object to JSON string
    // JSON.parse() - convert JSON string to JS object

    localStorage.setItem("list-data", JSON.stringify(todoItems));
}

function load() {
    todoItems = JSON.parse(localStorage.getItem("list-data")) ?? [];

    for (const i of todoItems) {
        addItemToList(i);
    }
}

