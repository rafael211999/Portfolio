import React from "react";
import "./Navbar.css";



function Navbar() {
  return <div className="container">


    <div className="nome">Rafael Alves</div>
    <div className="links">
    <div className="itens"><a href="https://api.whatsapp.com/send?phone=5522988067170" target="_blank" rel="noopener noreferrer" >Whatsapp</a></div>
    <div className="itens"><a href="https://github.com/rafael211999?tab=repositories"target="_blank" rel="noopener noreferrer">Github</a></div>
    <div className="itens"><a href="https://www.linkedin.com/in/rafael-alves-souza" target="_blank" rel="noopener noreferrer">Linkedin</a></div>
    <div className="itens"><a href="https://instagram.com/rafaealves99?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">Instagran</a></div>
    </div>
  </div>;
}

export default Navbar;




