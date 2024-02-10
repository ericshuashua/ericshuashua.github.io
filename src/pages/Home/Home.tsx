import { useState, useEffect } from 'react'
import Topbar from '../../component/Topbar'
import './Home.scss'
import sculpture from '../../assets/sculpture-home.png'

const Home = () => {
  const jobs = ['Expert contemporary art', 'Photographer', 'Translater']
  const [ jobIndex, setJobIndex ] = useState(0)
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function changeJob() {
    await timeout(800)
    if (jobIndex === 0) setJobIndex(1)
    else if (jobIndex === 1) setJobIndex(2)
    else if (jobIndex === 2) setJobIndex(0)
    
  }

  useEffect(() => {
    changeJob()
  }, [jobIndex])

  return (
    <div>
      <div id="home" className='home-container'>
        <Topbar />
        <div className='home-title'>
          <h1>Cheng Yu</h1>
          <h1>ZHANG.</h1>
          <h3>{jobs[jobIndex]}</h3>
        </div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <img src={sculpture} alt="sculpture1" className='sculpture1' />
      </div>
    </div>
  )
}

export default Home