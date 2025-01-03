import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteFound from './components/NoteFound/NoteFound';

function App() {

  return (
    <Router>
      <div>
        <h1>Welcome to My React App</h1>
        <Switch>

          <Route path='/NoteFound'  Component={NoteFound}/>

          <Route component={NoteFound} />
          </Switch>
      </div>
    </Router>
  )
}

export default App
