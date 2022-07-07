import { group } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  porfileForm: FormGroup;

  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;

  constructor(private fb: FormBuilder) {
    this.porfileForm = this.fb.group({
      person: this.fb.group({
        First_name: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10),
          ],
        ],
        Last_name: '',
      }),
      user: this.fb.group({
        Email: '',
        Password: '',
      }),
      address: this.fb.group({
        Address: '',
        Address_2: '',
        City: '',
        State: '',
        Zip: '',
      }),
      Check_me_out: '',
    });
  }

  ngOnInit(): void {}

  get First_name() {
    return this.porfileForm.get('First_name');
  }

  onSubmit(): void {
    console.log(this.porfileForm);
  }
}


