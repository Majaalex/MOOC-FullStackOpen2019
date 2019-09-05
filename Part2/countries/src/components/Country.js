import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = (props) => {
    const country = props.country
    console.log('Country', country)
    return (
        <div>
            <Info country={country} />
            <Languages country={country} />
            <Weather capital={country.capital} />
        </div>
    )
}

const Info = (props) => {
    const country = props.country
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
    )
}
const Languages = (props) => {
    const country = props.country
    return (
        <div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(lang => {
                    return <li key={lang.iso639_2}>{lang.name}</li>;
                })}
            </ul>
            <img src={country.flag} width={500} height={300} mode='fit' border="1" alt={country.name + " flag"} />
        </div>
    )
}


const Weather = (props) => {
    const [newData, setNewData] = useState('')
    const [newIcon, setNewIcon] = useState('')
    const buildWeather = (data) => {
        
        return (
            <div>
                <h3>Weather in {props.capital}</h3>
                <p><strong>Temperature: </strong> {data.temp_c}C</p>
                <img src={newIcon} height="64" width="64" alt={props.capital + "Weather icon"} />
                <p><strong>Wind speed:</strong> {data.wind_kph} KPH</p>
                <p><strong>Direction:</strong> {data.wind_dir}</p>
            </div>
        )
    }

    useEffect(() => {
        const api_key = "e384ad3cf8dc402ca0b205505190509&q"
        const url = "https://api.apixu.com/v1/current.json?key=" + api_key + "=" + props.capital
        axios
            .get(url).then((response) => {
                setNewIcon(response.data.current.condition.icon)
                setNewData(response.data.current)
            })
    }, [])

    return (
        <div>
            {buildWeather(newData)}
        </div>

    )

}

export default Country