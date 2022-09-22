import React from "react";
import styles from "./css/BodySite.css";
import AboutMe from './AboutMe';
import Skills from "./Skills";
import Projects from "./Projects";


export default function BodySite()
{
    return (

        <div id="BodySite" className="BodySite mt-5" style={styles.BodySite}>
            <div id="bodysite" className="bodysite" style={styles.bodysite}>
               <div className="container">
                    <div className="row">
                        <AboutMe />
                        <Skills />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>

    )
}