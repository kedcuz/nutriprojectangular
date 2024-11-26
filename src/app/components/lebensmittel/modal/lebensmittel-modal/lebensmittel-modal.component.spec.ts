import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebensmittelModalComponent } from './lebensmittel-modal.component';

describe('LebensmittelModalComponent', () => {
  let component: LebensmittelModalComponent;
  let fixture: ComponentFixture<LebensmittelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebensmittelModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LebensmittelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
