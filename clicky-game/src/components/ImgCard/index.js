import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
      <div className="card">
          <div className="img-container">
              <img className="card-img-top" 
               alt={props.name}
               src={props.image}
               clicked={props.clicked}
               onClick={()=>props.score(props.id)} />
          </div>
          <div className="content">
              <ul>
                  <li>
                      <strong>Name:</strong> {props.name}
                  </li>
              </ul>
          </div>
      </div>
  )};

  export default CharacterCard;