import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  template: require('./hello.component.html')
})
export class HelloComponent extends Vue {
  mode: string = process.env.ENV;
}
