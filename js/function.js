let selectedSeatEl = document.getElementById("selected-seat")
let selectedSeat = [];
let countSeat = document.getElementById('count-seat')
let countSeatNumber = parseFloat(countSeat)
let availableSeat = document.getElementById('available-seat')
let newTotal = document.getElementById('total-price')
let totalPrice = 0
let couponInput = document.getElementById('coupon-field')
let couponBtn = document.getElementById('coupon-btn')
let defaultText = document.getElementById('default-text')

function showElByClick(event) {
    let values = event.innerText;

    if (selectedSeat.includes(values)) {
        return alert('seat already booked')
    } else if(selectedSeat.length < 4) {
        selectedSeat.push(event.innerText)
        event.classList.add('bg-[#1dd100]', 'text-white')
        countSeat.innerText = selectedSeat.length
        const availableSeatValue = parseFloat(availableSeat.innerText)
        const newAvailableSeatValue = availableSeatValue - 1
        availableSeat.innerText = newAvailableSeatValue
        defaultText.classList.add('hidden')
        selectedSeatEl.innerHTML += `
            <li class="flex font-normal justify-between text-black">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
            </li>
            `
        // update total price
        totalPrice += 550;
        newTotal.innerText = totalPrice.toFixed(2)

        if (selectedSeat.length > 3) {
            couponInput.removeAttribute('disabled')
            couponBtn.removeAttribute('disabled')
        }
        
    }else{
        return alert('maximum seat booked')
    }


}

document.getElementById('coupon-btn').addEventListener('click', function(){
    const inputValue = couponInput.value;
    let couponSave = document.getElementById('grand-total')
    let couponSaveEm= 0
    if(inputValue !== 'NEW50' && inputValue !== "Couple 20"){
        return alert('this coupon is not valid')
    }
    if(inputValue === "NEW50"){
        couponSaveEm = totalPrice * .15
        let newMoney = totalPrice - couponSaveEm
        couponSave.innerText = newMoney
    }else if(inputValue === "Couple 20"){
        couponSaveEm = totalPrice * 0.2
        let coupleCouponPrice = totalPrice -couponSaveEm
        couponSave.innerText =coupleCouponPricegit 
    }
})
