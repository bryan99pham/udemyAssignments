import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusCodes=['stable','critical','finished']
  basicForm: FormGroup;

  ngOnInit() {
    this.basicForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, CustomValidators.invalidName], CustomValidators.asyncInvalidName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    })
  }

  onSubmit() {
    console.log(this.basicForm);
  }

}
