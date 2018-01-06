 import React from "react";
import '../App.css';

const ResultsCard = props => (



    
      <div class="col s12 res hoverable">
      <div className="col s12 center">
        <h4>Results</h4>
        <hr/>
        </div>
        <h4 class="title"><button class="btn save" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}">Save Article</button></h4>
        <p class="sum"></p>
        <p><a class="link" href="{{link}}"></a></p>

</div>



);

export default ResultsCard;