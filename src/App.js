import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './pages/funcionario/list'
import New from './pages/funcionario/new'
import Show from './pages/funcionario/show'

function App() {
  return (
    <div className="app">
      <Router>
        <div className="content">
          <Route exact path="/" component={ List } />
          <Route path="/new" component={ New } />
          <Route path="/show/:id" component={ Show } />
        </div>
      </Router>
    </div>
  );
}

export default App;
