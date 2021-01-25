import React from 'react';
import Index from './components/screens/Index';
import JobPage from './components/screens/jobPage';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Index} />
        <Route path='/:id' component={JobPage} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
