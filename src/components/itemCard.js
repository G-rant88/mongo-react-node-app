import React from "react";
import '../App.css';

const ItemCard = props => (

   <div className="col s12 hoverable">
           <ul class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header">
<h4 className="title">{props.title} <button class="btn note" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}" data-id="{{_id}}">Review</button> <button class="btn red delete" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}">Delete</button></h4>
      </div>

      <div class="collapsible-body">
      <div className="col s6">
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

<div class="notesHere" id="{{_id}}">
      <br/>
      <ul>
       <p class="delNote"><span id="size">Review:</span><li class="bodyHere" id="print{{_id}}"></li><a class="btn red delClick right" id="del{{_id}}">Delete Review</a></p>
      </ul>
<form id="noteBody" class="input-field">
  <div>
  <i class="material-icons prefix">create</i>
<textarea class="materialize-textarea" name="body" type="text" id="note{{_id}}"></textarea>
<label for="icon_prefix2">Review</label>
</div>
</form>
    <div>
      <h4><a class="btn cyan saveNote" data-id="{{_id}}">Save</a></h4>
    </div>  
</div>

      </div>
    </li>
    </ul>
  </div>




);

export default ItemCard;