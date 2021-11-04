import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauEquipementComponent } from './page-nouveau-equipement.component';

describe('PageNouveauEquipementComponent', () => {
  let component: PageNouveauEquipementComponent;
  let fixture: ComponentFixture<PageNouveauEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauEquipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveauEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
