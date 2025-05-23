const clock = document.querySelector(".clock");

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${h} : ${m} : ${s}`;
}

updateClock();
setInterval(updateClock, 1000);