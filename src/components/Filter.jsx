import React from 'react'
import axios from 'axios'
function Filter({data, setData, filter}) {  
  const baseUrl = 'http://localhost:8000/persons'
  const result = data
        .filter(person => person.name.includes(filter))
  
  const getData = () => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log(response.data)
        setData(response.data)
        
      })
      .catch(error => console.log('error'))
  }
  async function deletePerson(id){
    const url = baseUrl + '/' + id
    await axios.delete(url)
    getData()
  }


  if (result.length == 0){
    return <p>No persons found!</p>
  }
  if (filter == ''){
    return <p>Filter not given!</p>
  }
  return (
  <div>
      {result.map(person =>
      <div key={person.id} className='person-data'>
        <p key={person.name}>{person.name}  {person.number}</p>
        <button onClick={() => deletePerson(person.id)}>Delete</button>
      </div>
      )}
  </div>
)
}

export default Filter