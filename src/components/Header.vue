<template>

  <header>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h1>
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default{
  data(){
    return{
      title: 'YU-GI-OH!'
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.container{
  background-color: grey;
}

</style>