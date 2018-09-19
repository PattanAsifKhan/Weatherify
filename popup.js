var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        var weather = document.getElementById("weather");
        var text = document.createTextNode(data.weather[0].main);
        weather.appendChild(text);
        var temp = document.getElementById("temp");
        var text = document.createTextNode(data.main.temp + String.fromCharCode(176) + "C");
        temp.appendChild(text);
        var location=document.getElementById("location");
        var text=document.createTextNode(data.name)
        location.appendChild(text);
    }
});


xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=d3048c0974691948040a7509ddad9b21&units=metric");
xhr.send(data);