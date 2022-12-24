import './App.css';
import Clock from './utils/Clock';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Calendar/>
    </div>
  );
}

export default App;
