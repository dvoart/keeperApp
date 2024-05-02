import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (<footer className="footer"> Copyright {currentYear} </footer>);
}

export default Footer;