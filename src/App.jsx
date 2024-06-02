import Navigation from './navigation'
import { useState } from 'react'

const App = () => {
  const [route, setRoute] = useState('home')

  return (
    <div>
      <Navigation initialRoute={route} setRoute={setRoute} />
    </div>
  )
}
export default App
