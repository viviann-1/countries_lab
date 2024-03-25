import Country from "./Country";


const CountryList =({countries}) => {
    const mappedCountries = countries.map(country =>{
        return <Country country={country} key={country.id} />
    })

    return (
        <>
         <section>
      <h2 className="CountryListHeading">All Countries</h2>
      <div className="allCountries">{mappedCountries}</div>
    </section>

       {/* {mappedCountries} */}
        
        </>

    )
}

export default CountryList;