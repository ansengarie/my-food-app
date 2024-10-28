import "./assets/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import core library dan komponen
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import ikon yang ingin digunakan
import {
    faBars,
    faHouse,
    faPizzaSlice,
    faCalendarDay,
    faCreditCard,
    faHeart,
    faMagnifyingGlass,
    faSliders,
    faArrowRight,
    faDice,
    faCookie,
    faBurger,
    faBowlRice,
    faDrumstickBite,
    faChevronRight,
    faChevronDown,
    faStar,
    faDollarSign,
    faUser,
    faLocationDot,
    faXmark,
    faMinus,
    faPlus,
    faSpinner,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// Tambahkan ikon ke library
library.add(
    faBars,
    faHouse,
    faPizzaSlice,
    faCalendarDay,
    faCreditCard,
    faHeart,
    faMagnifyingGlass,
    faSliders,
    faArrowRight,
    faDice,
    faCookie,
    faBurger,
    faBowlRice,
    faDrumstickBite,
    faChevronRight,
    faChevronDown,
    faStar,
    faDollarSign,
    faUser,
    faLocationDot,
    faXmark,
    faMinus,
    faPlus,
    faSpinner,
    faChevronUp
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount("#app");
