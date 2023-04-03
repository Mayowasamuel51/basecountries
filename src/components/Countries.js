import { useState, useEffect, useCallback } from "react";
import CountriesList from "./List/CountriesList";

function Countries() {
    let name;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const storeData = [];
    const baseUrl = 'https://restcountries.com/v3.1/all'
    const fetchData = async () => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json()
            console.log(data)
            setData(data) // this will update the state
            setLoading(false)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchData()  // calling the function 
    }, [])  ///this will run once

    let page = '';
    if (loading) {
        page = <div>
            <h1>LOADING PLEASE WAIT</h1>
        </div>
    } else {
        page = <div>
            <CountriesList country={data} />
        </div>
    }
    return (
        <>
          

        </>
    )
}


export default Countries;