<template>
  <div class="bigcontainer" id="my_container">
    <Header />
    <spinner v-show="loading" />
    <img v-if="zeroMovies" class="zero_movies" src="../assets/0moviesfound.png" alt="Sorry, 0 movies found." />
    <movieList v-if="!zeroMovies" :movies="movies"></movieList>
    <advanced_search v-show="searching" @cerrarASearching="closeSearching" @advanced="advancedSearch"/>
    <div class="search_plus_button alltransition" @click="playAdvanceSearching" id="searchPlusBtn" title="Search Advance Button">
      <span class="search_icon">
        <font-awesome-icon icon="search-plus" />
      </span>
     </div>
    <div class="search_button alltransition" id="searchBtn" title="Search Button">
      <span class="search_icon">
        <font-awesome-icon icon="search" />
      </span>
      <input
        v-model="temp_search"
        v-on:keyup.enter="mySearch"
        id="input_search"
        class="input_search alltransition"
        type="search"
        placeholder="Quick search"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import advanced_search from "@/components/advanced_search.vue";
import movieList from "@/components/movie_list.vue";
import spinner from "@/components/spinner.vue";
//  import getMovies from '@/api/getmovies.js'
import getMoviesby_query_term from "@/api/getmoviesby_query_term.js";
import getMoviesby_advanced_search from "@/api/getmoviesby_advanced_search.js";

export default {
  name: "home",
  components: {
    Header,
    spinner: spinner,
    movieList,
    advanced_search,
  },
  data() {
    return {
      movies: [],
      loading: true,
      my_data: "",
      temp_search: "",
      searching: false,
      zeroMovies : false,
    };
  },
  computed: {},
  methods: {
    playAdvanceSearching(){
      this.searching = ! this.searching;
    },
    closeSearching(flag) {
      if(! flag){
        this.searching = false;
      }
    },
    mySearch() {
      this.my_data = this.temp_search;
      this.temp_search = "";
      var self = this;
      self.refresh_movies();
    },
    advancedSearch(busqueda) {
      this.my_data = busqueda;
      var self = this;
      self.advanced_refresh_movies();
    },
    // refresh_movies(p){
    refresh_movies() {
      //console.log(this.my_data + "del refresh movies");
      const self = this;
      this.zeroMovies= false;
      this.loading = true;
      this.movies = [];
      getMoviesby_query_term(this.my_data).then(function(movies) {
        self.loading = false;
        if(movies.movie_count == 0){
          console.log('Zero del home: ',movies.movie_count);
          self.zeroMovies= true;
          }else{
            console.log('Total movies found: ',movies.movie_count);
            self.movies = movies.movies;
          }
      });
    },
    advanced_refresh_movies() {
      //console.log(this.my_data + " del advanced refresh movies");
      const self = this;
      this.zeroMovies= false;
      this.loading = true;
      this.movies = [];
      getMoviesby_advanced_search(this.my_data).then(function(movies) {
        self.loading = false;
        if(movies.movie_count == 0){
          console.log('Zero del home: ',movies.movie_count);
          self.zeroMovies= true;
          }else{
            console.log('Total movies found: ',movies.movie_count);
            self.movies = movies.movies;
          }

      });
    }
  },
  mounted() {
    var self = this;
    self.refresh_movies(); //permite inicializar con los datos por defecto
  }
};
</script>
<style>
body {
  margin: 0px 10px 0px 10px;
  background: rgb(60, 120, 60);
}
.bigcontainer {
  /* background: white; */
  display: grid;
  grid-template-columns: minmax(280px, 1fr);
  grid-template-rows: 60px 1fr;
  /* grid-template-rows: 60px 1fr 1fr; */
  grid-template-areas:
    "header"
    /* "bar" */
    "content";
  height: 100vh;
  margin: 0;
  grid-gap: 10px;
}
.input_search {
  border-style: none;
  border: none;
    height: 30px;
  font-size: 20px;
  margin-left: 5px;
  border-radius: 15px;
}

.search_icon {
  color: rgb(60, 120, 60);
  margin-left: 1px;
  margin-right: 5px;
}
.alltransition {
  -webkit-transition: all 2s;
  -moz-transition: all 2s;
  -o-transition: all 2s;
  transition: all 2s;
}
.search_button {
  display: flex; /* Hidden by default */
  flex-direction: row;
  align-content: flex-end;
  align-items: center;
  border: 2px rgb(60, 120, 60) solid;
  box-shadow: 0 0 10px rgb(255, 255, 255);

  position: fixed; /* Fixed/sticky position */
  bottom: 80px; /* Place the button at the bottom of the page */
  right: 25px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  background-color: white; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 4px 6px 4px 6px; /* Some padding */
  border-radius: 45px; /* Rounded corners */
  font-size: 30px; /* Increase font size */
  height: 33px;
  width: 30px;
  overflow: hidden;
}
.search_button:hover,
search_button:active {
  width: 250px;
}
.search_button input:focus {
  outline: none;
}
.search_plus_button {
  display: flex; /* Hidden by default */
  flex-direction: row;
  align-content: flex-end;
  align-items: center;
  border: 2px rgb(60, 120, 60) solid;
  box-shadow: 0 0 10px rgb(255, 255, 255);
  position: fixed; /* Fixed/sticky position */
  bottom: 140px; /* Place the button at the bottom of the page */
  right: 25px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  background-color: white; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 4px 6px 4px 6px; /* Some padding */
  border-radius: 45px; /* Rounded corners */
  font-size: 30px; /* Increase font size */
  height: 33px;
  width: 30px;
  overflow: hidden;
}
.zero_movies {
  height: 400px;
  border-radius: 10px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .input_search {
    height: 20px;
    font-size: 17px;
  }
}
</style>