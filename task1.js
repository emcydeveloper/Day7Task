let getMainDiv = document.getElementById("task1Output");
let outputDiv = document.createElement("div");
let outputHeading = document.createElement("h1");
let outPara = document.createElement("p");
let userSelection = document.getElementById("sortByOrder");
let userValue = document.getElementById("sortByOrder");
let outUL = document.createElement("ul");
let outLI = document.createElement("li");

userValue.addEventListener("change", function () {
  let getInput = userValue.value;

  console.log(getInput);
  asiaContinent(getInput);

  switch (getInput) {
    case "asiaContinent":
      asiaContinent();
      break;

    case "populationLessThan2Lak":
      populationLessThan2Lak();
      break;

    case "nameCapFlag":
      nameCapFlag();
      break;

    case "totalPopulation":
      totalPopulation();
      break;

    case "USDollars":
      USDollars();
      break;
  }
});

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.com/v2/all", false);
xhttp.send(null);
let getAPIData = JSON.parse(xhttp.responseText);

function asiaContinent() {
  outputDiv.innerHTML = "";
  outputHeading.innerHTML =
    "Task - Get all the countries from Asia continent /region using Filter function";
  let outUL = document.createElement("ul");
  getAPIData.filter((arrName, position) => {
    if (arrName.region == "Asia") {
      let outLI = document.createElement("li");
      outLI.innerHTML = arrName.name;
      // console.log(arrName.name + " -- "+ arrName.region);
      outUL.appendChild(outLI);
    }
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
}

function populationLessThan2Lak() {
  outputDiv.innerHTML = "";
  outputHeading.innerHTML =
    "Task - Get all the countries with a population of less than 2 lakhs using Filter function";
  let outUL = document.createElement("ul");
  getAPIData.filter((arrName, position) => {
    if (arrName.population < 200000) {
      let outLI = document.createElement("li");
      outLI.innerHTML = `${arrName.name} - ${arrName.population}`;
      // console.log(arrName.name + " -- "+ arrName.region);
      outUL.appendChild(outLI);
    }
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
}

function nameCapFlag() {
  outputDiv.innerHTML = "";
  outputHeading.innerHTML =
    "Task - Print the following details name, capital, flag using forEach function";
  let outUL = document.createElement("ul");
  getAPIData.filter((arrName, position) => {
    let outLI = document.createElement("li");
//     outLI.style.border = "solid 1px";
    outLI.style.marginBottom = "10px";
    outLI.style.textAlign = "center";
//     outLI.style.width = "30%";
    outLI.innerHTML = `Country Name: ${arrName.name} <br> Capital:${arrName.capital}<br><img style="width: 20%" src="${arrName.flag}">`;
    // console.log(arrName.name + " -- "+ arrName.region);
    outUL.appendChild(outLI);
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
}

function totalPopulation() {
  outputDiv.innerHTML = "";

  let outUL = document.createElement("ul");
  let popuArr = [];

  getAPIData.forEach((popu) => {
    popuArr.push(popu.population);
    // console.log(popuArr);
  });

  let totalPopulation = popuArr.reduce((accumulator, current) => {
    return accumulator + current;
  });
  //   console.log(totalPopulation);

  outputHeading.innerHTML = `Task - Print the total population of countries using reduce function <br> Total Population count is - ${totalPopulation}`;

  getAPIData.filter((arrName, position) => {
    let outLI = document.createElement("li");

    outLI.innerHTML = `${arrName.name} - ${arrName.population}`;
    // console.log(arrName.name + " -- "+ arrName.region);
    outUL.appendChild(outLI);
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
}

function USDollars() {
  outputDiv.innerHTML = "";
  outputHeading.innerHTML =
    "Task - Print the country which uses US Dollars as currency.";
  let outUL = document.createElement("ul");
  getAPIData.filter((arrName, position) => {
    if (arrName.hasOwnProperty('currencies')) {
        if (arrName.currencies[0].code == "USD") {
            let outLI = document.createElement("li");
            outLI.innerHTML = arrName.name
            outUL.appendChild(outLI);
          }
    }

    
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
}

// IIEF used to call Asia continent as default
(function () {
  outputHeading.innerHTML =
    "Task - Get all the countries from Asia continent /region using Filter function";
  let outUL = document.createElement("ul");
  getAPIData.filter((arrName, position) => {
    if (arrName.region == "Asia") {
      let outLI = document.createElement("li");
      outLI.innerHTML = arrName.name;
      // console.log(arrName.name + " -- "+ arrName.region);
      outUL.appendChild(outLI);
    }
  });
  outputDiv.appendChild(outputHeading);
  outputDiv.appendChild(outUL);
  getMainDiv.append(outputDiv);
})();
