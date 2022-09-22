import React from "react";
import styles from "./css/Footer.css";



export default function Footer()
{
    return (

        <div id="BodySite" className="BodySite mt-5">
            <footer class=" text-lg-start bg-light text-muted">

                <section class="">
                    <div class="container text-md-start mt-5">

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="pt-3">Contato</h6>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                                charlesdev07721@gmail.com
                        </p>
                        <p>
                            <i class="fas fa-phone me-3"></i>+55 (84)98810-6547
                        </p>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4">
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Created by: Charles Dantas</a>
                </div>
            </footer>
        </div>

    )
}


