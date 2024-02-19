import "./index.css";
import { useState } from "react"
import sha256 from "sha256"

export default function App() {
  const [valueA, setValueA] = useState('')
  const [valueB, setValueB] = useState('')

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

        <p>
          <strong>Hased Password (A):</strong> {sha256(valueA)}
        </p>

        <p>
          <strong>Hased Password (B):</strong> {sha256(valueB)}
        </p>

      </div>

    </div>
  );
}

