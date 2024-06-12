const tBoby = document.querySelector('table tbody');

// --------- get form element
const form = document.forms.createForm;

const nameIn = form.elements.name;
const priceIn = form.elements.price;
const inStockCb = form.elements.inStock;

form.onsubmit = (event) => {
    event.preventDefault();

    console.log("Data: ", nameIn.value, priceIn.value, inStockCb.checked);

    // create product object

    // TODO: move to function
    tBoby.innerHTML += `<tr>
                            <th scope="row">${1}</th>
                            <td>${nameIn.value}</td>
                            <td>${priceIn.value}</td>
                            <td>${inStockCb.checked}</td>
                        </tr>`;
}