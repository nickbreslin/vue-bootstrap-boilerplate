<template>
  <div class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-brand d-flex">
        <img
          src="#"
          alt=""
          width="30"
          height="24"
          class="d-inline-flex align-top"
        />
        <div class="title mx-3">Title</div>
        <div class="subtitle">Subtitle</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    logo: String,
    title: String,
    subtitle: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
