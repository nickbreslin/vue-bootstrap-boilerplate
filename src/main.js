import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/css/style.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
