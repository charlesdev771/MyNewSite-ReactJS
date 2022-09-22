import React from "react";
import styles from "./css/Main.css";
import Top from "./css/Top.css";

import i_am from "../imgs/I.jpg";
import github from "../imgs/github.png";
import linkdin from "../imgs/linkdin.png";

export default function TopSite()
{
    return (

        <div id="Top" className="Top" style={styles.Top}>
            <div id="top" className="top">
                 <div className="container">
                    <div className="row">

                            <img src={i_am} style={styles.i_am} className='i_am mt-5' />
                            <div className="container mt-4 mb-3">
                                <a target="_blank" href="https://github.com/charlesdev771" >
                                    <img src={github} style={styles.githubIcon} className='githubIcon mt-2'/>
                                </a>
                                <a target="_blank" href="https://github.com/charlesdev771" >
                                    <img src={linkdin} style={styles.linkdinIcon} className='linkdinIcon mt-2 ml-3'/>
                                </a>
                            </div>
                        <div className="container">
                            <h1 className="text-center text-light col-12 display-4 mt-5">
                                Hello World! This is my website :)
                            </h1>
                            <h2 className="text-center text-light col-12 display-5 mt-3">
                                Know a little more about me and my work.
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}