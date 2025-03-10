
import { Link } from 'react-router-dom'
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
     <Button variant="outline">
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </Link>
     </Button>
     
    </>
  )
}

export default Test



