import './App.css'

import Calendar from './componentsLibrary/calendar/calendar.component'
import Button from './componentsLibrary/button/button.component'

function App() {
  return (
    <div className="App">
      <Button
        buttonText='Click me'
        buttonOnClick={() => console.log('clicked')}
      />
    </div>
  )
}

export default App
