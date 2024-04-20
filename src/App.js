import Search from "./Components/Seacrh";
import './App.css';

function App() {
  
  const handleOnSeacrhChange = (searchData) =>{
    console.log(searchData);
  }

  return (

    <div className="container">
      <Search onSeacrhChange={handleOnSeacrhChange}></Search>
    </div>
  )
}

export default App;
