// $(document).ready(function() {
//     console.log("ready");
let mainEl = document.querySelector("#app-content-row");
let cityInputEl = document.querySelector("#search-box-area");

//show time in current weather section
const displayTime = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  let date = d.toLocaleDateString();
  document.getElementById("current-day-weather").innerHTML = date + "    " + t;
};

// function to generate Header
const genHeader = function() {
    let createHeader = document.createElement("header");
    createHeader.classList = "p-3 bg-dark text-white text-center";
    //append header container to  main section of doc
    mainEl.appendChild(createHeader);
    
    let headerContainer = document.createElement("div");
    headerContainer.classList = "container";
    //append container to header
    createHeader.appendChild(headerContainer);

    let headerRow = document.createElement("div");
    headerRow.classList = "row";
    // append row to container
    headerContainer.appendChild(headerRow);

    let headerText = document.createElement("h1");
    headerText.classList = "col-12 text-center";
    headerText.textContent = "Weather App";
    headerRow.appendChild(headerText);
};
//test genHeader
genHeader();

//gen search box and history container takes up 2 columns of the page always

const searchBoxContainer = function() {
    let searchBoxEl = document.createElement("div");
    searchBoxEl.classList = "col-3 search-area";
    searchBoxEl.setAttribute("id", "search-box-area");
    mainEl.appendChild(searchBoxEl);

    //create header for search
    let searchBoxTitle = document.createElement("h2");
    searchBoxTitle.classList = "search-title col-12";
    searchBoxTitle.textContent = "Search for a City";
    searchBoxEl.appendChild(searchBoxTitle);

    //create search box
    let searchBox = document.createElement("input");
    searchBox.classList = "search-box-text col-12 text-center";
    searchBox.setAttribute("placeholder", "Search A City");
    searchBox.setAttribute("id", "search-box-text");
    searchBoxEl.appendChild(searchBox);

    //create Search Button
    let searchButton = document.createElement("button");
    searchButton.classList = "col-12 btn btn-primary";
    searchButton.setAttribute("type", "Submit");
    searchButton.setAttribute("id", "search-box-button");
    searchButton.textContent = "Search...";
    searchBoxEl.appendChild(searchButton);

    //create search history area
    //search history buttons will be added here
    let searchHistory = document.createElement("div");
    searchHistory.classList = "col-12 search-history";
    searchHistory.setAttribute("id", "search-history");
    searchBoxEl.appendChild(searchHistory);
};
//test search box container
searchBoxContainer();

// create search history button https://stackoverflow.com/questions/3231459/create-unique-id-with-javascript

const searchHistoryButton = function(cityName) {
    let searchId = 0;
    let searchHistBtnEl = document.createElement("button");
    let searchHistoryEl = document.querySelector("#search-history")
    searchHistBtnEl.classList = "col-12 btn btn-secondary text-center";
    searchHistBtnEl.setAttribute("type", "Submit");
    searchHistBtnEl.setAttribute("id", "search-box-buttonHistory"+searchId++);
    console.log(searchId);
    searchHistBtnEl.textContent = cityName;
    searchHistoryEl.appendChild(searchHistBtnEl);
    
};

//generate box for current weather/and other data.
const currentWeather = function(currentTemp, WindCurrent, HumidityCurrent, uvIndex) {
    currentDayEl = document.createElement("div");
    currentDayEl.classList = "col-9 current-day";
    currentDayEl.setAttribute("id", "current-day-weather");
    //will hold weather data temp, wind, Humidity, uvIndex
    mainEl.appendChild(currentDayEl);

    //current temp
    let currentTempEl = document.createElement("h3");
    currentTempEl.classList = "current-temp";
    currentTempEl.setAttribute("id","current-temp");
    currentTempEl.textContent = currentTemp;
    currentDayEl.appendChild(currentTempEl);

    //current day wind
    let currentWind = document.createElement("h3");
    currentWind.classList = "current-wind";
    currentWind.setAttribute("id","current-wind");
    currentWind.textContent = WindCurrent;
    currentDayEl.appendChild(currentWind);

    //current humidity
    let HumidityCurrentEl = document.createElement("h3");
    HumidityCurrentEl.classList = "current-humidity";
    HumidityCurrentEl.setAttribute("id","current-humidity");
    HumidityCurrentEl.textContent = HumidityCurrent;
    currentDayEl.appendChild(HumidityCurrentEl);


    //current UV
    let currentUvEl = document.createElement("h3");
    currentUvEl.classList = "current-uv";
    ccurrentUvEl.setAttribute("id","current-uv");
    currentUvEl.textContent = uvIndex;
    currentDayEl.appendChild(currentUvEl);

};
currentWeather();

//function to generate cards 5 day forecast ////// may remove if formatting works with
// const genCardContainer = function() {
//     //only need to create container once
//     cardContainer.classList = "container";
//     //add card container to body
//     mainEl.appendChild(cardContainer);

