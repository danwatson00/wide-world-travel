import React from 'react';
import copyrightDate from './Copyright';
import Links from './Links';

function Footer() {
    return (
    <footer className="footer">
        <Links className="links" />
        <p className="copyright">{copyrightDate}Copyright 2018, Dan Watson</p>
    </footer>
    )
}

export default Footer;