const url_movies = 'https://yts.am/api/v2/list_movies.json';
// const url_movies = 'https://yts.am/api/v2/list_movies.json?query_term=baby';
// const url_movies = 'https://yts.am/api/v2/list_movies.json?genre=family&limit=20&quality=3D&sort_by=year&minimum_rating=7';


//making some changes on purpose
export default function getMovies(){
   //const url = URL.replace(':country',country);

   var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
   //  targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'

fetch(proxyUrl + url_movies)
   return fetch(proxyUrl+url_movies)
      .then(res => res.json())
      .then(json => json.data.movies)
}
