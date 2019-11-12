<template >
  <div  class="content">
    <button v-show="my_boton" id="myBtn" @click="topFunction()" title="Go to top">
      <span class="go_top">
        <font-awesome-icon icon="angle-up" />
      </span>
    </button>
    <div class="movies" v-for="(movie) of movies" v-bind:key="movie.id">
      <div class="box8">
        <img class="movie-img" :src="movie.medium_cover_image" @error="replaceByDefault" :alt="movie.title" />
        <p class="title">{{ movie.title }}</p>
        <div class="box-content">
          <div class="icon">
            <a class="m_icon" :href="imdbHref(movie)" target="_blank">
              <font-awesome-icon icon="info" />
            </a>
            <a class="m_icon" :href="movie.torrents[0].url">
              <font-awesome-icon icon="magnet" />
            </a>
          </div>
          <div class="genre">
            <span v-for="(genre,ix) of movie.genres" v-bind:key="genre.id">
              {{genre}}
              <span v-if="ix < (movie.genres.length-1)" > - </span>
            </span>
          </div>
          <div class="language">{{movie.language}}</div>
          <div class="rating-year">
            {{movie.rating}}
            <font-awesome-icon icon="star" color="#3c783c" />
            - {{movie.year}}
          </div>
          <div class="synopsis">
            <p>{{movie.synopsis}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "movieList",
  props: ["movies"],
  data() {
    return {
      my_boton: false,
      imdbCode: "",
    };
  },

  methods: {
    replaceByDefault(e) {
      // e.target.src = "https://semantic-ui.com/images/wireframe/image.png";
       e.target.src = "https://i.imgur.com/H3IKEb6.png";
    },
    imdbHref(item) {
      return "https://www.imdb.com/title/"+ item.imdb_code+"/";
    },
   handleScroll () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         // console.log(this.my_boton);
         this.my_boton = true;
      } else {
         this.my_boton = false;
      }  
   },
   topFunction() {
      // console.log("hola");
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
  },
  mounted(){

  },
  computed: {
    fullImdbHref: function() {
      // console.log(this.slides[Math.abs(this.currentNumber) % this.slides.length].ruta);
      return this.movies.map(function(item) {
                return "https://www.imdb.com/title/"+this.item.imdb_code+"/";
            });
      
    },
     
  },
   created () {
   window.addEventListener('scroll', this.handleScroll);
   },
   destroyed () {
   window.removeEventListener('scroll', this.handleScroll);
   },

};
</script>

<style scoped>
.go_top{
  color: rgb(60, 120, 60);
}
#myBtn {
  display: block; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 25px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: 2px rgb(60, 120, 60) solid; /* Remove borders */
  box-shadow: 0 0 10px rgb(255, 255, 255);
  outline: none; /* Remove outline */
  background-color: white; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 4px 6px 4px 6px; /* Some padding */
  border-radius: 50%; /* Rounded corners */
  font-size: 30px; /* Increase font size */
  height: 45px;
  width: 45px;
}
#myBtn:hover {
  background-color: rgba(146, 147, 146, 0.7); /* Add a dark-grey background on hover */
}
.content {
  grid-area: content;
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
  grid-template-rows: 1fr;
  color: white;
  justify-items: center;
  align-items: start;
  background-color: rgb(216, 228, 216);
  border-radius: 5px;
}
.movies {
  margin: 20px 0 10px 0;
}
.movie {
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .content {
    padding-right:0;
    padding-left: 0;
  }
  .movies {
    /* grid-gap: 3px; */
    margin-top: 10px;
  }
}
.box8 {
  overflow: hidden;
  height: 400px;
  width: 266px;
  color: black;
  border-radius: 10px;
}
.box8 .icon,
.box8 .title {
  margin: 0;
  position: absolute;
}
.box8 {
  box-shadow: 0 0 10px rgb(255, 255, 255);
  position: relative;
}
.box8 img {
  height: 400px;
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.box8 .box-content {
  border-radius: 10px;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 50px 40px 30px 30px 1fr;
  grid-template-areas:
    "icon"
    "genre"
    "language"
    "rating-year"
    "synopsis";
  text-align: center;
  align-items: center;
  padding: 5px 15px 5px 15px;
  font-size: 18px;
  border: 2px solid rgb(60, 120, 60);
  width: 200px;
  height: 300px;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform:perspective(400px) rotateX(90deg); */
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center center 0;
  transition: all 0.5s ease 0s;
}
.box8 .icon a{
  font-size: 20px;
  color: #fff;
  justify-items: center;
  align-items: center;
}
.box8 .title {
  /* background: linear-gradient(transparent, rgb(60, 120, 60)); */
  background: linear-gradient(rgba(60, 120, 60,0) 10%, rgba(60, 120, 60,1) 80%);
  /* background: linear-gradient(rgba(60, 120, 60,0) , rgba(60, 120, 60,1)); */
  /* background: rgba(60, 120, 60, 0.7); */
  font-size: 20px;
  color: #fff;
  justify-items: center;
  align-items: center;
  padding-top: 30px;
}
.box8:hover .box-content {
  opacity: 1;
  /* transform:perspective(400px) rotateX(0); */
  transform: translate(-50%, -50%) scale(1);
}
.box8 .title {
  color: white;
  font-weight: 600;
  bottom: 0px;
  width: 100%;
  transition: all 0.9s ease 0s;
}
.box8 .icon a {
  transition: all 0.35s ease 0s;
}
/* .box8:hover .title{bottom:-40px} */
.box8 .icon {
  grid-area: icon;
  display: grid;
  top: 5px;
  right: 5px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: right;
  justify-self: right;
}
.box8 .icon a {
  background: rgba(60, 120, 60, 0.7);
  display: block;
  align-self: center;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
}
.box8 .data {
  grid-area: data;
  justify-self: center;
  color: black;
}
.box8 .rating-year {
  grid-area: rating-year;
  color: black;
}
.box8 .genre {
  font-size: 15px;
  grid-area: genre;
}
.box8 .language {
  grid-area: language;
  font-size: 16px;
  font-style: italic;
}
.box8 .synopsis {
  grid-area: synopsis;
  font-size: 15px;
  text-align: justify;
  align-items: top;
}
.box8 .icon a:hover {
  background: #fff;
  color: rgb(60, 120, 60);
}

</style>
