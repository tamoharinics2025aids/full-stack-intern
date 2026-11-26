
import React, { useState } from 'react'
import { Button } from '../components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      <p>Count: {count}</p>

      <Button onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      {' '}

      <Button
        variant="destructive"
        onClick={() => setCount(0)}
      >
        Reset
      </Button>

      <hr />

      <Button
        variant="outline"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </Button>

      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vel ducimus quaerat, adipisci dolore nulla cum nam
          exercitationem quisquam accusantium neque.
        </p>
      )}
    </div>
  )
}

export default Count
