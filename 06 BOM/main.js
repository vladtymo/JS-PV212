// ----------- BOM -----------

// window.close();
// window.open();

window.onresize = () => {
    document.body.innerHTML += "!";
}

// setTimeout(() => {
//     alert("Hello!");
// }, 2000);

// window.alert();
// this.alert();
// alert();

// ---------------- navigator
console.log(navigator);

navigator.geolocation.getCurrentPosition((res) => {
    console.log("Current position: ", res.coords);
}, (err) => {
    console.error(err);
});

// ---------------- screen
console.log(screen);

// ---------------- history
console.log(history);

// history.forward();
// history.back();
// history.go(-3); // back 3 pages 

// ---------------- location
console.log(location);

//location.reload();

//location.assign("https://google.com");
//location.replace("https://google.com"); // save current in history
