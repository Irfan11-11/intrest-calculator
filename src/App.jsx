import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  //create state to store data
  const [interest, setintrest] = useState(0)
  const [principle, setprinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setyear] = useState(0)

  const [principleAmountValid, setprincipleAmountValid] = useState(true)
  const [rateAmountValid, setrateAmountValid] = useState(true)
  const [yearAmountValid, setyearAmountValid] = useState(true)

  console.log(principle);

  const handlereset = () => {
    console.log("Inside handilereset function");
    //reset all state
    setintrest(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
    setprincipleAmountValid(true)
    setrateAmountValid(true)
    setyearAmountValid(true)

  }

  const handlecalculate = ()=>{
    if(principle && rate && year){
setintrest(principle*year*rate/100)
    }else{
      alert("please fill the form completelly!!!")
    }
  }

  const handlevalidation = (tag) => {
    console.log("Inside handlevalidation");
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+/));
    if (!!value.match(/^[0-9]*.?[0-9]+/)) {
      //valid
      if (name == "principle") {
        setprinciple(value)
        setprincipleAmountValid(true)

      } else if (name == "rate") {
        setrate(value)
        setrateAmountValid(true)

      } else {
        setyear(value)
        setyearAmountValid(true)
      }
    } else {
      //invalid
      if (name == "principle") {
        setprinciple(value)
        setprincipleAmountValid(false)

      } else if (name == "rate") {
        setrate(value)
        setrateAmountValid(false)

      } else {
        setyear(value)
        setyearAmountValid(false)
      }

    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3>Simple Intrest Calculator</h3>
        <p>Calculate your simple intrest easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1> ₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Intrest</p>
        </div>

        <form className='mt-5'>
          {/* principle */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined"
              value={principle || ""} name='principle' onChange={tag => handlevalidation(tag.target)} />
          </div>
          {!principleAmountValid && <div className='text-danger mb-3'>*Invalid Principle Amount</div>}

          {/*rate */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of intrest (p.a) %" variant="outlined"
              value={rate || ""} name='rate' onChange={tag => handlevalidation(tag.target)} />
          </div>
          {!rateAmountValid && <div className='text-danger mb-3'>*Invalid rate Amount</div>}

          {/* time */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (yr)" variant="outlined"
              value={year || ""} name='year' onChange={tag => handlevalidation(tag.target)} />
          </div>
          {!yearAmountValid && <div className='text-danger mb-3'>*Invalid year Amount</div>}

          {/*btn collection */}
          <Stack direction="row" spacing={2}>
            <Button onClick={handlecalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handlereset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>

        </form>

      </div>
    </div>
  )
}

export default App
