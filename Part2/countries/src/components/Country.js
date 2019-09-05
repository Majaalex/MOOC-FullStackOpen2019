import React from 'react'

const Country = (props) => {
    const country = props.country
    console.log('Country', country)
    return (<div>
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
        <div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(lang => {
                    return <li key={lang.iso639_2}>{lang.name}</li>;
                })}
            </ul>
            <img src={country.flag} tag="Country flag" width={500} height={300} mode='fit' border="1" alt={country.name + " flag"}/>
        </div>
    </div>);
}

export default Country