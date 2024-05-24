import { useState } from 'react'

import './App.css'
import usePasswordGen from './hooks/usePasswordGen'
import PasswordStrengthIndicator from './comonents/StrengthChecker'

function App() {
  const checkBoxData = [
    {title:"Include Uppercase Letter",state:false},
    {title:"Include Lowerrcase Letter",state:false},
    {title:"Include Number",state:false},
    {title:"Include Symbols",state:false},


  ]
  // ---- mangae state----
  const [length, setLength] = useState(4)
  const [checkedData,setCheckedData] = useState(checkBoxData)
  const [copied,setCopied] = useState(false)
// === get data from custome hook ===
 const  {password,errorMessage,genratePassword} =usePasswordGen()
  
//=========== handle checkbox change ==========
const handleCheckBoxChange = (index)=>{
  const updatedCheckBoxData= [...checkedData]
  updatedCheckBoxData[index].state = !updatedCheckBoxData[index].state
  setCheckedData(updatedCheckBoxData)

}
// -----handle copyy function ------
const handleCopy = ()=>{
  navigator.clipboard.writeText(password)
  setCopied(true)
  setTimeout(()=>{
    setCopied(false)

  },1000)
}

  return (
    <div className='container'>
 {/* {
  password text and copy
  character length
  checkbox
  strength
  genrate button

 }       */}

 {/* password text and copy */}

 { password &&
 <div className="header">
  <div className="title">
{password}
  </div>
  <button className='copyBtn'
  onClick={()=>{
handleCopy()
  }}
  >
  {copied ? "copied":"copy"}
  </button>
 </div>
}

 {/* character length */}
 <div className="charLength">
  <span>

  <label>CharacterLength </label>
  <label htmlFor="">{length}</label>
  </span>
  <input type="range" min='4' 
  max='20'
  value={length}
  onChange={(e)=>
    setLength(e.target.value)
  }
   />
 </div>

 {/* checkboxes */}
 <div className="checkboxes">
  {
    checkBoxData.map((chechBoxData,idex)=>(
      <div key={idex}>
        <input type="checkbox" 
        onChange={()=>{
          handleCheckBoxChange(idex)
        }}
        checked={checkedData.state} />
        <label htmlFor="">{chechBoxData.title}</label>
      </div>
    ))
  }

 </div>
 {/* strngth checker */}
 <PasswordStrengthIndicator password={password}/>
{/* error handling */}
{
  errorMessage && <div className='errorMessage'>
    {errorMessage}
    </div>
}
 {/* generate button */}
<button className='generateBtn'
onClick={()=>genratePassword(checkedData,length)}
>Genrate Button</button>
    </div>
  )
}

export default App
