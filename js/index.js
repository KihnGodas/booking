let hotelColumn = document.querySelector(".hotel")
let cityColumn = document.querySelector(".city")

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
        showMain(cityColumn,cityName)
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
        showMain(hotelColumn,hotelName)
    })
    .catch(error => {
        console.error(error);
    });

function showMain(place,data) {
    if (place) {
        for (let item of data) {
            place.innerHTML += `
            <li class="d-flex justify-content-between align-items-center">
                <span>${item.name}</span>
                <a href="#" class="price-btn">$${item.price}</a>
            </li>`
        }
    }
}
