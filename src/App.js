import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {

  const [weather, setWeather] = useState(null)

  const API_KEY = `0b278711fbf2019ee1f170c39577cb7e`;

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치: "+ lat, lon)

      getWeatherByCurrentLocation(lat, lon)
    });
    console.log("getCurrentLocation()")
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    console.log("data1 " + data)
    console.log("data2 " + JSON.stringify(data, null, "\t"))
    
    setWeather(data);
  }

  // 앱이 실행되자마자 -> useEffect(함수, 배열)
  // array안에 아무것도 안주면 componentDidMount()처럼 작동(렌더 후 바로 실행)
  useEffect(() => {
    getCurrentLocation()
  }, [])
  return (
    <div>
      <div className='background'></div>
      <div className="container">
        <WeatherBox weather = {weather}/>
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
