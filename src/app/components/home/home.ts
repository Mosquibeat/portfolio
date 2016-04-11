import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('app/components/home/home.html'),
  styles: [require('./home.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

}
