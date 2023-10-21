import "./index.css";
import { useState,useEffect } from "react"
import sha256 from "sha256"
import bcrypt from "bcryptjs"



export default function App() {
  const [value,setValue] = useState('')
  //const [hased,setHashed] = useState('')
  const [strongPass,setStronPass] = useState('')


  function getHash(){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(value, salt);

    return hash
  }

  useEffect(()=>{
    setStronPass(getHash())
  },[value])



  return (
    <div className="App">

        <div>

  <label id="hash">Password </label>

                 <input for="hash" onChange={(event)=>{
         setValue(event.target.value)
       }} placeholder="enter password" />
        
        </div>

        {
          value && (
                <p>
          <strong>Hased Password:</strong> { sha256(value) }
       </p>
          )
        }
                {
          value && (
                <p>
          <strong>Bcrypt Password:</strong> { strongPass }
       </p>
          )
        }
    </div>
  );
}

