
import { Component, Inject, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatError } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lebensmittel } from '../../../../model/lebensmittel.model';



@Component({
    selector: 'app-lebensmittel-modal',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatError,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './lebensmittel-modal.component.html',
    styleUrl: './lebensmittel-modal.component.scss',
    standalone: true
})

export class LebensmittelModalComponent implements OnInit {

  lebensmittelForm: FormGroup = new FormGroup({});


  constructor(@Inject(MAT_DIALOG_DATA) public data: {lebensmittel: Lebensmittel},@Inject(FormBuilder) private fb: FormBuilder) {}



  ngOnInit(): void {

    this.lebensmittelForm = this.fb.group({

      name: [this.data.lebensmittel.name, Validators.required],

      kalorien: [this.data.lebensmittel.kalorien, Validators.required],

      vitamine: [this.data.lebensmittel.vitamine, Validators.required],

      gewicht: [this.data.lebensmittel.gewicht, Validators.required]

    });

  }



  getErrorMessage(controlName: string): string {

    const control = this.lebensmittelForm?.get(controlName);

    if (control && control.hasError('required')) {

      return 'Dieses Feld ist erforderlich';

    }

    return '';

  }



  onSubmit(): void {

    if (this.lebensmittelForm?.valid) {

      

    }

  }



  onCancel(): void {

   
  }}