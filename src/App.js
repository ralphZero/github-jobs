import React from 'react';
import Index from './components/screens/Index';
import JobPage from './components/screens/JobPage';
import { BrowserRouter, Route } from 'react-router-dom';
import JobContextProvider from './contexts/JobContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <JobContextProvider>
          <Route exact path='/' component={Index} />
          <Route path='/:id' component={JobPage} /> 
        </JobContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
