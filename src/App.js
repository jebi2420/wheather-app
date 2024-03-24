import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)

  const cities = ['hongkong', 'new york', 'tokyo', 'seoul']
  const API_KEY = `0b278711fbf2019ee1f170c39577cb7e`;

  // 앱이 실행되자마자 -> useEffect(함수, 배열)
  // array안에 아무것도 안주면 componentDidMount()처럼 작동(렌더 후 바로 실행)
  useEffect(() => {

    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log("현재위치: "+ lat, lon)

        const getWeatherByCurrentLocation = async(lat, lon) => {
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
          // fetch 중일때만 로딩 스피너 나타나게
          setLoading(true)
          let response = await fetch(url)
          let data = await response.json();
          console.log("data " + JSON.stringify(data, null, "\t"))
          
          setWeather(data);
          setLoading(false);
        }
  
        getWeatherByCurrentLocation(lat, lon)
      });
      console.log("getCurrentLocation()")
    };

    // 현재 위치 날씨 가져오기
    if(city === ""){
      getCurrentLocation();
    }else{
      // city가 바뀌면 useEffect 함수가 호출됨
      getWeatherByCity()
    }
    
  }, [city])

  // 도시별 날씨 들고오기
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // fetch 중일때만 로딩 스피너 나타나게
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json();
    console.log("cityWeatherdata :" + JSON.stringify(data, null, "\t"))

    setWeather(data);
    setLoading(false);
  }

  const handleCityChange = (city) => {
    if(city === "current"){
      setCity(null);
    }else{
      setCity(city)
    }
  }

  return (
    <div>
      <div className='background'></div>
        {loading?
          (<div className="container">
            <ClipLoader
              color= '#f88c6b'
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>) 
          :
          (<div className="container">
            <WeatherBox weather = {weather}/>
            <WeatherButton 
              cities = {cities} 
              handleCityChange={handleCityChange}
              setCity = {setCity}
              selectedCity={city}
            />
          </div>)
        }

      
    </div>
  );
}

export default App;
