import React from 'react'
import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(() => {

        fetch(api)
            .then((response) => response.json())
            .then((responseData) => setData(responseData[currency]))
            
            console.log(data)

    }, [currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;
