import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";


const CountryContainer = () =>{
    const [countries, setCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        
        const jsonData = await response.json();
        setCountries(jsonData);
        console.log(jsonData);
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