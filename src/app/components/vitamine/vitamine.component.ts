import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Vitamine } from '../../model/vitamine';
import { Konstanten } from '../../konstanten';

@Component({
    selector: 'app-vitamine',
    imports: [],
    templateUrl: './vitamine.component.html',
    styleUrl: './vitamine.component.scss',
    standalone: true
})
export class VitamineComponent {
    searchControl!: string;
    vitaminliste: Vitamine[] = [];
    constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
    ngOnInit(): void {
        this.getAllVitamine()
        // this.searchControl.valueChanges.subscribe((value: string) => {
        //   if (value) {
        //     this.searchLebensmittel(value);
        //   } else {
        //     this.getAllVitamine();
        //   }
        // });
      }
    getAllVitamine() {
        this.httpClient.get<Vitamine[]>(Konstanten.restApiEndpoint + "/api/lebensmittel").subscribe(
          (response: any[]) => {
            this.vitaminliste = response.map(item => ({ ...item, detailRow: true }));
    
          },
          (error: any) => {
            console.error('Error fetching Vitamine:', error);
          }
        );
      }
        searchLebensmittel(name: string) {
            const headers = new HttpHeaders({
            'Content-Type': 'text/plain'
            });
            this.httpClient.post<Vitamine[]>(Konstanten.restApiEndpoint + "/api/lebensmittel/search", name, { headers }).subscribe(
            (response: any[]) => {
                this.vitaminliste = response.map(item => ({ ...item, detailRow: true }));
            },
            (error: any) => {
                console.error('Error searching Lebensmittel:', error);
            }
            );
        }
}
