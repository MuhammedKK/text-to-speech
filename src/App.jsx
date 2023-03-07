import './index.css'
import './App.css';
import React, {useRef, useEffect} from 'react';

function App() {


  const text = useRef('') // get The textELement
  const speechBtn = useRef('') // get The textELement
  
  
  const synth = speechSynthesis;


  const textToSpeech = (text) => {
    let converting = new SpeechSynthesisUtterance(text)
    for(let voice of synth.getVoices()) {
      let select = document.getElementById("select");
      for(let option of select) {
        if(option.value == voice.name) {
          converting.voice = voice
        }
      }
    }
    speechSynthesis.speak(converting);
  }

  const handleSpeech = (e) => {
    e.preventDefault()
    if(text.current.value !== "") {
      textToSpeech(text.current.value);
    }
  }

  useEffect(() => {
    let select = document.getElementById("select");
    for(let voice of synth.getVoices()) {
      let option = `<option value=${voice}>${voice.name} ${voice.lang}</option>`
      select.insertAdjacentHTML("beforeend", option)
    }
  }, [])

  

  return (
    <div className="App">
      <div className='Wrapper'>
        <header>Text Of Speech</header>
        <form action='#'>
          <div className="row">
            <label htmlFor="" className="text">Enter Your Text</label>
            <textarea name="" ref={text} id="" cols="30" rows="10"></textarea>
          </div>
          <div className="row">
            <label htmlFor="" className="text">Select Voice</label>
            <select id="select">

            </select>
          </div>
          <div className="row">
            <button onClick={handleSpeech} ref={speechBtn} className="talk">Convert To Speech</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
