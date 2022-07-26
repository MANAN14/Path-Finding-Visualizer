import React, { useEffect} from "react";

import start from '../Node/images/start.png'; // Tell webpack this JS file uses this image
import end from '../Node/images/end.png';
import weight from '../Node/images/weight.png';
import visitedWeight from '../Node/images/visitedWeight.png';
import pathWeight from '../Node/images/pathWeight.png';
import "./Tutorial.css";

const skipPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(".pathfindingVisualizer");
  elem.style.display = "none";
  pathfindingVisualizer.style.filter = "none";
};
const showPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(".pathfindingVisualizer");
  elem.style.display = "block";
  pathfindingVisualizer.style.filter = " blur(4px)";
};

function setCookie(name, value) {
  var cookie = name + "=" + escape(value) + ";";
  document.cookie = cookie;
}

function getCookie(name) {
  var chunks = document.cookie.split(";");
  for(var i=chunks.length; i--;){
      if(chunks[i].trim().split("=")[0].trim() === name){
          return chunks[i].trim().split("=")[1].trim();
      }
  }
  return null;
}
function Tutorial() 
{

  useEffect(()=>{
     if (getCookie('visited') == null){
      showPopUp();
      setCookie('visited', true);
    }
    else {
      skipPopUp();
    }
  },[])
    return (
      <div className="PopUpTextBox">
        <header>
          <p>Welcome to Path Finding Visualizer</p>
          <h3 onClick={skipPopUp}>x</h3>
        </header>

        <div className="PopUpIntroductionText">
          <h3>Quick Walkthrough</h3>
          <div className="player">
            
            <label htmlFor="start">Start : </label>
            <img src={start} name="start" alt=""/>

            <label htmlFor="end">End : </label>
            <img src={end} name="end" alt=""/>

            <label htmlFor="wall">Wall : </label>
            <div style={{background:"black"}} name="wall"></div>

            <label htmlFor="wall">Visited Node : </label>
            <div style={{backgroundColor: 'rgba(0, 190, 218, 0.75)'}} name="wall"></div>

            <label htmlFor="weight">Weight : </label>
            <img src={weight} name="weight" alt=""/>

            <label htmlFor="visitedWeight">Visited Weight : </label>
            <img src={visitedWeight} name="visitedWeight" alt=""/>

            <label htmlFor="pathWeight">Weight on Path : </label>
            <img src={pathWeight} name="pathWeight" alt=""/>

          </div>
          <div>
          </div>
        </div>
        <div className="skipBox">
          <small>*You can view this anytime by clicking on <span>[Path Finding Visualizer]</span></small>
          <button onClick={skipPopUp}>Done !</button>
        </div> 
      </div>
    )
}

export {skipPopUp,showPopUp,Tutorial};
