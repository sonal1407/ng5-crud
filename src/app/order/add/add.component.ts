/**
 * @author Sonal Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  e: FormGroup;
  constructor(private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.e = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      joiningDate: ['', [Validators.required]]
    });

  }


  /**
   *  add the data of the employee into the the db.
   */
  public onSubmit(data) {
    console.log('on submit click', data);

  }

}
