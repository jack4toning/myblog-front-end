import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Home, Blog } from './pages';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Navigate to='/' replace />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path='/blogs/edit/:id' element={<Home />} />
          <Route path='/signIn' element={<Home />} />
          <Route path='/signUp' element={<Home />} />
          <Route path='/admin' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
