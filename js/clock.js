const clock = document.querySelector('.schedule-clock');

console.log(clock);
const setClock = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);
    clock.innerText = `${hour} : ${minute}`;
}
setInterval(setClock, 1000);