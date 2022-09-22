import React from "react";
import styles from "./css/Main.css";
import TopSite from './Top';
import BodySite from './BodySite';
import Footer from './Footer';

export default function Main()
{
    return (

        <div id="Main" className="Main" style={styles.main}>
            <div id="main" className="main">
                
                <TopSite />
                <BodySite />
                <Footer />
                
            </div>
        </div>

    )
}