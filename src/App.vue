<template>
  <div id="app">
    <v-navigation-drawer id="navdrawer" app v-model="drawer">

      <v-switch
        label="Switch Streamline layer"
        v-model="streamlineSwitch"
      >
      </v-switch>
    </v-navigation-drawer>
    <v-toolbar xs6 color="grey lighten-4" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Pretty Viewer example</v-toolbar-title>
    </v-toolbar>
    <v-mapbox
      access-token="pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA"
      map-style="mapbox://styles/mapbox/dark-v9"
      :center="[5.086, 51.89]"
      :zoom="16"
      :pitch="0"
      :bearing="0"
      id="map"
      ref="map"
      >
    </v-mapbox>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      map: null,
      drawer: true,
      streamlineSwitch: true
    }
  },
  watch: {
    streamlineSwitch: {
      handler: function(streamlineSwitch){
        if (streamlineSwitch){
          this.map.setLayoutProperty('streamlines', 'visibility', 'visible');
        } else {
          this.map.setLayoutProperty('streamlines', 'visibility', 'none');
        }
      }
    }
  },
  mounted() {
    this.map = this.$refs.map.map
    this.map.on('load', () => {
      this.map.addLayer({
        id: "streamlines",
        "source-layer": "leerdamwest_map_streamlines-60ng7o",
        source: {
          type: "vector",
          url: "mapbox://camvdvries.aycl74i7"
        },
        type: "line",
        paint: {
          "line-color": "rgb(177, 147, 251)",
          "line-opacity": 0.56,
          "line-width": 2 }
      });
    })
  }
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

html, body {
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#map {
  width: 100%;
  height: 100%;
}
</style>
