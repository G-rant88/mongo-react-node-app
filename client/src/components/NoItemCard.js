import React from "react";
import '../App.css';

const NoItemCard = props => (


           <ul className="collapsible col s12 hoverable" data-collapsible="accordion">
    <li>
      <div className="collapsible-header">
<h4 className="title">{props.title}</h4>
      </div>

      <div className="collapsible-body">
      <div className="col s6">
      <button class="btn red delete" onClick={() => props.delmov(props.title)}>Delete Movie</button>
        <p>Year: {props.year}</p>
        <p>Rating: {props.rated}</p>
        <p>Genre: {props.genre}</p>
        <p>Plot: {props.plot}</p>
        <p>Director: {props.director}</p>
        <p>Actors: {props.actors}</p>
        <p>imdb Rating: {props.rating}</p>
        <p>Awards: {props.awards}</p>
        </div>
        <div className="col s6">
        <img src={props.poster}/>
        </div>

        <div className="col s10">
       <p>{props.review}</p>
        </div>

<div className="notesHere col s12">
<form id="noteBody" class="input-field">
  <div>
  <i class="material-icons prefix">create</i>
<textarea class="materialize-textarea" name="review" 
type="text" id="notey" onChange={props.input}></textarea>
<label for="icon_prefix2">Review</label>
</div>
</form>
    <div>
      <h4><a className="btn cyan saveNote" value={props.id} onClick={() => props.save(props.id)}>Save</a></h4>
    </div>  
</div>
</div>
    </li>
    </ul>

);

export default NoItemCard;