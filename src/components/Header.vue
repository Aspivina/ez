<template>
  <div class="header">
    <div class="logo">
      <img class="web-logo" src="../assets/atorrent.png" alt="torrent logo" />
      <div class="web-title" @click="refresh()"><h1  >Aspi-Movies</h1>
      </div>
      <a class="owner" href="https://aspivinacv.firebaseapp.com/" target="_blank">
        <img class="owner-logo" src="../assets/myfaceingray.png" alt="owner face" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    refresh(){
      let temp = window.location.href;
      //console.log(temp);
      location.reload();
    },
  },
};
</script>
<style scoped>
.header {
  grid-area: header;
  display: flex;
  background: rgb(216, 228, 216);
  display: grid;
  justify-items: stretch;
  align-items: center;
  border-radius: 5px;
}
.web-logo {
  width: 45px;
  margin: 0 30px;
}
.logo {
  display: flex;
  height: 60px;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.web-title {
  display: flex;
  margin: 0;
  justify-self: left;
  color: white;
  -webkit-text-stroke: 2px rgb(60, 120, 60);
  font-size: 20px;
  cursor: pointer;
}
.owner {
  grid-area: owner;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(60, 120, 60);
  font-size: 20px;
}
.owner-logo {
  width: 45px;
  margin: 0 30px;
  border-radius: 50%;
  border-style: none;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .web-logo,
  .owner-logo {
    width: 40px;
    margin: 0 10px;
  }
  .web-title {
    font-size: 16px;
  }
}
</style>
