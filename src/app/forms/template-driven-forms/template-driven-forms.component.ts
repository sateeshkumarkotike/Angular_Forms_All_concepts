import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  constructor() { }

  ngOnInit() {
  }

}
