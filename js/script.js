

document.addEventListener('click', handleKeyboardButtonPress);




function handleKeyboardButtonPress(event) {
    if (event.target.classList.contains('k')) {
        const seat = document.getElementById('seatLeft');
        const seatText = seat.innerText;
        const currentSeat = parseInt(seatText);


        const seatSelect =document.getElementById('seatSelect')
        const seatSelectText=seatSelect.innerText;
        const currentSeatSelect = parseInt(seatSelectText)
        if(currentSeatSelect < 8){
            const newSeatSelect =currentSeatSelect +1;
            seatSelect.innerText=newSeatSelect;
        }


        if (currentSeat > 0) {
            const newSeat = currentSeat - 1;
            seat.innerText = newSeat;

            event.target.classList.add('bg-[#1DD100]');
            event.target.disabled = true;

            const buttonText = event.target.innerText;
            const classText = 'Economy';
            const priceText = '550';
            const textToAdd = buttonText + ' - ' + classText + ' - BDT ' + priceText;

            handleKeyboardButtonPress2(textToAdd);

            updateTotalPrice(parseInt(priceText));
    
        }
        


         else {
            alert('No more seats available!');
        }
    }
}

function handleKeyboardButtonPress2(textToAdd) {
    const container = document.getElementById('scp');
    container.classList.add('grid', 'grid-cols-3', 'text-center');
    
    const textArray = textToAdd.split(' - ');
    textArray.forEach(text => {
        const textElement = document.createElement('div');
        textElement.textContent = text;
        container.appendChild(textElement);
    });
}




function updateTotalPrice(price) {
    const totalElement = document.getElementById('total');
    const currentTotal = parseInt(totalElement.innerText.replace('BDT ', ''));
    const newTotal = currentTotal + price;
    totalElement.innerText = 'BDT ' + newTotal;

    const grandTotalElement = document.getElementById('grandtotal');
    grandTotalElement.innerText=totalElement.innerText
}


function calculateDiscount() {
    const totalElement = document.getElementById('total');
    const grandTotalElement = document.getElementById('grandtotal');
    const inputValue = document.getElementById('inputFild').value.trim();
    const discountButton = document.getElementById('apply');

    if (inputValue === 'NEW15') {
        const currentTotal = parseFloat(totalElement.innerText.replace('BDT',''));
        const discountAmount = currentTotal * 0.15; 
        const discountedTotal = currentTotal - discountAmount;
        grandTotalElement.innerText = 'BDT ' + discountedTotal.toFixed(2);
        discountButton.disabled = true;
        return discountAmount
    }
    if (inputValue === 'Couple20') {
        const currentTotal = parseFloat(totalElement.innerText.replace('BDT ', ''));
        const discountAmount = currentTotal * 0.20;
        const discountedTotal = currentTotal - discountAmount;
        grandTotalElement.innerText = 'BDT ' + discountedTotal.toFixed(2);
        discountButton.disabled = true;
        return discountAmount
        
    }

    
     else {
        
        alert('invalid copun')
    }
}

document.getElementById('name').addEventListener('input', enableNextButton);
    document.getElementById('number').addEventListener('input', enableNextButton);

function enableNextButton() {
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const nextButton = document.getElementById('next');

    if (name !== '' && number !== '') {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}   



function lastCode(){

    hideElementById('fistSection')
    showElementById('secondSection')
}



function hideElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}

