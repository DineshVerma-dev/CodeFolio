import './App.css'

import { DATA } from "./data/resume"
import { HighlightText } from './lib/highlight'
import {TypingEffect} from './lib/typingeffect'
function App() {
  



  return (
    <>
      <h1 className='text-xl bg-red-100'>
        <HighlightText text={DATA.summary}/>
        <TypingEffect text={DATA.name}/>
      </h1>
    </>
  )
}

export default App



