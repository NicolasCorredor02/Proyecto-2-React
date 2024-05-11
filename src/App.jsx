import './App.css'
import './components/Card'
import Card from './components/Card';
import vehicles from './data/vehicles'
import ShowHide from './components/ShowHide'

function App() {

  const vehiclesList = vehicles.map(value => {
    return <Card title = {value.name} description = {value.description}/>
  });

  return (
   <div className='App'>
      <h1>Hola React</h1>
      <div className='container'>
        {vehiclesList}
      </div>
     <ShowHide/>
   </div>
  );
}

export default App;
