import React from "react";

function Footer() {
    return (
        <footer className="page-footer">
            <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                    <a href="https://github.com/emcarlisle" className="button" type="button" target="_blank">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/carlisle-emily02/" className="button" type="button" target="_blank">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                </li>
            </ul>
            <div className="footer-copyright py-3">© 2020 Copyright:
                <p>(510) 468-3987</p>
            </div>
                
        </footer>
    )
}

export default Footer;