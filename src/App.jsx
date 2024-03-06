import './App.css'
import Joke from "./components/Joke";
import jokesData from "./components/jokesData"
import React from "react";


function App() {

  const [jokes, setJokes] = React.useState(jokesData)

  const mappedJokes = jokes.map(joke => {
    return (
      <Joke
        key={joke.id}
        id={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
        isShown={joke.isShown}
        state={() => state(joke.id)}
      />
    )
  })

  function state(id) {
    setJokes(function (items) {
      const newJokes = []
      for (let i=0; i < items.length; i++) {
        const item = items[i]
        if (item.id == id) {
            newJokes.push({...item, isShown: !item.isShown})
        } else {
          newJokes.push(item)
        }
      }
    return newJokes
    }) 
  }

  return (
    <>
      <div className='app'>
        {mappedJokes}
      </div>
    </>
  )
}

export default App
