import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscriptionSocieteMaintenanceComponent } from './page-inscription-societe-maintenance.component';

describe('PageInscriptionSocieteMaintenanceComponent', () => {
  let component: PageInscriptionSocieteMaintenanceComponent;
  let fixture: ComponentFixture<PageInscriptionSocieteMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInscriptionSocieteMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInscriptionSocieteMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
