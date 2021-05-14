<template>
<div class="home">
      <Card />
</div>

</template>

<script>
import Card from '../../components/card/index'

export default {
    components: {
      Card
    }
};
</script>

<style>
    .home {
       height: 100vh;
      background-image: url(../../assets/home.jpg);
      background-size: cover;

    }

</style>
