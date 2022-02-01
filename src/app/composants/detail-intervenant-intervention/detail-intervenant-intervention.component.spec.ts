import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIntervenantInterventionComponent } from './detail-intervenant-intervention.component';

describe('DetailIntervenantInterventionComponent', () => {
  let component: DetailIntervenantInterventionComponent;
  let fixture: ComponentFixture<DetailIntervenantInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIntervenantInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIntervenantInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
