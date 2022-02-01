import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelleMaintenanceCorrectiveComponent } from './page-nouvelle-maintenance-corrective.component';

describe('PageNouvelleMaintenanceCorrectiveComponent', () => {
  let component: PageNouvelleMaintenanceCorrectiveComponent;
  let fixture: ComponentFixture<PageNouvelleMaintenanceCorrectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvelleMaintenanceCorrectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvelleMaintenanceCorrectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
