const list = document.querySelector('ol');

// ---------- send request to server
const api = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {

    const result = await fetch(api);
    console.log("Status:", result.status);

    const users = await result.json();
    console.log(users);

    for (const i of users) {
        list.innerHTML += `<li>${i.name} ... ${i.address.city}</li>`
    }
}

loadUsers();
