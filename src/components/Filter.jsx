import React from 'react'

function Filter({data, setData, filter}) {  
  const result = data
        .filter(person => person.name.includes(filter))
    

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
      </div>
      )}
  </div>
)
}

export default Filter