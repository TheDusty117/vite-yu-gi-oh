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
  width: 150px;
  height: 280px;
  background-color: #B45322;
  margin-bottom: 20px;
  text-align: center;

  h2 {
    font-size: 14px;
    margin: 0px;
    font-weight: 700;
  }

  h3 {
    font-size: 14px;
    margin: 0px;
  }

  img {
    width: 150px;
  }
}

</style>