import React from 'react';
import Dashboad from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Card from './Components/card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registartion/Registration';
import Login from './Components/Login/Login';
import ReadNow from './Components/ReadNow/ReadNow';


class App extends React.Component {
  render() {

    return <div className='main-content'>

      <BrowserRouter>
      
      <Header/>
<<<<<<< HEAD
        <Routes>
        <Route path="/card" element={<Card/>}/>
=======
      <Routes>
        <Route path="/card" element={<Card/>}/>    
>>>>>>> d886955d325b0ad74f05f7cbb55c9af1d15d65c8
        <Route path="/" element={<Dashboad/>}/>
        <Route path="/registraion" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/readnow" element={<ReadNow/>}/>
     
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <NewsList/> */}

    </div>

  }
}
export default App;
