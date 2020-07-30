import React from "react";
import sanFran from "./sanfrancisco.jpg";
import { Link } from "react-router-dom";

function More() {
    return (
        <div className="bgimg" style={{backgroundImage: `url(${sanFran})`}}>
            <div className="topleft">
                <Link
                    to="/"
                    id="back-btn"
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/about"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >Back to Home
                </Link>
            </div>
            <div className="middle container">
                <div className="content">
                    <h1>COMING SOON</h1>
                    <p>Check back here soon for more updates!</p>
                </div>
            </div>

            <div className="bottomleft container" id="credentials">
                <div className="content" id="credentials">
                    <p>Emily Carlisle</p>
                    <p>Full Stack Web Developer</p>
                </div>
            </div>

        </div >

    )
}

export default More;