var apiKey = "ec364f59ee730bbc6cecc64065bda738"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
var apiLink = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
var searchButton = document.querySelector("#search-button");
function handleSearchButtonClick() {
    var searchInputVal = document.querySelector("#search-input").value;
    console.log(searchInputVal);
}
searchButton.addEventListener("click", handleSearchButtonClick)