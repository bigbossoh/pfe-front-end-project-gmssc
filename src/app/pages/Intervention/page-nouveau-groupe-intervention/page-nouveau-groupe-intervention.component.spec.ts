import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauGroupeInterventionComponent } from './page-nouveau-groupe-intervention.component';

describe('PageNouveauGroupeInterventionComponent', () => {
  let component: PageNouveauGroupeInterventionComponent;
  let fixture: ComponentFixture<PageNouveauGroupeInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauGroupeInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveauGroupeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
