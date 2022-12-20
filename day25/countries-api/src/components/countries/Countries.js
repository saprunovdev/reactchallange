const Country = ({
    country:{
      flag,
      name, 
      capital,
      languages,
      population,
      currencies,
    }}) =>{
  
      return(
        <div className='country'>
          <div className='country-flag'>
          <img src={flag} alt={name}/>
          </div>
          <h4><span>{name}: {capital}</span></h4>
          
          <p>languages: {languages.map((lang)=> <span>{lang.name} </span>)}</p>
          <p>Population: {population} </p>
          <p>Currencies: {currencies
          ?currencies.map((curr)=> <span>{curr.name} </span>)
          :<span>No currencies</span>
          }</p>
        </div>
      )
  }

export default Country;