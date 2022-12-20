const Statistics = ({country:{name, population}, totalPopulation}) =>{
    const populationPercentage = Math.floor(population/totalPopulation * 100)
    return(
      <div className='bars'>
        <div>{name}</div>
        <div className='bar' style={{width:populationPercentage+'%'}}></div>
        <div>{population.toLocaleString()}</div>
      </div>
    )
  }

export default Statistics