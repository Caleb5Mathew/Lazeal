//import DOMPurify
import React from "react"
import '../src/designs/applayout';
//import Layout from "./designs/applayout.js";
//import applayout from "/designs/applayout.html";
// import 'C:\Users\ezekm\OneDrive\Pictures\Coding'
import './images/headerpic.jpg'
import '../src/'


const App = () => {
  return (
    <React.Fragment>
    <html>
      
      <div className="headerbackdrop">
        <div className="outerheader">
          <div className = "headerbackdrop">
            <img src = {require('./images/headerpic.jpg')} alt = "dang"
              className = "logo"
            />
              <div className = "outerheaderlogo">
                <h1>

                  <img  className="headerpicture" src = {require('./images/headerpic.jpg')}/>

                </h1>
              </div>
          </div>
        </div>
      <div>

        </div>
          <input id="check01" type="checkbox" name="menu" />
            <label for="check01">Menu</label>
              <ul class="submenu">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>


      </div>
    <div className="backdrop">

    </div>

      


    </html>
    </React.Fragment>
   
  );
};
export default App;
  
