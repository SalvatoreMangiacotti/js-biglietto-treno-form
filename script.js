const distanceToTravel = document.getElementById('distance_to_travel');
const userName = document.getElementById('user_name');

const selectAgeCategory = document.getElementById('select_age_category');
const button = document.getElementById('button');

const ticketUserName = document.getElementById('ticket_user_name');
const trainTicketPrice = document.getElementById('ticket_price');

button.addEventListener('click', () => {

    let userCategory = selectAgeCategory.value;

    let totalPrice = distanceToTravel.value * 0.21;

    let ticketPrice = totalPrice;

    if (userCategory === "ragazzi") {

        let discount = (ticketPrice * 20) / 100;

        ticketPrice = totalPrice - discount;

    } else if (userCategory === "anziani") {

        let discount = (ticketPrice * 40) / 100;

        ticketPrice = totalPrice - discount;

    }

    ticketUserName.innerHTML = `<p>${userName.value}</p>`;
    trainTicketPrice.innerHTML = `<p>${ticketPrice.toFixed(2)}</p>`; 
    
})
