import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const[bill,setBill]=useState("")
  const[people,setPeople]=useState("")
  const[tip,setTip]=useState("10%")
  const[split,setSplit]=useState(1)
  const[splittotal,setSplitTotal]=useState(0)

  const handleTipChange=(e)=>{
    e.preventDefault()
    let value=e.target.value.replace("%","")
    if(value.indexOf("%")===-1){
      value=value+"%"
    }
    setTip(value)
  }

  const handleInputBill=(e)=>{
    setBill(e.target.value)

  }
  const handleInputPeople=(e)=>{
    setPeople(e.target.value)

  }
  const calculate=()=>{
    const percent=1+parseInt(tip.replace("%",""))
    // console.log(percent);
    const result=((bill*people*percent)/split).toFixed(2)
    // console.log(result);
    setSplitTotal(result)
  }
  useEffect(()=>{
    calculate()
  },[bill,split,tip,people])
  return (
    <div className='parent-div'>
      <form>
      <div>
        <label>Bill</label><br/>
        <input type='text' placeholder='$' className='form-control' onChange={handleInputBill}/>
        <p>Select Tip%</p>
        <div className='parent-btn'>
        <div className='btn-style'>
          
          <button className='each-btn' onClick={handleTipChange}>5%</button>
          <button className='each-btn' onChange={handleTipChange}>10%</button>
          <button className='each-btn' onChange={handleTipChange}>15%</button>
        </div>
        <div className='btn-style'>
          <button className='each-btn' onChange={handleTipChange}>25%</button>
          <button className='each-btn' onChange={handleTipChange}>50%</button>
          <button className='custom-btn'>custom</button>
          
        </div>
        <input type='text' placeholder='0'  onChange={handleTipChange}/>
        </div>

        <p>Number of People</p>
        <i class="fa-solid fa-person"></i> <input type='text'  className='form-control' onChange={handleInputPeople}/>
      </div>
      {/* <button type='submit'>Submit</button> */}

      </form>

      <div className='second-div-initial'>
        <div className='second-parent-div'>
        <div className='second-div'>
       <p className='text'>Tip Amount</p>
       <p>/person</p>

        </div>
        <h1 className='amount'>
         {tip}
        </h1>
        </div>

<div className='second-parent-div'>
        <div className='second-div'>
       <p className='text'>Total amount</p>
       <p>/person</p>

        </div>
        <h1 className='amount'>
        {splittotal}
        </h1>
      </div>

      <button className='reset-btn'>Reset</button>
      </div>





    </div>
  )
}

export default App