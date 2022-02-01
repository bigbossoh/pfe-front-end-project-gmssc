import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelleMaintenancePreventiveComponent } from './page-nouvelle-maintenance-preventive.component';

describe('PageNouvelleMaintenancePreventiveComponent', () => {
  let component: PageNouvelleMaintenancePreventiveComponent;
  let fixture: ComponentFixture<PageNouvelleMaintenancePreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvelleMaintenancePreventiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvelleMaintenancePreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
