import {Component} from 'angular2/core';
import {Http} from 'angular2/http';


@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styles: [require('./about.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
