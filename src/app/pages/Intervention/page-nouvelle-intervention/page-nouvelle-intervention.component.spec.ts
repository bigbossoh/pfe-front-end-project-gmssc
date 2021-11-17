import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelleInterventionComponent } from './page-nouvelle-intervention.component';

describe('PageNouvelleInterventionComponent', () => {
  let component: PageNouvelleInterventionComponent;
  let fixture: ComponentFixture<PageNouvelleInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvelleInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvelleInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
