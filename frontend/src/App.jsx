
import React from 'react'
import Count from './hooks/Count'
import Student from './components/Student'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <>
      <Count />

      <Button onClick={() => alert("Default Button Clicked!")}>
        Default
      </Button>

      {' '}

      <Button
        variant="destructive"
        onClick={() => alert("Delete Button Clicked!")}
      >
        Delete
      </Button>

      {' '}

      <Button
        variant="outline"
        onClick={() => alert("Outline Button Clicked!")}
      >
        Outline
      </Button>

      {' '}

      <Button
        variant="secondary"
        onClick={() => alert("Secondary Button Clicked!")}
      >
        Secondary
      </Button>

      {' '}

      <Button
        variant="ghost"
        onClick={() => alert("Ghost Button Clicked!")}
      >
        Ghost
      </Button>

      <Student />
    </>
  )
}

export default App
