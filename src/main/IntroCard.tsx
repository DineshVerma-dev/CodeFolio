import { DATA } from "../data/resume"
//@ts-ignore
import { HighlightText } from '../lib/highlight'
import {TypingEffect} from '../lib/typingeffect'

function IntroCard() {

  return (
    <>
    <div className=" m-20 bg-amber-400">
        
      <h2>
        <TypingEffect text={DATA.name}/>
      </h2>
    <div>IntroCard</div>
    </div>
    
    </>
    
  )
}

export default IntroCard