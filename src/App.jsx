import React from 'react'
import LogIn from './screens/LogIn'
import Home from './screens/Home';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App