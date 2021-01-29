import React from 'react';
import Index from './components/screens/Index';
import JobPage from './components/screens/JobPage';
import { Route, HashRouter } from 'react-router-dom';
import JobContextProvider from './contexts/JobContext';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <JobContextProvider>
          <Route exact path='/' component={Index} />
          <Route path='/:id' component={JobPage} /> 
        </JobContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;
