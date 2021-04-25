import { createApp } from 'vue';
import { Quasar } from 'quasar';
import VueGtag from 'vue-gtag-next';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import quasarUserOptions from './quasar-user-options';

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'G-J7M1ZGEG4Q',
    },
  })
  .mount('#app');
