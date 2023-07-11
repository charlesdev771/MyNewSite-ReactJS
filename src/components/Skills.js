
import React from "react";
import styles from "./css/Skills.css";


export default function Skills()
{
    return (
        <div>

        
        <div class="card container-fluid bg-dark text-light mt-5">
        <h1 className="text-center mt-5 mb-3">Principais habilidades</h1>

            <div class="card-body">
                <p class="card-text">WEB: front-end com HTML5, CSS3, JS, React e VUE. Back-end com Flask, Django, NODEJS e PHP.</p>
            </div>
        </div>
        <div class="card container-fluid bg-dark text-light">
            <div class="card-body">
                <p class="card-text">Mobile: react-native, flutter.</p>
            </div>
        </div>
        <div class="card container-fluid bg-dark text-light">
            <div class="card-body">
                <p class="card-text">S.i ofensiva: Linux, Windows, Metasploit, Maltego, Fierce, ChameleonPY, python, shell script, assembly e etc.</p>
            </div>
        </div>
        
        </div>
        
    )
}
