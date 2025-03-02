import './App.css'
import { DATA } from "./data/resume"
import { HighlightText } from './lib/highlight'
import { FloatingDockDemo } from './New'
function App() {


  return (
    <>
      <h1 className='text-xl bg-red-100'>
        <HighlightText text={DATA.summary}/>
        <FloatingDockDemo/>
      </h1>
    </>
  )
}

export default App



