import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search.js";
import ItemCard from "./components/itemCard.js";
import NoItemCard from "./components/NoItemCard.js";
import NoSavedCard from "./components/NoSavedCard.js";
import ResultsCard from "./components/resultsCard.js";
import NoResultsCard from "./components/noResultsCard.js";
import API from "./utils/API";
import axios from "axios";
import $ from "jquery";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import io from "socket.io-client";


const colors = {
  backgroundColor: "dodgerblue"
};

  const addMessage = data => {
    console.log(data);
 
    alert("Movie " + data.message + " Saved");

   
};


  const delMessage = data => {
    console.log(data);
    
    alert("Movie " + data.message + " Deleted");

   
};

  const addRev = () => {
   
    
    alert("Review Saved");

   
};

  const delRev = () => {
    
  
    alert("Review Deleted");

   
};



class App extends Component {

  state = {
    results: [],
    articles: [],
    title: "",
    year: "",
    searched: false,
    saved: false,
    movieTitle: "",
    movieYear: "",
    rated: "",
    genre: "",
    plot: "",
    director: "",
    actors: "",
    rating: "",
    awards: "",
    poster: "",
    review: "",
    norev: "No review yet.",
    message: ""
  };

  socket = io("/");


    searchMovie = (title, year) => {
    API.search(title, year)
      .then(res => this.setState({ results: res.data,
      								searched: true }))
      .catch(err => console.log(err));
  };

   apiSearch = event => {
    event.preventDefault();
    this.searchMovie(this.state.title, this.state.year);
  };

 inputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

getArticles = () => {

axios.get("/articles").then(articles => {

console.log("got articles");
console.log(articles.data.dbArticle);

 this.setState({

    articles: articles.data.dbArticle
})

$('.collapsible').collapsible();


})
};

  saveMovie = () => {

  let res = this.state.results

this.setState({

   movieTitle: res.Title,
   movieYear: res.Year,
   rated: res.Rated,
   genre: res.Genre,
   plot: res.Plot,
   director: res.Director,
   actors: res.Actors,
   rating: res.imdbRating,
   awards: res.Awards,
   poster: res.Poster,
   searched: false


 })


console.log(this.state.movieTitle);

 const info = {

  title: res.Title,
  year: res.Year,
  rated: res.Rated,
 genre: res.Genre,
   plot: res.Plot,
   director: res.Director,
   actors: res.Actors,
   rating: res.imdbRating,
   awards: res.Awards,
   poster: res.Poster

 }



axios.post("/save", {info}).then(articles => {

console.log("got articles");
console.log(articles.data.dbArticle);


this.setState({

    articles: articles.data.dbArticle,
    saved: true
})

$('.collapsible').collapsible();

this.socket.emit('SEND_MESSAGE', {

        message: this.state.movieTitle
    });


  this.getArticles();

})


};

saveNote = id => {

  var id = id;

var notey = {

note: this.state.review

}

axios.post("/note/"+id, {notey}).then(articles => {

  this.getArticles();

  this.socket.emit('ADD_REV');


});

};

delNote = id => {

  var id = id;


axios.post("/delnote/"+id).then(articles => {

	this.socket.emit('DEL_REV');



  this.getArticles();


})
};

delMov = title => {

var info = {

	title: title
}


axios.post("/delete", {info}).then(articles => {

  this.getArticles();
  $('.collapsible').collapsible('close', 0);


  this.socket.emit('DEL_SEND', {

        message: info.title
    });


 this.getArticles();
})
};


 componentDidMount() {
    
    this.getArticles();

    $('.collapsible').collapsible();


  this.socket.on('REV_MESSAGE', function(data){
    addRev();

})

    this.socket.on('REV_DEL', function(data){
    delRev();

});

    	this.socket.on('DEL_MESSAGE', function(data){
    delMessage(data);

});

    this.socket.on('RECEIVE_MESSAGE', function(data){
    addMessage(data);
});


  }


  render() {

  		const isSearched = this.state.searched;
  		const isSaved = this.state.saved;
  		const allArts = this.state.articles[0];
      const resArt = this.state.results.Response;
        console.log(this.state.results)
        console.log(this.state.results.Response)
        console.log(allArts);

    return (
  
  <div>

    <div class="row">
      <nav style={colors}>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">The MERN Movie Saver</a>
    </div>
  </nav>
</div>
<div className="container">
<div class="row toprow z-depth-5">
  <div class="col s12 center-align hoverable">
  <h4>Search for and review movies of interest!</h4>
  <hr/>
    <Search
    title={this.state.title}
    year={this.state.year}
    search={this.apiSearch}
    input={this.inputChange}
    
    />
</div>
</div>
   <div class="row toprow z-depth-5">
     <div class="col s12 res hoverable">
      <div className="col s12 center">
        <h4>Results</h4>
        <hr/>
        </div>

{isSearched && resArt === "True" && resArt !== undefined ?
	(
  <ResultsCard
  results={this.state.results}
  save={this.saveMovie}
    />
):
(	
 <NoResultsCard/>

)
}

   </div>
</div>
   <div class="row toprow z-depth-5">
      <div className="col s12 center">
        <h4>Saved Movies</h4>
        <hr/>
        </div>
{

allArts !== undefined ?

(

this.state.articles.map(articles => (

articles.note ?

(
          <ItemCard
            title={articles.title}
            year={articles.year}
            genre={articles.genre}
            plot={articles.plot}
            poster={articles.poster}
            actors={articles.actors}
            rated={articles.rated}
            rating={articles.rating}
            awards={articles.awards}
            director={articles.director}
            id={articles._id}
            review={articles.note.body}
            noteid={articles.note._id}
            input={this.inputChange}
            save={this.saveNote}
            delnote={this.delNote}
            delmov={this.delMov}
            />
):
(
		<NoItemCard
            title={articles.title}
            year={articles.year}
            genre={articles.genre}
            plot={articles.plot}
            poster={articles.poster}
            actors={articles.actors}
            rated={articles.rated}
            rating={articles.rating}
            awards={articles.awards}
            director={articles.director}
            id={articles._id}
            input={this.inputChange}
            save={this.saveNote}
            review={this.state.norev}
            delmov={this.delMov}
            />

)

          ))

):
(


<NoSavedCard/>

	)
	}
          </div>
</div>

  <footer className="page-footer" style={colors}>
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