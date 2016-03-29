import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';

@Component({
  selector: 'app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.html',
  styles: [require('assets/scss/style.scss')]
})
@RouteConfig([
  { path: '/',           component: Home,        name: 'Home', useAsDefault: true },
  { path: '/about',      component: About,       name: 'About' },
])
export class App {

  constructor() {}

}
