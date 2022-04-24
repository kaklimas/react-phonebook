import React from 'react'

function AddForm({states, setters}) {
    const [name, number, data] = states
    const [setName, setNumber, setData] = setters
    
    const submitData = (event) => {
        event.preventDefault()
        if (name != '' && number != ''){
          if (data.filter(person => person.name == name).length == 0){
            const newObj = {
              name: name,
              number: number,
              id: data.length + 1
            }        
            setData(data.concat(newObj))
          }
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
