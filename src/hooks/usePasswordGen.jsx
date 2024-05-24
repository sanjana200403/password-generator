import React, { useState } from 'react'

const usePasswordGen = () => {
const [password,setPassword] = useState("")
const [errorMessage,setErrorMessage]= useState("")
const genratePassword = (checkboxData,length)=>{
let charset = "" , generatePass = ""
console.log(checkboxData)
const selectedOption = checkboxData.filter((checkbox)=>checkbox.state)
console.log(selectedOption,"selected option")
if(selectedOption.length===0){
    console.log("eiuih")
    setErrorMessage("Select Atleast one option")
    setPassword("")
    return
}


selectedOption.forEach((option) => {
    switch(option.title){
        case 'Include Uppercase Letter':
            charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            break;
            case 'Include Lowerrcase Letter':
                charset +='abcdefghijklmnobqrstuvwxyz'
                break;
                case 'Include Number' :
                    charset+= '1234567890'
                    break;
                    case 'Include Symbols':
                        charset += '!@#$%&*^()'
                        break;
                        default:
                            break;


    }
    
});
console.log(charset,"character string")
for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random()*charset.length)
    
             generatePass += charset[randomIndex] 

}
setPassword(generatePass)
console.log(generatePass,"pass")
setErrorMessage("")




}
return {password,errorMessage,genratePassword}
}

export default usePasswordGen
