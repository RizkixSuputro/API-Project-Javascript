let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalurl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(finalurl);

  fetch(finalurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(
        Object.values(data[0].currencies[Object.keys(data[0].currencies)[0]])[0]
          .name
      );
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML = `
      <img src="${data[0].flags.svg}" alt="${data[0].name.common}" />
      <h2>${data[0].name.common}</h2>
      <h4>Capital: ${data[0].capital[0]}</h4>
      <h4>Continent: ${data[0].continents[0]}</h4>
      <h4>Population: ${data[0].population}</h4>
      <h4>Currency: ${Object.keys(data[0].currencies)[0]} </h4>
      <h4>Language: ${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</h4>
    `;
    })
    .catch((error) => {
      alert("Country not found", error);
      countryInp.value = "";
      result.innerHTML = "";
    });
});
