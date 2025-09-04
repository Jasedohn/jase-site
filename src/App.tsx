import { useState } from 'react'
import botLogo from './assets/download.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="Projects.tsx" target="_blank">
          <img src={botLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jase Dohn</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello what are you doing here? This is a personal website for Jase Dohn.
        </p>
      </div>
      <p className="read-the-docs">
        In development...
      </p>
    </>
  )
}

export default App
