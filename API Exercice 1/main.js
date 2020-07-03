let section = document.querySelector('section')


let request = new XMLHttpRequest();


request.open("GET", 'https://restcountries.eu/rest/v2/all')

request.onload = () => {
let data = JSON.parse(request.response)

    for (let element of data) {
        let requestWeather = new XMLHttpRequest();
        let newP =  document.createElement('p')
        newP.innerHTML = element.name;
        newP.className = 'btn btn-outline-dark';
        section.appendChild(newP)

     
        
        requestWeather.open("GET", 'https://api.openweathermap.org/data/2.5/weather?q='+element.capital+'&appid=a9e49ec3524b547f68e542946a248e27')

        requestWeather.onload = async () => {
            let dataMeteo = await JSON.parse(requestWeather.response);
            console.log(dataMeteo)
            setTimeout(null, 500)
                let degree = dataMeteo.main.temp;
                console.log(degree)
                newP.innerHTML = element.name + " Meteo: " + degree;
                section.appendChild(newP)
            
        }
        requestWeather.send()

    }
    
}

request.send()