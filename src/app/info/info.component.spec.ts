import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Lebensmittel } from '../model/lebensmittel.model';
import { Konstanten } from '../konstanten';



  describe('InfoComponent', () => {
    let component: InfoComponent;
    let fixture: ComponentFixture<InfoComponent>;
    let httpTestingController: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, InfoComponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(InfoComponent);
      component = fixture.componentInstance;
      httpTestingController = TestBed.inject(HttpTestingController);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should fetch all Lebensmittel and set anzahlLebensmittel', () => {
      const mockLebensmittel: Lebensmittel[] = [
        { id: '1', name: 'Apfel', kalorien: 52, vitamine: [], gewicht: 150 },
        { id: '2', name: 'Banane', kalorien: 89, vitamine: [], gewicht: 120 }
      ];

      component.getAllLebensmittel();

      const req = httpTestingController.expectOne(Konstanten.restApiEndpoint + '/api/lebensmittel');
      expect(req.request.method).toEqual('GET');
      req.flush(mockLebensmittel);

      expect(component.anzahlLebensmittel).toEqual(mockLebensmittel.length);
    });

    it('should handle error when fetching Lebensmittel', () => {
      const consoleSpy = spyOn(console, 'error');

      component.getAllLebensmittel();

      const req = httpTestingController.expectOne(Konstanten.restApiEndpoint + '/api/lebensmittel');
      req.flush('Error fetching Lebensmittel', { status: 500, statusText: 'Server Error' });
      
      
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching Lebensmittel:', jasmine.any(Object));
    });

    afterEach(() => {
      httpTestingController.verify();
    });
  });

