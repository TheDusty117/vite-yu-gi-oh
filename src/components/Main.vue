<script>
export default {
  data() {
    return {
      cards:[]
    }
  },
  methods: {
    fetchCards() {
      console.log('fetching data')
    }
  },
  created(){
    this.fetchCards()
  },
}
</script>


<template>
  <main>
    <div class="container">
      <div class="row">

      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>

.container{
  background-color: teal;
  padding: 100px 0px;
}

</style>