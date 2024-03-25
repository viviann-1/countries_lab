import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import Visited from "../components/Visited";


const CountryContainer = () =>{
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);



    const addCountry = (newCountry) => {
        setCountries([...countries, newCountry])
    }


    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        
        const jsonData = await response.json();
        setCountries(jsonData);
        console.log(jsonData);
    }

    const loadVisitedCountries = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        
        const jsonData = await response.json();
        setVisitedCountries(jsonData);
        console.log(jsonData);

    }

    useEffect(
        () =>{
            loadVisitedCountries();
        }, []);

    useEffect(
        () =>{
            console.log(`visitedCountries: ${JSON.stringify(visitedCountries)}`)
        }
    )

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
        <Visited countries={countries} />

        </>
    );
    } 


export default CountryContainer;