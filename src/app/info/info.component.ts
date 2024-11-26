import { Component, inject, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Lebensmittel } from '../model/lebensmittel.model';
import { Konstanten } from '../konstanten';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-info',
    imports: [CommonModule,MatCardModule], 
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    standalone: true
})

export class InfoComponent implements OnInit {
  
  anzahlLebensmittel = 0;
  anzahlRezepte = 0;
  private httpClient: HttpClient = inject(HttpClient);
  constructor( ) {}
  
  getAllLebensmittel() {
    this.httpClient.get<Lebensmittel[]>(Konstanten.restApiEndpoint + "/api/lebensmittel").subscribe({
      next: (response) => {
        this.anzahlLebensmittel = response.length;
      },
      error: (error) => {
        console.error('Error fetching Lebensmittel:', error);
      }
    });
  }

  ngOnInit() {
    this.getAllLebensmittel();
  }
}