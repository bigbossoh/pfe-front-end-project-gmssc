import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroupeInterventionComponent } from './detail-groupe-intervention.component';

describe('DetailGroupeInterventionComponent', () => {
  let component: DetailGroupeInterventionComponent;
  let fixture: ComponentFixture<DetailGroupeInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGroupeInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGroupeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
