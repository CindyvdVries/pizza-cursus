<template>
  <div id="app">
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
      map: null
    }
  },
  mounted() {
    this.map = this.$refs.map.map
    this.map.on('load', () => {
      this.map.addLayer({
        id: "streamlines",
        "source-layer": "leerdamwest_map_waterdepth_00-al26zk",
        source: {
          type: "raster",
          url: "mapbox://siggyf.a1v32u6m"
        },
        type: "raster"
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
  margin: 0;
  padding: 0;
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
