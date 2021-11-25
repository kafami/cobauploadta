import React from "react";
import me from "../assets/me.jpg";
import "./Details.css"

function Details() {
  return (
    <div className= "details">
      <div className="columns">
        <div className="column is-1"></div>
        <p className="column">
         Nama : Kaffa Emirudin
         <br></br>
         NIM : 21120119140128
         <br></br>
         Tugas AKhir Praktikum Mobile Device Programing
          <br />
          <br />
          Air Quality sangat berefek ke seharian kita <br />
          <br />
        </p>
        <div className="column is-1"></div>
      </div>

      <div className="column is-full has-text-centered">
        <img src={me} alt="Kaffa"></img>
        <br></br>
        <a href="https://github.com/kafami" target="blank">
          Github
        </a>
        <br />
        
        <br />
        <a
          href="https://www.instagram.com/kafa_mi/"
          target="blank"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Details;
