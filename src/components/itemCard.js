import React from "react";
import '../App.css';

const ItemCard = props => (

    

      <div class="col s12 res hoverable">
      <div className="col s12 center">
        <h4>Saved Articles</h4>
        <hr/>
        </div>
        
        <h4 class="title"> <button class="btn note" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}" data-id="{{_id}}">Note</button> <button class="btn red delete" data-title="{{title}}" data-sum="{{sum}}" data-link="{{link}}">Delete</button></h4>
        <p class="sum"></p>
        <p><a class="link" href="{{link}}"></a></p>

<div class="notesHere" id="{{_id}}">
      <br/>
      <ul>
       <p class="delNote"><span id="size">Note:</span><li class="bodyHere" id="print{{_id}}"></li><a class="btn red delClick right" id="del{{_id}}">Delete Note</a></p>
      </ul>
<form id="noteBody" class="input-field">
  <div>
  <i class="material-icons prefix">create</i>
<textarea class="materialize-textarea" name="body" type="text" id="note{{_id}}"></textarea>
<label for="icon_prefix2">Note</label>
</div>
</form>
    <div>
      <h4><a class="btn cyan saveNote" data-id="{{_id}}">Save</a></h4>
    </div>  
</div>
</div>

);

export default ItemCard;