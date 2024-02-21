import React, { Component } from 'react';
import "../../index.css";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import Forms from "../../components/form/Form";

class Home extends Component {
  render() {
    return (
    <div>
    <meta charSet='UTF-8' name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="stylesheet" href="./index.css"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap" rel="stylesheet"></link>
        <Header />
            <Main />
            <Footer />
            </div>
     
    );
  }
}

export default Home;