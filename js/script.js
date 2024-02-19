
document.addEventListener('click',handleKeyboardButtonPress )





function handleKeyboardButtonPress(event) {
    if (event.target.classList.contains('k')) {
        const seat = document.getElementById('seatLeft');
        const seatText = seat.innerText;
        let currentSeat = parseInt(seatText);
        if (currentSeat > 0) {
            const newSeat = currentSeat - 1;
            seat.innerText = newSeat;
            event.target.classList.add('bg-[#1DD100]');
            event.target.disabled = true;
        } else {
            alert('No more seats available!');
        }
    }
}

    

