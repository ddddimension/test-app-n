

const main = document.querySelector('main')
const input = document.querySelector('#input')
const selectId = document.querySelector('#select-id')

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => /* console.log(data) */ getCount(data))

  const darkModeBtn = document.querySelector('.dark_mode');
  const themeLink = document.querySelector('link[href="count.css"]');

  darkModeBtn.addEventListener('click', () => {
  themeLink.href = "dark.css";
});


  function getCount(data) {
    main.innerHTML = '';
    data.forEach((element) => {
        const {name:{common},flags:{png}, population, region, capital } = element


        main.innerHTML +=
        `
        
        <div class = 'card'>
        <a href="detpage.html?official=${common}" >
        <img src="${png}" alt="img" class='flags'/>
        <h2></h2>
        <h3>${common}</h3>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <p>Capital :${capital}</p>
        <p></p>
    </div>
    `
    }); 
}
input.addEventListener('input', (event) => {
  let searchText = event.target.value;
  fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => {
      let filteredArray = data.filter(country => 
        country.name.official.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
      getCount(filteredArray);
    });
});


/*  selectId.addEventListener('change', (e) => {
    let searchText = e.target.value;
    fetch(`https://restcountries.com/v3.1/all`)
      .then(response => response.json())
      .then(data => {
        let filteredArray = data.filter(country => 
            region.name.official.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
        getCount(filteredArray);
      });`
  });  */
  
  


  selectId.addEventListener('change',(e)=>{ 
    e.preventDefault() 
        const selectInput = e.target.value 
            searchRegion(selectInput)     
  })    
 
    async function searchRegion(region){ 
        const data = await fetch(`https://restcountries.com/v3.1/region/${region}`) 
         const results = await data.json() 
            getCount(results) 
    }
