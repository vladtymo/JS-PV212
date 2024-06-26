const api = 'https://dummyjson.com/products';
const list = document.querySelector('#products-list');
const loadBtn = document.querySelector('#loadBtn');

const pagination = {
    skip: 0,
    limit: 30,
    total: null,
    next() {
        this.skip += this.limit;
    }
}

async function loadProducts() {
    const response = await fetch(`${api}?skip=${pagination.skip}`); // GET
    pagination.next();

    console.log("Status: ", response.status);

    const data = await response.json();
    pagination.total = data.total;
    console.log(data);

    for (const i of data.products) {
        // Використання шаблону та додавання на сторінку
        var source = document.getElementById('cardTemplate').innerHTML;
        var template = Handlebars.compile(source);
        var html = template(i);

        list.innerHTML += html;
    }
}

loadProducts();

loadBtn.onclick = () => {
    loadProducts();
}