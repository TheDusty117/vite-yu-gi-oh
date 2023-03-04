<script>
export default{
  //passiamo ai props tutto l'OGGETTO INTERO
  props:{
    card: {
      type: Object,
      required: true
    }
  }

}

</script>


<template>

  <li class="">
    <img :src="card.card_images[0].image_url" alt="">
    <h2>{{ card.name }}</h2>
    <h3>{{ card.archetype }}</h3>
  </li>

</template>




<style lang="scss" scoped>

li {
  width: 130px;
  background-color: wheat;
  margin-bottom: 20px;

  h2 {
    font-size: 16px;
    margin: 0px;
  }

  h3 {
    font-size: 14px;
    margin: 0px;
  }

  img {
    width: 130px;
  }
}

</style>