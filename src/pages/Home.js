import React from "react";
import { HomeComponent, PathClip } from '../components/Home/StyleComponent';
import HomePage from '../components/Home';


const Home = () => {
    return (
        <HomeComponent>
            <PathClip />
            <HomePage />
        </HomeComponent>
    )
}

export default Home;