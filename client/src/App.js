import React from 'react';
import {useRoutes} from './routes'
import { Navigation } from './components/Navigation';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <div>
      <Navigation/>
    <div>
      {routes}
    </div>
    </div>
    </Router>
  );
}

export default App;
