import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lebensmittel } from '../model/lebensmittel.model';
import { Konstanten } from '../konstanten';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  
  anzahlLebensmittel = 0;
  anzahlRezepte = 0;
 
  
  constructor(private httpClient:HttpClient){
   
  }
  getAllLebensmittel(){
    this.httpClient.get<Lebensmittel[]>(Konstanten.restApiEndpoint+"/api/lebensmittel").subscribe({
      next: (response) => {
        this.anzahlLebensmittel = response.length;
      },
      error: (error) => {
        console.error('Error fetching Lebensmittel:', error);
      }
    }
    );
  }
  ngOnInit(){
    this.getAllLebensmittel()
  }

}
