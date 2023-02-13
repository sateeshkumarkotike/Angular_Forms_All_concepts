import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  states = ["India","America","China"]

  public formData:FormGroup  ;

  constructor(private formBuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      UserName:[ ,[Validators.required,Validators.minLength(4)]],
      email:[,[Validators.required ,Validators.minLength(4)]],
      address1:[,[Validators.required,Validators.minLength(4)]],
      address2:[,[Validators.required,Validators.minLength(4)]],
      Address:this.formBuilder.group({
       state :[,Validators.required],
       city :[,[Validators.required,Validators.minLength(4)]],
       code:[,[Validators.required,Validators.minLength(4)]],
      })
    })
    console.log(this.formData)
  }

  get Email() {
    return this.formData.get("email");
  }

  get Address1() {
    return this.formData.get("address1");
  }

  get Address2() {
    return this.formData.get("address2");
  }

  get State() {
    const temp = <FormGroup>this.formData.controls.Address;
    return temp.controls.state;
    //or
    // return this.formData.get("Address.state");
  }

  get City() {
    const temp = <FormGroup>this.formData.controls.Address;
    return temp.controls.city;
    // return this.formData.get("Address.city");
  }

  get Code() {
    return this.formData.get("Address.code");
  }

  formSubmited(){
    this.formData.reset();
  }

}
