import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {List} from './components/list/list';
import {About} from './components/about/about';

@Component({
  selector: 'app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',           component: Home,        name: 'Home', useAsDefault: true },
  { path: '/list',       component: List,        name: 'List' },
  { path: '/about',      component: About,       name: 'About' },
])
export class App {

  constructor() {}

}
