import React from "react";
import '../App.css';

const ItemCard = props => (

   <div className="col s12 hoverable">
           <ul className="collapsible" data-collapsible="accordion">
    <li>
      <div className="collapsible-header">
<h4 className="title">{props.title} <button class="btn note" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}" data-id="{{_id}}">Review</button> <button class="btn red delete" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}">Delete</button></h4>
      </div>

      <div className="collapsible-body">
      <div className="col s6">
        <p>Year: {props.year}</p>
        <p>Rating: {props.rated}</p>
        <p>Genre: {props.genre}</p>
        <p>Plot: {props.plot}</p>
        <p>Director: {props.director}</p>
        <p>Actors: {props.actors}</p>
        <p>imdb Rating: {props.rating}</p>
        <p>Awards: {props.awards}</p>
        <p>Review: {props.review}</p>
        <br/>
        <a class="btn red delClick right" id="del{{_id}}">Delete Review</a> 
        </div>
        <div className="col s6">
        <img src={props.poster}/>
        </div>
          <br/>

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
  </div>


);

export default ItemCard;