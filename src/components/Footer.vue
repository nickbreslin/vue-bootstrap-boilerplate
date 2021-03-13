<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-end">
        <a href="#">Link 1</a>
        <a class="ms-3" href="#">Link 2</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 0.8em;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
