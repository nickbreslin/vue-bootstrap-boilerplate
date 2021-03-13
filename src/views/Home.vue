<template>
  <h1>Welcome</h1>
  <i class="bi-alarm"></i>

  <div class="container">
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  }
};
</script>
