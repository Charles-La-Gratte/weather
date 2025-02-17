import './App.css';
import { WeatherSearch } from './components/WeatherSearch';
import { WeatherWrapper } from './components/WeatherWrapper';

function App() {
  return (
    <div className="App">
     <h1>Weather in</h1>
     <WeatherSearch/>
     <WeatherWrapper/>
    </div>
  );
}

export default App;
