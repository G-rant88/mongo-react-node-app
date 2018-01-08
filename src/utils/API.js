import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?";
const APIKEY = "apikey=367da9d9";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(title, year) {
    return axios.get(BASEURL + APIKEY + "&t=" + title + "&y=" + year);
  }
};
