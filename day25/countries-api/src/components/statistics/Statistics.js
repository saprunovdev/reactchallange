//This will be the common ancestor for the statistic
//We will form the data to display here and pass it to the languge and to the population file
import React, {useState, useEffect, useCallback} from 'react';

const Statistics = ({countries}) =>{
    //Top ten populated and top ten langugas are stored here
    const [topTen, setTopTen] = useState([])
    const [total, setTotal] = useState()

    const topTenPopulated = useCallback(()=>{
      setTopTen(countries.sort((a,b)=>b.population - a.population).slice(0,10))
      setTotal(countries.reduce((acc, curr)=>acc + curr.population, 0))
    },[countries])

    const topTenLanguages = useCallback(()=>{

      let languagesOnly = []
      let counts = []

      countries.map(country => country.languages.forEach(lang => languagesOnly.push(lang.name)))
      let exclusiveLanguages = new Set(languagesOnly)
      
      for (const l of exclusiveLanguages) {
          const filteredLang = languagesOnly.filter((lng) => lng === l)
          counts.push({ name: l, population: filteredLang.length })
      }
      //print first 10 most spoken languages
      setTopTen(counts.sort((a, b)=> b.population - a.population).slice(0,10))
      setTotal(100)
    },[countries])

    return(
      <>
      <button onClick={topTenPopulated}>Population</button>
      <button onClick={topTenLanguages}>languages</button>
      {topTen.map((e)=>(<CountiesList name={e.name} count={e.population} total = {total}/>))}
      </>
      
    )
  }

const CountiesList = ({name, count, total}) =>{
  return(
    <>
    <div className='bars'>
      <div>{name}</div>
      <div className='bar' style={{width:count/total*100+'%'}}></div>
      <div>{count.toLocaleString()}</div>
    </div>
    </>
  )
}
  

export default Statistics