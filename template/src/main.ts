import Vue from 'vue';
import VueMaterial from 'vue-material';

import router from './router';
import {HelloComponent} from './components/hello';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'hello': HelloComponent,
  }
});
