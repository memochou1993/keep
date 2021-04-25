import { createApp } from 'vue';
import { Quasar } from 'quasar';
import VueGtag from 'vue-gtag-next';
import { createGtm } from 'vue-gtm';
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
  .use(createGtm({
    id: 'GTM-KDD2FBM',
    debug: true,
    vueRouter: router,
    trackOnNextTick: false,
  }))
  .mount('#app');
