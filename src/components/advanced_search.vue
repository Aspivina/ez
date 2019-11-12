<template>
  <div id="my_advanced_search_modal" class="modal_popup">
    <div class="popup">
      <div class="titlePopup">
        <p>Advanced Search</p>
      </div>
      <div class="points">
        <div class="mySearchBox">
          <div class="mySearch">
            <div class="quality_p">
              <font-awesome-icon style="padding-right: 10px;" icon="search" />
              <p>Search term</p>
            </div>
            <input v-model="term_search" class="my_search" type="search" placeholder />
          </div>
        </div>
        <div class="quality_pair">
          <div class="quality">
            <div class="quality_p">
              <font-awesome-icon style="padding-right: 10px;" icon="cloud-download-alt" />
              <p>Quality</p>
            </div>
            <select class="quality_s" v-model="details[0].valor">
              <option value="all">All</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
              <option value="3D">3D</option>
            </select>
          </div>
          <div class="quality">
            <div class="quality_p">
              <font-awesome-icon style="padding-right: 10px;" icon="database" />
              <p>Genre</p>
            </div>
            <select class="quality_s" v-model="details[1].valor">
              <option value="all">All</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="documentary">Documentary</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="film-noir">Film-Noir</option>
              <option value="game-show">Game-Show</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="musical">Musical</option>
              <option value="mystery">Mystery</option>
              <option value="news">News</option>
              <option value="reality-tv">Reality-TV</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="sport">Sport</option>
              <option value="talk-show">Talk-Show</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>
            </select>
          </div>
        </div>
        <div class="quality_pair">
          <div class="quality">
            <div class="quality_p">
              <font-awesome-icon style="padding-right: 10px;" icon="star" />
              <p>Rating</p>
            </div>
            <select class="quality_s" v-model="details[2].valor">
              <option value="0">All</option>
              <option value="9">9+</option>
              <option value="8">8+</option>
              <option value="7">7+</option>
              <option value="6">6+</option>
              <option value="5">5+</option>
              <option value="4">4+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
              <option value="1">1+</option>
            </select>
          </div>
          <div class="quality">
            <div class="quality_p">
              <font-awesome-icon style="padding-right: 10px;" icon="sort-amount-down" />
              <p>Order By</p>
            </div>
            <select class="quality_s" v-model="details[3].valor">
              <option value="date_added">Latest</option>
              <option value="year">Year</option>
              <option value="oldest">Oldest</option>
              <!-- <option value="seeds">Seeds</option>
              <option value="peers">Peers</option>-->
              <option value="rating">Rating</option>
              <option value="like_count">Likes</option>
              <option value="title">Alphabetical</option>
              <option value="download_count">Downloads</option>
            </select>
          </div>
        </div>
        <div class="opciones">
          <button class="buscarAvanzado" @click="buscar">
            <font-awesome-icon style="padding-right: 5px;" icon="search" />Search
          </button>
          <button class="closeModal" @click="closePopup">
            <font-awesome-icon style="padding-right: 5px;" icon="times-circle" />Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "advanced_search",
  props: [],
  data() {
    return {
      // v_quality : "all",   // it must be the first option of the list
      // v_genre : "all", // it must be the first option of the list
      // v_rating : "0", // it must be the first option of the list
      // v_order : "date_added", // it must be the first option of the list
      // details : [v_quality,v_genre,v_rating,v_order],
      details: [
        { filtro: "quality", valor: "all" },
        { filtro: "genre", valor: "all" },
        { filtro: "rating", valor: "0" },
        { filtro: "order", valor: "date_added" }
      ],
      term_search: ""
    };
  },
  methods: {
    closePopup() {
      var modal = document.getElementById("my_advanced_search_modal");
      modal.style.display = "none"; //cierra modal
      this.$emit("cerrarASearching", false);
    },
    buscar() {
      let my_detail = "limit=20&minimum_rating=8";
      let my_build_detail = "";
      if (!this.temp_search) {
        console.log("temp_search -> ", this.temp_search);
        my_build_detail += "query_term=" + this.term_search + "&";
      }
      if (this.details[0].valor != "all") {
        my_build_detail += "quality=" + this.details[0].valor + "&";
      }
      // console.log(my_build_detail);
      if (this.details[1].valor != "all") {
        my_build_detail += "genre=" + this.details[1].valor + "&";
      }
      // console.log(my_build_detail);
      if (this.details[2].valor != "0") {
        my_build_detail += "minimum_rating=" + this.details[2].valor + "&";
      }
      // console.log(my_build_detail);
      if (this.details[3].valor != "date_added") {
        // if(this.details[3].valor == "oldest"){
        //    // my_build_detail+="sort="+this.details[3].valor+"&";
        //    my_build_detail+="sort="+"oldest"+"&";
        // }else{
        my_build_detail += "sort_by=" + this.details[3].valor;
        // }
      }
      if (my_build_detail.length > 0) {
        if (my_build_detail[my_build_detail.length - 1] == "&") {
          my_build_detail = my_build_detail.slice(0, -1);
        }
      }
      console.log(my_build_detail);
      // this.$emit('advanced', my_detail);
      this.$emit("advanced", my_build_detail);
      this.details = [
        { filtro: "quality", valor: "all" },
        { filtro: "genre", valor: "all" },
        { filtro: "rating", valor: "0" },
        { filtro: "order", valor: "date_added" }
      ];
      this.term_search = "";
      var self = this;
      self.closePopup();
    }
  },
  computed: {}
};
</script>
<style scoped>
.modal_popup {
  display: block;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 999;
}
.popup {
  color: rgb(60, 120, 60);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  overflow: hidden;
  margin: 0 auto;
  width: 500px;
  height: 360px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(255, 255, 255);
  border: 2px rgb(60, 120, 60) solid;
  align-items: center;
}
.titlePopup p {
  font-weight: bold;
  font-size: 20px;
}
.points {
  grid-area: points;
  display: grid;
  grid-template-rows: repeat(4, 70px);
  justify-content: center;
  justify-items: center;
  align-content: stretch;
  height: 360px;
  width: 400px;
}
.mySearchBox {
  display: flex;
}
.mySearch {
  height: 22px;
  width: 400px;
  display: grid;
  grid-template-rows: 22px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "quality_p"
    "my_search";
  font-size: 16px;
  grid-gap: 5px;
}
.my_search {
  grid-area: my_search;
  border-radius: 5px;
  height: 22px;
  border-width: 1px;
  padding-left: 3px;
  width: 400px;
}
.my_search:focus {
  outline: none;
}
.quality_pair {
  display: flex;
}
.quality {
  margin: 0 20px;
  width: 180px;
  height: 65px;
  display: grid;
  grid-template-rows: 22px 1fr;
  grid-template-areas:
    "quality_p"
    "quality_s";
  align-content: stretch;
  font-size: 16px;
  grid-gap: 5px;
}
.quality_p {
  grid-area: quality_p;
  display: flex;
  /* grid-template-columns: 22px 1fr; */
  height: 22px;
  justify-content: start;
  justify-items: left;
  align-items: center;
  grid-gap: 3px;
}
.quality_s {
  grid-area: quality_s;
  border-radius: 5px;
  height: 23px;
}
.opciones {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: baseline;
}
.closeModal {
  margin: 0 20px;
  align-self: center;
  background-color: rgb(228, 221, 216);
  color: rgb(120, 67, 60);
  cursor: pointer;
  border-radius: 3px;
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  font-size: 18px;
  width: 180px;
  height: 50px;
}
.buscarAvanzado {
  margin: 0 20px;
  align-self: center;
  background-color: rgb(216, 228, 216);
  color: rgb(60, 120, 60);
  cursor: pointer;
  border-radius: 3px;
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  font-size: 18px;
  width: 180px;
  height: 50px;
}
@media screen and (max-width: 768px) {
  .popup {
    margin: auto;
    width: 287px;
    height: 350px;
  }
  .titlePopup p {
    font-size: 16px;
  }
  .points {
    grid-area: points;
    display: grid;
    grid-template-rows: repeat(4, 70px);
    align-content: center;
    height: 340px;
    width: 287px;
  }
  .mySearch {
    width: 258px;
  }
  .my_search {
    width: 258px;
  }
  .closeModal,
  .buscarAvanzado {
    margin: 0 15px;
    font-size: 16px;
    width: 110px;
  }
  .quality {
    width: 110px;
    margin: 0 15px;
    grid-template-rows: 20px 1fr;
    font-size: 14px;
    grid-gap: 4px;
  }
}
</style>


