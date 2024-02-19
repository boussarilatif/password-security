import "./index.css";
import { useState, useEffect } from "react"
import bcrypt from "bcryptjs"

export default function App() {
  const [valueA, setValueA] = useState('')
  const [valueB, setValueB] = useState('')
  const [strongPassA, setStronPassA] = useState('')
  const [strongPassB, setStronPassB] = useState('')

  function getHash() {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(valueA, salt);

    return hash
  }


  useEffect(() => {
    setStronPassA(getHash())
  }, [valueA])

    useEffect(() => {
    setStronPassB(getHash())
  }, [valueB])

  return (
    <div className="App">

      <div>


        <div className="input-group">
          <div>

            <label id="hash">Password (A) </label>

            <input for="hash" onChange={(event) => {
              setValueA(event.target.value)
            }} placeholder="enter password" />

          </div>

          <div>

            <label id="hash">Password (B) </label>

            <input for="hash" onChange={(event) => {
              setValueB(event.target.value)
            }} placeholder="enter password" />

          </div>
        </div>

        {
          valueA && (
            <p>
              <strong>Bcrypt Hased Password (A):</strong> {strongPassA}
            </p>
          )
        }

        {
          valueB && (
            <p>
              <strong>Bcrypt Hased Password (B):</strong> {strongPassB}
            </p>
          )
        }

      </div>

    </div>
  );
}

