import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.css']
})
export class FormArraysComponent implements OnInit {

  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  favFruitsError: Boolean = true;
  selectedFruitValues = [];

  nestedForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, Validators.required],
      favFruits: this.addFruitsControls(),
      address: this._fb.array([this.addAddressGroup()])
    });
  }

  addFruitsControls() {
    const arr = this.fruits.map(item => {
      return this._fb.control(false);
    });

    return this._fb.array(arr);
  }

  addAddressGroup() {
    return this._fb.group({
      primaryFlg: [],
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
    
  }

  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.nestedForm.get('address');
  }

  get fruitsArray() {
    return <FormArray>this.nestedForm.get('favFruits');
  }

  get firstName() {
    return this.nestedForm.get('firstName');
  }

  get lastName() {
    return this.nestedForm.get('lastName');
  }

  checkFruitControlsTouched() {
    let flg = false;
    this.fruitsArray.controls.forEach(control => {
      if (control.touched) {
        flg = true;
      }
    });

    return flg;
  }

  getSelectedFruitsValue() {
    this.selectedFruitValues = [];
    this.fruitsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFruitValues.push(this.fruits[i]);
      }
    });

    this.favFruitsError =  this.selectedFruitValues.length > 0 ? false : true;
  }

  submitHandler() {
    const newItem = this.selectedFruitValues;
    if (this.nestedForm.valid && this.favFruitsError) {
      console.log({...this.nestedForm.value, newItem});
    }

  }
}
