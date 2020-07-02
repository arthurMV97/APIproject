let section = document.querySelector('section')


let request = new XMLHttpRequest();
let requestWeather = new XMLHttpRequest();

request.open("GET", 'https://restcountries.eu/rest/v2/all')
request.onload = () => {
let data = JSON.parse(request.response)
    
    for (element of data) {
        let newP =  document.createElement('p')
        newP.innerHTML = element.name;
        newP.className = 'btn btn-outline-dark';
        section.appendChild(newP)

       

    }
    
}

request.send()