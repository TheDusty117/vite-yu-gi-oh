
<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';

import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Main,
  }
}

</script>



<template>

  <Header/>

  <Main/>

  <!--footer-->

</template>



<style lang="scss">
@use './style/general.scss' as *;

body{
  background-color: rgb(73, 73, 73);
  background-image: url(/images/bg-egypt.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}


</style>