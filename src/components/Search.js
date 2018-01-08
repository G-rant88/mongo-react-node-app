import React from "react";

const Search = props =>

 <form class="col s12">
      <div className="input-field col s12">
          <input id="title" type="text"

          onChange={props.input}
        value={props.title}
        name="title"

          />
          <label for="topic">Movie</label>
        </div>
        <div className="input-field col s12">
          <input id="year" type="text"

        onChange={props.input}
        value={props.year}
        name="year"

          />
          <label for="year">Year</label>
        </div>
        <div className="col s12 buttonCol"><h4>
<a class="waves-effect waves-light btn-large" onClick={props.search}>Search</a></h4>
</div>
     </form>

export default Search;
