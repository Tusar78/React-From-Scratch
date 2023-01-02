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
  const {name, flags, area} = country;
  return `
    <div class="countries">
      <img src="${flags.png}" />
      <h2>${name.common}</h2>
      <span>${area}</span>
    </div>
  `
}

loadCountry();
displayData();