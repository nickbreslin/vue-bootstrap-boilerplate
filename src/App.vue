<template>
  <Header />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer
  }
};
</script>

<style></style>
