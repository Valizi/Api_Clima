const api={
    key: "9e57220713301ffbaffac9eb37558cf5",
    base: "http://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    unit: "metric"
}

const city = document.querySelector('.city')
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.conteiner-temp span');
const weather_t = document.querySelector('.weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');





search_button.addEventListener('click', function() {
    searchResults(search_input.value)
})

function searchResults(city) {
    fetch(`${api.base}weather`)
}