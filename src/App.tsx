import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Climate App</h1>
        <Button>Click Me</Button>
      </div>
    </BrowserRouter>
  )
}

export default App
