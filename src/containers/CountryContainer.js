import { useState, useEffect } from "react";


const CountryContainer = () =>{
    const [countries, setCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(
        () =>{
            loadCountries();
        }, []);

    useEffect(
        () =>{
            console.log(`countries: ${JSON.stringify(countries)}`)
        }, [countries]
    )

    return(
        <>

        <CountryList countries={countries} />

        </>
    );
    
}

export default CountryContainer;