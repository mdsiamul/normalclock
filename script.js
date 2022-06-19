setInterval(setClock, 1000);
const hourHand = document.querySelector(`[data-hour-hand]`);
const minuteHand = document.querySelector(`[data-minute-hand]`);
const secondHand = document.querySelector(`[data-second-hand]`);


function setClock() {
    const currentDate = new Date();
    const secondRation = currentDate.getSeconds() / 60;
    const minutesRation = (secondRation + currentDate.getMinutes()) / 60;
    const hoursRation = (minutesRation + currentDate.getHours()) / 12;
    setRutation(secondHand, secondRation)
    setRutation(minuteHand, minutesRation)
    setRutation(hourHand, hoursRation)
}
function setRutation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
}