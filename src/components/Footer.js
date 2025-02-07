import React from "react";
import "../styles.css";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <p className="footer-text">
            {/* ©{currentYear} Moviedux, All rights reserved */}
            Copyright © 2025 All rights reserved | This website is made with ❤️ by Madhav Tiwari
            </p>
        </footer>
    );
};