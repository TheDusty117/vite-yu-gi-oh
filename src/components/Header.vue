<script>
export default {
  data() {
    return {
      title: 'YU-GI-OH!'
    }
  }
}

</script>

<template>

  <header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <img class="main-logo" src="/images/main-logo.svg" alt="">
        </div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.container{
  background-color: rgb(68, 68, 68);
  border-radius: 40px;
}

.main-logo{
  width: 400px;
}

</style>