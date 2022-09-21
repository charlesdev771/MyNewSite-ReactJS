import React from "react";
import styles from "./css/Main.css";
import Top from './Top';
import BodySite from './BodySite';

export default function Main()
{
    return (

        <div id="Main" className="Main" style={styles.main}>
            <div id="main" className="main">
                <Top />
                <BodySite />
                
            </div>
        </div>

    )
}