import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquipementComponent } from './page-equipement.component';

describe('PageEquipementComponent', () => {
  let component: PageEquipementComponent;
  let fixture: ComponentFixture<PageEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEquipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
