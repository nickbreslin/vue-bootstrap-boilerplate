<template>
  <div class="home">
    <h1>Title</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <button class="btn btn-primary fw3">Button</button><br />
          <button class="btn btn-primary fw4">Button</button><br />
          <button class="btn btn-primary fw6">Button</button><br />
          <button class="btn btn-primary fw7">Button</button>
        </div>
        <code><button class="btn btn-primary fw3">Button</button></code>
        <samp><button class="btn btn-primary fw3">Button</button></samp>
        <p>
          Einstein's best known equation goes like this: <var>E</var> =
          <var>mc</var><sup>2</sup>
        </p>
        <pre><code><button class="btn btn-primary fw3">Button</button></code></pre>
        <p>You should try <kbd>ctrl + O</kbd> to convey this.</p>
      </div>
      <div class="row">
        <div class="col">
          <div class="alert alert-info">
            <div class="fw-bold">Alert</div>
            <div class="fw-light">Alert</div>
            Alert
          </div>
          <div class="alert alert-info text-dark">Alert</div>
          <div class="alert alert-warning">Alert</div>
          <div class="alert alert-warning text-dark">Alert</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //    HelloWorld
  }
};
</script>
