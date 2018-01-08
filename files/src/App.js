import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search.js";
import ItemCard from "./components/itemCard.js";
import ResultsCard from "./components/resultsCard.js";
import API from "./utils/API";
import axios from "axios";

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
    review: ""
  };

    searchMovie = (title, year) => {
    API.search(title, year)
      .then(res => this.setState({ results: res.data }))
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

  saveMovie = () => {

  const res = this.state.results

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
   searched: true


 })


console.log(this.state.movieTitle);

 const info = {

  title: this.state.movieTitle,
  year: this.state.movieYear,
  rated: this.state.rated,
  genre: this.state.genre,
  plot:  this.state.plot,
  actors: this.state.actors,
  poster: this.state.poster,
  rating: this.state.rating,
  director: this.state.director,
  awards: this.state.awards

 }

if(this.state.searched === true){

axios.post("/save", {info}).then(articles => {

console.log("got all articles");
console.log(articles.data.dbArticle);


this.setState({

    articles: articles.data.dbArticle
})

})

}
};


getArticles = () => {

axios.get("/articles").then(articles => {

console.log("got articles");
console.log(articles.data.dbArticle);

 this.setState({

    articles: articles.data.dbArticle
})

})
};

saveNote = id => {

  var id = id;

var notey = {

note: this.state.review

}

axios.post("/note/"+id, {notey}).then(articles => {


})
};

 componentDidMount() {
    
    this.getArticles();
  }


  render() {

        console.log(this.state.results)
        console.log(this.state.articles)

    return (
  
  <div>
    <div class="row">
    <div class="col s12">
      <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">The MERN Movie Scrubber</a>
    </div>
  </nav>
  </div>
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
  <ResultsCard
  results={this.state.results}
  save={this.saveMovie}
    />
   </div>

   <div class="row toprow z-depth-5">
      <div className="col s12 center">
        <h4>Saved Movies</h4>
        <hr/>
        </div>
{this.state.articles.map(articles => (
          <ItemCard
            title={articles.title}
            year={articles.year}
            genre={articles.genre}
            plot={articles.plot}
            poster={articles.poster}
            actors={articles.actors}
            rated={articles.rated}
            rating={articles.rating}
            awards={articles.year}
            director={articles.director}
            id={articles._id}
            review={articles.note.body}
            input={this.inputChange}
            save={this.saveNote}
            />
          ))}
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