import './App.css';
import VendingMachine from './VendingMachine'
import Eggs from './Eggs'
import Sushi from './Sushi'
import Veggies from './Veggies'

function App() {
  return (
    <div className="App">
      <VendingMachine />
      <Eggs />
      <Sushi />
      <Veggies />
    </div>
  );
}

export default App;
