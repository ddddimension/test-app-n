document.addEventListener("DOMContentLoaded",()=>{ 
    let currentUrlStr = window.location.href; 
    let currentUrl = new URL(currentUrlStr); 
    let official = currentUrl.searchParams.get("official");
    const info = document.querySelector('.info');
    detailedPg(official);

    function getCount(element) {
        info.innerHTML = '';
        
            const {name:{common, nativeName},flags:{png}, population, region, capital,subregion,languages,currencies,borders,tld } = element[0]
            info.innerHTML +=
            `
            <div class = 'card'>
                <div class="flag">
                <img src="${png}" alt="img" class='flags'/>
             </div>
             <div class="text">
                <div class='te1'>
                <h2>${common}</h2>
                <p>Population: ${population}</p>
                <p>Region: ${region}</p>
                <p>Capital: ${capital}</p>
                <p>Native Name: ${Object.values(nativeName)[0].official} </p>
                <p>Sub Region: ${subregion}</p>
                <div class='border'>
                <p class=bordercountry>Border Countries:</p></div>
                </div>
                <div class='second'>    
                <p>Languages: ${Object.values(languages).join(', ')} </p>
                <p>Currencies: ${Object.values(currencies)[0].name}</p>
                <p>Top Level Domain: ${Object.values(tld).join(', ')}</p></div>
            </div> 
        </div>
        `
        displayBorder(borders)
        ; 
    }

    async function detailedPg(name){  
        console.log(name); 
        const data = await fetch(`https://restcountries.com/v3.1/name/${name}`)  
            const results = await data.json()  
            console.log(results)
            getCount(results)  
        }

        async function displayBorder(border){
            const displayBorderCountry = document.querySelector('.bordercountry')
                try{
                    border.forEach(async code => {
                        const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                        const result = await data.json()
                        const {
                            name:{
                                common
                            }}= result[0]
                            displayBorderCountry.innerHTML+=
                            `
                            <a href="detpage.html?official=${common}" ><button class=borderbutton>${common}</button>
                            `
                    });
                    
                }catch(err){
                    console.log(err.message)
                }
                
        }
})



