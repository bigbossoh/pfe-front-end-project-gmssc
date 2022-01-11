import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroupeInterventionComponent } from './page-groupe-intervention.component';

describe('PageGroupeInterventionComponent', () => {
  let component: PageGroupeInterventionComponent;
  let fixture: ComponentFixture<PageGroupeInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGroupeInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroupeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
