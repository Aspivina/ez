const url_movies = 'https://yts.am/api/v2/list_movies.json';
// const url_movies = 'https://yts.am/api/v2/list_movies.json?query_term=baby';
// const url_movies = 'https://yts.am/api/v2/list_movies.json?genre=family&limit=20&quality=3D&sort_by=year&minimum_rating=7';

export default function getMovies(){
   var proxyUrl = 'https://29a04861.us-south.apigw.appdomain.cloud/ez/bridge/';

fetch(proxyUrl + url_movies)
   return fetch(proxyUrl+url_movies)
      .then(res => res.json())
      .then(json => json.data.movies)
}
