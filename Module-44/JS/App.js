const loadCountry = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  displayData(data);
}

const displayData = countries => {
  if (countries) {
    const countriesHTML = countries.map(country => displayCountry(country));
    const container = document.querySelector('.container');
    container.innerHTML = countriesHTML.join('');
  }
}

const displayCountry = (country) => {
  return `
    <div class="countries">
      <img src="${country.flags.png}" />
      <h2>${country.name.common}</h2>
    </div>
  `
}

loadCountry();
displayData()