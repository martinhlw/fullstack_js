import React, { Component} from "react";   

import Header from "./parts/Header";
import Hero from "./parts/Hero";
import MostPicked from "./parts/MostPicked";

import LandingPage from 'json/landingPage.json'
export default class LandingPageData extends Component {
    render() {
        return (
          <>
            <Header {...this.props}></Header>
            <Hero data={LandingPage.hero}/>
            <MostPicked data={LandingPage.mostPicked}/>
          </>  
        )
    }
}