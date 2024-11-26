import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitamineComponent } from './vitamine.component';

describe('VitamineComponent', () => {
  let component: VitamineComponent;
  let fixture: ComponentFixture<VitamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitamineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
