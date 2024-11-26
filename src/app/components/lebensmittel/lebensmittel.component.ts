import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Konstanten } from '../../konstanten';
import { AuthService } from '../../auth-service.service';
import { Lebensmittel } from '../../model/lebensmittel.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { LebensmittelModalComponent } from './modal/lebensmittel-modal/lebensmittel-modal.component'; // Adjust the path as needed
import { E } from '@angular/cdk/keycodes';
@Component({
    selector: 'app-lebensmittel',
    imports: [CommonModule,
        MatTableModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatIcon,
        ReactiveFormsModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule],
    templateUrl: './lebensmittel.component.html',
    styleUrl: './lebensmittel.component.scss',
    providers: [AuthService],
    standalone: true
})
export class LebensmittelComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  editedLebensmittel: Lebensmittel = new Lebensmittel();
  lebensmittelliste: Array<Lebensmittel> = []
  displayedColumns = ["Name", "Kalorien", "Vitamine", "Gewicht", "Actions"]
  isExpansionDetailRow = (index: number, row: any) => row.hasOwnProperty('detailRow');
  searchControl = new FormControl();
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    
    this.getAllLebensmittel()
    console.log(this.lebensmittelliste)

    this.searchControl.valueChanges.subscribe(value => {
      if (value) {
        this.searchLebensmittel(value);
      } else {
        this.getAllLebensmittel();
      }
    });
  }

  getAllLebensmittel() {
    console.log(this.httpClient)
    this.httpClient.get<Lebensmittel[]>(Konstanten.restApiEndpoint + "/api/lebensmittel").subscribe(
      (response) => {
        this.lebensmittelliste = response.map(item => ({ ...item, detailRow: true }));

      },
      (error) => {
        console.error('Error fetching Lebensmittel:', error);
      }
    );
  }
  searchLebensmittel(name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });
    this.httpClient.post<Lebensmittel[]>(Konstanten.restApiEndpoint + "/api/lebensmittel/search", name, { headers }).subscribe(
      (response) => {
        this.lebensmittelliste = response.map(item => ({ ...item, detailRow: true }));
      },
      (error) => {
        console.error('Error searching Lebensmittel:', error);
      }
    );
  }
  sortLebensmittel(propertyToSortby: String) {
    {
      switch (propertyToSortby) {
        case "name":
          this.lebensmittelliste.sort((a, b) => (a.name > b.name) ? 1 : -1)
          break;
        case "kalorien":
          this.lebensmittelliste.sort((a, b) => (a.kalorien > b.kalorien) ? 1 : -1)
          break;
        case "vitamine":
          this.lebensmittelliste.sort((a, b) => (a.vitamine.length > b.vitamine.length) ? 1 : -1)
          break;
        default:
          break;
      }

    }
  }
  editLebensmittel(element: Lebensmittel) {
    this.dialog.open(LebensmittelModalComponent,{
      data: { lebensmittel: element },
    })
    
    console.log('Edit row:', element);
    console.log(this.isExpansionDetailRow)
    // Implement your edit logic here
  }
}


