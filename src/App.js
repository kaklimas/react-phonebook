import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Filter from './components/Filter';

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const states = [name, number, data]
  const setters = [setName, setNumber, setData]

  const baseUrl = 'http://localhost:8000/persons'
  

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setData(response.data)
      })

  }, [])  

  return (
    <div className="App">
      <h2 style={{fontSize: 50}}>Phonebook</h2> 
      <form>
        <div className='form'>
          <label htmlFor='filter'>Filter shown with</label>
          <input id='filter' onChange={(event) =>setFilter(event.target.value)}></input>
        </div>
        
      </form>

      <h3 style={{marginTop: 100}}>Add a new person</h3>

      <AddForm states={states} setters={setters}/>

      <h3 style={{marginTop: 100}}>Founded persons</h3>
      
      <Filter data={data} setData={setData} filter={filter}/>
      
    </div>
  );
}

export default App;
