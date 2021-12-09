var apiKey = "ec364f59ee730bbc6cecc64065bda738"

var searchButton = document.querySelector("#search-button");
function handleSearchButtonClick() {
    var searchInputVal = document.querySelector("#search-input").value;
    console.log(searchInputVal);
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${apiKey}`;
    fetch(apiUrl).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
        var apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`
        return fetch(apiLink)
    })
    .then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
    })
}
searchButton.addEventListener("click", handleSearchButtonClick)