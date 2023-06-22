import React from 'react';

function Card ({name,flag,population,region,capital,area}) {
     return(
<>
<div className='country'>
            <div className='image'>
                <img src={flag} alt="flage"/>
            </div>
            <div className='country-details'>
                <h2>{name}</h2>
                <p>Capital : {capital}</p>
                <p>Region : {region}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
            </div>
        </div>
</>
     );

}
export default Card;