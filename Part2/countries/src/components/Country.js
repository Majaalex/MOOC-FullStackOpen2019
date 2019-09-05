import React, { useEffect} from 'react'
import axios from 'axios'

const Country = (props) => {
    const country = props.country
    console.log('Country', country)
    return (
        <div>
            <Info country={country} />
            <Languages country={country} />
            {/*<Weather capital={country.capital} />*/}
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
            <img src={country.flag} tag="Country flag" width={500} height={300} mode='fit' border="1" alt={country.name + " flag"} />
        </div>
    )
}

/*
const Weather = (props) => {
    // Need to somehow incorporate useState to get this to function? Currently does not render due to missing things to render
    function draw({props}){
        useEffect(() => {
            const api_key = "e384ad3cf8dc402ca0b205505190509&q"
            const url = "https://api.apixu.com/v1/current.json?key=" + api_key + "=" + props.capital
            console.log('url', url)
            const buildWeather = (data) => {
                console.log('data', data)
                return (
                    <div>
                        <h3>Weather in {props.capital}</h3>
                        <strong>Temperature: </strong> {data.temp_c}
                        <img src={data.condition.icon} height="64" width="64" alt={props.capital + "Weather"}></img>
                        <strong>Wind speed:</strong> {data.wind_kph} <strong>direction:</strong> {data.wind_dir}
                    </div>
                )
            }
            console.log('Making a database request')
            axios
                .get(url).then((response) => {
                    console.log('responswe', response)
                    return (
                        buildWeather(response.data.current)
                    )
                })
        }, [])
    }
    

    return (
        <div>
            {draw}
        </div>

    )

}*/

export default Country