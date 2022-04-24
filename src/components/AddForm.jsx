import React from 'react'
import axios from 'axios'
function AddForm({states, setters}) {
    const [name, number, data] = states
    const [setName, setNumber, setData] = setters
    const baseUrl = 'http://localhost:8000/persons'
  
    const addPerson = () => {
        const person = {
          name: name,
          number: number
        }
        axios
          .post(baseUrl, person)
          .then(response => setData(data.concat(response.data)))
        
      }
      const changeNumber = (id) => {
        const url = baseUrl + '/' + id
        const person = data.find(p => p.id === id)
        const changedPerson = {
          name: person.name,
          number: number,
          id: person.id
        }
        axios.put(url, changedPerson).then(response => {
          setData(data.map(p => p.id !== id ? p : response.data))
        })
      }


    const submitData = (event) => {
        event.preventDefault()
        if (name != '' && number != ''){
          if (data.filter(person => person.name == name).length == 0){       
            addPerson()
          } else if (window.confirm("Given name already is in database. Do you wanna change his number?")){
            const person = data.find(person => person.name === name)
            changeNumber(person.id)
          }
          document.getElementById('number').value = ''
          document.getElementById('name').value = ''
        }
    }
    
    return (
        <div>
            <form onSubmit={submitData}>
                <div>
                <div className='input'>
                    <label className='label' htmlFor='name'>Person Full Name</label>
                    <input className='in' id='name' type='text' onChange={(e) => setName(e.target.value)}></input>
                
                </div>
                <div className='input'>
                    <label className='label' htmlFor='number'>Person Number</label>
                    <input className='in' id='number' type='text' onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm
