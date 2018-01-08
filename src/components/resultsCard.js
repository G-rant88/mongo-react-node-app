 import React from "react";
import '../App.css';

const ResultsCard = props => 

      <div class="col s12 res hoverable">
      <div className="col s12 center">
        <h4>Results</h4>
        <hr/>
        </div>
        <div className="col s6">

          <h4 class="title" value={JSON.stringify(props.results)}>Title: {props.results.Title}</h4>
        <p class="sum">Year: {props.results.Year}</p>
        <p>Rating: {props.results.Rated}</p>
        <p>Genre: {props.results.Genre}</p>
        <p>Plot: {props.results.Plot}</p>
        <p>Director: {props.results.Director}</p>
        <p>Actors: {props.results.Actors}</p>
        <p>imdb Rating: {props.results.imdbRating}</p>
        <p>Awards: {props.results.Awards}</p>
       <h4><a class="btn save" onClick={props.save}>Save Movie</a></h4>
        </div>
        <div className="col s6">

<p><a class="link"><img alt={props.results.Title} src={props.results.Poster}/></a></p>

        </div>


        </div>
       







export default ResultsCard;