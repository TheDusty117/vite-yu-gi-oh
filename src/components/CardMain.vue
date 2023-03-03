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

  <li>
    <img :src="card.card_images[0].image_url" alt="">
    <h2>{{ card.name }}</h2>
    <h3>{{ card.archetype }}</h3>
  </li>

</template>




<style lang="scss" scoped>

li {
  width: 100px;

  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 14px;
  }

  img {
    width: 150px;
  }
}

</style>