import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  newsForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.newsForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        submit: ['Cadastrar']
      }
    );

    this.newsForm.controls['submit'].disable({emitEvent: false});
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges() {
    this.newsForm.valueChanges.subscribe(val => {
      this.newsForm.invalid ? this.newsForm.controls['submit'].disable({emitEvent: false}) : this.newsForm.controls['submit'].enable({emitEvent: false});
    });
  }

}
