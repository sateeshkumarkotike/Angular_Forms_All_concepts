import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('userForm',{static:true}) userForm:NgForm
  
  public States = [
    { stateName:"India"},
    { stateName:"China"},
    { stateName:"Japan"},
    { stateName:"America"},
    { stateName:"Russia"}
  ]


  constructor() { }

  ngOnInit() {
  }

  formData(){
    this.userForm.reset();
  }

}
