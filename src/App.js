import './App.scss';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './features/pages/Home';
import Login from './features/pages/auth/Login';
import Register from './features/pages/auth/Register'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-route-place">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
