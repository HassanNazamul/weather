import Search from "./Components/Search";
import './App.css';
import CurrentWeather from "./Components/CurrentWeather";

function App() {
  
  const handleOnSeacrhChange = (searchData) =>{
    console.log(searchData );
  }

  return (

    <div className="container">
      <Search onSeacrhChange={handleOnSeacrhChange}></Search>
      <CurrentWeather></CurrentWeather>

    </div>
  )
}

export default App;
