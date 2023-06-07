import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import "./style.css";
// @ts-ignore
import App from "./App.vue";

createApp(App)
    .use(vuetify)
    .mount("#app");
