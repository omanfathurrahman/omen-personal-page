<template>
  <div class="h-screen bg-[#F1F5E8]">
    <MyHeader class=""/>
    <MyContainer1/>
  </div>
  <MyContainer2/>
  <MyContainer3 :colors="colors"/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyContainer1 from './components/Container1.vue'
import MyContainer2 from './components/Container2.vue'
import MyContainer3 from './components/Container3.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyContainer1,
    MyContainer2,
    MyContainer3,
  },
  data() {
    return {
      colors: [
        "#FFEFEB",
        "#F1F5E8",
        "#FAF2E9",
        "#EEF9F8",
      ]
    }
  }
}
</script>

<style>

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
