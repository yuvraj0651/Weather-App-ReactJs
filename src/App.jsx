import './App.css'
import WeatherComp from './components/WeatherComp/WeatherComp'

function App() {

  return (
    <>
        <div className="weather-app section-padding">
          <div className="weather-app__inner">
            <div className="weather-app__inner--heading text-center border border-[#ccc] shadow-sm shadow-[#ccc] py-2 bg-white/80 rounded-[7px] w-[13rem] mx-auto">
              <h4 className='uppercase font-[500] tracking-wide text-[1.4rem]'>weather app</h4>
            </div>
            <WeatherComp />
          </div>
        </div>
    </>
  )
}

export default App
