import Vue from 'vue';

import router from './router';
import {HelloComponent} from './components/hello';

Vue.config.productionTip = false;

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'hello': HelloComponent,
  }
});