//     //only need to create row once
//     cardRow.classList = "row";
//     //add card row to container
//     cardContainer.appendChild(cardRow);
// }

const generateCard = function(cardDate, imgSrc, temp, wind, humidity) {

    let cardEl = document.createElement("div");
    cardEl.classList = "card col-3";
    //add card to row
    // cardRow.appendChild(cardEl);
    mainEl.appendChild(cardEl);

    let cardBody = document.createElement("div");
    cardBody.classList = "card-body";
    //add card body to card
    cardEl.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList = "card-title text-center";
    cardTitle.textContent = cardDate;
    //add card title to card body
    cardBody.appendChild(cardTitle);

    //card Img
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src", imgSrc)

    //temp
    let cardInfo = document.createElement("div")
    cardInfo.classList = "card-text text-center";
    cardInfo.textContent = temp
    cardBody.appendChild(cardInfo);

    //wind
    let cardInfoWind = document.createElement("div")
    cardInfoWind.classList = "card-text text-center";
    cardInfoWind.textContent = wind
    cardBody.appendChild(cardInfoWind);

    //humidity
    let cardInfoHumid = document.createElement("div")
    cardInfoHumid.classList = "card-text text-center";
    cardInfoHumid.textContent = humidity
    cardBody.appendChild(cardInfoHumid);
};
// test generate card
// genCardContainer();
// generateCard("123");
// generateCard("123");
// generateCard("123");
// generateCard("test Day");
// generateCard("Day test");

//fetch weather api
// remember to trim input of extra white spaces. and lowercase them

const apiKey = 'd91f911bcf2c0f925fb6535547a5ddc9'; //"889a9dfc6fa2d18eaaf5c4787cb0cb11";Mad Kelvin one
const baseApiUrl = 'https://api.openweathermap.org'
//example call https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=889a9dfc6fa2d18eaaf5c4787cb0cb11


function searchCityWeather(cityName) {
    // console.log("City Name is", cityName);
    // https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&limit=5&appid=" + apiKey https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=889a9dfc6fa2d18eaaf5c4787cb0cb11"
    let apiCall ="https://api.openweathermap.org//geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + apiKey;
    console.log("API call", apiCall)
    fetch(apiCall)
    .then(function (response) {
        if(response.ok);
        console.log(response);
        return response.json()
    })
    .then(function (body){
        console.log('body', body);
        // console.log(body.coord)
        let lat = body[0].lat; //body.coord.lat
        let lon = body[0].lon;
        console.log(lat,lon);
        // console.log("second call", `${baseApiUrl}/geo/1.0/direct?lat=${lat}&lon=${lon}&appid=${apiKey}`) //data/2.5/onecall? breaks?
        // return fetch(`${baseApiUrl}/geo/1.0/direct?lat=${lat}&lon=${lon}&appid=${apiKey}`) //(`${baseApiUrl}/geo/1.0/direct?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        return fetch(`${baseApiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`)
    })
    .then(function (response) {
        if(response.ok);
        console.log(response);
        return response.json()
    })
    .then(function (res){
        console.log('res', res);
        // fill in 5 day 
        let dateWeather = "";
        let weatherImg = "";
        let temp = "";
        let wind = "";
        let humidity = "";
        for(i = 0; i < res.daily.length; i++) {
            // console.log(res.daily[i])
            //test for dt
            dateWeather = res.daily[i].dt;
            console.log(dateWeather)
            weatherImg = res.daily[i].weather[0].icon;
            console.log(weatherImg)
            temp = res.daily[i].temp.day;
            console.log(temp);
            wind = res.daily[i].wind_speed;
            console.log(wind);
            humidity = res.daily[i].humidity
            generateCard(dateWeather, weatherImg, temp, wind, humidity)
            if ( i === 4){
                break;
            }
        }


    })
    // .then() fill out extended day forecast
};

const cityNameSubmit = function(cityName) {
    // event.preventDefault();
//    let cityName = cityNameEl.value.trim();
//    console.log("City Name is", cityName);
   if(cityName){
    searchCityWeather(cityName);
    cityNameEl.textContent = '';
    searchHistoryButton(cityName);
   }
};

//  did not like the variable placement at the top of the doc
let cityNameEl = document.querySelector("#search-box-text");
let searchButton = document.querySelector("#search-box-button");
// listen for whole area clicks
// cityInputEl.addEventListener("click", cityNameSubmit)
// });
searchButton.onclick = function() {
    // console.log("button clicked")
    let cityName = cityNameEl.value.trim();
    if(cityName){
        // console.log("City Name is", cityName);
        cityNameEl.textContent = "";
        cityNameEl.value = "";
        cityNameSubmit(cityName);    
    }
};
