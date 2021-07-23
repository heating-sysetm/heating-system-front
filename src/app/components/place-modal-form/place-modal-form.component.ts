import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-modal-form',
  templateUrl: './place-modal-form.component.html',
  styleUrls: ['./place-modal-form.component.scss']
})
export class PlaceModalFormComponent implements OnInit {
  public placeForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public ipErr = 0;
  public nameErr = 0;
  public portErr = 0;
  constructor(private _formBuilder: FormBuilder) { 
    this.placeForm = this._formBuilder.group({
      placeName: ['', [Validators.required]],
      ipNumber: ['', Validators.required],
      port: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
