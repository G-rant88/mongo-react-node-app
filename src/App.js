import React, { Component } from 'react';
import './App.css';
import ItemCard from "./components/itemCard.js";
import ResultsCard from "./components/resultsCard.js";

class App extends Component {

// state = {
//     items,
//     Score: 0,
//     TopScore: 0,
//     correct: ""
//   };

//     shuffleItems = () => {
    
//     const items = this.state.items.map(a =>
//       [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

//   this.setState({ items });
//   };


//   addScore = (val) => {
    
//   const value = parseInt(val);

//     for (let i = 0; i < items.length; i++) {

//   if (items[value].clicked === true){

//      this.state.correct = "Wrong Choice!";

//   if(this.state.Score > this.state.TopScore){
//      this.state.TopScore = this.state.Score;
//    }
//     this.setState({ Score: 0 });

// for (let i = 0; i < items.length; i++) {

//   items[i].clicked = false;

//   }
//   return false;
// }

//     }
  

//    this.state.Score = this.state.Score + 1;
//    this.state.correct = "Correct Choice!";

//    items[value].clicked = true;


//   };


  render() {
    return (
  
  <div>
    <div class="row">
    <div class="col s12">
      <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">The MERN ESPN NBA Article Scrubber</a>
    </div>
  </nav>
  </div>
</div>
<div className="container">
<div class="row toprow z-depth-5">
  <div class="col s12 center-align hoverable">
  <h4>Search for and annotate articles of interest!</h4>
  <hr/>
     <form class="col s12">
      <div className="input-field col s12">
          <input id="topic" type="text"/>
          <label for="topic">Topic</label>
        </div>
        <div className="input-field col s12">
          <input id="start" type="text"/>
          <label for="start">Start Year</label>
        </div>

<div className="input-field col s12">
          <input id="end" type="text"/>
          <label for="end">End Year</label>
        </div>
        <div className="col s12 buttonCol"><h4>
<a class="waves-effect waves-light btn-large">Search</a></h4>
</div>
     </form>
</div>
</div>
   <div class="row toprow z-depth-5">
<ResultsCard/>
   </div>

   <div class="row toprow z-depth-5">
<ItemCard/>
   </div>
</div>

<footer className="page-footer">
  <div className="footer-copyright">
            <div className="container">
            Made By Ben Grant © 2018
            </div>
          </div>
       </footer>

</div>
    )
  }
}
export default App;