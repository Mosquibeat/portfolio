import {Component} from 'angular2/core';

@Component({
  selector: 'list',
  template: require('app/components/list/list.html'),
  styles: [require('./list.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class List {

	projects = PROJECTS;
}

var PROJECTS = [
	{"id" : 1, "name" : "Portfolio Project"},
	{"id" : 2, "name" : "Lorem"},
	{"id" : 3, "name" : "Ipsum"},
	{"id" : 4, "name" : "Dolor"},
	{"id" : 5, "name" : "Si Amet"},
	{"id" : 6, "name" : "Tebaibi"}
]