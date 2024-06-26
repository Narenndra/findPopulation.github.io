let userInputEle = document.getElementById("searchInput");
let resultContainerEle = document.getElementById("resultCountries");

function createAndAppendResult(object) {
    let {
        flag,
        name,
        population
    } = object;

    let countryCard = document.createElement("div");
    countryCard.classList.add("country-card", "col-12", "col-md-5", "d-flex", "m-3");
    resultContainerEle.appendChild(countryCard);

    let inCardContainerEle = document.createElement("div");
    inCardContainerEle.classList.add("d-flex", "flex-column", "text-center", "ml-3");

    let imgEle = document.createElement("img");
    imgEle.src = flag;
    imgEle.classList.add("country-flag");
    countryCard.appendChild(imgEle);

    let nameEle = document.createElement("h1");
    nameEle.textContent = name;
    nameEle.classList.add("country-name");
    inCardContainerEle.appendChild(nameEle);

    let populationEle = document.createElement("p");
    populationEle.textContent = population;
    populationEle.classList.add("country-population");
    inCardContainerEle.appendChild(populationEle);

    countryCard.appendChild(inCardContainerEle);




}




let urlText = "https://apis.ccbp.in/countries-data";
let options = {
    method: "GET"
};

fetch(urlText, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonText) {
        console.log(jsonText);
        for (let object of jsonText) {
            createAndAppendResult(object);
        }


    });
//second one

function displayUserSeatch(event) {
    if (event.key === "Enter") {
        resultContainerEle.textContent = "";
        let userRequest = userInputEle.value;
        let urlText = "https://apis.ccbp.in/countries-data";
        let options = {
            method: "GET"
        };

        fetch(urlText, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonText) {
                for (let object of jsonText) {
                    let countryName = object.name;
                    if (countryName.toLowerCase().includes(userRequest.toLowerCase())) {
                        createAndAppendResult(object);
                    }
                }

            });

    }
}


userInputEle.addEventListener("keydown", displayUserSeatch);