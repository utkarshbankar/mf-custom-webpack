import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private fb: FormBuilder) {}
  
  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
}
