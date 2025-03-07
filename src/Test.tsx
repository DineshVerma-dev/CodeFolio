
import { Button } from './components/ui/button'

import { DATA } from "./data/resume"

import { HighlightText } from './lib/highlight'
import {TypingEffect} from './lib/typingeffect'

function Test() {
  
  return (
    <>
      <h1 className='text-xl bg-red-100'>
        <HighlightText text={DATA.summary}/>
      </h1>
      <h2>
        <TypingEffect text={DATA.name}/>
      </h2>
     <Button  />
    
     
    </>
  )
}

export default Test



