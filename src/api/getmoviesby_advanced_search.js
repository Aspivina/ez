const url_movies = 'https://yts.am/api/v2/list_movies.json?:TERM';

export default async function getMovies(term){
  const url = url_movies.replace(':TERM',term);
  //console.log("advance search: ",term);
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const res = await fetch(proxyUrl + url);
  const json = await res.json();
  return json.data;
  // return json.data.movies;
}