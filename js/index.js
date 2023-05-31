let hotelColumn = document.querySelector(".hotel")
let cityName = [];
let hotelName = [];

fetch('../json/city.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        cityName = data;
    })
    .catch(error => {
        console.error(error);
    });

fetch('../json/hotel.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        hotelName = data;
    })
    .catch(error => {
        console.error(error);
    });

function showMain(data) {
    if (hotelColumn) {
        for (let item of data) {
            hotelColumn.innerHTML += `
            <li class="d-flex justify-content-between align-items-center">
                <span>${item.hotelName}</span>
                <a href="#" class="price-btn">$${item.price}</a>
            </li>												
        `
        }

    }
}
showMain(hotelName)