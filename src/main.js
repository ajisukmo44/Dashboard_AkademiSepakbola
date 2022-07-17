import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from './router'
import store from './store'
import LitepieDatepicker from 'litepie-datepicker';
import 'flowbite';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './index.css'


const app = createApp(App)

app.use(VueSweetalert2);
app.use(store);
app.use(router);
app.use(LitepieDatepicker);

app.mount('#app')

// module.exports = {
//     // ...
//     build: {
//       assetsPublicPath: '/',
//       assetsSubDirectory: 'static'
//     }
//   }