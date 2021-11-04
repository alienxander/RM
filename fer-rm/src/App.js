import Menu from './components/header/Menu';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';


//export const CONTEXT_PATH = "/rmgsoft";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path={`/rmgsoft`} component={Header}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
